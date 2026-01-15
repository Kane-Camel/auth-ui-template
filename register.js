/* ---------- THEME ---------- */
const switcher = document.getElementById("themeSwitch");

// Load from storage
if(localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  switcher.checked = true;
}

// Change theme
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
document.getElementById("registerForm").addEventListener("submit", e=>{
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const pass = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirmPassword").value.trim();

  if(pass !== confirm){
    alert("Passwords do not match!");
    return;
  }

  alert(`Welcome ${name}! Your account has been created.`);
});
