// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.style.background = "rgba(23,43,54,.95)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
  } else {
    navbar.style.background = "rgba(23,43,54,.75)";
    navbar.style.boxShadow = "none";
  }
});

// ==========================
// PRICING
// ==========================

const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");
const currency = document.getElementById("currency");

const prices = document.querySelectorAll(".price");
const periods = document.querySelectorAll(".period");

const currencyRates = {
  "$": 1,
  "₹": 83,
  "€": 0.92
};

function updatePricing(isYearly = false) {

  const symbol = currency.value;
  const rate = currencyRates[symbol];

  prices.forEach(price => {

    const month = Number(price.dataset.month);
    const year = Number(price.dataset.year);

    const value = isYearly ? year : month;

    price.innerHTML =
      symbol + Math.round(value * rate);

  });

  periods.forEach(period => {
    period.textContent = isYearly ? "/year" : "/month";
  });

}

monthlyBtn.addEventListener("click", () => {

  monthlyBtn.classList.add("active");
  yearlyBtn.classList.remove("active");

  updatePricing(false);

});

yearlyBtn.addEventListener("click", () => {

  yearlyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");

  updatePricing(true);

});

currency.addEventListener("change", () => {

  updatePricing(yearlyBtn.classList.contains("active"));

});

// ==========================
// FAQ ACCORDION
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const answer = item.querySelector("p");

  answer.style.display = "none";

  item.querySelector("h3").addEventListener("click", () => {

    const visible = answer.style.display === "block";

    document.querySelectorAll(".faq-item p").forEach(a => {
      a.style.display = "none";
    });

    answer.style.display = visible ? "none" : "block";

  });

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
  ".feature-card,.price-card,.testimonial-card,.bento-card,.trusted-item,.stat"
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

},{
  threshold:.2
});

revealElements.forEach(el=>{

  el.style.opacity="0";
  el.style.transform="translateY(40px)";
  el.style.transition=".7s";

  observer.observe(el);

});

// ==========================
// HERO FLOATING EFFECT
// ==========================

document.addEventListener("mousemove",(e)=>{

  const x=(e.clientX/window.innerWidth-.5)*20;
  const y=(e.clientY/window.innerHeight-.5)*20;

  document.querySelectorAll(".floating-card").forEach((card,index)=>{

    card.style.transform=`translate(${x*(index+1)}px,${y*(index+1)}px)`;

  });

});

// ==========================
// BUTTON RIPPLE
// ==========================

document.querySelectorAll(".btn-primary,.btn-outline").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.offsetX;
const y=e.offsetY;

circle.style.left=x+"px";
circle.style.top=y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{
circle.remove();
},600);

});

});