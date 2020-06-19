import{functions} from '../firebase/initialize_firebase'
import {Make_Moderator,Remove_Admin_form} from './user_Admin'
let switch_Moderator_form = document.querySelectorAll('.switch_Moderator_form');
let Moderator_wrapper = document.querySelectorAll('.Moderator_wrapper');
let Moderator_section = document.querySelector('.Moderator_section');
let Moderator_li =  document.querySelector('.Moderator_li');
let add_Moderator_btn = document.querySelector('.add_Moderator_btn');
let Add_Moderator_form = document.querySelector('.Add_Moderator_form');
let remove_Moderator_form = document.querySelector('.remove_Moderator_form')
export let notification_wrapper = document.querySelector('.notification_wrapper');



export function showNotification(loading_img,notification_wrap,congrat){
    loading_img.style.display = 'none'
    notification_wrap.classList.remove('notification_active');
    document.querySelector('.notification_txt').innerHTML = congrat;
}

// OPEN SUPER ADMIN FORM WHEN YOU CLICK ON THE SUPER ADMIN BUTTON
export let Moderator_li_fun = ()=>{
    Moderator_li.addEventListener('click', (e)=>{
        Moderator_section.classList.add('open_Moderator')
        Moderator_section.classList.remove('hide_Modrator')
  });

    Moderator_section.addEventListener('click', (e)=>{
        if(e.target.classList.contains('Moderator_section')){
            Moderator_section.classList.add('hide_Moderator');
            Moderator_section.classList.remove('open_Moderator');
        }
    })
 // Add Moderator
    Add_Moderator_form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let loading_gif = e.target.querySelector('#load_gif_wrap');
        loading_gif.style.display = 'block';
        document.querySelector('.Add_Moderator_form .error').innerHTML = '';

    
    
        let addModerator =  functions.httpsCallable('addModerator');
        addModerator({email :Add_Moderator_form['Moderator_input'].value})
        .then(result =>{
            Add_Moderator_form.reset();    
              showNotification(loading_gif, notification_wrapper, result.data.message);
              
              setTimeout(()=>{
                notification_wrapper.classList.add('notification_active');
                Moderator_section.classList.add('hide_Moderator');
                Moderator_section.classList.remove('open_Moderator');
              },6000);

        })
        .catch(error =>{
            
            document.querySelector('.Add_Moderator_form .error').innerHTML = error.message;
            loModerator_li_funading_gif.style.display = 'none';
       })
    })
 // Remove Moderator
 remove_Moderator_form.addEventListener('submit', (e)=>{
     e.preventDefault();
     
     let loading_gif = e.target.querySelector('#load_gif_wrap')
      loading_gif.style.display = 'block';
      document.querySelector('.remove_Moderator_form .error').innerHTML = '';


     let removeModerator =  functions.httpsCallable('removeModerator');
     removeModerator({email:remove_Moderator_form['Moderator_input'].value})
     .then(result=>{
      
          remove_Moderator_form.reset();    
          notification_wrapper.style.backgroundColor = 'red';
          showNotification(loading_gif, notification_wrapper, result.data.message);

            setTimeout(()=>{
                notification_wrapper.classList.add('notification_active');
                Moderator_section.classList.add('hide_Moderator');
                Moderator_section.classList.remove('open_Moderator');
              },6000);
       

     })
     .catch(error =>{
        document.querySelector('.remove_Moderator_form .error').innerHTML = error.message;
        loading_gif.style.display = 'none';
     })
  })

}


Moderator_li_fun()


// TOGGLE BEWTEEN THE TWO FORMS
export let toggle_Moderator_fun = function(){
    switch_Moderator_form.forEach(item =>{

        item.addEventListener('click', (e)=>{
            Moderator_wrapper.forEach(admin_Form =>{admin_Form.classList.toggle('toggle_Moderator')})
         
        })
    })

    add_Moderator_btn.addEventListener('click', (e)=>{
        Make_Moderator.classList.remove('hide_Make_moderator_form');
        Make_Moderator.classList.add('open_remove_moderator_form');
        Remove_Admin_form.classList.add('hide_remove_Admin_form');
        Remove_Admin_form.classList.remove('open_remove_Admin_form');
    })
}
toggle_Moderator_fun()


