rg_exists=$(az group exists -n $ENVIRONMENT-rg)
echo "$rg_exists"
if [ "$rg_exists" = "true" ];
then
    echo "$ENVIRONMENT-rg exists!"
else
    echo "Creating Resource Group: $ENVIRONMENT-rg"
    az group create -n $ENVIRONMENT-rg -l eastus -o table
    az deployment group create -g $rg --template-file ./deploy/$ENVIRONMENT/azure-$ENVIRONMENT.bicep
fi

