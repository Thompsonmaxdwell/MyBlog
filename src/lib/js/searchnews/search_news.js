import {search_form,card_ul} from './search_ele'

// search_form = 'HELLO'
// console.log(search_form.innerHTML = '');
export const  search_blog = function(){

 if(search_form){
        search_form.addEventListener('keyup', (e)=>{
            e.preventDefault();
            
            let search_value = search_form['search_news'].value;
            let card_news = card_ul.children;
        
            
        Array.from(card_news).forEach((news)=>{
            
                let  news_filter= news.querySelector('h3').textContent.toLowerCase();
                console.log(news_filter)
                if(news_filter.toLowerCase().indexOf(search_value) != -1){
                    news.style.display =' block'
                }else{
                    news.style.display = ' none'
                }
            
            })
        })
}
}



// if(search_form == null){
//     // search_form.innerHTML = 'hello'
//     console.log(search_form)
// }
