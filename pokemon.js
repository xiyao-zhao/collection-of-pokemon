// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const div = document.querySelector("#collections");


for(let i = 1; i <= 300; i++){
    const wrap = document.createElement('div');
    wrap.id = "wrap";
    div.appendChild(wrap);

    const img = document.createElement('img');
    img.src = `${baseUrl}${i}.png`;
    wrap.appendChild(img);

    const num = document.createElement('p');
    num.innerHTML = `#${i}`;
    wrap.appendChild(num);
}