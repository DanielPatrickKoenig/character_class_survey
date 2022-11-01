import PlayerController from '../controllers/PlayerController';
import { object3DSelector } from '../../utils/THREEHelpers';
export default class SurveyTakerController extends PlayerController{
    constructor(data, startPosition){
        super(data, 'https://danielpatrickkoenig.github.io/shared-app-resources/basicBody.glb', startPosition);

    }
    modelLoaded(model){
        super.modelLoaded(model);
        model.scale.z = model.scale.z * -1;

        const walkCycle = require('../../data/walk_cycle.json');

        this.rigManager.currentState = 'idle';

        walkCycle.forEach(item => {
            this.rigManager.cycle(item.bone, item.axis, item.sequence, item.states);
        });
    }
}