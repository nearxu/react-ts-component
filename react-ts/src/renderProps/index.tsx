import * as React from 'react';

interface NameProviderProps{
    children:(state:NameState) => React.ReactNode
}

interface NameState{
    readonly name:string;
}

class NameProvider extends React.Component<NameProviderProps,NameState>{
    readonly state:NameState = {name:'point'}
    render(){
        return this.props.children(this.state);
    }
}

export default () => (
    <NameProvider>
        {
            ({name}) => (<div>{name}</div>)
        }
    </NameProvider>
)