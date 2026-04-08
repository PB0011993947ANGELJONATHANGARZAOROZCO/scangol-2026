// Datos: países, mundial, videos, trivia
const countryData = {
  argentina: { name: "Argentina", info: `
    <p>Mejor Jugador Actual: Lionel Messi
    Otros Destacados: Julián Álvarez, Emiliano Martínez
    Mejores Equipos: River Plate, Boca Juniors, Estudiantes</p>` },
  mexico: { name: "México", info: `
    <p>Mejor Participación: Cuartos de Final
    <p>Mejor Jugador Actual: Edson Álvarez
    <p>Otros Destacados: Santiago Giménez, Guillermo Ochoa</p>
    <p>Mejores Equipos: América, Chivas, Monterrey</p>` },
  brasil: { name: "Brasil", info: `
    <p>Mejor Jugador Actual: Vinicius Jr.</p>
    <p>Otros Destacados: Rodrygo, Marquinhos</p>
    <p>Mejores Equipos: Flamengo, Palmeiras, São Paulo</p>` },
  canada: { name: "Canadá", info: `
    <p>Mejor Participación: Fase de Grupos (1986, 2022)</p>
    <p>Mejor Jugador Actual: Alphonso Davies</p>
    <p>Otros Destacados: Jonathan David, Tajon Buchanan</p>
    <p>Mejores Equipos: Toronto FC, CF Montréal, Vancouver Whitecaps</p>` },
  ecuador: { name: "Ecuador", info: `
    <p>Mejor Participación: Octavos de Final (2006)</p>
    <p>Mejor Jugador Actual: Moisés Caicedo</p>
    <p>Otros Destacados: Piero Hincapié, Enner Valencia</p>
    <p>Mejores Equipos: Barcelona SC, Emelec, Independiente del Valle</p>` },
  colombia: { name: "Colombia", info: `
    <p>Mejor Participación: Cuartos de Final (2014)</p>
    <p>Mejor Jugador Actual: Luis Díaz</p>
    <p>Otros Destacados: James Rodríguez, Davinson Sánchez</p>
    <p>Mejores Equipos: Atlético Nacional, Millonarios, América de Cali</p>` },
  australia: { name: "Australia", info: `
    <p>Mejor Participación: Octavos de Final (2006, 2022)</p>
    <p>Mejor Jugador Actual: Harry Souttar</p>
    <p>Otros Destacados: Mathew Ryan, Ajdin Hrustic</p>
    <p>Mejores Equipos: Sydney FC, Melbourne Victory, Western Sydney Wanderers</p>` },
  espana: { name: "España", info: `
    <p>Campeón Mundial: 2010</p>
    <p>Mejor Jugador Actual: Rodri</p>
    <p>Otros Destacados: Pedri, Lamine Yamal</p>
    <p>Mejores Equipos: Real Madrid, Barcelona</p>` },
  alemania: { name: "Alemania", info: `
    <p>Campeón Mundial: 1954, 1974, 1990, 2014</p>
    <p>Mejor Jugador Actual: Jamal Musiala</p>
    <p>Otros Destacados: Florian Wirtz, Joshua Kimmich</p>
    <p>Mejores Equipos: Bayern Munich, Borussia Dortmund</p>` },
  francia: { name: "Francia", info: `
    <p>Campeón Mundial: 1998, 2018</p>
    <p>Mejor Jugador Actual: Kylian Mbappé</p>
    <p>Otros Destacados: Antoine Griezmann, William Saliba</p>
    <p>Mejores Equipos: PSG, Marsella</p>` }
};

const worldCup2026 = [
  { pais: "Argentina", confederacion: "CONMEBOL", mundiales: 3, puntos: 1, info: "Ranking FIFA: 1" },
  { pais: "Francia", confederacion: "UEFA", mundiales: 2, puntos: 2, info: "Ranking FIFA: 2" },
  { pais: "Brasil", confederacion: "CONMEBOL", mundiales: 5, puntos: 5, info: "Ranking FIFA: 5" },
  { pais: "España", confederacion: "UEFA", mundiales: 1, puntos: 8, info: "Ranking FIFA: 8" },
  { pais: "Colombia", confederacion: "CONMEBOL", mundiales: 0, puntos: 12, info: "Ranking FIFA: 12" },
  { pais: "México", confederacion: "CONCACAF", mundiales: 0, puntos: 14, info: "Ranking FIFA: 14" },
  { pais: "Alemania", confederacion: "UEFA", mundiales: 4, puntos: 16, info: "Ranking FIFA: 16" },
  { pais: "Australia",  confederacion: "AFC", mundiales: 0, puntos: 24, info: "Ranking FIFA: 24" },
  { pais: "Ecuador", confederacion: "CONMEBOL", mundiales: 0, puntos: 31, info: "Ranking FIFA: 31" },
  { pais: "Canadá", confederacion: "CONCACAF", mundiales: 0, puntos: 49, info: "Ranking FIFA: 49" }
];

const videos = [
  "assets/videos/brasil.mp4",
  "assets/videos/usa.mp4",
  "assets/videos/argentina.mp4",
  "assets/videos/can-belgi.mp4",
  "assets/videos/colombia-japan.mp4",
  "assets/videos/england-iran.mp4",
  "assets/videos/jordan-qatar.mp4",
  "assets/videos/morocco-koreas.mp4",
  "assets/videos/newzealand.mp4",
  "assets/videos/tunez-australia.mp4",
  "assets/videos/uzbekistan-uruguay.mp4",
  "assets/videos/paraguay.mp4"
];

const triviaData = [
  { question: "¿Cuántas selecciones participarán en el Mundial 2026?", options: ["32", "40", "48"], answer: "48" },
  { question: "¿Qué país ha ganado más Copas del Mundo?", options: ["Alemania", "Brasil", "Argentina"], answer: "Brasil" },
  { question: "¿En qué año ganó España su único Mundial?", options: ["2006", "2010", "2014"], answer: "2010" },
  { question: "¿Quién es el actual campeón del mundo (2022)?", options: ["Francia", "Argentina", "Brasil"], answer: "Argentina" },
  { question: "¿Cuántas veces México ha organizado un Mundial antes de 2026?", options: ["1", "2", "3"], answer: "2" },
  { question: "¿Qué jugador colombiano ganó la Bota de Oro en 2014?", options: ["Falcao", "James Rodríguez", "Luis Díaz"], answer: "James Rodríguez" },
  { question: "¿Cuál es el apodo de la selección de Australia?", options: ["All Blacks", "Socceroos", "Wallabies"], answer: "Socceroos" },
  { question: "¿Contra quién jugó Francia la final del Mundial 2018?", options: ["Croacia", "Argentina", "Alemania"], answer: "Croacia" }
];
