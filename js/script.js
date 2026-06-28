const peso = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });

const products = [
  { id: 1, name: "Luxury Walnut Sofa", category: "Living Room", price: 89500, rating: 4.9, popular: 98, style: "Luxury", badge: "best", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80", desc: "A deep walnut-framed sofa with cloud-soft cushions for long conversations and slow weekends." },
  { id: 2, name: "Oak Dining Set", category: "Dining Room", price: 124000, rating: 4.8, popular: 94, style: "Rustic", badge: "best", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80", desc: "Solid oak dining for family meals, holiday stories, and everyday gathering." },
  { id: 3, name: "Premium King Bed", category: "Bedroom", price: 112500, rating: 4.9, popular: 96, style: "Luxury", badge: "favorite", image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=900&q=80", desc: "A tailored upholstered bed with generous proportions and hotel-suite comfort." },
  { id: 4, name: "Executive Office Desk", category: "Workspace", price: 78500, rating: 4.7, popular: 88, style: "Modern", badge: "new", image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?auto=format&fit=crop&w=900&q=80", desc: "A commanding workspace desk in warm veneer with refined storage details." },
  { id: 5, name: "Scandinavian Coffee Table", category: "Living Room", price: 28500, rating: 4.6, popular: 82, style: "Scandinavian", badge: "favorite", image: "https://images.unsplash.com/photo-1532372320978-9d4d31cc69e5?auto=format&fit=crop&w=900&q=80", desc: "Light oak, rounded corners, and calm proportions for relaxed living rooms." },
  { id: 6, name: "Marble Sideboard", category: "Dining Room", price: 96500, rating: 4.8, popular: 90, style: "Luxury", badge: "new", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80", desc: "A sculptural storage piece with marble-inspired surface and brass-toned pulls." },
  { id: 7, name: "Heritage Wardrobe", category: "Bedroom", price: 88400, rating: 4.5, popular: 76, style: "Rustic", badge: "best", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80", desc: "Warm wood storage designed to make morning routines feel composed." },
  { id: 8, name: "Minimal Nightstand", category: "Bedroom", price: 18500, rating: 4.4, popular: 72, style: "Minimalist", badge: "favorite", image: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=80", desc: "A quiet bedside companion with clean lines and a soft-close drawer." },
  { id: 9, name: "Patio Lounge Set", category: "Outdoor", price: 105000, rating: 4.7, popular: 84, style: "Modern", badge: "new", image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80", desc: "Weather-ready lounge seating for golden-hour meals and garden weekends." },
  { id: 10, name: "Garden Teak Bench", category: "Outdoor", price: 36500, rating: 4.3, popular: 67, style: "Rustic", badge: "favorite", image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=900&q=80", desc: "A teak bench that gives porches, patios, and gardens a graceful pause." },
  { id: 11, name: "Velvet Accent Chair", category: "Living Room", price: 42500, rating: 4.8, popular: 89, style: "Luxury", badge: "best", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80", desc: "Plush velvet seating with a sculptural silhouette and rich tactile comfort." },
  { id: 12, name: "Counter Bar Stools", category: "Dining Room", price: 29500, rating: 4.5, popular: 70, style: "Modern", badge: "new", image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=900&q=80", desc: "Slim stools that bring cafe polish to breakfast counters and home bars." },
  { id: 13, name: "Ergonomic Office Chair", category: "Workspace", price: 33500, rating: 4.6, popular: 81, style: "Minimalist", badge: "favorite", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80", desc: "Supportive seating wrapped in refined upholstery for focused workdays." },
  { id: 14, name: "Modular Wall Shelves", category: "Workspace", price: 24200, rating: 4.4, popular: 65, style: "Scandinavian", badge: "new", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=80", desc: "Flexible shelving for books, heirlooms, and objects that make a room yours." },
  { id: 15, name: "Media TV Console", category: "Living Room", price: 54800, rating: 4.7, popular: 86, style: "Modern", badge: "best", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=900&q=80", desc: "A low-profile console that keeps entertainment spaces elegant and uncluttered." }
];

const categories = [
  { name: "Living Room", items: ["Sofas", "Coffee Tables", "TV Consoles"], image: "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/488221615_1089692073172400_1260952735959004656_n.jpg?stp=dst-jpg_tt6&cstp=mx828x620&ctp=s828x620&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEgY-l1vy8horfCSuWCs8PPCSzhMXcsFRkJLOExdywVGWiDc2fTunX7_t9W4XGYl4cAAs4dTvDqfYrQphnlDP_Q&_nc_ohc=FRskGep5w-UQ7kNvwHqxTiA&_nc_oc=Adps4j44u46SK-qpcI6GeL19dNCoaAeDgwmZDudO8Akzl-PAsUojcLyvn2r9O2cdEHA&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=YhWroj5A77a_2xfYCGNhgw&_nc_ss=782a8&oh=00_Af-_BEW73jbblUK3SMULi7h7PNb1MWbH90McXLRHCcwsrQ&oe=6A42AC41" },
  { name: "Dining Room", items: ["Dining Sets", "Bar Stools", "Sideboards"], image: "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/481922579_1064776135663994_1527629404013831389_n.jpg?stp=dst-jpg_tt6&cstp=mx720x1072&ctp=s720x1072&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE5TB2SsHTdl5IRvtiFaim63lEaAsb_iireURoCxv-KKvIDATUXpW79I_mZYdlK0j0mlBeFhZOEsOPsJxTvLWNa&_nc_ohc=KXf-FMpgV9UQ7kNvwGDinQ5&_nc_oc=Adrx7qSiRRPvkn8dYrWZ_LMsFdif0J40_Z49HEHNx4aKlLWdo-jDBK8xJYN_W07cIrs&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=EY-lzq6cCMbiK9-jZbOdMQ&_nc_ss=7b2a8&oh=00_Af-G1SkZcNNGytOat9kFx8IT9tLqL-ZRnGSWiYaaPxnIyA&oe=6A42AD93" },
  { name: "Bedroom", items: ["Beds", "Wardrobes", "Nightstands"], image: "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/487371279_1087827436692197_7438891602595668666_n.jpg?stp=dst-jpg_tt6&cstp=mx828x1104&ctp=s828x1104&_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEPkVHHAvn-WWodb-Az2UqnrKy2dgLG3resrLZ2Asbet9luGRkrsSuZozBX3rdpCS0PkZpv94-GDJPsQa_6W3_E&_nc_ohc=1Jghau6bwv4Q7kNvwER4zlB&_nc_oc=AdpzDBCjvAd8ED3bMA2O7upE30srE1s1NZG8QkeGe4uS8NpyUH_V7meqXkovwzdS-4c&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=gFax_b-9fzSgPBpmFCHoDQ&_nc_ss=7b2a8&oh=00_Af9b8penTsxqAxvubHhO6XXINQD4qqecMOByxDN4meuKWg&oe=6A42B39C" },
  { name: "Workspace", items: ["Office Desks", "Office Chairs", "Shelves"], image: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/486868882_1085171833624424_3829686702098650189_n.jpg?stp=dst-jpg_tt6&cstp=mx828x1104&ctp=s828x1104&_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGPJGNnIEWZpk3aPhB_2QZbrQ43z_2odsytDjfP_ah2zHaUA9xbHlGg7pK2Prcgxy3_nNaEMc8ycqC4W--H8byW&_nc_ohc=kgaR02CVl-oQ7kNvwEC_vcq&_nc_oc=Adqhyr4zWMyB6R0DWjskYOHGF8q_YQ9x9T05Pzb272WoR8ArlkzO8Q6U4zy2e_N4dYk&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=P-TGHk2ni9EDUJI1-HR5Wg&_nc_ss=7b2a8&oh=00_Af-Q1AvXHARz8shJnJzKHnpdSR4H_lTosESvuvWyEN31OA&oe=6A42B50A" },
  { name: "Outdoor", items: ["Garden Furniture", "Patio Sets"], image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80" }
];

const testimonials = [
  { name: "Andrea Santos", text: "The sofa changed how our family uses the living room. Everyone stays a little longer now.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" },
  { name: "Miguel Reyes", text: "Delivery was careful, quick, and polished. The dining set feels like it will host decades of meals.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
  { name: "Lia Tan", text: "Beautiful materials, warm service, and comfort that looks as good as it feels every single day.", image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=300&q=80" }
];

let cart = JSON.parse(localStorage.getItem("susieCart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("susieWishlist") || "[]");
let showcaseIndex = 0;
let showcaseMode = "best";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function saveCart() {
  localStorage.setItem("susieCart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("susieWishlist", JSON.stringify(wishlist));
}

function formatPrice(value) {
  return peso.format(value).replace("PHP", "\u20b1");
}

function stars(rating) {
  const rounded = Math.round(rating);
  return `${"\u2605".repeat(rounded)}${"\u2606".repeat(5 - rounded)} <span>${rating}</span>`;
}

function renderCategories() {
  $("#categoryGrid").innerHTML = categories.map(category => `
    <article class="category-card reveal" data-category="${category.name}">
      <img src="${category.image}" alt="${category.name} furniture">
      <div class="category-body">
        <h3>${category.name}</h3>
        <ul>${category.items.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

  const select = $("#categoryFilter");
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;
    select.append(option);
  });
}

function productCard(product) {
  const isSaved = wishlist.includes(product.id);
  return `
    <article class="product-card reveal">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}">
        <button class="wishlist ${isSaved ? "saved" : ""}" data-wishlist="${product.id}" aria-label="Save ${product.name}">${isSaved ? "\u2665" : "\u2661"}</button>
      </div>
      <div class="product-body">
        <div class="product-meta"><span>${product.category}</span><span class="stars">${stars(product.rating)}</span></div>
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <div class="price">${formatPrice(product.price)}</div>
        <div class="product-actions">
          <button class="outline-btn" data-quick="${product.id}">Quick View</button>
          <button class="btn primary small" data-add="${product.id}">Add To Cart</button>
        </div>
      </div>
    </article>
  `;
}

function filteredProducts() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const category = $("#categoryFilter").value;
  const price = $("#priceFilter").value;
  const minRating = Number($("#ratingFilter").value);
  const sort = $("#sortSelect").value;

  let result = products.filter(product => {
    const matchesQuery = product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    const matchesCategory = category === "all" || product.category === category;
    const matchesRating = product.rating >= minRating;
    let matchesPrice = true;
    if (price !== "all") {
      const [min, max] = price.split("-").map(Number);
      matchesPrice = product.price >= min && product.price <= max;
    }
    return matchesQuery && matchesCategory && matchesRating && matchesPrice;
  });

  result.sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "rated") return b.rating - a.rating;
    return b.popular - a.popular;
  });
  return result;
}

function renderProducts() {
  const result = filteredProducts();
  $("#productGrid").innerHTML = result.length
    ? result.map(productCard).join("")
    : `<p class="empty">No pieces match your current filters.</p>`;
  observeReveals();
}

function addToCart(id) {
  const item = cart.find(entry => entry.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  if ($("#quickModal").classList.contains("show")) closeQuickView();
  openCart();
}

function changeQty(id, delta) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(entry => entry.id !== id);
  saveCart();
  renderCart();
}

function totals() {
  const subtotal = cart.reduce((sum, entry) => {
    const product = products.find(item => item.id === entry.id);
    return sum + (product ? product.price * entry.qty : 0);
  }, 0);
  const delivery = subtotal > 0 ? (subtotal > 100000 ? 0 : 2500) : 0;
  return { subtotal, delivery, total: subtotal + delivery };
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  $("#cartCount").textContent = count;

  $("#cartItems").innerHTML = cart.length ? cart.map(entry => {
    const product = products.find(item => item.id === entry.id);
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p>${formatPrice(product.price)}</p>
          <div class="qty-row">
            <button data-qty="${product.id}" data-delta="-1">-</button>
            <strong>${entry.qty}</strong>
            <button data-qty="${product.id}" data-delta="1">+</button>
            <button class="remove-btn" data-remove="${product.id}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("") : `<p>Your cart is waiting for its first beautiful piece.</p>`;

  const summary = totals();
  const summaryHtml = `
    <div class="summary-row"><span>Subtotal</span><strong>${formatPrice(summary.subtotal)}</strong></div>
    <div class="summary-row"><span>Delivery Fee</span><strong>${formatPrice(summary.delivery)}</strong></div>
    <div class="summary-row total"><span>Grand Total</span><strong>${formatPrice(summary.total)}</strong></div>
  `;
  $("#cartTotals").innerHTML = summaryHtml;
  $("#checkoutSummary").innerHTML = `<h3>Order Summary</h3>${cart.length ? cart.map(entry => {
    const product = products.find(item => item.id === entry.id);
    return `<div class="summary-row"><span>${product.name} x ${entry.qty}</span><strong>${formatPrice(product.price * entry.qty)}</strong></div>`;
  }).join("") : `<p>No items selected yet.</p>`}${summaryHtml}`;
}

function openCart() {
  $("#cartSidebar").classList.add("show");
  $("#backdrop").classList.add("show");
  document.body.classList.add("cart-open");
}

function closeCart() {
  $("#cartSidebar").classList.remove("show");
  $("#backdrop").classList.remove("show");
  document.body.classList.remove("cart-open");
}

function openQuickView(id) {
  const product = products.find(item => item.id === id);
  $("#modalBody").innerHTML = `
    <div class="modal-product">
      <img src="${product.image}" alt="${product.name}">
      <div class="modal-copy">
        <p class="eyebrow">${product.category}</p>
        <h2>${product.name}</h2>
        <p class="stars">${stars(product.rating)}</p>
        <p>${product.desc} Crafted to add warmth, balance, and a composed luxury feeling to everyday life.</p>
        <div class="price">${formatPrice(product.price)}</div>
        <button class="btn primary" data-add="${product.id}">Add To Cart</button>
      </div>
    </div>
  `;
  $("#quickModal").classList.add("show");
  document.body.classList.add("modal-open");
}

function closeQuickView() {
  $("#quickModal").classList.remove("show");
  document.body.classList.remove("modal-open");
}

function toggleWishlist(id) {
  wishlist = wishlist.includes(id) ? wishlist.filter(item => item !== id) : [...wishlist, id];
  saveWishlist();
  renderProducts();
}

function renderShowcase() {
  const list = products.filter(product => product.badge === showcaseMode);
  const items = [...list, ...list].slice(showcaseIndex, showcaseIndex + 3);
  $("#showcaseCarousel").innerHTML = items.map(product => `
    <article class="mini-card">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h3>${product.name}</h3>
        <p>${formatPrice(product.price)}</p>
      </div>
    </article>
  `).join("");
}

function moveShowcase(direction) {
  const length = products.filter(product => product.badge === showcaseMode).length;
  showcaseIndex = (showcaseIndex + direction + length) % length;
  renderShowcase();
}

function renderTestimonials() {
  $("#testimonialSlider").innerHTML = testimonials.map(item => `
    <article class="testimonial-card">
      <div class="stars">${"\u2605".repeat(5)}</div>
      <p>"${item.text}"</p>
      <div class="person">
        <img src="${item.image}" alt="${item.name}">
        <strong>${item.name}</strong>
      </div>
    </article>
  `).join("");
}

function setupQuiz() {
  const styles = ["Modern", "Minimalist", "Rustic", "Luxury", "Scandinavian"];
  const quizOptions = $("#quizOptions");
  if (quizOptions) {
    quizOptions.innerHTML = styles.map(style => `<button class="quiz-option" data-style="${style}">${style}</button>`).join("");
  }
}

function quizResult(style) {
  const matches = products.filter(product => product.style === style).slice(0, 3);
  const quizProgress = $("#quizProgress");
  const quizResult = $("#quizResult");
  if (quizProgress) quizProgress.style.width = "100%";
  if (quizResult) {
    quizResult.innerHTML = `
      <strong>${style} suits you beautifully.</strong>
      <p>Recommended pieces: ${matches.map(item => item.name).join(", ")}.</p>
    `;
  }
  $("#searchInput").value = "";
  $("#categoryFilter").value = "all";
  $("#priceFilter").value = "all";
  $("#ratingFilter").value = "0";
  $("#sortSelect").value = "popular";
  $("#productGrid").innerHTML = matches.map(productCard).join("");
}

function setupPlanner() {
  const pieces = ["Sofa", "Bed", "Table", "Chair", "Cabinet"];
  const piecePalette = $("#piecePalette");
  if (piecePalette) {
    piecePalette.innerHTML = pieces.map(piece => `<button class="piece" data-piece="${piece}">${piece}</button>`).join("");
  }
}

function addRoomPiece(name) {
  const room = $("#roomCanvas");
  const item = document.createElement("div");
  item.className = "room-item";
  item.textContent = name;
  item.style.left = `${20 + Math.random() * 120}px`;
  item.style.top = `${20 + Math.random() * 80}px`;
  room.append(item);
  makeDraggable(item);
}

function makeDraggable(item) {
  let startX = 0;
  let startY = 0;
  let itemX = 0;
  let itemY = 0;

  item.addEventListener("pointerdown", event => {
    item.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    itemX = parseInt(item.style.left, 10) || 0;
    itemY = parseInt(item.style.top, 10) || 0;
  });

  item.addEventListener("pointermove", event => {
    if (!item.hasPointerCapture(event.pointerId)) return;
    const room = $("#roomCanvas").getBoundingClientRect();
    const x = Math.round((itemX + event.clientX - startX) / 16) * 16;
    const y = Math.round((itemY + event.clientY - startY) / 16) * 16;
    item.style.left = `${Math.max(0, Math.min(x, room.width - item.offsetWidth))}px`;
    item.style.top = `${Math.max(0, Math.min(y, room.height - item.offsetHeight))}px`;
  });
}

function observeReveals() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal:not(.visible)").forEach(element => observer.observe(element));
}

function animateCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count);
      const duration = 1300;
      const start = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = Math.floor(target * progress).toLocaleString("en-US") + "+";
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      observer.unobserve(element);
    });
  }, { threshold: 0.5 });
  $$("[data-count]").forEach(element => observer.observe(element));
}

function createParticles() {
  const holder = $("#particles");
  for (let i = 0; i < 34; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${80 + Math.random() * 40}%`;
    particle.style.setProperty("--duration", `${8 + Math.random() * 10}s`);
    particle.style.animationDelay = `${Math.random() * 8}s`;
    holder.append(particle);
  }
}

function updateHeader() {
  $("#siteHeader").classList.toggle("scrolled", window.scrollY > 40);
  const sections = ["home", "shop", "categories", "about", "contact"];
  let current = "home";
  sections.forEach(id => {
    if (document.getElementById(id).offsetTop <= window.scrollY + 180) current = id;
  });
  $$(".nav-link").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}

function buttonRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const rect = button.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - diameter / 2}px`;
  circle.style.top = `${event.clientY - rect.top - diameter / 2}px`;
  circle.className = "ripple";
  button.append(circle);
  setTimeout(() => circle.remove(), 600);
}

document.addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  const quick = event.target.closest("[data-quick]");
  const wish = event.target.closest("[data-wishlist]");
  const qty = event.target.closest("[data-qty]");
  const remove = event.target.closest("[data-remove]");
  const filterCategory = event.target.closest("[data-filter-category], .category-card");
  const piece = event.target.closest("[data-piece]");
  const style = event.target.closest("[data-style]");

  if (add) addToCart(Number(add.dataset.add));
  if (quick) openQuickView(Number(quick.dataset.quick));
  if (wish) toggleWishlist(Number(wish.dataset.wishlist));
  if (qty) changeQty(Number(qty.dataset.qty), Number(qty.dataset.delta));
  if (remove) {
    cart = cart.filter(entry => entry.id !== Number(remove.dataset.remove));
    saveCart();
    renderCart();
  }
  if (filterCategory) {
    const value = filterCategory.dataset.filterCategory || filterCategory.dataset.category;
    $("#categoryFilter").value = value;
    renderProducts();
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  }
  if (piece) addRoomPiece(piece.dataset.piece);
  if (style) quizResult(style.dataset.style);
});

["searchInput", "categoryFilter", "priceFilter", "ratingFilter", "sortSelect"].forEach(id => {
  document.getElementById(id).addEventListener("input", renderProducts);
});

$("#cartOpen").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#backdrop").addEventListener("click", closeCart);
$("#checkoutJump").addEventListener("click", closeCart);
$("#modalClose").addEventListener("click", closeQuickView);
$("#quickModal").addEventListener("click", event => {
  if (event.target.id === "quickModal") closeQuickView();
});

$("#menuToggle").addEventListener("click", () => {
  const nav = $("#mainNav");
  nav.classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", nav.classList.contains("open"));
});

$$(".nav-link").forEach(link => {
  link.addEventListener("click", () => $("#mainNav").classList.remove("open"));
});

$("#showPrev").addEventListener("click", () => moveShowcase(-1));
$("#showNext").addEventListener("click", () => moveShowcase(1));
$$(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    $$(".tab").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    showcaseMode = tab.dataset.showcase;
    showcaseIndex = 0;
    renderShowcase();
  });
});

const resetRoomButton = $("#resetRoom");
if (resetRoomButton) {
  resetRoomButton.addEventListener("click", () => {
    const roomCanvas = $("#roomCanvas");
    if (roomCanvas) roomCanvas.innerHTML = "";
  });
}

$("#checkoutForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!cart.length) {
    openCart();
    return;
  }
  $("#successScreen").classList.add("show");
  cart = [];
  saveCart();
  renderCart();
  event.target.reset();
  setTimeout(() => $("#successScreen").classList.remove("show"), 3600);
});

document.addEventListener("submit", event => {
  if (event.target.matches(".contact-form, .newsletter")) {
    event.preventDefault();
    event.target.reset();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("load", () => {
  setTimeout(() => $("#loader").classList.add("hide"), 450);
});
setInterval(() => moveShowcase(1), 4600);

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts();
  renderCart();
  renderShowcase();
  renderTestimonials();
  setupQuiz();
  setupPlanner();
  createParticles();
  observeReveals();
  animateCounters();
  updateHeader();
  $$(".btn").forEach(button => button.addEventListener("click", buttonRipple));
});
