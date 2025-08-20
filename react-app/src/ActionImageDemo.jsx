import React, { useState } from 'react';

const IMAGE_PATH = "/gif.gif";

function ActionImageDemo() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        GitHub Actions 🚀 + Google Cloud Run
      </h1>

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
              imageLoaded ? 'opacity-100' : 'opacity-0'
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
    </div>
  );
}

export default ActionImageDemo;