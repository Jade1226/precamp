// let time = 10
// // undefined

// setInterval(function(){
//     console.log(time)
//     if (time >= 0) {
//         time = time - 1
//     }
// }, 1000)

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1


let time = 180
// undefined

setInterval(function() {

        if(time >= 0) {
            let min = Math.floor(time / 60)
            let sec = String(time % 60).padStart(2, "0")
            console.log(min + ":" + sec)
            time= time - 1
        }
}, 1000)
// VM8556:6 3:00
// VM8556:6 2:59
// VM8556:6 2:58
// VM8556:6 2:57