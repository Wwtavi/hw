document.addEventListener('DOMContentLoaded',function () {
    let trafficLights = document.querySelector('.trafficLight');
    let lamps = trafficLights.querySelectorAll('div');
    let btn = document.querySelector('button');
    let chosenLampIndex = 0;
    let lightColors = ['red', 'yellow', 'green'];
    function newTrafficLight() {
        for (let i = 0; i < lightColors.length; i++ ) {
        lamps[i].style.backgroundColor = i === chosenLampIndex ? lightColors[i] : 'blue';
        }
    }
    function switchTrafficLight() {
        chosenLampIndex++;
        if (chosenLampIndex === lightColors.length) {
        chosenLampIndex = 0;
        }
        newTrafficLight();
    }
    btn.addEventListener('click', switchTrafficLight);
    newTrafficLight();
});
