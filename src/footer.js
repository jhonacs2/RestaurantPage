const footer = () => {
    const content = document.querySelector('#content');
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    const a = document.createElement('a');
    const img = document.createElement('img')

    p.textContent = 'Power By Jhonatan Soto';
    a.href = 'https://github.com/jhonacs2/RestaurantPage';
    img.src= '../img/github-sign.svg';
    img.alt = 'github';

    content.appendChild(footer);
    footer.appendChild(p);
    footer.appendChild(a);
    a.appendChild(img);
    
}

export{footer}