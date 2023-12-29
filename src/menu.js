function menuPage(){
    // create elements
    const content = document.getElementById('content');
    const menuPage_div = document.createElement('menu-page');
    const menuContainer_div = document.createElement('menu-container');
    const card_1 = document.createElement('div');
    const card_2 = document.createElement('div');
    const card_3 = document.createElement('div');
    const card_4 = document.createElement('div');
    const card_1_div = document.createElement('div');
    const card_2_div = document.createElement('div');
    const card_3_div = document.createElement('div');
    const card_4_div = document.createElement('div');

    //adding content to elements
    card_1_div.textContent = 'Mahamri';
    card_2_div.textContent = 'Samaki';
    card_3_div.textContent = 'Nyama $ waru';
    card_4_div.textContent = 'Nyama $ Chipo';

    //add classes to elements
    menuPage_div.className = 'menu-page';
    menuContainer_div.className = 'menu-container';
    card_1.className = 'card';
    card_1.id = 'card-1'
    card_2.className = 'card';
    card_2.id = 'card-2'
    card_3.className = 'card';
    card_3.id = 'card-3'
    card_4.className = 'card';
    card_4.id = 'card-4'

    card_1_div.className = 'menu-caption';
    card_2_div.className = 'menu-caption';
    card_3_div.className = 'menu-caption';
    card_4_div.className = 'menu-caption';


    // appending elements
    menuPage_div.appendChild(menuContainer_div);
    menuContainer_div.appendChild(card_1);
    menuContainer_div.appendChild(card_2);
    menuContainer_div.appendChild(card_3);
    menuContainer_div.appendChild(card_4);
    content.appendChild(menuPage_div);
    
    card_1.appendChild(card_1_div);
    card_2.appendChild(card_2_div);
    card_3.appendChild(card_3_div);
    card_4.appendChild(card_4_div);

}


export default menuPage;