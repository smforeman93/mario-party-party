const CHARACTERS = {
  birdo: 'Birdo',
  blooper: 'Blooper',
  blue_toad: 'Blue Toad',
  boo: 'Boo',
  bowser: 'Bowser',
  bowser_jr: 'Bowser Jr.',
  daisy: 'Daisy',
  diddy_kong: 'Diddy Kong',
  donkey_kong: 'Donkey Kong',
  dry_bones: 'Dry Bones',
  goomba: 'Goomba',
  green_toad: 'Green Toad',
  hammer_bro: 'Hammer Bro',
  kamek: 'Kamek',
  koopa_kid: 'Koopa Kid',
  koopa_troopa: 'Koopa Troopa',
  luigi: 'Luigi',
  mario: 'Mario',
  mii: 'Mii',
  monty_mole: 'Monty Mole',
  peach: 'Peach',
  pom_pom: 'Pom Pom',
  red_toad: 'Red Toad',
  rosalina: 'Rosalina',
  shy_guy: 'Shy Guy',
  spike: 'Spike',
  toad: 'Toad',
  toadette: 'Toadette',
  waluigi: 'Waluigi',
  wario: 'Wario',
  yellow_toad: 'Yellow Toad',
  yoshi: 'Yoshi',
}

const SYSTEMS = {
  n64: 'Nintendo 64',
  gc: 'GameCube',
  wii: 'Wii',
  wiiu: 'Wii U',
  ds: 'Nintendo DS',
  ds3: 'Nintendo 3DS',
  switch: 'Nintendo Switch',
}

