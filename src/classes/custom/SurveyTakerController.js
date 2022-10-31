import PlayerController from '../controllers/PlayerController';
import { object3DSelector } from '../../utils/THREEHelpers';
export default class SurveyTakerController extends PlayerController{
    constructor(data, startPosition){
        super(data, 'https://danielpatrickkoenig.github.io/shared-app-resources/basicBody.glb', startPosition);

    }
    modelLoaded(model){
        super.modelLoaded(model);
        model.scale.z = model.scale.z * -1;
        const bones = object3DSelector(model, { type: 'Bone' });
        console.log(bones);
        console.log(bones.map(item => item.name));

        this.rigManager.cycle('thighR', 'x', [{value:195, time:.5}, {value:165, time:.5}], ['moving', 'carying']);
        this.rigManager.cycle('thighL', 'x', [{value:165, time:.5}, {value:195, time:.5}], ['moving', 'carying']);

        this.rigManager.cycle('thighR', 'x', [{value:180, time:.5}], ['idle', 'holding']);
        this.rigManager.cycle('thighL', 'x', [{value:180, time:.5}], ['idle', 'holding']);

    }
}