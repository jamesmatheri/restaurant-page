import pageLoad from "./pageLoad";
import homePage from "./home";

const  navBarBtns = document.querySelectorAll('.nav div');

Array.from(navBarBtns).forEach(button => {
    button.addEventListener('click',event => {
        if(event.target.id === 'home'){
          homePage();
        }
    })
})



