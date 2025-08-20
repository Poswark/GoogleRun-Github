
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
        D["🧪 Run Tests"]
        C["🔄 GitHub Actions Workflow"]
        E["🔨 Build Docker Image"]
        F["🏷️ Tag & Push to Registry"]
        G["☁️ Deploy to Cloud Run"]
  end
 subgraph subGraph1["Google Cloud Platform"]
        H["🐳 Container Registry"]
        I["🚀 Cloud Run Service"]
        J["🌐 Public URL"]
  end
    A["👨‍💻 Developer"] -- git push --> B["📁 GitHub Repository"]
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G & H
    G --> I
    I --> J
    K["👥 Users"] -- HTTPS requests --> J
