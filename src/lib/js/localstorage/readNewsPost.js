let news_post_read = document.querySelector('.Read_post_when_click');


let title = news_post_read.querySelector('h1')
let  img = news_post_read.querySelector('img');
let  f_news_para = news_post_read.querySelector('.f_news_para');
let  s_news_para = news_post_read.querySelector('.s_news_para')



title.innerHTML = localStorage.getItem('title');
img.src = localStorage.getItem('img');
f_news_para.innerHTML = localStorage.getItem('f_news_para');
s_news_para.innerHTML = localStorage.getItem('s_news_para')