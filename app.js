const translations = {
  en: {
    navTrips: "Trips",
    navPlanner: "Planner",
    navRequest: "Request",
    heroEyebrow: "France travel marketplace",
    heroTitle: "NadoTrip",
    heroCopy: "Curated city breaks, food trails, coastal escapes, and private journeys across France.",
    heroPrimary: "Explore trips",
    heroSecondary: "Plan my route",
    statOneValue: "24h",
    statOneLabel: "quote turnaround",
    statTwoValue: "2",
    statTwoLabel: "languages",
    statThreeValue: "8",
    statThreeLabel: "France regions",
    tripsEyebrow: "Marketplace",
    tripsTitle: "Find the right France product",
    tripsCopy: "Mix ready-to-sell products with private customization for couples, families, and small groups.",
    filterAll: "All",
    filterCity: "City",
    filterFood: "Food & wine",
    filterCoast: "Coast",
    filterFamily: "Family",
    filterPrivate: "Private",
    plannerEyebrow: "Suggested routes",
    plannerTitle: "Three fast ways to sell France",
    requestEyebrow: "Booking intent",
    requestTitle: "Send a trip request",
    requestCopy: "This MVP captures the core sales workflow before connecting payments, CRM, or supplier inventory.",
    formName: "Name",
    formEmail: "Email",
    formTravelers: "Travelers",
    formInterest: "Interested in",
    formNotes: "Notes",
    formNotesPlaceholder: "Dates, budget, preferred destinations",
    formSubmit: "Create request",
    formSuccess: "Request saved locally. A real version would send this to CRM or email.",
    selectTrip: "Select",
    from: "From",
    days: "days",
    footerCopy: "France travel sales MVP for web, tablet, and mobile.",
  },
  fr: {
    navTrips: "Voyages",
    navPlanner: "Itineraires",
    navRequest: "Demande",
    heroEyebrow: "Place de marche du voyage en France",
    heroTitle: "NadoTrip",
    heroCopy: "Sejours urbains, routes gourmandes, escapades mer et voyages prives partout en France.",
    heroPrimary: "Voir les voyages",
    heroSecondary: "Creer mon trajet",
    statOneValue: "24 h",
    statOneLabel: "pour recevoir un devis",
    statTwoValue: "2",
    statTwoLabel: "langues",
    statThreeValue: "8",
    statThreeLabel: "regions francaises",
    tripsEyebrow: "Catalogue",
    tripsTitle: "Trouver le bon produit France",
    tripsCopy: "Associez des offres pretes a vendre avec du sur-mesure pour couples, familles et petits groupes.",
    filterAll: "Tout",
    filterCity: "Ville",
    filterFood: "Gastronomie",
    filterCoast: "Littoral",
    filterFamily: "Famille",
    filterPrivate: "Prive",
    plannerEyebrow: "Routes conseillees",
    plannerTitle: "Trois facons rapides de vendre la France",
    requestEyebrow: "Intention de reservation",
    requestTitle: "Envoyer une demande",
    requestCopy: "Ce MVP couvre le flux commercial central avant paiement, CRM ou inventaire fournisseurs.",
    formName: "Nom",
    formEmail: "E-mail",
    formTravelers: "Voyageurs",
    formInterest: "Interet",
    formNotes: "Notes",
    formNotesPlaceholder: "Dates, budget, destinations preferees",
    formSubmit: "Creer la demande",
    formSuccess: "Demande enregistree localement. Une vraie version l'enverrait au CRM ou par e-mail.",
    selectTrip: "Choisir",
    from: "Des",
    days: "jours",
    footerCopy: "MVP de vente de voyages en France pour web, tablette et mobile.",
  },
};

