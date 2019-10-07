---
title: Formatting
---

These are the guidelines for formatting text and using specific elements such as lists, tables, headings, and links. For guidelines regarding the creation of diagrams, see [this document](#diagrams-diagrams).

## Code formatting

It is important to consistently format items such as code or filenames to quickly distinguish them while reading technical documentation. The following tables outline when to use **bold** font and when to use `code` font:

### Use bold font for these items:

Items       | Examples
----------- | ----------------------------------------------------------------------
Parameters   | The **env** attribute is optional.
HTTP headers | The Authorization Proxy validates the JWT token passed in the **Authorization Bearer** request header.
Events       | The service publishes an **order.created** event.
Roles        | Only the users with the **kyma_admin** role can list Pods in the Kyma system Namespaces.
UI elements  | Click **Subscribe**.
Variables    | Click **Project** > **{Your Project Name}**.

### Use code font for these items:

Items                     | Examples
------------------------- | -----------------------------------------------------------------------------------------------
Code examples             | Get the list of all Pods in a Namespace using the `kubectl get pods -n {namespace}` command.
Values                    | Set the partial attribute to `true` to perform a partial replacement.
Endpoints                 | Send a POST request to the `/{tenant}/categories/{categoryId}/media/{mediaId}/commit` endpoint.
File names                | Open the `deployment.yaml` file.
Path names                | Save the file in the `\services\repository` folder.
Repository names          | The file is located in the `Kyma` repository.
Status and error codes    | A successful response includes a status code of `200 OK`.
Parameter and value pairs | The controller adds the `env=true` label to all newly created Namespaces.
Metadata names            | When you create a Markdown document, define its `title` and `type`.

>**NOTE:** When you mention specific configuration files in your documents, consider linking to them instead of just mentioning their names. When you link to a file, use its name without the format extension. See the following example:
> `To adjust the number of Pods in your Deployment, edit the [deployment](./deployment.yaml) file.`

## Content formatting

Format the content in an attention-grabbing way. In general, content is easier to read when it is in chunks. Consider breaking up endless paragraphs by using a list or a table. Use action verbs and present tense for headings to engage the reader, and also follow the guidelines for the best way to include links and images. When you include lists, tables, code samples, or images, precede them with a brief explanation of what they describe.

### Panels

Panels are colorful containers that call out important or additional information within a topic. To call attention to a specific note, a word of caution or a tip, use the `>**{TYPE}:**`format, where `{TYPE}` is **NOTE**, **TIP**, or **CAUTION**.
Use:
- The blue **NOTE** panel to point to something specific, usually relating to the topic.
- The red **CAUTION** panel to call attention to something critical that can cause inoperable behavior.
- The green **TIP** panel to share helpful advice, such as a shortcut to save time.

See an example:

>**NOTE:** Provision a Public IP for Ingress and a DNS record before you start the installation.

### Ordered and unordered lists

As you write about your topic, use lists to create visual clarity within your content. List items in a category or in a sequence. Use an ordered list for sequential, instructional steps. Unordered lists are appropriate for items that have no sequential order, such as a list of valid file types. Follow these guidelines:
* Make list content consistent in structure. For example, make all the bullet points sentences, questions, or sentence fragments, but do not mix types.
* Punctuate bullet points consistently. If they are sentences, use periods. If they are sentence fragments, do not use periods.
* Avoid ending bullet points with semicolons or commas.
* Capitalize the first letter of each bullet point consistently. Capitalize the first letter unless the list items are always lowercased, as with parameters names.
* Emphasize the beginning of the bullet point to capture the main idea.
* If readers must perform list items in order, as in a step-by-step procedure, use an ordered list and maintain consistency in structure.

### Tables

Another effective way to chunk content is to use tables. Use tables when content needs comparison, or as a way to provide information mapping. Think of a table as a list with optional columns useful to provide and organize more information than belongs in a list. Make sure tables are not too long or hard to read, causing the reader to scroll a lot. If possible, break up a long table into multiple tables.

When creating a table, centralize the columns that have choice-type values, such as `Yes/No` or `true/false`. See the example:
```
| Parameter   |      Required      |  Description |
|-------------|:------------------:|--------------|
|             |       Yes/No       |              |
```

### Headings
Ideally, headings fit into one line in the generated output. Be concise, but also make sure to adequately describe the main point of the document or a section. Follow these guidelines when writing headings:

* Write headings in sentence case. For example, **Expose a service**.
* Use action verbs and present tense verbs in headings when possible, especially in tutorials. For example, **Add a document type**.
* While gerunds are acceptable in body-level content, DO NOT use gerunds in headings. Use **Create a storefront** instead of **Creating a storefront**.
* Avoid stacked headings, which are headings without body-level content in between. For example, DO NOT use a Heading 2 (H2) to introduce one or more Heading 3s. Instead, add a paragraph after the H2 that describes the main idea of the content in the headings that follow.
* Do not use small headings, such as Heading 4 (H4) and smaller. Use Heading 1 (H1) for the document title, and Heading 2s (H2) and Heading 3s (H3) to organize the content of the document.

### Links

Linking is a great tool to use to incorporate a lot of content into your document with fewer words. That being said, overuse of linking can cause "link rot" when links break, and if a page has more links than content, it is not very pleasing to read. Choose carefully when and how to link by using these best practices.

- Use absolute links to link to other repositories and external sources.
- Use relative links to link to documents or files located in the same repository.
- Every link has the potential to go bad over time and the more links you include, the higher the chance that one will break. If something is not central to the subject at hand, is well-known by your audience, or can be found with a simple search, there is no point in linking.
- Choose the link text carefully. Do not link entire phrases which become overemphatic. Instead, choose the noun, such as an article or specification within the phrase that helps the reader understand where the navigation leads them. You can also use the title of the article or book as the link, but do not include the author and publisher.

You can create cross-reference links between Kyma documentation by following the guidelines below. 

>**NOTE:** Cross-reference linking works only on the [Kyma website](https://kyma-project.io/docs). Currently, linking between [GitHub documents](https://github.com/kyma-project/kyma/tree/master/docs) is not available.

**Links between documents in the same topic**

If you want to link to another document in the same topic, create a reference using the `#{type}-{title}-{header}` pattern, where:
- `{type}` is a metadata type of the document that you want to reference.
- `{title}` is a metadata title of the document that you want to reference.
- `{header}` is a header located in the document that you want to reference.

>**NOTE:** All variables must consist of lowercase characters separated with dashes (-).

If the `{type}` doesn't exist, the pattern has the form of `#{title}-{title}-{header}`. If you want to create a reference to the whole `{type}`, use the `#{type}-{type}` pattern.

>**TIP:** You can copy the reference to the documentation directly from the website. See the reference to the Helm Broker **Details** document:

![Same topic reference](./assets/reference-1.png)

**Links to the assets folder**

To add a reference to a YAML, JSON, SVG, PNG, or JPG file located in the `assets` folder in the same topic, use GitHub relative links. For example, write `[Here](./assets/mf-namespaced.yaml) you can find a sample micro front-end entity.` When you click such a link on the `kyma-project.io` website, it opens the file content in the same tab.

**Links between documents in different topics**

If you want to link to a document in a different topic, create a reference using the `/{type-of-topic}/{id}#{type}-{title}-{header}` pattern, where:
- `{type-of-topic}` is a type of topic that you want to reference. Apart from documents related directly to Kyma, all components have the `components` type of topic. For Kyma, use `root` in place of topic type.
- `{id}` is an ID of the topic that you want to reference. It is identical with the name of the component. For example, write `helm-broker` or `kyma`.
- `{type}` is a metadata type of the document that you want to reference.
- `{title}` is a metadata title of the document that you want to reference.
- `{header}` is a header located in the document that you want to reference.

>**NOTE:** All variables must consist of lowercase characters separated with dashes (-).

If the `{type}` doesn't exist, the pattern has the form of `/{type-of-topic}/{id}#{title}-{title}-{header}`. If you want to create a reference to the whole `{type}`, use the `/{type-of-topic}/{id}#{type}-{type}` pattern.

>**TIP:** You can copy the reference to the documentation directly from the website. See the cross-topic references to the Helm Broker **Details** document and to the Kyma **Overview**:

![Different topic reference](./assets/reference-2.png)

![Kyma reference](./assets/reference-3.png)

**Links in documentation toggles**

To link to a document in a documentation toggle, the toggle must start with the `<div tabs name="{toggle-name}">` tag and end with the `</div>` tag, where **name** is a distinctive ID used for linking. To learn more about how to use toggles, read [this](#toggle-toggle) document.

If you want to link to a document in a documentation toggle, create a reference using `/{type-of-topic}/{id}#{type}-{title}-{header}` pattern as described in the previous sections, and add `--{toggle-name}--{tab-name}--{header}`, where:
- `{toggle-name}` is a value of the **name** attribute in the `<div>` HTML tag in the toggle that you want to reference.
- `{tab-name}` is a title of the tab containing the header that you want to reference.
- `{header}` is a header located in the document that you want to reference.

>**NOTE:** All variables must consist of lowercase characters separated with dashes (-). Change any character that is not a letter or number into a dash (-) and squash consecutive dashes (--) into one (-).

For example, the **Choose the release to install** heading changes into the `choose-the-release-to-install` header or the **Lorem ipsum dolor sit (amet)** heading becomes the `lorem-ipsum-dolor-sit-amet` header.

**Examples**

- Absolute links

  This is an absolute link to a document in a documentatin toggle:
  ```markdown
  https://kyma-project.io/docs/root/kyma/#installation-install-kyma-on-a-cluster--provider-installation--gke--choose-the-release-to-install
  ```
  In the absolute link example:
  - `{toggle-name}` is `provider-installation`
  - `{tab-name}` is `gke`
  - `{header}` is `choose-the-release-to-install`


- Relative links

  To use a recommended relative link to a document in a documentation toggle which is in the same topic, use the following pattern:
  ```markdown
  #installation-install-kyma-on-a-cluster--provider-installation--gke--choose-the-release-to-install
  ```
