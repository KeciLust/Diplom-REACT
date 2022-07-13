import { React, useState, useEffect } from 'react'
import useJsonFetch from '../hooks/useJsonFetch'
import LoaderCatalog from './loaders/LoaderCatalog'
import LoaderTop from './loaders/LoaderTop'
import Top from './Top';
import Catalog from './Catalog';


function MainPage() {
  const [top, setTop] = useState(null);
  const [loadTop, setLoadTop] = useState(false);
  const [categories, setCategories] = useState([]);
  const [catalog, setCatalog] = useState([]);

  const [dataTop, loadingTop] = useJsonFetch('http://localhost:7070/api/top-sales');
  const [dataCategories] = useJsonFetch('http://localhost:7070/api/categories');
  const [dataCatalog] = useJsonFetch('http://localhost:7070/api/items');

  useEffect(() => {
    setCategories(dataCategories);
  }, [dataCategories]);

  useEffect(() => {
    setTop(dataTop)
    setLoadTop(loadingTop);
  }, [dataTop, loadingTop]);

  useEffect(() => {
    setCatalog(dataCatalog);
  }, [dataCatalog]);
  return (<>
    {loadTop ? <LoaderTop /> : top ? <Top items={top} /> : null}
    {catalog ? <Catalog items={[catalog, categories]} /> : <LoaderCatalog />}
  </>)
}



export default MainPage
