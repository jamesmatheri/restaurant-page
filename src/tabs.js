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
   clearContent()
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
    const menuPage_div = document.querySelector('.menu-page')
    const contactContainer_div = document.querySelector('.contact-container');
    const hotelInformation_div = document.querySelector('.hotel-information');
    
    if ( hotelInformation_div){
        content.removeChild(hotelInformation_div)       
    } else if(contactContainer_div){
        content.removeChild(contactContainer_div)
    }else if(menuPage_div){
        content.removeChild(menuPage_div);
    }
}


export default createTabs;





