import ContentField from "./ContentField"
const PrimativeManager = ({model, positionX, positionY, positionZ, sizeX, sizeY, sizeZ, mass, primativeType, identifier, onValueChanged}) => {
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
    const sizeXUpdated = (value) => {
        onValueChanged('size.x', 'number', value, identifier);
    }
    const sizeYUpdated = (value) => {
        onValueChanged('size.y', 'number', value, identifier);
    }
    const sizeZUpdated = (value) => {
        onValueChanged('size.z', 'number', value, identifier);
    }
    const massUpdated = (value) => {
        onValueChanged('mass', 'number', value, identifier);
    }
    return (<div>
        <div><label>Type</label><span>{primativeType}</span></div>
        <div><label>ID</label><span>{identifier}</span></div>
        <ContentField type="text" label="Model" value={model} onUpdate={modelUpdated} />
        <ContentField type="number" label="Position X" value={positionX} onUpdate={positionXUpdated} />
        <ContentField type="number" label="Position Y" value={positionY} onUpdate={positionYUpdated} />
        <ContentField type="number" label="Position Z" value={positionZ} onUpdate={positionZUpdated} />
        <ContentField type="number" label="Size X" value={sizeX} onUpdate={sizeXUpdated} />
        <ContentField type="number" label="Size Y" value={sizeY} onUpdate={sizeYUpdated} />
        <ContentField type="number" label="Size Z" value={sizeZ} onUpdate={sizeZUpdated} />
        <ContentField type="number" label="Mass" value={mass} onUpdate={massUpdated} />
    </div>)
}
export default PrimativeManager;