import { ImageSourcePropType } from "react-native/types";

interface Specs {name:string, URL: string}

interface Class {
    name: string,
    image: ImageSourcePropType,
    URL: string,
    specs: Specs[]
}

export const classes: Class[] = [
  {
    image: require('../images/Classes/warrior.webp'),
    name: 'Warrior',
    URL: 'warrior',
    specs: [
      { name: 'Arms', URL: 'arms' },
      { name: 'Fury', URL: 'fury' },
      { name: 'Protection', URL: 'protection' },
    ],
  },
  {
    image: require('../images/Classes/paladin.jpg'),
    name: 'Paladin',
    URL: 'paladin',
    specs: [
      { name: 'Holy', URL: 'holy' },
      { name: 'Protection', URL: 'protection' },
      { name: 'Retribution', URL: 'retribution' },
    ],
  },
  {
    image: require('../images/Classes/hunter.webp'),
    name: 'Hunter',
    URL: 'hunter',
    specs: [
      { name: 'Beast Mastery', URL: 'beast-mastery' },
      { name: 'Marksmanship', URL: 'marksmanship' },
      { name: 'Survival', URL: 'survival' },
    ],
  },
  {
    image: require('../images/Classes/rogue.jpg'),
    name: 'Rogue',
    URL: 'rogue',
    specs: [
      { name: 'Assassination', URL: 'assassination' },
      { name: 'Outlaw', URL: 'outlaw' },
      { name: 'Subtlety', URL: 'subtlety' },
    ],
  },
  {
    image: require('../images/Classes/priest.webp'),
    name: 'Priest',
    URL: 'priest',
    specs: [
      { name: 'Discipline', URL: 'discipline' },
      { name: 'Holy', URL: 'holy' },
      { name: 'Shadow', URL: 'shadow' },
    ],
  },
  {
    image: require('../images/Classes/deathknight.webp'),
    name: 'Death Knight',
    URL: 'death-knight',
    specs: [
      { name: 'Blood', URL: 'blood' },
      { name: 'Frost', URL: 'frost' },
      { name: 'Unholy', URL: 'unholy' },
    ],
  },
  {
    image: require('../images/Classes/shaman.jpg'),
    name: 'Shaman',
    URL: 'shaman',
    specs: [
      { name: 'Elemental', URL: 'elemental' },
      { name: 'Enhancement', URL: 'enhancement' },
      { name: 'Restoration', URL: 'restoration' },
    ],
  },
  {
    image: require('../images/Classes/mage.jpg'),
    name: 'Mage',
    URL: 'mage',
    specs: [
      { name: 'Arcane', URL: 'arcane' },
      { name: 'Fire', URL: 'fire' },
      { name: 'Frost', URL: 'frost' },
    ],
  },
  {
    image: require('../images/Classes/warlock.jpg'),
    name: 'Warlock',
    URL: 'warlock',
    specs: [
      { name: 'Affliction', URL: 'affliction' },
      { name: 'Demonology', URL: 'demonology' },
      { name: 'Destruction', URL: 'destruction' },
    ],
  },
  {
    image: require('../images/Classes/monk.jpg'),
    name: 'Monk',
    URL: 'monk',
    specs: [
      { name: 'Brewmaster', URL: 'brewmaster' },
      { name: 'Mistweaver', URL: 'mistweaver' },
      { name: 'Windwalker', URL: 'windwalker' },
    ],
  },
  {
    image: require('../images/Classes/druid.jpg'),
    name: 'Druid',
    URL: 'druid',
    specs: [
      { name: 'Balance', URL: 'balance' },
      { name: 'Feral', URL: 'feral' },
      { name: 'Guardian', URL: 'guardian' },
      { name: 'Restoration', URL: 'restoration' },
    ],
  },
  {
    image: require('../images/Classes/demonhunter.jpg'),
    name: 'Demon Hunter',
    URL: 'demon-hunter',
    specs: [
      { name: 'Havoc', URL: 'havoc' },
      { name: 'Vengeance', URL: 'vengeance' },
    ],
  },
];