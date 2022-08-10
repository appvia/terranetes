---
sidebar_position: 1
---
import Features from '@site/src/components/ControllerFeatures';

# What is Terranetes?

The terranetes controller manages the life-cycle of terraform resources defined and built inside Kubernetes. This allows teams running workloads inside the cluster to self-serve application dependencies and reuse the wealth of terraform modules already written.

There's a number of open source controllers you could use that will run Terraform in Kubernetes. All of them deliver the developer outcome, however, none address the "consequences" of delivering that outcome in the first place; the risks, costs, security implications, the general lack of checks and balances. What sets the Terranetes controller apart is its opinion you first enable the platform team to deliver the outcome in a safe environment before it can be self-served by developers. Providing platform engineers with all the knobs, dials and levers to control and mitigate those risks is the key differentiator for Terranetes controller.

<Features/>

## Additional features

* **Drift Detection:** automatically nothing has changed upstream in the cloud provider and the terraform state is inline with the resources it manages.
* **Module Security:** Gives platform teams the means to control which terraform modules are permitted. This enables the organization to lock down to an approved collection of modules.
* **Targeted Configuration:** Gives platform teams the ability to inject environment-specific variables into the terraform modules consumed downstream. For example, you could inject cost centers or project IDs, or environment-specific configuration like cloud tags and so forth.

