// Must watch this video : https://youtu.be/-owpuf4lbyU  (properly explained)

// lets have a function which is not on your device //= placed on some ecternal device
function CreateUsername(username){
    this.username = username;
    console.log(" i am called  ");
}

function CreateUser(username,password,isLoggedIn,age){
    CreateUsername.call(this,username);       // this.username = username kaam external func se karvana h but update current context hona chahiye
    // why .call() ?
    // why this i.e current context of this func is send and why it is not received in CreateUsername external func.

    this.password=password;
    this.isLoggedIn=isLoggedIn;
    this.age=age;
    return this; // optional ; internally this return hota tha but pata ni abb kaam ni kar rha
}

let userOne = new CreateUser("Alice","#123@123",true,19);  // new keyword use kia h to this ka extra baggage bhi nahi ayega .
console.log(userOne);