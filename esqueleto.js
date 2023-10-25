let esqueleto = "Off"
let esqueletoQuieto = document.getElementById("esqueletoafk")
let botonSonido = new Audio ("audio/botonbailar.mp3")
let botonAudio = new Audio ("audio/audio.mp3")

function bailar(){
    if(esqueleto=="Off"){
        esqueleto="On"
        esqueletoQuieto.classList.add("baile")
        esqueletoQuieto.addEventListener('click',()=>{
            botonSonido.play()
            botonAudio.play()
        })
        console.log("On")
    }
    else{
        esqueleto = "Off"
        console.log("Off")
        esqueletoQuieto.classList.remove("baile")
        esqueletoQuieto.addEventListener('click',()=>{
            botonAudio.pause()
        })
    }
}