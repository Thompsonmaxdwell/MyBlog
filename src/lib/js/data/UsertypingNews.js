import {storage,db} from '../firebase/initialize_firebase'
import {form_Post,uid,news_card} from './userPostElement'
import {readPostWhenIsClick} from  '../localstorage/getNewsPost'
import{append_list_news} from './appendDataToDOM'
import{sendCommentToDatabase} from '../commet_box/send_comment'
const append_news_base_on_the_type = document.querySelectorAll('#append_news_base_on_the_type');
// Send Data to Database
export  class  Upload_User_News{
    static Upload_news_to_Database(){
       
        let file =  form_Post['file'].files[0];
        let  storageRef = firebase.storage().ref('photo/' + file.name);
                    let metadata = {
                        'contentType': 'image/jpeg'
                            };
                   let  task =  storageRef.child(file.name).put(file,metadata);
                   task.then(snapshot=> snapshot.ref.getDownloadURL())
                   .then(url=>{
                   db.collection('upload_news').add({
                        news_title: form_Post['post_title'].value,
                        news_content : form_Post['textarea'].value,
                        newsType :form_Post['newsType'].value,
                        news_img: url,
                        news_uid :uid.value,
                        
                  })
                  .then(()=>{
                    form_Post.reset();
                  })
               })
              
               
               let loader = document.querySelector('#loader');
               task.on('state_changed',
               (progress)=>{

                loader.classList.add('loading_show');
                loader.classList.remove('loading_hide');

               },(err)=>{
                         alert("Wrong")
               },(comeplete)=>{
               
                 loader.classList.remove('loading_show');
                 loader.classList.add('loading_hide');

               })
    }

    //   get  Data  from to Database
    static get_news_from_Database(){

        db.collection('upload_news').onSnapshot(snapshot=>{
           let changes  = snapshot.docChanges();

           changes.forEach(element => {

                if(element.type == 'added'){
                    
                    append_list_news(element.doc.data().news_img,  element.doc.data().news_title, element.doc.data().news_content, element.doc.id,element.doc.data().newsType);
                    readPostWhenIsClick();

                }else if(element.type == 'removed'){   

                    // let data_id = document.querySelector('[data_id =' + element.doc.id + ']');
                    // append_news_base_on_the_type.removeChild(data_id);
                 
                }
            });
            
                // send Comment To Database
                let comment_form = document.querySelectorAll('.comment_form');
                
                sendCommentToDatabase(comment_form)

      }),function err(){
          console.log('Error')
      }
    }
    
    // SHOW DELETE BUTTON IF YOUR UID IS EQUAL TO THE NEWS_UID
    static show_delete_btn(key){
        db.collection('upload_news').onSnapshot(sna=>{
    let Delete_btn = document.querySelectorAll('.Delete');

            sna.docs.forEach(element => {

                if(element.data().news_uid == key){
                    Delete_btn.forEach(btn=>{
                         if(btn){
                            btn.style.display = 'block'
                        }
                    })
                    
                   }else if(element.data().news_uid != key){

                    if(Delete_btn)
                       Delete_btn.forEach(btn=>{
                         if(btn){
                            btn.style.display = 'none'
                        }
                    })
                     
                }
            });
         })
        //  DELETE NEWS IF YOU UID IS EQAUL TO NEWS_UID
         let li = document.querySelector('data_id');
         db.collection('upload_news').onSnapshot(sna=>{
            let Delete_btn = document.querySelectorAll('.Delete');
            
                Delete_btn.forEach(btn=>{
                    if(btn){
                        btn.addEventListener('click', (e)=>{
                            sna.docs.forEach(element =>{
                          
                                let li = e.target.parentElement.parentElement.getAttribute('data_id');
                                let list = e.target.parentElement.parentElement
                                e.target.parentElement.parentElement.parentElement.removeChild(list)
                                db.collection('upload_news').doc(li).delete();
                            })
                        })
                   }
               })
         })
           
    }
}






