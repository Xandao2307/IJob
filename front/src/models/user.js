
export function userFactory(name, cpf, birthdate, email, password, independent) {
    let user = {}    
    user.name = name
    user.cpf = cpf
    user.birthdate = birthdate
    user.email = email
    user.password = password
    user.independent = independent
    return user
}

export function userLoginFactory(email, password) {
    let user = {
        "username": email,
        "password":password
    }

    return user
}
