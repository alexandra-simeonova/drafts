# Getting started 


## What is Luigi?

Luigi is an open source JavaScript framework for micro frontends. It enables you to:
* create a unified user interface or web application by using **Luigi Core**. 
* create micro frontends and connect them to the Luigi Core app using **Luigi Client**.

## What are micro frontends? 

Micro frontends are small frontend web applications that are implemented on one global user interface. They enable you to:

* **break up big, monolithic UIs**: decompose your frontend into smaller chucks and make it more manageable, all while maintaining a consistent user experience.
* **give individual teams autonomy**: every team in your project can develop their own end-to-end application which exists on the same core app. This gives teams full autonomy over release dates and updates, while also reducing code dependencies.
* **extend functionality**: integrate external micro frontends to utilize functions from a 3rd party.
* **scale**: add new features with ease without having to rely on only one UI team.
* **make your website fast and resilient**: even if a micro frontend underperforms, the main user interface is not affected.
* **be technology agnostic**: each micro frontend can be developed using a separate framework without having to synchronize everything with the main application. This enables you to quickly react to new trends and adopt new technologies.

![Overview diagram](https://github.com/alexandra-simeonova/drafts/blob/master/assets/luigi-overview-diagram%20copy.png)

## Prerequisites 

To get started with Luigi, you only need basic knowledge of HTML and JavaScript. 

You can build an application in Luigi without a framework, or use different frameworks such as:
* Angular 6
* SAPI5/OpenUI5
* VUE.JS 

## Examples 

## Next steps

### Luigi Core

To create a global user interface and host a full web application in Luigi:

1. [Set up a Luigi Core application](https://github.com/SAP/luigi/blob/master/docs/application-setup.md).
2. [Read the Luigi Core documentation](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core).


### Luigi Client

To develop micro frontends and connect them to an already existing Luigi Core app:

1. [Install Luigi Client](https://github.com/SAP/luigi/tree/master/client).
2. [Explore the Luigi Client API](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core).
