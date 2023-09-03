

.PHONY: help update audit b d

default: help


d: ## Run the development web server.
	cd tomeraviv_web && pnpm run dev


b: ## Build and run the web server.
	cd tomeraviv_web && pnpm run build && pnpm run start


update: ## Interactively checks & updates packages to their latest version.
	cd tomeraviv_web && pnpm run update


audit: ## Checks for known security issues with the installed packages.
	cd tomeraviv_web && pnpm run audit


help: ## Show help message.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[$$()% a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
