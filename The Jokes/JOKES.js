const h1 = document.querySelector('h1');
const button = document.querySelector('a');
const div = document.querySelectorAll('.balls div');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    h1.innerText = `${jokeText}`;
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (error) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

button.addEventListener('click', addNewJoke);
setInterval(()=>{
     for(let i = 0; i<div.length; i++) {
        div[i].style.position = 'fixed';
        div[i].style.top = `${randPos().y}px`;
        div[i].style.left = `${randPos().x}px`;
        // div[i].style.backgroundColor = randColor();

    }
},8000);

const randPos = () => {
    return { x : Math.floor(Math.random()*1920), 
             y : Math.floor(Math.random()*1080)
    }
}

const randColor = () => {
            const red = Math.floor(Math.random()*256);
            const green = Math.floor(Math.random()*256);
            const blue = Math.floor(Math.random()*256);
            const alpha = parseFloat(Math.random().toFixed(2));
            return `rgb(${red}, ${green}, ${blue},${alpha})`;
}