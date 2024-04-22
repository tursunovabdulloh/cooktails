const loader = document.querySelector(".loader");
const detailsBtn = document.querySelector("#detailsBtn");
const detailsDiv = document.querySelector("#detailsDiv");
const urlParams = new URLSearchParams(window.location.search);
const cocktailid = urlParams.get("id");
console.log(cocktailid);

fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailid}`)
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("hidden");
    creatDetails(data.drinks[0]);
  });

function creatDetails(data) {
  detailsDiv.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("card");
  detailsDiv.innerHTML = `
      <a id="detailsBtn" class="btn btn-primary" href="./index.html">back home</a>
        <h2 class="section-title">${data.strDrink}</h2>
        <div class="drink">
          <img
            src="${data.strDrinkThumb}"
            alt="${data.strDrinkThumb}"
          />
          <div class="drink-info">
            <p><span class="drink-data">name :</span> ${data.strDrink}</p>
            <p><span class="drink-data">category :</span> ${data.strCategory}</p>
            <p><span class="drink-data">info :</span> ${data.strAlcoholic}</p>
            <p><span class="drink-data">glass :</span> ${data.strGlass}</p>
            <p>
              <span class="drink-data">instructons :</span> ${data.strInstructions}
            </p>
            <p>
              <span class="drink-data">ingredients :</span><span> ${data.strIngredient1}</span
              ><span> ${data.strIngredient2}</span><span> ${data.strIngredient3}</span
              ><span> ${data.strIngredient4}</span>
            </p>
          </div>
        </div>
      `;
  detailsDiv.appendChild(div);
}
