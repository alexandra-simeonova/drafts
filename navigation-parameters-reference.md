# Navigation parameters reference

> NOTE: To see the navigation parameters in use, check out the [navigation configuration example](https://). 

You can use parameters and functions listed below to configure your Luigi navigation structure:

* [Routing](#navigation-parameters-referece#routing)
* [Global navigation parameters](#global-navigation-parameters)
* [Node parameters](#node-parameters)
  * [Path parameters](#path-parameters)
  * [Loading indicator parameters](#loading-indicator-parameters)
  * [View parameters](#view-parameters)
* [Profile](#profile) 
* [Context switcher](#context-switcher)
* [Product switcher](#product-switcher)
* [App switcher](#app-switcher)


## Routing

You can configure the way Luigi tackles routing in your application in the **Routing** section of the configuration file. For example, you can choose the routing strategy to apply in your application as either hash or path location routing.

| Field  |     Mandatory     |   Description |
|----------|:-------------:|------|
| **useHashRouting** |  **YES**  |  defines either hash-based (`url.com/#/yourpath`) or path-based (`url.com/yourpath`) routing. |
| **nodeParamPrefix** |        |  sets the prefix character when using the `LuigiClient.linkManager().withParam()` function, which provides a way to simply attach query parameters to the view URL for activities such as sorting and filtering. The URL contains the parameters to allow deep linking. If you want to use a different character prefix, define yours here. The default character is `~`. | 
| **skipRoutingForUrlPatterns** |        | defines regex patterns to be skipped by the router when listening for path changes. This parameter is used for excluding **redirect_uri** parameters. Default patterns are `[/access_token=/, '/id_token=/]`.|
| **pageNotFoundHandler** |        | a function defining custom behavior when the 404 (page not found) error occurs.  Luigi handles it by default. Leave its body empty if you have an external 404 handling. This function takes the following parameters:  1. **wrongPath**(string): the path that user tried to navigate to 2. **wasAnyPathFitted**(bool): it is true if Luigi managed to fit a valid path which means **wrongPath** was only partially wrong. Otherwise it is false. |


## Global navigation parameters

The node navigation parameters enable you to configure navigation globally.

| Field  |     Mandatory     |   Description |
|----------|:-------------:|------|
| **nodeAccessibilityResolver** |    |receives all values defined in the node configuration. It allows you to define a permission checker function that gets executed on every node. If it returns `false`, Luigi removes the node and its children from the navigation structure. See [angular navigation.js](../core/examples/luigi-sample-angular/src/luigi-config/extended/navigation.js) for an example.|
| **defaults.isolateView** |    |renders all views in new frames. This setting overrides the same-domain frame reuse. The **defaults.isolateView** is disabled by default, and you can overwrite it using the **isolateView** value on a single node level.|
| **preloadViewGroups**(bool)|   | allows deactivating the default preloading of [view groups](navigation-configuration#view-groups) iframes.| 
| **viewGroupsSettings** |   |is an object containing key-object pairs, where the key is the view group name as specified in the node parameters, and the object contains key-value pairs. In each key-value pair, the key is the feature name and the value is the actual setting. | 
| **preloadUrl**(string) |Property of **viewGroupsSettings** | needs to be an absolute URL for a node from the view group. It is recommended that you use a dedicated small, visually empty view, which imports Luigi Client and is fine with getting an empty context, for example, without an access token. The **preloadUrl** parameter is also required for view group caching in case you need a view group iframe to refresh whenever you navigate back to it.|


## Node parameters

Node parameters are parameters that can be added to an individual [navigation node](https://github.com/SAP/luigi/blob/master/docs/navigation-configuration.md#navigation-structure).

| Field  |     Mandatory     |   Description |
|----------|:-------------:|------|
| **label** | YES | contains the display name of the navigation node.|
| **testId**|   | is a string where you can define your own custom `testId`. If there is nothing specified, it is a combination of the node's pathsegment followed by a dash (if pathsegment exists) and the label written as one word and lower case (e.g. `pathsegment_label` or `label`).|
| **hideFromNav** |  | shows or hides a navigation node. You can still navigate to the node but it does not show up in the top or left pane.|
| **navigationContext** |    | contains a named node that is mainly for use in combination with a dynamic **pathSegment** to start navigation from a dynamic node using ` LuigiClient.linkManager().fromContext('contextname')`. | 
| **context** |    |sends the specified object as context to the view. Use this parameter in combination with the dynamic **pathSegment** to receive the context through the context listeners of **Luigi Client**. This is an alternative to using the dynamic value in the **viewUrl**.|
| **defaultChildNode** |    | sets the child node that Luigi activates automatically if the current node has no **viewUrl** defined. Provide **pathSegment** of the child node you want to activate as a string.|
| **keepSelectedForChildren** |   | focuses the navigation on its current hierarchy, omitting the display of children.|
| **icon** |   | is the name of an icon, without the `sap-icon--` prefix. Its source may be [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image. The icon is displayed next to the node label in the side navigation or instead of the label in the top navigation. | 
| **hideSideNav** |   | if set to `true`, the left navigation disappears when you click the affected node. It is set to `false` by default.|
| **badgeCounter** |  | adds a badge with a number and a label to a node. Nodes that are part of a category show a cumulated number of all badges in this category. **badgeCounter** is only available for top navigation items.|
| **label** |Property of **badgeCounter**| is the label of the badge.|
| **count** |Property of **badgeCounter**|is a function or asynchronous function that returns a number. Gets updated when you click the navigation. Use `Luigi.navigation().updateTopNavigation()` in Luigi Core or trigger it in Luigi Client by using the custom message feature.| 
| **category** (parameters: **label, icon, collapsible, testId**)|   |defines a group of views separated with a headline and an icon. You should define at least one node in a group should as an Object with **label** and **icon** properties. For all other nodes, you can set **category** as a string with the `label` value.|
|**label**| | is a string that represents the title of the category |
|**icon** |  |is the name of an icon, without the `sap-icon--` prefix. Its source may be [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image. The icon is displayed next to the node label in the side navigation or instead of the label in the top navigation. In case you accidentally define different icons in a category group, only the first one is used.|
|**collapsible** | | if set to `true`, category items are hidden at first. To expand them, click the main category node.|
|**testId** | P |is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).|
|**openNodeInModal** |  | configures the settings of the view which opens in a modal. You can specify the modal's title and size. If you don't specify the title, the node label is used. If there is no node label, the title remains empty. The default size of the modal is `l`, which means 80%. You can also use `m` (60%) and `s` (40%) to set the modal size.<br/> Optionally you can set the **openNodeInModal** property to `true` to use default title and size. | 
|**title**| Property of **openNodeInModal** | modal title. By default, it is the node label. If there is no label, it is left empty|
|**size** | Property of **openNodeInModal**| optional size of the modal. Possible values: **(`"l"` \| `"m"` \| `"s"`)** (default `"l"`) | 
|**onNodeActivation**|   |an optional function executed when a request to navigate to the node occurs. As an input parameter, the function receives the node object as described in the configuration. This function can return results synchronously or asynchronously. If the function returns boolean `false`, the navigation is not triggered, otherwise, navigation renders as usual.|
|**clientPermissions.changeCurrentLocale**|  |current locale can be changed from client using the corresponding API if this is set to `true`.|


### Path parameters 

These parameters can be used to configure the URL path according to your needs. 

| Field  |     Mandatory     |   Description |
|----------|:-------------:|------|
| **pathSegment** |   |specifies the partial URL of the current segment. **pathSegment** must not contain slashes. - A static settings example reflects `luigidomain.test/settings`. - A dynamic settings example, prefixed with a colon, loads on any other value. |
| **link** |   | is a string which refers to an absolute path in the navigation structure or a relative path to a grandchild of the current path. If this parameter is defined, **pathSegment** is ignored. | 
| **externalLink** |   | is an object which indicates that the node links to an external URL. If this parameter is defined, **pathSegment** and **link** parameters are ignored. It has the following properties:
   - **sameWindow** defines if the external URL is opened in a new or current tab. The default value for this parameter is `false`.
   - **url** is the external URL that the node leads to. |

### Loading indicator parameters

These parameters help you configure a loading indicator or disable it. 

| Field  |     Mandatory     |   Description |
|----------|:-------------:|------|
|**loadingIndicator.enabled**|  | shows a loading indicator when switching between micro frontends. If you have a fast micro frontend, you can disable this feature to prevent flickering of the loading indicator. This parameter is enabled by default.|
|**loadingIndicator.hideAutomatically**|  | disables the automatic hiding of the loading indicator once the micro frontend is loaded. It is only considered if the loading indicator is enabled. It does not apply if the loading indicator is activated manually with the `LuigiClient.uxManager().showLoadingIndicator()` function. If the loading indicator is enabled and automatic hiding is disabled, use `LuigiClient.uxManager().hideLoadingIndicator()` to hide it manually in your micro frontend during the startup. This parameter is enabled by default.|

### View parameters

These parameters help you configure the view/micro frontend that appears in the main area of the application. 

| Field  |     Mandatory     |   Description |
|----------|:-------------:|------|
|**viewUrl**| contains the URL or path to a view which renders when you click the navigation node. Use either a full URL or a relative path. This value may consist of variables if you have specified a **navigationContext** with a dynamic **pathSegment**. If **viewUrl** is undefined, Luigi activates the child node specified in **defaultChildNode**. When both **viewUrl** and **defaultChildNode** are undefined, Luigi opens the first child of the current node.|
|**viewGroup**|  |is a parameter that defines a group of views in the same domain sharing a common security context. This improves performance through reusing the frame. Use viewGroup only for the views that use path routing internally.|
|**isolateView**|  | renders the view in a new frame when you enter and leave the node. This setting overrides the same-domain frame re-usage. The **isolateView** is disabled by default.|

## Profile

The profile section is a configurable drop-down list available in the top navigation bar. Within the configuration, you can override the logout item content and/or add links to Luigi navigation nodes. To do so, add the **profile** property to the **navigation** object using the following optional properties:

- **logout** overrides the content of the logout item.
  - **label** overrides the text for the logout item. The default value is "Sign Out".
  - **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).
  - **icon** overrides the icon for the logout item. The default value is [SAP UI5 log icon](https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons/?tag=logout).
- **items** is an array of objects, each one being a link to a Luigi navigation node or an external URL. An item can have the following parameters:
  - **label** defines the text for the link.
  - **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).
  - **icon** is the name of an icon from the [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image displayed next to the label or instead of it.
  - **link** defines an absolute link to a **node**.
  - **externalLink** is an object which indicates that the node links to an external URL. If this parameter is defined, the **link** parameter is ignored. It has the following properties:
    - **sameWindow** defines if the external URL is opened in the current tab or in a new one. The default value for this parameter is `false`.
    - **url** is the external URL that the link leads to.


## Context switcher

The context switcher is a drop-down list available in the top navigation bar. It allows you to switch between a curated list of navigation elements such as Environments. To do so, add the **contextSwitcher** property to the **navigation** object using the following optional properties:

- **defaultLabel** specifies the default label that is shown if no context is selected.
- **parentNodePath** specifies the base path, that is prepended to **options[].pathValue**. It must be an absolute path.
- **lazyloadOptions** defines when to fetch **options**. When set to `true`, loads **options** when you click the context switcher. It doesn't involve any caching. When set to `false`, loads **options** once the page loads. The default value is `true`.
- **options** defines the list of context element. Context element properties are:
  - **label** defines the context element label. If not defined, the **pathValue** is passed to **fallbackLabelResolver** to set its value. The default value is **pathValue**, if **fallbackLabelResolver** is not defined.
  - **pathValue** defines the context element path that is appended to **parentNodePath** and reflects a **pathSegment**.
- **actions** defines a list of additional elements that are shown on above or below the context switcher **options**. Each action contains the following parameters:
  - **label** defines the action element label.
  - **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).
  - **position** defines the action element position. Can be `top` or `bottom`. The default value is `top`. This parameter is optional.
  - **link** defines an absolute Link to a **node**. This parameter is optional.
  - **clickHandler** specifies a function and is executed on click and should return a boolean. If it returns `true`, **link** is opened afterwards.
- **fallbackLabelResolver** specifies a function used to fetch the **label** for **options** with no **label** defined. Additionally, it fetches the drop-down label for non-existing **options**.

## Product switcher

The product switcher is a pop-up window available in the top navigation bar. It allows you to switch between the navigation elements displayed in the pop-up. To do so, add the **productSwitcher** property to the **navigation** object using the following optional properties:

- **label** defines the label of the product switcher. It is displayed as a title attribute on hover in the top navigation and as a headline in the mobile pop-up.
- **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).
- **icon** is the name of an icon, without the `sap-icon--` prefix. Its source may be [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image. The icon is displayed without label in the top navigation.
- **items** is an array of objects, each one being a link to a Luigi navigation node or an external URL. An item can have the following parameters:
  - **label** defines the text for the link. 
  - **testId** is a string where you can define your own custom `testId`. If nothing is specified, it is the node's label written as one word and lower case (e.g. `label`).
  - **icon** is the name of an icon from the [OpenUI](https://openui5.hana.ondemand.com/1.40.10/iconExplorer.html) or a custom link (relative or absolute) to an image displayed next to the label or instead of it.
  - **link** defines an absolute link to a **node**.
  - **externalLink** is an object which indicates that the node links to an external URL. If this parameter is defined, the **link** parameter is ignored. It has the following properties:
    - **sameWindow** defines if the external URL is opened in the current tab or in a new one. The default value for this parameter is `false`.
    - **url** is the external URL that the link leads to.


