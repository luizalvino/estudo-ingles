# Estudo de Inglês — comandos do app (Vite + React + TS)
# O Node LTS vem via nvm porque o Node padrão da máquina (v14) não roda o Vite.

NVM_DIR := $(HOME)/.config/nvm
NODE_VERSION := 25.9.0
WITH_NODE := . $(NVM_DIR)/nvm.sh >/dev/null 2>&1 && nvm use $(NODE_VERSION) >/dev/null 2>&1 &&

.PHONY: dev install build preview

dev: ## Roda o servidor de desenvolvimento
	cd app && $(WITH_NODE) npm run dev

install: ## Instala as dependências
	cd app && $(WITH_NODE) npm install

build: ## Gera o build de produção em app/dist
	cd app && $(WITH_NODE) npm run build

preview: ## Serve o build de produção localmente
	cd app && $(WITH_NODE) npm run preview
