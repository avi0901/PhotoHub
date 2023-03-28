import {useEffect, useState} from "react";
import PhotoList from "./PhotoList";

function DataApi(props) {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = props.title;
  useEffect(() => {
    const API_KEY = 'vJsrvcx2ZXnXngZHKsampP27BDAmPIOyaHXhs8St7HwhzbbC285x8luV';
    const url = `https://api.pexels.com/v1/search?query=${title}&per_page=21`;
    
    fetch(url, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err.message);
      })
  }, [title]);

  return (
    <div>
      {photos && <PhotoList photos={photos} title={title} />}
      {isLoading && <div className="loading"><h1>Loading....</h1></div> }
    </div>
  );
}

export default DataApi;