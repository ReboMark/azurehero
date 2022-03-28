rg_exists=$(az group exists -n $ENVIRONMENT-rg)

if [ "$rg_exists" = "true" ];
then
    echo "$ENVIRONMENT-rg exists!"
else
    echo "$ENVIRONMENT-rg do not exists!"
fi

#az deployment group create -g $rg --template-file ./deploy/$ENVIRONMENT/azure-$ENVIRONMENT.bicep