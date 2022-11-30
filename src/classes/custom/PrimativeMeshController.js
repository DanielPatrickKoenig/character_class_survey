import { basicColorMaterial, createPrimitive } from "../../utils/THREEHelpers";
import LocatableController from "../controllers/LocatableController";
import CustomMeshController from "../controllers/CustomMeshController";

export default class PrimativeMeshController extends LocatableController{
    constructor(data, type, position, size, color, mass, model){
        super(data, position);
        this.mesh = null;
        if(model){
            const meshController = new CustomMeshController(data, model, position);
            meshController.onLoaded = (m) => {
                this.modelLoaded(m, type, position, size, color, mass, model);
            };
        }
        else{
            createPrimitive({ type, size, position: this.startPosition, material: basicColorMaterial(color), scene: this.environment.scene, mass });
        }
        
    }
    modelLoaded(customMesh, type, position, size, color, mass){
        createPrimitive({ type, size, position, material: basicColorMaterial(color), scene: this.environment.scene, mass, customMesh });
    }
}