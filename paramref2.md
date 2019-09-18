# Navigation parameters reference

> NOTE: To see the navigation parameters in use, check out the [navigation configuration example](https://). 

You can use parameters and functions listed below to configure your Luigi navigation structure:

* [Routing](#navigation-parameters-referece#routing)
* [Navigation parameters](#navigation-parameters)
* [Node parameters](#node-parameters)
* [Profile](#profile) 
* [Context switcher](#context-switcher)
* [Product switcher](#product-switcher)
* [App switcher](#app-switcher)


## Routing
You can configure the way Luigi tackles routing in your application in the `routing:` section of the configuration file. For example, you can choose the routing strategy to apply in your application as either hash or path location routing.

### useHashRouting
* **type**: boolean 
* **required**: yes 
* **description**: defines either hash-based (`url.com/#/yourpath`) or path-based (`url.com/yourpath`) routing.  

### nodeParamPrefix
* **type**: ?
* **required**: ?
* **description**: sets the prefix character when using the `LuigiClient.linkManager().withParam()` function, which provides a way to simply attach query parameters to the view URL for activities such as sorting and filtering. The URL contains the parameters to allow deep linking. If you want to use a different character prefix, define yours here. The default character is `~`.

### skipRoutingForUrlPatterns
* **type**: string
* **required**: ?
* **description**: defines regex patterns to be skipped by the router when listening for path changes. This parameter is used for excluding **redirect_uri** parameters. Default patterns are `[/access_token=/, '/id_token=/]`.

### pageNotFoundHandler
* **type**: function  
* **required**: ?
* **description**:defines custom behavior when the 404 (page not found) error occurs.  Luigi handles it by default. Leave its body empty if you have an external 404 handling. You can return an Object with `redirectTo` property if you want Luigi to redirect to a specific navigation path after execution.|
* **parameters**:
  * **wrongPath** (string): the path that user tried navigating to
  * **wasAnyPathFitted** (bool): it is true if Luigi managed to fit a valid path which means **wrongPath** was only partially wrong. Otherwise it is false.
  
--------
## Navigation parameters
The node navigation parameters enable you to configure global navigation settings directly under the `navigation:` tag in the configuration file.

### nodeAccessibilityResolver
* **type**: ? 
* **required**: ?
* **description**: receives all values defined in the node configuration. It allows you to define a permission checker function that gets executed on every node. If it returns `false`, Luigi removes the node and its children from the navigation structure. See [angular navigation.js](../core/examples/luigi-sample-angular/src/luigi-config/extended/navigation.js) for an example.

### defaults.isolateView
* **type**: ? 
* **required**: ?
* **description**: renders all views in new frames. This setting overrides the same-domain frame reuse. The **defaults.isolateView** is disabled by default, and you can overwrite it using the **isolateView** value on a single node level.

### preloadViewGroups
* **type**: boolean
* **required**: ?
* **description**: allows deactivating the default preloading of [view groups](navigation-configuration.md#view-groups) iframes.

### viewGroupsSettings
* **type**: object
* **required**: ?
* **description**: contains key-object pairs, where the key is the view group name as specified in the node parameters, and the object contains key-value pairs. In each key-value pair, the key is the feature name and the value is the actual setting. The following options are supported:
* **parameters**: 
  * **preloadUrl**(string): needs to be an absolute URL for a node from the view group. It is recommended that you use a dedicated small, visually empty view, which imports Luigi Client and is fine with getting an empty context, for example, without an access token. The **preloadUrl** parameter is also required for view group caching in case you need a view group iframe to refresh whenever you navigate back to it.

-------
## Node parameters
Node parameters are all the parameters that can be added to an individual navigation node in the `nodes:` section of the Luigi configuration file.

### pathSegment
* **type**: object
* **required**: ?
* **description**: 
