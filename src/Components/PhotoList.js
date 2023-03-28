const PhotoList = (props) => {
    const title = capitalize(props.title);
    const photos = props.photos;

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return ( 
        <div className="photolist">
            <h2>{title} Pictures</h2>
            {photos.map((photo)=>(
                <img key={photo.id} src={photo.src.landscape} alt={photo.photographer}/>
                
            ))}
        </div>
     );
}
 
export default PhotoList;