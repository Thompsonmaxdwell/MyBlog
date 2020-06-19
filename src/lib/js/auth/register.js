import {user_auth} from './userAuth'
import {showNotification,  notification_wrapper} from './user_Moderator'

let create_Account = document.querySelector('#create_Account');
let create_wrapper = document.querySelector('#create_wrapper');
let Blur_ID = document.querySelector('#Blur_ID');
let register_user = document.querySelector('.register_user');
let  outside = window;

export const clickOutSideFormToHide = function(form){
    outside.addEventListener(('click'), (e)=>{
               
        if(e.target == form){
            form.classList.add('logged_form_scale_hide')
            form.classList.remove('logged_form_scale_open');

            Blur_ID.classList.remove('create_form_blur_open');
            Blur_ID.classList.add('create_form_blur_hide');
        }
    })
}

export const register_Event =  function(){
    create_Account.addEventListener('click', (e)=>{
        e.preventDefault();
        
        
        
        create_wrapper.classList.remove('logged_form_scale_hide');
        create_wrapper.classList.add('logged_form_scale_open');
         

        Blur_ID.classList.add('create_form_blur_open');
        Blur_ID.classList.remove('create_form_blur_hide');

        if(register_user){
            register_user.addEventListener('submit', (e)=>{
                e.preventDefault();
                let loading_gif = e.target.querySelector('#load_gif_wrap');
                loading_gif.style.display = 'block';
                // create_wrapper.classList.add('logged_form_scale_hide')
                // create_wrapper.classList.remove('logged_form_scale_open');
    
                // Blur_ID.classList.remove('create_form_blur_open');
                // Blur_ID.classList.add('create_form_blur_hide');
    
    
                const email = register_user.Email.value;
                const password = register_user.Password.value;
                document.querySelector('.register_user .error').innerHTML ='';
    
              if(email.length && password.length){
                user_auth.signUp(email, password)
                .then(user=>{
                  
                    register_user.reset();
                    showNotification(loading_gif, notification_wrapper,'Your account  has being created with ' + user.user.email );

                    setTimeout(()=>{
                        notification_wrapper.classList.add('notification_active');

                        create_wrapper.classList.add('logged_form_scale_hide')
                        create_wrapper.classList.remove('logged_form_scale_open');
            
                        Blur_ID.classList.remove('create_form_blur_open');
                        Blur_ID.classList.add('create_form_blur_hide');

                    },6000);
                })
               .catch(error =>{
                    document.querySelector('.register_user .error').innerHTML = '<img class="errror_img" src="./src/assets/img/erro.png" alt="">'+ error.message;
                    loading_gif.style.display = 'none';
                 });


            }else if(email.length === 0){

                 document.querySelector('.register_user .error').innerHTML = '<img class="errror_img" src="./src/assets/img/erro.png" alt="">'+ 'Please fill in your E-mail field..';
                 loading_gif.style.display = 'none';

            }else if(password.length === 0){
                  loading_gif.style.display = 'none';
                  document.querySelector('.register_user .error').innerHTML = '<img class="errror_img" src="./src/assets/img/erro.png" alt="">'+ 'Please fill in your Password field..';
            }
              
            });
        }
             
        clickOutSideFormToHide(create_wrapper)

    })

}

