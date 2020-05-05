import{storage,db} from '../firebase/initialize_firebase'
const userImage = document.querySelector('#user_profile');
const profile_image = document.querySelector('.profile_image');

export  const userProfileImage = function(uid){
    userImage.addEventListener('change', (e)=>{
        let Profile =  userImage.files[0];
        let  storageRef = storage.ref('userProfile/' + Profile.name);
                    let metadata = {
                        'contentType': 'image/jpeg'
                            };
                   let  task =  storageRef.child(Profile.name).put(Profile,metadata);
                   
                   task.then(snapshot=> snapshot.ref.getDownloadURL())
                   .then(url=>{
                       db.collection('userProfile').doc(uid.uid).set({
                           img : url
                       })
                    
                   })
      })
      

    db.collection('userProfile').onSnapshot(snapshot=>{
            
            let changes  = snapshot.docChanges();
             changes.forEach(sna => {

                 if(sna.type == 'added'){

                    if(sna.doc.id == uid.uid){
                        profile_image.src = sna.doc.data().img;
                        profile_image.style.display = 'block'
                        userImage.style.display = 'none';
        
                    }
                

                }else if(sna.type == 'removed'){   

                   profile_image.style.display = 'none'
                    userImage.style.display = 'none'
                    
                }
             });
      
    })   
}