import {user_auth} from './userAuth'
import {clickOutSideFormToHide} from './register'
import {showNotification,  notification_wrapper} from './user_Moderator'

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
         
         
                    let loading_gif = e.target.querySelector('#load_gif_wrap');
                    loading_gif.style.display = 'block';
                   

                    const email = logged_in_user.Email.value;
                    const password = logged_in_user.Password.value;
                    document.querySelector('.logged_in_user .error').innerHTML ='';

                    if(email.length && password.length){
                     
                        user_auth.signIn(email, password)
                        .then(user =>{

                          logged_in_user.reset();
                          showNotification(loading_gif, notification_wrapper,'Log in with ' + user.user.email );

                          setTimeout(()=>{
                              notification_wrapper.classList.add('notification_active');

                              sign_wrapper.classList.add('logged_form_scale_hide')
                              sign_wrapper.classList.remove('logged_form_scale_open');

                              Blur_ID.classList.remove('create_form_blur_open');
                              Blur_ID.classList.add('create_form_blur_hide');

                          },6000);

                         
                          })
                        .catch(error =>{
                            document.querySelector('.logged_in_user .error').innerHTML = '<img class="errror_img" src="./src/assets/img/erro.png" alt="">'+ error.message;
                            loading_gif.style.display = 'none';

                       })
                    }else if(email.length === 0){

                          document.querySelector('.logged_in_user .error').innerHTML = '<img class="errror_img" src="./src/assets/img/erro.png" alt="">'+ 'Please fill in your E-mail field..';
                          loading_gif.style.display = 'none';

                    }else if(password.length === 0){
                       
                         loading_gif.style.display = 'none';
                         document.querySelector('.logged_in_user .error').innerHTML = '<img class="errror_img" src="./src/assets/img/erro.png" alt="">'+ 'Please fill in your Password field..';
                    }

                    
          })
         }
         clickOutSideFormToHide(sign_wrapper)
        });
    
}

