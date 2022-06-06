# Terranetes

## Components 

* Terraform Controller https://github.com/appvia/terraform-controller
* tf2helm https://github.com/appvia/tf2helm

**Access the docs at https://terranetes.appvia.io**

Terranetes uses Helm packages to enable application developers to self-serve cloud resources with minimal user input.

This is a solution and pattern that simplifies developer self-service and application development in the cloud. It combines reputable and widely-adopted technologies such as HashiCorp Terraform, the Appvia Terraform Controller and Helm to provide consumable packages (i.e., Helm charts) to application developers. Terraform and Helm are the core components of this pattern, but the Terraform Controller component can be replaced with alternative solutions such as the Open Application Model Terraform Controller.

This is a way of working that empowers infrastructure operators such as DevOps or Platform engineers to create consistent and re-usable Terraform modules. Application developers can consume these modules with minimal user input and minimal cloud expertise, whilst being assured they are in line with company policies and budgets.

![Terranetes Diagram](static/img/terranetes.jpg)