const GAMES = [
  {
    name: 'Mario Party',
    id: 'mp1',
    systems: [
      SYSTEMS.n64,
      SYSTEMS.switch,
    ],
    max_players: 6,
    characters: [
      {
        name: CHARACTERS.mario,
        unlockable: false
      },
      {
        name: CHARACTERS.luigi,
        unlockable: false
      },
      {
        name: CHARACTERS.peach,
        unlockable: false
      },
      {
        name: CHARACTERS.wario,
        unlockable: false
      },
      {
        name: CHARACTERS.yoshi,
        unlockable: false
      },
      {
        name: CHARACTERS.donkey_kong,
        unlockable: false
      },
    ],
    boards: [
      {
        name: 'DK\'s Jungle Adventure',
        difficulty: 1,
        unlockable: false,
      },
      {
        name: 'Peach\'s Birthday Cake',
        difficulty: 2,
        unlockable: false,
      },
      {
        name: 'Yoshi\'s Tropical Island',
        difficulty: 2,
        unlockable: false,
      },
      {
        name: 'Luigi\'s Engine Room',
        difficulty: 3,
        unlockable: false,
      },
      {
        name: 'Mario\'s Rainbow Castle',
        difficulty: 1,
        unlockable: false,
      },
      {
        name: 'Bowser\'s Magma Mountain',
        difficulty: 3,
        unlockable: false,
      },
      {
        name: 'Eternal Star',
        difficulty: 3,
        unlockable: true,
      },
    ]
  },
  {
    name: 'Mario Party 2',
    id: 'mp2',
    systems: [
      SYSTEMS.n64,
      SYSTEMS.wii,
      SYSTEMS.wiiu,
      SYSTEMS.switch,
    ],
    max_players: 4,
    characters: [
      {
        name: CHARACTERS.mario,
        unlockable: false
      },
      {
        name: CHARACTERS.luigi,
        unlockable: false
      },
      {
        name: CHARACTERS.peach,
        unlockable: false
      },
      {
        name: CHARACTERS.wario,
        unlockable: false
      },
      {
        name: CHARACTERS.yoshi,
        unlockable: false
      },
      {
        name: CHARACTERS.donkey_kong,
        unlockable: false
      },
    ],
    boards: [
      {
        name: 'Pirate Land',
        difficulty: 1,
        unlockable: false,
      },
      {
        name: 'Western Land',
        difficulty: 1,
        unlockable: false,
      },
      {
        name: 'Space Land',
        difficulty: 2,
        unlockable: false,
      },
      {
        name: 'Mystery Land',
        difficulty: 2,
        unlockable: false,
      },
      {
        name: 'Horror Land',
        difficulty: 3,
        unlockable: false,
      },
      {
        name: 'Bowser Land',
        difficulty: 3,
        unlockable: true,
      },
    ]
  },
  {
    name: 'Mario Party 3',
    id: 'mp3',
    systems: [
      SYSTEMS.n64,
      SYSTEMS.switch,
    ],
    max_players: 4,
    characters: [
      {
        name: CHARACTERS.mario,
        unlockable: false,
      },
      {
        name: CHARACTERS.luigi,
        unlockable: false,
      },
      {
        name: CHARACTERS.peach,
        unlockable: false,
      },
      {
        name: CHARACTERS.wario,
        unlockable: false,
      },
      {
        name: CHARACTERS.yoshi,
        unlockable: false,
      },
      {
        name: CHARACTERS.donkey_kong,
        unlockable: false,
      },
      {
        name: CHARACTERS.daisy,
        unlockable: false,
      },
      {
        name: CHARACTERS.waluigi,
        unlockable: false,
      }
    ],
    boards: [
      {
        name: 'Chilly Waters',
        difficulty: 1,
        unlockable: false,
      },
      {
        name: 'Deep Blooper Sea',
        difficulty: 1,
        unlockable: false,
      },
      {
        name: 'Spiny Desert',
        difficulty: 2,
        unlockable: false,
      },
      {
        name: 'Woody Woods',
        difficulty: 2,
        unlockable: false,
      },
      {
        name: 'Creepy Cavern',
        difficulty: 3,
        unlockable: false,
      },
      {
        name: 'Waluigi\'s Island',
        difficulty: 3,
        unlockable: true,
      },
    ]
  },
  {
    name: 'Mario Party 4',
    id: 'mp4',
    systems: [
      SYSTEMS.gc,
      SYSTEMS.wii,
    ],
    max_players: 4,
    characters: [
      {
        name: CHARACTERS.mario,
        unlockable: false,
      },
      {
        name: CHARACTERS.luigi,
        unlockable: false,
      },
      {
        name: CHARACTERS.peach,
        unlockable: false,
      },
      {
        name: CHARACTERS.wario,
        unlockable: false,
      },
      {
        name: CHARACTERS.yoshi,
        unlockable: false,
      },
      {
        name: CHARACTERS.donkey_kong,
        unlockable: false,
      },
      {
        name: CHARACTERS.daisy,
        unlockable: false,
      },
      {
        name: CHARACTERS.waluigi,
        unlockable: false,
      }
    ],
    boards: [
      {
        name: 'Toad\'s Midway Madness',
        difficulty: 1,
        unlockable: false,
      },
      {
        name: 'Shy Guy\'s Jungle Jam',
        difficulty: 1,
        unlockable: false,
      },
      {
        name: 'Goomba\'s Greedy Gala',
        difficulty: 2,
        unlockable: false,
      },
      {
        name: 'Boo\'s Haunted Bash',
        difficulty: 2,
        unlockable: false,
      },
      {
        name: 'Koopa\'s Seaside Soiree',
        difficulty: 2,
        unlockable: false,
      },
      {
        name: 'Bowser\'s Gnarly Party',
        difficulty: 3,
        unlockable: true,
      },
    ]
  },
  {
    name: 'Mario Party 5',
    id: 'mp5',
    systems: [
      SYSTEMS.gc,
      SYSTEMS.wii,
    ],
    max_players: 4,
    characters: [
      {
        name: CHARACTERS.mario,
        unlockable: false,
      },
      {
        name: CHARACTERS.luigi,
        unlockable: false,
      },
      {
        name: CHARACTERS.peach,
        unlockable: false,
      },
      {
        name: CHARACTERS.wario,
        unlockable: false,
      },
      {
        name: CHARACTERS.yoshi,
        unlockable: false,
      },
      {
        name: CHARACTERS.daisy,
        unlockable: false,
      },
      {
        name: CHARACTERS.waluigi,
        unlockable: false,
      },
      {
        name: CHARACTERS.toad,
        unlockable: false,
      },
      {
        name: CHARACTERS.boo,
        unlockable: false,
      },
      {
        name: CHARACTERS.koopa_kid,
        unlockable: false,
      },
    ],
    boards: [
      {
        name: 'Toy Dream',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Rainbow Dream',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Pirate Dream',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Undersea Dream',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Future Dream',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Sweet Dream',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Bowser Nightmare',
        difficulty: -1,
        unlockable: true,
      },
    ],
    teams: [
      {
        name: 'Mario Bros.',
        characters: [
          CHARACTERS.mario,
          CHARACTERS.luigi,
        ]
      },
      {
        name: 'Cutest Couple',
        characters: [
          CHARACTERS.mario,
          CHARACTERS.peach,
        ]
      },
      {
        name: 'Nice Couple',
        characters: [
          CHARACTERS.mario,
          CHARACTERS.daisy,
        ]
      },
      {
        name: 'Famous Combo',
        characters: [
          CHARACTERS.mario,
          CHARACTERS.yoshi,
        ]
      },
      {
        name: 'Alter Egos',
        characters: [
          CHARACTERS.mario,
          CHARACTERS.wario,
        ]
      },
      {
        name: 'Pseudo Bros.',
        characters: [
          CHARACTERS.mario,
          CHARACTERS.waluigi,
        ]
      },
      {
        name: 'Best Buds',
        characters: [
          CHARACTERS.mario,
          CHARACTERS.toad,
        ]
      },
      {
        name: 'Old Acquaintances',
        characters: [
          CHARACTERS.mario,
          CHARACTERS.boo,
        ]
      },
      {
        name: 'Uneasy Allies',
        characters: [
          CHARACTERS.mario,
          CHARACTERS.koopa_kid,
        ]
      },
    ]
  },
  {
    name: 'Mario Party 6',
    id: 'mp6',
    systems: [
      SYSTEMS.gc,
      SYSTEMS.wii,
    ],
    max_players: 4,
    characters: [
      {
        name: CHARACTERS.mario,
        unlockable: false,
      },
      {
        name: CHARACTERS.luigi,
        unlockable: false,
      },
      {
        name: CHARACTERS.peach,
        unlockable: false,
      },
      {
        name: CHARACTERS.wario,
        unlockable: false,
      },
      {
        name: CHARACTERS.yoshi,
        unlockable: false,
      },
      {
        name: CHARACTERS.daisy,
        unlockable: false,
      },
      {
        name: CHARACTERS.waluigi,
        unlockable: false,
      },
      {
        name: CHARACTERS.toad,
        unlockable: false,
      },
      {
        name: CHARACTERS.boo,
        unlockable: false,
      },
      {
        name: CHARACTERS.koopa_kid,
        unlockable: false,
      },
      {
        name: CHARACTERS.toadette,
        unlockable: true,
      }
    ],
    boards: [
      {
        name: 'Towering Treetop',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'E. Gadd\'s Garage',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Faire Square',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Snowflake Lake',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Castaway Bay',
        difficulty: -1,
        unlockable: false,
      },
      {
        name: 'Clockwork Castle',
        difficulty: -1,
        unlockable: true,
      },
    ]
  },
]

export default GAMES;