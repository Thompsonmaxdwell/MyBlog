import {auth} from '../firebase/initialize_firebase'
import{logInUser} from './userUI'
import{Upload_User_News} from  '../data/UsertypingNews'
import{upload_btn} from '../data/userPostElement'
import {Upload_News} from '../data/userPost_news'

export class user_auth{
    static signUp(email, password){
       auth.createUserWithEmailAndPassword(email, password)
       .then(user=>{
             console.log(user);
       })
    }

    static signIn(email, password){
           auth.signInWithEmailAndPassword(email, password)
            .then(user=>{
                console.log(user)
        })
     }
  static logOut(){
     auth.signOut().then(user=>{
         console.log('You Are Log Out.')
     })
  }
     static change(){logOut
         auth.onAuthStateChanged((user)=>{
            if(user){
                // Upload_News
                Upload_News(user.uid);

                // show_delete_btn
                Upload_User_News.show_delete_btn(user.uid);
                // logInUser
                logInUser(user);

            }else{
                Upload_User_News.show_delete_btn();
                logInUser();
                Upload_News(null);

            }
         })
     }
}
 
