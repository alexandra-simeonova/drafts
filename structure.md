# Basics
-----
### Getting started
- what is Luigi, what are micro frontends, what do you need to begin

### Architecture
- architecture diagrams

### FAQ
- perhaps we can gather some questions or add additional features of luigi there

# Luigi Core
------

### Installation
-installation for different frameworks

### Configuration

#### Navigation

- **basic setup**
    - top and side navigation
    - tab-style navigation
    - paths and links
    - micro fronentd/view basic settings
    - categories

<div tabs name="installation">

 <details>
 <summary>Top and side navigation</summary>


In the configuration file, go to `nodes:` inside the `navigation:` section. This is where you create navigation elements/nodes and add them to the top or side navigation.

The first level of nodes represent the top navigation, while their children represent the side navigation. The children of the side navigation will take you to a new sub-level side navigation screen.

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

      Details on how to add it

</details>

</div>

- **advanced setup**
    - creating a dynamic path
    - global navigation settings  (nodeAccessibility resolver, etc)
    - contexts
    - view settings (view groups, isolateView)
    - hide navigation
    - badgeCounter
    - modals

#### Routing
- routing properties

#### Authorization
- OpenID
- OAuth
- Custom
- Authorization events

#### General settings
- loading indicator
- disable backdrop
- header
- footer
- translation
- iframe sandbox rules and allowRules

#### Context switcher

#### Profile

#### Product switcher

#### App switcher

### Lifecycle hooks

### UI features

### API

# Luigi Client

-------

### Installation

### Communication with Core

### API

# Examples

-------

### Angular

### Vue

### Etc
