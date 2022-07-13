import React from 'react'
import { nanoid } from 'nanoid';
import CardTop from './card/CardTop';

function Top(props) {
    const {...data } = props;
    return (<>
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
            {data.items.map((el) => { return <CardTop data={el} key={nanoid()}/>})}
            </div>
        </section>
    </>)
}



export default Top
