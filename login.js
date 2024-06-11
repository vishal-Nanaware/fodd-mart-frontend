async function signIn() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("fill correct creadentials");
  } else {
    console.log("usernamme : " + username + "    password = " + password);
    try {
      let response = await fetch("http://localhost:3000/signIn", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(response)
      if ((response.status == 200)) {
        console.log(response.status);
         let data = await response.json();
         console.log(data.user);
         localStorage.setItem("user", data.user);
        alert("login succesfull");
        window.location.href = "home.html"
      }else if ((response.status == 401)) {
        alert("invalid creadential");
      }


    } catch (error) {
      console.log(error);
    }
  }
}

async function registration() {


 /* try{
    let response = await fetch("http://localhost:3000/");
    console.log(response);
    const redirectedUrl = response.url;
    window.location.href= redirectedUrl
    console.log(redirectedUrl + "redirected")
  }catch(err){
    console.log(err)
  }
*/

  let responce = await fetch("http://localhost:3000/");
  console.log(responce);

  if (!responce.url) {
    console.log("somethings wrong");
  } else {
    window.location.href = "createAccount.html";
    console.log(responce);
  }
  console.log(responce.url);
}
