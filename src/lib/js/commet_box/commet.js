// import { fun } from "./get_comment";

// let btc_view = document.querySelectorAll('.btc_view');
// let comment_ul_view = document.querySelector('#comment_ul_view');
// let comment_length = comment_ul_view.children;
// let fa_comments = document.querySelectorAll('.number_comment');



// // export function render(doc){
// //     let li = document.createElement('li');
// //     let p = document.createElement('p');
// //     comment_ul_view.setAttribute('data-id', doc.id);

// //     p.innerHTML = doc.data().comment;
// //     li.appendChild(p);
    
// //     comment_ul_view.appendChild(li);
  
// // }




// export  const comment_view = function(){
//    // Number of comment in  added 

//    fa_comments.forEach(item=>{
//     item.innerHTML = item.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.children.length;
    
//    });

//    btc_view.forEach(btn=>{
//       btn.addEventListener('click' , (e)=>{

//           if(e.target.parentElement.firstElementChild.className == 'comment_view_close'){

//                e.target.parentElement.firstElementChild.classList.remove('comment_view_close')
//                e.target.parentElement.firstElementChild.classList.add('comment_view_open');
//                btn.innerHTML  = 'Close Comment'

//           }else{
//                e.target.parentElement.firstElementChild.classList.remove('comment_view_open')
//                e.target.parentElement.firstElementChild.classList.add('comment_view_close');
//                btn.innerHTML  = 'View Comment'
//           }
//       })
//    })
  
// }

// comment_view()