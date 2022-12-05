import BaseController from './BaseController';
import LightController, { LightTypes } from './LightController';
import ScalableCustomMeshController from './ScalableCustomMeshController';
import PrimativeMeshController from './PrimativeMeshController';
import { ShapeTypes } from "../../utils/Utilities";
export default class SettingController extends BaseController{
    constructor(data, config){
        super(data);
        const models = config.filter(item => item.type === 'model');
        const lights = config.filter(item => item.type === 'light');
        const primatives = config.filter(item => Object.values(ShapeTypes).includes(item.type));
        this.models = models.map(item => new ScalableCustomMeshController({ environment: this.environment }, item.model, item.position, item.scale, item.color));
        this.lights = lights.map(item => {
            const lc = new LightController({ environment: this.environment });
            lc.addLight({ type: LightTypes.DIRECTIONAL, intensity: item.intensity, color: item.color === null || item.color === undefined ? 0xFFFFFF : Number(`0x${item.color}`), target: item.target });
        });
        this.primatives = primatives.map(item => new PrimativeMeshController({ environment: this.environment }, item.type, item.position, item.size, item.color, item.mass, item.mesh));
    }
}