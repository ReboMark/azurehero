import { useEffect, useState } from "react";

const SearchTravel = (props) => {
    const [list, setList] = useState();

    

    useEffect(() => {
        console.log(props.props.data)
    },[props])
    return(
        <>
            
        </>
    )
}

export default SearchTravel;