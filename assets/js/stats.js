// Stats UI
window.crearTablaConfederacion = function(confederacion, titulo, colorClass) {
  const equiposFiltrados = worldCup2026.filter(team => team.confederacion === confederacion);
  
  // Si no hay equipos en esta confederación, no mostramos la tabla vacía
  if (equiposFiltrados.length === 0) return '';

  // Ordenar por Ranking FIFA (menor es mejor)
  equiposFiltrados.sort((a, b) => (a.puntos || 999) - (b.puntos || 999));

  const tableRows = equiposFiltrados.map(team => `<tr><td>${team.pais}</td><td>${team.mundiales}</td><td>#${team.puntos || '-'}</td></tr>`).join('');
  return `<div class="confederacion-table ${colorClass}"><h3>${titulo}</h3><table><tr><th>País</th><th>Títulos</th><th>Ranking FIFA</th></tr>${tableRows}</table></div>`;
};

window.showStats = function() {
  if (window.hideAll) window.hideAll();
  const statsBox = document.getElementById('statsBox');
  const statsContent = document.getElementById('statsContent');
  statsContent.innerHTML = `<div class="tables-grid">
    ${window.crearTablaConfederacion('CONMEBOL', 'Sudamérica', 'conmebol')}
    ${window.crearTablaConfederacion('AFC', 'Asia', 'afc')}
    ${window.crearTablaConfederacion('UEFA', 'Europa', 'uefa')}
    ${window.crearTablaConfederacion('CAF', 'África', 'caf')}
    ${window.crearTablaConfederacion('CONCACAF', 'Norteamérica', 'concacaf')}
    ${window.crearTablaConfederacion('OFC', 'Oceanía', 'ofc')}
  </div>`;
  statsBox.style.display = 'block';
};
