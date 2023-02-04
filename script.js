const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');
const setAlarmBtn = document.querySelector('button');
let Alarmtime;
const ringtone = new Audio('./files/clock alarm.mp3');
const content = document.querySelector('content');
let alarmtime  ,alarmState ='no set';

for(let i=23 ; i>=0 ; i--){
    i = i < 10 ? '0' + i : i;
    let option = '<option value ="${i}">${i}</option>';
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend',option);
    console.log(option);
}

for(let i=59 ; i>=0 ; i--){
    i = i < 10 ? '0' + i : i;
    let option ='<option value ="${i}">${i}</option>';
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend',option);
    console.log(option);
}

setInterval(() => {
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    h=h<10 ?'0'+h:h;
    m=m<10 ?'0'+m:m;
    s=s<10 ?'0'+s:s;
    
    timeBox.innerHTML = '${h} :${m} :${s}';
    if(alarmtime=='${h}:${m}'){
        ringtone.play();
        ringtone.loop=true;
        
    }


}, 1000);

setAlarmBtn.addEventListener('click' ,()=>{
    alarmtime= '${selectmenu[0].value}:${1}.value}';
    console.log(alarmtime);
   if(alarmtime.includes('Hour')||alarmtime.includes('Minute')){
   return alert('زمان هشدار را به درستی مشخص کنید.')
    }
    checkState(alarmState)
   
})
function checkState(state){
    if(state=='no set'){
        content.classList.add('disable')
        setAlarmBtn.innerText = 'clear Alarm'
        alarmState='set'
    }
    else{
        content.classList.add('disable')
        alarmTime=''
        ringtone.pause()
        alarmState='no set'
        setAlarmBtn.innerText='set Alarm'
    }
}
