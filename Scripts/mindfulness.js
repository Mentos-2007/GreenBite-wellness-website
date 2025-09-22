// --- Mindfulness ---
if(document.getElementById("startMeditation")){
  document.getElementById("startMeditation").addEventListener("click", function(){
    let time = 60;
    let timer = setInterval(() => {
      document.getElementById("meditationTimer").innerText = time;
      time--;
      if(time < 0){
        clearInterval(timer);
        alert("Session complete!");
        localStorage.setItem("meditationDone", "true");
      }
    }, 1000);
  });
}

if(document.getElementById("playAudio")){
  document.getElementById("playAudio").addEventListener("click", function(){
    document.getElementById("ambientAudio").play();
  });
}
if(document.getElementById("pauseAudio")){
  document.getElementById("pauseAudio").addEventListener("click", function(){
    document.getElementById("ambientAudio").pause();
  });
}
