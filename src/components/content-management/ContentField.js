const ContentField = ({value, onUpdate, label, type, group, options}) => {
    const inputKeyUp = (e) => {
        console.log(e);
        onUpdate(e.target.value);
    }
    const inputChange = (e) => {
        onUpdate(e.target.value);
    }
    const inputTypes = ['number', 'text', 'checkbox', 'radio'];
    return (
        <div>
            <label>{label}</label>
            {
                inputTypes.includes(type) ? 
                    <input type={type} onKeyUp={inputKeyUp} onChange={inputChange} value={value} name={group} /> : 
                    <select onChange={inputChange} value={value}>
                        <option value={'none'}>Select One</option>
                        {options.map(item => <option value={item}>item</option>)}
                    </select>
            }
        </div>
    )
}
export default ContentField;