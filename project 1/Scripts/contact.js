// --- Contact Form ---
if(document.getElementById("contactForm")){
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name && email && message){
      localStorage.setItem("contactMsg", JSON.stringify({name,email,message}));
      document.getElementById("formMsg").innerText = "Message sent! Thank you.";
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// --- FAQ Accordion ---
let acc = document.getElementsByClassName("accordion");
for(let i=0; i<acc.length; i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
  });
}