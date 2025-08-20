
# React + GitHub Actions → Cloud Run

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
