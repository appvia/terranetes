---
sidebar_position: 1
---
import Features from '@site/src/components/ControllerFeatures';

# What is Terranetes?

The terranetes controller manages the life-cycle of terraform resources defined and built inside Kubernetes. This allows teams running workloads inside the cluster to self-serve application dependencies and reuse the wealth of terraform modules already written.

The controller also comes bundled with a number of technical controls to enable platform teams to push the feature without compromising the standards and best practices required in the organization.

<Features/>

## Additional features

* **Drift Detection:** automatically nothing has changed upstream in the cloud provider and the terraform state is inline with the resources it manages.
* **Module Security:** Gives platform teams the means to control which terraform modules are permitted. This enables the organization to lock down to an approved collection of modules.
* **Targeted Configuration:** Gives platform teams the ability to inject environment-specific variables into the terraform modules consumed downstream. For example, you could inject cost centers or project IDs, or environment-specific configuration like cloud tags and so forth.

