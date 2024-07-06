
import * as ran from "./storageMem.js";




function runmembership(){
    //[mem1, mem2]
    let setMem = ran.setMem();
        console.log(setMem);
    let ranMem = Math.floor(Math.random() * setMem.length);
    $("#items").append(setMem[ranMem]);
}

$("#membership").on('click', function(){
    // ranName
    runmembership();
    
})

