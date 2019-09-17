# Getting started 

## What is Luigi?

Luigi is an open source JavaScript framework for **micro frontends**. It enables you to:

* create a core user interface or web application using **Luigi Core** 
* create micro frontends and connect them to the main application using **Luigi Client**

### Prerequisites 

To get started with Luigi, you only need basic knowledge of HTML and JavaScript. 

You may install Luigi on an already existing application or website, or you can create a new application using different frameworks such as:
* Angular 6
* SAPI5/OpenUI5
* VUE.JS 

## What are micro frontends? 

Micro frontends are small frontend web applications that are implemented on one global user interface. Some of their main benefits are:

* **breaking up big, monolithic UIs**: decompose your frontend into smaller chucks and make it more manageable, all while maintaining a unified user experience.
* **giving individual teams autonomy**: every team in your project can develop their own end-to-end application (micro frontend) which connects to the same Luigi framework. This gives teams full autonomy over release dates and updates, while also reducing code dependencies. 
* **making your website fast and resilient**: even if a micro frontend underperforms, the main user interface is not affected.
* **extensibility**: you can integrate external micro frontends and extend your application with additional functionality from a 3rd party.
* **scalability**: add new features with ease without having to rely on only one UI team.
* **technology agnostic**: develop multiple micro frontends using any framework of your choice, without having to synchronize everything with the main application. This enables you to quickly react to new trends and adopt new technologies.  

## Luigi components

**Luigi Core** enables you to create a main application/global user interface and configure it according to your needs.

* [Luigi Core Installation](https://github.com/SAP/luigi/blob/master/docs/application-setup.md)
* [Luigi Core Documentation](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core)


**Luigi Client** provides you with the tools to create a micro frontend and connect it to the main Luigi Core application. 

* [Luigi Client Installation](https://github.com/SAP/luigi/tree/master/client#luigi-client) 
* [Luigi Client API](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core)



