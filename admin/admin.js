const offerDiv = document.getElementById("offer-div");
const usersDiv = document.getElementById("users-div");
const productDiv = document.getElementById("product-div");

document.getElementById("offerList").addEventListener("click", () => {
  displayDiv(offerDiv);
});
document.getElementById("userList").addEventListener("click", () => {
  displayDiv(usersDiv);
});
document.getElementById("productList").addEventListener("click", () => {
  displayDiv(productDiv);
});

function hideDiv() {
  offerDiv.style.display = "none";
  usersDiv.style.display = "none";
  productDiv.style.display = "none";
}
function displayDiv(div) {
  hideDiv();
  div.style.display = "block";
}

function createTable(item) {
  let table = document.getElementsByTagName('table')
  let tr = document.createElement('tr')
  let td_id = document.createElement('td')
  let td_category = document.createElement("td");
  let td_Name = document.createElement("td");
  let td_Price = document.createElement("td");
  let td_calories = document.createElement("td");
  let td_description = document.createElement("td");

  td_Name.innerText = item.name
  td_id.innerText = item.id
  td_description.innerText = item.description
  td_category.innerText = item.origin
  td_Price.innerText = item.price
  td_calories.innerText = item.calories

  tr.append(td_id , td_calories , td_Name, td_Price, td_calories, td_description) 
  table.appendchild(tr)

}

//fetching data

function formTable(data){
  for(i = 0;i<data.lenght;i++){
    
  }
}

function getProducts() {
  try {
    fetch("http://localhost:3000/admin")
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)

      });
  } catch (e) {
    console.log(e);
  }
}
