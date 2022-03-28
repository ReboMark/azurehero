import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

const Header = ({props}) => {

    useEffect(() => {
        
    },[])
    
    return(
        <>
            <Head>
                <title>{props[0]}</title>
                
            </Head>
        </>
    )
}

export default Header;