import BaseScene from "../BaseScene";
import LightController, { LightTypes } from '../../classes/controllers/LightController';
import GroundController from '../../classes/controllers/GroundController';
import SurveyTakerController from "./SurveyTakerController";
export default class SurveyScene extends BaseScene{
    constructor(el){
        super(el);
    }
    initialize(){
        const lc = new LightController({ environment: this.environment });
        lc.addLight({ type: LightTypes.DIRECTIONAL, intensity: 4, target: { x: 0, y: -10, z: 5 } });

        new GroundController({environment: this.environment}, 'https://danielpatrickkoenig.github.io/spirit-of-kovak/dist/dirt_row.png');

        const surveyTaker = new SurveyTakerController({ environment: this.environment }, {x: 0, y: 3, z: -6});

        
    }

    getWidth(){
        return 300;
    }
    getHeight(){
        return 600;
    }
}