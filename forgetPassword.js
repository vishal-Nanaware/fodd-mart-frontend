
const { response } = require("express");

async function submit() {
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  console.log(`email:${email} phone:${phone}`);

  try {
    let response = await fetch("http://localhost:3000/forgetPassword", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        phone: phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response);
    let data = await response.json()
    console.log(data)
    if(response.status == 200){
        localStorage.setItem("forgetpasswordUser", data.temporaryUser);
        alert("request proceed")
        window.location.href = "verifyotp.html"
    }
  } catch (err) {
    console.log(err);
  }
}
