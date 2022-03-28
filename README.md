# Terranetes

Terranetes enables application developers to self-serve cloud resources with minimal user input using Helm packages. You can either choose from our list of packages available on [artifacthub.io](https://artifacthub.io/packages/search?ts_query_web=appvia) or adopt our pattern to build out your own packages. The solution leverages [Terraform](https://www.terraform.io/) and [Helm](https://helm.sh/) to create a Kubernetes Custom Resource Definition (CRD) Object watched and understood by the [Terraform Operator](https://github.com/isaaguilar/terraform-operator) which then triggers a workflow that applies a referenced Terraform module.

![Alt Create an AWS S3 bucket using Helm](https://github.com/appvia/terranetes/blob/main/images/terranetes.gif)

## Documentation
- [What is the pattern?](../docs/what-is-the-pattern.md)
- [Getting started guide](../docs/getting-started.md)
- [Contributing guidelines](../docs/contributing-guidelines.md)
- [Creating your own Helm packages](../docs/creating-your-own-helm-packages.md)
- [FAQs](../docs/faqs.md)

## Community
Terranetes is a community-driven project and therefore we welcome your contribution. Refer to our [contributing guidelines](../docs/contributing-guidelines.md) for more information on how you can help.
- Discuss further on the [Kubernetes](https://slack.k8s.io/) or [Appvia](https://join.slack.com/t/appvia-community/shared_invite/zt-rcqz9vif-eDDQrbD_EAZBxsem30c2bQ) `#terranetes` Slack channels
- Follow us on [Twitter](https://twitter.com/appvia_io), or contact us via [Email](info@appvia.io)
- Join our regular community events at the [London Public Cloud Kubernetes Meetup](https://www.meetup.com/public-cloud-kubernetes-london/)

You can find similar open source tools on [appvia.io/community-tools](https://www.appvia.io/community-tools).
