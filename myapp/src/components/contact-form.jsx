'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export function ContactFormJsx() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/cefirotechnologies@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message
        })
      });

      if (response.ok) {
        setSubmitMessage('¡Gracias por contactarnos! Te responderemos pronto.');
      } else {
        setSubmitMessage('Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitMessage('Ocurrió un error al enviar el mensaje. Intenta nuevamente.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="py-20 bg-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-center mb-8">¡Contactate con nostros!</h2>
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
      </div>
    </div>
  );
}