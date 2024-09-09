// Fixing date
let yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Make MOBILE NAVIGATION Work
let btnNavEl = document.querySelector(".btn-mobile-nav");
let headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scroll animation for safari browsers
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scrollback to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      let ourSectionEl = document.querySelector(href);
      ourSectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // close the navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entriesArr) {
    //event occurance
    const ent = entriesArr[0];
    if (ent.isIntersecting === false) {
      // we are out of herosection. so,add sticky the navbar
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      // we are in hero section. so,remove sticky
      document.body.classList.remove("sticky");
    }
  },
  {
    //null means viewport
    // 1 --> event occurs when HeroSection in viewport.
    // 0 --> event occurs when HeroSection out of viewport.
    root: null,
    threshold: 0,
    rootMargin: "-80px",
    // when, we almost 80px close to endof Herosection. eventStarts.
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
