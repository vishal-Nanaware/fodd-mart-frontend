
let items = [
  {id: 0, name: "American",url: "url('img/american.jpg')",},
  { id: 1, name: "Italian", url: "url(img/italian.jpg)" },
  { id: 2, name: "Japanese", url: "url(img/japanese.jpg)" },
  { id: 3, name: "Korean", url: "url(img/korean.jpg)" },
  { id: 4, name: "Sea Food", url: "url(img/sea.jpg)" },
  { id: 5, name: "Indian Food", url: "url(img/indian.jpg)" },
  { id: 6, name: "Thai Food", url: "url(img/thai.jpg)" },
  { id: 7, name: "Mexican Spicy", url: "url(img/mexican.jpg)" },
];

function createCard(arrOfItem) {
  for (i = 0; i < arrOfItem.length; i++) {
    let parent = document.getElementById("cardDiv");
    let card = document.createElement("div");
    let itemName = document.createElement("h2");
    card.setAttribute("id", arrOfItem[i].id);
    card.classList.add("card");
    card.style.backgroundImage = arrOfItem[i].url;
    card.style.backgroundSize = "cover";
    card.style.display = "flex";
    card.style.alignItems = "flex-end";

    card.addEventListener("click", (e) => {
      let div = e.target;
      console.log(div.id);
      console.log(div.innerText);
    });
    itemName.innerText = arrOfItem[i].name;
    parent.appendChild(card);
    card.appendChild(itemName);
    // console.log(parent);
  }
}

createCard(items);
