let cart = ["pants", "shoes", "kurtas"];

let promise = createOrder(cart)
    .then(function (data) {
        console.log(data);
    })
    .catch(function(err){
        console.log(err.message);
    })

function createOrder(cart) {
    let pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = (new Error('cart is not valid.'));
            reject(err)
        }
        else {
            let orderId = '12345';
            if (orderId) {
                setTimeout(function () {
                    resolve (orderId);
                }, 5000);
            }
        }
    })
    return pr
}


function validateCart(cart) {
    return false
}




console.log("Welcome to Programiz!");
let userId=undefined;
let otp = "1234";
let password="1234567890";
let newPassword = "1234567890";
 if (!(userId && otp && password && newPassword)){
     console.log("provide details")
 }