function sendConfirmationEmail(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Configurar el servicio de envío de correo (SendGrid)
    const sendGridAPIKey = 'Xi4PMHhNTkCbwAfnT1fOEQ'; // Reemplaza con tu API Key de SendGrid
    const sendGridEmail = 'cristianarielchavez@outlook.com.ar'; // Reemplaza con tu dirección de correo electrónico
  
    // Crear el objeto de datos para el correo electrónico
    const emailData = {
      personalizations: [
        {
          to: [{ email: email }],
          subject: 'Confirmación de Asistencia al Cumpleaños',
        },
      ],
      from: { email: sendGridEmail },
      content: [
        {
          type: 'text/plain',
          value: `¡Hola ${name}!\n\nGracias por confirmar tu asistencia al cumpleaños de Lisandro. ¡Te esperamos con muchas sorpresas!\n\nAtentamente,\nCris, Dani y Lichis`,
        },
      ],
    };
  
    // Realizar la petición HTTP para enviar el correo
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sendGridAPIKey}`,
      },
      body: JSON.stringify(emailData),
    })
      .then(response => {
        if (response.ok) {
          // El correo se envió correctamente
          alert('¡Tu confirmación de asistencia ha sido enviada por correo electrónico!');
        } else {
          // Ocurrió un error al enviar el correo
          alert('Ocurrió un error al enviar la confirmación de asistencia. Por favor, inténtalo nuevamente más tarde.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al enviar la confirmación de asistencia. Por favor, inténtalo nuevamente más tarde.');
      });
  }
  


    //Recuerda reemplazar 'TU_API_KEY_SENDGRID' con tu propia API Key de SendGrid y 'cristianarielchavez@outlook.com.ar' con tu propia dirección de correo electrónico.

    //Este código se encarga de enviar el correo electrónico de confirmación utilizando la API de SendGrid. Asegúrate de tener una cuenta en SendGrid y obtener tus propias credenciales de API para que funcione correctamente.

