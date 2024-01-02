function homePage(){
    const content = document.getElementById('content');
    const hotelInformation_div = document.createElement('div');
    const aboutHotel_div = document.createElement('div');

    //adding content
    aboutHotel_div.innerHTML = `
    <h3>home away from home</h3>
    <h1>Mswahili hotels</h1>
    <h3>Utapendaaa</h3>
    `
    //adding classes
    hotelInformation_div.className = 'hotel-information';
    aboutHotel_div.className = 'about-hotel';

    //appending elements
    hotelInformation_div.appendChild(aboutHotel_div);
    content.appendChild(hotelInformation_div);
    
}

export default homePage;