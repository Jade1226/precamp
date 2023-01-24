// function auth() {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("target").innerText = token
// }

let auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = randomColor = "#" + token
}

// const color = () => {
//     const randomColor = String(Math.floor(Math.random() * 1000000)).padStart(6, "#")
// }

