import React from 'react'


function Categories(props) {
  const data = props;
  return (<>
    <li className="nav-item">
      <a className="nav-link" id={data.items.id} href="#">{data.items.title}</a>
    </li>
  </>)
}



export default Categories
