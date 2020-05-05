    // append data to Dom when it come from Database
    export const append_list_news  = function(news_img,title, content, data_id){
        let li = document.createElement('li');
        li.setAttribute('data_id' , data_id)

        li.classList.add('news_post_list');
        let li_content = `
                <div class="news_content">
                <a href="newspage.html" class="card_link">
                <div class="news_photo"><img src="${news_img}" alt=""></div>
                    <div class="news_flex_link">
                        <h3 class="blog_title_news">${title}</h3>

                        <div class="blog_content"><p>${content}</p></div>
                </div>
                </a>
                <button class="Delete">Delete</button>
            <div class="card_comment">
            <div class="comment_fa">
                        <div><i class=" fa fa-calendar"></i> 2 week ago </div>    
                        <div><i class=" fa fa-eye"> </i> 21 Views</div>                             
                        <div><i class=" fa fa-comments"><span class="number_comment"></span></i> comment</div>
            </div>
                <form action="" class="comment_form" data_id="${data_id}">
                    <textarea> Add comments</textarea>
                    <button>SUBMIT</button>
                </form>
            <div class="comment_view">
            <ul class="comment_view_close" id="comment_ul_view">
               
            </ul>
                <button class="btc_view">VIew Comment</button>
            </div>
        </div>
       `
        li.innerHTML  = li_content;
        news_card.insertBefore(li, news_card.firstElementChild); 
}