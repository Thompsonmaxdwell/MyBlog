let logged_in = document.querySelectorAll('.logged_in');
let logged_out = document.querySelectorAll('.logged_out');
export let uid = document.querySelector('.uid');
export let user_email = document.querySelector('.user_email');
import{userProfileImage} from './user_Profile'

export function logInUser(user){
    if(user){
        userProfileImage(user)
      if(uid){
         uid.innerHTML = user.uid
         user_email.innerHTML = user.email
      }

        logged_in.forEach(item=>{ item.style.display = 'block'});
        logged_out.forEach(item=>{ item.style.display = 'none'});

    }else{

        logged_in.forEach(item=>{ item.style.display = 'none'});
        logged_out.forEach(item=>{ item.style.display = 'block'});
    }
}


