// Rotating slogans
let slogans = [
  "Eat Well, Live Better",
  "Healthy Habits, Happy Life",
  "Fuel Your Body, Free Your Mind",
  "Green Choices, Great Life"
];
let sloganIndex = 0;
function changeSlogan() {
  document.getElementById("slogan").innerText = slogans[sloganIndex];
  sloganIndex = (sloganIndex + 1) % slogans.length;
}
setInterval(changeSlogan, 3000); // every 3s

// Daily Tip (based on date)
let tips = [
  "Drink at least 8 glasses of water today.",
  "Take a 10-minute walk after each meal.",
  "Eat at least 5 portions of fruits and veggies.",
  "Practice deep breathing for 5 minutes.",
  "Avoid sugary drinks and go for water instead."
];
let today = new Date().getDate();
document.getElementById("dailyTip").innerText = tips[today % tips.length];

// Newsletter Subscription
document.getElementById("subscribeBtn").addEventListener("click", function() {
  let email = document.getElementById("newsletterEmail").value;
  if(email) {
    localStorage.setItem("newsletterEmail", email);
    alert("Thanks for subscribing!");
    document.getElementById("newsletterEmail").value = "";
  } else {
    alert("Please enter a valid email.");
  }
});

// Mobile Nav
document.getElementById("hamburger").addEventListener("click", function(){
  document.getElementById("navLinks").classList.toggle("show");
});


