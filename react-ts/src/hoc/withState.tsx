import * as React from 'react';

interface InjectProps {
    count: number;
    onAdd: () => void;
}

export const withState = <BaseProps extends InjectProps>(
    _BaseComponent: React.ComponentType<BaseProps>
) => {
    const BaseComponent = _BaseComponent as React.ComponentType<InjectProps>
    // type HocProps = ;
    type HocState = {
        readonly count: number;
    }
    return class Hoc extends React.Component<{}, HocState>{
        readonly state: HocState = {
            count: 0
        }
        handleCount = () => {
            this.setState({ count: this.state.count + 1 });
        }
        render() {
            const { count } = this.state;
            return (
                <BaseComponent count={count} onAdd={this.handleCount} />
            )
        }
    }
}
