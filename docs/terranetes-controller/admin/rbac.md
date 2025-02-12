---
sidebar_position: 7
sidebar_class_name: green
---
# Kubernetes RBAC

The following provides comprehensive guidance on the recommended roles and permissions in Kubernetes for consumers. To ensure a streamlined and efficient approach, all permissions are defined as a ClusterRole and bound locally within a namespace.

1. Create the ClusterRoles for Scoped `terraform.appvia.io` Resources

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: terranetes-users
rules:
  - apiGroups:
      - terraform.appvia.io
    resources:
      - cloudresources
      - configurations
      - plans
      - providers
      - revisions
    verbs:
      - get
      - list
      - watch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: terranetes-cr-user
rules:
  - apiGroups:
      - terraform.appvia.io
    resources:
      - cloudresources
    verbs:
      - create
      - delete
      - update
      - patch
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: terranetes-cfg-user
rules:
  - apiGroups:
      - terraform.appvia.io
    resources:
      - configurations
    verbs:
      - create
      - delete
      - update
      - patch
```

2. Binding the Appropriate Role within the Namespace

Depending on whether you are using `CloudResource` or `Configuration`, bind the appropriate role within the namespace.

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: terranetes-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: terranetes-user
subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: Group
    name: system:authenticated
```

If you are using [CloudResources](../reference/cloudresources.terraform.appvia.io.md), use the following role.

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: terranetes-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: terranetes-cr-users
subjects: [] # <-- Add subjects
```

If you are using [Configurations](../reference/configurations.terraform.appvia.io.md), use the following role.

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: terranetes-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: terranetes-cfg-users
subjects: [] # <-- Add subjects
```
