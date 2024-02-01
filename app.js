const colorGeneratorBtn = document.querySelector('button');

const getRandomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const blur = Math.round(Math.random()  * 10 + 1) / 10;

    const color = `rgb(${red}, ${green}, ${blue}, ${blur})`;

    return color;
}

colorGeneratorBtn.addEventListener('click', () => {
    const headingH3 = document.querySelector('h3');
    const randomColor = getRandomColor();

    headingH3.innerText = randomColor;

    const colorBox = document.getElementsByClassName('color-box')[0];
    colorBox.style.backgroundColor = randomColor;
    colorBox.style.boxShadow = "0px 0px 10px 0px rgba(0, 0, 0, 0.5)";

    // const shadowBoxColor = document.getElementsByClassName('color-shadow-box')[0];
    // shadowBoxColor.style.boxShadow = "2px 2px 10px 0px #888888"
});