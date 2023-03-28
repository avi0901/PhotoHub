import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {

    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        let url = `/search/${title}`;
        navigate(url);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Search For Pictures HERE" 
            value = {title} 
            onChange={(e)=> setTitle(e.target.value)}
            />
            <button className="btn" type="submit">Search</button>
        </form>
     );
}
 
export default SearchBox;