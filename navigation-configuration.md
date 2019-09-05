# Navigation configuration

Read these guides to get started with configuring your navigation:

* Navigation elements 
* First steps
* Basic navigation parameters
* Path parameters 
* Node parameters
* Dynamic viewUrl 
* Navigation example

If you are already familiar with the basics, take a look at these guides:
* Full reference list of navigation parameters 
* Connect micro frontends with navigation 

## Navigation elements

There are three main elements to Luigi: 

1. Top navigation which displays the main navigation path.
2. Side navigation which displays the defined applications.
3. Main content window which renders the micro frontend.
 

![Navigation layout](assets/navigation-structure.png)


## First steps

Find the `basicConfiguration.js` file in your luigi-config folder. You can configure the navigation by editing this file. 

You will notice that the file consists of a tree-like structure of **navigation nodes**. The outer elements represent the top navigation, while their children represent the side navigation. The children of the side navigation will take you one level further, to yourwebsite.com/TopNav1/SideNav1, and so on. 

````javascript 
navigation: {
    nodes: [
      {
        pathSegment: 'TopNav1',
        label: 'Top Navigation Element One',
        viewUrl: 'https://my.microfronted.com',
        children: [
          {
            pathSegment: 'SideNav1',
            label: 'Side Navigation Element One',
            viewUrl: 'https://my.microfrontend.com/projects/list.html',
            children: [
              {
                category: 'Links'
                link: '/projects',
                label: 'This takes you to yourwebsite.com/home/projects',
              },
              {
                category: {label:'Links', icon:'myIcon'},
                 externalLink: {
                  url: 'http://www.google.com',
                  sameWindow: false 
                  },
                label: 'This takes you to an external page',
              },
            ]
          },
        ]
      },
      {
        pathSegment: 'TopNav2',
        label: 'Top Navigation Element Two',
        viewUrl: 'https://my.2ndmicrofronted.com',
        children: [
          ...
````

## Basic navigation parameters

>**NOTE:** This document is only an introduction. For a full list of available parameters, see the [parameter reference](navigation-parameters-reference.md) document.

In the "First steps" example, you saw some basic navigation parameters:

### pathSegment
The path in the browser URL. If the value of this parameter is 'home', that node will represent the path `yourwebsite.com/home`. The main application path is built from values in the navigation path, joined with the **/** character. You can override this setting by using these parameters instead: 
* **link** - define a specific path, for example `/projects` and you will be taken to `yourwebsite.com/home/projects`. Note that a valid path must always start from the root node, hence `yourwebsite.com/projects` would return an error. 
* **externalLink** - takes you to an external webpage. 
### label
The text label of the node that renders on your page.
### viewUrl
The URL of the micro frontend that will be displayed in the middle of your page. 
### category 
If you want to group some navigation nodes into a separate parent node, you can use the **category** property. The grouped navigation nodes are rendered in a dropdown. The **category** property needs a **label** and, optionally, an **icon**.  

## Path parameters

Use path parameter values to define the **pathSegment** in your configuration. You can either use a static value for your **pathSegment**, or add a colon to this value to make it act as a parameter, for example `:projectId`. This tells Luigi to accept any value for this **pathSegment** of the main application URL. The value replaces the parameter when it is further processed by the application. In the example below, if your projectId is `projectX`, the URL will become `'https://my.microfrontend.com/projects/details.html#id=:projectX;`

```javascript
{
  navigation: {
    nodes: [
      {
        pathSegment: 'home',
        label: 'Home',
        viewUrl: 'https://my.microfrontend.com/',
        children: [
          {
            pathSegment: 'projects',
            label: 'Projects',
            viewUrl: 'https://my.microfrontend.com/projects/list.html',
            children: [
              {
                pathSegment: ':projectId',
                label: 'Project Details',
                viewUrl: 'https://my.microfrontend.com/projects/details.html#id=:projectId;'
              }            
			]
          }
        ]
      }
    ]
  }
}

```

 Use the following options to work with path parameters:

- Add the parameter to the **viewUrl** by placing them anywhere in the **viewUrl** value. For example, if the main application URL is `https://luigiexample.com/home/projects/pr23`, then the **viewUrl** of the micro frontend in the content area is `https://my.microfrontend.com/projects/details.html#id=pr23`. 
- Use the [Luigi Client API](luigi-client-api.md) to access the node parameter values from the micro frontend. Use the `LuigiClient.getPathParams()` function. 
For example, to get the value of the sample project parameter, use `LuigiClient.getPathParams().projectId`. 
- Add a parameter to the context part of your configuration:
  ```
  {
    pathSegment: ':projectId',
    label: 'Project Details',
    viewUrl: 'https://my.microfrontend.com/projects/details.html#id=:projectId;',
    context: {
    	project: ':projectId'
    }
  } 
  ```
In all cases, the parameter is automatically replaced by the real value.


## Node parameters

You can use node parameters to build the **viewUrl** and pass them to the micro frontend specified in the navigation node selected in the navigation path. 
You can specify them in the main application URL, similarly to URL query parameters with a specific prefix. The prefix is `~` by default, but you can reconfigure it using the global **nodeParamPrefix** setting. 

All parameters without the prefix are not passed to the micro frontend and are consumed by the main application. 

A sample **viewUrl** `https://luigiexample.com/home/projects/pr23?~sorting=asc&~page=2` supports sorting and paging by introducing the **sort** and **page** node parameters.

Using node parameters in the previous example looks as follows:

````javascript
{
  navigation: {
    nodes: [
      {
        pathSegment: 'home',
        label: 'Home',
        viewUrl: 'https://my.microfrontend.com/',
        children: [
          {
            pathSegment: 'projects',
            label: 'Projects',
            viewGroup: 'projectsGroup',
            viewUrl: 'https://my.microfrontend.com/projects/list.html#pagenr={nodeParams.page};sort={nodeParams.sorting}',
            children: [
              {
                pathSegment: ':projectId',
                label: 'Project Details',
                viewUrl: 'https://my.microfrontend.com/projects/details.html#id=:projectId;'
              }            
			]
          }
        ]
      }
    ]
  }
} 

````

 Use the following options to work with node parameters:

- Build the **viewUrl** by placing them anywhere in the **viewUrl** value using the following syntax: `nodeParams.{node param name}`. For example, if the main application URL is `https://luigiexample.com/home/projects/?~sorting=asc&~page=2` then the **viewUrl** of a micro frontend is `https://my.microfrontend.com/projects/list.html#pagenr=2;sort=asc`.

- Use the [Luigi Client API](luigi-client-api.md) to access the node parameter values from within the micro frontend. Use the `LuigiClient.getNodeParams()` function. 
For example, to get the value of the sorting parameter, use `LuigiClient.getNodeParams().sorting`. 


## Dynamic viewUrl

Use both node parameters and path parameters to build a dynamic **viewUrl**.

For example, if the web application URL is `https://Luigi.corp/something/sample_1/products?~sort=asc`, the micro frontend will load using a different URL, such as `https://admin.my.test/project/sample_1/products?sort=asc`.

When loading, the **viewUrl** uses the following dynamic URL parameters:

- `:projectId = sample_1`
- `sort = asc`

```javascript 
Luigi.setConfig({
  routing: {
    nodeParamPrefix: '~'
  },
  navigation: {
    nodes: [
      {
        pathSegment: 'something',
        label: 'Something',
        viewUrl: 'https://admin.my.test/project',
        children: [{
          navigationContext: 'project',
          pathSegment: ':projectId',
          viewUrl: 'https://admin.my.test/project/:projectId',
          // Optionally, you can always call LuigiClient.getPathParams() to get the parameters
          // context: {
          //  currentProject: ':projectId'
          // },
          children: [
            {
              pathSegment: 'products',
              label: 'Products',
              viewUrl: 'https://admin.my.test/project/:projectId/products'
            }
          ]
        }
      }
    ]
  }
});
```

## View groups

The view groups feature allows you to override the default iframes management policy. Imagine your application hosts two micro frontend views: `http://mysite.com/a#e` and  `http://mysite.com/b#f`. Due to hash routing and a different path up to `#`, they are, by default, rendered in different iframes. However, as they both have the **same origin**, such as`mysite.com`, and belong to the **same micro frontend** you want to render them in the same iframe. To achieve that, use the view groups feature. Define the **viewGroup** parameter for top navigation nodes. The children nodes will automatically be considered as part of the same view group. 

Nodes belonging to the same view group are always rendered in their own view group iframe. Nodes not belonging to any view group follow the same-origin iframe rendering policy. 

The view groups feature also offers out-of-the-box caching. Each time you navigate to another view group, either a new iframe is created or it is reused if it exists. In both cases, the iframe you are navigating from becomes hidden and is available for you to use again. If you navigate back to the first iframe and it should be updated with new data, such when a new entry was added in the second iframe and you want to display it in a table in the first iframe, you must define a **preloadUrl** parameter for a given view in the view group to ensure that the view is refreshed when you navigate back to it. 

You can also preload view groups. You just need to define which URL you want to preload, and Luigi will preload the view after some user interactions when the browser is most likely to be idle. This option is active by default, but you can deactivate it with a [configuration flag](navigation-parameters-reference.md#node-parameters).

For more information on setting caching with view refreshing and preloading for view groups, read [this document](navigation-parameters-reference.md#node-parameters).


>**NOTE:** For a full list of available parameters, as well as a more comprehensive example which uses view groups and other features, see the [parameter reference](navigation-parameters-reference.md) document.
