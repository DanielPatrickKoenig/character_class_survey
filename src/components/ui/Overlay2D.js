const Overlay2D = ({bonePoints}) => {
    return (
        <svg>
            {bonePoints.map(item => <circle cx={item.x} cy={item.y} r="1"></circle>)}
        </svg>
    );
}

export default Overlay2D;