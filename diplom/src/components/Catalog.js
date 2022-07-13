import React from 'react'
import Categories from './Categories';
import { nanoid } from 'nanoid'
import CardCatalog from './card/CardCatalog';


function Catalog(props) {
  const data = props;
  return (<>
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Все</a>
        </li>
        {data.items[1].map((el) => { return <Categories items={el} key={nanoid()} /> })}
      </ul>
      <div className="row">
   {data.items[0].map((el) => {return <CardCatalog items={el} key={nanoid()} />})}
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>
    </section>
  </>)
}



export default Catalog
