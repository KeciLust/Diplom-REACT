import React, {useState, useEffect} from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import Top from './Top';
import LoaderTop from './loaders/LoaderTop';



function LoaderTopPage() {

    const [top, setTop] = useState(null);
    const [dataTop] = useJsonFetch('http://localhost:7070/api/top-sales');

    useEffect(() => {
        setTop(dataTop)
      }, [dataTop]);
  return (<>
    {top?<Top items={top} /> : <LoaderTop />}
  </>)
}


export default LoaderTopPage
