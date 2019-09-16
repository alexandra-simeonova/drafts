# Getting started 

## What is Luigi?

Luigi is a JavaScript framework for micro frontends. It enables you to create user interface driven by local and distributed views. 

By following this guide, you will create your own small user interface. This will give you more insight into Luigi's main components and benefits. 

## What are micro frontends? 

Micro frontends are a great tool for **breaking up big, monolithic UIs**. 

Instead of relying on one UI team, every team in your project can develop their own end-to-end application (micro frontend) which connects to the same framework. 

This improves scalability, makes updates easier, and results in a website that is more resilient and easier to manage. 

The Luigi framework makes the process of implementing micro frontends fast and simple. Only a basic knowledge of JavaScript and HTML is required to get started with Luigi. 

## Luigi structure

**[Luigi Core]**(https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core) enables you to create this main application and configure it according to your needs.) enables you to create a main UI application and configure it according to your needs.

**[Luigi Client]**(https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core) provides you with the tools to connect your micro frontend to the main Luigi Core application. 

In the following sections, you will learn how to set up a small sample application in Luigi. 

## Prerequisites 

- Live Server

To install Live Server, use this command in the terminal:
`npm install -g live-server`

## Setup 

Add Luigi to your project dependencies. 

```
npm install --save @kyma-project/luigi-core
npm install --save @kyma-project/luigi-client
```
## Installation

How to install Luigi depends on which framework you want to use for your project.

For this small test example, we recommend starting with the [No Framework](https://github.com/SAP/luigi/blob/master/docs/application-setup.md#application-setup-for-an-application-not-using-a-framework) installation.


## Basic Configuration

1. Open the `basicConfiguration.js` file in your luigi-config folder. This file will enable you to configure your Luigi Core app. 

2. You will notice the file already contains some Luigi test features by default. Open your application. The sample settings will be rendered on your page. You are ready to start with Luigi. 

## Next steps

If you are interested in developing a main application using Luigi Core, read these guides:

[Luigi Core Documentation](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core)

If you are interested in connecting your micro frontend to Luigi, see: 

[Luigi Client Documentation](https://github.com/SAP/luigi/blob/master/docs/README.md#luigi-core)



