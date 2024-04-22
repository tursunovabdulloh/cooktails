const urlParam = new URLSearchParams(window.location.search);
const myParam = coctailCard.get("card2");

const loader = document.querySelector("#loader");
const detailsBtn = document.querySelector("#detailsBtn");
const detailsDiv = document.querySelector("#detailsDiv");

// function creatDetails(data2) {
//   detailsDiv.innerHTML = "";
//   data2.forEach(
//     ({
//       idDrink,
//       strDrinkThumb,
//       strDrink,
//       strCategory,
//       strAlcoholic,
//       strGlass,
//       strInstructions,
//       strIngredient1,
//       strIngredient2,
//       strIngredient3,
//       strIngredient4,
//     }) => {
//       const div2 = document.createElement("div");
//       div2.classList.add("card2");
//       detailsDiv.innerHTML = `
//       <a id="detailsBtn" class="btn btn-primary" href="./index.html">back home</a>
//         <h2 class="section-title">${strDrink}</h2>
//         <div class="drink">
//           <img
//             src="${strDrinkThumb}"
//             alt="${strDrinkThumb}"
//           />
//           <div class="drink-info">
//             <p><span class="drink-data">name :</span> ${strDrink}</p>
//             <p><span class="drink-data">category :</span> ${strCategory}</p>
//             <p><span class="drink-data">info :</span> ${strAlcoholic}</p>
//             <p><span class="drink-data">glass :</span> ${strGlass}</p>
//             <p>
//               <span class="drink-data">instructons :</span> ${strInstructions}
//             </p>
//             <p>
//               <span class="drink-data">ingredients :</span><span> ${strIngredient1}</span
//               ><span> ${strIngredient2}</span><span> ${strIngredient3}</span
//               ><span> ${strIngredient4}</span>
//             </p>
//           </div>
//         </div>
//       `;
//       detailsDiv.appendChild(div2);
//     }
//   );
// }
// fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
//   .then((res) => res.json())
//   .then((data2) => {
//     loader.classList.add("hidden");
//     creatDetails(data2);
//   });
