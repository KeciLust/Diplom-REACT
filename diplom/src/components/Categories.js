import React from 'react'


function Categories(props) {
  const data = props;
  const onClick = data.items[1];
  return (<>
    <li className="nav-item">
      <a className="nav-link" id={data.items[0].id} href="/" onClick={onClick}>{data.items[0].title}</a>
    </li>
  </>)
}



export default Categories
