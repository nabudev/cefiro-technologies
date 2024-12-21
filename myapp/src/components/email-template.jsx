

export const EmailTemplate = ({ nombre, correo, mensaje }) => (
  <div>
    <h1>{nombre} te ha consultado!</h1>
    <h2>Correo electrónico del cliente: {correo}</h2>
    <h3>Consulta: {mensaje}</h3>

  </div>
);
