import CustomMeshController from "../controllers/CustomMeshController";

export default class TreeController extends CustomMeshController{
    constructor(data, type, startPosition){
        super(data, `https://danielpatrickkoenig.github.io/shared-app-resources/tree${type}.glb`, startPosition);
    }
}