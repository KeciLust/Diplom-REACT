import React from 'react'


function LoadMore(props) {
  const { items } = props;
  return (
    <div className="text-center">
      <button className="btn btn-outline-primary" onClick={items} >Загрузить ещё</button>
    </div>
  )
}


export default LoadMore
