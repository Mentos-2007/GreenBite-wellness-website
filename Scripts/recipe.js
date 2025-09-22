// --- Recipes Data ---
let recipes = [
  {
    title: "Avocado Toast",
    category: "breakfast",
    ingredients: ["2 slices bread", "1 avocado", "Salt", "Pepper"],
    steps: ["Toast bread", "Mash avocado", "Spread on bread", "Season"],
    nutrition: { cal: 250, protein: "6g", carbs: "28g", fat: "12g" }
  },
  {
    title: "Chicken Salad",
    category: "lunch",
    ingredients: ["Chicken breast", "Lettuce", "Tomatoes", "Cucumber"],
    steps: ["Grill chicken", "Chop veggies", "Mix together", "Serve"],
    nutrition: { cal: 400, protein: "30g", carbs: "15g", fat: "18g" }
  },
  {
    title: "Pasta Bowl",
    category: "dinner",
    ingredients: ["Pasta", "Tomato sauce", "Cheese", "Basil"],
    steps: ["Boil pasta", "Heat sauce", "Mix pasta with sauce", "Top with cheese"],
    nutrition: { cal: 500, protein: "15g", carbs: "70g", fat: "14g" }
  }
];

// --- Display Recipes ---
function displayRecipes(list) {
  let container = document.getElementById("recipeContainer");
  container.innerHTML = "";
  list.forEach((r, i) => {
    let card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <h3>${r.title}</h3>
      <p>${r.category}</p>
    `;
    card.addEventListener("click", () => openRecipe(i));
    container.appendChild(card);
  });
}
displayRecipes(recipes);

// --- Modal Logic ---
function openRecipe(index) {
  let r = recipes[index];
  document.getElementById("modalTitle").innerText = r.title;

  let ingList = document.getElementById("modalIngredients");
  ingList.innerHTML = "";
  r.ingredients.forEach(i => {
    let li = document.createElement("li");
    li.innerText = i;
    ingList.appendChild(li);
  });

  let stepList = document.getElementById("modalSteps");
  stepList.innerHTML = "";
  r.steps.forEach(s => {
    let li = document.createElement("li");
    li.innerText = s;
    stepList.appendChild(li);
  });

  let nutritionRow = document.getElementById("modalNutrition");
  nutritionRow.innerHTML = `
    <td>${r.nutrition.cal}</td>
    <td>${r.nutrition.protein}</td>
    <td>${r.nutrition.carbs}</td>
    <td>${r.nutrition.fat}</td>
  `;

  document.getElementById("recipeModal").style.display = "block";
}

// Close Modal
if(document.getElementById("closeModal")){
  document.getElementById("closeModal").addEventListener("click", function(){
    document.getElementById("recipeModal").style.display = "none";
  });
}

// --- Search + Filter ---
if(document.getElementById("searchInput")){
  document.getElementById("searchInput").addEventListener("keyup", function(){
    let keyword = this.value.toLowerCase();
    let filtered = recipes.filter(r => r.title.toLowerCase().includes(keyword));
    displayRecipes(filtered);
  });
}

if(document.getElementById("filterCategory")){
  document.getElementById("filterCategory").addEventListener("change", function(){
    let value = this.value;
    let filtered = value === "all" ? recipes : recipes.filter(r => r.category === value);
    displayRecipes(filtered);
  });
}
