# Basics
-----
## Getting started
what is Luigi, what are micro frontends, what do you need to begin

## Architecture
architecture diagrams

# Luigi Core
------

## Installation

Basic setup

Angular 6

## Configuration
Once you have setup your Luigi application, you can configure it by opening the `basicConfiguration.js` file in your `luigi-config` folder, and altering its contents.

### Navigation

To configure navigation in Luigi:

1. Open the `basicConfiguration.js` file in your `luigi-config` folder.
2. Find `nodes:` inside the `navigation:` section. This is where you create navigation nodes and add them to the top or side navigation.

#### Basic setup

 <div tabs name="navigation">

 <details>
 <summary>Top and side navigation</summary>

The first level of nodes represent the top navigation, while their children represent the side navigation. The grandchildren will take you to a new side navigation screen.

The example below illustrates this concept. Copy and paste it in your configuration file or the Luigi Fiddle [https://fiddle.luigi-project.io] and try adding additional top or side navigation elements.

```javascript
Luigi.setConfig({
navigation: {
  nodes: [
    {
      pathSegment: 'TopNav1',
      label: 'Top Navigation Element One',
      viewUrl: 'https://example.com',
      children: [
        {
          pathSegment: 'SideNav1',
          label: 'Side Navigation Element One',
          viewUrl: 'https://example.com',
          children: [
            {
              pathSegment: 'SubSideNav1',
              label: 'Side Navigation Sub Element One',
              viewUrl: 'https://example.com',
            },
            {
              pathSegment: 'SubSideNav2',
              label: 'Side Navigation Sub Element Two',
              viewUrl: 'https://example.com',
            },
          ]
        },
      ]
    },
    {
      pathSegment: 'TopNav2',
      label: 'Top Navigation Element Two',
      viewUrl: 'https://example.com',
    }
 ]
}
});
```
</details>

<details>
<summary>Horizontal tab-style navigation</summary>

To add tab-style navigation to your Luigi page, you need to add the **tabNav** parameter to your navigation node. All the children of this node will be displayed in a horizontal tab. If you add a **category** to these nodes, the categorized nodes will be rendered as a drop-down in the horizontal tab navigation. Navigation can be added by editing the Luigi configuration file. To enable additional settings, find the `extendedConfiguration.js` file in your Luigi folder.

This example which you can paste in the [Luigi Fiddle](fiddle.luigi-project.io) shows how you can configure tab-style navigation:

```javascript
Luigi.setConfig({
navigation: {
  nodes: [
    {
      pathSegment: 'Tab1',
      tabNav: true,
      label: 'Tab Navigation Node One',
      viewUrl: 'https://example.com',
    },
    {
      pathSegment: 'Tab2',
      label: 'Tab Navigation Node Two',
      viewUrl: 'https://example.com',
    },
 ]
}
});
```

</details>

<details>
<summary>Paths and links </summary>

Once you have created your navigation, you can add one of these properties to your navigation nodes to specify the links they should point to:

### pathSegement
Specifies the partial URL of the currently selected node. For example, if the **pathSegment** value is `'home'`, the URL when this node is selected will be `[YOUR.WEBSITE]/home`. Additionally, you can include dynamic values in the pathSegment. That means they will change depending on the value you provide, for example in `[YOUR.WEBSITE]/:userID` will become `[YOUR.WEBSITE]/JohnSmith`. Learn more about dynamic paths [here](#dynamic-path)

>**NOTE:** **pathSegement** must not contain slashes. If you want your node to be a sub-element of another node, create it as a child node in your navigation configuration file. The **pathSegment** will then be automatically appended to the parent node with a slash.

### link
Specifies an internal link to a different, already existing page on your application. It must be written as an absolute path starting from the **root node**. For example, if your root node is called `home`: `home/projects/project2` will be correct, but `projects/project2` will return an error.

### externalLink
Specifies a link to another website outside of your application. **externalLink** has these additional attributes:
- **url** - the complete URL of the website, including `https://`.
- **sameWindow** - specifies whether the link will be opened in the same window if set to `true`, or a new window if set to `false`.

>**NOTE:** These parameters are mutually exclusive, so you can only include one of them at the same time.

This is an example of how you can configure URL paths in your navigation nodes:

```javascript
Luigi.setConfig({
navigation: {
  nodes: [
    {
      pathSegment: 'TopNav1',
      label: 'Top Navigation Element One',
      viewUrl: 'https://example.com',
      children: [
        {
          link: '/TopNav1/internalLink',
          label: 'This takes you to [YOUR.WEBSITE]/TopNav1/internalLink',
        },
        {
          externalLink: {
            url: 'http://www.luigi-project.io',
            sameWindow: false
          },
          label: 'This takes you to an external page',
        }
      ]
    }
  ]
}
});
```

</details>

<details>
<summary>Micro frontend basic view settings</summary>

 Micro frontends, also referred to as views, are an essential part of the Luigi application. To configure a micro frontend which should be displayed on a given navigation node, simply add the **viewUrl** property to the node and specify the link to your micro frontend. To create a view, you need to use the Luigi Client. Find the documentation and instructions [here](luigi-client.md).

 >**NOTE:** The viewUrl can be either an internal link, external link, or pathSegment. The first two options have to be surrounded by single quotes, while pathSegment does not.

 This example shows three navigation nodes with different viewUrl values.

 ```javascript
Luigi.setConfig({
navigation: {
  nodes: [
    {
      pathSegment: 'Node1',
      label: 'Navigation Node One',
      viewUrl: /home,
    },
    {
      pathSegment: 'Node1',
      label: 'Navigation Node Two',
      viewUrl: '/index.html',
    },
    {
      pathSegment: 'Node2',
      label: 'Navigation Node Three',
      viewUrl: 'https://luigi-project.io',
    },
 ]
}
});
 ```

The micro frontend will be displayed in the main content area of your application.

To explore additional advanced micro frontend options, take a look at the [advanced navigation](#advanced) section.

</details>

<details>
<summary>Categories</summary>

To group your navigation nodes into a category, add the **category** property to the navigation node. The categories can be displayed in different ways.

The **category** property has these attributes:
1. **label** - the name of the category which will be displayed on your page
2. **icon** - an icon that will be displayed next to the label
3. **collapsible** - if you set this to `true`, the category renders as a drop-down. If `false`, the category name will be displayed as a greyed out box.

Example:

```javascript
{
  category: { label: 'Links', icon: 'myIcon', collapsible: true },
  externalLink: {
    url: 'http://www.luigi-project.io',
    sameWindow: false
  },
  label: 'Click here to visit the Luigi homepage',
},
...
```

</details>

</div>

#### Advanced setup

    - creating a dynamic path

<div tabs name="navigation">

 <details>
 <summary>Creating a dynamic path</summary>


</details>

    - navigation settings  (nodeAccessibility resolver, etc)

    nodeAccessibilityResolver receives all values defined in the node configuration. It allows you to define a permission checker function that gets executed on every node. If it returns false, Luigi removes the node and its children from the navigation structure. See angular navigation.js for an example.



<div tabs name="navigation">

 <details>
 <summary>Advanced view settings</summary>

defaults.isolateView renders all views in new frames. This setting overrides the same-domain frame reuse. The defaults.isolateView is disabled by default, and you can overwrite it using the isolateView value on a single node level.

preloadViewGroups(bool) allows deactivating the default preloading of view groups iframes.

viewGroupsSettings is an object containing key-object pairs, where the key is the view group name as specified in the node parameters, and the object contains key-value pairs. In each key-value pair, the key is the feature name and the value is the actual setting. The following options are supported:

preloadUrl(string): needs to be an absolute URL for a node from the view group. It is recommended that you use a dedicated small, visually empty view, which imports Luigi Client and is fine with getting an empty context, for example, without an access token. The preloadUrl parameter is also required for view group caching in case you need a view group iframe to refresh whenever you navigate back to it.

Find more information on adding options to iframes [here]().


</details>

    - contexts
    - advanced view settings (view groups, isolateView)
    - hide navigation
    - badgeCounter
    - modals
    - loading indicator

### Routing

Routing can be configured by altering the contents of the `routing:` section of your Luigi configuration file.

- routing properties


### Authorization

Authorization can be configured by altering the contents of the `auth:` section of your Luigi configuration file.

- OpenID
- OAuth
- Custom
- Authorization events

### General settings

This section contains additional settings related to the look
- loading indicator
- disable backdrop
- header
- footer
- translation
- iframe sandbox rules and allowRules

### Context switcher

### Profile

### Product switcher

### App switcher

## Lifecycle hooks

## UI features

## API

# Luigi Client

-------

## Installation

## API

# Advanced

-------
## Custom messages

# Examples

-------

## Angular

## Vue