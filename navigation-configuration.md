# Navigation configuration

Read these guides to get started with configuring your navigation:

* [Navigation elements](#navigation-elements) 
* [First steps](#first-steps)
* [Basic navigation parameters](#basic-navigation-parameters)
* [Path parameters](#path-parameters)
* [Node parameters](#node-parameters)
* [Dynamic viewUrl](#dynamic-viewurl)

If you are already familiar with the basics, take a look at these guides:
* [Full reference list of navigation parameters](navigation-parameters-reference.md)
* Connect micro frontends with navigation (more info about API, view groups)

## Navigation elements

There are three main elements to Luigi: 

1. Top navigation which displays the main navigation path.
2. Side navigation which displays the defined applications.
3. Main content window which renders the micro frontend.
 

![Navigation layout](assets/navigation-structure.png)


## First steps

Find the `basicConfiguration.js` file in your luigi-config folder. You can configure the navigation by editing this file. 

You will notice that the file consists of a tree-like structure of **navigation nodes**. The outer nodes represent the top navigation, while their children represent the side navigation. 

````javascript 
navigation: {
    nodes: [
      {
        pathSegment: 'TopNav1',
        label: 'Top Navigation Element One',
        viewUrl: 'https://microfronted.com',
        children: [
          {
            pathSegment: 'SideNav1',
            label: 'Side Navigation Element One',
            viewUrl: 'https://microfrontend.com/projects/list.html',
            children: [
              {
                category: 'Links'
                link: '/internalLink',
                label: 'This takes you to yourwebsite.com/TopNav1/internalLink',
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
        viewUrl: 'https://2ndmicrofronted.com',
        children: [
          ...
````

## Basic navigation parameters

>**NOTE:** For a full list of available parameters, see the [parameter reference](navigation-parameters-reference.md) document.

In the "First steps" example, you saw some basic navigation parameters:

### pathSegment
This is the path in the browser URL. The main application path is built from values in the navigation path, joined with the **/** character. For example, if the value of this parameter is `home`, the path will be `yourwebsite.com/home`. You can override this setting by using one of the following instead of **pathSegment**: 
* **link** - define a specific internal path, for example `/projects`, and you will be taken to `yourwebsite.com/home/projects`. Note that a valid path must always start from the **root node**, hence this will result in an error unless `projects` is the root node. 
* **externalLink** - takes you to an external website. You need to define the **url** of the website and whether it should be opened in a new window (`sameWindow: false`) or the same window (`sameWindow: true`).
### label
The node's text label that will be visible on your page.
### viewUrl
The URL of the micro frontend that will be displayed in the main content window of your page. 
### category 
If you want to group some navigation nodes into a separate parent node, you can use the **category** property. The grouped navigation nodes are rendered in a dropdown. The **category** property needs a **label** and, optionally, an **icon**.  

## Path parameters
You can use path parameter values to make a path dynamically changeable according to your needs. 

In this example, a `userId`path parameter is defined: 

````javascript
{
  navigation: {
    nodes: [
      {
        pathSegment: 'home',
        label: 'Home',
        viewUrl: 'https://microfrontend.com/',
        children: [
          {
            pathSegment: 'users',
            label: 'User List',
            viewUrl: 'https://microfrontend.com/users/list.html',
            children: [
              {
                pathSegment: ':userId',
                label: 'User Profile',
                viewUrl: 'https://microfrontend.com/users/details.html#id=:userId;'
                // E.g. if userId is 'JohnSmith'
                // the main application URL will be https://yourwebsite.com/users/:JohnSmith
                // the micro frontend URL will be https://microfrontend.com/users/details.html#id=:JohnSmith;
              }            
			      ]
          }
        ]
      }
    ]
  }
}
````

### pathSegment parameters
Instead of a static value for your **pathSegment**, you can add a colon to this value to make it act as a parameter, for example `:userId`. This tells Luigi to accept any value for this **pathSegment**. 

### viewUrl parameters

You have three options to add a parameter to **viewUrl**: 
- Place the parameter anywhere in the **viewUrl** value. For example, if the main application URL is `https://yourwebsite.com/home/users/JohnSmith`, then the **viewUrl** of the micro frontend in the content area can be `https://microfrontend.com/users/details.html#id=JohnSmith`. 
- Use the [Luigi Client API](luigi-client-api.md) to access the node parameter values from the micro frontend. Use the `LuigiClient.getPathParams()` function. 
For example, to get the value of the `userId` parameter, use `LuigiClient.getPathParams().userId`. 
- Add a parameter to the context part of your configuration:

  ```
  {
    pathSegment: ':userId',
    label: 'User Profile',
    viewUrl: 'https://microfrontend.com/users/details.html#id=:userId;',
    context: {
    	user: ':userId'
    }
  } 
  ```
In all three cases, the parameter is automatically replaced by the real value.

## Node parameters

You can use node parameters to build the **viewUrl** and pass them to the micro frontend specified in the navigation node selected in the navigation path. 

You can specify them in the main application URL, similarly to URL query parameters with a specific prefix. The prefix is `~` by default, but you can reconfigure it using the global **nodeParamPrefix** setting. 

All parameters without the prefix are not passed to the micro frontend and are consumed by the main application. 

A sample **viewUrl** `https://yourwebsite.com/home/users/allUsers?~sorting=asc&~page=2` supports sorting and paging by introducing the **sort** and **page** node parameters.

Using node parameters in the previous example looks as follows:

````javascript
{
  navigation: {
    nodes: [
      {
        pathSegment: 'home',
        label: 'Home',
        viewUrl: 'https://microfrontend.com/',
        children: [
          {
            pathSegment: 'users',
            label: 'User List',
            viewUrl: 'https://microfrontend.com/users/list.html#pagenr={nodeParams.page};sort={nodeParams.sorting}',
            children: [
              {
                pathSegment: ':userId',
                label: 'User Profile',
                viewUrl: 'https://microfrontend.com/projects/details.html#id=:userId;'
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

Build the **viewUrl** by placing parameters anywhere in the **viewUrl** value using the following syntax: `nodeParams.{node param name}`. For example, if the main application URL is `https://yourwebsite.com/home/projects/?~sorting=asc&~page=2` then the **viewUrl** of a micro frontend is `https://microfrontend.com/projects/list.html#pagenr=2;sort=asc`.



## Dynamic viewUrl

You can use both node parameters and path parameters to build a dynamic **viewUrl**.

For example, if the web application URL is `https://luigi.corp/something/sample_1/products?~sort=asc`, the micro frontend will load using a different URL, such as `https://admin.my.test/project/sample_1/products?sort=asc`.

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
