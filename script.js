const form = document.querySelector("form")
const email = document.getElementById("email")
const errMessage = document.getElementById("err-message")
const button = document.querySelector("button")

form.onsubmit = e =>{
    if(email.value.includes("@") === false && email.value !== ""){
        e.preventDefault()
        email.style.cssText = "background-image: url(./assets/icon-error.svg); border: 1px solid var(--soft-red)"
        errMessage.innerText = "Please provide a valid email"
    }
    if(email.value.includes("@") === true && email.value !== ""){
        email.style.cssText = "background-image: none; border: 1px solid var(--desaturated-red)"
        errMessage.innerText = ""
    }

    if(email.value === ""){
        e.preventDefault()
        email.style.cssText = "background-image: url(./assets/icon-error.svg); border: 1px solid var(--soft-red)"
        errMessage.innerText = "Please enter your email"
    }
}