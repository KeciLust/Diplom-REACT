import { React, useState, useEffect, useContext } from 'react'
import useJsonFetch from '../hooks/useJsonFetch'
import LoaderCatalog from './loaders/LoaderCatalog'
import Catalog from './Catalog';
import CatalogContext from '../context/CatalogContext';
import LoadMore from './LoadMore';
import LoaderMore from './loaders/LoaderMore';


function CatalogPage() {
  const [url, setUrl] = useState('http://localhost:7070/api/items');
  const [urlMore, setUrlMore] = useState('http://localhost:7070/api/items');
  const [num, setNum] = useState(0);
  const [categories, setCategories] = useState([]);
  const [catalog, setCatalog] = useState([]);

  const { id } = useContext(CatalogContext);

  const [dataCategories] = useJsonFetch('http://localhost:7070/api/categories');
  const [dataCatalog] = useJsonFetch(url);
  const [dataCatalogMore] = useJsonFetch(urlMore);

  useEffect(() => {
    setCatalog([]);
    setNum(0);
    if (id) {
      setUrl(`http://localhost:7070/api/items?categoryId=${id}`)
    } else {
      setUrl('http://localhost:7070/api/items');
    }
  }, [id]);

  useEffect(() => {
    setCategories(dataCategories);
  }, [dataCategories]);

  useEffect(() => {
    setCatalog(dataCatalog);
  }, [dataCatalog]);

  const onClickMore = () => {
    setNum(prev => prev += 6);
    if (id) {
      setUrlMore(`http://localhost:7070/api/items?categoryId=${id}&offset=${num}`);
    } else {
      setUrlMore(`http://localhost:7070/api/items?offset=${num}`);
    }
    setCatalog(prev => [...prev, ...dataCatalogMore]);
  }

  return (<>

    {catalog ? <Catalog items={[catalog, categories]}>
      {catalog.length >= num + 5 ? dataCatalogMore ? <LoadMore items={onClickMore} /> : <LoaderMore /> : null}
    </Catalog> : <LoaderCatalog />}
  </>)
}



export default CatalogPage
