var url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

$(document).ready(function ($) {
    
    $("#btnSubmit").click(function () {
        console.log('run');
        promiseWithThen();
    });
    

    $("#btnSubmitAsyncAwait").click(async function () {
        console.log('run async await');
        await promiseAsyncAwait();
    });

});

function promiseWithThen() {
    getProducts()
        .then(response => {
            console.log(`Received response: ${response[0].name}`);
        })
        .catch(error => {
            console.log(error);
        });

    console.log("Started request..."); //It is logged before the then callback
}


async function promiseAsyncAwait() {
    try {
        let products = await getProducts();
        console.log(`Received response: ${products[0].name}`);
    } catch (error) {
        console.log(error);
    }
    console.log("Started request...");
}


function getProducts() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                resolve(data);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}