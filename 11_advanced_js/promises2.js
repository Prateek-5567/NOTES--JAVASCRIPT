const promiseOne = new Promise(function(res,rej){
    setTimeout(function(){
        let error=true;
        if(!error){
            res({username:"HR12",password:"rohtak"});
        }
        else{
            rej("unable to fetch data!");
        }
    }, 1000);        
});
// now you can manage this promise using async await.
// async ; await : try catch block are analogus to .then().catch()

async function consumePromiseOne(){
    try {
        const response = await promiseOne; // promiseOne ek object h error nahi.
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

await consumePromiseOne();

// await yaha par use kyu kia ? (imp ques)
// consumePromiseOne() call karega ek async function ko joki await laga kar promiseOne ko call karega joki resolve ya reject ho rha hoga
//  ab async func khud ek promise return karta h ie. 
// consumePromiseOne() is a async func and obv. it will return a promise to handle to iss vale promise ko bhi karna hoga nahi to node unhandeled promise warning de dega.
// await laga dia to : async function ke promise ko bhi hum observe kar rahe hain, isliye koi unhandled rejection warning nahi aayegi.

