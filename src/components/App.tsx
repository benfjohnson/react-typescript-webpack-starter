import * as React from 'react';

interface EmptyState {};
interface SimpleProps {
    message: string 
};

class App extends React.Component<SimpleProps, EmptyState> {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <div>{this.props.message}</div>;
    }
}
export default App;