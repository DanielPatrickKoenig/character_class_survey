import { useState } from 'react';
import LightManager from './LightManager';
import ModelManager from './ModelManager';
import PrimativeManager from './PrimativeManager';
import { ShapeTypes } from '../../utils/Utilities';
const ContentManager = () => {
    const rawItems = require('../../data/items.json');
    const [items, setItems] = useState(rawItems);
    const valueChanged = (property, type, value, id) => {
        const _items = [...items];
        const indexOfTarget = _items.map((item, index) => ({index, item})).find(item => item.item.id === id).index;
        let newValue = null;
        switch(type){
            case 'number':{
                newValue = Number(value);
                break;
            }
            default:{
                newValue = value.toString();
                break;
            }
        }
        if(property.includes('.')){
            const propertySplit = property.split('.');
            _items[indexOfTarget][propertySplit[0]][[propertySplit[1]]] = newValue;
        }
        else{
            _items[indexOfTarget][property] = newValue;
        }
        setItems(_items);
        
    }
    const lights = items.filter(item => item.type === 'light');
    const models = items.filter(item => item.type === 'model');
    const primatives = items.filter(item => Object.values(ShapeTypes).includes(item.type));
    return <div>
        {primatives.map(item => <PrimativeManager model={item.model} positionX={item.position.x} positionY={item.position.y} positionZ={item.position.z} sizeX={item.size.x} sizeY={item.size.y} sizeZ={item.size.z} mass={item.mass} primativeType={item.type} identifier={item.id} onValueChanged={valueChanged} />)}
        {models.map(item => <ModelManager model={item.model} positionX={item.position.x} positionY={item.position.y} positionZ={item.position.z} scaleX={item.scale.x} scaleY={item.scale.y} scaleZ={item.scale.z} identifier={item.id} onValueChanged={valueChanged} />)}
        {lights.map(item => <LightManager intensity={item.intensity} color={item.color} x={item.target.x} y={item.target.y} z={item.target.z} identifier={item.id} onValueChanged={valueChanged} />)}
    </div>
}

export default ContentManager;