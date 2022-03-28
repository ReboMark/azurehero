rg_exists=$(az group exists -n $ENVIRONMENT-rg)
echo "$rg_exists"
if [ "$rg_exists" = "false" ];
then
    echo "$ENVIRONMENT-rg exists!"
else
    echo "$ENVIRONMENT-rg do not exists!"
fi

#az deployment group create -g $rg --template-file ./deploy/$ENVIRONMENT/azure-$ENVIRONMENT.bicep