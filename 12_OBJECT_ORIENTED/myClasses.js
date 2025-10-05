// this is all after ES6 

class user{
    constructor(username,email,password){ // constructor is always auto called whenever you create an instance using new keyword.
        this.username=username;
        this.passwrod=password;
        this.email=email;
    }
    encryptPassword(){      // class ke andar `function` keyword likhne ki need nahi h. (it is method)
        return `0101$%#${this.passwrod}@#09`;
    }
};

const user1 = new user("modi","modi@india.com","chaiWala");
console.log(user1);
console.log(user1.encryptPassword());

// iska behind the scene kya ho rha h ?? : acutally class ka prototype banta h aur methods as prototype-chain chal rhe hote h .
function userFunc(username,email,password){
    this.username=username;
    this.email=email
    this.password=password
    return this;
}
userFunc.prototype.encryptPassword = function(){
    return `encrypted${this.password}`;
}
userFunc.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}Bambal`;
}

let userTwo = new userFunc("alice","alice@mail.com","pass");
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());