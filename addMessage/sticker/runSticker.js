import * as ran from "./storageSticker.js"

function runsticker(){
    let setSt = ran.setSticker()
    let ranSt = Math.floor(Math.random() * setSt.length);
    $("#items").append(setSt[ranSt]);
    
}

$("#sticker").on('click', function(){
    runsticker();
})