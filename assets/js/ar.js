// Lógica AR
window.createARScene = function() {
  // Seguridad file://
  if (window.location.protocol === 'file:') {
    alert('ERROR: Usa un servidor local (http) para que funcione la AR.');
    return;
  }

  const arContainer = document.getElementById('ar-container');
  arContainer.classList.add('active');

  arContainer.innerHTML = `
        <a-scene mindar-image="imageTargetSrc: assets/targets/targets.mind; autoStart: true; uiLoading: yes; uiScanning: no;" 
                 color-space="sRGB" 
                 renderer="colorManagement: true; preserveDrawingBuffer: true; alpha: true;" vr-mode-ui="enabled: false"
                 device-orientation-permission-ui="enabled: false">
          
          <a-assets timeout="10000">
            <!-- 1. Mexico -->
            <a-asset-item id="model-mexico" src="assets/modelos/mexico/scene.glb"></a-asset-item>
            <!-- 2. Brasil -->
            <a-asset-item id="model-brasil" src="assets/modelos/brasilao/scene.glb"></a-asset-item>
            <!-- 3. Argentina -->
            <a-asset-item id="model-argentina" src="assets/modelos/argentina/scene.glb"></a-asset-item>
            <!-- 4. Ecuador -->
            <a-asset-item id="model-ecuador" src="assets/modelos/ecuador/scene.glb"></a-asset-item>
            <!-- 5. Colombia -->
            <a-asset-item id="model-colombia" src="assets/modelos/colombia/scene.glb"></a-asset-item>
            <!-- 6. España (NUEVO) -->
            <a-asset-item id="model-espana" src="assets/modelos/espana/scene.glb"></a-asset-item>
            <!-- 7. Alemania (NUEVO) -->
            <a-asset-item id="model-alemania" src="assets/modelos/alemania/scene.glb"></a-asset-item>
            <!-- 8. Francia (NUEVO) -->
            <a-asset-item id="model-francia" src="assets/modelos/francia/scene.glb"></a-asset-item>
            <!-- 9. Australia -->
            <a-asset-item id="model-australia" src="assets/modelos/australia/scene.glb"></a-asset-item>
            <!-- 10. Canada -->
            <a-asset-item id="model-canada" src="assets/modelos/canada/scene.glb"></a-asset-item>
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <!-- 1. MEXICO (Indices 0, 1) -->
          <a-entity mindar-image-target="targetIndex: 0" data-country="mexico">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-mexico" scale="0.12 0.12 0.12" position="0 0.3 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 1" data-country="mexico">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-mexico" scale="0.12 0.12 0.12" position="0 0.3 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

          <!-- 2. BRASIL (Indices 2, 3) -->
          <a-entity mindar-image-target="targetIndex: 2" data-country="brasil">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-brasil" scale="0.2 0.2 0.2" position="0 0.35 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 3" data-country="brasil">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-brasil" scale="0.2 0.2 0.2" position="0 0.35 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

          <!-- 3. ARGENTINA (Indices 4, 5) -->
          <a-entity mindar-image-target="targetIndex: 4" data-country="argentina">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-argentina" scale="0.5 0.5 0.5" position="0 0.3 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 5" data-country="argentina">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-argentina" scale="0.5 0.5 0.5" position="0 0.3 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

          <!-- 4. ECUADOR (Indices 6, 7) -->
          <a-entity mindar-image-target="targetIndex: 6" data-country="ecuador">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-ecuador" scale="0.5 0.5 0.5" position="0 0.4 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 7" data-country="ecuador">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-ecuador" scale="0.5 0.5 0.5" position="0 0.4 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

          <!-- 5. COLOMBIA (Indices 8, 9) -->
          <a-entity mindar-image-target="targetIndex: 8" data-country="colombia">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-colombia" scale="0.12 0.12 0.12" position="0 0.38 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 9" data-country="colombia">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-colombia" scale="0.12 0.12 0.12" position="0 0.38 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

          <!-- 6. ESPAÑA (Indices 10, 11) -->
          <a-entity mindar-image-target="targetIndex: 10" data-country="espana">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-espana" scale="0.1 0.1 0.1" position="0 0 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 11" data-country="espana">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-espana" scale="0.1 0.1 0.1" position="0 0 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

          <!-- 7. ALEMANIA (Indices 12, 13) -->
          <a-entity mindar-image-target="targetIndex: 12" data-country="alemania">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-alemania" scale="0.1 0.1 0.1" position="0 0 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 13" data-country="alemania">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-alemania" scale="0.1 0.1 0.1" position="0 0 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

          <!-- 8. FRANCIA (Indices 14, 15) -->
          <a-entity mindar-image-target="targetIndex: 14" data-country="francia">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-francia" scale="0.1 0.1 0.1" position="0 0 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 15" data-country="francia">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-francia" scale="0.1 0.1 0.1" position="0 0 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

          <!-- 9. AUSTRALIA (Indices 16, 17) -->
          <a-entity mindar-image-target="targetIndex: 16" data-country="australia">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-australia" scale="0.15 0.15 0.15" position="0 0.4 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 17" data-country="australia">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-australia" scale="0.15 0.15 0.15" position="0 0.4 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

          <!-- 10. CANADA (Indices 18, 19) -->
          <a-entity mindar-image-target="targetIndex: 18" data-country="canada">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-canada" scale="0.35 0.35 0.35" position="0 0.4 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 19" data-country="canada">
            <a-entity class="model-wrapper" auto-rotate="enabled: false;">
              <a-gltf-model src="#model-canada" scale="0.35 0.35 0.35" position="0 0.4 0" visible="false"></a-gltf-model>
            </a-entity>
          </a-entity>

        </a-scene>
  `;

  // Manejo de errores
  const scene = arContainer.querySelector('a-scene');
  if (scene) {
    scene.addEventListener('arError', (event) => {
      alert('Error AR: ' + (event.detail.error || 'Verifica conexión/https'));
    });
  }
};

