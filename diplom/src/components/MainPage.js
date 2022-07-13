import { React, useState, useEffect } from 'react'
import useJsonFetch from '../hooks/useJsonFetch'
import LoaderCatalog from './loaders/LoaderCatalog'
import LoaderTop from './loaders/LoaderTop'
import Top from './Top';
import Catalog from './Catalog';


function MainPage() {
  const [top, setTop] = useState([]);
  const [categories, setCategories] = useState([]);
  const [catalog, setCatalog] = useState([]);

  const [dataTop, loadingTop, errorTop] = useJsonFetch('http://localhost:7070/api/top-sales');
  const [dataCategories, loadingCategories, errorCategories] = useJsonFetch('http://localhost:7070/api/categories');
  const [dataCatalog, loadingCatalog, errorCatalog] = useJsonFetch('http://localhost:7070/api/items');

  useEffect(() => {
    setTop(dataTop);
  }, [loadingTop]);

  useEffect(() => {
    setCategories(dataCategories);
  }, [loadingCategories]);

  useEffect(() => {
    setCatalog(dataCatalog);
  }, [loadingCatalog]);

  return (<>
    {top?<Top items={top} />:<LoaderTop />}
    {catalog?<Catalog items={[catalog, categories]} />: <LoaderCatalog />}
  </>)
}



export default MainPage
