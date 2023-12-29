function contactPage(){
    const content = document.getElementById('content');
    const contactContainer_div = document.createElement('div')
    const contactDetails_div = document.createElement('div');

    //add class to elements
    contactContainer_div.className = 'contact-container';
    contactDetails_div.className = 'contact-details'

    //adding content to elements
    contactDetails_div.innerHTML = `
    <h2>Contact us, we will get back to you within the shortest time possibe</h2>
<P>jamesmkubwa18@gmail.com</P>
<p>+254798524367</p>
<p>PO BOX: <br> 25498524138-00100</p>
    `

    //appending elements
    contactContainer_div.appendChild(contactDetails_div);
    content.appendChild(contactContainer_div);

}

export default contactPage;