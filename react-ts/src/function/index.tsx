import * as React from 'react';

interface IProps{
    count:number;
    onAdd:() => void;
    
}

export const FcCount:React.FC<IProps> = props => {
    const {count,onAdd} = props;
    const handleAdd = () => {
        onAdd()
    }
    return (
        <div>
            <span>{count}</span>
            <button onClick={handleAdd}>add</button>
        </div>
    )
}

// type attr
interface IPropsAttr {
    className?: string;
    style?: React.CSSProperties;
}

export const FCAttr:React.FC<IPropsAttr> = props => {
    const {children,...resetProps} = props;
    return (
        <div {...resetProps}>hello IPropsAttr</div>
    )
}