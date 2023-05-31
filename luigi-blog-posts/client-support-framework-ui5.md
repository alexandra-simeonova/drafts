# Introducing Luigi Client UI5 Support Library 

Project "Luigi" recently introduced its new Luigi Client support library for UI5. This blog post outlines its most important features and tells you a little more about Luigi. 

## Luigi and UI5 

Luigi is a Svelte-based framework used for implementing a micro frontend architecture in your web applications. Micro frontend architecture brings the concept of microservices to the frontend world, enabling you to create web apps which are scalable, modularizable, customizable, and consistent. Luigi is divided into two main parts: Luigi Core - the main app - and Luigi Client - the view/micro frontend contained within it. 

One of Luigi's main advantages is that it is technology agnostic, which means it supports apps built on any frontend framework. This includes UI5, SAP's powerful enterprise-ready web toolkit. Therefore, it has always been possible to use Luigi and UI5 together ever since Luigi's conception. But now, combining the two is even easier thanks to the newly released Luigi Client support library, which provides helper methods for integrating UI5 apps as Luigi micro frontends. 

## Luigi Client UI5 Support Library 

The purpose of the library is to make development easier by providing functions that can be used in your UI5 application. (You can find an example of a UI5 app built with Luigi here.)

The Luigi Client UI5 support library offers the following features: 

* Context - allows you to receive a context object from Luigi
* Auto routing - provides an easier way to keep your UI5 app and Luigi routing in sync
* Auto routing for modals - enables synchronization of routing between Luigi Core and a modal
* Preload - special view that can help you when using Luigi's viewGroups feature

One of the scenarios supported by the library is that of auto routing. For example, say that you have built an app with UI5 with the URL `myUI5app.com` and you included it as a Luigi micro frontend in the navigation:

`
navigation: {
  nodes: [
    {
      pathSegment: 'ui5app',
      label: 'My UI5 app',
      viewUrl: 'https://myUI5app.com',
        }
…
`

Your UI5 app may contain several pages which the user can navigate to, such as `https://myUI5app.com/about` or `https://myUI5app.com/settings`. Normally, this navigation wouldn't trigger a change in the URL of the main Luigi app because the two apps are independent. But with the help of the Luigi Client UI5 Support Library auto routing feature, you can synchronize the routing so that both URLs are updated at the same time. To use the feature, you would need to edit the `routes` definition of the manifest file in your UI5 app, and add the following: 
 
`
{
    "pattern": "",
    "name": "about",
    "target": "about",
    "data": {
        "luigiRoute": "/myUI5app/about"
    }
},
{
    "pattern": "",
    "name": "settings",
    "target": "settings",
    "data": {
        "luigiRoute": "/myUI5app/settings"
    }
},
`

The end result should be that navigating to the page within the UI5 app also updates the Luigi route. There are other configurations of the auto routing feature available, for example one where Luigi's virtualTree is enabled. You can find more information about these in the UI5 Support Library section in the Luigi documentation. 

In conclusion, the Luigi Client support library can be useful if you are a developer who wants to create apps with UI5 and Luigi. Leveraging the power of both allows you to create apps which are flexible, scalable, and compliant with SAP and Fiori standards. For more information, you can read the Luigi documentation or UI5 documentation. You can also reach the Luigi team on our Slack channel or ask a question through GitHub discussions. 
