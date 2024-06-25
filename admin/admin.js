const data = [
  {
    name: "Hamburger",
    description:
      "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
    img: "img/hamburger.jpg",
    origin: "United States",
    price: 8.99,
    calories: 550,
  },
  {
    name: "Apple Pie",
    description:
      "A dessert consisting of a pastry crust filled with sliced apples, sugar, and spices.",
    img: "img/applePie.jpg",
    origin: "United States",
    price: 4.99,
    calories: 320,
  },
  {
    name: "Pancakes",
    description:
      "A flat cake, often thin and round, prepared from a starch-based batter and cooked on a hot surface.",
    img: "img/pancakes.jpg",
    origin: "United States",
    price: 5.99,
    calories: 350,
  },

  {
    name: "Macaroni and Cheese",
    description:
      "A dish of cooked macaroni pasta and a cheese sauce, typically cheddar.",
    img: "img/macoroni.jpg",
    origin: "United States",
    price: 7.49,
    calories: 450,
  },
];

const offerDiv = document.getElementById('offer-div');
const usersDiv = document.getElementById('users-div')
const productDiv = document.getElementById('product-div')



document.getElementById("offerList").addEventListener('click', ()=>{
    displayDiv(offerDiv)
    

})
document.getElementById("userList").addEventListener("click", () => {
  displayDiv(usersDiv);
});
document.getElementById("productList").addEventListener("click", () => {
  displayDiv(productDiv);

});


function hideDiv(){
    offerDiv.style.display = "none"
    usersDiv.style.display = "none";
    productDiv.style.display = "none";
}
function displayDiv(div){
    hideDiv()
    div.style.display = "block"
}

function createCard(item){
  let card= document.getElementById("cardDiv");
  let child = document.createElement("div");
  let itemName = document.createElement("h3");
  let imgDiv = document.createElement('div')
  let itemPrice =  document.createElement('h3')
  let itemDescription = document.createElement('p')

  itemName.innerText = item.name
  itemPrice.innerText = `$ ${item.price}`
  let img = document.createElement('img');
  img.src = item.img
  img.height = "100"
  console.log("her")
  child.classList.add("card")
  itemName.classList.add("itemName")
  imgDiv.classList.add("imgdiv")
  imgDiv.appendChild(img)
  itemDescription.innerText = item.description;
  itemDescription.classList.add("itemDescription");

  card.append(child)
  child.append(itemName)
  child.append(imgDiv)
  child.append(itemPrice)
  child.append(itemDescription)




}
function getProducts(data){
 for(i=0;i<data.length;i++){
  console.log(data[i])
  createCard(data[i])

 }
}
 getProducts(data);