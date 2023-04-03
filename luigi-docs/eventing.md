# e2e Eventing tests on Kyma

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Steps](#steps)

## Introduction

This document describes the tests that can be performed on Kyma for Eventing. The document covers test scenarios on both SKR and open source Kyma, including test for the SAP Event Mesh backend and in-cluster Eventing.

## Prerequisites

// TODO ???

## Steps

<div tabs name="oss" group="oss">
  <details>
  <summary label="oss">
  <a href="oss">OSS Eventing test</a>
  </summary>

To test Eventing on open-source Kyma, follow these steps:

### Initial configuration
1. Go to the [Busola UI](https://dashboard.dev.kyma.cloud.sap/clusters).
2. Add the kubeconfig of your cluster to Busola.
3. Check if there is an Application already created in the system. We use [commerce-mock](https://github.com/SAP-samples/xf-application-mocks/tree/main/commerce-mock) to create an Application.
4. Get the URL of the commerce-mock by traversing to the API Rules section of the namespace where it is installed. For example, if the commerce-mock is installed in the default Namespace, the list of API Rules will be in `https://busola-url/cluster/your-cluster-name/namespaces/default/apirules`.

  * If the commerce-mock resources are not there, you can create them by running:
      ```
      kubectl apply -f https://raw.githubusercontent.com/SAP-samples/xf-application-mocks/master/commerce-mock/deployment/k8s.yaml
      kubectl apply -f https://raw.githubusercontent.com/SAP-samples/xf-application-mocks/master/commerce-mock/deployment/kyma.yaml
    ```

### Create Namespace/Application
5. Create a Namespace.
6. Go to **Applications** and choose your Application.
7. If there is no Application:
  * Click on **Create Application**.
  * Provide a name and click the newly created Application.
  * Click on **Connect Application**.
  * Click on **Copy to clipboard**.
  * Go to the commerce-mock URL (obtained in Step 3).
  * Click on connect and paste the URL (with token) that you have previously copied.
  * Register the `SAP Commerce Cloud - Events` local API in the commerce-mock.
  * Go Back to the Busola UI and go to **Applications**.
8. Inside the Application, create the Namespace binding by clicking **Create Namespace binding** and choosing your Namespace.
9. Go to **Service Management > Catalog**.
10. Choose `SAP Commerce Cloud - Events`.
11. Click on **Add Once**.

### Create Function
12. Go to **Workloads/Functions**.
13. Click on **Create Function**.
14. Under the code tab, change the code to the following in order to print event data on the logs.
      ```
      module.exports = {
         main: function (event, context) {
            console.log(event.data);
         }
      }
      ```
15. Click on **Save**.

### Send event
16. Go to **Configuration**.
17. Under **Event Subscriptions**, click on **Add Event Subscription**.
18. Choose `order.created` and click on **Add**.
19. Go to the commerce-mock URL (obtained in Step 3).
20. Go to **Remote APIs**.
21. Go to `SAP Commerce Cloud - Events`.
22. Choose the event that you want to send. (We often test with `order.created.v1`)
23. Click on **Send Event**.
24. Observe the logs of the function.

 </details>
</div>

<div tabs name="skr" group="skr">
  <details>
  <summary label="skr">
  <a href="skr">SKR Eventing test</a>
  </summary>

### SKR Eventing test

> **NOTE**: For manual release testing with a SAP Event Mesh backend, please use the SAP Event Mesh instance in this [subaccount](https://cockpit.sap.hana.ondemand.com/cockpit/#/globalaccount/ba5d42be-09e0-43b3-a3ff-3b5f2a2804d4/subaccount/793b4988-501c-4eb5-8d33-45fa06c7d398/subaccountoverview).

> **NOTE:** Use a kubeconfig from Gardener stage, as the kubeconfig from the Kyma UI will not provide sufficient access rights.

To test Eventing on the managed Kyma offering, follow these steps:

### Initial configuration
1. Go to the [Busola UI](https://dashboard.dev.kyma.cloud.sap/clusters).
2. Add the kubeconfig of the SKR cluster to Busola.
3. Check if there is an Application already created in the system. We use [commerce-mock](https://github.com/SAP-samples/xf-application-mocks/tree/main/commerce-mock) to create an Application.
4. Get the URL of the commerce-mock by traversing to the API Rules section of the Namespace where commerce-mock is installed. For example, if commerce-mock is installed in the default Namespace, the list of API Rules will be in `https://busola-url/cluster/your-cluster-name/namespaces/default/apirules`
5. Check if the API Rule can be reached. If so, there is already an Application deployed in the cluster and you can skip Application creating steps.
  * If the commerce-mock resources are not there, you can create them by running:
      ```
      kubectl apply -f https://raw.githubusercontent.com/SAP-samples/xf-application-mocks/master/commerce-mock/deployment/k8s.yaml
      kubectl apply -f https://raw.githubusercontent.com/SAP-samples/xf-application-mocks/master/commerce-mock/deployment/kyma.yaml
    ```

### Create System/Formation
6. Go to the SAP [BTP Cockpit](https://account.int.sap.eu2.hana.ondemand.com/cockpit/#/globalaccount/ba5d42be-09e0-43b3-a3ff-3b5f2a2804d4/myaccount).
7. Go to the global account.
8. Select **System Landscape/Systems** from the left panel.
9.  Click on **Register System**.
10. Give any name to your System. Choose `SAP Commerce Cloud` as the type.
11. Copy the token.
12. Go to the commerce-mock URL (obtained in Step 3).
13. Click on **Connect** and paste the token.
14. Register the `SAP Commerce Cloud - Events` local API in the commerce-mock.
15. Go back to the global account.
16. Select **Formations** from the left panel.
17. Click on **Create Formation**.
18. Give any name to your Formation.

### Create Namespace/Application
19. Select the subaccount where your Kyma installation is.
20. Select the System that was created above.
21. Go to the Busola Kyma Dashboard.
22. Create a Namespace.
23. Go to `Applications`
24. After some time, the commerce-mock Application that we have created and registered will appear here (Its name is going to be `mp-<your_formation_name>`).
25. Select that Application.
26. Click on **Create Binding**.
27. Choose the Namespace that you have created earlier. This will create an Application mapping.
28. Under your Namespace, go to **Service Management > Catalog**.
29. Choose the item with your Formation name, for example `(mp-<your_formation_name>)`
30. Click **Add** on the top right corner.

### Create Function
31. Go to Workloads/Functions
32. Click on **Create Function**
33. Under the code tab, change the code like to following in order to print event data on the logs.
      ```
      module.exports = {
         main: function (event, context) {
            console.log(event.data);
         }
      }
      ```
34. Click **Save**.

### Send event
35. Go to **Configuration**. Under **Event Subscriptions**, click on **Add Event Subscription**.
36. Choose `order.created` and click on **Add**.
37. Go to commerce-mock URL (obtained in Step 3).
38. Go to **Remote APIs**.
39. Go to `SAP Commerce Cloud - Events`.
40. Choose the event that you want to send. (We often test with `order.created.v1`).
41. Click **Send Event**.
42. Go to the logs of the Function.
43. Observe that the event is received.

 </details>
</div>

<div tabs name="btp" group="btp">
  <details>
  <summary label="btp">
  <a href="btp">SAP Event Mesh test from BTP Cockpit</a>
  </summary>

To perform an e2e test with a SAP Event Mesh backend, follow these steps:

### Provision Kyma with an Event Mesh Service Instance from the BTP Cockpit

1. Go to the [BTP Cockpit](https://cockpit.sap.hana.ondemand.com/cockpit/#/globalaccount/ba5d42be-09e0-43b3-a3ff-3b5f2a2804d4/subaccounts).
2. Click on **New SubAccount** (first time only).
3. Navigate to the newly-created subaccount.
4. Go to **Entitlements** > **Configure Entitlements** > **Add Service Plans** > **Kyma Runtime**.
5. Go to **Service Marketplace**. Search for **Kyma Runtime** > **Create**.
6. Navigate to **Entitlements** > **Configure Entitlements** > **Add Service Plans** > **Event Mesh**.
7. Go to **Instances and Subscriptions**. View the **Kyma** instance to see the Kyma Dashboard URL.
8. Navigate to the Kyma Dashboard URL.
9. Navigate to the `default` Namespace (or create a new one).
10. Go to **Service Management** > **Catalog**.
11. Search for `Event Mesh` and click on **Add**.

> **NOTE:** You should copy the `event-mesh-service-instance-config.json` to the config params.

This is an example of what the `event-mesh-service-instance-config.json` file should look like:
	```
	{
	    "options": {
		"management": true,
		"messagingrest": true
	    },
	    "rules": {
		"topicRules": {
		    "publishFilter": [
			"${namespace}/*"
		    ],
		    "subscribeFilter": [
			"${namespace}/*"
		    ]
		},
		"queueRules": {
		    "publishFilter": [
			"${namespace}/*"
		    ],
		    "subscribeFilter": [
			"${namespace}/*"
		    ]
		}
	    },
	    "resources": {
				"units": "10"
			},
	    "version": "1.1.0",
	    "emname": "EVENTMESH_NAME",
	    "namespace": "NAMESPACE"
	}
	```
12. Go to **Service Management** > **Instances**.
13. Click on the newly-created Service Instance and go to **Credentials** > **Create Credentials**.

	* To create a Kubernetes secret from the credentials (in the JSON format mentioned above), you could use the following command:
	```
	kubectl create secret generic beb-secret --from-literal=namespace=$(jq -r .namespace path/to/ems/credentials.json) --from-literal=messaging="$(jq .messaging path/to/ems/credentials.json)"
	```
### Enable the SAP Event Mesh UI:
14. Go to **Entitlements** (inside your subaccount)
15. Click on **Configure Entitlements** > **Add Service Plans**
16. Search for `Event Mesh` and click **Add standard (Application)**
17. Go to **Instances and Subscriptons** (inside subaccount) and click on **Create**
18. Enter "EventMesh" as Service and "Standard (Subscription)" as Plan
19. A link should appear now in the Application section which will lead to the UI

### Disable Kyma from the BTP Cockpit:

20. On [`Busola console`](https://dashboard.dev.kyma.cloud.sap/), delete the **Secret** which is tied to the Event Mesh Service Instance. This should remove the **Event Mesh Service Binding** from BTP Cockpit.
21. On [`Busola console`](https://dashboard.dev.kyma.cloud.sap/), delete the **Event Mesh Service Instance**. This should remove the **Event Mesh Service Instance** from BTP Cockpit.
22. Disable Kyma on BTP Cockpit.

 </details>
</div>

<div tabs name="incluster" group="incluster">
  <details>
  <summary label="incluster">
  <a href="incluster">In-cluster Eventing test</a>
  </summary>

### In-cluster Eventing test

> **NOTE:** In-cluster Eventing is only supported for Cloud Events. You can find more details [here](https://kyma-project.io/docs/kyma/latest/03-tutorials/00-eventing/evnt-01-setup-in-cluster-eventing).

> **NOTE**: For manual release testing with a SAP Event Mesh backend, please use the SAP Event Mesh instance in this [subaccount](https://cockpit.sap.hana.ondemand.com/cockpit/#/globalaccount/ba5d42be-09e0-43b3-a3ff-3b5f2a2804d4/subaccount/793b4988-501c-4eb5-8d33-45fa06c7d398/subaccountoverview)

To test in-cluster Eventing, follow these steps:

1. To create a test Namespace, run:
    ```
    k create namespace test
    ```
2. To create a Function, run:
    ```
    cat << EOF | k apply -f -
    apiVersion: serverless.kyma-project.io/v1alpha1
    kind: Function
    metadata:
      generation: 2
      name: test
      namespace: test
    spec:
      buildResources:
        limits:
          cpu: 1700m
          memory: 1700Mi
        requests:
          cpu: 1100m
          memory: 1100Mi
      deps: "{ \n  \"name\": \"test\",\n  \"version\": \"1.0.0\",\n  \"dependencies\":
        {}\n}"
      maxReplicas: 5
      minReplicas: 1
      resources:
        limits:
          cpu: 200m
          memory: 256Mi
        requests:
          cpu: 100m
          memory: 128Mi
      runtime: nodejs12
      source: "module.exports = { \n  main: function (event, context) {\n    console.log(event.data);\n
        \   return \"Hello World!\";\n  }\n}"
    EOF
    ```
> **NOTE:** Tail the log of this function.

3. To create a Subscription (without an application registered in Kyma), run:
    ```
    cat << EOF | k apply -f -
    apiVersion: eventing.kyma-project.io/v1alpha1
    kind: Subscription
    metadata:
      name: test-noapp
      namespace: test
    spec:
      filter:
        filters:
        - eventSource:
            property: source
            type: exact
            value: ""
          eventType:
            property: type
            type: exact
            value: sap.kyma.custom.noapp.order.created.v1
      protocol: ""
      protocolsettings: {}
      sink: http://test.test.svc.cluster.local
    EOF
    ```

4. To port-forward the [Publisher Proxy](https://github.com/kyma-project/kyma/tree/main/components/event-publisher-proxy), run:
    ```
    k -n kyma-system port-forward svc/eventing-event-publisher-proxy  8081:80
    ```
5. To send a Cloud Event in structured mode (with a NATS backend), run:
    ```
    curl -v -X POST \
        -H "Content-Type: application/cloudevents+json" \
        --data @<(<<EOF
        {
            "specversion": "1.0",
            "source": "noapp",
            "type": "sap.kyma.custom.noapp.order.created.v1",
            "eventtypeversion": "v1",
            "id": "A234-1234-1234",
            "data" : "{\"foo\":\"bar\"}",
            "datacontenttype":"application/json"
        }
    EOF
        ) \
        http://localhost:8081/publish
    ```
6. To send a Cloud Event in structured mode (with SAP Event Mesh backend) using the SAP Event Mesh namespace in the CE "source", run:
    ```
    curl -v -X POST \
        -H "Content-Type: application/cloudevents+json" \
        --data @<(<<EOF
        {
            "specversion": "1.0",
            "source": "/default/sap.kyma/1d4c832d-4751-44eb-b814-01eabf92af12",
            "type": "sap.kyma.custom.noapp.order.created.v1",
            "eventtypeversion": "v1",
            "id": "A234-1234-1234",
            "data" : "{\"foo\":\"bar\"}",
            "datacontenttype":"application/json"
        }
    EOF
        ) \
        http://localhost:8081/publish
    ```
7. To send a Cloud Event in binary mode (with a NATS backend), run:
    ```
    curl -v -X POST \
        -H "ce-specversion: 1.0" \
        -H "ce-type: sap.kyma.custom.noapp.order.created.v1" \
        -H "ce-source: noapp" \
        -H "ce-eventtypeversion: v1" \
        -H "ce-id: A234-1234-1234" \
        -H "content-type: application/json" \
        -d "{\"foo\":\"binary-mode\"}" \
        http://localhost:8081/publish
    ```
8. To send a Cloud Event in binary mode (with a SAP Event Mesh backend), run:
    ```
    curl -v -X POST \
        -H "ce-specversion: 1.0" \
        -H "ce-type: sap.kyma.custom.noapp.order.created.v1" \
        -H "ce-source: /default/sap.kyma/1d4c832d-4751-44eb-b814-01eabf92af12" \
        -H "ce-eventtypeversion: v1" \
        -H "ce-id: A234-1234-1234" \
        -H "content-type: application/json" \
        -d "{\"foo\":\"binary-mode\"}" \
        http://localhost:8081/publish
    ```

 </details>
</div>
