let firstName = document.forms.form.FirstName.value
let lastName = document.forms.form.LastName.value
let email = document.forms.form.Email.value
let password = document.forms.form.Password.value


form.addEventListener("submit", (e) => {
    e.preventDefault()
    formValidation()
})

let formValidation = () => {
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regName = /\d+$/g;
    var boolf = document.querySelector(".first");
    var booll = document.querySelector(".last");
    var boole = document.querySelector(".email");
    var boolp = document.querySelector(".pass");
    var boolfirst = boolf.getAttribute("aria-hidden");
    var boollast = booll.getAttribute("aria-hidden");
    var boolemail = boole.getAttribute("aria-hidden")
    var boolpass = boolp.getAttribute("aria-hidden")

    if (firstName === "" || regName.test(firstName)) {
       boolfirst = boolf.setAttribute("aria-hidden", true);
    }

    if (lastName === "" || regName.test(lastName)) {
         boollast = booll.setAttribute("aria-hidden", true);
    }

    if (email === "" || !regEmail.test(email)) {
        boolemail = boole.setAttribute("aria-hidden", true);
    }
    if (password === "" || password.length < 6) {
        boolpass = boolp.setAttribute("aria-hidden", true)
    }
      
}