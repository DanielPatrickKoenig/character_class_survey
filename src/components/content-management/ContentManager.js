const ContentManager = () => {
    const models = require('../../data/items.json');
    return <div>
        {models.map((item, index) => <div key={index}><label>{item.id}</label></div>)}
    </div>
}

export default ContentManager;