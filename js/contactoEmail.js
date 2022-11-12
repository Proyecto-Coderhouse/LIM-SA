// ================== FUNCIONES ============================ //

// Envio email a trves de emailjs

function validateEmail(email){
              
	// Define our regular expression.
	const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(email) ){ 
		return true;
	}else{
      toast("Por favor ingrese un email válido", "#f75e25", "#ff4000")
		return false;
	}
} 


function toast (mensaje, color1, color2) {

  Toastify({
    text: mensaje,
    duration: 4000,
    newWindow: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: `linear-gradient(to right, ${color1}, ${color2})`,
    },
    onClick: function(){} // Callback after click
  }).showToast();

}



function envio(nombre, apellido, email, mensaje){
  
  emailjs.send("Mirtha", "template_5x7yshv", {
    form_nombre: nombre,
    form_apellido: apellido,
    form_email: email,
    message: mensaje,
  })
  .then(function(response) {
    if(response.text === 'OK'){
   
      toast("Su mensaje se ha enviado correctamente", "#00b09b", "#96c93d")

      
    }
  
  }, function(err) {

    toast("Lo sentimos, su mensaje no se ha podido enviar. Intente más tarde", "#f75e25", "#ff4000")
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

const formulario = document.getElementById("formulario")


// ============= Envio email ================================= //
enviar.addEventListener('click', (e) => {
  e.preventDefault()
    
  if(nombre.value != ''  &  apellido.value != '' &  email.value != '' & mensaje.value != ''){

    if( validateEmail(email.value)) {
      envio(nombre.value, apellido.value, email.value, mensaje.value)
      formulario.reset()
    }
  
  } else {

    toast("Debe ingresar todos los datos", "#f75e25", "#ff4000")
    
  }

})