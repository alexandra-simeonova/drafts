---
parser: v2
auto_validation: true
time: 20
tags: [ tutorial>beginner, programming-tool>javascript]
primary_tag: topic>user-interface
---

# Enable Micro Frontends in Your UI5 App Using Luigi Container
<!-- description --> Use the Luigi framework to create a sample application with Luigi Container micro frontends.

## Prerequisites
 - It is recommended to try the simpler examples on [GitHub](https://github.com/SAP/luigi/tree/master/core/examples) first to get familiarized with Luigi.
 - You need to have [Node.js](https://nodejs.org/en/download/current/) installed.
 - // TODO - any other requirements? 

## You will learn
  - What Luigi and Luigi Container are  
  - How to install Luigi Container
  - How to use Luigi Container in a sample UI5 application

## Intro

[Project "Luigi"](luigi-project.io) is an open-source micro frontend framework suited for SAP environments which provides a Fiori-compliant navigation out-of-the-box. Luigi is technology-agnostic, which means you can create your app using any given frontend toolkit. 

Usually, Luigi consists of two main parts: **Luigi Core** and **Luigi Client**. Core refers to the main app which houses the micro frontends, while Client refers to the micro frontends themselves. 

**Luigi Container** allows you to easily insert Luigi micro frontends anywhere without the need for a Luigi Core application. This makes it easier for developers to use Luigi without having to make any big changes to their application. 

This tutorial will show you how to enable micro frontends inside a [UI5](https://sapui5.hana.ondemand.com/sdk/#/) application. However, the same process will also apply to other frontend frameworks such as [Angular](https://angular.io/) or [React](https://react.dev/).

> **NOTE:** In addition to this tutorial, you can also try out the Luigi Container test app on [GitHub](https://github.com/SAP/luigi/tree/main/container/test-app).

---

## Steps

### Create React app

1. Open a command prompt/Terminal window and run: 

```shell
npx create-react-app my-app
cd my-app
npm start
```

2. Open http://localhost:3000/ to see your app.

### Install Luigi Container 

1. Install the Luigi Container [npm](https://www.npmjs.com/) package:

```shell
npm install @luigi-project/container
```

2. 