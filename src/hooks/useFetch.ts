import { useCallback, useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error };
};