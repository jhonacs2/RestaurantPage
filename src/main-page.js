import {addListener} from './index'

const menu = () => {
    const divmain = document.querySelector('#content');
    const divHeader = document.createElement('header');
    const divall = document.createElement('div')
    const navBar = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    divall.classList.add ('principal-menu');
    navBar.classList.add('menu');
    
    home.textContent   = 'Home';
    menu.textContent    = 'Menu';
    contact.textContent = 'Contacto';

    home.href = '#';
    menu.href = '#';
    contact.href = '#';

    divmain.appendChild(divHeader);
    divHeader.appendChild(divall);
    divall.appendChild(navBar);
    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    changueStatus();
}

const changueStatus = () => {
    const selectNav = document.querySelectorAll('.menu a');
    selectNav.forEach(element => element.addEventListener('click', e => {
        
        switch (e.target.textContent){
            case 'Home':
                const main = document.querySelector('main');
                console.log(main)
            break;
            case 'Menu':
                console.log(2);
            break;
            case 'Contacto':
                console.log(3);
            break;
        }
    }))
}

export{menu}