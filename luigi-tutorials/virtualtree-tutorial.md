---
parser: v2
auto_validation: true
time: 30
tags: [ tutorial>beginner, programming-tool>javascript]
primary_tag: topic>user-interface
---

# Build a Luigi App With Micro Frontend Routing
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
[Project "Luigi"](luigi-project.io) is an open-source micro frontend framework suited for SAP environments which provides a Fiori-compliant navigation out-of-the-box. Luigi is technology-agnostic, which means you can create your app using any technology such as React, Angular, or UI5. 

---

## Steps

### Download Luigi example

//TODO - Is there a better way to do this? The [React script](https://docs.luigi-project.io/docs/application-setup?section=application-setup-for-react) is [not always working](https://github.com/SAP/luigi/issues/3071), at least not for Node version 16+ 

1. Download the Luigi [React example](https://github.com/SAP/luigi/tree/main/core/examples/luigi-example-react) folder from Luigi's GitHub repository: 

```Shell
mkdir my-react-app
cd  my-react-app
git init
git remote add origin https://github.com/SAP/luigi.git
git config core.sparseCheckout true
echo "core/examples/luigi-example-react" > .git/info/sparse-checkout 
git pull origin master
```

2. Run the application: 

```Shell
cd core/examples/luigi-example-react
npm i
npm run start
```

### Adjust Luigi Core configuration 

**Luigi Core** refers to the main app which will host your micro frontends. In contrast, functions pertaining to the micro frontend are known as **Luigi Client**. 

For this example, we will only need one Luigi Core navigation node ("Home") because the rest of the navigation will happen through the micro frontend. 

In order to keep Luigi Core routing in sync with the micro frontend, you need to enable [virtualTree](https://docs.luigi-project.io/docs/navigation-parameters-reference/?section=virtualtree) in your configuration: 


1. Go to `luigi-example-react/public/luigi-config.js` and replace the content with: 

```JavaScript
Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'Home',
        label: 'Home',
        viewUrl: 'http://localhost:5001',
        loadingIndicator: { enabled: false },
        virtualTree: true,
        icon: 'home',
        hideFromNav: false,
        anonymousAccess: true,
        isExternal: false,
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

### Adjust views

In this step, you will make changes to the micro frontends (a.k.a. views) in your application. 

1. Go to `luigi-example-react/src/views/sample1.js`. This is the micro frontend file which will handle its own internal routing. Open the `sample1.js` file in a code editor and delete the existing content. 

2. Copy and paste these imports into the file: 

```js 
import React, { Component } from 'react';
import '../../node_modules/fundamental-styles/dist/fundamental-styles.css';
import { linkManager, getNodeParams, getPathParams, addInitListener } from '@luigi-project/client';
import { withRouter, useParams } from 'react-router-dom'
```

This will allow you to use the [Luigi Client API](https://docs.luigi-project.io/docs/luigi-client-api) in your app in order to communicate with Luigi Core and make use of Luigi's features. 

In this case, the Luigi [linkManager](https://docs.luigi-project.io/docs/luigi-client-api?section=linkmanager) will be what allows you to navigate to the correct routes.  

3. Add the following content below your imports: 

```js
class Sample1 extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const initListenerId = addInitListener(
      (context) => {
        console.log('context:', context);
      }
    )

    console.log('route', window.location.href);
    console.log('params', this.props.match);
  }

  handleClick = e => {
    this.props.history.push("/haushalt/50158/test/2/test/3/4/5/6/7/8/9/10/11/12/13");
    linkManager().withoutSync().navigate('haushalt/50158/test/2/test/3/4/5/6/7/8/9/10/11/12/13');
    console.log('params', this.props.match)
  };

  render() {
    return (
      <div>
        <section className="fd-section">
          <div className="fd-section__header">
            <h1 className="fd-section__title">Page 1</h1>
          </div>
          <div className="fd-panel">
            Luigi ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </div>
          <button onClick={this.handleClick}>Go More Than 9 Params</button>
        </section>
      </div>
    );
  }
}

export default withRouter(Sample1);
```



//TODO