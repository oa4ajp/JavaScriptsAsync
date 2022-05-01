var url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

$(document).ready(function ($) {
    $("#btnSubmit").click(function () {
        console.log('run');
        AsyncAwait02();
    });
});

function promise01()
{
    const fetchPromise = fetch(url);

    console.log(fetchPromise);

    fetchPromise.then(response => {
        console.log(`Received response: ${response.status}`);
    });

    console.log("Started request..."); //It is logged before the then callback
}

function promiseNested() {
    const fetchPromise = fetch(url);

    console.log(fetchPromise);

    fetchPromise
        .then(response => {
            return response.json(); //. json() returns a promise
        })
        .then(json => {
            console.log(json[0].name);
        });


    console.log("Started request..."); //It is logged before the then callback
}

function AsyncAwait01() {
    const json = fetchProducts();
    console.log(json);   // json is a Promise object, so this will not work
}

function AsyncAwait02() {
    const jsonPromise = fetchProducts();
    jsonPromise.then(res => {
        console.log(res[0].name);
    });

}

async function AsyncAwait03() {
    const json = await fetchProducts();
    console.log(json);   
}


async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

