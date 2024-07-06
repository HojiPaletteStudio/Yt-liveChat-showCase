import * as ran from "./storeageSp.js";
// ------------------------------------







function runsuperchat(){
    let setSp = ran.setSuperchat();
    let ranSp = Math.floor(Math.random() * setSp.length);
    $("#items").append(setSp[ranSp]);
}

$("#superchat").on('click', function(){
    runsuperchat();
    setAttribute()
})