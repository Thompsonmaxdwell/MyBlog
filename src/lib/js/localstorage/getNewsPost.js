export const  readPostWhenIsClick = function(){

      let news_link = news_card.querySelectorAll('.card_link')
      news_link.forEach(item=>{
          item.addEventListener('click', (e)=>{
            const img = item.firstElementChild.firstChild.src;
              const title = item.lastElementChild.firstElementChild.innerHTML;
              const f_news_para = item.lastElementChild.lastElementChild.firstElementChild.innerHTML;
              const s_news_para = item.lastElementChild.lastElementChild.lastElementChild.innerHTML;

                  localStorage.setItem('img', img);
                  localStorage.setItem('title', title);
                  localStorage.setItem('f_news_para', f_news_para);
                  localStorage.setItem('s_news_para', s_news_para);
          })
      })
  }