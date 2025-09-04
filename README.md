
# 🚀 Google Cloud Run, GitHub Actions y Mermaid son claves en tu estrategia DevOps

[![CI/CD](https://github.com/Poswark/GoogleRun-Github/actions/workflows/ci-cd.yaml/badge.svg)](https://github.com/Poswark/GoogleRun-Github/actions/workflows/ci-cd.yaml)[![Deploy to Cloud Run](https://github.com/Poswark/GoogleRun-Github/actions/workflows/ci-cd.yaml/badge.svg)](https://github.com/Poswark/GoogleRun-Github/actions/workflows/deploy.yaml)


HOLA DEVOPS
Demo: despliegue continuo a Cloud Run sirviendo una app React estática con NGINX.

## Diagrama (Mermaid)
```mermaid
---
config:
  theme: neo
  look: handDrawn
---
flowchart TB
  subgraph subGraph0["GitHub Actions Pipeline"]
        C["🔄 GitHub Actions Workflow"]
        D["🧪 Run Tests"]
        E["🔨 Build Docker Image"]
        F["🔍 Scan Image (Trivy)"]
        G["🏷️ Tag & Push to Registry"]
        H["☁️ Deploy to Cloud Run"]
  end

  subgraph subGraph1["Google Cloud Platform"]
        I["🐳 Container Registry"]
        J["🚀 Cloud Run Service"]
        K["🌐 Public URL"]
  end

  A["👨‍💻 Developer"] -- git push --> B["📁 GitHub Repository"]
  B --> C
  C --> D
  D --> E
  E --> F
  F --> G
  C --> H
  G --> I
  H --> J
  J --> K
  L["👥 Users"] -- HTTPS requests --> K

```

### Combinación de Google Cloud Run + GitHub Actions + Mermaid ofrece:

* Menores costos operativos gracias al modelo serverless de Cloud Run
* Automatización y seguridad en despliegues con GitHub Actions.
* Documentación viva y clara con Mermaid.

En un mundo donde la velocidad de entrega y la eficiencia económica son claves, esta tríada se convierte en un estándar recomendado para cualquier equipo DevOps moderno.
