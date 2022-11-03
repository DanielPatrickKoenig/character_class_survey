import BaseScene from "../BaseScene";
import LightController, { LightTypes } from '../../classes/controllers/LightController';
import GroundController from '../../classes/controllers/GroundController';
import SurveyTakerController from "./SurveyTakerController";
import HouseController from "./HouseController";
import TreeController from "./TreeController";
export default class SurveyScene extends BaseScene{
    constructor(el){
        super(el);
    }
    initialize(){
        const lc = new LightController({ environment: this.environment });
        lc.addLight({ type: LightTypes.DIRECTIONAL, intensity: 4, target: { x: 0, y: -10, z: 5 } });

        new GroundController({environment: this.environment}, 'https://danielpatrickkoenig.github.io/spirit-of-kovak/dist/dirt_row.png');

        const surveyTaker = new SurveyTakerController({ environment: this.environment }, {x: 0, y: 3, z: -6});

        new HouseController({environment: this.environment}, 1,  {x: 12, y: -4.3, z: 20});
        new HouseController({environment: this.environment}, 2,  {x: -12, y: -4.3, z: 20});

        new TreeController({environment: this.environment}, 2,  {x: -10, y: 0, z: 10});
        new TreeController({environment: this.environment}, 5,  {x: 8, y: 0, z: 13});
    }

    getWidth(){
        return 300;
    }
    getHeight(){
        return 600;
    }
}