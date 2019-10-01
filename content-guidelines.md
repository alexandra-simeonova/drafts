# Content Guidelines

These guidelines can be used to create Kyma documentation. 

## Audience

The audience of the Luigi docs are developers or managers interested in a micro frontend UI solution. It is assumed the reader already has basic knowledge of web development.  

## Strategy

The purpose of documentation is to explain concepts and provide step-by-step instructions on using Luigi. 

Give practical examples of features whenever possible. The users should be able to see clearly how to use certain features. Point to the [Luigi fiddle](https://fiddle.luigi-project.io/) as a tool where users can experiment with features. 

## Formatting

Documentation for Luigi is written in **Markdown**. 

Code snippets must be surrounded with this tag: ``````{name-of-programming-language}``````. For example: 
```javascript
Luigi.setConfig({
  routing: {
    nodeParamPrefix: '~'
  },
```

Parameters or properties of the Luigi configuration should be **bolded**. For example:
**loadingIndicator.enabled** 

Filenames must also be written in code format. For example: `basicConfiguration.js`

## Links

If the link is within the same folder on github, use only the relative path. For all other links, use the absolute path (the one starting with https://...)

## Diagrams 

Use [draw.io](https://draw.io) to create diagrams. 

## Terminology/glossary 

* Luigi Core - the main application and the settings used to configure it 
* Luigi Client - the micro frontend within Luigi Core and the API used to connect the two 
* Parameters - the parameters that can be added to create a dynamic path.
* Properties - the properties that can be used to configure Luigi in the `basicConfiguration.js` file. 
* Attributes - the "sub properties" of properties. E.g. the **category** property can have **label**, **icon**, and **collapsible** as attributes. This term derives from the [definition](https://en.wikipedia.org/wiki/Attribute_%28computing%29) of "attribute" as "a property of a property". 
