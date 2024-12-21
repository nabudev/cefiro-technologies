const { EmailTemplate } = require('@/components/email-template');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function POST(req) {
  try {
    const body = await req.json(); // Leer datos enviados en la solicitud
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Cefiro Technologies <onboarding@resend.dev>',
      to: ['cefirotechnologies@gmail.com'], // Se envía al email proporcionado
      subject: 'Tenes una nueva consulta',
      react: EmailTemplate({ nombre: name, correo: email, mensaje: message }),
    });

    if (error) {
      return new Response(JSON.stringify({ error: 'Error al enviar el correo.' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Correo enviado exitosamente.', data }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor.' }), { status: 500 });
  }
}

export { POST };

