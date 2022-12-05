import { basicColorMaterial, createPrimitive } from "../../utils/THREEHelpers";
import LocatableController from "./LocatableController";
import CustomMeshController from "./CustomMeshController";

export default class PrimativeMeshController extends LocatableController{
    constructor(data, type, position, size, color, mass, mesh){
        super(data, position);
        this.mesh = null;
        if(mesh){
            const meshController = new CustomMeshController(data, mesh.model, position);
            meshController.onLoaded = (m) => {
                this.modelLoaded(m, type, position, size, color, mass, mesh);
            };
        }
        else{
            // console.log('mass of primative', mass);
            this.mesh = createPrimitive({ type, size, position: this.startPosition, material: basicColorMaterial(color), scene: this.environment.scene, mass, physics: mass !== null && mass !== undefined ? this.physics : null });
        }
        
    }
    modelLoaded(customMesh, type, position, size, color, mass, mesh){
        this.mesh = createPrimitive({ type, size, position, material: basicColorMaterial(color), scene: this.environment.scene, mass, customMesh, physics: mass !== null && mass !== undefined ? this.physics : null });
        this.mesh.scale.x = mesh.scale.x;
        this.mesh.scale.y = mesh.scale.y;
        this.mesh.scale.z = mesh.scale.z;
    }
}