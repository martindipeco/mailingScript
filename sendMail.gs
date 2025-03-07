function enviarEmailConcursantes() {

  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]; // Gets the first sheet of the spreadsheet
  
  var rango = hoja.getDataRange();
  var valores = rango.getValues();
  var correoBcc = "mdipeco@aisenson.com.ar"
  
  for (var i = 1; i < valores.length; i++) {  
    var nombre = valores[i][0];     // Primera columna: Nombre
    var correo = valores[i][3];    // Cuarta columna: Correo 

    var asunto = "Fecha de entrega concurso de estudiantes AISENSON - asnNoise";
    
    var mensajeHTML = `<p>Hola ${nombre},</p>
      <p>Te escribimos para recordarte que el plazo de entrega del concurso "La fachada como espacio y como envolvente" es el viernes 14 de marzo.</p>

      <p><a href="https://asnnoise.com.ar/la-fachada-como-espacio-y-como-envolvente/">En el blog de asn/Noise se publicaron las respuestas a las consultas formuladas.</a> Podés leerlas en el comentario a la entrada del concurso </p>

      <p>Estamos entusiasmados por ver tu propuesta</p>

      <p>Cuando la tengas lista, compilá todas las láminas en un único PDF, que no supere los 25 mb, y mándalo por mail a esta dirección (hola@asnnoise.com.ar)</p>

      <p>Saludos!</p>
      <p>Equipo asn/Noise - Aisenson Arquitectos </p>`;
    
    MailApp.sendEmail(correo, asunto, '', {bcc: correoBcc, htmlBody: mensajeHTML});
  }
}
