import './ContactoForm.css';

function ContactoForm({ title }) {
  return (
    <>
      <div className="card">
        <span className="title">{title}</span>
        <form className="form" action="send_email.php" method="post">
          <div className="group">
            <input
              placeholder=""
              type="text"
              name="first_name" // Coincide con el nombre esperado en el script PHP
              required
            />
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className="group">
            <input
              placeholder=""
              type="phone"
              id="telefono"
              name="telephone" // Coincide con el nombre esperado en el script PHP
            />
            <label htmlFor="telefono">Telefono</label>
          </div>
          <div className="group">
            <input
              placeholder=""
              type="email"
              id="email"
              name="email" // Coincide con el nombre esperado en el script PHP
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="group">
            <label htmlFor="comentario">Consulta</label>
            <textarea
              placeholder=""
              id="comentario"
              name="message" // Coincide con el nombre esperado en el script PHP
              rows={5}
              required
            />
          </div>
          <div className="group btnsubmit-div">
            <button type="submit">Solicitar Asesoría</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactoForm;
