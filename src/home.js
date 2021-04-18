const home = () => {
    const content = document.querySelector('#content');
    const divPollo = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p')
    const main = document.createElement('main');
    main.classList.add('principal');
    divPollo.classList.add('home');
    h1.textContent = 'Pollos Copacabana';
    img.src = '../img/contactanos.png';
    p.textContent = 'Hoy Quiero!';
    content.appendChild(main);
    main.appendChild(divPollo);
    divPollo.appendChild(h1);
    divPollo.appendChild(img);
    divPollo.appendChild(p);
}

export{home}