import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle, Mail, User, MessageSquare, Users } from 'lucide-react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Input sanitization - prevents XSS by escaping HTML entities
  const sanitizeInput = (input) => {
    const element = document.createElement('div');
    element.textContent = input;
    return element.innerHTML;
  };

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.attendance) {
      newErrors.attendance = 'Please select your attendance status';
    }

    if (formData.message.length > 500) {
      newErrors.message = 'Message must be less than 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Sanitize input as user types
    const sanitizedValue = sanitizeInput(value);
    
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - Replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In production, send sanitized data to backend
      console.log('Sanitized form data:', {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        attendance: sanitizeInput(formData.attendance),
        message: sanitizeInput(formData.message),
      });

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        attendance: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-champagne-50 relative overflow-hidden"
      aria-labelledby="rsvp-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-roseGold-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-burgundy-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <Mail className="w-12 h-12 text-roseGold-500" />
            </motion.div>
            
            <h2
              id="rsvp-heading"
              className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-burgundy-900 mb-6"
            >
              RSVP
            </h2>
            
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              We would be honored by your presence. Please let us know if you can join us 
              in celebrating our special day.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center font-lato font-medium text-burgundy-900 mb-2"
                >
                  <User className="w-4 h-4 mr-2" />
                  Full Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300 font-lato focus:outline-none focus:ring-2 focus:ring-roseGold-400 ${
                    errors.name
                      ? 'border-red-400 bg-red-50'
                      : 'border-champagne-300 bg-white/50 focus:border-roseGold-400'
                  }`}
                  placeholder="John & Jane Doe"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  maxLength={100}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="name-error"
                    className="mt-2 text-sm text-red-600 flex items-center"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center font-lato font-medium text-burgundy-900 mb-2"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300 font-lato focus:outline-none focus:ring-2 focus:ring-roseGold-400 ${
                    errors.email
                      ? 'border-red-400 bg-red-50'
                      : 'border-champagne-300 bg-white/50 focus:border-roseGold-400'
                  }`}
                  placeholder="johndoe@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="email-error"
                    className="mt-2 text-sm text-red-600 flex items-center"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Attendance Field */}
              <div>
                <label
                  htmlFor="attendance"
                  className="flex items-center font-lato font-medium text-burgundy-900 mb-2"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Attendance <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="attendance"
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300 font-lato focus:outline-none focus:ring-2 focus:ring-roseGold-400 ${
                    errors.attendance
                      ? 'border-red-400 bg-red-50'
                      : 'border-champagne-300 bg-white/50 focus:border-roseGold-400'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.attendance}
                  aria-describedby={errors.attendance ? 'attendance-error' : undefined}
                >
                  <option value="">Please select...</option>
                  <option value="yes">Joyfully Accepts</option>
                  <option value="no">Regretfully Declines</option>
                  <option value="maybe">Awaiting Confirmation</option>
                </select>
                {errors.attendance && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="attendance-error"
                    className="mt-2 text-sm text-red-600 flex items-center"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.attendance}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="flex items-center font-lato font-medium text-burgundy-900 mb-2"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Your Message <span className="text-gray-500 text-sm ml-2">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300 font-lato focus:outline-none focus:ring-2 focus:ring-roseGold-400 resize-none ${
                    errors.message
                      ? 'border-red-400 bg-red-50'
                      : 'border-champagne-300 bg-white/50 focus:border-roseGold-400'
                  }`}
                  placeholder="Share your well wishes or special requests..."
                  aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                  maxLength={500}
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.message ? (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      id="message-error"
                      className="text-sm text-red-600 flex items-center"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </motion.p>
                  ) : (
                    <p id="message-hint" className="text-sm text-gray-500">
                      We'd love to hear from you
                    </p>
                  )}
                  <p className="text-sm text-gray-500">
                    {formData.message.length}/500
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full py-4 px-8 rounded-xl font-lato font-semibold text-white uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-burgundy-900 to-roseGold-600 hover:shadow-xl hover:shadow-roseGold-300/50'
                }`}
                aria-label={isSubmitting ? 'Submitting form' : 'Submit RSVP form'}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send RSVP</span>
                  </>
                )}
              </motion.button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center space-x-3"
                  role="alert"
                  aria-live="polite"
                >
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-lato font-semibold text-green-800">
                      Thank you for your response!
                    </p>
                    <p className="font-lato text-sm text-green-700">
                      We've received your RSVP and look forward to celebrating with you.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center space-x-3"
                  role="alert"
                  aria-live="assertive"
                >
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-lato font-semibold text-red-800">
                      Oops! Something went wrong.
                    </p>
                    <p className="font-lato text-sm text-red-700">
                      Please try again or contact us directly.
                    </p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
