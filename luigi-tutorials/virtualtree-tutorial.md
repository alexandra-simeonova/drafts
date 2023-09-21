---
parser: v2
auto_validation: true
time: 30
tags: [ tutorial>beginner, programming-tool>javascript]
primary_tag: topic>user-interface
---

# Build a Luigi React App With Micro Frontend Routing
<!-- description --> Use the Luigi framework to enable micro frontend routing inside a simple React project.

## Prerequisites
 - It is recommended to try the simpler examples on [GitHub](https://github.com/SAP/luigi/tree/master/core/examples) before this tutorial.
 - You need to have [Node.js](https://nodejs.org/en/download/current/) installed.
 - // TODO - any other requirements? 

## You will learn
  - How to create a simple Luigi project
  - How to connect the router of your micro frontend to Luigi Core
  - How to use Luigi Client features to reflect routing changes 

## Intro
[Project "Luigi"](luigi-project.io) is an open-source micro frontend framework suited for SAP environments which provides a Fiori-compliant navigation out-of-the-box. Luigi is technology-agnostic, which means you can create your app using any given frontend toolkit. 

This tutorial will show you how to enable micro fronted routing inside a [React](https://react.dev/) application. If your app is using [Angular](https://angular.io/) or [UI5]() instead, you can make use of the **Luigi Framework Support Libraries** to make routing configuration even easier. Simply follow the steps outlined here: 

- [Angular Support Library](https://docs.luigi-project.io/docs/framework-support-libraries/?section=angular-support-library)
- [UI5 Support Library](https://docs.luigi-project.io/docs/framework-support-libraries)

---

## Steps

### Download Luigi example

1. Create a Luigi application using the [React example](https://github.com/SAP/luigi/tree/main/core/examples/luigi-example-react) from Luigi's GitHub repository: 

```Shell
bash <(curl -s https://raw.githubusercontent.com/SAP/luigi/main/scripts/setup/react.sh)
```

2. The application should open in your browser at the address `localhost:4200`.  



### Adjust Luigi Core configuration 

**Luigi Core** refers to the main app which will host your micro frontends. In contrast, functions pertaining to the micro frontend are part of the **Luigi Client**. 

In this step, you will create the main Luigi Core navigation node ("Home") and its children which will link to the micro frontends. 

In order to keep Luigi Core routing in sync with the micro frontend, you will also add the [virtualTree](https://docs.luigi-project.io/docs/navigation-parameters-reference/?section=virtualtree) parameter to your configuration. 


1. Go to `luigi-example-react/public/luigi-config.js` and replace the content with: 

```JavaScript
Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
         {
            category: { label: 'Orders', icon: 'product', collapsible: true },
            pathSegment: 'orders',
            keepSelectedForChildren: true,
            label: 'Orders',
            viewUrl: "http://localhost:5001",
            navigationContext:'root',
            loadingIndicator: {
              enabled: false
            },
            children: [
              {
                pathSegment: ':orderId',
                label: 'Order Detail',
                viewUrl: 'http://localhost:4001/:orderId',
                loadingIndicator: {
                  enabled: false
                },
              }
            ],
          },
          {
            pathSegment: 'products', 
            label: 'VirtualExample', 
            loadingIndicator: {
                enabled: false
            },
            virtualTree: true,
            viewUrl: 'http://localhost:5001/products'
            
          }
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Luigi React App',
      logo: '/logo.png'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
```

### Create micro frontends 

In this step, you will make changes to the micro frontends (a.k.a. views) in your application. 

1. 