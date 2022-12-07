import ContentField from "./ContentField"
const LightManager = ({intensity, color, x, y, z, identifier, onValueChanged}) => {
    const intensityUpdated = (value) => {
        onValueChanged('intensity', 'number', value, identifier);
    }
    const colorUpdated = (value) => {
        onValueChanged('color', 'text', value, identifier);
    }
    const xUpdated = (value) => {
        onValueChanged('target.x', 'number', value, identifier);
    }
    const yUpdated = (value) => {
        onValueChanged('target.y', 'number', value, identifier);
    }
    const zUpdated = (value) => {
        onValueChanged('target.z', 'number', value, identifier);
    }
    return (<div>
        <div><label>Type</label><span>Light</span></div>
        <div><label>ID</label><span>{identifier}</span></div>
        <ContentField type="number" label="Intensity" value={intensity} onUpdate={intensityUpdated} />
        <ContentField type="text" label="Color" value={color} onUpdate={colorUpdated} />
        <ContentField type="number" label="X" value={x} onUpdate={xUpdated} />
        <ContentField type="number" label="Y" value={y} onUpdate={yUpdated} />
        <ContentField type="number" label="Z" value={z} onUpdate={zUpdated} />
    </div>)
}
export default LightManager;