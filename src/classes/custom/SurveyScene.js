import BaseScene from "../BaseScene";
import { POVModes } from '../POVManager';
import LightController, { LightTypes } from '../../classes/controllers/LightController';
import GroundController from '../../classes/controllers/GroundController';
import AutoNavigationController from '../../classes/controllers/AutoNavigationController';
import SurveyTakerController from "./SurveyTakerController";
import HouseController from "./HouseController";
import TreeController from "./TreeController";
import CheckpointController from '../controllers/CheckpointController';
import { degreesToRadians } from "../../utils/Utilities";
export default class SurveyScene extends BaseScene{
    constructor(el){
        super(el);
        this.autoNavigation = null;
    }
    initialize(){
        const lc = new LightController({ environment: this.environment });
        lc.addLight({ type: LightTypes.DIRECTIONAL, intensity: 4, target: { x: 0, y: -10, z: 5 } });

        this.environment.camera.position.y = 10;
        this.environment.camera.rotation.x = degreesToRadians(-20);

        
        new GroundController({environment: this.environment}, 'https://danielpatrickkoenig.github.io/spirit-of-kovak/dist/dirt_row.png');

        const surveyTaker = new SurveyTakerController({ environment: this.environment }, {x: 0, y: 3, z: -6});

        new HouseController({environment: this.environment}, 1,  {x: 12, y: -4.3, z: 20});
        new HouseController({environment: this.environment}, 2,  {x: -12, y: -4.3, z: 20});

        new TreeController({environment: this.environment}, 2,  {x: -10, y: 0, z: 10});
        new TreeController({environment: this.environment}, 5,  {x: 8, y: 0, z: 13});

        const navigationPath = require('../../data/autonavigation_path');
        this.autoNavigation = new AutoNavigationController({environment: this.environment}, navigationPath, surveyTaker);

        navigationPath
            .filter(item => item.checkpoint !== undefined)
            .map(item => new CheckpointController({environment: this.environment}, {x: item.x, y: item.y, z: item.z}, surveyTaker, () => this.onCheckpoint(item.checkpoint)));

    }

    getWidth(){
        return 300;
    }
    getHeight(){
        return 600;
    }
    getPOVMode(){
        return POVModes.ISOPERSPECTIVE;
    }
    onCheckpoint(index){
        this.emitActionHandler(index, 'checkpoint');
    }
}