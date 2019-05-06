import * as React from 'react';

interface IProps {
    count: number;
    onAdd: () => void;
    onAddAsync?: () => void;
}

export const FcCount: React.FC<IProps> = props => {
    const { count, onAdd, onAddAsync } = props;
    const handleAdd = () => {
        onAdd()
    }
    const handleAsync = () => {
        if (onAddAsync) {
            onAddAsync();
        }
    }
    return (
        <div>
            <span>{count}</span>
            <button onClick={handleAdd}>add</button>
            {onAddAsync ? <button onClick={handleAsync}>add async</button> : ''}
        </div>
    )
}

// type attr
interface IPropsAttr {
    className?: string;
    style?: React.CSSProperties;
}

export const FCAttr: React.FC<IPropsAttr> = props => {
    const { children, ...resetProps } = props;
    return (
        <div {...resetProps}>hello IPropsAttr</div>
    )
}