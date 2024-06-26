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
  let quary = localStorage.getItem("quary");
  let responce
  if (quary) {
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        quary: quary,
      }),
    }).then((response) => response.json()).then((data)=> console.log(data))
    
  }
}
