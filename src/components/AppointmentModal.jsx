import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';

export default function AppointmentModal({ isOpen, onClose }) {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const { error } = await supabase
        .from('nestoricleads_appointment')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            service: 'Appointment Request',
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      reset();
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error saving appointment:', error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div key="appointment-modal" className="fixed inset-0 z-[99] flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-md bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 relative pointer-events-auto shadow-2xl m-4"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#A1A1AA] hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">Book an Appointment</h3>

            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#7A4DBE]/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-[#7A4DBE]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Request Received</h4>
                <p className="text-[#A1A1AA]">We'll be in touch shortly to schedule your appointment.</p>
              </div>
            ) : (
              <>
                <p className="text-[#A1A1AA] text-sm mb-6">Fill out the form below and our team will get back to you shortly.</p>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Name</label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7A4DBE] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Email</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7A4DBE] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Phone</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="1234567890"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit phone number",
                        },
                      })}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "");
                      }}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7A4DBE] transition-colors"
                    />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full h-12 mt-4 flex items-center justify-center rounded-lg bg-[#7A4DBE] text-white font-semibold hover:bg-[#6a3da8] transition-colors shadow-lg shadow-[#7A4DBE]/25 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed">
                    {isSubmitting ? <Loader2 className="animate-spin" size={24} /> : 'Submit Request'}
                  </button>
                  {submitError && <p className="text-red-400 text-sm text-center mt-2">{submitError}</p>}
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
