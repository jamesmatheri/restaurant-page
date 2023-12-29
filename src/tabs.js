import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";


function createTabs(){

const content = document.getElementById('content')
const nav = document.createElement('nav');
const home_div = document.createElement('div');
const menu_div = document.createElement('div');
const contact_div = document.createElement('div');

//adding content
home_div.textContent = 'Home';
menu_div.textContent = 'Menu';
contact_div.textContent = "Contact Us";

//adding classes
nav.className = 'nav';

home_div.className = 'option';
home_div.id = 'home'

menu_div.className= 'option';
menu_div.id = 'menu';
contact_div.className = 'option';
contact_div.id = 'contact'

//appending children
nav.appendChild(home_div);
nav.appendChild(menu_div);
nav.appendChild(contact_div);
content.appendChild(nav);

home_div.addEventListener('click', event => {
    alert('kibg')
    homePage();
    
});

menu_div.addEventListener('click', event => { 
    clearContent();
    menuPage();
    
});

contact_div.addEventListener('click', event => { 
    clearContent();
    contactPage();
});
}

function clearContent() {
    const content = document.getElementById('content');
    const contentChildren = document.querySelectorAll('#content div:nth-child(4) > *');
    
    if (contentChildren.length > 0) {
        contentChildren.forEach(child => {
            content.removeChild(child);
        });
    }
}


export default createTabs;





