const btn = document.querySelector(".btn");
const coctailCard = document.querySelector("#coctailCard");
const loader = document.querySelector("#loader");
const input = document.querySelector("#input");

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("hidden");
    creatCoktails(data.drinks);
  });

function creatCoktails(data) {
  coctailCard.innerHTML = "";
  data.forEach(
    ({ idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic }) => {
      const div = document.createElement("div");
      div.classList.add("card");
      coctailCard.innerHTML += `
   <article class="cocktail">
   <div class="img-container"><img src="${strDrinkThumb}" alt="A1"></div>
   <div class="cocktail-footer"><h3>${strDrink}</h3><h4>${strGlass}</h4><p>${strAlcoholic}</p>
   <a  class="btn btn-primary btn-details" href="./about.html?id=${idDrink}">details</a></div>
   </article>
      `;
      coctailCard.appendChild(div);
      console.log(idDrink);
    }
  );
}

input.addEventListener("input", (e) => {
  coctailCard.innerHTML = "";
  loader.classList.remove("hidden");
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      creatCoktails(data.drinks);
    });
});
