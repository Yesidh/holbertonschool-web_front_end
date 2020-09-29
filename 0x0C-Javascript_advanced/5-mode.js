function changeMode (size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

const main = () => {
    const spooky = changeMode(9, 'bold', 'uppercase', 'ping', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    document.getElementById('spookyBtn').addEventListener('click', () => spooky());
    document.getElementById('darkBtn').addEventListener('click', () => darkMode());
    document.getElementById('screamBtn').addEventListener('click', () => screamMode())
}

main();