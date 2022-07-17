import { useState, useEffect } from 'react'

function useJsonFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();



  useEffect(() => {
    const fetchData = async () => {

      let canceled = false

      if (canceled) {
        return;
      }

      setLoading(true);

      try {

        const response = await fetch(url);
        if (!response.ok) {
          const error = await response.json();
          setError(error)
        }
        if (!canceled) {
          const data = await response.json();
          setData(data);
        }
      }

      finally {
        setLoading(false)
      }
    }
    fetchData();



  }, [url])

  return [data, loading, error]
}



export default useJsonFetch