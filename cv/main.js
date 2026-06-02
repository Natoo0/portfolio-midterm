/* --- THEME TOGGLE LOGIC --- */
const toggleSwitch = document.querySelector('#checkbox');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }    
}

if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}

// Check preference on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    if (toggleSwitch) {
        toggleSwitch.checked = true;
    }
}

/* --- TECH STACK VIEW NAVIGATION --- */
const viewAllBtn = document.getElementById('view-all-stack');
const backHomeBtn = document.getElementById('back-home');
const homeView = document.getElementById('home-view');
const techStackView = document.getElementById('tech-stack-view');

if (viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        homeView.style.display = 'none';
        techStackView.style.display = 'block';
        window.scrollTo(0, 0); 
    });
}

if (backHomeBtn) {
    backHomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        techStackView.style.display = 'none';
        homeView.style.display = 'block';
        window.scrollTo(0, 0);
    });
}

/* --- LIGHTBOX (GALLERY ZOOM) LOGIC --- */
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = imageSrc;
        lightbox.style.display = 'flex';
        
        // Small delay to trigger the scale(1) transition in CSS
        setTimeout(() => {
            lightboxImg.style.transform = 'scale(1)';
        }, 10);
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightbox.style.display = 'none';
        lightboxImg.style.transform = 'scale(0.9)'; // Reset scale for next opening
    }
}