﻿var name = 'Alfredo';
var delayMs = 3000; 

$(document).ready(function ($) {
    const output = document.querySelector('#output');
    const outputAsyncAwait = document.querySelector('#outputAsyncAwait');

    $("#set-alarm").click(function () {
        output.textContent = '';
        console.log('Start');
        getAlarm(name, delayMs)
            .then(message => {
                output.textContent = message;
                console.log(message);
            })
            .catch(error => output.textContent = error); //It doesn't blocks the flow.
        console.log('End');
    });

    $("#set-alarm-async-await").click(async function () {
        outputAsyncAwait.textContent = '';
        console.log('Start');
        try {
            var message = await getAlarm(name, delayMs); //It blocks flow until promise is executed
            console.log(message);
            outputAsyncAwait.textContent = message;
        } catch (error) {
            outputAsyncAwait.textContent = error;
        }

        console.log('End');
    });

});

function getAlarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error('Alarm delay must not be negative');
        }
        window.setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}
