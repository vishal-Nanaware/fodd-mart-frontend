function userlogged() {
  let user = usercheck();
  if (user) {
    let navlist = document.getElementById("loginDetail");
    let div = user;
    navlist.innerHTML = div;
    navlist.style.color = "black";
    navlist.style.textTransform = "capitalize";
    console.log(navlist);
    navlist.removeAttribute("href");
    console.log(navlist.innerHTML);
  }
  let category = localStorage.getItem("category");
  if (category) {
    document.getElementById("category").innerText = `${category} Food`;
  }
}

function usercheck() {
  let user = localStorage.getItem("user");
  if (!user) {
    return false;
  }
  return user;
}

userlogged();
getData();  

async function getData() {
  let category = localStorage.getItem("category");

  if (category) {
    fetch("http://localhost:3000/product/category", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        category: category,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        getProducts(data);
      });
  } else {
    fetch("http://localhost:3000/product/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        getProducts(data);
      });
  }
}

function createCard(item) {
  let card = document.getElementById("cardDiv");
  let child = document.createElement("div");
  let itemName = document.createElement("h3");
  let imgDiv = document.createElement("div");
  let itemPrice = document.createElement("h3");
  let itemDescription = document.createElement("p");
  let addCartbtn = document.createElement("button");

  itemName.innerText = item.productName;

  itemPrice.innerText = `$ ${item.productPrice}`;
  addCartbtn.innerText = "Order Now";
  // let img = document.createElement("img");
  // img.src = item.img;
  // img.height = "100";

  // imgDiv.classList.add("imgdiv");
  // imgDiv.appendChild(img);
  child.classList.add("card");
  itemName.classList.add("itemName");
  itemDescription.innerText = item.productDescription;
  itemDescription.classList.add("itemDescription");
  itemName.addEventListener("click", view);
  itemName.setAttribute("id", item._id);
  // addCartbtn.addEventListener("click", order);
  addCartbtn.setAttribute("id", item._id);
  card.append(child);
  child.append(itemName);
  child.append(itemPrice);
  child.append(itemDescription);
  child.append(addCartbtn);
  // child.append(imgDiv);
}


function getProducts(data) {
  console.log(data);
  for (i = 0; i < data.length; i++) {
    createCard(data[i]);
  }
}


// getProducts(data);

function order(e) {
  console.log(e.target.id);
  fetch(`http://localhost:3000/product/id?id=${e.target.id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function view(e) {
  console.log(e.target.id);
  if (e.target.id == "") {
    return;
  }
  sessionStorage.setItem("ProductId", e.target.id);
  window.location.href = "../item/item.html";
}
