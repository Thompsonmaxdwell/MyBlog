import{functions} from '../firebase/initialize_firebase'
import{showNotification, notification_wrapper} from './user_Moderator'
const Add_admin_panel_form = document.querySelector('.Add_admin_panel_form');
const remove_admin_panel_form = document.querySelector('.remove_admin_panel_form')
const addAdmin_panel_wrapper = document.querySelectorAll('.addAdmin_panel_wrapper');
const addAdmin_panel_section = document.querySelector('.addAdmin_panel_section');
const Admin_li =  document.querySelector('.Admin_li');
let Remove_Admin_btn = document.querySelector('.Remove_Admin_btn');
export let Remove_Admin_form = document.querySelector('.Remove_Admin_form');
export let Make_Moderator = document.querySelector('.Make_Moderator');
// let notification_wrapper = document.querySelector('.notification_wrapper');




// OPEN ADMIN FORM WHEN YOU CLICK ON THE ADMIN BUTTON
export const Admin_li_fun = function(){
    Admin_li.addEventListener('click', (e)=>{
            addAdmin_panel_section.classList.add('open_admin')
            addAdmin_panel_section.classList.remove('hide_admin');
      })
    
      addAdmin_panel_section.addEventListener('click', (e)=>{
          if(e.target.classList.contains('addAdmin_panel_section')){
            addAdmin_panel_section.classList.add('hide_admin')
            addAdmin_panel_section.classList.remove('open_admin');
            
          }
      })
    }
    Admin_li_fun()
    




// ADD ADMINS
export const adminFunction = function(){
    Add_admin_panel_form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let loading_gif = e.target.querySelector('#load_gif_wrap')
        loading_gif.style.display = 'block';
        Add_admin_panel_form.querySelector('.Add_admin_panel_form  .error').innerHTML = '';

        const AdminPanel = functions.httpsCallable('AdminPanel')
        AdminPanel({email :Add_admin_panel_form['admin_input'].value})
        .then(result =>{

            Add_admin_panel_form.reset();    
            showNotification(loading_gif, notification_wrapper, result.data.message);
            setTimeout(()=>{
                let Moderator_section = document.querySelector('.Moderator_section');
                notification_wrapper.classList.add('notification_active');
                addAdmin_panel_section.classList.add('hide_admin')
                addAdmin_panel_section.classList.remove('open_admin');

              },6000);
            
        })
        .catch(error =>{
               Add_admin_panel_form.querySelector('.Add_admin_panel_form  .error').innerHTML = error.message;
               loading_gif.style.display = 'none';

        })
       
    })
  

    // REMOVE ADMINS

    Remove_Admin_btn.addEventListener('click', (e)=>{
          Make_Moderator.classList.add('hide_Make_moderator_form');
          Make_Moderator.classList.remove('open_remove_moderator_form');
          Remove_Admin_form.classList.remove('hide_remove_Admin_form');
          Remove_Admin_form.classList.add('open_remove_Admin_form');
     });
    
    remove_admin_panel_form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let loading_gif = e.target.querySelector('#load_gif_wrap')
        loading_gif.style.display = 'block';
        document.querySelector('.remove_admin_panel_form .error').innerHTML = '';

        const removeAdmin = functions.httpsCallable('removeAdmin');
        removeAdmin({email :remove_admin_panel_form['admin_input'].value})
        .then(result =>{

            
            remove_admin_panel_form.reset();
            notification_wrapper.style.backgroundColor = 'red';
            showNotification(loading_gif, notification_wrapper, result.data.message);
            setTimeout(()=>{
                let Moderator_section = document.querySelector('.Moderator_section');
                notification_wrapper.classList.add('notification_active');
                Moderator_section.classList.add('hide_Moderator');
                Moderator_section.classList.remove('open_Moderator');
              },6000);


        }).catch(error =>{
            loading_gif.style.display = 'none';
            document.querySelector('.remove_admin_panel_form .error').innerHTML = error.message;
        })
       
    })
}

adminFunction();

