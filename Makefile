AUTHOR_EMAIL=info@appvia.io

.PHONY: docs

default: docs

docs:
	@echo "--> Generating the CRD Reference"
	@mkdir -p docs/terraform-controller/reference
	@docker run \
		-v ${PWD}/docs/terraform-controller/reference:/opt/crd-docs-generator/output \
		-v ${PWD}/crdgen:/opt/crd-docs-generator/config \
		quay.io/giantswarm/crd-docs-generator:0.10.0 \
		--config /opt/crd-docs-generator/config/config.yaml
	@sed -i -e 's/}/\&#125;/g' -e 's/{/\&#123;/g' docs/terraform-controller/reference/*.md

docs-cli:
	@echo "--> Generating the CLI Reference"
	@mkdir -p docs/terraform-controller/cli
	@tnctl generate docs --directory docs/terraform-controller/cli
