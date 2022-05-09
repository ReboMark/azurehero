import { useEffect, useState } from "react";
import styles from '../../styles/Login.module.css';
import { PublicClientApplication } from "@azure/msal-browser";
import { config } from '../Common/authConfig';
import { useRouter } from 'next/router';
import axios from "axios";

const User = () => {
    const router = useRouter();
    const [userLogin, setUserLogin] = useState();
    const publicClientApplication = new PublicClientApplication({
        auth: {
            clientId: config.appId,
            redirectUri: config.redirectUri,
            authority: config.authority
        },
        cache: {
            cacheLocation: "localStorage",
            storeAuthStateInCookie: true
        }
    });

    const login = async () => {
        try {
            var response = await publicClientApplication.loginPopup({
                scopes: config.scopes,
                prompt: "select_account",
                redirectUri: "/dashboard"
            });
            setUserLogin(response);
        }
        catch {
            localStorage.clear()
            alert('error')
        }
    }

    const logoutClient = async () => {
        publicClientApplication.logoutPopup()
    }

    const validateAuth = () => {
        return (
            <>
                <button className={`${styles.buttons}` + " " + `${styles.font}`}
                    onClick={login}
                >
                    Login using Microsoft Azure AD
                </button>
            </>
        )
        
    }

    useEffect(() => {
        if (localStorage.length > 0) {
            router.push("/dashboard")
        }
        else {
            validateAuth()
        }
    },[userLogin])


    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className={"col-lg-4 text-center"}>
                        <h4 className={`${styles.loginHeader}` + " " + `${styles.font}`}>Azure Brown Bag Session</h4>
                        {validateAuth()}
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    )
}

export default User;