import {form_Post} from './userPostElement'
import {Upload_User_News} from './UsertypingNews'
let uid_Input = document.querySelector('#uid');
let textarea_Error = document.querySelector('.textarea_Error');
let post_title_Error = document.querySelector('.post_title_Error');
let file_Error = document.querySelector('.file_Error');
let uid_Error = document.querySelector('.uid_Error');
let post_news_wrapper_error = document.querySelectorAll('.post_news_wrapper #error');
let newsType_wrap = document.querySelector('.newsType_wrap');


export const Upload_News = function(key){
    if(form_Post){
 
      
       form_Post.addEventListener('submit', (e)=>{
               e.preventDefault();
               post_news_wrapper_error.forEach(item =>{
                   item.classList.add('hide');
                   item.classList.remove('open')
               });
             

                if(form_Post['textarea'].value == ''){
                    textarea_Error.classList.add('open');
                    textarea_Error.innerHTML = `<img class="errror_img" src="/src/assets/img/erro.png" alt=""> Please Fill In The Post Content Area.`
          
                }else if(form_Post['post_title'].value == ''){

                  post_title_Error.classList.add('open');
                  post_title_Error.innerHTML = `<img class="errror_img" src="/src/assets/img/erro.png" alt=""> Please Fill In The Post Title Area Before Uploading.`
              

                }else if(form_Post['file'].files[0] == undefined){

                  file_Error.classList.add('open');
                  file_Error.innerHTML = `<img class="errror_img" src="/src/assets/img/erro.png" alt=""> Please Choose  your Image  Before Uploading.`

                }else if(form_Post['key'].value == ''){

                  uid_Error.classList.add('open');
                  uid_Error.innerHTML = `<img class="errror_img" class="errror_img" src="/src/assets/img/erro.png" alt="">Your Dashboard  KEY  field can't be empty.`

               }else if(form_Post['key'].value != key){

                uid_Error.classList.add('open');
                uid_Error.innerHTML = `<img class="errror_img" src="/src/assets/img/erro.png" alt="">  Make sure your dashboard key is field correctly.`
                

              }else if(form_Post['newsType'].value == ''){

                 newsType_wrap.classList.add('open');
                 newsType_wrap.innerHTML = `<img class="errror_img" src="/src/assets/img/erro.png" alt=""> Please,  Choose the News type before  Uploading.`;

             }else{
               Upload_User_News.Upload_news_to_Database();
             }
        })
    }

}

// && !form_Post['post_title'].value == key

export const  dataFromDatabase = function(){
     Upload_User_News.get_news_from_Database();
    
}
dataFromDatabase()