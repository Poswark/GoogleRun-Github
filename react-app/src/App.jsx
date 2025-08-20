// src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import mermaid from "mermaid";

const IMAGE_PATH = "/gif.gif";

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const mermaidRef = useRef(null);

  // Inicializar Mermaid al renderizar
  useEffect(() => {
    if (mermaidRef.current) {
      mermaid.initialize({ startOnLoad: true, theme: "default" });
      mermaid.contentLoaded();
    }
  }, []);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        GitHub Actions 🚀 + Google Cloud Run
      </h1>

      {/* Imagen con loader */}
      <div className="relative w-full max-w-3xl">
        {!imageLoaded && !imageError && (
          <div className="flex items-center justify-center w-full h-64 bg-gray-200 rounded-lg animate-pulse">
            <p className="text-gray-500">Cargando imagen...</p>
          </div>
        )}

        {!imageError && (
          <img
            src={IMAGE_PATH}
            alt="GitHub Actions + Cloud Run Workflow"
            className={`w-full h-auto rounded-lg shadow-lg transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {imageError && (
          <div className="flex items-center justify-center w-full h-64 bg-red-100 rounded-lg">
            <p className="text-red-600">⚠️ Error al cargar el GIF</p>
          </div>
        )}
      </div>

      <div className="my-6"></div>




      {/* Texto descriptivo */}
      <p className="mt-6 text-gray-700 text-center max-w-xl">
        Este flujo representa el CI/CD con <strong>GitHub Actions</strong> y
        despliegue automático en <strong>Google Cloud Run</strong>.
      </p>

      
    </div>
  );
}

export default App;