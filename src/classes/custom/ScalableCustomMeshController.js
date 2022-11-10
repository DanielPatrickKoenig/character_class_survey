import CustomMeshController from "../controllers/CustomMeshController";

export default class ScalableCustomMeshController extends CustomMeshController{
    constructor(data, model, startPosition, scale){
        super(data, model, startPosition);
        this.scale = scale;
    }

    modelLoaded(model){
        super.modelLoaded(model);
        model.scale.x = this.scale.x;
        model.scale.y = this.scale.y;
        model.scale.z = this.scale.z;
    }
}