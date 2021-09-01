const hourContainer = document.querySelector(".hour");

const refreshHour = setInterval(() => {
    const date = new Date()
    hourContainer.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`

},1000);


