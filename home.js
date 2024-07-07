let items = [
  {
    id: 0,
    name: "American",
    url: "url('img/american.jpg')",
    value: "American",
  },
  { id: 1, name: "italian", url: "url(img/italian.jpg)", value: "italian" },
  { id: 2, name: "Japanese", url: "url(img/japanese.jpg)", value: "Japan" },
  { id: 3, name: "Korean", url: "url(img/korean.jpg)", value: "Korea" },
  { id: 4, name: "Sea Food", url: "url(img/sea.jpg)", value: "American" },
  { id: 5, name: "Indian Food", url: "url(img/indian.jpg)", value: "India" },
  { id: 6, name: "Thai Food", url: "url(img/thai.jpg)", value: "Thailand" },
  {
    id: 7,
    name: "Mexican Spicy",
    url: "url(img/mexican.jpg)",
    value: "Mexico",
  },
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
    card.setAttribute("name", arrOfItem[i].value);
    card.addEventListener("click", getProduct);
    itemName.innerText = arrOfItem[i].name;
    parent.appendChild(card);
    card.appendChild(itemName);
    // console.log(parent);
  }
}

async function getProduct(e) {
  let div = e.target;
  console.log(div.getAttribute('name'));
  if(div.id == ""){
    return false
  }
 localStorage.setItem("category", div.getAttribute("name"));
 
  window.location.href = "./product/products.html";
}

createCard(items);

function usercheck() {
  let user = localStorage.getItem("user");
  if (!user) {
    return false;
  }
  return user;
}


function  userContol(){

}
function userlogged() {
  let user = usercheck();
  if (user) {
    let liItem = document.getElementById("loginDetail");
    liItem.innerHTML = ""
    const userDiv = document.createElement('div')
   const select = document.createElement('select')
   const userOption = document.createElement("option");
   const option = document.createElement('option')
   const ancher = document.createElement('a')
  
    ancher.href = "/cart"
    ancher.innerText= "cart"
  userOption.innerText = user;

    liItem.append(userDiv)
    
    userDiv.append(select)
    select.appendChild(userOption);
    select.appendChild(option)
    option.append(ancher)
   
  }
}
userlogged();

function Test(){
  window.location.href = "../product/products.html"
}