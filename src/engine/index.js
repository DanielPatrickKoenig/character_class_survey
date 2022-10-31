// import PinataScene from '../classes/custom/PinataScene';
// import CarScene from '../classes/custom/CarScene';
import SurveyScene from '../classes/custom/SurveyScene';
function createScene(element, gameIndex=1){
    return new SurveyScene(element);
    // switch(gameIndex){
    //     case 0:{
    //         return new PinataScene(element);
    //     }
    //     case 1:{
    //         return new CarScene(element);
    //     }
    // }
}
export {createScene};