const hoursHand=document.querySelector('[date-hour-hand]')
const minuteHand=document.querySelector('[date-minute-hand]')
const secondHand=document.querySelector('[date-second-hand]')

setInterval(setclock,1000);

function setclock(){
    
    const currentDate=new Date()
    const secondRatio=currentDate.getSeconds() / 60
    const MintesRatio=(secondRatio + currentDate.getMinutes()) / 60
    const hoursRatio= (MintesRatio + currentDate.getHours()) / 12
    setRotation(secondHand,secondRatio)
    setRotation(minuteHand,MintesRatio)
    setRotation(hoursHand,hoursRatio)
}

function setRotation (element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
}
setclock()
