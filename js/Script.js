
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.nav-link');
  const currentUrl = window.location.href;

  links.forEach(link => {
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});



  
   // Actualiza el nombre del animal en el modal
document.querySelectorAll('.btn-adoptar').forEach(btn => {
  btn.addEventListener('click', function() {
    const nombre = this.getAttribute('data-animal');
    document.getElementById('modalAdoptarLabel').textContent = `Formulario de Adopción - ${nombre} 🐾`;
    document.getElementById('animalSeleccionado').value = nombre;
  });
});

// Mostrar alerta al enviar formulario
document.getElementById('formAdopcion').addEventListener('submit', function(e) {
  e.preventDefault();

  const animal = document.getElementById('animalSeleccionado').value; // ✅ corregido

  const modal = bootstrap.Modal.getInstance(document.getElementById('modalAdoptar'));
  modal.hide();

  const alerta = document.getElementById('alertaExito');
  document.getElementById('alertaMensaje').innerHTML =
    `🐾 <strong>¡Gracias por tu solicitud para adoptar a ${animal}!</strong> Nos pondremos en contacto contigo pronto ❤️`;

  alerta.classList.remove('d-none');

  setTimeout(() => alerta.classList.add('d-none'), 4000);
  this.reset();
});




const form = document.getElementById('contactForm');

form.addEventListener('mousemove', (e) => {
  const rect = form.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;

  form.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

form.addEventListener('mouseleave', () => {
  form.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

const ubicacionCard = document.getElementById('ubicacionCard');

ubicacionCard.addEventListener('mousemove', (e) => {
  const rect = ubicacionCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 8;
  const rotateY = ((x - centerX) / centerX) * 8;

  ubicacionCard.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

ubicacionCard.addEventListener('mouseleave', () => {
  ubicacionCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
});


