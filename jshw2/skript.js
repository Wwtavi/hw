let header = {
    logo: {
      url: '/home',
      text: 'logo',
    },
    nav: {
      1: {
        url: '/home',
        text: 'Home',
      },
      2: {
        url: '/about',
        text: 'About',
      },
      3: {
        url: '/portfolio',
        text: 'Portfolio',
      },
      4: {
        url: '/contacts',
        text: 'Contacts',
      }
    },
    btn: ['LogIn', 'LogOut'],
}
let headerElements = document.createElement('header');
headerElements.style.display = 'flex';
headerElements.style.flexDirection = 'space-between';
headerElements.style.alignItems = 'center';
headerElements.style.gap = '70px';
headerElements.style.height = '70px'
headerElements.style.maxWidth = '1200px'
headerElements.style.width = "auto"

let logoElement = document.createElement('a');
logoElement.href = header.logo.url;
logoElement.textContent = header.logo.text;
logoElement.style.textDecoration = 'none';
logoElement.style.color = 'black';
logoElement.style.marginLeft = '40px';
headerElements.appendChild(logoElement);

let navElements = document.createElement('nav')
for (let key in header.nav) {
    let navItem = header.nav[key];
    let navLink = document.createElement('a');
    navLink.href = navItem.url;
    navLink.textContent = navItem.text;
    navElements.appendChild(navLink);
    navLink.style.textDecoration = 'none';
    navLink.style.color = 'blue';
}
navElements.style.display = 'flex';
navElements.style.gap = '15px';
navElements.style.margin = '0 auto';
headerElements.appendChild(navElements);
let btnElements = document.createElement('div');
for (const btnText of header.btn) {
    let btn = document.createElement('button');
    btn.textContent = btnText;
    btnElements.appendChild(btn);
}
btnElements.style.display = 'flex';
btnElements.style.gap = '20px';
btnElements.style.marginRight = '30px'


headerElements.appendChild(btnElements);
document.body.appendChild(headerElements);
console.log (headerElements);


