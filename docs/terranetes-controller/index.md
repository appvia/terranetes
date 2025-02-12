---
sidebar_position: 1
---
import Features from '@site/src/components/ControllerFeatures';

# What is Terranetes?

The Terranetes controller orchestrates the lifecycle of Terraform resources within Kubernetes, enabling teams to autonomously provision application dependencies and leverage the extensive library of existing Terraform modules.

Among the available open source controllers that integrate Terraform with Kubernetes, the Terranetes controller stands out for its unique approach. While other solutions focus solely on delivering the desired developer outcome, Terranetes prioritizes the creation of a secure and controlled environment for platform teams to manage Terraform resources. This approach acknowledges the potential risks, costs, and security implications associated with self-service infrastructure provisioning, and addresses these concerns through a robust set of features. By empowering platform engineers with granular control over the Terraform lifecycle, Terranetes ensures that the benefits of infrastructure as code are realized while minimizing the risks and ensuring compliance with organizational standards.

<Features/>

## Additional features

* **Drift Detection:** Automatic detection of any changes in the cloud provider's upstream infrastructure, ensuring that the Terraform state remains synchronized with the resources under its management.
* **Module Security:** Exercise control over the Terraform modules that are allowed for use. This facilitates the organization's ability to restrict usage to a curated set of approved modules, thereby enhancing security and compliance.
* **Targeted Configuration:** Ability to dynamically inject environment-specific variables into the Terraform modules that are consumed downstream. This allows for the integration of environment-specific details such as cost centers, project IDs, or configuration parameters like cloud tags, ensuring a high degree of customization and adaptability.
