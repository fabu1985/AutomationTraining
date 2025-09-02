# Playwright + TypeScript (GitHub template)

Plantilla mínima para pruebas E2E con **Playwright** y **TypeScript**, lista para **GitHub Actions**.

## Requisitos
- Node.js 18+ recomendado (20+ ideal)

## Uso local
```bash
npm install
npx playwright install
npm test
# Abrir el reporte HTML localmente
npx playwright show-report
```

## Variables
- `BASE_URL` (opcional): URL base del entorno a probar.
  - Local: `BASE_URL="https://tu-sitio.com" npm test`
  - GitHub: define `BASE_URL` como **Actions secret** del repo.

## Estructura
```
.
├─ .github/workflows/ci.yml  # pipeline de GitHub Actions
├─ tests/example.spec.ts     # test de ejemplo
├─ playwright.config.ts      # configuración de Playwright
├─ package.json              # scripts y deps
└─ tsconfig.json
```

## Ejecutar en GitHub Actions
- Haz push del repo a GitHub. El workflow (`.github/workflows/ci.yml`) se dispara en PRs y en `main/master`.
- Artefactos: se sube `playwright-report` (HTML).

## Personalización rápida
- Cambia `projects` en `playwright.config.ts` si quieres correr solo Chromium.
- Ajusta `retries`, `timeout` o `workers` según tu CI.
