param webAppName string = 'azure-tutorial-sessions'
param sku string = 'F1'
param linuxFxVersion string = 'node|14-lts'
param location string = resourceGroup().location
param repositoryUrl string = 'https://github.com/ReboMark/azurehero.git'
param branch string = 'main'
var appServicePlanName = toLower('AppServicePlan-${webAppName}')

resource appServicePlan 'Microsoft.Web/serverfarms@2021-03-01' = {
  name: appServicePlanName
  location: location
  properties: {
    reserved: true
  }
  sku: {
    name: sku
  }
  kind: 'linux'
}

resource appService 'Microsoft.Web/sites@2021-03-01' = {
  name: webAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: linuxFxVersion
    }
  }
}

resource srcControls 'Microsoft.Web/sites/sourcecontrols@2021-03-01' = {
  name: '${appService.name}/web'
  properties: {
    repoUrl: repositoryUrl
    branch: branch
    isManualIntegration: true
  }
}
