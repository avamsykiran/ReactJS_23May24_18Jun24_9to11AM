import { useEffect, useState } from 'react'

const CounterFC = () => {

    let [units,setUnits] = useState(0);
    let [packs,setPacks] = useState(0);

    //componentDidMount
    useEffect(() => setUnits(1) , []); 

    //componentDidUpdate
    useEffect(() => {
        if(units<0 && packs===0){
            setUnits(0);
        } else  if(units<0 && packs>0){
            setUnits(9);
            setPacks(packs-1);
        }else if(units===10){
            setUnits(0);
            setPacks(packs+1);
        }
    } , [units]);

    return (
        <section className='col-sm-7 mx-auto m-4 p-4 border border-primary'>
            <h3> {packs} packets and {units} pieces. </h3>
            <button className='btn btn-sm btn-primary me-1' onClick={e => setUnits(units + 1)} > ADD (+) </button>
            <button className='btn btn-sm btn-danger' onClick={e => setUnits(units - 1)}  > REMOVE (-) </button>
        </section>
    );
}

export default CounterFC;