const trips = [
  {
    id: "paris-icons",
    category: ["city", "private"],
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=78",
    duration: 3,
    price: 460,
    en: {
      region: "Paris",
      title: "Paris Icons Private Break",
      copy: "Louvre highlights, Seine cruise, boutique hotel sourcing, and a flexible evening plan.",
      tags: ["Private guide", "Museum", "Couples"],
    },
    fr: {
      region: "Paris",
      title: "Echappee privee Paris iconique",
      copy: "Louvre essentiel, croisiere sur la Seine, hotel boutique et soiree flexible.",
      tags: ["Guide prive", "Musee", "Couples"],
    },
  },
  {
    id: "provence-wine",
    category: ["food", "private"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=78",
    duration: 5,
    price: 980,
    en: {
      region: "Provence",
      title: "Provence Wine & Village Trail",
      copy: "Vineyards, olive oil tastings, lavender landscapes, and slow village lunches.",
      tags: ["Wine", "Villages", "Slow travel"],
    },
    fr: {
      region: "Provence",
      title: "Route vins et villages de Provence",
      copy: "Domaines viticoles, huile d'olive, paysages de lavande et dejeuners au village.",
      tags: ["Vin", "Villages", "Slow travel"],
    },
  },
  {
    id: "riviera-family",
    category: ["coast", "family"],
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=78",
    duration: 6,
    price: 1240,
    en: {
      region: "French Riviera",
      title: "Riviera Family Coast Hop",
      copy: "Nice, Antibes, boat day options, beach time, and child-friendly transfers.",
      tags: ["Beach", "Family", "Transfers"],
    },
    fr: {
      region: "Cote d'Azur",
      title: "Cote d'Azur en famille",
      copy: "Nice, Antibes, journee bateau en option, plage et transferts adaptes aux enfants.",
      tags: ["Plage", "Famille", "Transferts"],
    },
  },
  {
    id: "loire-castles",
    category: ["family", "city"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=78",
    duration: 4,
    price: 720,
    en: {
      region: "Loire Valley",
      title: "Loire Castles Self-Drive",
      copy: "Chateau tickets, scenic routing, garden stops, and family-sized stays.",
      tags: ["Castles", "Self-drive", "Family"],
    },
    fr: {
      region: "Val de Loire",
      title: "Chateaux de la Loire en voiture",
      copy: "Billets chateaux, routes panoramiques, jardins et hebergements familiaux.",
      tags: ["Chateaux", "Voiture", "Famille"],
    },
  },
  {
    id: "bordeaux-table",
    category: ["food", "city"],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=78",
    duration: 3,
    price: 640,
    en: {
      region: "Bordeaux",
      title: "Bordeaux Table & Cellar",
      copy: "Market walk, wine bar map, Saint-Emilion day trip, and dinner reservations.",
      tags: ["Wine", "Dining", "Weekend"],
    },
    fr: {
      region: "Bordeaux",
      title: "Tables et caves de Bordeaux",
      copy: "Marche, carte des bars a vin, Saint-Emilion et reservations de restaurants.",
      tags: ["Vin", "Restaurants", "Week-end"],
    },
  },
  {
    id: "alps-active",
    category: ["family", "private"],
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=78",
    duration: 7,
    price: 1420,
    en: {
      region: "French Alps",
      title: "Alps Summer Active Week",
      copy: "Lake towns, cable cars, guided hikes, spa access, and flexible activity levels.",
      tags: ["Nature", "Active", "Private"],
    },
    fr: {
      region: "Alpes francaises",
      title: "Semaine active d'ete dans les Alpes",
      copy: "Lacs, telepheriques, randonnees guidees, spa et niveaux d'activite flexibles.",
      tags: ["Nature", "Actif", "Prive"],
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
              <span class="price">${t("from")} ${formatPrice(trip.price)}</span>
              <button class="select-trip" type="button" data-trip="${trip.id}">${t("selectTrip")}</button>
            </div>
          </div>
        </article>`;
    })
    .join("");

  $$(".select-trip").forEach((button) => {
    button.addEventListener("click", () => selectTrip(button.dataset.trip));
  });
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

function renderInterestOptions() {
  const select = $("#interest-select");
  select.innerHTML = trips
    .map((trip) => `<option value="${trip.id}">${trip[currentLang].title}</option>`)
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
  renderRoutes();
  renderInterestOptions();
}

function selectTrip(id) {
  $("#interest-select").value = id;
  $("#request").scrollIntoView({ behavior: "smooth", block: "start" });
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

  $("#request-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
    localStorage.setItem("nadotrip-last-request", JSON.stringify({ ...formData, lang: currentLang }));
    $("#form-status").textContent = t("formSuccess");
  });
}

bindEvents();
applyLanguage(currentLang);
