(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-red');
    let equal = document.querySelector('.btn-green');

    buttons.forEach(function(button){
        button.addEventListener('click', (e) => {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = "";
    })
})();




// const myPromise = new Promise((resolve, reject) => {
//     if(Math.random() < 0){
//         resolve( 'Hello, I am positive number!' );
//     }
//     reject(new Error('I failed some times'));
// })
// myPromise
//     .then((kept_message) => {
//     console.log(kept_message);
//     })
//     .catch((error) => {
//         console.log('error made');
//     })
//     .finally(() =>{
//     console.log("operation is completed");
//     });

// var promise = new Promise((resolve, reject) => {
//     resolve("hello a promise!");
// })
// promise.then((promise_kept_message) => {
//     console.log(promise_kept_message);
// }, (error) => {
//     console.log(error);
// })
// practicing promises
function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("fetched user");
            resolve({userId: 1, name: 'kenenisa'});
        },1000);
    });
}
function processUserData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("processed data");
            resolve({ processed: true});
        },1000);
    });
}
function saveUserData(data){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("saved  user data");
            resolve("sucess");
        },1000);
    })
}
fetchUserData()
    .then((userData) =>{
        return processUserData(userData);
    })
    .then((proccossedData) =>{
        return saveUserData(proccossedData);
    })
    .then((result) =>{
        console.log(result);
    })
    .catch((error) =>{
        console.log("An error occured", error);
    })