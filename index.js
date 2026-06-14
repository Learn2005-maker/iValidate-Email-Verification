submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="50" src="load.png" alt="">`
    try{
        let key = "ema_live_RfydNxSlI3wndzD9iAgesIKOxhPYRTd6K5JE5rGC"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== " "){
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    resultCont.innerHTML = str;
}catch(error){
resultCont.innerHTML="<div>Error while validating email.</div>"
}
})
