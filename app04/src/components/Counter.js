import { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            units: 0,
            packs: 0
        };
    }

    render() {

        let { units, packs } = this.state;

        return (
            <section className='col-sm-7 mx-auto m-4 p-4 border border-primary'>
                <h3> {packs} packets and {units} pieces. </h3>
                <button className='btn btn-sm btn-primary me-1' onClick={e => this.setState({ units: units + 1 })} > ADD (+) </button>
                <button className='btn btn-sm btn-danger' onClick={e => this.setState({ units: units - 1 })}> REMOVE (-) </button>
            </section>
        );
    }

    componentDidMount(){
        this.setState({units:1});
    }

    componentDidUpdate(){
        let { units, packs } = this.state;

        if(units<0 && packs===0){
            this.setState({units:0});
        } else  if(units<0 && packs>0){
            this.setState({units:9,packs:packs-1});
        }else if(units===10){
            this.setState({units:0,packs:packs+1});
        }
    }
}

export default Counter;