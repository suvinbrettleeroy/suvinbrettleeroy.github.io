
import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const revealRef = useScrollReveal();
  const recipientEmail = 'suvinbrettleeroy@gmail.com';
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    if (['name', 'email', 'message'].includes(name) && !value.trim()) {
      error = 'This field is required';
    } else if (name === 'email' && value && !validateEmail(value)) {
      error = 'Please enter a valid email address';
    }
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name as keyof FormState]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormState]);
      if (error) (newErrors as any)[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.name}`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
      setErrors({});
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }
  };

  const contactItems = [
    { 
      label: 'My Base', 
      value: 'Padur, OMR Road, Tamil Nadu', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
    { 
      label: 'Direct Line', 
      value: '+91-6374959021', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      )
    },
    { 
      label: 'Professional Email', 
      value: 'suvinbrettleeroy@gmail.com', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    }
  ];

  const socialLinks = [
    { name: 'LI', full: 'LinkedIn', url: 'https://www.linkedin.com/in/suvin-brettlee-roy-b-6670b9314/' },
    { name: 'GH', full: 'GitHub', url: 'https://github.com/suvinbrettleeroy' }
  ];

  const inputClasses = (name: keyof FormErrors) => `
    w-full bg-transparent border-b py-5 text-lg transition-all placeholder:text-current/20 focus:outline-none font-medium
    ${touched[name] && errors[name] 
      ? 'border-red-500/50 text-red-500 placeholder:text-red-300' 
      : `border-current/10 focus:border-${isDarkMode ? 'white' : 'black'}`}
  `;

  return (
    <section id="contact" className={`py-40 px-6 relative overflow-hidden ${isDarkMode ? 'bg-[#000000]' : 'bg-slate-50'}`}>
      {/* Monochrome Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-5">
        <div className={`absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 border ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
          {[...Array(144)].map((_, i) => <div key={i} className={`border-[0.5px] ${isDarkMode ? 'border-white/20' : 'border-black/20'}`}></div>)}
        </div>
      </div>

      <div ref={revealRef} className="max-w-7xl mx-auto fade-in-up relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column: Vision & Contact Info */}
          <div className="lg:w-1/2 space-y-16">
            <div className="space-y-6">
              <span className={`${isDarkMode ? 'text-white/40' : 'text-slate-400'} font-black uppercase tracking-[0.4em] text-xs shimmer`}>Collaboration</span>
              <h2 className={`text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-glow ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Let's discuss <br /> your project
              </h2>
              <p className="text-xl opacity-50 max-w-md font-medium leading-relaxed pt-4">
                Share your name, email, and message. It will be sent directly to my inbox.
              </p>
            </div>

            <div className="grid gap-10">
              {contactItems.map((item, idx) => (
                <div key={idx} className="group flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                    isDarkMode ? 'bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black' : 'bg-white border border-black/5 shadow-xl group-hover:bg-black group-hover:text-white'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-1">{item.label}</div>
                    <div className="text-xl font-bold tracking-tight">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-10">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-300 hover:-translate-y-2 ${
                    isDarkMode ? 'bg-white/5 border border-white/10 hover:border-white hover:text-white' : 'bg-white border border-black/10 hover:border-black hover:text-black shadow-sm'
                  }`}
                  title={social.full}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Monochrome Form */}
          <div className="lg:w-1/2 relative">
            <div className={`p-10 md:p-16 rounded-[4rem] border transition-all duration-1000 ${
              isDarkMode 
              ? 'bg-[#121212]/40 border-white/10 backdrop-blur-3xl shadow-2xl' 
              : 'bg-white border-black/5 shadow-xl'
            }`}>
              
              {/* Success Message Overlay */}
              {submitStatus === 'success' && (
                <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center rounded-[4rem] backdrop-blur-3xl transition-all duration-700 ${isDarkMode ? 'bg-[#121212]/95' : 'bg-white/95'}`}>
                  <div className={`w-24 h-24 ${isDarkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-black'} rounded-full flex items-center justify-center mb-10`}>
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter mb-4">Transmission Success</h3>
                  <p className="text-lg opacity-50 font-medium mb-12">Your message has been sent directly to my email. Expect a response shortly.</p>
                  <button onClick={() => setSubmitStatus('idle')} className="font-black uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-8 opacity-40 hover:opacity-100">Return to console</button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="relative group">
                    <input name="name" type="text" placeholder="Name*" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={inputClasses('name')} />
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-500 group-focus-within:w-full`}></div>
                  </div>
                  <div className="relative group">
                    <input name="email" type="email" placeholder="Email*" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={inputClasses('email')} />
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-500 group-focus-within:w-full`}></div>
                  </div>
                </div>

                <div className="relative group">
                  <textarea name="message" placeholder="Message*" value={formData.message} onChange={handleChange} onBlur={handleBlur} rows={5} className={inputClasses('message') + ' resize-none'}></textarea>
                  <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-500 group-focus-within:w-full`}></div>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full group relative flex items-center justify-center gap-4 py-6 rounded-3xl font-black uppercase tracking-[0.25em] text-xs transition-all overflow-hidden shadow-2xl disabled:opacity-50 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? 'Synthesizing...' : 'Submit Signal'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
            
            {/* Monochrome Background Glow */}
            <div className={`absolute -z-10 -bottom-20 -right-20 w-80 h-80 ${isDarkMode ? 'bg-white' : 'bg-black'} opacity-5 blur-[120px] rounded-full pointer-events-none`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
