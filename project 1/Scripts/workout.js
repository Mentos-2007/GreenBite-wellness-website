// --- Workout Generator ---
if(document.getElementById("workoutForm")){
  document.getElementById("workoutForm").addEventListener("submit", function(e){
    e.preventDefault();
    let body = document.getElementById("bodyPart").value;
    let equip = document.getElementById("equipment").value;

    let workouts = {
      arms: ["Push-ups", "Bicep curls", "Tricep dips"],
      legs: ["Squats", "Lunges", "Calf raises"],
      full: ["Burpees", "Jumping jacks", "Mountain climbers"]
    };

    let chosen = workouts[body];
    if(equip === "dumbbells") chosen.push("Dumbbell presses");

    let list = document.getElementById("exerciseList");
    list.innerHTML = "";
    chosen.forEach(ex => {
      let li = document.createElement("li");
      li.innerText = ex;
      list.appendChild(li);
    });

    document.getElementById("workoutResults").style.display = "block";
  });

  // Timer
  document.getElementById("startTimer").addEventListener("click", function(){
    let time = 30;
    let timer = setInterval(() => {
      document.getElementById("timer").innerText = time;
      time--;
      if(time < 0){
        clearInterval(timer);
        alert("Time's up!");
      }
    }, 1000);
  });
}