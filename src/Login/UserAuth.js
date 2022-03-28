import { InteractionRequiredAuthError, InteractionStatus } from "@azure/msal-browser";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";

function ProtectedComponent() {
    const { instance, inProgress, accounts } = useMsal();
    const [apiData, setApiData] = useState(null);


    useEffect(() => {
        const accessTokenRequest = {
            scopes: ["user.read"],
            account: accounts[0]
        }
        if (!apiData && inProgress === InteractionStatus.None) {
            instance.acquireTokenSilent(accessTokenRequest).then((accessTokenResponse) => {
                // Acquire token silent success
                let accessToken = accessTokenResponse.accessToken;
                // Call your API with token
                callApi(accessToken).then((response) => { setApiData(response) });
            }).catch((error) => {
                if (error instanceof InteractionRequiredAuthError) {
                    instance.acquireTokenRedirect(accessTokenRequest);
                }
                console.log(error);
            })
        }
    }, [instance, accounts, inProgress, apiData]);

    return <p>Return your protected content here: {apiData}</p>
}

function UserAuth() {
    return (
        <AuthenticatedTemplate>
            <ProtectedComponent />
        </ AuthenticatedTemplate>
    )
}

export default UserAuth;