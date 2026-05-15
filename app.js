const translations = {
  en: {
    navTrips: "Trips",
    navPlanner: "Planner",
    navCheckout: "Checkout",
    heroEyebrow: "France travel marketplace",
    heroTitle: "NadoTrip",
    heroCopy: "Curated city breaks, food trails, coastal escapes, and private journeys across France.",
    heroPrimary: "Explore trips",
    heroSecondary: "Plan my route",
    statOneValue: "Instant",
    statOneLabel: "cart estimate",
    statTwoValue: "2",
    statTwoLabel: "languages",
    statThreeValue: "6",
    statThreeLabel: "bookable products",
    tripsEyebrow: "Marketplace",
    tripsTitle: "Find the right France product",
    tripsCopy: "Open a product page, review the itinerary, choose your date and travelers, then add it to your cart.",
    filterAll: "All",
    filterCity: "City",
    filterFood: "Food & wine",
    filterCoast: "Coast",
    filterFamily: "Family",
    filterPrivate: "Private",
    plannerEyebrow: "Suggested routes",
    plannerTitle: "Three fast ways to sell France",
    cartEyebrow: "Trip cart",
    cartTitle: "Your selected products",
    cartCopy: "Add one or more travel products, adjust travelers and dates, then send the order intent.",
    checkoutEyebrow: "Checkout",
    checkoutTitle: "Confirm booking intent",
    checkoutCopy: "For the MVP, checkout records a qualified order instead of charging payment.",
    formName: "Name",
    formEmail: "Email",
    formNotes: "Notes",
    formNotesPlaceholder: "Hotel level, dietary needs, pickup city, timing constraints",
    formSubmit: "Submit booking intent",
    formSuccess: "Booking intent saved locally with your selected products.",
    details: "View details",
    backToTrips: "Back to trips",
    addToCart: "Add to cart",
    inCart: "Added to cart",
    itinerary: "Itinerary",
    from: "From",
    perPerson: "per person",
    days: "days",
    day: "Day",
    includes: "Includes",
    options: "Options",
    startDate: "Start date",
    travelers: "Travelers",
    estimate: "Estimate",
    cartEmpty: "Your cart is empty. Open a product page to add a trip.",
    remove: "Remove",
    subtotal: "Subtotal",
    checkoutEmpty: "Add a product before submitting checkout.",
    footerCopy: "France travel sales MVP for web, tablet, and mobile.",
  },
  fr: {
    navTrips: "Voyages",
    navPlanner: "Itineraires",
    navCheckout: "Commande",
    heroEyebrow: "Place de marche du voyage en France",
    heroTitle: "NadoTrip",
    heroCopy: "Sejours urbains, routes gourmandes, escapades mer et voyages prives partout en France.",
    heroPrimary: "Voir les voyages",
    heroSecondary: "Creer mon trajet",
    statOneValue: "Instantane",
    statOneLabel: "estimation panier",
    statTwoValue: "2",
    statTwoLabel: "langues",
    statThreeValue: "6",
    statThreeLabel: "produits reservables",
    tripsEyebrow: "Catalogue",
    tripsTitle: "Trouver le bon produit France",
    tripsCopy: "Ouvrez une fiche produit, consultez l'itineraire, choisissez date et voyageurs, puis ajoutez au panier.",
    filterAll: "Tout",
    filterCity: "Ville",
    filterFood: "Gastronomie",
    filterCoast: "Littoral",
    filterFamily: "Famille",
    filterPrivate: "Prive",
    plannerEyebrow: "Routes conseillees",
    plannerTitle: "Trois facons rapides de vendre la France",
    cartEyebrow: "Panier voyage",
    cartTitle: "Vos produits selectionnes",
    cartCopy: "Ajoutez un ou plusieurs produits, ajustez voyageurs et dates, puis envoyez l'intention de commande.",
    checkoutEyebrow: "Commande",
    checkoutTitle: "Confirmer l'intention de reservation",
    checkoutCopy: "Dans ce MVP, la commande enregistre un dossier qualifie sans paiement en ligne.",
    formName: "Nom",
    formEmail: "E-mail",
    formNotes: "Notes",
    formNotesPlaceholder: "Niveau d'hotel, regimes alimentaires, ville de depart, contraintes horaires",
    formSubmit: "Envoyer l'intention de commande",
    formSuccess: "Intention de reservation enregistree localement avec vos produits.",
    details: "Voir details",
    backToTrips: "Retour aux voyages",
    addToCart: "Ajouter au panier",
    inCart: "Ajoute au panier",
    itinerary: "Itineraire",
    from: "Des",
    perPerson: "par personne",
    days: "jours",
    day: "Jour",
    includes: "Inclus",
    options: "Options",
    startDate: "Date de depart",
    travelers: "Voyageurs",
    estimate: "Estimation",
    cartEmpty: "Votre panier est vide. Ouvrez une fiche produit pour ajouter un voyage.",
    remove: "Retirer",
    subtotal: "Sous-total",
    checkoutEmpty: "Ajoutez un produit avant de valider la commande.",
    footerCopy: "MVP de vente de voyages en France pour web, tablette et mobile.",
  },
};

