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
sets the prefix character when using the `LuigiClient.linkManager().withParam()` function, which provides a way to simply attach query parameters to the view URL for activities such as sorting and filtering. The URL contains the parameters to allow deep linking. If you want to use a different character prefix, define yours here. The default character is `~`.

### pageNotFoundHandler
* **type**: function    
* **required**: ?
* **description**:defines custom behavior when the 404 (page not found) error occurs.  Luigi handles it by default. Leave its body empty if you have an external 404 handling. You can return an Object with `redirectTo` property if you want Luigi to redirect to a specific navigation path after execution.|
* **parameters**  
  * **wrongPath** (string): the path that user tried navigating to
  * **wasAnyPathFitted** (bool): it is true if Luigi managed to fit a valid path which means **wrongPath** was only partially wrong. Otherwise it is false.
  

## Navigation parameters

The node navigation parameters enable you to configure global navigation settings directly under the `navigation:` tag in the configuration file.


## Node parameters

Node parameters are all the parameters that can be added to an individual navigation node in the `nodes:` section of the Luigi configuration file.