window.initARLogic = function() {
  const targets = document.querySelectorAll('[mindar-image-target]');
  const backBtn = document.getElementById('backBtn');
  const buttonsPanel = document.getElementById('buttons-panel');
  
  window.isARLocked = false;

  if (backBtn) backBtn.style.display = 'block';

  targets.forEach(target => {
    target.addEventListener('targetFound', event => {
      const country = event.target.dataset.country;

      // Reactivar si ya está bloqueado en el mismo país
      if (window.isARLocked) {
        if (window.currentCountry === country) {
           const model = event.target.querySelector('a-gltf-model');
           if (model) model.setAttribute('visible', 'true');
        }
        return; 
      }

      // Bloquear
      window.isARLocked = true;
      window.currentCountry = country;
      window.activeTargetEntity = event.target;

      const model = event.target.querySelector('a-gltf-model');
      if (model) model.setAttribute('visible','true');

      if (buttonsPanel) buttonsPanel.style.display = 'flex';
      if (window.showInfo) window.showInfo(country);
    });

    target.addEventListener('targetLost', event => {
      // Ocultar modelo
      const model = event.target.querySelector('a-gltf-model');
      const modelWrapper = event.target.querySelector('.model-wrapper');
      if (model) {
        model.setAttribute('visible','false');
        model.removeAttribute('animation-mixer');
      }
      if (modelWrapper) {
        modelWrapper.setAttribute('auto-rotate','enabled: false');
        modelWrapper.setAttribute('rotation','0 0 0');
      }

      // Si está bloqueado, mantener interfaz
      if (window.isARLocked) return;

      window.currentCountry = null;
      window.activeTargetEntity = null;
      if (buttonsPanel) buttonsPanel.style.display = 'none';
      const infoBox = document.getElementById('infoBox'); if (infoBox) infoBox.style.display = 'none';
    });
  });
};

window.animaModel = function(targetEntity) {
  if (!targetEntity) return;
  const modelWrapper = targetEntity.querySelector('.model-wrapper');
  const modelEl = targetEntity.querySelector('a-gltf-model');
  if (!modelEl || !modelWrapper) return;

  if (modelEl.hasLoaded) {
    window.checkAndPlayAnimation(modelEl, modelWrapper);
  } else {
    modelEl.addEventListener('model-loaded', function onModelLoaded() {
      window.checkAndPlayAnimation(modelEl, modelWrapper);
    }, { once: true });
  }
};

window.checkAndPlayAnimation = function(modelEl, modelWrapper) {
  const gltfData = modelEl.components && modelEl.components['gltf-model'] && modelEl.components['gltf-model'].model;
  if (gltfData && gltfData.animations && gltfData.animations.length > 0) {
    modelWrapper.setAttribute('auto-rotate', 'enabled: false');
    modelEl.setAttribute('animation-mixer', { clip: '*', loop: 'repeat' });
  } else {
    modelEl.removeAttribute('animation-mixer');
    modelWrapper.setAttribute('auto-rotate', 'enabled: true');
  }
};
