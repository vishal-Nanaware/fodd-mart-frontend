async function getData(ProductId) {
  try {
    const response = await fetch(
      `http://localhost:3000/product/ProductId?ProductId=${ProductId}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    console.log("Data fetched:", data);
    return data;
  } catch (e) {
    console.log("something went wrong");
  }
}

async function getProductid() {
  let ProductId = sessionStorage.getItem("ProductId");
  if (ProductId) {
    try {
      let data = await getData(ProductId);
      console.log(data, " :from getProduct");
      render(data);
    } catch (e) {
      console.log("Error fetching data:", e);
    }
  } else {
    console.log("No ProductId found in sessionStorage.");
  }
}
getProductid();

function checkUserToken(value) {
  if (value) {
    return true;
  }
  return false;
}

async function orderBtn(e) {
  console.log(e.target.id);
  try {
    let data = await getData(e.target.id);
    console.log(data, ": order");
    addValueToForm(data);
  } catch (e) {
    console.log("something went wrong");
  }
}

function render(data) {
  console.log(data._id);
  document.getElementById("itemName").innerText = data.productName;
  document.getElementById("itemDes").innerText = data.productDescription;
  document.getElementById("price").innerText = `$ ${data.productPrice}`;
  document.getElementById("cal").innerText = `${data.productCalrie} Cal`;
  document.getElementById("orderBtn").setAttribute("id", data._id);
  document.querySelector(".orderBtn").addEventListener("click", orderBtn);
}

function checkUserToken(value) {
  // if (value) {
  //   return true;
  // }
  // return false;
  return true;
}

function addValueToForm(data) {
  let userTokencExist = checkUserToken(localStorage.getItem("token"));

  if (userTokencExist) {
    document.getElementById("ProductNameValue").innerText = data.productName;
    document.getElementById("formPriceValue").innerText = data.productPrice;
    document.getElementById("formCalValue").innerText = data.productCalrie;
    const quantity = document.getElementById("counterValue").innerText;
    document.getElementById("formQuaValue").innerText = quantity;
    document.getElementById("ProductNameValue").setAttribute("value", data._id);
    addProduct();
  } else {
    alert("Need a sign Up for Order");
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
function counter(value) {
  const counter = document.getElementById("counterValue");
  const formQuaValue = document.getElementById("formQuaValue");
  if (value == "increase") {
    let count = counter.innerText;
    count++;
    counter.innerText = count;
    formQuaValue.value = count;
    
  } else {
    let count = counter.innerText;
    if (count == 1) return;
    count--;
    counter.innerText = count;
    formQuaValue.value = count;
  }
}




//order Confirm
document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("form");

  form.addEventListener("submit",async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = {};

    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];
      console.log(element," : from form data")
      formData[element.id] = element.value;

      element.value = "";
       const formQuaValue = document.getElementById("formQuaValue")
       formQuaValue.value = "1"

    }

    let id = document.getElementById("ProductNameValue").getAttribute('value');
    console.log(id)
    // let data = await getData(id);
    // console.log(data)
    formData.productId = id
    console.log(typeof formData.formQuaValue);
    console.log("Form Data:" , formData);
    console.log(localStorage.getItem('token'))
    sendOrder(formData)
    
  });
});

function sendOrder(data){
  const token = localStorage.getItem("token");
  fetch(`http://localhost:3000/product/order`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      token: token,
      userOrder: data,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

//userCheck
function userlogged() {
  let user = usercheck();
  if (user) {
   document.getElementById("userDetails").innerHTML = user
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
