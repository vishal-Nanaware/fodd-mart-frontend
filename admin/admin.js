const offerDiv = document.getElementById("offer-div");
const usersDiv = document.getElementById("users-div");
const productDiv = document.getElementById("product-div");
const url = "http://localhost:3000/admin";
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
  console.log(item);
  let table = document.getElementsByTagName("table")[0];

  let tr = document.createElement("tr");
  let td_id = document.createElement("td");
  let td_category = document.createElement("td");
  let td_Name = document.createElement("td");
  let td_Price = document.createElement("td");
  let td_calories = document.createElement("td");
  let td_description = document.createElement("td");

  td_Name.innerText = item.productName;
  td_id.innerText = item._id;
  td_description.innerText = item.productDescription;
  td_category.innerText = item.productCategory;
  td_Price.innerText = item.productPrice;
  td_calories.innerText = item.productCalrie;

  tr.append(td_id, td_category, td_Name, td_Price, td_calories, td_description);
  table.append(tr);
}

//fetching data

function formTable(data) {
  for (i = 0; i < data.length; i++) {
    createTable(data[i]);
  }
}

function cleanTable(table) {
  
  while (table.rows.length > 1) {
    
    table.deleteRow(1);
  }
  console.log("table is clean", table.rows.length);
}
function getProducts() {
  let table = document.getElementsByTagName("table")[0];

  cleanTable(table);
  try {
    fetch("http://localhost:3000/admin")
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("count").innerText = data.data.length;
        console.log(data.data.length);
        formTable(data.data);
      });
  } catch (e) {
    console.log(e);
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = {};

    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];

      formData[element.id] = element.value;

      // element.value = "";
    }
    console.log(formData);
    sendData(formData);
  });
});

function sendData(data) {
  console.log(data.category);
  try {
    fetch(`${url}/addproduct`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: data.name,
        category: data.category,
        price: data.price,
        calories: data.calories,
        description: data.description,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (e) {
    console.log("error:", e);
  }
}

function addProduct() {
  const form = document.getElementById("form");
  if (form.style.display === "block") {
    form.style.display = "none";
    return;
  }
  form.style.display = "block";
}
