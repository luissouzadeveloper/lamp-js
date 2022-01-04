const On = document.getElementById('On')
const Off = document.getElementById('Off')
const lamp = document.getElementById('lamp')

function lampBrokenVerify() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!lampBrokenVerify()){
        lamp.src = './img/ligada.jpg'
    }
} 

function lampOff() {
    if(!lampBrokenVerify()){
        lamp.src = './img/desligada.jpg'
    }
}

function quebra() {
    lamp.src = './img/quebrada.jpg'
}

On.addEventListener('click', lampOn)
Off.addEventListener('click', lampOff)
lamp.addEventListener('dblclick', quebra)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)