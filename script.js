const creatureID = document.getElementById('creature-id');
const creatureName = document.getElementById('creature-name');
const specialName = document.getElementById('special-name');
const specialDescription = document.getElementById('special-description');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


// Récupérer l'API de FreeCodeCamp
const getCreature = async () => {
  try {
    const creatureNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrId}`
    );
    const data = await response.json();


// Toutes les données de la créature
    creatureName.textContent = `${data.name.toUpperCase()}`;
    creatureID.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    specialName.textContent = data.special.name;
    specialDescription.textContent = data.special.description;

    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    types.innerHTML = data.types
      .map(obj => `<span class="type ${obj.name}">${obj.name}</span>`)
      .join('');
  } catch (err) {
    resetDisplay();
    alert('Creature not found');
    console.log(`Creature not found: ${err}`);
    document.dispatchEvent(new Event('creatureNotFound'));
  }
};

// Activer la recherche avec le bouton "Search"
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  getCreature();
});

// Reset la page quand le bouton est cliqué
    const resetDisplay = () => {
    document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('search-form').reset();
    document.getElementById('creature-name').textContent = '';
    document.getElementById('creature-id').textContent = '';
    document.getElementById('weight').textContent = '';
    document.getElementById('height').textContent = '';
    document.getElementById('types').textContent = '';
    document.getElementById('special-name').textContent = '';
    document.getElementById('special-description').textContent = '';
    document.getElementById('hp').textContent = '';
    document.getElementById('attack').textContent = '';
    document.getElementById('defense').textContent = '';
    document.getElementById('special-attack').textContent = '';
    document.getElementById('special-defense').textContent = '';
    document.getElementById('speed').textContent = '';
});
    }
