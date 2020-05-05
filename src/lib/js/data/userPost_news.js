import {upload_btn,post_title,post_textArea,upload_img} from './userPostElement'
import {Upload_User_News} from './UsertypingNews'
let uid_Input = document.querySelector('#uid')


export const Upload_News = function(key){
    if(upload_btn){
        upload_btn.addEventListener('click', (e)=>{
                e.preventDefault();
                
             if(uid_Input.value == key && post_textArea.value.length && post_title.value.length && upload_img.value){
                Upload_User_News.Upload_news_to_Database();

             }else{
                 alert('Error key')
             }
        })
    }
}

export const  dataFromDatabase = function(){
     Upload_User_News.get_news_from_Database();
    
}
dataFromDatabase()