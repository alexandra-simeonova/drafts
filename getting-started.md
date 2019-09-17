# Getting started 

## What is Luigi?

Luigi is a JavaScript framework for **micro frontends**. It enables you to create user interface which is driven by local and distributed micro frontend views. 

To get started with Luigi, you only need basic knowledge of HTML and JavaScript. 

You may install Luigi on an already existing application or website, or you can create a new application from scartch using different frameworks such as:
* Angular 6
* SAPI5/OpenUI5
* VUE.JS

Once a main user interface is set up with Luigi, you can create micro frontends which seamlessly connect with it. 

## What are micro frontends? 

Micro frontends are small independent web applications that are implemented within the same global user interface. They are a great tool for **breaking up big, monolithic UIs**.

Instead of relying on a single UI team, every team in your project can develop their own end-to-end application (micro frontend) which connects to the same Luigi framework. This **gives individual teams autonomy** over release dates and updates. 

You can also integrate micro frontends from external systems and extend your application with additional functionality from a 3rd party.

The micro fontend modules in Luigi are **technology agnostic**, which means they can be developed using different frameworks, yet still integrate in the same main application. This saves time and enables quick adoption of new technologies. 

Lastly, Luigi can **make your website faster** and more resilient, because even if a micro frontend underperforms, the main user interface is not affected. 

## Luigi components

**Luigi Core** enables you to create a global user interface from scratch and configure it according to your needs.

* [Luigi Core Installation] (https://github.com/SAP/luigi/blob/master/docs/application-setup.md)
* [Luigi Core Documentation](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core)


**Luigi Client** provides you with the tools to connect your micro frontend to the main Luigi Core application. 

* [Luigi Client Installation](https://github.com/SAP/luigi/tree/master/client#luigi-client) 
* [Luigi Client API](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core)



