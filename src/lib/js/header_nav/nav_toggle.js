import {bars,nav} from './nav_element'

export function barsEvent(){
    bars.addEventListener('click',(e)=>{
        bars.classList.toggle('change');
        
        if(bars.className == 'change'){
            nav.classList.remove('nav_hide');
            nav.classList.add('nav_show');

        }else {

            nav.classList.remove('nav_show');
            nav.classList.add('nav_hide');
        }
        
    })
  
}
