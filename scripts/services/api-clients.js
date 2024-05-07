
// HTTP/ HTTPS Call
import URL from '../utils/constant.js';
async function makeNetworkCall(){
    try{
    const response = await fetch(URL); // Block
    const object = await response.json(); // Block
    return object;  // Wrap Promise
    }
    catch(err){
        console.log('Some Problem in API Call ', err);
        throw err;
    }
    // const promise = fetch(URL); // Assign to Thread
    // console.log('Promise is ',promise);
    // promise.then(response=>{
    //     console.log('response is ', response);
    //     const promise2 = response.json(); // Deserialization (JSON to Object)
    //     promise2.then(data=>console.log('Data is ', data))
    //     .catch(e=>console.log('JSON parse Error ', e))
    // }).catch(err=>{
    //     console.log('Error is ', err);
    // })
}
export default makeNetworkCall;






// HTTP/HTTPS call
//ntework call
/*
import URL from '../utils/constant.js';
async function makeNetworkCall(){
    try{
        const response =await fetch(URL); //block
        const object= await response.json(); //block
        return object; //wrap promise
    }
    catch(err){
        console.log("some problem",err);
        throw err;
    }
}
export default makeNetworkCall;
 
//code behave like async to sync use - await
//use try catch with sync

//function makeNetworkCall(){
//       const promise =fetch(URL); //assign to thread
//        console.log('promise is',promise);
//        promise.then(response=>{
//            console.los('response is',response);
//            const promise2=response.json(); // deserialization
//            promise2.then(data=>console.log('data is', data))
//            .catch(e=>console.log('JSON parse Error',e))
//        }).catch(err=>{
//                console.log('Error is', err);
//        })
//}

*/