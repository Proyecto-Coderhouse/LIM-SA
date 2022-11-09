// ================== FUNCIONES ============================ //

// Envio email a trves de emailjs

function envio(nombre, apellido, email, mensaje){
  
  emailjs.send("Mirtha", "template_5x7yshv", {
    form_nombre: nombre,
    form_apellido: apellido,
    form_email: email,
    message: mensaje,
  })
  .then(function(response) {
    if(response.text === 'OK'){
        console.log('El correo se ha enviado de forma exitosa');
    }
   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
  }, function(err) {
    console.log('Ocurrió un problema al enviar el correo');
   console.log("FAILED. error=", err);
  });

  return
}



// =============================== SCRIPT ============================= //


// declaro los campos

const nombre = document.getElementById("form_nombre")
const apellido = document.getElementById("form_apellido")
const email = document.getElementById("form_email")
const mensaje = document.getElementById("form_mensaje")
const enviar = document.getElementById("enviar")



// ============= Envio email ================================= //
enviar.addEventListener('click', (e) => {
  e.preventDefault()
    
  if(nombre.value != ''  &  apellido.value != '' &  email.value != '' & mensaje.value != ''){

    envio(nombre.value, apellido.value, email.value, mensaje.value)

  } else {

    // aqui va que pasa cuando faltan datos
    
  }


})
