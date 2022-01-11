/* 

    @STATUS: Finished (Simple getRandomIntJS)
    @INFO: Returns a Random Number between a Min input and Max Input!

*/


function getRandomInt(min, max) {
    let min = Math.ceil(min);
    let max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}