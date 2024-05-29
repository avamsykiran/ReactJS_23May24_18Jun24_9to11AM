import { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    inc = event => this.setState({ count: this.state.count + 1 }) 

    dec = event => this.setState({ count: this.state.count - 1 })
    
    render() {
        return (
            <section>
                <h1>The Count: {this.state.count}</h1>
                <button type='button' onClick={this.inc}>INCREMENT</button>
                <button type='button' onClick={this.dec}>DECRIMENT</button>
            </section>
        );
    }
}

export default Counter;