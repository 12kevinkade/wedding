// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(imgElement) {
    lightbox.style.display = 'flex';
    // Small delay to allow display:flex to apply before opacity transition
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
    lightboxImg.src = imgElement.src;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300); // Match CSS transition duration
    document.body.style.overflow = 'auto';
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
function handleContact(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate sending
    setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = '#10b981'; // Success green
        e.target.reset();

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = ''; // Reset to default
        }, 3000);
    }, 1500);
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.padding = '1rem 5%';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.padding = '1.5rem 5%';
    }
});
