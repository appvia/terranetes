---
sidebar_position: 1
---

# What are workflows

💬 _"In essence an opinion on a piece of paper"_

Implementing functionality and features is a relatively straightforward task, as open source solutions abound. However, establishing a **standardized approach to work** is of greater value. The workflow outlined here embodies a deliberate opinion on how DevOps teams can effectively iterate, review, and publish modules, as well as how developers can efficiently discover, search for, and utilize cloud resources. This workflow is intentionally designed to be straightforward, not revolutionary. If you already have a well-established process in place, you are welcome to disregard this workflow or use it as a starting point for further refinement. Alternatively, we encourage you to contribute to its improvement by submitting a pull request.

## Motivations

This section offers a concise overview of the objectives we aimed to accomplish.

#### 🟢 **An agnostic pipeline**

It shouldn't matter if the terraform module is consumed by another pipeline or the terranetes controller. The suggested workflow should work for both.

#### 🟢 **Fail early, fail fast**

Implementing technical controls at runtime, such as admission control, can lead to inefficiencies and potential downtime. This approach often results in a reactive process, where deployments are blocked upon submission, causing frustration and wasted time as users attempt to rectify compliance issues. Moreover, this can lead to service disruptions when deployments fail in different environments. To mitigate these issues, it is essential to integrate these technical controls into the pipeline, enabling early detection and resolution of compliance issues, thereby promoting a proactive and efficient development process.

#### 🟢 **Bake nothing into the product**

This workflow is designed to promote best practices, serving as a flexible template that guides teams without imposing rigid constraints.

#### 🟢 **An opinionated workflow**

This workflow integrates a solid foundation, community tools, and a pipeline to facilitate the iteration of Terraform modules from creation to review and ultimately, consumption. Rather than reinventing the wheel, it offers a comprehensive, out-of-the-box solution.

#### 🟢 **Distribution Challenges**

In large organizations, duplication of effort can become a significant issue, as multiple modules may be created to perform the same function. This can lead to a proliferation of modules, each provisioning similar resources, such as S3 buckets. This duplication not only results in a waste of time and resources but also introduces maintenance complexities and governance challenges.

Key questions that arise from this scenario include:

* Which modules are currently in use, and where are they deployed?
* Are these modules compliant with organizational guidelines and standards?
