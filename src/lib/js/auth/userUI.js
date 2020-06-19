import{userProfileImage} from './user_Profile'
let logged_in = document.querySelectorAll('.logged_in');
let logged_out = document.querySelectorAll('.logged_out');
export let uid = document.querySelector('.uid');
let Admin_login = document.querySelectorAll('.Admin_login')
let dropdown = document.querySelector('.dropdown');
let Moderator = document.querySelector('.Moderator')

let user_detail = ``
export function logInUser(user){
    if(user){
          // Normal  Logged Users
        userProfileImage(user)
        user_detail += `
              <a href="">${user.uid}</a>
              <a href="">${user.email}</a>
              <a href="" style="color:red;font-size:14px;">${user.Admin ? 'Admin' : 'Not Yet Admin'}</a>
              <a href="" style="color:red;font-size:14px;">${user.Moderator ? 'Moderator' : 'Not yet Moderator'}</a>
        `
        dropdown.innerHTML = user_detail;


         // Regualar  Users 
        logged_in.forEach(item=>{ item.style.display = 'block'});
        logged_out.forEach(item=>{ item.style.display = 'none'});
        Moderator.style.display = 'none';
    
       // Moderator Users 
        if(user.Moderator && user.Admin){
            Admin_login.forEach(item => item.style.display = 'block');
            Moderator.style.display = 'block';

            // Admin Users 
        }else if(user.Admin){
            Admin_login.forEach(item => item.style.display = 'block');
            Moderator.style.display = 'none';

        }


      

    }else{
        // Normal  Users
        Admin_login.forEach(item => item.style.display = 'none');
        logged_in.forEach(item=>{ item.style.display = 'none'});
        logged_out.forEach(item=>{ item.style.display = 'block'});
        Moderator.style.display = 'none';
        dropdown.innerHTML = '';
    }
}


