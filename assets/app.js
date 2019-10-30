const drinkButton = document.getElementById('randomButton');
const image = document.getElementById('drinkImage');

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => getImage(data))

function getImage(data) {
    console.log(data.drinks[0].strDrinkThumb);
    const html = `
        <img src='${data.drinks[0].strDrinkThumb}' alt>
    `;
    image.innerHTML = html;
}

drinkButton.addEventListener('click', (data) => {
    console.log(data.drinks[0].strDrinkThumb);
});