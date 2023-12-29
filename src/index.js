import pageLoad from "./pageLoad";
import homePage from "./home";
import menuPage from "./menu";

const  navBarBtns = document.querySelectorAll('.nav div');

Array.from(navBarBtns).forEach(button => {
    button.addEventListener('click',event => {
        if(event.target.id == 'home'){
           menuPage()
         // homePage();
        }else if(event.target.id == menu){
            menuPage();
        }
    })
})



