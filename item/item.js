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
    getData(ProductId)
  }
}
getProductid();

function render(data){
    console.log(data._id)
   document.getElementById("itemName").innerText = data.productName;
   document.getElementById("itemDes").innerText = data.productDescription;
   document.getElementById("price").innerText = `$ ${data.productPrice}`;
   document.getElementById("cal").innerText = `${data.productCalrie} Cal`;
   document.getElementById("orderBtn").setAttribute("id",data._id); 

    
}