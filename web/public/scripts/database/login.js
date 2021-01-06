let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")

let output = document.querySelector("#output")

form.addEventListener("submit", login)
function login() {
   auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((user) => {
         output.innerHTML = "Login realizado com sucesso!"
         setTimeout(function () {
            window.location = "/"
         }, 3000)
      })
      .catch((error) => {
         var errorCode = error.code
         var errorMessage = error.message
         switch (errorCode) {
            case "auth/wrong-password":
               output.innerHTML =
                  'Senha inválida. <span onclick=sendPasswordReset() style="color: red">Esqueceu a senha?</span>'
               break
            case "auth/too-many-requests":
               output.innerHTML =
                  'O acesso a conta foi temporariamente bloqueado devido a várias tentativas de login. Você pode <span onclick=sendPasswordReset() style="color: red">clicar aqui</span> para alterar sua senha, ou tentar de novo mais tarde.'
         }
      })
}
function sendPasswordReset() {
   auth
      .sendPasswordResetEmail(email.value)
      .then(() => {
         output.innerHTML =
            "Email de alteração de senha enviado! Verifique sua caixa de entrada."
      })
      .catch((error) => {
         var errorCode = error.code
         var errorMessage = error.message
      })
}
