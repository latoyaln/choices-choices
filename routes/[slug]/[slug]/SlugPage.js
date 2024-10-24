import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import contentfulFetch from '../api/contentful-fetch';

const DynamicPage = () => {
  const { slug } = useParams(); // Capture the slug from the URL
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
      {
        pageCollection(where: {slug:"${slug}"}) { ... }
      }`;
      
      const response = await contentfulFetch(query);
      const { data } = await response.json();
      setData(data.pageCollection.items);
    };

    fetchData();
  }, [slug]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* Render the components dynamically */}
    </div>
  );
};

export default DynamicPage;
