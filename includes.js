// Header and footer are pre-rendered into every page by scripts/build-site.js.
document.addEventListener("DOMContentLoaded", function () {
  const contactContainer = document.querySelector("#contact-container");

  function injectContent() {
    addStickyContactButton();
    setActiveStates();
    trackContactClicks();
    if (document.getElementById("contactForm")) {
      initContactForm();
    }

    const hasPreRenderedContact =
      (contactContainer && contactContainer.querySelector("section#contact")) ||
      (document.querySelector("main section#contact") &&
        document.getElementById("contactForm"));

    if (contactContainer && !hasPreRenderedContact) {
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

function trackEvent(name, params) {
  if (typeof window.gtag !== "function") return;
  window.gtag(
    "event",
    name,
    Object.assign({ language: document.documentElement.lang }, params)
  );
}

/** GA4 events for every way a family can reach us (mark them as key events in GA4). */
function trackContactClicks() {
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href");
    if (href.startsWith("tel:")) {
      trackEvent("click_call", { link_url: href });
    } else if (href.startsWith("mailto:")) {
      trackEvent("click_email", { link_url: href });
    } else if (href.includes("wa.me/")) {
      trackEvent("click_whatsapp", { link_url: href });
    } else if (href.startsWith("viber:")) {
      trackEvent("click_viber", { link_url: href });
    }
  });
}

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

    if (typeof window.emailjs === "undefined") {
      alert(
        "Forma se još učitava. Pokušajte ponovo za nekoliko sekundi ili nas pozovite na +381 64 249 28 49."
      );
      return;
    }

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
        trackEvent("generate_lead", { form_id: "contactForm" });
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

  const labels = {
    de: { call: "Rufen Sie uns an", contact: "Kontakt", href: "/de/kontakt" },
    en: { call: "Call us", contact: "Contact us", href: "/en/contact" },
  }[document.documentElement.lang] || { call: "Pozovite nas", contact: "Kontaktirajte nas", href: "/contact" };

  const stickyButton = document.createElement("div");
  stickyButton.className = "sticky-contact-button";
  stickyButton.innerHTML =
    '<a href="tel:+381642492849" class="btn btn-primary btn-lg sticky-phone-number" aria-label="' + labels.call + ': +381 64 249 28 49">' +
    '<i class="bi bi-telephone-fill" aria-hidden="true"></i>' +
    '<span class="sticky-phone-number__text">+381 64 249 28 49</span></a>' +
    '<a href="' + labels.href + '" class="btn btn-success btn-lg">' + labels.contact + '</a>';
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
  } else if (currentPath.includes("/francuska")) {
    document.querySelector('a[href="/francuska"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/hrvatska")) {
    document.querySelector('a[href="/hrvatska"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/crna-gora")) {
    document.querySelector('a[href="/crna-gora"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/grcka")) {
    document.querySelector('a[href="/grcka"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  } else if (currentPath.includes("/norveska")) {
    document.querySelector('a[href="/norveska"]')?.classList.add("active");
    document.querySelector(".dropdown-toggle")?.classList.add("active");
  }
}
