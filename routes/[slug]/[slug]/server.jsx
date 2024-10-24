import React, { useState, useEffect } from 'react';
import contentfulFetch from '../api/contentful-fetch'; // You’ll need to define this

const Home = () => {
  const [items, setItems] = useState([]);
  const [itemCollection, setItemCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
      {
        pageCollection(where: {slug:"home"}) {
          items { ... }
        }
        itemCollection(id: "6mW82qJLx8D57GMLFIOLmw") {
          componentsCollection { ... }
        }
      }`;

      try {
        const response = await contentfulFetch(query);
        const { data } = await response.json();
        setItems(data.pageCollection.items);
        setItemCollection(data.itemCollection.componentsCollection.items);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* Render your components here with the fetched data */}
    </div>
  );
};

export default Home;
