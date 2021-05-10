import { useState, useEffect } from 'react';


function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      
  }, [url])

  return { data, loading, error }
}
export default useFetch;