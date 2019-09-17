# Getting started 

## What is Luigi?

Luigi is an open source JavaScript framework for micro frontends. It enables you to:
* create a unified user interface or web application using **Luigi Core**. 
* create micro frontends and connect them to the Luigi Core app using **Luigi Client**.

## What are micro frontends? 

Micro frontends are small frontend web applications that are implemented on one global user interface. Some of their main benefits are:

* **breaking up big, monolithic UIs**: decompose your frontend into smaller chucks and make it more manageable, all while maintaining a unified user experience.
* **giving individual teams autonomy**: every team in your project can develop their own end-to-end application which exists on the same core app. This gives teams full autonomy over release dates and updates, while also reducing code dependencies. 
* **making your website fast and resilient**: even if a micro frontend underperforms, the main user interface is not affected.
* **extensibility**: integrate external micro frontends to utilize functions from a 3rd party.
* **scalability**: add new features with ease without having to rely on only one UI team.
* **technology agnostic**: each micro frontend can be developed using a different framework without having to synchronize everything with the main application. This enables you to quickly react to new trends and adopt new technologies. 

## Prerequisites 

To get started with Luigi, you only need basic knowledge of HTML and JavaScript. 

You can build an application in Luigi without a framework, or use different frameworks such as:
* Angular 6
* SAPI5/OpenUI5
* VUE.JS 

## Next steps

### Luigi Core

To create and host a full web application in Luigi:

1. [Set up a Luigi Core application](https://github.com/SAP/luigi/blob/master/docs/application-setup.md).
2. [Read the Luigi Core documentation](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core).


### Luigi Client

To develop micro frontends and connect them to an already existing Luigi Core app:

1. [Install Luigi Client](https://github.com/SAP/luigi/tree/master/client).

2. Use the functions and parameters in the [Luigi Client API](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core).



