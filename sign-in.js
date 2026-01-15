/* ---------- THEME ---------- */
const switcher = document.getElementById("themeSwitch");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
  switcher.checked = true;
}

// Toggle
switcher.addEventListener("change", ()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

/* ---------- BUBBLES ---------- */
const bubbles = document.querySelector(".bubbles");
for(let i=0;i<40;i++){
  const s=document.createElement("span");
  s.style.left=Math.random()*window.innerWidth+"px";
  s.style.width=s.style.height=(Math.random()*20+10)+"px";
  s.style.animationDelay=(Math.random()*10)+"s";
  bubbles.appendChild(s);
}

/* ---------- FORM ---------- */
document.getElementById("signInForm").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Sign In Successful!");
});
