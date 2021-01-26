

export const ColorComp = (props) => {
    const {color="red", ...rest} = props;
    return <div style={{color}}>{props.render(rest)}</div>
}

export const BaseComp = ({name,age}) => {
    return <h1>My Name: {name} & Age: {age}</h1>
}

export const TransformedComp = (props) => {
    return <ColorComp {...props} render={(others) => <BaseComp {...others}/>} />
}



