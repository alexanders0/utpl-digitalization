import React from 'react';
import axios from 'axios';

function useApiPost ({URL, formData}) {

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    axios.post(
      URL,
      formData,
      { 
        headers: {
          /* "Authorization": `Token ${token}`, */
          "Content-type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      if (response.status === 201) {
          console.log("Todo OK");
          console.log(response.data);
      }
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setError(error);
    })
  }, [loading]);

  return [
    loading,
    error
  ];
}

export { useApiPost };
