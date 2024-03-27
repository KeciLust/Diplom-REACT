import React, { useRef } from 'react';




function SearchHeader() {

  const ref = useRef(null);
  
  const onClick = () => {
    const searchFormEl = document.querySelector('[data-id=search-form]');
    searchFormEl.classList.toggle('invisible');
    searchFormEl.querySelector('input').focus();
    if(ref.current.value){
      window.location.href = '/catalog.html';
    }
   

  }
  return (<>
    <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={onClick} />
    <form data-id="search-form" className="header-controls-search-form form-inline invisible">
      <input className="form-control" ref={ref} placeholder="Поиск" />
    </form>
  </>)
}



export default SearchHeader
