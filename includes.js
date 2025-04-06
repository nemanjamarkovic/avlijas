document.addEventListener('DOMContentLoaded', function() {
    // Get the header and footer container elements
    const headerContainer = document.querySelector('#header-container');
    const footerContainer = document.querySelector('#footer-container');
    // Look for a contact container
    const contactContainer = document.querySelector('#contact-container');

    console.log('Loading includes for:', window.location.pathname);
    
    // Function to inject content to containers
    function injectContent() {
        // Header content
        if (headerContainer) {
            headerContainer.innerHTML = `
<div class="top-bar py-2">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="contact-info">
          <span class="me-3">
            <a href="tel:+381XXXXXXXX" class="text-decoration-none">
              <i class="bi bi-telephone-fill"></i> +381 XX XXX XXX
            </a>
          </span>
          <span>
            <a href="mailto:kontakt@transportpokojnika.com" class="text-decoration-none">
              <i class="bi bi-envelope-fill"></i> kontakt@transportpokojnika.com
            </a>
          </span>
        </div>
      </div>
      <div class="col-md-6 text-end">
        <div class="working-hours">
          <span><i class="bi bi-clock-fill"></i> Dostupni 24/7</span>
        </div>
      </div>
    </div>
  </div>
</div>
<nav
  class="navbar navbar-expand-lg navbar-dark"
  role="navigation"
  aria-label="Main navigation"
>
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <i class="bi bi-building me-2"></i>
      <div>
        <span class="brand-name">Pogrebno preduzeće</span>
        <span class="brand-slogan d-block">Tradicija i poverenje</span>
      </div>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Početna</a>
        </li>
        <li class="nav-item dropdown medjunarodni-transport">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            id="medjunarodni-dropdown"
          >
            Medjunarodni Transport
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/nemacka">Prevoz iz Nemačke</a>
            </li>
            <li>
              <a class="dropdown-item" href="/austrija">Prevoz iz Austrije</a>
            </li>
            <li>
              <a class="dropdown-item" href="/svajcarska"
                >Prevoz iz Švajcarske</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="/#transport">Sve destinacije</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#showcase">Vozila</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#faq">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  /* Make dropdown menus mobile-friendly */
  @media screen and (max-width: 768px) {
    /* Increase tap target size for mobile */
    .nav-item,
    .dropdown-item {
      min-height: 44px;
      padding: 12px 15px;
      font-size: 16px;
    }

    /* Make sure dropdown items are visible when parent is tapped */
    .dropdown-menu {
      position: static;
      width: 100%;
      padding-left: 15px;
      box-shadow: none;
      display: none;
    }

    /* Add a toggle class for mobile dropdown visibility */
    .dropdown-menu.show {
      display: block;
    }

    /* Add a toggle button for subcategories */
    .dropdown-toggle::after {
      float: right;
      margin-top: 8px;
    }

    /* Specifically target Medjunarodni Transport dropdown */
    .medjunarodni-transport .dropdown-item {
      padding: 12px 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
</style>

<script>
  // Complete revamp of the mobile dropdown behavior
  document.addEventListener("DOMContentLoaded", function () {
    // Check if we're on a mobile device (either by width or touch capability)
    const isMobile = window.innerWidth <= 768 || "ontouchstart" in window;

    if (isMobile) {
      // Handle specifically the Medjunarodni Transport dropdown
      const medjunarodniBtns = document.querySelectorAll(
        ".medjunarodni-transport > .nav-link"
      );

      medjunarodniBtns.forEach(function (btn) {
        // Remove any Bootstrap data attributes that might interfere
        btn.removeAttribute("data-bs-toggle");
        btn.removeAttribute("data-bs-target");

        // Simple click handler directly on the button
        btn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();

          // Find the dropdown menu
          const menu = this.parentNode.querySelector(".dropdown-menu");

          // Toggle the show class
          if (menu.classList.contains("show")) {
            menu.classList.remove("show");
          } else {
            // Close all other dropdowns first
            document
              .querySelectorAll(".dropdown-menu.show")
              .forEach(function (openMenu) {
                openMenu.classList.remove("show");
              });

            // Show this dropdown
            menu.classList.add("show");
          }

          return false;
        };
      });

      // Add CSS to ensure dropdowns display properly
      const style = document.createElement("style");
      style.textContent = \`
        @media (max-width: 768px) {
          .dropdown-menu.show {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
          }
          
          .medjunarodni-transport .dropdown-menu {
            max-height: none !important;
            overflow: visible !important;
          }
        }
      \`;
      document.head.appendChild(style);

      // Close dropdowns when clicking outside
      document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
          document
            .querySelectorAll(".dropdown-menu.show")
            .forEach(function (menu) {
              menu.classList.remove("show");
            });
        }
      });
    }
  });
</script>
            `;
            console.log('Header content injected');
        }

        // Contact section - load from contact.html
        if (contactContainer) {
            // Add a loading indicator
            contactContainer.innerHTML = '<div class="text-center py-5"><div class="spinner-border" role="status"></div><p class="mt-2">Loading contact form...</p></div>';
            
            fetch('contact.html')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    contactContainer.innerHTML = data;
                    
                    // Add contact form functionality
                    initContactForm();
                    
                    // Add contact styles
                    addContactStyles();
                })
                .catch(error => {
                    console.error('Error loading contact section:', error);
                    contactContainer.innerHTML = '<div class="alert alert-danger my-5">Error loading contact form. Please refresh and try again.</div>';
                });
        }

        // Footer content
        if (footerContainer) {
            footerContainer.innerHTML = `
<footer class="bg-dark text-white py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4 mb-md-0">
        <h5>O nama</h5>
        <p>
          Profesionalno pogrebno preduzeće sa dugogodišnjim iskustvom u
          organizaciji međunarodnog transporta pokojnika.
        </p>
        <div class="mt-3 social-icons">
          <a href="#" class="text-white me-2"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-white me-2"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-white"><i class="bi bi-viber"></i></a>
        </div>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
        <h5>Kontakt</h5>
        <address class="mb-0">
          <p><i class="bi bi-geo-alt-fill me-2"></i>Adresa 123, Grad, Srbija</p>
          <p><i class="bi bi-telephone-fill me-2"></i>+381 XX XXX XXX</p>
          <p>
            <i class="bi bi-envelope-fill me-2"></i>kontakt@transportpokojnika.com
          </p>
        </address>
      </div>
      <div class="col-md-4">
        <h5>Brzi linkovi</h5>
        <ul class="list-unstyled">
          <li><a href="/" class="text-white">Početna</a></li>
          <li><a href="/#services" class="text-white">Usluge</a></li>
          <li><a href="/#faq" class="text-white">Često postavljana pitanja</a></li>
          <li><a href="/#contact" class="text-white">Kontakt</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container copyright mt-4 pt-3 border-top border-secondary">
    <p class="mb-0 text-center">
      &copy; <span id="current-year">2023</span> Transport Pokojnika. Sva prava
      zadržana.
    </p>
  </div>
</footer>

<script>
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
</script>
            `;
            console.log('Footer content injected');
        }
        
        // Add sticky contact button
        addStickyContactButton();
        
        // Set active states after content is loaded
        setActiveStates();
    }
    
    // Initialize contact form functionality
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            // Load EmailJS library
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
            document.head.appendChild(script);
            
            script.onload = function() {
                // Initialize EmailJS with your user ID
                emailjs.init("service_bmwfktw"); // Sign up at emailjs.com to get your user ID
            };
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Šalje se...';
                
                // Prepare template parameters
                const templateParams = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };
                
                // Send the email using EmailJS
                emailjs.send('SERVICE_ID', 'TEMPLATE_ID', templateParams)
                    .then(function() {
                        // Success message
                        alert('Hvala na poruci! Kontaktiraćemo vas u najkraćem mogućem roku.');
                        contactForm.reset();
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnText;
                    }, function(error) {
                        // Error handling
                        console.error('Error:', error);
                        alert('Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas kontaktirajte telefonom.');
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnText;
                    });
            });
        }
    }
    
    // Add contact section styles
    function addContactStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .contact-section {
                position: relative;
            }
            .contact-icon {
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .social-icons a {
                color: #495057;
                transition: color 0.3s ease;
            }
            .social-icons a:hover {
                color: #0d6efd;
            }
            .divider-custom {
                margin: 1.25rem 0 1.5rem;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .divider-custom .divider-custom-line {
                width: 100%;
                max-width: 7rem;
                height: 0.25rem;
                background-color: #dee2e6;
                border-radius: 1rem;
                border-color: #dee2e6;
            }
            .divider-custom .divider-custom-line:first-child {
                margin-right: 1rem;
            }
            .divider-custom .divider-custom-line:last-child {
                margin-left: 1rem;
            }
            .divider-custom .divider-custom-icon {
                color: #0d6efd;
                font-size: 1.5rem;
            }
            .map-container {
                height: 450px;
            }
            .map-container iframe {
                height: 100%;
            }
            @media (max-width: 768px) {
                .map-container {
                    height: 300px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Function to add sticky contact button
    function addStickyContactButton() {
        // Create the sticky button element
        const stickyButton = document.createElement('div');
        stickyButton.className = 'sticky-contact-button';
        stickyButton.innerHTML = `
            <a href="tel:+381XXXXXXXX" class="btn btn-primary btn-lg rounded-circle">
                <i class="bi bi-telephone-fill"></i>
            </a>
            <a href="#contact" class="btn btn-success btn-lg">
                Kontaktirajte nas
            </a>
        `;
        
        // Style the button
        const style = document.createElement('style');
        style.textContent = `
            .sticky-contact-button {
                position: fixed;
                bottom: 30px;
                right: 30px;
                z-index: 99;
                display: flex;
                flex-direction: column;
                gap: 10px;
                align-items: flex-end;
            }
            .sticky-contact-button .btn-primary {
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            }
            .sticky-contact-button .btn-success {
                padding: 10px 20px;
                font-weight: bold;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
                100% {
                    transform: scale(1);
                }
            }
            @media (max-width: 768px) {
                .sticky-contact-button {
                    bottom: 20px;
                    right: 20px;
                }
                .sticky-contact-button .btn-success {
                    font-size: 14px;
                }
            }
        `;
        
        // Add the styles and button to the document
        document.head.appendChild(style);
        document.body.appendChild(stickyButton);
    }

    // Inject the content directly
    injectContent();
});

function setActiveStates() {
    // Get current path
    const currentPath = window.location.pathname;
    
    // Remove all active classes first
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
        link.classList.remove('active');
    });
    
    // Set active states based on current path
    if (currentPath === '/' || currentPath === '/index.html') {
        document.querySelector('a[href="/"]')?.classList.add('active');
    } else if (currentPath.includes('/nemacka')) {
        document.querySelector('a[href="/nemacka"]')?.classList.add('active');
        document.querySelector('.dropdown-toggle')?.classList.add('active');
    } else if (currentPath.includes('/austrija')) {
        document.querySelector('a[href="/austrija"]')?.classList.add('active');
        document.querySelector('.dropdown-toggle')?.classList.add('active');
    } else if (currentPath.includes('/svajcarska')) {
        document.querySelector('a[href="/svajcarska"]')?.classList.add('active');
        document.querySelector('.dropdown-toggle')?.classList.add('active');
    }
} 