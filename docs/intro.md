---
sidebar_position: 1
---
# Terraform Controller

Kubernetes has been brilliant at delivering an ecosystem for developers, improving the velocity of shipping, bringing components under a common framework and DSL, coupled with the flexibility to expand and extend the offering. And so it beggars belief that speaking to customers, application dependencies and consumption is still a major bottleneck to progress, with teams blocked waiting on that database, queue, object store and so forth.

## Thing is ...

- Most applications don't even make it to production - a large chunk of the software delivery cycle is prototyping and experimentation. It's being driven to show value quickly: try it, show it and see if it fails.
- That statement often comes into conflict with platform engineering, and naturally so. Their goals of productized setup, ownership of reliability, cost and security is a very different world view.
- And while Kubernetes has been very successful in bridging the barrier of application delivery, enabling development teams and DevOps to experience platform as a service, application dependencies in a large chunk of organizations remain a ticketed system; click, open support ticket, wait for response, and so on.
While the terraform-controller isn’t trying to solve all those issues, it's a step in the right direction.

Reuse the terraform modules and code you already have; no pivots or tech choices.
Allow teams to consume it while maintaining control over the assets (terraform modules) and the security profile (checkov).
Let teams be aware of their own costs, allowing them to improve them.

