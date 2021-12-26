setInterval(()=>{
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const hourDiv = document.querySelector('.hours');
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');
    hourDiv.innerHTML = `${hours} hrs.`;
    minuteDiv.innerHTML = `${minutes} mins.`;
    secondDiv.innerHTML = `${seconds} seconds`
},1000)
