---
sidebar_position: 1
---

# What are workflows

💬 _"In essence an opinion on a piece of paper"_

Providing functionality and features isn't complicated; open source overflows with solutions to things. But providing a **way of working** is more useful. Workflows is a stamp of opinion of how devops can iterate, review and publish modules and developers can find, search and consume cloud resources. The workflow isn't revolutionary, it's deliberately simple. If you already have a good process already, feel free to ignore. Use it as a template, that's fine too, or even better yet, raise a pull request and improve it.

## What were the goals?

The following provides a glance overview of what we were trying to achieve.

#### 🟢 **An agnostic pipeline**

It shouldn't matter if the terraform module is consumed by another pipeline or the terranetes controller. The suggested workflow should work for both.

#### 🟢 **Fail early, fail fast**

Technical controls are often too late in the game, i.e. at runtime. Admission control is a prime example of this, blocking the request on submission. At best this becomes an irritation and waste of time, as a user moves back and forth trying to bring the deployment inline with compliance. At worst it's potential downtime as you apply in one environment just to fail in another. While the technical control is always there we want to ensure those same checks are performed in the pipeline, known upfront and fail early.

#### 🟢 **Bake nothing into the product**

The workflow is there to 'encourage' good practice, act as a template rather then pigeon hole teams in.

#### 🟢 **An opinionated workflow**

Stitching together a good foundation, community tools and pipeline to iterate a terraform from creation, review and through to consumption. Were not reinventing the wheel just providing an out of the box solution.

#### 🟢 **Distribution is a problem**

Work in any large organization and duplication becomes a issue, with numerous modules rehashing the same functionality over and over. Before you know it you've got 20 modules all provisioning an S3 bucket. Beyond the comically waste of time, you now have a maintenance penality not to mention a lack of governance.

* Which is being used, where?
* Which is compliant, follows company guidelines and so forth.
