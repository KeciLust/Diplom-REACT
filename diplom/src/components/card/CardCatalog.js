import React from 'react'


function CardCatalog(props) {
  const data = props;

  return (<>
    <div className="col-4" id={data.items.id} >
      <div className="card catalog-item-card">
        <img src={data.items.images[0]}
          className="card-img-top img-fluid" alt={data.items.title} />
        <div className="card-body">
          <p className="card-text">{data.items.title}</p>
          <p className="card-text">{data.items.price}.</p>
          <a href="/products/1.html" className="btn btn-outline-primary" >Заказать</a>
        </div>
      </div>
    </div>
  </>)
}



export default CardCatalog
