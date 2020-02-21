Luigi docs side nav:

Basics - getting started, architecture, faq, tutorials (+examples) -> examples include the simple "hello world" ones on GitHub, the e2e test one, and the advanced examples of Markus. Maybe we can gather more examples/scenarios - e.g. from Slack discussions

Core - installation, configuration (nav param ref, authorization, general settings, lifecycle, Ui features), api
*Instead of basic/advanced navigation - only one navigation file with accordions OR a collapsible "navigation" node. The explanations/examples go under each parameter they're meant for. There can be only one "navigation basics" file, where it's explained what is top and side nav, what is tab nav and context switcher, etc.

Client - installation, api, custom messages between core and client



# Configuration

![Video](assets/video1.jpg)

Luigi is configured using a **JavaScript configuration file** in your project. Normally it is called `luigi-config.js`, but you can name it something else or create more than one configuration file.

There are four main categories of **Luigi parameters** inside the configuration file: `navigation:`, `routing:`, `auth:`, and `settings:`. There are also Luigi **API functions** which help you create dynamic apps.

What do you want to configure?

## Luigi Parameters

| Navigation  |  Routing | Authorization  | Settings |
|---|---|---|---|
| Settings for individual nav. nodes  | Routing parameters  |  Authorization | Settings |
| Global navigation settings |                |   Authorization events    |  Third-party cookies check |
| Top navigation switchers, tabs, etc.|              |    |     |

## Luigi API functions and additional options

If you want to create a dynamic application, the simple static configuration in the initial `luigi-config.js` and the Luigi parameters will not be enough. You can create a dynamic app by using the Luigi API functions.

### Luigi Core

Luigi Core refers to the main application.

| [Core API](luigi-core-api.md)  |  [UI Features](luigi-ux-features) | Others  |
|---|---|---|
| [Luigi configuration](luigi-core-api.md#luigi-config)  | [Rendering Luigi in the DOM](luigi-ux-features.md#rendering-of-luigi-application-in-the-dom) | [Lifecycle hooks](lifecycle-hooks.md)|
| [DOM elements](luigi-core-api.md#elements) |  [Responsive settings for mobile devices](luigi-ux-features.md#responsive-application-setup)  |   |
| [Authorization](luigi-core-api.md#authorization) |  [Loading indicator](luigi-ux-features.md#app-loading-indicator) |   |
|   [Navigation](luigi-core-api.md#luiginavigation)  |     |       |
| [Localization](luigi-core-api.md#luigii18n)    |    |       |
|   [Custom messages](luigi-core-api.md#custommessages)  |     |     |


### Luigi Client

Luigi Client refers to options specific to the micro frontend.

| [Luigi Client API](luigi-client-api.md)  |
|---|
|   [Lifecycle](luigi-client-api.md#lifecycle) |
|   [Callbacks](luigi-client-api.md#lifecycle˜initlistenercallback)|
|   [Link manager](luigi-client-api.md#linkmanager)|
|   [Split view](luigi-client-api.md#splitview)|
|   [uxManager](luigi-client-api.md#uxmanager)|