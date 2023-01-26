const user = null;

function logUser(newUser){
    user = newUser;
}

function logOff(){
    user = null;
}

function getUser(){
    return user;
}

module.exports = temp;