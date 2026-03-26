// src/components/Contact.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSending(true);

      // Pulling your actual keys from the .env file in the root folder
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs.sendForm(
        serviceId, 
        templateId, 
        form.current, 
        publicKey
      )
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
          console.error('Email sending failed:', error.text);
          alert("Something went wrong. Please check your EmailJS credentials.");
      })
      .finally(() => {
          setIsSending(false);
          // Hide success message after 4 seconds
          setTimeout(() => setIsSubmitted(false), 4000);
      });
    }
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        {isSubmitted ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-2xl font-semibold text-green-500 mb-2">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for reaching out. I'll check my inbox and get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-900 dark:text-white`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-primary transition-all text-gray-900 dark:text-white`}
                  placeholder="you@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-gray-900 dark:text-white`}
                placeholder="Let's build something together..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* --- NEW ANIMATED SUBMIT BUTTON --- */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSending}
              className={`relative overflow-hidden group w-full py-4 font-bold rounded-xl shadow-lg transition-all text-white ${
                isSending ? 'bg-blue-400 cursor-not-allowed' : 'bg-primary shadow-primary/30'
              }`}
            >
              {/* Only show the slide effect if it's NOT actively sending */}
              {!isSending && (
                <span className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              )}
              
              {/* Text and Icon */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSending ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend size={20} /> Send Message
                  </>
                )}
              </span>
            </motion.button>
            {/* ---------------------------------- */}
            
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;