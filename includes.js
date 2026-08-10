document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.querySelector("#header-container");
  const footerContainer = document.querySelector("#footer-container");
  const contactContainer = document.querySelector("#contact-container");

  function loadPartial(url) {
    return fetch(url).then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }
      return response.text();
    });
  }

  function injectContent() {
    const tasks = [];

    if (headerContainer && !headerContainer.innerHTML.trim()) {
      tasks.push(
        loadPartial("/templates/partials/header.html").then(function (html) {
          headerContainer.innerHTML = html;
        })
      );
    }

    if (footerContainer && !footerContainer.innerHTML.trim()) {
      tasks.push(
        loadPartial("/templates/partials/footer.html").then(function (html) {
          footerContainer.innerHTML = html;
        })
      );
    }

    const afterPartials = function () {
      addStickyContactButton();
      setActiveStates();
      if (document.getElementById("contactForm")) {
        initContactForm();
      }
    };

    const hasPreRenderedContact =
      (contactContainer && contactContainer.querySelector("section#contact")) ||
      (document.querySelector("main section#contact") &&
        document.getElementById("contactForm"));

    if (contactContainer && !hasPreRenderedContact) {
      Promise.all(tasks)
        .then(function () {
          afterPartials();
          if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
              function (entries) {
                entries.forEach(function (entry) {
                  if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    loadContactSection(contactContainer);
                  }
                });
              },
              { rootMargin: "200px" }
            );
            observer.observe(contactContainer);
          } else {
            loadContactSection(contactContainer);
          }
        })
        .catch(afterPartials);
    } else {
      Promise.all(tasks).then(afterPartials).catch(afterPartials);
    }
  }

  function loadContactSection(container) {
    fetch("contact.html")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
        return response.text();
      })
      .then(function (data) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const contactSection = doc.querySelector("section#contact");
        if (contactSection) {
          container.innerHTML = contactSection.outerHTML;
        } else {
          const mainContent = doc.querySelector("main");
          container.innerHTML = mainContent ? mainContent.innerHTML : data;
        }
        initContactForm();
      })
      .catch(function (error) {
        console.error("Error loading contact section:", error);
        container.innerHTML =
          '<div class="alert alert-danger my-5">Error loading contact form. Please refresh and try again.</div>';
      });
  }

  injectContent();
});

(function () {
  if (window.__ga4Loaded) return;
  window.__ga4Loaded = true;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-9FMNRLMTK3";
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-9FMNRLMTK3");
})();

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm || contactForm.dataset.initialized) return;
  contactForm.dataset.initialized = "true";

  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
  document.head.appendChild(script);

  script.onload = function () {
    emailjs.init("yN59DEa4iJObN4zOM");
  };

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Šalje se...';

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_bmwfktw", "template_6lq0do3", templateParams).then(
      function () {
        alert(
          "Hvala na poruci! Kontaktiraćemo vas u najkraćem mogućem roku."
        );
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      },
      function () {
        alert(
          "Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas kontaktirajte telefonom."
        );
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    );
  });
}

function addStickyContactButton() {
  if (document.querySelector(".sticky-contact-button")) return;

  const stickyButton = document.createElement("div");
  stickyButton.className = "sticky-contact-button";
  stickyButton.innerHTML =
    '<a href="tel:+381642492849" class="btn btn-primary btn-lg sticky-phone-number" aria-label="Pozovite nas: +381 64 249 28 49">' +
    '<i class="bi bi-telephone-fill" aria-hidden="true"></i>' +
    '<span class="sticky-phone-number__text">+381 64 249 28 49</span></a>' +
    '<a href="/contact" class="btn btn-success btn-lg">Kontaktirajte nas</a>';
  document.body.appendChild(stickyButton);
}

function setActiveStates() {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".nav-link, .dropdown-item").forEach(function (link) {
    link.classList.remove("active");
  });

  if (currentPath === "/" || currentPath === "/index.html") {
    document.querySelector('a[href="/"]')?.classList.add("active");
  } else if (currentPath.includes("/nemacka")) {
    document.querySelector('a[href="/nemacka"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/austrija")) {
    document.querySelector('a[href="/austrija"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/svajcarska")) {
    document.querySelector('a[href="/svajcarska"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/italija")) {
    document.querySelector('a[href="/italija"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/spanija")) {
    document.querySelector('a[href="/spanija"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/svedska")) {
    document.querySelector('a[href="/svedska"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/danska")) {
    document.querySelector('a[href="/danska"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  }
}
