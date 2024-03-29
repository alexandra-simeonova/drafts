# Navigation parameters reference

> NOTE: To see the navigation parameters in use, check out the [navigation configuration example](https://github.com/SAP/luigi/blob/master/docs/navigation-configuration-example.md). 

You can use parameters and functions in this reference to configure your Luigi navigation structure.

* [Routing parameters](#routing-parameters)
* [Navigation parameters](#navigation-parameters)
* [Node parameters](#node-parameters)
* [Profile](#profile) 
* [Context switcher](#context-switcher)
* [Product switcher](#product-switcher)
* [App switcher](#app-switcher)


## Routing parameters
You can configure the way Luigi tackles routing in your application in the `routing:` section of the configuration file. For example, you can choose the routing strategy to apply in your application as either hash or path location routing.

### useHashRouting
- **type**: boolean 
- **required**: yes 
- **description**: defines either hash-based (`url.com/#/yourpath`) or path-based (`url.com/yourpath`) routing.  

### nodeParamPrefix
- **type**: ? string 
- **required**: ?
- **description**: sets the prefix character when using the `LuigiClient.linkManager().withParam()` function, which provides a way to simply attach query parameters to the view URL for activities such as sorting and filtering. The URL contains the parameters to allow deep linking. If you want to use a different character prefix, define yours here. The default character is `~`.

### skipRoutingForUrlPatterns
- **type**: string
- **required**: ?
- **description**: defines regex patterns to be skipped by the router when listening for path changes. This parameter is used for excluding **redirect_uri** parameters. Default patterns are `[/access_token=/, '/id_token=/]`.

### pageNotFoundHandler
- **type**: function  
- **required**: ?
- **description**: defines custom behavior when the 404 (page not found) error occurs.  Luigi handles it by default. Leave its body empty if you have an external 404 handling. You can return an Object with `redirectTo` property if you want Luigi to redirect to a specific navigation path after execution.|
- **properties**:
  - **wrongPath** (string): the path that user tried navigating to
  - **wasAnyPathFitted** (bool): it is true if Luigi managed to fit a valid path which means **wrongPath** was only partially wrong. Otherwise it is false.
  

## Navigation parameters
The node navigation parameters enable you to configure global navigation settings under the `navigation:` section in the configuration file.

### nodeAccessibilityResolver
- **type**: ? 
- **required**: ?
- **description**: receives all values defined in the node configuration. It allows you to define a permission checker function that gets executed on every node. If it returns `false`, Luigi removes the node and its children from the navigation structure. See [angular navigation.js](../core/examples/luigi-sample-angular/src/luigi-config/extended/navigation.js) for an example.

### defaults.isolateView
- **type**: ? 
- **required**: ?
- **description**: renders all views in new frames. This setting overrides the same-domain frame reuse. The **defaults.isolateView** is disabled by default, and you can overwrite it using the **isolateView** value on a single node level.

### preloadViewGroups
- **type**: boolean
- **required**: ?
- **description**: allows deactivating the default preloading of [view groups](navigation-configuration.md#view-groups) iframes.

### viewGroupsSettings
- **type**: object
- **required**: ?
- **description**: contains key-object pairs, where the key is the view group name as specified in the node parameters, and the object contains key-value pairs. In each key-value pair, the key is the feature name and the value is the actual setting. The following options are supported:
- **properties**: 
  - **preloadUrl**(string): needs to be an absolute URL for a node from the view group. It is recommended that you use a dedicated small, visually empty view, which imports Luigi Client and is fine with getting an empty context, for example, without an access token. The **preloadUrl** parameter is also required for view group caching in case you need a view group iframe to refresh whenever you navigate back to it.


## Node parameters
Node parameters are all the parameters that can be added to an individual navigation node in the `nodes:` section of the Luigi configuration file.

### pathSegment
- **type**: string
- **required**: no
- **description**: specifies the partial URL of the current segment. **pathSegment** must not contain slashes.
- **examples**:
  - A static pathSegment of value `settings` results in `yourwebsite.com/settings`.
  - A dynamic pathSegment is prefixed with a colon and can load any value. Find out more about dynamic paths in Luigi [here](). 

### link 
- **type**: string
- **required**: no
- **description**: refers to an absolute path in the navigation structure or a relative path to a grandchild of the current path. If this parameter is defined, **pathSegment** is ignored.

### externalLink
- **type**: object
- **required**: no
- **description**: indicates that the node links to an external URL. If this parameter is defined, **pathSegment** and **link** parameters are ignored.
- **properties**:
  - **sameWindow** defines if the external URL is opened in a new or current tab. The default value for this parameter is `false`.
  - **url** is the external URL that the node leads to.

### label
- **type**: string
- **required**: yes
- **description**: contains the display name of the navigation node.

### testId
- **type**: string
- **required**: no
- **description**: allows you define your own custom `testId`. If there is nothing specified, it is a combination of the node's pathSegment followed by a dash (if pathSegment exists) and the label written as one word and lower case (e.g. `pathsegment_label` or `label`).

### hideFromNav
- **type**: ?
- **required**: no
- **description**: shows or hides a navigation node. You can still navigate to the node but it does not show up in the top or left pane.

### viewUrl
- **type**: string
- **required**: yes
- **description**: contains the URL or path to a view which renders when you click the navigation node. Use either a full URL or a relative path. This value may consist of variables if you have specified a **navigationContext** with a dynamic **pathSegment**. If **viewUrl** is undefined, Luigi activates the child node specified in **defaultChildNode**. When both **viewUrl** and **defaultChildNode** are undefined, Luigi opens the first child of the current node.

### navigationContext
- **type**: ?
- **required**: ?
- **description**: contains a named node that is mainly for use in combination with a dynamic **pathSegment** to start navigation from a dynamic node using ` LuigiClient.linkManager().fromContext('contextname')`.

### context
- **type**: ?
- **required**: ?
- **description**: sends the specified object as context to the view. Use this parameter in combination with the dynamic **pathSegment** to receive the context through the context listeners of **Luigi Client**. This is an alternative to using the dynamic value in the **viewUrl**.

### defaultChildNode
- **type**: ?
- **required**: ?
- **description**: sets the child node that Luigi activates automatically if the current node has no **viewUrl** defined. Provide **pathSegment** of the child node you want to activate as a string.

### isolateView
- **type**: ?
- **required**: ?
- **description**: renders the view in a new frame when you enter and leave the node. This setting overrides the same-domain frame re-usage. The **isolateView** is disabled by default.

### viewGroup
- **type**: ?
- **required**: ?
- **description**: allows you to associate nodes to be rendered in the same iframe, as long as they belong to the same origin. The value of this parameter is considered as the view group id. For further explanations, see [this section](navigation-configuration.md#view-groups).

### keepSelectedForChildren
- **type**: ?
- **required**: ?
- **description**: focuses the navigation on its current hierarchy, omitting the display of children.

### loadingIndicator.enabled
- **type**: ? boolean
- **required**: ?
- **description**: shows a loading indicator when switching between micro frontends. If you have a fast micro frontend, you can disable this feature to prevent flickering of the loading indicator. This parameter is enabled by default.
- **example**: 
```javascript
loadingIndicator: {
  enabled: true
}
```
### loadingIndicator.hideAutomatically
- **type**: ? boolean
- **required**: ?
- **description**: disables the automatic hiding of the loading indicator once the micro frontend is loaded. It is only considered if the loading indicator is enabled. It does not apply if the loading indicator is activated manually with the `LuigiClient.uxManager().showLoadingIndicator()` function. If the loading indicator is enabled and automatic hiding is disabled, use `LuigiClient.uxManager().hideLoadingIndicator()` to hide it manually in your micro frontend during the startup. This parameter is enabled by default.
- **example**: 
```javascript
loadingIndicator: {
  hideAutomatically: true
}
```
### icon 
- **type**: ? string
- **required**: ? no
- **description**: the name of an icon, without the `sap-icon--` prefix. Its source may be [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image. The icon is displayed next to the node label in the side navigation or instead of the label in the top navigation.

### hideSideNav 
- **type**: ? string
- **required**: ?
- **description**: if set to `true`, the left navigation disappears when you click the affected node. It is set to `false` by default.

### badgeCounter
- **type**: ? string
- **required**: ?
- **description**: adds a badge with a number and a label to a node. Nodes that are part of a category show a cumulated number of all badges in this category. **badgeCounter** is only available for top navigation items.
- **properties**:
  - **label** is the label of the badge.
  - **count** is a function or asynchronous function that returns a number.
  Gets updated when you click the navigation. Use `Luigi.navigation().updateTopNavigation()` in Luigi Core or trigger it in Luigi Client by using the custom message feature.

### category
- **type**: string
- **required**: no
- **description**: defines a group of views separated with a headline and an icon. You should define at least one node in a group should as an Object with **label** and **icon** properties. For all other nodes, you can set **category** as a string with the `label` value. 
- **properties**:
  - **label** is a string that represents the title of the category
  - **icon** is the name of an icon, without the `sap-icon--` prefix. Its source may be [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image. The icon is displayed next to the node label in the side navigation or instead of the label in the top navigation. In case you accidentally define different icons in a category group, only the first one is used.
  - **collapsible** if set to `true`, category items are hidden at first. To expand them, click the main category node.
  - **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).

### opeNodeInModal
- **type**: ?
- **required**: ?
- **description**: adds a badge with a number and a label to a node. Nodes that are part of a category show a cumulated number of all badges in this category. **badgeCounter** is only available for top navigation items.
- **properties**:
  - **title** modal title. By default, it is the node label. If there is no label, it is left empty
  - **size** **(`"l"` \| `"m"` \| `"s"`)** size of the modal (optional, default `"l"`)

### onNodeActivation
- **type**: function
- **required**: no
- **description**: executed when a request to navigate to the node occurs. As an input parameter, the function receives the node object as described in the configuration. This function can return results synchronously or asynchronously. If the function returns boolean `false`, the navigation is not triggered, otherwise, navigation renders as usual.

### clientPermissions.changeCurrentLocale
- **type**: ? boolean
- **required**: ?
- **description**: current locale can be changed from client using the corresponding API if this is set to `true`
- **example**: ?
```javascript
{
  clientPermissions: {
  changeCurrentLocale: true
}
```

## Context switcher

The context switcher is a drop-down list available in the top navigation bar. It allows you to switch between a curated list of navigation elements such as Environments. To do so, add the **contextSwitcher** property to the **navigation** object using the following optional properties:

### defaultLabel
- **type**: string
- **required**: ?
- **description**: specifies the default label that is shown if no context is selected.

### parentNodePath
- **type**: ?
- **required**: ?
- **description**: specifies the base path, that is prepended to **options[].pathValue**. It must be an absolute path.

### lazyloadOptions
- **type**: ? boolean
- **required**: ?
- **description**: defines when to fetch **options**. When set to `true`, loads **options** when you click the context switcher. It doesn't involve any caching. When set to `false`, loads **options** once the page loads. The default value is `true`. 

### options
- **type**: ? 
- **required**: ?
- **description**: defines the list of context element. 
- **properties**:
  - **label** defines the context element label. If not defined, the **pathValue** is passed to **fallbackLabelResolver** to set its value. The default value is **pathValue**, if **fallbackLabelResolver** is not defined.
  - **pathValue** defines the context element path that is appended to **parentNodePath** and reflects a **pathSegment**.

### actions 
- **type**: ? 
- **required**: ?
- **description**: defines a list of additional elements that are shown on above or below the context switcher **options**.
- **properties**:
  - **label** defines the action element label.
  - **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).
  - **position** defines the action element position. Can be `top` or `bottom`. The default value is `top`. This parameter is optional.
  - **link** defines an absolute Link to a **node**. This parameter is optional.
  - **clickHandler** specifies a function and is executed on click and should return a boolean. If it returns `true`, **link** is opened afterwards.

### fallbackLabelResolver
- **type**: ? 
- **required**: ?
- **description**: specifies a function used to fetch the **label** for **options** with no **label** defined. Additionally, it fetches the drop-down label for non-existing **options**.

### preserveSubPathOnSwitch
- **type**: ? 
- **required**: ?
- **description**: if set to `true`, the sub-path will be preserved on context switch.


## Profile

The profile section is a configurable drop-down list available in the top navigation bar. Within the configuration, you can override the logout item content (if authorization is configured) and/or add links to Luigi navigation nodes. To do so, add the **profile** property to the **navigation** object using the following optional properties:

### logout
- **type**: ? 
- **required**: ?
- **description**: defines a list of additional elements that are shown on above or below the context switcher **options**.
- **properties**: 
  - **label** overrides the text for the logout item. The default value is "Sign Out".
  - **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).
  - **icon** overrides the icon for the logout item. The default value is [SAP UI5 log icon](https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons/?tag=logout).
  - **customLogoutFn** defines a function to implement your own logout functionality. It is recommended to only use this function if no IDP is configured. If an IDP with a corresponding [logout function](https://github.com/SAP/luigi/blob/master/docs/authorization-configuration.md) is defined , the customLogoutFn on profile will be ignored.

### items
- **type**: ? 
- **required**: ?
- **description**: an array of objects, each one being a link to a Luigi navigation node or an external URL. 
- **properties**: 
  - **label** defines the text for the link.
  - **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).
  - **icon** is the name of an icon from the [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image displayed next to the label or instead of it.
  - **link** defines an absolute link to a **node**.
  - **externalLink** is an object which indicates that the node links to an external URL. If this parameter is defined, the **link** parameter is ignored. It has the following properties:
    - **sameWindow** defines if the external URL is opened in the current tab or in a new one. The default value for this parameter is `false`.
    - **url** is the external URL that the link leads to.
>**NOTE:** Neither authorization nor profile property are configured if the profile section in the top navigation bar is not visible.

## Product switcher

The product switcher is a pop-up window available in the top navigation bar. It allows you to switch between the navigation elements displayed in the pop-up. To do so, add the **productSwitcher** property to the **navigation** object using the following optional properties:

### label 
- **type**: string 
- **required**: ?
- **description**: defines the label of the product switcher. It is displayed as a title attribute on hover in the top navigation and as a headline in the mobile pop-up.

### testId
- **type**: string
- **required**: ?
- **description**: enables you to define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`). 

### icon
- **type**: string ?
- **required**: ? 
- **description**: the name of an icon, without the `sap-icon--` prefix. Its source may be [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image. The icon is displayed without label in the top navigation.

### items 
- **type**: array
- **required**: ? 
- **description**: is an array of objects, each one being a link to a Luigi navigation node or an external URL. An item can have several parameters.
- **properties**:
  - **label** defines the text for the link. 
  - **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).
  - **icon** is the name of an icon from the [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image displayed next to the label or instead of it.
  - **link** defines an absolute link to a **node**.
  - **externalLink** is an object which indicates that the node links to an external URL. If this parameter is defined, the **link** parameter is ignored. It has the following properties:
    - **sameWindow** defines if the external URL is opened in the current tab or in a new one. The default value for this parameter is `false`.
    - **url** is the external URL that the link leads to.

## App switcher

The app switcher is a drop-down list available in the top navigation bar. It allows you to switch between the navigation elements displayed in the drop-down. To do so, add the **appSwitcher** property to the **navigation** object using the following optional properties:

### showMainAppEntry
- **type**: array
- **required**: ? 
- **description**: includes the link to the root of the Luigi application in the drop-down using the **title** specified in the **settings/header** section of the configuration as a label.

### items 
- **type**: ?
- **required**: ? 
- **description**: defines the list of apps. App element properties are described below. 
- **properties**: 
  - **title** defines the app title. This is shown in the app switcher drop-down as well as the title in the header of the Luigi application if a user is in the context of the app. 
  - **subTitle** defines the app sub-title. This is shown as the sub-title in the header of the Luigi application if a user is in the context of the app. 
  - **link** is a link within the Luigi application that defines the root of the app. It is used to switch to the app if the drop-down entry is selected. It is also used to determine if a user is within the app's scope, so that the corresponding title and sub-title can be rendered in the header. 
