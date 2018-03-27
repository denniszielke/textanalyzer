---
services: documentdb
platforms: nodejs
author: denniszielke
---

# Web application development with Node.js and Express using DocumentDB
This sample shows you how to use the Microsoft Azure DocumentDB service to store and access data from a Node.js Express application hosted on Azure Websites. 


## Running this sample
1. Deploy the arm template in arm/template.json to azure

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fdenniszielke%textanalyzer%2Fmaster%2Farm%2Ftemplate.json" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>  

It will deploy the following resources
- MongoDB
- App service
- Application Insights
- Text Analytics Cognitive Service
- DocumentDb Connection, AppInsights configuration, Cognitive Services access key nside the app service appsettings
