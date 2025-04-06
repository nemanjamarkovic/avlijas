document.addEventListener('DOMContentLoaded', function() {
    // Get the header and footer container elements
    const headerContainer = document.querySelector('#header-container');
    const footerContainer = document.querySelector('#footer-container');

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
          <span class="me-3"
            ><i class="bi bi-telephone-fill"></i> +381 XX XXX XXX</span
          >
          <span
            ><i class="bi bi-envelope-fill"></i>
            kontakt@transportpokojnika.com</span
          >
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

        // Set active states after content is loaded
        setActiveStates();
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