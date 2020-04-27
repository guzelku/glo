
window.addEventListener('DOMContentLoaded', function(){
   'use strict'; 
//Таймер
function countTimer(deadline){
    let timeHours = document.querySelector('#timer-hours'),
        timeMinutes = document.querySelector('#timer-minutes'),
        timeSeconds = document.querySelector('#timer-seconds');
// функция вычисляет
function getTimeRemaining(){
    let dateStop = new Date(deadline).getTime(),//конечная дата  и записываем в миллисекундах
    dateNow = new Date().getTime(),
    timeRemaining = (dateStop - dateNow)/1000 ,//текущая дата  в секундах(разделили милли на 1000)
    seconds = Math.floor(timeRemaining % 60),//округлили и сделали остаток от деления на 60, так мы получим секунды не выходя за рамки минуты, он отдельно выводится
    minutes = Math.floor((timeRemaining/ 60) % 60), // сек/60 получили мимнуты
    hours = Math.floor(timeRemaining/ 60/ 60);//часы
    //day =Math.floor(timeRemaining/ 60/ 60/24) ;

    return {timeRemaining, hours, minutes, seconds};
    }

  const addNull= (num)=>{
            if(num <= 9){
            return    num = '0'+num;
            }
            else {
                return   num = num;
            }
        }
        
    
function updateClock(){
        let timer = getTimeRemaining();
      

        console.log(timer.hours);
          
        timeHours.textContent = addNull(timer.hours);
        timeMinutes.textContent= addNull(timer.minutes);
        timeSeconds.textContent = addNull(timer.seconds);

if(timer.timeRemaining<0){
    clearInterval(idInterval);
    timeHours.textContent ='00';
    timeMinutes.textContent = '00';
    timeSeconds.textContent = '00';
} }
   let idInterval=setInterval(updateClock, 1000);
}
countTimer('April 23, 2020');





//меню
const toggleMenu = ()=>{
   const  btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li');

    const hendlerMenu = ()=>{
        if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
            menu.style.transform =`translate(0)`;
       }
       else{
        menu.style.transform =`translate(-100%)`;
       }
    };

  

//первый обработчик
   btnMenu.addEventListener('click', hendlerMenu );
////второй обработчик
   menu.addEventListener('click',(event)=>{
    let target = event.target;
    if(target.matches('.close-btn')){
    
      hendlerMenu();
    
    }else{target = target.closest('ul');
    if(!target){
      menu.style.transform =`translate(0)`;
    }
    else{ hendlerMenu();}
   
    }

   }
   
   );


 };
toggleMenu();

//popup модальное окно

const togglePopUp = () =>{
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn');
   
   
  popupBtn.forEach((elem) => {
          elem.addEventListener('click', () => {
              popup.style.display = 'block';

        if(screen.width > '768') {   
          let op=0;
        const addOpacity = () =>{
                      
              if(op <1){ 
                  op +=  0.01; 
              popup.style.opacity = op;
            setTimeout(addOpacity, 10);
              }
          };
          addOpacity();
      }

      });

  });

   
  popup.addEventListener('click', (event)=>{
      let target = event.target;
       if(target.classList.contains('popup-close')){
        popup.style.display = 'none'; 
             

       }else{
          target = target.closest('.popup-content');
      if(!target){
        popup.style.display = 'none';
      }
       }

    });


};
togglePopUp();




//табы
const tabs= () =>{
  const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

  const toggleTabContent =(index)=>{
  for(let i=0; i< tabContent.length; i++){
      if(index === i){
        tab[i].classList.add('active');
        tabContent[i].classList.remove('d-none');
      }else{
        tab[i].classList.remove('active');
        tabContent[i].classList.add('d-none');
      }
  }

  };


tabHeader.addEventListener('click', (event) =>{
  let target = event.target;
      target= target.closest('.service-header-tab');

  if(target){
    //console.log(target); проверяем таргет
    tab.forEach((item, i)=> {
      if(item === target){
        toggleTabContent(i);
        //console.log(tabContent[i]);
      }
    });
  
 
}

})
}


tabs();



});











