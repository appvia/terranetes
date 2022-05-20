AUTHOR_EMAIL=info@appvia.io

.PHONY: docs

default: docs

docs:
	@echo "--> Generating the CRD Reference"
	@mkdir -p docs/reference
	@docker run \
		-v ${PWD}/docs/reference:/opt/crd-docs-generator/output \
		-v ${PWD}/crdgen:/opt/crd-docs-generator/config \
		quay.io/giantswarm/crd-docs-generator:0.10.0 \
		--config /opt/crd-docs-generator/config/config.yaml
