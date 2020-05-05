import {user_auth} from './userAuth'
import {clickOutSideFormToHide} from './register'
let log_in_list = document.querySelector('.log_in_list');
let sign_wrapper = document.querySelector('#sign_wrapper');
let Blur_ID = document.querySelector('#Blur_ID');
let logged_in_user = document.querySelector('.logged_in_user');


export function logInEvent(){
   
    log_in_list.addEventListener('click', (e)=>{
             e.preventDefault();
               
             sign_wrapper.classList.remove('logged_form_scale_hide');
             sign_wrapper.classList.add('logged_form_scale_open');
              

             Blur_ID.classList.add('create_form_blur_open');
             Blur_ID.classList.remove('create_form_blur_hide');
         if(logged_in_user){
                 logged_in_user.addEventListener('submit', (e)=>{
                    e.preventDefault();
         
         
                        
                     sign_wrapper.classList.add('logged_form_scale_hide')
                     sign_wrapper.classList.remove('logged_form_scale_open');

                     Blur_ID.classList.remove('create_form_blur_open');
                     Blur_ID.classList.add('create_form_blur_hide');


                    const email = logged_in_user.Email.value
                    const password = logged_in_user.Password.value

                    user_auth.signIn(email, password);
          })
         }
         clickOutSideFormToHide(sign_wrapper)
        });
    
}

logInEvent();
