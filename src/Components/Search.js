import { useParams } from "react-router-dom";
import DataApi from "./DataApi";

const Search = () => {
    const { id } = useParams();
    return ( 
        <DataApi title = {id}/>
     );
}
 
export default Search;