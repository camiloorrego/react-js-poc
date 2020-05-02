import React, { createContext } from 'react';
const { Provider, Consumer } = createContext();


const WrapperConsumer = (Component) => {
    return (props) => {
        return (
            <Consumer>
                {context => <Component {...props} context={context} />}
            </Consumer>
        )
    }
}

export default WrapperConsumer;
export { Provider }