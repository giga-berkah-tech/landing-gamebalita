import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [result, setResult] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'abcc68e4-a591-4bbf-8fcb-8ee3303d1b12');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
      setTimeout(() => {
        setResult('');
      }, 3000);
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto scroll-mt-56"
      id="contact"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-1 sm:grid-cols-1 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Punya Pertanyaan? <strong>Sapa Kami Yuk!</strong>
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Kirimkan pesanmu! Kami siap membantu Ayah, Bunda, dan si kecil
              belajar dengan lebih ceria.
            </p>

            <form onSubmit={onSubmit} className="w-full space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Alamat Email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tulis pesanmu di sini..."
                required
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              ></textarea>

              {/* Honeypot Spam Protection (Hidden) */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
              />

              <button
                type="submit"
                className="py-3 px-12 lg:py-4 lg:px-16 font-semibold rounded-full bg-purple-500 text-white-500 hover:shadow-purple-md transition-all outline-none"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Contact;
