# Terranetes

Terranetes enables application developers to self-serve cloud resources with minimal user input using Helm packages. You can either choose from our list of packages available on [artifacthub.io](https://artifacthub.io/packages/search?ts_query_web=appvia) or adopt our pattern to [create your own packages](docs/creating-your-own-packages.md).

It is a solution and pattern that simplifies developer self-service and application development in the cloud. It combines reputable and widely-adopted technologies such as [HashiCorp Terraform](https://www.terraform.io/), [Terraform Operator](https://github.com/isaaguilar/terraform-operator) and [Helm](https://helm.sh/) to provide consumable packages i.e. Helm charts to application developers. Terraform and Helm are the core components of this pattern but the Terraform Operator component can replaced with alternative solutions such as the [Appvia Terraform Controller](https://github.com/appvia/terraform-controller) and the [Open Application Model Terraform Controller](https://github.com/oam-dev/terraform-controller).

It is a way of working that empowers infrastructure operators such as DevOps or Platform engineers to create consistent and re-usable Terraform modules that application developers can consume with minimal user input and minimal cloud expertise.

![Terranetes Ways of Working](images/terranetes.png)

## Documentation
- [Getting started guide](docs/getting-started.md)
- [Contributing guidelines](docs/contributing-guidelines.md)
- [Creating your own packages](docs/creating-your-own-packages.md)
- [FAQs](docs/faqs.md)

## Community
We welcome your feedback to our proposed way of working and open source projects. Refer to our [contributing guidelines](docs/contributing-guidelines.md) for more information on how you can help.
- Discuss further on the [Kubernetes](https://slack.k8s.io/) or [Appvia](https://join.slack.com/t/appvia-community/shared_invite/zt-rcqz9vif-eDDQrbD_EAZBxsem30c2bQ) `#terranetes` Slack channels
- Follow us on [Twitter](https://twitter.com/appvia_io), or contact us via [Email](info@appvia.io)
- Join our regular community events at the [London Public Cloud Kubernetes Meetup](https://www.meetup.com/public-cloud-kubernetes-london/)

You can find similar open source tools on [appvia.io/community-tools](https://www.appvia.io/community-tools).

## Demo
Watch [our demo](https://youtu.be/JE3CgDcH1xo) of using Helm to create cloud resources.
