var url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

$(document).ready(function ($) {
    $("#btnSubmit").click(function () {
        console.log('run');
        promiseNested();
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