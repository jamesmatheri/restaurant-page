import homePage from "./home";
import createTabs from "./tabs";


function pageLoad(){
    createTabs();
    homePage();
    
}

export default pageLoad;