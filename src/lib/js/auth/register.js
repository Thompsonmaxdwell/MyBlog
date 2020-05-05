import {user_auth} from './userAuth'
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
        e.preventDefault()
        
        
        create_wrapper.classList.remove('logged_form_scale_hide');
        create_wrapper.classList.add('logged_form_scale_open');
         

        Blur_ID.classList.add('create_form_blur_open');
        Blur_ID.classList.remove('create_form_blur_hide');

        if(register_user){
            register_user.addEventListener('submit', (e)=>{
                e.preventDefault();
     
                create_wrapper.classList.add('logged_form_scale_hide')
                create_wrapper.classList.remove('logged_form_scale_open');
    
                Blur_ID.classList.remove('create_form_blur_open');
                Blur_ID.classList.add('create_form_blur_hide');
    
    
                const email = register_user.Email.value
                const password = register_user.Password.value
    
                user_auth.signUp(email, password);
            });
        }
             
        clickOutSideFormToHide(create_wrapper)

    })

}


register_Event();