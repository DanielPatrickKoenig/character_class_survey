import CustomMeshController from "../controllers/CustomMeshController";

export default class HouseController extends CustomMeshController{
    constructor(data, type, startPosition){
        super(data, `https://danielpatrickkoenig.github.io/shared-app-resources/house${type}.glb`, startPosition);
    }
}