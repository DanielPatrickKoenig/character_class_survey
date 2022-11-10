import { basicColorMaterial, object3DSelector } from "../../utils/THREEHelpers";
import CustomMeshController from "../controllers/CustomMeshController";

export default class ScalableCustomMeshController extends CustomMeshController{
    constructor(data, model, startPosition, scale, color){
        super(data, model, startPosition);
        this.scale = scale;
        this.color = color;
    }

    modelLoaded(model){
        super.modelLoaded(model);
        model.scale.x = this.scale.x;
        model.scale.y = this.scale.y;
        model.scale.z = this.scale.z;
        if(this.color){
            const mainMesh = object3DSelector(model, {});
            mainMesh.forEach(item => item.material = basicColorMaterial(this.color));
        }
    }
}