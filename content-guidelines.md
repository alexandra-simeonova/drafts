# Content Guidelines

This page contains instructions on how to create documentation for Luigi. It explains some of the basic rules about formatting, linking, diagrams, and more.  

## Audience

The audience of the Luigi docs are developers or managers interested in implementing a micro frontend UI solution. It is assumed the reader already has basic knowledge of web development. Do not explain general concepts, but only specific instructions for Luigi. 

## Language

When writing documentation, you should adhere to a few basic rules:
- Use the active voice. Instead of writing *Luigi Client should be installed in the main project folder...*, write *Install Luigi Client in your main project folder...*. 
- Do not use slang or abbreviations. This also means you should not use contractions (don't instead of do not) or short forms (info instead of information).
- Always use the present tense except if future is necessary to explain something that will happen in the future. 
- Use concise language and avoid long blocks of text. 
- Give practical examples of features instead of only using words to explain them. Additionally, link to the [Luigi fiddle](https://fiddle.luigi-project.io/) as a tool where users can experiment with features. 

## Formatting

Documentation for Luigi is written in the form of Markdown files on GitHub. Find more about what GitHub-flavored Markdown is [here]. 

Documentation is located in the luigi/docs folder in the [Luigi repository]. Search the already available documentation before adding new content to make sure there are no duplicates. 

### Headings

Use H1 headings (preceded by # in Markdown) only at the start of the document to indicate the document name.

Only use H2 and H3 headings for any subsequent categories. Do not use H4 (####) or any smaller subheadings.

### Lists

Lists are very useful for breaking up text and providing instructions.

Use bullet points (created with * or -) for lists involving general explanations.
Use numbered lists only for step-by-step instructions. 
 
### Tables 

Use a Markdown table generator such as [this](https://www.tablesgenerator.com/markdown_tables) to create tables. Although this is not the only way to create tables in Markdown, it is easier to edit even as a raw file.

### Code snippets 

Must be surrounded with the Markdown code block tag and the programming language should be specified. For example: 
```javascript
Luigi.setConfig({
  routing: {
    nodeParamPrefix: '~'
  },
```

### Fonts

Parameters
Parameters or properties of the Luigi configuration should be **bolded**. For example:
**loadingIndicator.enabled** 

|     Type           |      Font          |    Example    |
|--------------------|:------------------:|---------------|
| Parameters         |      **bold **     | **viewGroup** |
| Folders and paths  |      `code`        | the file `basicConfiguration.js` inside `assets/luigi-config`|
| Code snippets      |      `code`        | ```javascript routing: { nodeParamPrefix: '~'},``` |
| Functions          |      **bold **     | **showLoadingIndicator()** |

## Links

If the link is within the same folder on github, use only the relative path. For all other links, use the absolute path (the one starting with https://...)

## Diagrams 

Use [draw.io](https://draw.io) to create diagrams. Export the diagram as a PNG file and save it in the `docs/assets` folder.

## Screenshots

Refrain from using screenshots if possible, and point users to the [Luigi fiddle](https://fiddle.luigi-project.io/) or otherwise describe the concept. 

## Examples

To add an example to Luigi, use the same structure as the [existing examples]():
- Provide an overview outlining the goal of the example
- Include a **prerequisites** section only in case additional steps are needed to run the example 
- Create a **development** section and explain how to install and run the example
- End with a **tests** section explaining how to ensure the example was configured correctly 

## Terminology/glossary 

* Luigi Core - the main application and the settings used to configure it 
* Luigi Client - the micro frontend within Luigi Core and the API used to connect the two 
* Parameters - the parameters that can be added to create a dynamic path.
* Properties - the properties that can be used to configure Luigi in the `basicConfiguration.js` file. 
* Attributes - the "sub properties" of properties. E.g. the **category** property can have **label**, **icon**, and **collapsible** as attributes. This term derives from the [definition](https://en.wikipedia.org/wiki/Attribute_%28computing%29) of "attribute" as "a property of a property". 
luigi/core/examples/luigi-sample-angular 
