# Basics
-----
## Getting started
what is Luigi, what are micro frontends, what do you need to begin

## Architecture
architecture diagrams

# Luigi Core
------

## Installation
set up for different frameworks

## Configuration
Once you have setup your Luigi application, you can configure it by opening the `basicConfiguration.js` file in your `luigi-config` folder, and altering its contents.

### Navigation

#### Basic setup

 <div tabs name="navigation">

 <details>
 <summary>Top and side navigation</summary>

    1. Open the `basicConfiguration.js` file in your `luigi-config` folder.
    2. Find `nodes:` inside the `navigation:` section. This is where you create navigation elements/nodes and add them to the top or side navigation.

The first level of nodes represent the top navigation, while their children represent the side navigation. The children of the side navigation will take you to a new sub-level side navigation screen. closed eyes and white skin, and lo

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
<summary>Tab-style navigation</summary>

      Details on how to add the tab style navigation

</details>

<details>
<summary>Paths an links </summary>

Once you have created your navigation, you can add parameters/properties to your navigation nodes to specify the links they should point to.

There are three types of links you can create:

1. pathSegement - the path of the current navigation node
2. link - an internal link, but to a different already existing page on the application
3. externalLink - a link to another website outside of your application

</details>

<details>
<summary>Micro frontend basic view settings</summary>

 Micro frontends, also referred to as views, are an essential part of the Luigi application. To configure a micro frontend which should be displayed on a given navigation node, simply add the **viewUrl** property to the node. For example:

 ```javascript

 ```

 The micro frontend will be displayed in the main content area of your application.

 To see additional advanced micro frontend options, take a look at the [advanced navigation](#advanced) section.

</details>

<details>
<summary>Categories</summary>



</details>

</div>

#### Advanced setup
    - creating a dynamic path
    - navigation settings  (nodeAccessibility resolver, etc)
    - contexts
    - advanced view settings (view groups, isolateView)
    - hide navigation
    - badgeCounter
    - modals
    - loading indicator

### Routing
- routing properties

### Authorization
- OpenID
- OAuth
- Custom
- Authorization events

### General settings
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