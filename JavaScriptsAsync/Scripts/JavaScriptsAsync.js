var url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

$(document).ready(function ($) {
    
    $("#btnSubmit").click(function () {
        console.log('Function Start');
        promiseWithThen();
        console.log('Function End'); //It is logged before the then callback
    });
    

    $("#btnSubmitAsyncAwait").click(async function () {
        console.log('Function Start async await');
        await promiseAsyncAwait();
        console.log('Function End');
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
}

async function promiseAsyncAwait() {
    try {
        let products = await getProducts();
        console.log(`Received response: ${products[0].name}`);
    } catch (error) {
        console.log(error);
    }
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