# Easier start with Kyma runtime

With the past Kyma open-source releases, the team made an effort to reduce the initial footprint of Kyma components inside your cluster. This means we can now reduce the initial size of the Kyma runtime down to 2 virtual machines (each comprised of 8 virtual CPUs and 32 GB of RAM). This reduction lowers the initial consumption of Capacity Units from 2141 to 1449.

The cluster still scales up to 10 virtual machines, thus providing enough space for your workload.

# Simplifying your Kyma sizing efforts

Based on user feedback, we are also launching a new version of the [Kyma estimator tool](https://www.sap.com/products/cloud-platform/pricing/estimator-tool.html). When you select the Kyma runtime, you can now find the new version behind the calculator icon:

![Kyma Estimator](https://github.tools.sap/D043982/2-node-update-blog/blob/master/kyma_estimator.png)

The new layout makes it clear what the initial size of a Kyma runtime consists of. In the "Details" tab, you can see that a fresh Kyma runtime reserves around 50% of that capacity. This means it leaves enough space for your workload to get started. How much capacity is used by Kyma later on depends on many factors, for example the number of deployments. The important message is: when you get started with Kyma runtime, it won't directly scale up with the first deployment of a Function!

In the lower section of the calculator, you can now select the number of virtual machines you expect to require on top of the initial size. At this point in time, each virtual machine is made of 8vCPUs and 32 GB RAM. This then translates into a commercial unit which is called "Nodes", not to be confused with a Kubernetes Node. Our "Node" refers to a size of 2vCPUs and 8 GB RAM. That enables us to stay flexible, and in the future maybe even enable you to alter the Kyma VM size according your needs.

With the reduced Kyma size and updated estimator tool, it should now be easier to comprehend and plan ahead. If you have any questions or want to provide feedback, please comment on this blog post or use [private messages](https://messages.sap.com).



