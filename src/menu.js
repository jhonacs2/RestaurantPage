import { home } from "./home";
import { menu } from "./main-page";

const menuCopa = () => {
    const homeOne = document.querySelector('.home');
    const menuFlex = document.createElement('div')
    
    menuFlex.classList.add('menucito');
    homeOne.innerHTML = '';
    homeOne.appendChild(menuFlex);
    for (let i = 1; i<=6; i++){
        const divMenu = document.createElement('div');
        const divimg = document.createElement('div');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        
        menuFlex.appendChild(divMenu);
        divMenu.appendChild(divimg);
        divimg.appendChild(img);
        divimg.appendChild(h2);

        divMenu.classList.add('image-area');
        divimg.classList.add('img-wrapper');

        img.src = `../img/${i}.jpg`
        h2.textContent = 'Menu';
    }
}

export{menuCopa}