let name = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirm-password")

let output = document.querySelector("#output")
let form = document.querySelector("form")

form.addEventListener("submit", signUp)
function signUp() {
   if (password.value == confirmPassword.value) {
      auth
         .createUserWithEmailAndPassword(email.value, password.value)
         .then((user) => {
            const date = new Date()
            const createdAt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`

            firestore.doc(`/users/${user.user.uid}`).set({
               name: name.value,
               email: user.user.email,
               createdAt: createdAt,
            })
            output.innerHTML = "Conta criada com sucesso."
            setTimeout(function () {
               window.location = "/"
            }, 3000)
         })
         .catch((error) => {
            var errorCode = error.code
            var errorMessage = error.message
            switch (errorCode) {
               case "auth/weak-password":
                  output.innerHTML = "A senha é fraca demais."
                  break
               case "auth/email-already-in-use":
                  output.innerHTML =
                     "O email inserido já está em uso por outra conta."
            }
         })
   } else {
      output.innerHTML = "As senhas não coincidem."
   }
}
