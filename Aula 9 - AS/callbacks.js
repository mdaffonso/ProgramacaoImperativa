const identifyUser = (user) => console.log(user)

const useCallback = (user, cb) => {
  const time = setTimeout(() => {
    const logged = Math.random() > 0.5 ? true : false
    if(logged) {
      return cb(user)
    }

    console.error("Você precisa estar logado.")
  }, 500)
}

const iNeedNoCallback = () => {
  return setTimeout(() => {
    return Math.random() > 0.5 ? true : false
  }, 500)
}

const user = {
  name: "Matheus",
  age: 33,
  height: 186
}

// useCallback(user, identifyUser)

// const isAuthenticated = iNeedNoCallback()
// if(isAuthenticated === true) {
//   identifyUser(user)
// }