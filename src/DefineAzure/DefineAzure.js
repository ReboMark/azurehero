import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css';
import AzureHeader from "../Common/Head";
import { useRouter } from "next/router";
const DefineAzureCloud = () => {
    const router = useRouter();
    const LuxotticaStandards = () => {
        router.push("/LuxotticaStandards")
    }

    const routeIaas = () => {
        router.push("/iaas")
    }

    const routePaas = () => {
        router.push("/paas")
    }

    const routeSaas = () => {
        router.push("/saas")
    }

    const body = () => {
        return(
            <>
                <div className={`container ` + styles.font}>
                    <div className="row">
                    <div className={`col-lg-4 text-center ` + styles.boxMargins}>
                            <h4>IaaS</h4>
                            <b>Infrastructure as a service (IaaS)</b> is a type of cloud computing service that offers essential compute, storage, and networking resources on demand, on a pay-as-you-go basis. You are the one who will be managing the infrastructure such as security updates, installation of softwares and etc.
                            <br />
                            <br />
                            <br />
                            <a className="float-end" style={{cursor: 'pointer'}} onClick={routeIaas}>Learn more...</a>
                        </div>
                        <div className={`col-lg-4 text-center ` + styles.boxMargins}>
                            <h4>PaaS</h4>
                            <b>Platform as a service (PaaS)</b> is a complete development and deployment environment in the cloud, with resources that enable you to deliver everything from simple cloud-based apps to sophisticated, cloud-enabled enterprise applications. You purchase the resources you need from a cloud service provider on a pay-as-you-go basis and access them over a secure Internet connection.
                            <br />
                            <a className="float-end" style={{cursor: 'pointer'}} onClick={routePaas}>Learn more...</a>
                        </div>
                        <div className={`col-lg-4 text-center ` + styles.boxMargins}>
                            <h4>SaaS</h4>
                            <b>Software as a Service (SaaS)</b> provides a complete software solution that you purchase on a pay-as-you-go basis from a cloud service provider. You rent the use of an app for your organization, and your users connect to it over the Internet, usually with a web browser. All of the underlying infrastructure, middleware, app software, and app data are located in the service provider’s data center.
                            <br />
                            <a className="float-end" style={{cursor: 'pointer'}} onClick={routeSaas}>Learn more...</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <div style={{backgroundColor : '#0080FF', height : '100vh'}}>
            {AzureHeader()}
            {body()}
            <button type="button" className={`float-end ` + styles.next} style={{width : '100px', marginRight: '90px'}} onClick={LuxotticaStandards}>Next</button>
            </div>
        </>
    )
}

export default DefineAzureCloud;