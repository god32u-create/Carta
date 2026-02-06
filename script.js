const noBtn = document.querySelector('#no-btn');
const yesBtn = document.querySelector('#yes-btn');
const mainCard = document.querySelector('#main-card');
const successCard = document.querySelector('#success-card');
// 👇 NUEVO: Seleccionamos el audio
const audio = document.querySelector('#celebration-audio');

// Función para mover el botón "No"
noBtn.addEventListener('mouseover', () => {
    // Usamos window.innerWidth y window.innerHeight para asegurar que se mueva por toda la pantalla
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; // Usamos 'fixed' para que se mueva relativo a la ventana
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Acción al presionar "Sí"
yesBtn.addEventListener('click', () => {
    mainCard.classList.add('hidden');
    successCard.classList.remove('hidden');
    
    // Forzamos al vídeo a estar disponible
    video.muted = false; 
    
    // Usamos una promesa para manejar errores en móviles
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("El móvil bloqueó el auto-play, reintentando...");
            // Plan B: Si falla, intentamos reproducirlo aunque sea sin sonido (o pedimos otro clic)
            video.muted = true;
            video.play();
        });
    }
});

