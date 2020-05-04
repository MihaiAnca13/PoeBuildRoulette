activeSkills = [
  'Animate Weapon',
  'Artilery Ballista',
  'Barrage',
  'Bear Trap',
  'Blade Blast',
  'Blade Flurry',
  'Blade Vortex',
  'Bladefall',
  'Blast Rain',
  'Burning Arrow',
  'Caustic Arrow',
  'Charged Dash',
  'Cobra Lash',
  'Cremation',
  'Cyclone',
  'Desecrate',
  'Detonate Dead',
  'Double Strike',
  'Dual Strike',
  'Elemental Hit',
  'Ensnaring Arrow',
  'Ethereal Knives',
  'Explosive Arrow',
  'Explosive Trap',
  'Fire Trap',
  'Flamethrower Trap',
  'Flicker Strike',
  'Frenzy',
  'Frost Blades',
  'Galvanic Arrow',
  'Herald of Agony',
  'Ice Shot',
  'Ice Trap',
  'Lacerate',
  'Lancing Steel',
  'Lightning Arrow',
  'Lightning Strike',
  'Mirror Arrow',
  'Pestilent Strike',
  'Puncture',
  'Rain of Arrows',
  'Reave',
  'Riposte',
  'Scourge Arrow',
  'Seismic Trap',
  'Shattering Steel',
  'Sharpnel Ballista',
  'Siege Ballista',
  'Spectral Shield Throw',
  'Spectral Throw',
  'Split Arrow',
  'Summon Ice Golem',
  'Tornado Shot',
  'Toxic Rain',
  'Unearth',
  'Venom Gyre',
  'Viper Strike',
  'Volatile Dead',
  'Whirling Blades',
  'Wild Strike',
  'Abyssal Cry',
  'Ancestral Protector',
  'Ancestral Warchief',
  'Animate Guardian',
  'Bladestorm',
  'Chain Hook',
  'Cleave',
  'Consecrated Path',
  'Dominating Blow',
  'Earthquake',
  'Glacial Hammer',
  'Ground Slam',
  'Heavy Strike',
  'Herald of Purity',
  'Holy Flame Totem',
  'Ice Crash',
  'Infernal Blow',
  'Leap Slam',
  'Molten Strike',
  'Perforate',
  'Reckoning',
  'Searing Bond',
  'Shield Charge',
  'Shockwave Totem',
  'Smite',
  'Static Strike',
  'Summon Flame Golem',
  'Summon Stone Gomel',
  'Sunder',
  'Sweep',
  'Tectonic Slam',
  'Vengeance',
  'Vigilant Strike',
  'Arc',
  'Arctic Breath',
  'Armageddon Brand',
  'Ball Lightning',
  'Bane',
  'Blight',
  'Bodyswap',
  'Cold Snap',
  'Contagion',
  'Dark Pact',
  'Discharge',
  'Divine Ire',
  'Essence Drain',
  'Fireball',
  'Firestorm',
  'Flame Dash',
  'Flame Surge',
  'Flameblast',
  'Freezing Pulse',
  'Frost Bomb',
  'Frost Wall',
  'Frostblink',
  'Frostblolt',
  'Glacial Cascade',
  'Ice Nova',
  'Ice Spear',
  'Icicle Mine',
  'Incinerate',
  'Kinetic Blast',
  'Kinetic Bolt',
  'Lightning Spire Trap',
  'Lightning Tendrils',
  'Lightning Trap',
  'Lightning Warp',
  'Magma Orb',
  'Orb of Storms',
  'Power Siphon',
  'Purifying Flame',
  'Pyroclast Mine',
  'Raise Spectre',
  'Raise Zombie',
  'Righteous Fire',
  'Scorching Ray',
  'Shock Nova',
  'Siphoning Trap',
  'Soulrend',
  'Spark',
  'Spellslinger',
  'Storm Brand',
  'Storm Burst',
  'Storm Call',
  'Stormbind',
  'Stormblast Mine',
  'Summon Carrion Golem',
  'Summon Chaos Golem',
  'Summon Holy Relic',
  'Summon Lightning Golem',
  'Summon Raging Spirit',
  'Summon Skeletons',
  'Tempest Shield',
  'Vortex',
  'Wave of Conviction',
  'Winter Orb',
];

ascendancies = [
  'Slayer',
  'Gladiator',
  'Champion',
  'Assassin',
  'Saboteur',
  'Trickster',
  'Juggernaut',
  'Berserker',
  'Chieftain',
  'Necromancer',
  'Elementalist',
  'Occultist',
  'Deadeye',
  'Raider',
  'Pathfinder',
  'Inquisitor',
  'Hierophant',
  'Guardian',
  'Ascendant',
];

var rollSkillButton = document.querySelector('.roll-skill');
var rollAscendancyButton = document.querySelector('.roll-ascendancy');
var displaySkill = document.querySelector('.display-skill');
var displayAscendancy = document.querySelector('.display-ascendancy');

rollSkillButton.addEventListener('click', function () {
  var rollSkill = Math.floor(Math.random() * activeSkills.length);
  displaySkill.innerHTML = activeSkills[rollSkill];
});

rollAscendancyButton.addEventListener('click', function () {
  var rollAscendancy = Math.floor(Math.random() * ascendancies.length);
  displayAscendancy.innerHTML = ascendancies[rollAscendancy];
});
