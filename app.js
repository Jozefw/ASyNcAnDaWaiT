// async function mine(){
//   // return "Hello";

//   const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//       return resolve('bub-eye');
//     },5000)
//   })

//   const error = true;
//   if (!error){
//     const resolution = await promise;
//     return resolution;
//   }else{
//     await Promise.reject(new Error('Something went horribly awry'));
//   }

// };

// mine()
//   .then(response => console.log(response))
//   .catch(err => console.log(err));


async function getUsers(){

  // await the resonse of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// await for first resolve
    const data = await response.json();
    // await second resolve
    return data;
}

getUsers()
.then(function(users){
  console.log(users);
})