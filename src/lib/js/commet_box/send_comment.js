import{db} from '../firebase/initialize_firebase'

export const sendCommentToDatabase = function(comment_form){


    if(comment_form){
        comment_form.forEach(comment => {
            let comment_Array = [];
            
            comment.addEventListener('submit', (e)=>{
                e.preventDefault();

                let comment_id  = comment.getAttribute('data_id');
                let textarea = e.target.querySelector('textarea').value;
 
                    comment_Array.push(textarea);
               
                    db.collection('CommentBox').doc(comment_id).set({             
                       comment_Text : comment_Array
                   }) 
                    
             })
      

        });
        
    }
    }
    sendCommentToDatabase()