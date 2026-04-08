// Componentes A-Frame
AFRAME.registerComponent('auto-rotate', {
  schema: {
    enabled: { type: 'boolean', default: false },
    speed: { type: 'number', default: 0.025 }
  },
  tick: function () {
    if (!this.data.enabled) { return; }
    this.el.object3D.rotation.y += this.data.speed;
  }
});
