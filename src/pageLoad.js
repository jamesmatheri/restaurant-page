
function pageLoad(){

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
contact_div.className = 'option';

//appending children
nav.appendChild(home_div);
nav.appendChild(menu_div);
nav.appendChild(contact_div);
content.appendChild(nav);

}


export default pageLoad();





