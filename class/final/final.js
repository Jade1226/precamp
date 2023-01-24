const changeFocus1 = () => {
    let phoneForm1 = document.getElementById("p1").value
    if(phoneForm1.length === 3) {
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {

    let phoneForm2 = document.getElementById("p2").value
    if(phoneForm2.length === 4) {
        document.getElementById("p3").focus()
    }
}

let isStarted = false;

let auth = () => {

    if(isStarted === false){
        isStarted = true
        document.getElementById("finish").disabled = false
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("send").innerText = token
        document.getElementById("send").style.color = "#" + '797979'

        let time = 180
        let timer

        timer = setInterval(function(){
            if(time >= 0){
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            } else {
                document.getElementById("finish").disabled = true
                isStarted = false
                clearInterval(timer)
            }
        }, 1000)
    } else {

}
}

let signupDone = true;

let done = () => {

    if(signupDone === true){
        
        document.getElementById("signup").disabled = false
    } else {

    }
}