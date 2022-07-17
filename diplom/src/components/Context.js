import React, { useState } from 'react'
import CatalogContext from '../context/CatalogContext'

function Context(props) {
   
    const [id, setId] = useState(null);

    const idChange = (id) => {
      setId(id);
    }

  return (
    <CatalogContext.Provider value={{id, idChange}}>
  {props.children}
    </CatalogContext.Provider>
  )
}


export default Context
