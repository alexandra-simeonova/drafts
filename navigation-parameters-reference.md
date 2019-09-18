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

You can configure the way Luigi tackles routing in your application in the `routing:` section of the configuration file. For example, you can choose the routing strategy to apply in your application as either hash or path location routing.

### useHashRouting
| type | boolean |   
|:-------|:-------|
| **required** | **?** | 
|**description**|defines either hash-based (`url.com/#/yourpath`) or path-based (`url.com/yourpath`) routing.              |  

### nodeParamPrefix
| type | string |   
|:-------|:-------|
| **required** | **?** | 
|**description**|sets the prefix character when using the `LuigiClient.linkManager().withParam()` function, which provides a way to simply attach query parameters to the view URL for activities such as sorting and filtering. The URL contains the parameters to allow deep linking. If you want to use a different character prefix, define yours here. The default character is `~`.|

### skipRoutingForUrlPatterns
| type | boolean |   
|:-------|:-------|
| **required** | **?** | 
|**description**|defines regex patterns to be skipped by the router when listening for path changes. This parameter is used for excluding **redirect_uri** parameters. Default patterns are `[/access_token=/, '/id_token=/]`.|

### pageNotFoundHandler
| type | function |   
|:-------|:-------|
| **required** | **?** | 
|**description**|defines custom behavior when the 404 (page not found) error occurs.  Luigi handles it by default. Leave its body empty if you have an external 404 handling. You can return an Object with `redirectTo` property if you want Luigi to redirect to a specific navigation path after execution.|
|**parameters**|  **wrongPath**(string), **wasAnyPathFitted**(bool): set to `true` if Luigi managed to fit a valid path which means **wrongPath** was only partially wrong. Otherwise it is `false`. |

------
## Routing

You can configure the way Luigi tackles routing in your application in the `routing:` section of the configuration file. For example, you can choose the routing strategy to apply in your application as either hash or path location routing.

### useHashRouting
* **type**: boolean 
* **required**: yes 
* **description**: defines either hash-based (`url.com/#/yourpath`) or path-based (`url.com/yourpath`) routing.             

### pageNotFoundHandler
* **type**: function    
* **required**: ?
* **description**:defines custom behavior when the 404 (page not found) error occurs.  Luigi handles it by default. Leave its body empty if you have an external 404 handling. You can return an Object with `redirectTo` property if you want Luigi to redirect to a specific navigation path after execution.|
* **parameters**  
  * **wrongPath** (string): the path that user tried navigating to
  * **wasAnyPathFitted** (bool): it is true if Luigi managed to fit a valid path which means **wrongPath** was only partially wrong. Otherwise it is false.
  

-------

## Routing

You can configure the way Luigi tackles routing in your application in the `routing:` section of the configuration file. For example, you can choose the routing strategy to apply in your application as either hash or path location routing.

### useHashRouting
* **type**: boolean 
* **required**: yes 
* **description**: defines either hash-based (`url.com/#/yourpath`) or path-based (`url.com/yourpath`) routing.             


### pageNotFoundHandler
* **type**: function    
* **required**: ?
* **description**:defines custom behavior when the 404 (page not found) error occurs.  Luigi handles it by default. Leave its body empty if you have an external 404 handling. You can return an Object with `redirectTo` property if you want Luigi to redirect to a specific navigation path after execution.|
* **parameters**  
  * **wrongPath** (string): the path that user tried navigating to
  * **wasAnyPathFitted** (bool): it is true if Luigi managed to fit a valid path which means **wrongPath** was only partially wrong. Otherwise it is false.


