import {auth} from '../firebase/initialize_firebase'
import{logInUser} from './userUI'
import{Upload_User_News} from  '../data/UsertypingNews'
import{upload_btn} from '../data/userPostElement'
import {Upload_News} from '../data/userPost_news'
let register_user = document.querySelector('.register_user');

export class user_auth{
    static signUp(email, password){
        return  auth.createUserWithEmailAndPassword(email, password);
      
    }

    static signIn(email, password){
          return auth.signInWithEmailAndPassword(email, password);
          
     }
  static logOut(){
     auth.signOut().then(user=>{
         console.log('You Are Log Out.')
     })
  }
     static change(){logOut
         auth.onAuthStateChanged((user)=>{
            if(user){
                 
                user.getIdTokenResult().then(idTokenResult =>{
                    user.Admin = idTokenResult.claims.admin
                    user.Moderator = idTokenResult.claims.moderator
                      // get user uid
                      
                        Upload_News(user.uid);
                        Upload_User_News.show_delete_btn(user.uid);
                       // logInUser
                      logInUser(user);
                })


            }else{
                Upload_User_News.show_delete_btn();
                logInUser();
                Upload_News(null);

            }
         })
     }
}
 
