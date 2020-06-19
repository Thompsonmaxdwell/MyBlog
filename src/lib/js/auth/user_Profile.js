import{storage,db,functions} from '../firebase/initialize_firebase'
const userImage = document.querySelector('#user_profile');
const profile_image = document.querySelector('.profile_image');

export  const userProfileImage = function(userUid){
    userImage.addEventListener('change', (e)=>{
       

        let Profile =  userImage.files[0];
        let  storageRef = storage.ref('userProfile/' + Profile.name);
                    let metadata = {
                        'contentType': 'image/jpeg'
                            };
                   let  task =  storageRef.child(Profile.name).put(Profile,metadata);
                   
                   task.then(snapshot=> snapshot.ref.getDownloadURL())
                   .then(url=>{
                    const  UpdateUrl = functions.httpsCallable('UpdateUrl');

                      UpdateUrl({ImageUrl : url})
                      .then(s =>{
                         console.log(s)

                       })
                       .catch(err =>{
                         console.log(500)
                       })
                   })
      })
      

       db.collection('UserRecord').onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(sna => {
                 if(sna.type == 'added'){
                    if(sna.doc.data().Uid == userUid.uid &&  sna.doc.data().ProfileUrl){
                        profile_image.src = sna.doc.data().ProfileUrl
                        profile_image.style.display = 'block'
                        userImage.style.display = 'none';
                    }

                   }else if(sna.type == 'removed'){   
                    profile_image.style.display = 'none'
                    userImage.style.display = 'none'
                    
                }
             })
       }),function Err(){
         console.log('Error')
       }
 }