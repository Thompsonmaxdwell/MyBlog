g'use strict'
import {barsEvent} from "./js/header_nav/nav_toggle";
barsEvent();

import {search_blog} from './js/searchnews/search_news'
search_blog();

import {ini_firebase} from './js/firebase/initialize_firebase'
 
import{logInEvent} from './js/auth/login'
import {register_Event} from './js/auth/register';
import {logOut_Event} from './js/auth/signOut'

import {user_auth} from './js/auth/userAuth'
user_auth.change()
import {db}  from  './js/firebase/initialize_firebase'
import{dataFromDatabase} from './js/data/userPost_news'

 let get_comment_form = news_card.querySelectorAll('.comment_form');


 get_comment_form.forEach(element => {
    let arr = '';
    let arr_2 = []

     element.addEventListener('click', (e)=>{
         e.preventDefault()
         let textarea = e.target.previousElementSibling.value;
       
               
                arr += textarea
              localStorage.setItem('com', arr);
                console.log(arr)
                
     })
     
 });
