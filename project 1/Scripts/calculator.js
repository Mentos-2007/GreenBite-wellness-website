// --- Calorie Calculator ---
if (document.getElementById("calcForm")) {
  document.getElementById("calcForm").addEventListener("submit", function(e){
    e.preventDefault();

    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let activity = parseFloat(document.getElementById("activity").value);

    if(!age || !gender || !height || !weight || !activity){
      alert("Please fill in all fields.");
      return;
    }

    let bmr = 0;
    if(gender === "male"){
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let tdee = Math.round(bmr * activity);

    // Macros
    let carbs = Math.round((tdee * 0.50) / 4);
    let protein = Math.round((tdee * 0.20) / 4);
    let fat = Math.round((tdee * 0.30) / 9);

    // Display
    document.getElementById("bmr").innerText = Math.round(bmr);
    document.getElementById("tdee").innerText = tdee;
    document.getElementById("carbs").innerText = carbs;
    document.getElementById("protein").innerText = protein;
    document.getElementById("fat").innerText = fat;

    // Bars
    document.getElementById("carbBar").style.width = "50%";
    document.getElementById("proteinBar").style.width = "20%";
    document.getElementById("fatBar").style.width = "30%";

    document.getElementById("results").style.display = "block";
  });
}
