// jese hi koi user banta h uski ek unique userid generate ho jati h database me vohi functionality ka pseudoImplementation h :-

class user{
    constructor(username,pass,isLogged){
        this.username=username;
        this.password = pass;
        this.isLogged=isLogged;
        this.id = -1;
    }
    LogMe(){
        this.isLogged=true;
        console.log(`${this.username} is logged in.`);
    }
    // static createId(){  // to make it static method.
    createId(){
        if(this.id===-1){
            this.id= (Math.floor(Math.random()*1000 + 1)).toString()+this.username.toString();
        }        
        return this.id;
    }
}
let Alice = new user("alice","tokio",false);
Alice.LogMe();
const Alice_Id = Alice.createId();
console.log(Alice_Id);
console.log(Alice.isLogged);

// NOW WHERE IS STATIC USED : 
// kai baar aap createId() method ka access har uss object ko nahi dena chahte jo is class se instantiate hua h.
// method ke aage static laga do access ruk jayegi 
// cpp pe static means diffrent :=> go to 

// moreover static method ko extended classes ke objects bhi access nahi kar sakte.
// for eg class teacher extends user{ .. }  any object of this class can also not access a static method of parent class ,
// but can access normal methods of parent.