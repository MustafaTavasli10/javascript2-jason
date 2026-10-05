const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted


const score = scores.filter(score => score > 50);
document.getElementById('result-filtered').textContent = score.map(score => score).join(', ');

const verdubbeldeScores = scores.map(score => score * 2);
document.getElementById('result-map').textContent = verdubbeldeScores.join(', ');

const gesorteerdeScores = scores.slice().sort((a, b) => a - b);
document.getElementById('result-sorted').textContent = gesorteerdeScores.join(', ');