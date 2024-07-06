import * as ran from "./storageGift.js"



function runGift(){
    $("#items").append(ran.setGift());
}

$("#gift").on('click', function(){
    runGift();
})