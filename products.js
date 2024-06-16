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
userlogged();
