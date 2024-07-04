function getData(ProductId) {
  try {
    fetch(`http://localhost:3000/product/ProductId?ProductId=${ProductId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        render(data);
        console.log(data);
      });
  } catch (e) {
    console.log("something went wrong");
  }
}

function getProductid() {
  let ProductId = sessionStorage.getItem("ProductId");
  if (ProductId) {
    getData(ProductId);
  }
}
getProductid();

function checkUserToken(value) {
  if (value) {
    return true;
  }
  return false;
}

function order(e) {
  addProduct()
}

function render(data) {
  console.log(data._id);
  document.getElementById("itemName").innerText = data.productName;
  document.getElementById("itemDes").innerText = data.productDescription;
  document.getElementById("price").innerText = `$ ${data.productPrice}`;
  document.getElementById("cal").innerText = `${data.productCalrie} Cal`;
  document.getElementById("orderBtn").setAttribute("id", data._id);
  document.querySelector(".orderBtn").addEventListener("click", order);
}

function addProduct() {
  const form = document.getElementById("form");
  if (form.style.display === "block") {
    form.style.display = "none";
    return;
  }
  form.style.display = "block";
}
function counter(value){
 
  if(value == "increase"){
   let count =  document.getElementById("counterValue").innerText ;
   count++
   document.getElementById("counterValue").innerText = count 
  }else{
      let count = document.getElementById("counterValue").innerText;
      if(count == 1) return
      count--;
      document.getElementById("counterValue").innerText = count;
  }
}