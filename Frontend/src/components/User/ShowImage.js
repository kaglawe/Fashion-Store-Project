import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// function ShowImage() {
//   const [imageData, setImageData] = useState(null);
//   const location = useLocation();
//   const productObject = location.state.p;
//   console.log(productObject.productId);

//   useEffect(() => {
//     // Make a GET request to the Spring Boot REST API to retrieve the image data
//     axios.get(`http://localhost:8080/image/fetch/${productObject.productId}`)
//       .then((response) => {
//         setImageData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       {imageData && (
//         <img src={`data:image/png;base64,${btoa(String.fromCharCode.apply(null, imageData))}`} alt="Your Image" />
//       )}
//     </div>
//   );
// }

// export default ShowImage;



function ShowImage({ imageUrl }) {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        if (response.status === 200) {
          const blob = new Blob([response.data], { type: 'image/jpeg' });
          const imageData = URL.createObjectURL(blob);
          setImageData(imageData);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch image');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchImage();
  }, [imageUrl]);

  if (loading) {
    return <div>Loading image...</div>;
  }

  return <img src={imageData} alt="Retrieved image" />;
}

export default ShowImage;

