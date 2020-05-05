import {user_auth} from './userAuth'
let logOut = document.querySelector('#logOut');

export const logOut_Event = function(){

    if(logOut){

        logOut.addEventListener('click', (e)=>{

             user_auth.logOut()
        });
    }

}
logOut_Event()