import AzureHeader from '../Common/Head'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router';

const AzureKubernetesService = () => {
    const router = useRouter();
    const body = () => {
        return(
            <>
                <div className={`container-fluid text-center ` + styles.font}>
                    <div className="row">
                        <div className={`col-lg-12 ` + styles.boxMargins}>
                            <h4>Azure Kubernetes Services (AKS)</h4>
                        </div>
                        <div className={`col-lg-4 text-center ` + styles.boxMargins}>
                            Deployment
                            <hr />
                            A deployment represents identical pods managed by the Kubernetes Deployment Controller. A deployment defines the number of pod replicas to create. The Kubernetes Scheduler ensures that additional pods are scheduled on healthy nodes if pods or nodes encounter problems.
                        </div>
                        <div className={`col-lg-4 text-center ` + styles.boxMargins}>
                            Service
                            <hr />
                            An abstract way to expose an application running on a set of Pods as a network service.
                            With Kubernetes you don't need to modify your application to use an unfamiliar service discovery mechanism. Kubernetes gives Pods their own IP addresses and a single DNS name for a set of Pods, and can load-balance across them.
                        </div>
                        <div className={`col-lg-4 text-center ` + styles.boxMargins}>
                            Ingress
                            <hr />
                            Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource.

                            <br /><br />
                            For more info you can visit <a href='https://docs.microsoft.com/en-us/azure/aks/'>https://docs.microsoft.com/en-us/azure/aks/.</a>
                        </div>
                        <div className="col-lg-12">
                            <button type="button" className={`float-end ` + styles.next} style={{width : '100px', marginRight: '30px'}} onClick={() => {router.back()}}>Back</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <div style={{backgroundColor : '#0080FF', height : '150vh'}}>
                <AzureHeader />
                {body()}
            </div>
        </>
    )
}

export default AzureKubernetesService;