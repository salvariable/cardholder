import {useState, useEffect} from 'react';

const useFetchProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
        );
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {loading, error, products};
};

export default useFetchProducts;