const trips = [
  {
    id: "paris-icons",
    category: ["city", "private"],
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=78",
    duration: 3,
    price: 460,
    optionPrice: 120,
    en: {
      region: "Paris",
      title: "Paris Icons Private Break",
      copy: "Louvre highlights, Seine cruise, boutique hotel sourcing, and a flexible evening plan.",
      tags: ["Private guide", "Museum", "Couples"],
      itinerary: ["Arrival, Marais walk, and bistro table", "Louvre essentials and Seine cruise", "Montmartre, shopping time, and departure"],
      includes: ["Private half-day guide", "Museum ticket planning", "Restaurant shortlist", "Metro and transfer notes"],
      option: "Add airport transfer",
    },
    fr: {
      region: "Paris",
      title: "Echappee privee Paris iconique",
      copy: "Louvre essentiel, croisiere sur la Seine, hotel boutique et soiree flexible.",
      tags: ["Guide prive", "Musee", "Couples"],
      itinerary: ["Arrivee, balade dans le Marais et table bistro", "Essentiels du Louvre et croisiere Seine", "Montmartre, shopping et depart"],
      includes: ["Guide prive demi-journee", "Preparation billets musee", "Selection restaurants", "Notes metro et transferts"],
      option: "Ajouter transfert aeroport",
    },
  },
  {
    id: "provence-wine",
    category: ["food", "private"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=78",
    duration: 5,
    price: 980,
    optionPrice: 180,
    en: {
      region: "Provence",
      title: "Provence Wine & Village Trail",
      copy: "Vineyards, olive oil tastings, lavender landscapes, and slow village lunches.",
      tags: ["Wine", "Villages", "Slow travel"],
      itinerary: ["Avignon arrival and old town dinner", "Chateauneuf-du-Pape cellar day", "Luberon villages and olive oil tasting", "Lavender landscapes and market lunch", "Aix-en-Provence morning and departure"],
      includes: ["Two winery appointments", "Village routing", "Market lunch recommendation", "Private driver option support"],
      option: "Add private driver day",
    },
    fr: {
      region: "Provence",
      title: "Route vins et villages de Provence",
      copy: "Domaines viticoles, huile d'olive, paysages de lavande et dejeuners au village.",
      tags: ["Vin", "Villages", "Slow travel"],
      itinerary: ["Arrivee Avignon et diner vieille ville", "Journee caves a Chateauneuf-du-Pape", "Villages du Luberon et huile d'olive", "Lavande et dejeuner de marche", "Matinee a Aix-en-Provence et depart"],
      includes: ["Deux rendez-vous domaines", "Parcours villages", "Recommendation dejeuner marche", "Aide option chauffeur prive"],
      option: "Ajouter une journee chauffeur prive",
    },
  },
  {
    id: "riviera-family",
    category: ["coast", "family"],
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=78",
    duration: 6,
    price: 1240,
    optionPrice: 240,
    en: {
      region: "French Riviera",
      title: "Riviera Family Coast Hop",
      copy: "Nice, Antibes, boat day options, beach time, and child-friendly transfers.",
      tags: ["Beach", "Family", "Transfers"],
      itinerary: ["Nice arrival and promenade", "Antibes old town and beach", "Boat day or aquarium option", "Monaco half-day", "Cassis or Eze scenic day", "Relaxed departure"],
      includes: ["Family room sourcing", "Kid-friendly activity map", "Transfer planning", "Beach club shortlist"],
      option: "Add half-day boat charter",
    },
    fr: {
      region: "Cote d'Azur",
      title: "Cote d'Azur en famille",
      copy: "Nice, Antibes, journee bateau en option, plage et transferts adaptes aux enfants.",
      tags: ["Plage", "Famille", "Transferts"],
      itinerary: ["Arrivee Nice et promenade", "Vieil Antibes et plage", "Bateau ou aquarium", "Demi-journee Monaco", "Journee panorama Cassis ou Eze", "Depart tranquille"],
      includes: ["Recherche chambres famille", "Carte activites enfants", "Plan transferts", "Selection clubs de plage"],
      option: "Ajouter bateau prive demi-journee",
    },
  },
  {
    id: "loire-castles",
    category: ["family", "city"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=78",
    duration: 4,
    price: 720,
    optionPrice: 90,
    en: {
      region: "Loire Valley",
      title: "Loire Castles Self-Drive",
      copy: "Chateau tickets, scenic routing, garden stops, and family-sized stays.",
      tags: ["Castles", "Self-drive", "Family"],
      itinerary: ["Tours arrival and riverside dinner", "Chambord and Cheverny", "Chenonceau gardens and picnic", "Amboise morning and departure"],
      includes: ["Castle ticket plan", "Driving route", "Family stay shortlist", "Picnic and garden notes"],
      option: "Add e-bike rental",
    },
    fr: {
      region: "Val de Loire",
      title: "Chateaux de la Loire en voiture",
      copy: "Billets chateaux, routes panoramiques, jardins et hebergements familiaux.",
      tags: ["Chateaux", "Voiture", "Famille"],
      itinerary: ["Arrivee Tours et diner bord de Loire", "Chambord et Cheverny", "Jardins de Chenonceau et pique-nique", "Matinee Amboise et depart"],
      includes: ["Plan billets chateaux", "Itineraire voiture", "Selection hotels famille", "Notes pique-nique et jardins"],
      option: "Ajouter location velos electriques",
    },
  },
  {
    id: "bordeaux-table",
    category: ["food", "city"],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=78",
    duration: 3,
    price: 640,
    optionPrice: 150,
    en: {
      region: "Bordeaux",
      title: "Bordeaux Table & Cellar",
      copy: "Market walk, wine bar map, Saint-Emilion day trip, and dinner reservations.",
      tags: ["Wine", "Dining", "Weekend"],
      itinerary: ["Bordeaux arrival and wine bar route", "Market walk and Saint-Emilion", "Cite du Vin and final lunch"],
      includes: ["Wine bar map", "Restaurant booking list", "Saint-Emilion timing", "Local transport notes"],
      option: "Add premium tasting",
    },
    fr: {
      region: "Bordeaux",
      title: "Tables et caves de Bordeaux",
      copy: "Marche, carte des bars a vin, Saint-Emilion et reservations de restaurants.",
      tags: ["Vin", "Restaurants", "Week-end"],
      itinerary: ["Arrivee Bordeaux et route bars a vin", "Marche et Saint-Emilion", "Cite du Vin et dernier dejeuner"],
      includes: ["Carte bars a vin", "Liste restaurants", "Timing Saint-Emilion", "Notes transport local"],
      option: "Ajouter degustation premium",
    },
  },
  {
    id: "alps-active",
    category: ["family", "private"],
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=78",
    duration: 7,
    price: 1420,
    optionPrice: 210,
    en: {
      region: "French Alps",
      title: "Alps Summer Active Week",
      copy: "Lake towns, cable cars, guided hikes, spa access, and flexible activity levels.",
      tags: ["Nature", "Active", "Private"],
      itinerary: ["Annecy arrival", "Lake cycling and old town", "Chamonix cable car", "Guided family hike", "Spa and village day", "Adventure activity choice", "Departure"],
      includes: ["Activity level matching", "Guide shortlist", "Spa access planning", "Weather backup ideas"],
      option: "Add guided canyoning",
    },
    fr: {
      region: "Alpes francaises",
      title: "Semaine active d'ete dans les Alpes",
      copy: "Lacs, telepheriques, randonnees guidees, spa et niveaux d'activite flexibles.",
      tags: ["Nature", "Actif", "Prive"],
      itinerary: ["Arrivee Annecy", "Velo lac et vieille ville", "Telepherique Chamonix", "Randonnee guidee famille", "Spa et village", "Activite aventure au choix", "Depart"],
      includes: ["Adaptation niveau activite", "Selection guides", "Planification spa", "Idees meteo de secours"],
      option: "Ajouter canyoning guide",
    },
  },
];

const routes = {
  en: [
    ["First-time France", "Paris 3 nights + Loire 2 nights + Bordeaux 2 nights"],
    ["Food-led journey", "Lyon markets + Provence villages + Bordeaux cellars"],
    ["Coast and culture", "Nice, Antibes, Marseille, Cassis, and Aix-en-Provence"],
  ],
  fr: [
    ["Premiere France", "Paris 3 nuits + Loire 2 nuits + Bordeaux 2 nuits"],
    ["Voyage gourmand", "Marches de Lyon + villages de Provence + caves de Bordeaux"],
    ["Littoral et culture", "Nice, Antibes, Marseille, Cassis et Aix-en-Provence"],
  ],
};

let currentLang = "en";
let currentFilter = "all";
let activeTripId = null;
let cart = JSON.parse(localStorage.getItem("nadotrip-cart") || "[]");

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function t(key) {
  return translations[currentLang][key];
}

function formatPrice(value) {
  return new Intl.NumberFormat(currentLang === "fr" ? "fr-FR" : "en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function tripById(id) {
  return trips.find((trip) => trip.id === id);
}

function saveCart() {
  localStorage.setItem("nadotrip-cart", JSON.stringify(cart));
}

function itemTotal(item) {
  const trip = tripById(item.tripId);
  return trip ? trip.price * item.travelers + (item.withOption ? trip.optionPrice : 0) : 0;
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + itemTotal(item), 0);
}

function renderTrips() {
  const grid = $("#trip-grid");
  const visibleTrips = trips.filter((trip) => currentFilter === "all" || trip.category.includes(currentFilter));

  grid.innerHTML = visibleTrips
    .map((trip) => {
      const copy = trip[currentLang];
      return `
        <article class="trip-card" data-testid="trip-card">
          <img class="trip-image" src="${trip.image}" alt="${copy.region}" loading="lazy" />
          <div class="trip-body">
            <div class="trip-meta">
              <span>${copy.region}</span>
              <span>${trip.duration} ${t("days")}</span>
            </div>
            <h3>${copy.title}</h3>
            <p>${copy.copy}</p>
            <div class="tag-row" aria-label="Trip tags">
              ${copy.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="trip-footer">
              <span class="price">${t("from")} ${formatPrice(trip.price)} <small>${t("perPerson")}</small></span>
              <button class="select-trip" type="button" data-detail="${trip.id}">${t("details")}</button>
            </div>
          </div>
        </article>`;
    })
    .join("");

  $$('[data-detail]').forEach((button) => {
    button.addEventListener("click", () => openProduct(button.dataset.detail));
  });
}

function renderProductDetail() {
  const section = $("#product-detail");
  const trip = tripById(activeTripId);
  if (!trip) {
    section.classList.add("is-hidden");
    section.innerHTML = "";
    return;
  }

  const copy = trip[currentLang];
  const defaultDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 21).toISOString().slice(0, 10);
  section.classList.remove("is-hidden");
  section.innerHTML = `
    <div class="detail-media">
      <img src="${trip.image}" alt="${copy.title}" />
    </div>
    <div class="detail-content">
      <a class="back-link" href="#trips">${t("backToTrips")}</a>
      <p class="eyebrow">${copy.region}</p>
      <h2>${copy.title}</h2>
      <p class="detail-copy">${copy.copy}</p>
      <div class="detail-facts">
        <span>${trip.duration} ${t("days")}</span>
        <span>${t("from")} ${formatPrice(trip.price)} ${t("perPerson")}</span>
      </div>
      <div class="detail-columns">
        <div>
          <h3>${t("itinerary")}</h3>
          <ol class="itinerary-list">
            ${copy.itinerary.map((item, index) => `<li><strong>${t("day")} ${index + 1}</strong><span>${item}</span></li>`).join("")}
          </ol>
        </div>
        <div>
          <h3>${t("includes")}</h3>
          <ul class="include-list">
            ${copy.includes.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="booking-box">
            <label>
              <span>${t("startDate")}</span>
              <input id="detail-date" type="date" value="${defaultDate}" />
            </label>
            <label>
              <span>${t("travelers")}</span>
              <input id="detail-travelers" type="number" min="1" value="2" />
            </label>
            <label class="option-row">
              <input id="detail-option" type="checkbox" />
              <span>${copy.option} (+${formatPrice(trip.optionPrice)})</span>
            </label>
            <div class="booking-total">
              <span>${t("estimate")}</span>
              <strong id="detail-total"></strong>
            </div>
            <button class="primary-action" type="button" id="add-cart-button">${t("addToCart")}</button>
          </div>
        </div>
      </div>
    </div>`;

  const updateTotal = () => {
    const travelers = Math.max(1, Number($("#detail-travelers").value || 1));
    const withOption = $("#detail-option").checked;
    $("#detail-total").textContent = formatPrice(trip.price * travelers + (withOption ? trip.optionPrice : 0));
  };
  $("#detail-travelers").addEventListener("input", updateTotal);
  $("#detail-option").addEventListener("change", updateTotal);
  $("#add-cart-button").addEventListener("click", () => addActiveTripToCart());
  updateTotal();
}

function addActiveTripToCart() {
  const trip = tripById(activeTripId);
  if (!trip) return;
  cart.push({
    id: `${trip.id}-${Date.now()}`,
    tripId: trip.id,
    date: $("#detail-date").value,
    travelers: Math.max(1, Number($("#detail-travelers").value || 1)),
    withOption: $("#detail-option").checked,
  });
  saveCart();
  renderCart();
  renderCheckoutSummary();
  $("#add-cart-button").textContent = t("inCart");
  $("#cart").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCart() {
  const panel = $("#cart-panel");
  if (!cart.length) {
    panel.innerHTML = `<p class="empty-cart">${t("cartEmpty")}</p>`;
    return;
  }

  panel.innerHTML = `
    <div class="cart-items">
      ${cart
        .map((item) => {
          const trip = tripById(item.tripId);
          const copy = trip[currentLang];
          return `
            <article class="cart-item">
              <img src="${trip.image}" alt="${copy.title}" />
              <div>
                <h3>${copy.title}</h3>
                <p>${item.date} · ${item.travelers} ${t("travelers")} · ${trip.duration} ${t("days")}</p>
                ${item.withOption ? `<p>${copy.option}</p>` : ""}
              </div>
              <strong>${formatPrice(itemTotal(item))}</strong>
              <button type="button" class="remove-item" data-remove="${item.id}">${t("remove")}</button>
            </article>`;
        })
        .join("")}
    </div>
    <div class="cart-total"><span>${t("subtotal")}</span><strong>${formatPrice(cartTotal())}</strong></div>`;

  $$('[data-remove]').forEach((button) => {
    button.addEventListener("click", () => {
      cart = cart.filter((item) => item.id !== button.dataset.remove);
      saveCart();
      renderCart();
      renderCheckoutSummary();
    });
  });
}

function renderCheckoutSummary() {
  const summary = $("#checkout-summary");
  if (!cart.length) {
    summary.innerHTML = `<p>${t("checkoutEmpty")}</p>`;
    return;
  }
  summary.innerHTML = `
    <div class="checkout-lines">
      ${cart
        .map((item) => {
          const trip = tripById(item.tripId);
          return `<span>${trip[currentLang].title}</span><strong>${formatPrice(itemTotal(item))}</strong>`;
        })
        .join("")}
      <span>${t("subtotal")}</span><strong>${formatPrice(cartTotal())}</strong>
    </div>`;
}

function renderRoutes() {
  $("#route-list").innerHTML = routes[currentLang]
    .map(
      ([title, copy], index) => `
        <article class="route-item">
          <span class="route-number">${index + 1}</span>
          <div>
            <h3>${title}</h3>
            <p>${copy}</p>
          </div>
        </article>`
    )
    .join("");
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = lang === "fr" ? "NadoTrip | Voyages en France" : "NadoTrip | Curated France Travel";

  $$('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  $$('[data-i18n-placeholder]').forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  $$(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  renderTrips();
  renderProductDetail();
  renderRoutes();
  renderCart();
  renderCheckoutSummary();
}

function openProduct(id) {
  activeTripId = id;
  history.replaceState(null, "", `#product-${id}`);
  renderProductDetail();
  $("#product-detail").scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncProductFromHash() {
  const match = window.location.hash.match(/^#product-(.+)$/);
  activeTripId = match && tripById(match[1]) ? match[1] : activeTripId;
  renderProductDetail();
}

function bindEvents() {
  $$(".lang-button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  $$(".filter-pill").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      $$(".filter-pill").forEach((pill) => pill.classList.toggle("is-active", pill === button));
      renderTrips();
    });
  });

  window.addEventListener("hashchange", syncProductFromHash);

  $("#request-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!cart.length) {
      $("#form-status").textContent = t("checkoutEmpty");
      return;
    }
    const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
    localStorage.setItem(
      "nadotrip-last-order",
      JSON.stringify({ contact: formData, cart, total: cartTotal(), lang: currentLang, createdAt: new Date().toISOString() })
    );
    $("#form-status").textContent = t("formSuccess");
  });
}

bindEvents();
syncProductFromHash();
applyLanguage(currentLang);
