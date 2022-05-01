var name = 'Alfredo';
var delayMs = 3000; 

$(document).ready(function ($) {
    const output = document.querySelector('#output');

    /*
    $("#set-alarm").click(function () {
        console.log('Start');
        getAlarm(name, delayMs)
            .then(message => output.textContent = message)
            .catch(error => output.textContent = error); //It doesn't blocks the flow.
        console.log('End');
    });
    */

    $("#set-alarm").click(async function () {
        console.log('Start');
        try {
            var message = await getAlarm(name, delayMs); //It blocks flow until promise is executed
            output.textContent = message;
        } catch (error) {
            output.textContent = error;
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
