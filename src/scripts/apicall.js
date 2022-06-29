async function loadNames() {
  const response = await fetch('https://headlessnh.test/series.json');
  const names = await response.json();
  console.log(names);
  // logs [{ name: 'Joker'}, { name: 'Batman' }]
}
loadNames();

console.log(reponse);
