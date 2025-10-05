class user{
    constructor(username,email){
        this.username = username;
        this.email=email;
    }
    getUserDetails(){
        return (`username : ${this.username}`);
    }

};
class teacher extends user{
    constructor(username,email,subjects){
        super(username,email);    // actually me internally ky hota h ? : line 15
        // super apne aap apne sath (this) current object context of teacher leke jata h.
        this.subjects=subjects;
    }

    addCourse(){
        return (`${this.username} added a new Course`);
    }
};

// internally it works like 13 -> call_this.js
/**
 * user ek function hoga
 * teacher ek function hoga
 * teacher se kuch parameters user ko call karenge and sath me teacher ka context(this) pass karenge 
 * abb user ke pass teacher ka context h to {this.username = username} se teacher ke object ki memory me update hoga.
 *  */ 

let Surendra = new teacher('s_nagar','s@mail.com',"hairless.me");
console.log(Surendra.addCourse());
console.log(Surendra.getUserDetails());

console.log(Surendra instanceof teacher);  // true : obv.
console.log(Surendra instanceof user);  // true : because of inheritance