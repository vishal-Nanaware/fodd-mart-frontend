function getData(id) {
try {
      fetch(`http://localhost:3000/product/id?id=${id}`, {
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
    console.log("something went wrong")
}
        
}

function getProductid() {
  let ProductId = sessionStorage.getItem("ProductId");
  if (ProductId) {
   console.log( getData(ProductId))
  }
}
getProductid();

function render(data){
    
   document.getElementById('itemName').innerText = data.name
   document.getElementById("itemDes").innerText = data.description;
   document.getElementById("price").innerText = `$ ${data.price}`;
   document.getElementById("cal").innerText = `${data.calories} Cal`;
   document.getElementById('orderBtn').setAttribute('id', data.id) 

    
}