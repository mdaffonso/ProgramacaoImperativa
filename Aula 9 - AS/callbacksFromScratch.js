// const showUserData = (user) => {
//   return console.log(user)
// }

// const teste = (user, callback) => {
//   setTimeout(() => {
//     const auth = Math.random() > 0.5 ? true : false
//     if(auth === true) {
//       return callback(user)
//     } else {
//       return console.log("Você precisa estar logado.")
//     }
//   }, 1000)
// }

// userData = {
//   name: "Matheus",
//   age: 33
// }

// let isAuthenticated = false
// setTimeout(() => {
//   const auth = true
//   if(auth === true) {
//     isAuthenticated = true
//   }
// }, 1000)

// if(isAuthenticated === true) {
//   showUserData(userData)
// } else {
//   console.log("Você precisa estar logado.")
// }

const requestToAPI = (callback) => {
  setTimeout(() => {
    const data = "Você recebeu os dados da API"
    callback(data)
  }, 1000)
}

let dados = requestToAPI(() => {})
console.log(dados)