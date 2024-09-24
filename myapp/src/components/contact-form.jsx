'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export function ContactFormJsx() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    // Aquí se realiza el envío directo a FormSubmit
    const form = document.createElement('form');
    form.setAttribute('action', 'https://formsubmit.co/nabudev01@gmail.com'); // Cambia por tu email registrado en FormSubmit
    form.setAttribute('method', 'POST');
    form.setAttribute('style', 'display:none');

    const inputs = Object.keys(data).map(key => {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', key);
      input.setAttribute('value', data[key]);
      return input;
    });

    inputs.forEach(input => form.appendChild(input));
    document.body.appendChild(form);
    form.submit();

    setSubmitMessage('¡Gracias por contactarnos! Te responderemos pronto.');
    setIsSubmitting(false);
  };

  return (
    (<div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Contáctanos para solicitar cotización</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Tú nombre</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Este campo es requerido' })}
              className="w-full p-2 border rounded" />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Tú email</label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Dirección de email inválida'
                }
              })}
              className="w-full p-2 border rounded" />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Describe tu consulta</label>
            <textarea
              id="message"
              {...register('message', { required: 'Este campo es requerido' })}
              className="w-full p-2 border rounded"
              rows="4"></textarea>
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300"
            disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
          {submitMessage && <p className="mt-4 text-green-600">{submitMessage}</p>}
        </form>
      </div>
    </div>)
  );
}