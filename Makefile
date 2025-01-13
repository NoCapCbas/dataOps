
dev:
	docker compose --env-file .env -f docker-compose.dev.yml up -d --build

dev-recreate:
	docker compose --env-file .env -f docker-compose.dev.yml up -d --build --force-recreate

dev-down:
	docker compose --env-file .env -f docker-compose.dev.yml down

dev-logs:
	docker-compose --env-file .env -f docker-compose.dev.yml logs

prod:
	docker compose --env-file .env -f docker-compose.prod.yml up -d --build

prod-portfolio:
	docker compose --env-file .env -f docker-compose.prod.yml up -d --build --force-recreate portfolio

prod-recreate:
	docker compose --env-file .env -f docker-compose.prod.yml up -d --build --force-recreate

prod-down:
	docker compose --env-file .env -f docker-compose.prod.yml down

prod-logs:
	docker compose --env-file .env -f docker-compose.prod.yml logs

prod-preview:
	docker compose --env-file .env -f docker-compose.prod.yml up -d portfolio

prod-local:
	docker compose --env-file .env -f docker-compose.prod-local.yml up -d --build

local-install:
	cd site && npm install

local-dev:
	cd site && npm run dev

local-build:
	cd site && npm run build

		
help:
	@echo "Available targets:"
	@echo "make dev"
	@echo "make dev-recreate"
	@echo "make dev-down"
	@echo "make dev-logs"
	@echo "make prod"
	@echo "make prod-recreate"
	@echo "make prod-down"
	@echo "make prod-logs"

.PHONY: help dev prod dev-recreate prod-recreate dev-down prod-down dev-logs prod-logs

