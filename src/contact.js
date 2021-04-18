const contact = () => {
    const selectDiv = document.querySelector('.home');
    const p = document.createElement('p');
    const img = document.createElement('img');

    img.classList.add('contactImage');
    selectDiv.innerHTML = '';

    p.textContent = 'Contact';
    img.src = '../img/universe.jpg';

    selectDiv.appendChild(p);
    selectDiv.appendChild(img);
}

export{contact}