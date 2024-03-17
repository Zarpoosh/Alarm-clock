const selectMenu = document.querySelectorAll("select");
const timeBox = document.querySelector(".time");
const setAlarmBtn = document.querySelector("button");
const ringtone = new Audio("./files/clock alarm.mp3");
const content = document.querySelector(".content");
let alarmTime;
alarmState = "noset";

for (let i = 23; i >= 0; i--) {
  // ! if it was i<10 , put 0 behind it 
  i = i < 10 ? "0" + i : i;
  // console.log(i)
  let option = `<option value ='${i}'>${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
    console.log(option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value ='${i}'>${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
  //   console.log(option);
}

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  timeBox.innerHTML = `${h} :${m} :${s}`;
  if (alarmTime == `${h}:${m}`) {
    console.log("ring");
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

setAlarmBtn.addEventListener("click", () => {
  console.log("clcik");
  alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
  console.log(alarmTime);
  if (alarmTime.includes("Hour") || alarmTime.includes("Minute")) {
    return alert("زمان هشدار را به درستی مشخص کنید.");
  }
  checkState(alarmState);
});
function checkState(state) {
  if (state == "noset") {
    content.classList.add("disable");
    setAlarmBtn.innerText = "clear Alarm";
    alarmState = "set";
  } else {
    content.classList.remove("disable");
    alarmTime = "";
    ringtone.pause();
    alarmState = "noset";
    setAlarmBtn.innerText = "set Alarm";
    selectMenu.value = "Hour";
    alarmTime = `${(selectMenu[0].value = "Hour")}:${(selectMenu[1].value ="Minute")}`;
  }
}
