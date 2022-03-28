import { useEffect, useState } from "react";
import SearchTravel from "../src/Search/SearchTravel";

const Search = (data) => {
    return(
        <>
           <SearchTravel props={data}/>
        </>
    )
}

export default Search;

export async function getServerSideProps(context) {
    await new Promise(acc => {
        setTimeout(acc, 2000)
    });
    const data = context.query
    return {
        props: {
            data
        }
    }
}