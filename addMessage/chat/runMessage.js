

import { moderator } from "./moderator.js";
import {imgUser, ModImg} from "../../script.js";
import * as ranV from "./viewer.js";
import * as ranM from "./member.js"
import * as ranO from "./owner.js"



function setName(){
   
        $('yt-live-chat-text-message-renderer[author-type] span#author-name').html('Viewer');
   
        $('yt-live-chat-text-message-renderer[author-type=owner] span#author-name').html('Owner');
   
        $('yt-live-chat-text-message-renderer[author-type=member] span#author-name').html('Member');
   
        $('yt-live-chat-text-message-renderer[author-type=moderator] span#author-name').html('Moderator');

}

function setImg(){
   
    $('yt-live-chat-text-message-renderer[author-type=owner] yt-img-shadow img').attr('src', imgUser);

    

    $('yt-live-chat-text-message-renderer[author-type=moderator] yt-img-shadow img').attr('src', ModImg);

}

function runMessage(){
   
    let setChat = [ranV.viewChat(), ranO.ownerChat(), ranM.memChat(), moderator];
    let ranChat = Math.floor(Math.random() * setChat.length);
    $("#items").append(setChat[ranChat]);
    
}

$("#chat").on('click', function(){ 
    runMessage();
    setName();
    setImg();
})