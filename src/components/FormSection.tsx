import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import '../styles/TaskSection.scss';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const FormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        return !/^\S+@\S+\.\S+$/.test(value) ? 'Valid email is required' : '';
      case 'phone':
        return !/^\d{10}$/.test(value) ? 'Phone must be 10 digits' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;
    
    Object.entries(formData).forEach(([key, value]) => {
      const error = validate(key, value as string);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        hasErrors = true;
      }
    });
    
    setErrors(newErrors);
    setTouched({name: true, email: true, phone: true, message: true});
    
    if (!hasErrors) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form
      setFormData({name: '', email: '', phone: '', message: ''});
      setTouched({});
      
      // Reset submission message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="form" className="task-section alternate">
      <div className="container">
        <div className="section-header">
          <span className="task-number">Task 6</span>
          <h2>Form Validation</h2>
          <p>Creating interactive forms with real-time validation</p>
        </div>
        <div className="task-content reverse">
          <div className="task-preview">
            <div className="form-demo">
              {submitted ? (
                <div className="success-message">
                  <Check size={24} />
                  <h3>Form Submitted Successfully!</h3>
                  <p>Thank you for your submission.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.name && errors.name ? 'error' : ''}
                    />
                    {touched.name && errors.name && (
                      <span className="error-text"><X size={12} /> {errors.name}</span>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.email && errors.email ? 'error' : ''}
                    />
                    {touched.email && errors.email && (
                      <span className="error-text"><X size={12} /> {errors.email}</span>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone (10 digits)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.phone && errors.phone ? 'error' : ''}
                    />
                    {touched.phone && errors.phone && (
                      <span className="error-text"><X size={12} /> {errors.phone}</span>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.message && errors.message ? 'error' : ''}
                    ></textarea>
                    {touched.message && errors.message && (
                      <span className="error-text"><X size={12} /> {errors.message}</span>
                    )}
                  </div>
                  
                  <button type="submit" className="submit-btn">Submit</button>
                </form>
              )}
            </div>
          </div>
          <div className="task-description">
            <h3>What You'll Learn</h3>
            <p>
              In this task, you'll create and style a form with real-time client-side validation.
              You'll learn how to check user inputs as they type, provide immediate feedback for
              errors, and ensure data is valid before submission.
            </p>
            <div className="task-skills">
              <span>Form Design</span>
              <span>Input Validation</span>
              <span>Event Handling</span>
              <span>Regular Expressions</span>
              <span>User Feedback</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;