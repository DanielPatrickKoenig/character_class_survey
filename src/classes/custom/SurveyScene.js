import BaseScene from "../BaseScene";
import { POVModes } from '../POVManager';
import LightController, { LightTypes } from '../../classes/controllers/LightController';
import GroundController from '../../classes/controllers/GroundController';
import AutoNavigationController from '../../classes/controllers/AutoNavigationController';
import SurveyTakerController from "./SurveyTakerController";
// import HouseController from "./HouseController";
import ScalableCustomMeshController from "./ScalableCustomMeshController";
import CheckpointController from '../controllers/CheckpointController';
import { ShapeTypes, degreesToRadians } from "../../utils/Utilities";
import PrimativeMeshController from "./PrimativeMeshController";
export default class SurveyScene extends BaseScene{
    constructor(el){
        super(el);
        this.autoNavigation = null;
        this.models = null;
    }
    initialize(){
        const lc = new LightController({ environment: this.environment });
        lc.addLight({ type: LightTypes.DIRECTIONAL, intensity: 4, target: { x: 0, y: -10, z: 5 } });

        this.environment.camera.position.y = 10;
        this.environment.camera.rotation.x = degreesToRadians(-20);

        
        new GroundController({environment: this.environment}, 'https://danielpatrickkoenig.github.io/spirit-of-kovak/dist/dirt_row.png');

        const surveyTaker = new SurveyTakerController({ environment: this.environment }, {x: 0, y: 3, z: -6});

        const items = require('../../data/items.json');
        const models = items.filter(item => item.type === 'model');
        const primatives = items.filter(item => Object.values(ShapeTypes).includes(item.type));
        console.log(primatives);
        console.log(Object.values(ShapeTypes));
        this.models = models.map(item => new ScalableCustomMeshController({ environment: this.environment }, item.model, item.position, item.scale, item.color));
        this.primatives = primatives.map(item => new PrimativeMeshController({ environment: this.environment }, item.type, item.position, item.size, item.color, item.mass, item.mesh));

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