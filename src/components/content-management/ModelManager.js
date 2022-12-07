import ContentField from "./ContentField"
const ModelManager = ({model, positionX, positionY, positionZ, scaleX, scaleY, scaleZ, identifier, onValueChanged}) => {
    const modelUpdated = (value) => {
        onValueChanged('model', 'text', value, identifier);
    }
    const positionXUpdated = (value) => {
        onValueChanged('position.x', 'number', value, identifier);
    }
    const positionYUpdated = (value) => {
        onValueChanged('position.y', 'number', value, identifier);
    }
    const positionZUpdated = (value) => {
        onValueChanged('position.z', 'number', value, identifier);
    }
    const scaleXUpdated = (value) => {
        onValueChanged('scale.x', 'number', value, identifier);
    }
    const scaleYUpdated = (value) => {
        onValueChanged('scale.y', 'number', value, identifier);
    }
    const scaleZUpdated = (value) => {
        onValueChanged('scale.z', 'number', value, identifier);
    }
    return (<div>
        <div><label>Type</label><span>Model</span></div>
        <div><label>ID</label><span>{identifier}</span></div>
        <ContentField type="text" label="Model" value={model} onUpdate={modelUpdated} />
        <ContentField type="number" label="Position X" value={positionX} onUpdate={positionXUpdated} />
        <ContentField type="number" label="Position Y" value={positionY} onUpdate={positionYUpdated} />
        <ContentField type="number" label="Position Z" value={positionZ} onUpdate={positionZUpdated} />
        <ContentField type="number" label="Scale X" value={scaleX} onUpdate={scaleXUpdated} />
        <ContentField type="number" label="Scale Y" value={scaleY} onUpdate={scaleYUpdated} />
        <ContentField type="number" label="Scale Z" value={scaleZ} onUpdate={scaleZUpdated} />
    </div>)
}
export default ModelManager;