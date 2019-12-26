console.log(123);

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    console.log("hi");
    const now = new Date();
    const seconds = now.getSeconds(); //60秒たったら最初からにまたなる
    const secondsDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const min = now.getMinutes();
    const minsDegrees = ((min / 60)*360)+90;
    hourHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(seconds);


    const hour = now.getMinutes();
    const hourDegrees = ((hour / 12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


// 1秒かけてhiが出力される
setInterval(setDate,1000);