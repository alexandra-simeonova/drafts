# Content Guidelines

NOTE: Add more info about how to open a PR 

This page contains instructions on how to create documentation for Luigi. It explains some of the basic rules about formatting, links, terminology, and more.

## Audience

The audience of Luigi documentation consists mainly of developers interested in implementing a micro frontend UI solution. It is assumed the reader already has basic knowledge of web development. Do not explain general concepts unrelated to Luigi except if they are instrumental for working with the feature you're describing.

## Structure

An instructional document will have the following basic structure:
- Introduction - one or two sentences introducing the topic in your heading
- Parameters - create a list of the parameters that the user needs to configure. Include their type and function.
- Example - include a short code snippet showing how to use the configuration

An example document will have the following structure: 

## Language

When writing documentation, you should adhere to a few basic rules:
- Use active voice. For example, instead of writing "Luigi Client should be installed...", write "Install Luigi Client..."
- Do not use slang or abbreviations. This also means you should not use contractions ("don't" instead of "do not") or short forms ("info" instead of "information").
- Use the present tense. 
- Use concise language and avoid long blocks of text. Lists, tables, or subheadings can help you with that.
- Give practical examples of features instead of only using words to explain them. Additionally, link to the [Luigi fiddle](https://fiddle.luigi-project.io/) as a tool where users can experiment with features.

## Formatting

Documentation for Luigi is written in the form of Markdown files on GitHub. Find more about what GitHub-flavored Markdown is [here](https://github.github.com/gfm).

Documentation is located in the `luigi/docs` folder in the [Luigi repository](https://github.com/SAP/luigi). Search the already available documentation before adding new content to make sure there are no duplicates.


### Headings

Use H1 headings (preceded by # in Markdown) only at the start of the document to indicate the document name.

Only use H2 and H3 headings for any subsequent categories. Do not use H4 (####) headings or lower.

### Lists

Lists are very useful for breaking up text and providing instructions.

- Use bullet points (created with * or -) for lists involving general explanations.
- Use numbered lists only for step-by-step instructions.

### Tables

Use tables when content needs comparison or to organize small bits of information. Keep in mind that in Markdown it is not possible to break up the content of a table cell into separate lines or bullet points, therefore tables are not useful when they contain long sentences or lists.

You can find an example of a table in the [Styles](#styles) section of this document.

### Code snippets

Code snippets must be surrounded with the Markdown code block tag and the programming language should be specified. Make sure to indent code correctly using your text editor (2 space indentation is the default). 

For example:

```javascript 
Luigi.setConfig({
  routing: {
    nodeParamPrefix: '~'
  },
```

is better than:

```
Luigi.setConfig({
    routing: {
        nodeParamPrefix: '~'
    },
```

### Styles

Depending on the type of content, you should use different types of text, for example **bolded** or `code`.

|     Type           |      Font          |    Example    |
|--------------------|:------------------:|---------------|
| Properties         |      **bold**     | **viewGroup** |
| Parameters         |      `code`        | `{userId}`    |
| Folders and paths  |      `code`        | the file `basicConfiguration.js` inside `assets/luigi-config`|
| Code snippets      |      `code`        | See [this section](#code-snippets) |
| Functions          |      **bold**     | **showLoadingIndicator()** |

## Links

If the link is within the same folder on github, use only the relative path. For all other links, use the absolute path (the one starting with https://...).

## Alert blocks

To draw the reader's attention to something, you can use the quote block option in Markdown. Use one of these three options:

>**NOTE:** Something the reader should take note of

>**TIP:** Useful, but not necessary information

>**WARNING:** Very important information

## Diagrams

Use [draw.io](https://draw.io) to create diagrams. Export the diagram as a PNG file and save it in the `docs/assets` folder.

## Screenshots

Refrain from using screenshots if possible, and point users to the [Luigi fiddle](https://fiddle.luigi-project.io/) or otherwise describe the concept.

## Examples

To add an example to Luigi, use the same structure as the [existing examples](https://github.com/SAP/luigi/tree/master/core/examples):

- Provide an overview outlining the goal of the example
- Include a **prerequisites** section only in case additional steps are needed to run the example
- Create a **development** section and explain how to install and run the example
- End with a **tests** section explaining how to ensure the example was configured correctly

## Terminology/glossary

* Luigi Core - the main application and the settings used to configure it.
* Luigi Client - the micro frontend within Luigi Core and the API used to connect the two.
* Parameters - the parameters that can be added to create a dynamic path.
* Properties - the properties that can be used to configure Luigi in the `basicConfiguration.js` file.
* Attributes - the "sub properties" of properties. E.g. the **category** property can have **label**, **icon**, and **collapsible** as attributes. This term derives from the [definition](https://en.wikipedia.org/wiki/Attribute_%28computing%29) of "attribute" as "a property of a property".

## API documentation

The Luigi Core and Client API files are automatically generated. Therefore, these Markdown files cannot be edited directly and can only be modified by the Luigi team. If you notice a problem in the API documentation, create an issue on GitHub
