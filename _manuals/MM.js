var MM = {
	// 456
	"Aarakocra": {
		name: "Aarakocra",
		source: ["Monster Manual", 12],
		size: "Medium",
		type: "humanoid (aarakocra)",
		alignment: "neutral good",
		ac: [12, "", false],
		hp: 13,
		hd: [3, 8],
		speed: "20 ft, fly 50 ft",
		scores: [10, 14, 10, 11, 12, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5",
		passive_perception: "15",
		languages: "Auran, Aarakocra",
		challenge_rating: "1/4",
		attacks: [{
			name: "Talon",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dive Attack",
			description: "If the aarakocra is flying and dives at least 30 ft straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target.",
		}
		],
		actions: [{
			name: "Summon Air Elemental",
			description: "Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it."
		}
		]
	},
	"Aboleth": {
		name: "Aboleth",
		source: ["Monster Manual", 13],
		size: "Large",
		type: "Aberration",
		alignment: "Lawful Evil",
		ac: [17, "", false],
		hp: 135,
		hd: [18, 10],
		speed: "10 ft, swim 40 ft",
		scores: [21, 9, 15, 18, 15, 18],
		saves: ["", "", 6, 8, 6, ""],
		skills: "History +12, Perception +10",
		senses: "Darkvision 120 ft",
		passive_perception: 20,
		languages: "Deep Speech, telepathy 120 ft.",
		challenge_rating: "10",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			dc: [14, "Con"],
			description: "If the target is a creature succeed (DC 14 Con) or become diseased. Disease has no effect for 1min and can be removed by any magic that cures disease. After 1min diseased creature's skin becomes translucent and slimy, creature can't regain HP unless underwater, disease can be removed only by heal or another disease-curing spell of 6th level or higher. When outside a body of water, it takes 6 (1d12) acid damage every 10min unless moisture is applied to the skin before 10 minutes have passed.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The aboleth can breathe air and water.",
		}, {
			name: "Mucous Cloud",
			description: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
		}, {
			name: "Probing Telepathy",
			description: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The aboleth makes three tentacle attacks.",
		}, {
			name: "Enslave (3/day)",
			description: [
				"The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.",
				"Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The aboleth makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Swipe",
			description: "The aboleth makes one tail attack.",
		}, {
			name: "Psychic Drain (Costs 2 Actions)",
			description: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
		}
		],
	},
	"Abominable Yeti": {
		name: "Abominable Yeti",
		source: ["Monster Manual", 306],
		size: "Huge",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 137,
		hd: [11, 12],
		speed: "40 ft, climb 40 ft",
		scores: [24, 10, 22, 9, 13, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +4",
		damage_immunities: "cold",
		senses: "darkvision 60 ft",
		passive_perception: "15",
		languages: "Yeti",
		challenge_rating: "9",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) cold damage.",
		}
		],
		traits: [{
			name: "Fear of Fire",
			description: "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
		}, {
			name: "Keen Smell",
			description: "The yeti has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Snow Camouflage",
			description: "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The yeti can use its Chilling Gaze and makes two claw attacks."
		}, {
			name: "Chilling Gaze",
			description: "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 18 Constitution saving throw against this magic or take 21 (6d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to this yeti's gaze for 1 hour."
		}, {
			name: "Cold Breath (Recharge 6)",
			description: "The yeti exhales a 30-foot cone of frigid air. Each creature in that area must make a DC 18 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.",
		}
		]
	},
	//Acererak
	"Acolyte": {
		name: "Acolyte",
		source: ["Monster Manual", 342],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [10, "", false],
		hp: 9,
		hd: [2, 8],
		speed: "30 ft",
		scores: [10, 10, 10, 10, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Medicine +4, Religion +2",
		passive_perception: 12,
		languages: "any one language (usually Common)",
		challenge_rating: "1/4",
		attacks: [{
			name: "Club",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		spells: [
			"The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared: ",
			"Cantrips (at will): light, sacred flame, thaumaturgy",
			"1st level (3 slots): bless, cure wounds, sanctuary"
		],
	},
	"Adult Black Dragon": {
		name: "Adult Black Dragon",
		source: ["Monster Manual", 88],
		size: "Huge",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [19, "Natural Armor", false],
		hp: 195,
		hd: [17, 12],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [23, 14, 21, 14, 13, 17],
		saves: ["", 7, 10, "", 6, 8],
		skills: "Perception +11, Stealth +7",
		damage_immunities: "acid",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 21,
		languages: "Common, Draconic",
		challenge_rating: "14",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 4 (1d8) acid damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Acid Breath (Recharge 5-6)",
			description: "The dragon exhales acid in a 60-foot line that is 5 ft wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Adult Blue Dracolich": {
		name: "Adult Blue Dracolich",
		source: ["Monster Manual", 84],
		size: "Huge",
		type: "Undead",
		alignment: "Lawful Evil",
		ac: [19, "Natural Armor", false],
		hp: 225,
		hd: [18, 12],
		speed: "40 ft, burrow 30 ft, fly 80 ft",
		scores: [25, 10, 23, 16, 15, 19],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +12, Stealth +5",
		damage_resistances: "necrotic",
		damage_immunities: "lightning, poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 22,
		languages: "Common, Draconic",
		challenge_rating: "17",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 5 (1d10) lightning damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dracolich fails a saving throw, it can choose to succeed instead.",
		}, {
			name: "Magic Resistance",
			description: "The dracolich has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dracolich's choice that is within 120 ft of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours.",
		}, {
			name: "Lightning Breath (Recharge 5-6)",
			description: "The dracolich exhales lightning in a 90-foot line that is 5 ft wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dracolich makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dracolich makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dracolich beats its tattered wings. Each creature within 10 ft. of the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6+7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed.",
		}
		],
	},
	"Adult Blue Dragon": {
		name: "Adult Blue Dragon",
		source: ["Monster Manual", 91],
		size: "Huge",
		type: "Dragon",
		alignment: "Lawful Evil",
		ac: [19, "Natural Armor", false],
		hp: 225,
		hd: [18, 12],
		speed: "40 ft, burrow 30 ft, fly 80 ft",
		scores: [25, 10, 23, 16, 15, 19],
		saves: ["", 5, 11, "", 7, 9],
		skills: "Perception +12, Stealth +5",
		damage_immunities: "lightning",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 22,
		languages: "Common, Draconic",
		challenge_rating: "16",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 5 (1d10) lightning damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Lightning Breath (Recharge 5-6)",
			description: "The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6+7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Adult Brass Dragon": {
		name: "Adult Brass Dragon",
		source: ["Monster Manual", 105],
		size: "Huge",
		type: "Dragon",
		alignment: "Chaotic Good",
		ac: [18, "Natural Armor", false],
		hp: 172,
		hd: [15, 12],
		speed: "40 ft, burrow 40 ft, fly 80 ft",
		scores: [23, 10, 21, 14, 13, 17],
		saves: ["", 5, 10, "", 6, 8],
		skills: "History +7, Perception +11, Persuasion +8, Stealth +5",
		damage_immunities: "Fire",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 21,
		languages: "Common, Draconic",
		challenge_rating: "13",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Fire Breath. The dragon exhales fire in an 60-foot line that is 5 ft wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.",
				"Sleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
			],
		}
		],
	},
	"Adult Bronze Dragon": {
		name: "Adult Bronze Dragon",
		source: ["Monster Manual", 108],
		size: "Huge",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [19, "Natural Armor", false],
		hp: 212,
		hd: [17, 12],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [25, 10, 23, 16, 15, 19],
		saves: ["", 5, 11, "", 7, 9],
		skills: "Insight +7, Perception +12, Stealth +5",
		damage_immunities: "lightning",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 22,
		languages: "Common, Draconic",
		challenge_rating: "15",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Lightning Breath. The dragon exhales lightning in a 90-foot line that is 5 ft wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
				"Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 ft away from the dragon.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6+7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Adult Copper Dragon": {
		name: "Adult Copper Dragon",
		source: ["Monster Manual", 111],
		size: "Huge",
		type: "Dragon",
		alignment: "Chaotic Good",
		ac: [18, "Natural Armor", false],
		hp: 184,
		hd: [16, 12],
		speed: "40 ft, climb 40 ft, fly 80 ft",
		scores: [23, 12, 21, 18, 15, 17],
		saves: ["", 6, 10, "", 7, 8],
		skills: "Deception +8, Perception +12, Stealth +6",
		damage_immunities: "acid",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 22,
		languages: "Common, Draconic",
		challenge_rating: "14",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Acid Breath: The dragon exhales acid in an 60-foot line that is 5 ft wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
				"Slowing Breath: The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Adult Gold Dragon": {
		name: "Adult Gold Dragon",
		source: ["Monster Manual", 114],
		size: "Huge",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [19, "Natural Armor", false],
		hp: 256,
		hd: [19, 12],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [27, 14, 25, 16, 15, 24],
		saves: ["", 8, 13, "", 8, 13],
		skills: "Insight +8, Perception +14, Persuasion +13, Stealth +8",
		damage_immunities: "Fire",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 24,
		languages: "Common, Draconic",
		challenge_rating: "17",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Fire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.",
				"Weakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Adult Green Dragon": {
		name: "Adult Green Dragon",
		source: ["Monster Manual", 94],
		size: "Huge",
		type: "Dragon",
		alignment: "Lawful Evil",
		ac: [19, "Natural Armor", false],
		hp: 207,
		hd: [18, 12],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [23, 12, 21, 18, 15, 17],
		saves: ["", 6, 10, "", 7, 8],
		skills: "Deception +8, Insight +7, Perception +12, Persuasion +8, Stealth +6",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 22,
		languages: "Common, Draconic",
		challenge_rating: "15",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours .",
		}, {
			name: "Poison Breath (Recharge 5-6)",
			description: "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Adult Red Dragon": {
		name: "Adult Red Dragon",
		source: ["Monster Manual", 98],
		size: "Huge",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [19, "Natural Armor", false],
		hp: 256,
		hd: [19, 12],
		speed: "40 ft, climb 40 ft, fly 80 ft",
		scores: [27, 10, 25, 16, 13, 21],
		saves: ["", 6, 13, "", 7, 11],
		skills: "Perception +13, Stealth +6",
		damage_immunities: "Fire",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 23,
		languages: "Common, Draconic",
		challenge_rating: "17",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, ""],
			range: "Melee (10 ft)",
			description: "Plus 7 (2d6) fire damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Fire Breath (Recharge 5-6)",
			description: "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Lair Actions",
			description: [
				"On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: the dragon can't use the same effect two rounds in a row:",
				"Magma erupts from a point on the ground the dragon can see within 120 ft of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.",
				"A tremor shakes the lair in a 60-foot-radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone.",
				"Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 ft of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Adult Silver Dragon": {
		name: "Adult Silver Dragon",
		source: ["Monster Manual", 117],
		size: "Huge",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [19, "Natural Armor", false],
		hp: 243,
		hd: [18, 12],
		speed: "40 ft, fly 80 ft",
		scores: [27, 10, 25, 16, 13, 21],
		saves: ["", 5, 12, "", 6, 10],
		skills: "Arcana +8, History +8, Perception +11, Stealth +5",
		damage_immunities: "cold",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 21,
		languages: "Common, Draconic",
		challenge_rating: "16",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Cold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.",
				"Paralyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Adult White Dragon": {
		name: "Adult White Dragon",
		source: ["Monster Manual", 101],
		size: "Huge",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [18, "Natural Armor", false],
		hp: 200,
		hd: [16, 12],
		speed: "40 ft, burrow 30 ft, fly 80 ft, swim 40 ft",
		scores: [22, 10, 22, 8, 12, 12],
		saves: ["", 5, 11, "", 6, 6],
		skills: "Perception +11, Stealth +5",
		damage_immunities: "cold",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 21,
		languages: "Common, Draconic",
		challenge_rating: "13",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 4 (1d8) cold damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Ice Walk",
			description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Cold Breath (Recharge 5-6)",
			description: "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Air Elemental": {
		name: "Air Elemental",
		source: ["Monster Manual", 124],
		size: "Large",
		type: "Elemental",
		alignment: "Neutral",
		ac: [15, "", false],
		hp: 90,
		hd: [12, 10],
		speed: "fly 90 ft (hover)",
		scores: [14, 20, 14, 6, 10, 6],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "lightning, thunder, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Auran",
		challenge_rating: "5",
		attacks: [{
			name: "Slam",
			ability: 2,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two slam attacks as an Attack action",
		}, {
			name: "Whirlwind (Recharge 4-6)",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "All in shared area",
			dc: true,
			description: "Creature's in elemental's space that fail STR saving throw flung up to 20ft away in a random direction and knocked prone. If target strikes an object(ie: wall, floor) target takes 3 (1d6) bludgeoning damage for every 10 ft it was thrown. If target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone. If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
		}
		],
		traits: [{
			name: "Air Form",
			description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.",
		}
		],
		actions: [{
			name: "Whirlwind (Recharge 4-6)",
			description: [
				"See Attack. Each creature in the elemental's space that fails its saving throw is flung up to 20 ft away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 ft it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.",
				"If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone.",
			]
		}
		],
	},
	"Allosaurus": {
		name: "Allosaurus",
		source: ["Monster Manual", 79],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 60,
		hd: [6, 10],
		speed: "60 ft",
		scores: [19, 13, 17, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5",
		passive_perception: "15",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pounce",
			description: "If the allosaurus moves at least 30 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
		}
		],
	},
	"Ancient Black Dragon": {
		name: "Ancient Black Dragon",
		source: ["Monster Manual", 87],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [22, "Natural Armor", false],
		hp: 367,
		hd: [21, 20],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [27, 14, 25, 16, 15, 19],
		saves: ["", 9, 14, "", 9, 11],
		skills: "Perception +16, Stealth +9",
		damage_immunities: "acid",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 26,
		languages: "Common, Draconic",
		challenge_rating: "21",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "Plus 9 (2d8) acid damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Acid Breath (Recharge 5-6)",
			description: "The dragon exhales acid in a 90-foot line that is 10 ft wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Ancient Blue Dragon": {
		name: "Ancient Blue Dragon",
		source: ["Monster Manual", 90],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Lawful Evil",
		ac: [22, "Natural Armor", false],
		hp: 481,
		hd: [26, 20],
		speed: "40 ft, burrow 40 ft, fly 80 ft",
		scores: [29, 10, 27, 18, 17, 21],
		saves: ["", 7, 15, "", 10, 12],
		skills: "Perception +17, Stealth +7",
		damage_immunities: "lightning",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 27,
		languages: "Common, Draconic",
		challenge_rating: "23",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "Plus 11 (2d10) lightning damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Lightning Breath (Recharge 5-6)",
			description: "The dragon exhales lightning in a 120-foot line that is 10 ft wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Ancient Brass Dragon": {
		name: "Ancient Brass Dragon",
		source: ["Monster Manual", 104],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Chaotic Good",
		ac: [20, "Natural Armor", false],
		hp: 297,
		hd: [17, 20],
		speed: "40 ft, burrow 40 ft, fly 80 ft",
		scores: [27, 10, 25, 16, 15, 19],
		saves: ["", 6, 13, "", 8, 10],
		skills: "History +9, Perception +14, Persuasion +10, Stealth +6",
		damage_immunities: "Fire",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 24,
		languages: "Common, Draconic",
		challenge_rating: "20",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, ""],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons:",
				"Fire Breath. The dragon exhales fire in an 90-foot line that is 10 ft wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.",
				"Sleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
			]
		}, {
			name: "Change Shape",
			description: [
				"The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
				"In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Ancient Bronze Dragon": {
		name: "Ancient Bronze Dragon",
		source: ["Monster Manual", 107],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [22, "Natural Armor", false],
		hp: 444,
		hd: [24, 20],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [29, 10, 27, 18, 17, 21],
		saves: ["", 7, 15, "", 10, 12],
		skills: "Insight +10, Perception +17, Stealth +7",
		damage_immunities: "lightning",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 27,
		languages: "Common, Draconic",
		challenge_rating: "22",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Lightning Breath: The dragon exhales lightning in a 120-foot line that is 10 ft wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
				"Repulsion Breath: The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 ft away from the dragon.",
			]
		}, {
			name: "Change Shape",
			description: [
				"The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
				"In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Ancient Copper Dragon": {
		name: "Ancient Copper Dragon",
		source: ["Monster Manual", 110],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Chaotic Good",
		ac: [21, "Natural Armor", false],
		hp: 350,
		hd: [20, 20],
		speed: "40 ft, climb 40 ft, fly 80 ft",
		scores: [27, 12, 25, 20, 17, 19],
		saves: ["", 8, 14, "", 10, 11],
		skills: "Deception +11, Perception +17, Stealth +8",
		damage_immunities: "acid",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 27,
		languages: "Common, Draconic",
		challenge_rating: "21",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Acid Breath: The dragon exhales acid in an 90-foot line that is 10 ft wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one.",
				"Slowing Breath: The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
			]
		}, {
			name: "Change Shape",
			description: [
				"The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
				"In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Ancient Gold Dragon": {
		name: "Ancient Gold Dragon",
		source: ["Monster Manual", 113],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [22, "Natural Armor", false],
		hp: 546,
		hd: [28, 20],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [30, 14, 29, 18, 17, 28],
		saves: ["", 9, 16, "", 10, 16],
		skills: "Insight +10, Perception +17, Persuasion +16, Stealth +9",
		damage_immunities: "Fire",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 27,
		languages: "Common, Draconic",
		challenge_rating: "24",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Fire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one.",
				"Weakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			]
		}, {
			name: "Change Shape",
			description: [
				"The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
				"In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6+10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Ancient Green Dragon": {
		name: "Ancient Green Dragon",
		source: ["Monster Manual", 93],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Lawful Evil",
		ac: [21, "Natural Armor", false],
		hp: 385,
		hd: [22, 20],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [27, 12, 25, 20, 17, 19],
		saves: ["", 8, 14, "", 10, 11],
		skills: "Deception +11, Insight +10, Perception +17, Persuasion +11, Stealth +8",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 27,
		languages: "Common, Draconic",
		challenge_rating: "22",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "Plus 10 (3d6) poison damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Poison Breath (Recharge 5-6)",
			description: "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Ancient Red Dragon": {
		name: "Ancient Red Dragon",
		source: ["Monster Manual", 97],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [22, "Natural Armor", false],
		hp: 546,
		hd: [28, 20],
		speed: "40 ft, climb 40 ft, fly 80 ft",
		scores: [30, 10, 29, 18, 15, 23],
		saves: ["", 7, 16, "", 9, 13],
		skills: "Perception +16, Stealth +7",
		damage_immunities: "Fire",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 26,
		languages: "Common, Draconic",
		challenge_rating: "24",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "Plus 14 (4d6) fire damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Fire Breath (Recharge 5-6)",
			description: "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6+10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Ancient Silver Dragon": {
		name: "Ancient Silver Dragon",
		source: ["Monster Manual", 116],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [22, "Natural Armor", false],
		hp: 487,
		hd: [25, 20],
		speed: "40 ft, fly 80 ft",
		scores: [30, 10, 29, 18, 15, 23],
		saves: ["", 7, 16, "", 9, 13],
		skills: "Arcana +11, History +11, Perception +16, Stealth +7",
		damage_immunities: "cold",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 26,
		languages: "Common, Draconic",
		challenge_rating: "23",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Cold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.",
				"Paralyzing Breath. The dragon exhales paralyzing gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			]
		}, {
			name: "Change Shape",
			description: [
				"The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
				"In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check.",
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack.",
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6+10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		}
		],
	},
	"Ancient White Dragon": {
		name: "Ancient White Dragon",
		source: ["Monster Manual", 100],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [20, "Natural Armor", false],
		hp: 333,
		hd: [18, 20],
		speed: "40 ft, burrow/swim 40 ft, fly 80 ft",
		scores: [26, 10, 26, 10, 13, 14],
		saves: ["", 6, 14, "", 7, 8],
		skills: "Perception +13, Stealth +6",
		damage_immunities: "cold",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 23,
		languages: "Common, Draconic",
		challenge_rating: "20",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "Plus 9 (2d8) cold damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Ice Walk",
			description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the dragon fails a saving throw, it can choose to succeed instead.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 ft of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours .",
		}, {
			name: "Cold Breath (Recharge 5-6)",
			description: "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) cold damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Androsphinx": {
		name: "Androsphinx",
		source: ["Monster Manual", 281],
		size: "Large",
		type: "Monstrosity",
		alignment: "Lawful Neutral",
		ac: [17, "Natural Armor", false],
		hp: 199,
		hd: [19, 10],
		speed: "40 ft, fly 60 ft",
		scores: [22, 10, 20, 16, 18, 23],
		saves: ["", 6, 11, 9, 10, ""],
		skills: "Arcana +9, Perception +10, Religion +15",
		damage_immunities: "Psychic; Bludgeoning, Piercing, and Slashing from nonmagical weapons",
		condition_immunities: "charmed, frightened",
		senses: "Truesight 120 ft",
		passive_perception: 20,
		languages: "Common, Sphinx",
		challenge_rating: "17",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Inscrutable",
			description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.",
		}, {
			name: "Magic Weapons",
			description: "The sphinx's weapon attacks are magical.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The sphinx makes two claw attacks.",
		}, {
			name: "Roar (3/Day)",
			description: [
				"The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 ft of the sphinx and able to hear the roar must make a saving throw.",
				"First Roar. Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Second Roar. Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Third Roar. Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.",
			]
		}
		],
		legendary_actions: [{
			name: "Claw Attack",
			description: "The sphinx makes one claw attack.",
		}, {
			name: "Teleport (Costs 2 Actions)",
			description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 ft to an unoccupied space it can see.",
		}, {
			name: "Cast a Spell (Costs 3 Actions)",
			description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.",
		}
		],
		spells: [
			"The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared: ",
			"Cantrips (at will): sacred flame, spare the dying, thaumaturgy",
			"1st level (4 slots): command, detect evil and good, detect magic",
			"2nd level (3 slots): lesser restoration, zone of truth",
			"3rd level (3 slots): dispel magic, tongues",
			"4th level (3 slots): banishment, freedom of movement",
			"5th level (2 slots): flame strike, greater restoration",
			"6th level (1 slot): heroes' feast"
		],
	},
	"Animated Armor": {
		name: "Animated Armor",
		source: ["Monster Manual", 19],
		size: "Medium",
		type: "Construct",
		alignment: "Unaligned",
		ac: [18, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "25 ft",
		scores: [14, 11, 13, 1, 3, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison, Psychic",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "Blindsight 60 ft (blind beyond this radius)",
		passive_perception: 6,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Antimagic Susceptibility",
			description: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
		}, {
			name: "False Appearance",
			description: "While the armor remains motionless, it is indistinguishable from a normal suit of armor.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The armor makes two melee attacks.",
		}
		],
	},
	"Ankheg": {
		name: "Ankheg",
		source: ["Monster Manual", 21],
		size: "Large",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [14, "Natural Armor", false],
		hp: 39,
		hd: [6, 10],
		speed: "30 ft, burrow 10 ft",
		scores: [17, 11, 13, 1, 13, 6],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft; tremorsense 60 ft",
		passive_perception: 11,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.",
		}
		],
		actions: [{
			name: "Acid Spray (Recharge 6)",
			description: "The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Armor",
			description: "11 AC while prone",
		}
		],
	},
	"Ankylosaurus": {
		name: "Ankylosaurus",
		source: ["Monster Manual", 79],
		size: "Huge",
		type: "beast",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 68,
		hd: [8, 12],
		speed: "30 ft",
		scores: [19, 11, 15, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: "11",
		challenge_rating: "3",
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [4, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
		}
		],
	},
	"Ape": {
		name: "Ape",
		source: ["Monster Manual", 317],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 19,
		hd: [3, 8],
		speed: "30 ft, climb 30 ft",
		scores: [16, 14, 14, 6, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Perception +3",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two fist attacks as an Attack action",
		}, {
			name: "Rock",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "25/50 ft",
			description: "One rock attack as an Attack action",
		}
		],
	},
	"Arcanaloth": {
		name: "Arcanaloth",
		source: ["Monster Manual", 313],
		size: "Medium",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [17, "Natural Armor", false],
		hp: 104,
		hd: [16, 8],
		speed: "30 ft, fly 30 ft",
		scores: [17, 12, 14, 20, 16, 17],
		saves: ["", "5", "", "9", "7", "7"],
		skills: "Arcana +13, Deception +9, Insight +9, Perception +7",
		damage_resistances: "cold, fire, lightning, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "acid, poison",
		condition_immunities: "charmed, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "17",
		languages: "all, telepathy 120 ft",
		challenge_rating: "12",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "The target must make a DC 14 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The arcanaloth's innate spellcasting ability is Charisma (spell save DC 15). The arcanaloth can innately cast the following spells, requiring no material components:",
				"At will: alter self, darkness, heat metal, invisibility (self only), magic missile"
			]
		}, {
			name: "Magic Resistance",
			description: "The arcanaloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The arcanaloth's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Teleport",
			description: "The arcanaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
		}, {
			name: "Variant: Summon Yugoloth (1/day)",
			description: [
				"The yugoloth attempts a magical summoning.",
				"An arcanaloth has a 40 percent chance of summoning one arcanaloth.",
				"A summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, does as it pleases, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it."
			]
		}
		],
		spells: [
			"The arcanaloth is a 16th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The arcanaloth has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, mage hand, minor illusion, prestidigitation", "1st level (4 slots): detect magic, identify, shield, Tenser's floating disk",
			"2nd level (3 slots): detect thoughts, mirror image, phantasmal force, suggestion",
			"3rd level (3 slots): counterspell, fear, fireball",
			"4th level (3 slots): banishment, dimension door",
			"5th level (2 slots): contact other plane, hold monster",
			"6th level (1 slot): chain lightning", "7th level (1 slot): finger of death",
			"8th level (1 slot): mind blank"
		]
	},
	"Archmage": {
		name: "Archmage",
		source: ["Monster Manual", 342],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [12, "", false],
		hp: 99,
		hd: [18, 8],
		speed: "30 ft",
		scores: [10, 14, 12, 20, 15, 16],
		saves: ["", "", "", 9, 6, ""],
		skills: "Arcana +13, History +13",
		damage_resistances: "damage from spells; non magical bludgeoning, piercing, and slashing (from stoneskin)",
		passive_perception: 12,
		languages: "any six languages",
		challenge_rating: "12",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The archmage has advantage on saving throws against spells and other magical effects.",
		}
		],
		spells: [
			"The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared: ",
			"Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp",
			"1st level (4 slots): detect magic, identify, mage armor*, magic missile",
			"2nd level (3 slots): detect thoughts, mirror image, misty step",
			"3rd level (3 slots): counterspell,fly, lightning bolt",
			"4th level (3 slots): banishment, fire shield, stoneskin*",
			"5th level (3 slots): cone of cold, scrying, wall of force",
			"6th level (1 slot): globe of invulnerability",
			"7th level (1 slot): teleport",
			"8th level (1 slot): mind blank*",
			"9th level (1 slot): time stop",
			"* The archmage casts these spells on itself before combat."
		],
	},
	"Assassin": {
		name: "Assassin",
		source: ["Monster Manual", 343],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Non-Good",
		ac: [15, "Studded Leather", false],
		hp: 78,
		hd: [12, 8],
		speed: "30 ft",
		scores: [11, 16, 14, 13, 11, 10],
		saves: ["", 6, "", 4, "", ""],
		skills: "Acrobatics +6, Deception +3, Perception +3, Stealth +9",
		damage_resistances: "poison",
		passive_perception: 13,
		languages: "Thieves' cant plus any two languages",
		challenge_rating: "8",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Light Crossbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Assassinate",
			description: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit.",
		}, {
			name: "Evasion",
			description: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
		}, {
			name: "Sneak Attack (1/Turn)",
			description: "The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The assassin makes two shortsword attacks.",
		}
		],
	},
	"Awakened Shrub": {
		name: "Awakened Shrub",
		source: ["Monster Manual", 317],
		size: "Small",
		type: "Plant",
		alignment: "Unaligned",
		ac: [9, "", false],
		hp: 10,
		hd: [3, 6],
		speed: "20 ft",
		scores: [3, 8, 11, 10, 10, 6],
		saves: ["", "", "", "", "", ""],
		damage_vulnerabilities: "fire",
		damage_resistances: "piercing",
		passive_perception: 10,
		languages: "one language known by its creator",
		challenge_rating: "0",
		attacks: [{
			name: "Rake",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the shrub remains motionless, it is indistinguishable from a normal shrub.",
		}
		],
	},
	"Awakened Tree": {
		name: "Awakened Tree",
		source: ["Monster Manual", 317],
		size: "Huge",
		type: "Plant",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 59,
		hd: [7, 12],
		speed: "20 ft",
		scores: [19, 6, 15, 10, 10, 7],
		saves: ["", "", "", "", "", ""],
		damage_vulnerabilities: "fire",
		damage_resistances: "bludgeoning, piercing",
		passive_perception: 10,
		languages: "one language known by its creator",
		challenge_rating: "2",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the tree remains motionless, it is indistinguishable from a normal tree.",
		}
		],
	},
	"Axe Beak": {
		name: "Axe Beak",
		source: ["Monster Manual", 317],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 19,
		hd: [3, 10],
		speed: "50 ft",
		scores: [14, 12, 12, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Azer": {
		name: "Azer",
		source: ["Monster Manual", 22],
		size: "Medium",
		type: "Elemental",
		alignment: "Lawful Neutral",
		ac: [17, "Natural Armor", true],
		hp: 39,
		hd: [6, 8],
		speed: "30 ft",
		scores: [17, 12, 15, 12, 13, 10],
		saves: ["", "", 4, "", "", ""],
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		passive_perception: 11,
		languages: "Ignan",
		challenge_rating: "2",
		attacks: [{
			name: "Warhammer",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) fire damage; Two-Handed: 8 (1d10+3) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Heated Body",
			description: "A creature that touches the azer or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage.",
		}, {
			name: "Heated Weapons",
			description: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack).",
		}, {
			name: "Illumination",
			description: "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 ft..",
		}
		],
	},
	"Baboon": {
		name: "Baboon",
		source: ["Monster Manual", 318],
		size: "Small",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 3,
		hd: [1, 6],
		speed: "30 ft, climb 30 ft",
		scores: [8, 14, 11, 4, 12, 6],
		saves: ["", "", "", "", "", ""],
		passive_perception: 11,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Badger": {
		name: "Badger",
		source: ["Monster Manual", 318],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 3,
		hd: [1, 4],
		speed: "20 ft, burrow 5 ft",
		scores: [4, 11, 12, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 30 ft; Adv. on Wis (Perception) checks using smell",
		passive_perception: 11,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The badger has advantage on Wisdom (Perception) checks that rely on smell.",
		}
		],
	},
	"Balor": {
		name: "Balor",
		source: ["Monster Manual", 55],
		size: "Huge",
		type: "Fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [19, "Natural Armor", false],
		hp: 262,
		hd: [21, 12],
		speed: "40 ft, fly 80 ft",
		scores: [26, 15, 22, 20, 16, 22],
		saves: [14, "", 12, "", 9, 12],
		damage_resistances: "cold, lightning, bludgeoning, piercing and slashing from nonmagical weapons",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Truesight 120 ft",
		passive_perception: 13,
		languages: "Abyssal, telepathy 120 ft.",
		challenge_rating: "19",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [3, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "Plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.",
		}, {
			name: "Whip",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (30 ft)",
			description: "Plus 10 (3d6) fire damage, target must succeed on a DC 20 Strength saving throw or be pulled up to 25 ft toward the balor.",
		}
		],
		traits: [{
			name: "Death Throes",
			description: "When the balor dies, it explodes, and each creature within 30 ft of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons.",
		}, {
			name: "Fire Aura",
			description: "At the start of each of the balor's turns, each creature within 5 ft of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 ft of it takes 10 (3d6) fire damage.",
		}, {
			name: "Magic Resistance",
			description: "The balor has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Magic Weapons",
			description: "The balor's weapon attacks are magical.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The balor makes two attacks: one with its longsword and one with its whip.",
		}, {
			name: "Teleport",
			description: "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 ft to an unoccupied space it can see.",
		}, {
			name: "Variant: Summon Demon (1/Day)",
			description: [
				"The demon chooses what to summon and attempts a magical summoning.",
				"A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.",
				"A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
			]
		}
		],
	},
	"Bandit": {
		name: "Bandit",
		source: ["Monster Manual", 343],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Non-Lawful",
		ac: [12, "Leather Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft",
		scores: [11, 12, 12, 10, 10, 10],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "any one language (usually Common)",
		challenge_rating: "1/8",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Light Crossbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		}
		],
	},
	"Bandit Captain": {
		name: "Bandit Captain",
		source: ["Monster Manual", 344],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Non-Lawful",
		ac: [15, "Studded Leather", false],
		hp: 65,
		hd: [10, 8],
		speed: "30 ft",
		scores: [15, 16, 14, 14, 11, 14],
		saves: [4, 5, "", "", 2, ""],
		skills: "Athletics +4, Deception +4",
		passive_perception: 10,
		languages: "any two languages",
		challenge_rating: "2",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}, {
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The captain makes three melee attacks: two with the scimitar and one with the dagger. Or two ranged attacks with daggers.",
		}
		],
		reactions: [{
			name: "Parry",
			description: "The captain adds 2 to AC against one melee attack that would hit it. The captain must see the attacker and be wielding a melee weapon.",
		}
		],
	},
	"Banshee": {
		name: "Banshee",
		source: ["Monster Manual", 23],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 58,
		hd: [13, 8],
		speed: "0 ft, fly 40 ft (hover)",
		scores: [1, 14, 10, 12, 11, 17],
		saves: ["", "", "", "", "2", "5"],
		damage_resistances: "acid, fire, lightning, thunder, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "cold, necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Common, Elvish",
		challenge_rating: "4",
		attacks: [{
			name: "Corrupting Touch",
			ability: 2,
			damage: [3, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Detect Life",
			description: "The banshee can magically sense the presence of living creatures up to 5 miles away that aren't undead or constructs. She knows the general direction they're in but not their exact locations."
		}, {
			name: "Incorporeal Movement",
			description: "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object."
		}
		],
		actions: [{
			name: "Horrifying Visage",
			description: "Each non-undead creature within 60 ft of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours."
		}, {
			name: "Wail (1/Day)",
			description: "The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 ft of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage. The woeful banshee is a spiteful creature formed from the spirit of a female elf. Its face is wreathed in a wild tangle of hair, its body clad in wispy rags that flutter and stream around it."
		}
		]
	},
	"Barbed Devil": {
		name: "Barbed Devil",
		source: ["Monster Manual", 70],
		size: "Medium",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [15, "Natural Armor", false],
		hp: 110,
		hd: [13, 8],
		speed: "30 ft",
		scores: [16, 17, 18, 12, 14, 14],
		saves: [6, "", 7, "", 5, 5],
		skills: "Deception +5, Insight +5, Perception +8",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 18,
		languages: "Infernal, telepathy 120 ft.",
		challenge_rating: "5",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hurl Flame",
			ability: 5,
			damage: [3, 6, "fire"],
			range: "Ranged (150 ft)",
			description: "If the target is a flammable object that isn't being worn or carried, it also catches fire.",
		}
		],
		traits: [{
			name: "Barbed Hide",
			description: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it.",
		}, {
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the devil's Darkvision.",
		}, {
			name: "Magic Resistance",
			description: "The devil has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.",
		}
		],
	},
	"Barlgura": {
		name: "Barlgura",
		source: ["Monster Manual", 56],
		size: "Large",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 68,
		hd: [8, 10],
		speed: "40 ft, climb 40 ft",
		scores: [18, 15, 16, 7, 14, 9],
		saves: ["", "5", "6", "", "", ""],
		skills: "Perception +5, Stealth +5",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "blindsight 30 ft, darkvision 120 ft",
		passive_perception: "15",
		languages: "Abyssal, telepathy 120 ft",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Fist",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The barlgura's spellcasting ability is Wisdom (spell save DC 13). The barlgura can innately cast the following spells, requiring no material components:",
				"1/day each: entangle, phantasmal force",
				"2/day each: disguise self, invisibility (self only)"
			]
		}, {
			name: "Reckless",
			description: "At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
		}, {
			name: "Running Leap",
			description: "The barlgura's long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The barlgura makes three attacks: one with its bite and two with its fists."
		}, {
			name: "Variant: Summon Demon (1/day)",
			description: [
				"The demon chooses what to summon and attempts a magical summoning.",
				"A barlgura has a 30 percent chance of summoning one barlgura.",
				"A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
			]
		}
		],
	},
	"Basilisk": {
		name: "Basilisk",
		source: ["Monster Manual", 24],
		size: "Medium",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 52,
		hd: [8, 8],
		speed: "20 ft",
		scores: [16, 8, 15, 2, 8, 7],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 9,
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}
		],
		traits: [{
			name: "Petrifying Gaze",
			description: [
				"If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.",
				"A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.",
				"If the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze.",
			]
		}
		],
	},
	"Bat": {
		name: "Bat",
		source: ["Monster Manual", 318],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "5 ft, fly 30 ft",
		scores: [2, 15, 8, 2, 12, 4],
		saves: ["", "", "", "", "", ""],
		senses: "Blindsight 60 ft; Adv. on Wis (Perception) checks using hearing",
		passive_perception: 11,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Echolocation",
			description: "The bat can't use its Blindsight while deafened.",
		}, {
			name: "Keen Hearing",
			description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing.",
		}
		],
	},
	"Bearded Devil": {
		name: "Bearded Devil",
		source: ["Monster Manual", 70],
		size: "Medium",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [13, "Natural Armor", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [16, 15, 15, 9, 11, 11],
		saves: [5, "", 4, "", 2, ""],
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 10,
		languages: "Infernal, telepathy 120 ft.",
		challenge_rating: "3",
		attacks: [{
			name: "Beard",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Glaive",
			ability: 1,
			damage: [1, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "If the target is a creature other than an undead or a construct, must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the devil's Darkvision.",
		}, {
			name: "Magic Resistance",
			description: "The devil has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Steadfast",
			description: "The devil can't be frightened while it can see an allied creature within 30 ft of it.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devil makes two attacks: one with its beard and one with its glaive.",
		}
		],
	},
	"Behir": {
		name: "Behir",
		source: ["Monster Manual", 25],
		size: "Huge",
		type: "Monstrosity",
		alignment: "Neutral Evil",
		ac: [17, "Natural Armor", false],
		hp: 168,
		hd: [16, 12],
		speed: "50 ft, climb 40 ft",
		scores: [23, 16, 18, 7, 14, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6, Stealth +7",
		damage_immunities: "lightning",
		senses: "Darkvision 90 ft",
		passive_perception: 16,
		languages: "Draconic",
		challenge_rating: "11",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Constrict",
			ability: 1,
			damage: [2, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 17 (2d10+6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The behir makes two attacks: one with its bite and one to constrict.",
		}, {
			name: "Lightning Breath (Recharge 5-6)",
			description: "The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Swallow",
			description: [
				"The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.",
				"If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone.",
			]
		}
		],
	},
	"Beholder": {
		name: "Beholder",
		source: ["Monster Manual", 28],
		size: "Large",
		type: "aberration",
		alignment: "lawful evil",
		ac: [18, "Natural Armor", false],
		hp: 189,
		hd: [19, 10],
		speed: "0 ft, fly 20 ft (hover)",
		scores: [10, 14, 18, 17, 15, 17],
		saves: ["", "", "", "8", "7", "8"],
		skills: "Perception +12",
		condition_immunities: "prone",
		senses: "darkvision 120 ft",
		passive_perception: "22",
		languages: "Deep Speech, Undercommon",
		challenge_rating: "13",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Antimagic Cone",
			description: "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays."
		}
		],
		actions: [{
			name: "Eye Rays",
			description: [
				"The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 ft of it:",
				"1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.",
				"2. Paralyzing Ray. The targeted creature must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"3. Fear Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"4. Slowing Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"5. Enervation Ray. The targeted creature must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.",
				"6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 16 Strength saving throw or the beholder moves it up to 30 ft in any direction. It is restrained by the ray's telekinetic grip until the start of the beholder's next turn or until the beholder is incapacitated.",
				"If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 ft in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.",
				"7. Sleep Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.",
				"8. Petrification Ray. The targeted creature must make a DC 16 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.",
				"9. Disintegration Ray. If the target is a creature, it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.",
				"If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.",
				"10. Death Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points."
			]
		}
		],
		legendary_actions: [{
			name: "Eye Ray",
			description: "The beholder uses one random eye ray."
		}
		]
	},
	"Beholder Zombie": {
		name: "Beholder Zombie",
		source: ["Monster Manual", 316],
		size: "Large",
		type: "undead",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 93,
		hd: [11, 10],
		speed: "0 ft, fly 20 ft (hover)",
		scores: [10, 8, 16, 3, 8, 5],
		saves: ["", "", "", "", "2", ""],
		damage_immunities: "poison",
		condition_immunities: "poisoned, prone",
		senses: "darkvision 60 ft",
		passive_perception: "9",
		languages: "understands Deep Speech and Undercommon but can't speak",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Undead Fortitude",
			description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
		}
		],
		actions: [{
			name: "Eye Ray",
			description: [
				"The zombie uses a random magical eye ray, choosing a target that it can see within 60 feet of it.",
				"1. Paralyzing Ray. The targeted creature must succeed on a DC 14 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"2. Fear Ray. The targeted creature must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"3. Enervation Ray. The targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.",
				"4. Disintegration Ray. If the target is a creature, it must succeed on a DC 14 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.",
				"If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger nonmagical object or creation of magical force, this ray disintegrates a 10-foot cube of it."
			]
		}
		]
	},
	"Berserker": {
		name: "Berserker",
		source: ["Monster Manual", 344],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Chaotic",
		ac: [13, "Hide Armor", false],
		hp: 67,
		hd: [9, 8],
		speed: "30 ft",
		scores: [16, 12, 17, 9, 11, 9],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "any one language (usually Common)",
		challenge_rating: "2",
		attacks: [{
			name: "Greataxe",
			ability: 1,
			damage: [1, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Reckless",
			description: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.",
		}
		],
	},
	"Black Bear": {
		name: "Black Bear",
		source: ["Monster Manual", 318],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "Natural Armor", false],
		hp: 19,
		hd: [3, 8],
		speed: "40 ft, climb 30 ft",
		scores: [15, 10, 14, 2, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Adv. on Wis (Perception) checks using smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "One bite and one claw attack as an Attack action",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "One claw and one bite attack as an Attack action",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
		}
		],
	},
	"Black Dragon Wyrmling": {
		name: "Black Dragon Wyrmling",
		source: ["Monster Manual", 88],
		size: "Medium",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [17, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft, fly 60 ft, swim 30 ft",
		scores: [15, 14, 13, 10, 11, 13],
		saves: ["", 4, 3, "", 2, 3],
		skills: "Perception +4, Stealth +4",
		damage_immunities: "acid",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4) acid damage.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}
		],
		actions: [{
			name: "Acid Breath (Recharge 5-6)",
			description: "The dragon exhales acid in a 15-foot line that is 5 ft wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (Sd8) acid damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Black Pudding": {
		name: "Black Pudding",
		source: ["Monster Manual", 241],
		size: "Large",
		type: "Ooze",
		alignment: "Unaligned",
		ac: [7, "", false],
		hp: 85,
		hd: [10, 10],
		speed: "20 ft, climb 20 ft",
		scores: [16, 5, 16, 1, 6, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "acid, cold, lightning, slashing",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
		senses: "Blindsight 60 ft (blind beyond this radius)",
		passive_perception: 8,
		languages: "",
		challenge_rating: "4",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) acid damage. Nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The pudding can move through a space as narrow as 1 inch wide without squeezing.",
		}, {
			name: "Corrosive Form",
			description: "A creature that touches the pudding or hits it with a melee attack while within 5 ft of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.",
		}, {
			name: "Spider Climb",
			description: "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}
		],
		reactions: [{
			name: "Split",
			description: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding.",
		}
		],
	},
	"Blink Dog": {
		name: "Blink Dog",
		source: ["Monster Manual", 318],
		size: "Medium",
		type: "Fey",
		alignment: "Lawful Good",
		ac: [13, "", false],
		hp: 22,
		hd: [4, 8],
		speed: "40 ft",
		scores: [12, 17, 12, 10, 13, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +5",
		senses: "Adv. on Wis (Perception) checks using hearing/smell",
		passive_perception: 13,
		languages: "Blink Dog, understands Sylvan but can't speak it",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}
		],
		actions: [{
			name: "Teleport (Recharge 4-6)",
			description: "As an action, the dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.",
		}
		],
	},
	"Blood Hawk": {
		name: "Blood Hawk",
		source: ["Monster Manual", 319],
		size: "Small",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 7,
		hd: [2, 6],
		speed: "10 ft, fly 60 ft",
		scores: [6, 14, 10, 3, 14, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "Adv. on Wis (Perception) checks using sight",
		passive_perception: 14,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Beak",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
		}, {
			name: "Pack Tactics",
			description: "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Blue Dragon Wyrmling": {
		name: "Blue Dragon Wyrmling",
		source: ["Monster Manual", 91],
		size: "Medium",
		type: "Dragon",
		alignment: "Lawful Evil",
		ac: [17, "Natural Armor", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft, burrow 15 ft, fly 60 ft",
		scores: [17, 10, 15, 12, 11, 15],
		saves: ["", 2, 4, "", 2, 4],
		skills: "Perception +4, Stealth +2",
		damage_immunities: "lightning",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) lightning damage.",
		}
		],
		actions: [{
			name: "Lightning Breath (Recharge 5-6)",
			description: "The dragon exhales lightning in a 30-foot line that is 5 ft wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Blue Slaad": {
		name: "Blue Slaad",
		source: ["Monster Manual", 276],
		size: "Large",
		type: "aberration",
		alignment: "chaotic neutral",
		ac: [15, "Natural Armor", false],
		hp: 123,
		hd: [13, 10],
		speed: "30 ft",
		scores: [20, 15, 18, 7, 7, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +1",
		damage_resistances: "acid, cold, fire, lightning, thunder",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Slaad, telepathy 60 ft",
		challenge_rating: "7",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "If the target is a humanoid, it must succeed on a DC 15 Constitution saving throw or be infected with a disease called chaos phage. While infected, the target can't regain hit points, and its hit point maximum is reduced by 10 (3d6) every 24 hours. If the disease reduces the target's hit point maximum to 0, the target instantly transforms into a red slaad or, if it has the ability to cast spells of 3rd level or higher, a green slaad. Only a wish spell can reverse the transformation.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The slaad has advantage on saving throws against spells and other magical effects"
		}, {
			name: "Regeneration",
			description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
		}, {
			name: "Variant: Control Gem",
			description: [
				"Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.",
				"Certain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.",
				"A greater restoration spell cast on the slaad destroys the gem without harming the slaad.",
				"Someone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The slaad makes three attacks: one with its bite and two with its claws."
		}
		]
	},
	"Boar": {
		name: "Boar",
		source: ["Monster Manual", 319],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "Natural Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "40 ft",
		scores: [13, 11, 12, 2, 9, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: 9,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Tusk",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Charge trait",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the boar moves at least 20 ft straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. A targeted creature must succeed on a DC 11 Strength saving throw or be knocked prone.",
		}, {
			name: "Relentless (Recharges after a Short or Long Rest)",
			description: "If the boar takes 7 damage or less that would reduce it to 0 HP, it is reduced to 1 HP instead.",
		}
		],
	},
	"Bone Devil": {
		name: "Bone Devil",
		source: ["Monster Manual", 71],
		size: "Large",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [19, "Natural Armor", false],
		hp: 142,
		hd: [15, 10],
		speed: "40 ft, fly 40 ft",
		scores: [18, 16, 18, 13, 14, 16],
		saves: ["", "", "", 5, 6, 7],
		skills: "Deception +7, Insight +6",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 12,
		languages: "Infernal, telepathy 120 ft.",
		challenge_rating: "12",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Sting",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 17 (5d6) poison damage, target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success .",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the devil's Darkvision.",
		}, {
			name: "Magic Resistance",
			description: "The devil has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devil makes three attacks: two with its claws and one with its sting.",
		}
		],
	},
	"Bone Devil Polearm": {
		name: "Bone Devil Polearm",
		source: ["Monster Manual", 71],
		size: "Large",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [19, "Natural Armor", false],
		hp: 142,
		hd: [15, 10],
		speed: "40 ft, fly 40 ft",
		scores: [18, 16, 18, 13, 14, 16],
		saves: ["", "", "", "5", "6", "7"],
		skills: "Deception +7, Insight +6",
		damage_resistances: "cold, bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "9",
		languages: "Infernal, telepathy 120 ft",
		challenge_rating: "12",
		attacks: [{
			name: "Hooked Polearm",
			ability: 1,
			damage: [2, 12, "piercing"],
			range: "Melee (10 ft)",
			description: "If the target is a huge or smaller creature, it is grappled (escape DC 14). Until the grapple ends, the devil can't use its polearm on another target.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Sting",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. Target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Devil' s Sight",
			description: "Magical darkness doesn't impede the devil' s darkvision."
		}, {
			name: "Magic Resistance",
			description: "The devil has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devil makes three attacks: two with its hooked polearm and one with its sting."
		}
		]
	},
	"Bone Naga (Guardian)": {
		name: "Bone Naga (Guardian)",
		source: ["Monster Manual", 233],
		size: "Large",
		type: "undead",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 58,
		hd: [9, 10],
		speed: "30 ft",
		scores: [15, 16, 12, 15, 15, 16],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, paralyzed, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Common plus one other language",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 10 (3d6) poison damage.",
		}
		],
		spells: [
			"The naga is a 5th-level spellcaster (spell save DC 12, +4 to hit with spell attacks) that needs only verbal components to cast its spells. Its spellcasting ability is Wisdom, and it has the following cleric spells prepared:",
			"Cantrips (at will): mending, sacred flame, thaumaturgy",
			"1st level (4 slots): command, shield of faith", "2nd level (3 slots): calm emotions, hold person",
			"3rd level (2 slots): bestow curse"
		]
	},
	"Bone Naga (Spirit)": {
		name: "Bone Naga (Spirit)",
		source: ["Monster Manual",],
		size: "Large",
		type: "undead",
		alignment: "lawful evil",
		ac: [15, "Natural Armor", false],
		hp: 58,
		hd: [9, 10],
		speed: "30 ft",
		scores: [15, 16, 12, 15, 15, 16],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, paralyzed, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Common plus one other language",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 10 (3d6) poison damage.",
		}
		],
		spells: [
			"The naga is a 5th-level spellcaster (spell save DC 12,+4 to hit with spell attacks) that needs only verbal components to cast its spells. Its spellcasting ability is Intelligence, and it has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, minor illusion, ray of frost",
			"1st level (4 slots): charm person, sleep",
			"2nd level (3 slots): detect thoughts, hold person",
			"3rd level (2 slots): lightning bolt "
		]
	},
	"Brass Dragon Wyrmling": {
		name: "Brass Dragon Wyrmling",
		source: ["Monster Manual", 106],
		size: "Medium",
		type: "Dragon",
		alignment: "Chaotic Good",
		ac: [16, "Natural Armor", false],
		hp: 16,
		hd: [3, 8],
		speed: "30 ft, burrow 15 ft, fly 60 ft",
		scores: [15, 10, 13, 10, 11, 13],
		saves: ["", 2, 3, "", 2, 3],
		skills: "Perception +4, Stealth +2",
		damage_immunities: "fire",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Fire Breath. The dragon exhales fire in an 20-foot line that is 5 ft wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.",
				"Sleep Breath. The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
			]
		}
		],
	},
	"Bronze Dragon Wyrmling": {
		name: "Bronze Dragon Wyrmling",
		source: ["Monster Manual", 109],
		size: "Medium",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [17, "Natural Armor", false],
		hp: 32,
		hd: [5, 8],
		speed: "30 ft, fly 60 ft, swim 30 ft",
		scores: [17, 10, 15, 12, 11, 15],
		saves: ["", 2, 4, "", 2, 4],
		skills: "Perception +4, Stealth +2",
		damage_immunities: "lightning",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}
		],
		actions: [{
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Lightning Breath: The dragon exhales lightning in a 40-foot line that is 5 ft wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one.",
				"Repulsion Breath: The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 ft away from the dragon.",
			]
		}
		],
	},
	"Brown Bear": {
		name: "Brown Bear",
		source: ["Monster Manual", 319],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "Natural Armor", false],
		hp: 34,
		hd: [4, 10],
		speed: "40 ft, climb 30 ft",
		scores: [19, 10, 16, 2, 13, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Adv. on Wis (Perception) checks using smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "One bite and one claw attack as an Attack action",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "One claw and one bite attack as an Attack action",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
		}
		],
	},
	"Bugbear": {
		name: "Bugbear",
		source: ["Monster Manual", 33],
		size: "Medium",
		type: "Humanoid (goblinoid)",
		alignment: "Chaotic Evil",
		ac: [16, "Hide Armor", true],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft",
		scores: [15, 14, 13, 8, 11, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +6, Survival +2",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Common, Goblin",
		challenge_rating: "1",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Brute",
			description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).",
		}, {
			name: "Surprise Attack",
			description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.",
		}
		],
	},
	"Bugbear Chief": {
		name: "Bugbear Chief",
		source: ["Monster Manual", 33],
		size: "Medium",
		type: "humanoid (goblinoid), monster manual",
		alignment: "chaotic evil",
		ac: [17, "Chain Shirt", true],
		hp: 65,
		hd: [10, 8],
		speed: "30 ft",
		scores: [17, 14, 14, 11, 12, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +2, Stealth +6, Survival +3",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Common, Goblin",
		challenge_rating: "3",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 2,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft) )",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Brute",
			description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
		}, {
			name: "Surprise Attack",
			description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.",
		}, {
			name: "Heart of Hruggek",
			description: "The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The bugbear makes two melee attacks"
		}
		]
	},
	"Bulette": {
		name: "Bulette",
		source: ["Monster Manual", 34],
		size: "Large",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [17, "Natural Armor", false],
		hp: 94,
		hd: [9, 10],
		speed: "40 ft, burrow 40 ft",
		scores: [19, 11, 21, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6",
		senses: "Darkvision 60 ft; tremorsense 60 ft",
		passive_perception: 16,
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 12, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Standing Leap",
			description: "The bulette's long jump is up to 30 ft. and its high jump is up to 15 ft., with or without a running start.",
		}
		],
		actions: [{
			name: "Deadly Leap",
			description: "If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its ft. in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6+4) bludgeoning damage plus 14 (3d6+4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space.",
		}
		],
	},
	"Bullywug": {
		name: "Bullywug",
		source: ["Monster Manual", 35],
		size: "Medium",
		type: "humanoid (bullywug)",
		alignment: "neutral evil",
		ac: [15, "Hide Armor", true],
		hp: 11,
		hd: [2, 8],
		speed: "20 ft, swim 40 ft",
		scores: [12, 12, 13, 7, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +3",
		passive_perception: "10",
		languages: "Bullywug",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The bullywug can breathe air and water."
		}, {
			name: "Speak with Frogs and Toads",
			description: "The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug."
		}, {
			name: "Swamp Camouflage",
			description: "The bullywug has advantage on Dexterity (Stealth) checks made to hide in swampy terrain."
		}, {
			name: "Standing Leap",
			description: "The bullywug's long jump is up to 20 ft and its high jump is up to 10 ft, with or without a running start."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The bullywug makes two melee attacks: one with its bite and one with its spear."
		}
		]
	},
	"Cambion": {
		name: "Cambion",
		source: ["Monster Manual", 320],
		size: "Medium",
		type: "fiend",
		alignment: "any evil alignment",
		ac: [19, "Scale Mail", false],
		hp: 82,
		hd: [11, 8],
		speed: "30 ft, fly 60 ft",
		scores: [18, 18, 16, 14, 12, 16],
		saves: ["7", "", "6", "5", "", "6"],
		skills: "Deception +6, Intimidation +6, Perception +4, Stealth +7",
		damage_resistances: "cold, fire, lightning, poison, bludgeoning, piercing, and slashing from nonmagical weapons",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "Abyssal, Common, Infernal",
		challenge_rating: "5",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) fire damage; Two-Handed: 8 (1d8+4) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "Plus 3 (1d6) fire damage.",
		}, {
			name: "Fire Ray",
			ability: 2,
			damage: [3, 6, "fire"],
			range: "Ranged (120 ft)",
			modifiers: ["", "", false],
			description: "",
		}
		],
		traits: [{
			name: "Fiendish Blessing",
			description: "The AC of the cambion includes its Charisma bonus."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The cambion's spellcasting ability is Charisma (spell save DC 14). The cambion can innately cast the following spells, requiring no material components:",
				"3/day each: alter self, command, detect magic",
				"1/day: plane shift (self only)"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The cambion makes two melee attacks or uses its Fire Ray twice."
		}, {
			name: "Fiendish Charm",
			description: "One humanoid the cambion can see within 30 ft of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours."
		}
		],
	},
	"Camel": {
		name: "Camel",
		source: ["Monster Manual", 320],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [9, "", false],
		hp: 15,
		hd: [2, 10],
		speed: "50 ft",
		scores: [16, 8, 14, 2, 8, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: 9,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Carrion Crawler": {
		name: "Carrion Crawler",
		source: ["Monster Manual", 37],
		size: "Large",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 51,
		hd: [6, 10],
		speed: "30 ft, climb 30 ft",
		scores: [14, 13, 16, 1, 12, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Darkvision 60 ft",
		passive_perception: 13,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Tentacles",
			ability: 1,
			damage: [1, 4, "poison"],
			range: "Melee (10 ft)",
			dc: true,
			description: "Target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success.",
		}, {
			name: "Bite",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name: "Spider Climb",
			description: "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The carrion crawler makes two attacks: one with its tentacles and one with its bite.",
		}
		],
	},
	"Cat": {
		name: "Cat",
		source: ["Monster Manual", 320],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 2,
		hd: [1, 4],
		speed: "40 ft, climb 30 ft",
		scores: [3, 15, 10, 3, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		senses: "Adv. on Wis (Perception) checks using smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [1, "", "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The cat has advantage on Wisdom (Perception) checks that rely on smell.",
		}
		],
	},
	"Cave Bear": {
		name: "Cave Bear",
		source: ["Monster Manual", 334],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 42,
		hd: [5, 10],
		speed: "40 ft, swim 30 ft",
		scores: [20, 10, 16, 2, 13, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Darkvision 60 ft; Adv. on Wis (Perception) checks using smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "One bite and one claw attack as an Attack action",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "One claw and one bite attack as an Attack action",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
		}
		],
	},
	"Centaur": {
		name: "Centaur",
		source: ["Monster Manual", 38],
		size: "Large",
		type: "Monstrosity",
		alignment: "Neutral Good",
		ac: [12, "", false],
		hp: 45,
		hd: [6, 10],
		speed: "50 ft",
		scores: [18, 14, 14, 9, 13, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +6, Perception +3, Survival +3",
		passive_perception: 13,
		languages: "Elvish, Sylvan",
		challenge_rating: "2",
		attacks: [{
			name: "Pike",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Hooves",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the centaur moves at least 30 ft. straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.",
		}
		],
	},
	"Chain Devil": {
		name: "Chain Devil",
		source: ["Monster Manual", 72],
		size: "Medium",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [16, "Natural Armor", false],
		hp: 85,
		hd: [10, 8],
		speed: "30 ft",
		scores: [18, 15, 18, 11, 12, 14],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 11,
		languages: "Infernal, telepathy 120 ft.",
		challenge_rating: "11",
		attacks: [{
			name: "Chain",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "Target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the devil's Darkvision.",
		}, {
			name: "Magic Resistance",
			description: "The devil has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devil makes two attacks with its chains.",
		}, {
			name: "Animate Chains (Recharges after a Short or Long Rest)",
			description: [
				"Up to four chains the devil can see within 60 ft of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.",
				"Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies.",
			]
		}
		],
		reactions: [{
			name: "Unnerving Mask",
			description: "When a creature the devil can see starts its turn within 30 ft of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn.",
		}
		],
	},
	"Chasme": {
		name: "Chasme",
		source: ["Monster Manual", 57],
		size: "Large",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 84,
		hd: [13, 10],
		speed: "20 ft, fly 60 ft",
		scores: [15, 15, 12, 11, 14, 10],
		saves: ["", "5", "", "", "5", ""],
		skills: "Perception +5",
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "blindsight 10 ft, darkvision 120 ft",
		passive_perception: "15",
		languages: "Abyssal, telepathy 120 ft",
		challenge_rating: "6",
		attacks: [{
			name: "Proboscis",
			ability: 1,
			damage: [4, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 24 (7d6) necrotic damage, and the target's hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature's hit point maximum to 0, the creature dies. This reduction to a creature's hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration.",
		}
		],
		traits: [{
			name: "Drone",
			description: "The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn with in 30 feet of the chasme must succeed on a DC 12 Constitution saving throw or fall unconscious for 10 minutes. A creature that can't hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature's saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours."
		}, {
			name: "Magic Resistance",
			description: "The chasme has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Spider Climb",
			description: "The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
		actions: [{
			name: "Variant: Summon Demon (1/Day)",
			description: [
				"The demon chooses what to summon and attempts a magical summoning.",
				"A chasme has a 30 percent chance of summoning one chasme.",
				"A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
			]
		}
		]
	},
	"Chimera": {
		name: "Chimera",
		source: ["Monster Manual", 39],
		size: "Large",
		type: "Monstrosity",
		alignment: "Chaotic Evil",
		ac: [14, "Natural Armor", false],
		hp: 114,
		hd: [12, 10],
		speed: "30 ft, fly 60 ft",
		scores: [19, 11, 19, 3, 14, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +8",
		senses: "Darkvision 60 ft",
		passive_perception: 18,
		languages: "understands Draconic but can't speak",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Horns",
			ability: 1,
			damage: [1, 12, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.",
		}, {
			name: "Fire Breath (Recharge 5-6)",
			description: "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Chuul": {
		name: "Chuul",
		source: ["Monster Manual", 40],
		size: "Large",
		type: "Aberration",
		alignment: "Chaotic Evil",
		ac: [16, "Natural Armor", false],
		hp: 93,
		hd: [11, 10],
		speed: "30 ft, swim 30 ft",
		scores: [19, 10, 16, 5, 11, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "understands Deep Speech but can't speak",
		challenge_rating: "4",
		attacks: [{
			name: "Pincer",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			dc: true,
			description: "Target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The chuul can breathe air and water.",
		}, {
			name: "Sense Magic",
			description: "The chuul senses magic within 120 ft of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.",
		}, {
			name: "Tentacles",
			description: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Clay Golem": {
		name: "Clay Golem",
		source: ["Monster Manual", 168],
		size: "Large",
		type: "Construct",
		alignment: "Unaligned",
		ac: [14, "Natural Armor", false],
		hp: 133,
		hd: [14, 10],
		speed: "20 ft",
		scores: [20, 9, 18, 3, 8, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "acid, poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 9,
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "9",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic.",
		}
		],
		traits: [{
			name: "Acid Absorption",
			description: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt.",
		}, {
			name: "Berserk",
			description: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.",
		}, {
			name: "Immutable Form",
			description: "The golem is immune to any spell or effect that would alter its form.",
		}, {
			name: "Magic Resistance",
			description: "The golem has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Magic Weapons",
			description: "The golem's weapon attacks are magical.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The golem makes two slam attacks.",
		}, {
			name: "Haste (Recharge 5-6)",
			description: "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action.",
		}
		],
	},
	"Cloaker": {
		name: "Cloaker",
		source: ["Monster Manual", 41],
		size: "Large",
		type: "Aberration",
		alignment: "Chaotic Neutral",
		ac: [14, "Natural Armor", false],
		hp: 78,
		hd: [12, 10],
		speed: "10 ft, fly 40 ft",
		scores: [17, 15, 12, 13, 12, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		senses: "Darkvision 60 ft",
		passive_perception: 11,
		languages: "Deep Speech, Undercommon",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 ft of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Damage Transfer",
			description: "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half.",
		}, {
			name: "False Appearance",
			description: "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak.",
		}, {
			name: "Light Sensitivity",
			description: "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The cloaker makes two attacks: one with its bite and one with its tail.",
		}, {
			name: "Moan",
			description: "Each creature within 60 ft of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours.",
		}, {
			name: "Phantasms (Recharges after a Short or Long Rest)",
			description: [
				"The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.",
				"Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.",
				"A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.",
			]
		}
		],
	},
	"Cloud Giant": {
		name: "Cloud Giant",
		source: ["Monster Manual", 154],
		size: "Huge",
		type: "Giant",
		alignment: "Neutral Good/Evil",
		ac: [14, "Natural Armor", false],
		hp: 200,
		hd: [16, 12],
		speed: "40 ft",
		scores: [27, 10, 22, 12, 16, 16],
		saves: ["", "", 10, "", 7, 7],
		skills: "Insight +7, Perception +7",
		passive_perception: 17,
		languages: "Common, Giant",
		challenge_rating: "9",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The giant has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:",
				"At will: detect magic, fog cloud, light",
				"3/day each: feather fall, fly, misty step, telekinesis",
				"1/day each: control weather, gaseous form",
			],
		}, {
			name: "Multiattack",
			description: "The giant makes two morningstar attacks.",
		}
		],
	},
	"Cockatrice": {
		name: "Cockatrice",
		source: ["Monster Manual", 42],
		size: "Small",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 27,
		hd: [6, 6],
		speed: "20 ft, fly 40 ft",
		scores: [6, 12, 12, 2, 13, 5],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 11,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.",
		}
		],
	},
	"Commoner": {
		name: "Commoner",
		source: ["Monster Manual", 345],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [10, "", false],
		hp: 4,
		hd: [1, 8],
		speed: "30 ft",
		scores: [10, 10, 10, 10, 10, 10],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "any one language (usually Common)",
		challenge_rating: "0",
		attacks: [{
			name: "Club",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Constrictor Snake": {
		name: "Constrictor Snake",
		source: ["Monster Manual", 320],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 13,
		hd: [2, 10],
		speed: "30 ft, swim 30 ft",
		scores: [15, 14, 12, 1, 10, 3],
		saves: ["", "", "", "", "", ""],
		senses: "Blindsight 10 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Constrict",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled and restrained (escape DC 14); can't use constrict again until grapple ends",
		}
		],
	},
	"Copper Dragon Wyrmling": {
		name: "Copper Dragon Wyrmling",
		source: ["Monster Manual", 112],
		size: "Medium",
		type: "Dragon",
		alignment: "Chaotic Good",
		ac: [16, "Natural Armor", false],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft, climb 30 ft, fly 60 ft",
		scores: [15, 12, 13, 14, 11, 13],
		saves: ["", 3, 3, "", 2, 3],
		skills: "Perception +4, Stealth +3",
		damage_immunities: "acid",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Acid Breath: The dragon exhales acid in an 20-foot line that is 5 ft wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one.",
				"Slowing Breath: The dragon exhales gas in a 1 5-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
			]
		}
		],
	},
	"Couatl": {
		name: "Couatl",
		source: ["Monster Manual", 43],
		size: "Medium",
		type: "Celestial",
		alignment: "Lawful Good",
		ac: [19, "Natural Armor", false],
		hp: 97,
		hd: [13, 8],
		speed: "30 ft, fly 90 ft",
		scores: [16, 20, 17, 18, 20, 18],
		saves: ["", "", 5, "", 7, 6],
		damage_resistances: "radiant",
		damage_immunities: "psychic; bludgeoning, piercing, and slashing from nonmagical weapons",
		senses: "Truesight 120 ft",
		passive_perception: 15,
		languages: "all, telepathy 120 ft.",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.",
		}, {
			name: "Constrict",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:",
				"At will: detect evil and good, detect magic, detect thoughts",
				"3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield",
				"1/day each: dream, greater restoration, scrying",
			],
		}, {
			name: "Magic Weapons",
			description: "The couatl's weapon attacks are magical.",
		}, {
			name: "Shielded Mind",
			description: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.",
		}
		],
		actions: [{
			name: "Change Shape",
			description: [
				"The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).",
				"In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.",
			]
		}
		],
	},
	//COURTIER SEE NOBLE
	"Crab": {
		name: "Crab",
		source: ["Monster Manual", 320],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "Natural Armor", false],
		hp: 2,
		hd: [1, 4],
		speed: "20 ft, swim 20 ft",
		scores: [2, 11, 10, 1, 8, 2],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		senses: "Blindsight 30 ft",
		passive_perception: 9,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, "", "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The crab can breathe air and water.",
		}
		],
	},
	"Crawling Claw": {
		name: "Crawling Claw",
		source: ["Monster Manual", 44],
		size: "Tiny",
		type: "undead",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 2,
		hd: [1, 4],
		speed: "20 ft, climb 20 ft",
		scores: [13, 14, 11, 5, 10, 4],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "blindsight 30 ft (blind beyond this radius)",
		passive_perception: "10",
		languages: "understands Common but can' t speak",
		challenge_rating: "0",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Or slashing damage.",
		}
		],
		traits: [{
			name: "Turn Immunity",
			description: "The claw is immune to effects that turn undead."
		}
		],
	},
	"Crocodile": {
		name: "Crocodile",
		source: ["Monster Manual", 320],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 19,
		hd: [3, 10],
		speed: "20 ft, swim 20 ft",
		scores: [15, 10, 13, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Target is grappled and restrained (escape DC 12); can't use bite again until grapple ends",
		}
		],
		traits: [{
			name: "Hold Breath",
			description: "The crocodile can hold its breath for 15 minutes.",
		}
		],
	},
	"Cult Fanatic": {
		name: "Cult Fanatic",
		source: ["Monster Manual", 345],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Non-Good",
		ac: [13, "Leather Armor", false],
		hp: 22,
		hd: [6, 8],
		speed: "30 ft",
		scores: [11, 14, 12, 10, 13, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +4, Persuasion +4, Religion +2",
		passive_perception: 11,
		languages: "any one language (usually Common)",
		challenge_rating: "2",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dark Devotion",
			description: "The fanatic has advantage on saving throws against being charmed or frightened.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The fanatic makes two melee attacks.",
		}
		],
		spells: [
			"The fanatic is a 4th-level spellcaster. Its spell casting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:",
			"Cantrips (at will): light, sacred flame, thaumaturgy",
			"1st level (4 slots): command, inflict wounds, shield of faith",
			"2nd level (3 slots): hold person, spiritual weapon",
		],
	},
	"Cultist": {
		name: "Cultist",
		source: ["Monster Manual", 345],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Non-Good",
		ac: [12, "Leather Armor", false],
		hp: 9,
		hd: [2, 8],
		speed: "30 ft",
		scores: [11, 12, 10, 10, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +2, Religion +2",
		passive_perception: 10,
		languages: "any one language (usually Common)",
		challenge_rating: "1/8",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dark Devotion",
			description: "The cultist has advantage on saving throws against being charmed or frightened.",
		}
		],
	},
	"Cyclops": {
		name: "Cyclops",
		source: ["Monster Manual", 45],
		size: "Huge",
		type: "giant",
		alignment: "chaotic neutral",
		ac: [14, "Natural Armor", false],
		hp: 138,
		hd: [12, 12],
		speed: "30 ft",
		scores: [22, 11, 20, 8, 6, 10],
		saves: ["", "", "", "", "", ""],
		passive_perception: "8",
		languages: "Giant",
		challenge_rating: "6",
		attacks: [{
			name: "Greatclub",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Poor Depth Perception",
			description: "The cyclops has disadvantage on any attack roll against a target more than 30 ft away."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The cyclops makes two greatclub attacks."
		}
		]
	},
	"Dao": {
		name: "Dao",
		source: ["Monster Manual", 143],
		size: "Large",
		type: "elemental",
		alignment: "neutral evil",
		ac: [18, "Natural Armor", false],
		hp: 187,
		hd: [15, 10],
		speed: "30 ft, burrow 30 ft, fly 30 ft",
		scores: [23, 12, 24, 12, 13, 14],
		saves: ["", "", "", "5", "5", "6"],
		condition_immunities: "petrified",
		senses: "darkvision 120 ft",
		passive_perception: "11",
		languages: "Terran",
		challenge_rating: "11",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Maul",
			ability: 1,
			damage: [4, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a Huge or smaller creature, it must succeed on a DC 18 Strength check or be knocked prone.",
		}
		],
		traits: [{
			name: "Earth Glide",
			description: "The dao can burrow through nonmagical, unworked earth and stone. While doing so, the dao doesn't disturb the material it moves through."
		}, {
			name: "Elemental Demise",
			description: "If the dao dies, its body disintegrates into crystalline powder, leaving behind only equipment the dao was wearing or carrying."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dao's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: detect evil and good, detect magic, stone shape", "3/day each: passwall, move earth, tongues",
				"1/day each: conjure elemental (earth elemental only), gaseous form, invisibility, phantasmal killer, plane shift, wall of stone"
			]
		}, {
			name: "Sure-Footed",
			description: "The dao has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
		}, {
			name: "Variant: Genie Powers",
			description: [
				"Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.",
				"Disguises: Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.",
				"Wishes: The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year) and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.",
				"To be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The Dao makes two fist attacks or two maul attacks."
		}
		],
	},
	"Darkmantle": {
		name: "Darkmantle",
		source: ["Monster Manual", 46],
		size: "Small",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 22,
		hd: [5, 6],
		speed: "10 ft, fly 30 ft",
		scores: [16, 12, 13, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +3",
		senses: "Blindsight 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Crush",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: [
				"Darkmantle attaches to target. If target is >=Medium and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.",
				"While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.",
				"A creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 ft of movement.",
			]
		}
		],
		traits: [{
			name: "Echolocation",
			description: "The darkmantle can't use its Blindsight while deafened.",
		}, {
			name: "False Appearance",
			description: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.",
		}
		],
		actions: [{
			name: "Darkness Aura (1/day)",
			description: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.",
		}
		],
	},
	"Death Dog": {
		name: "Death Dog",
		source: ["Monster Manual", 321],
		size: "Medium",
		type: "Monstrosity",
		alignment: "Neutral Evil",
		ac: [12, "", false],
		hp: 39,
		hd: [6, 8],
		speed: "40 ft",
		scores: [15, 14, 14, 3, 13, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +4",
		senses: "Darkvision 120 ft",
		passive_perception: 15,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.",
		}
		],
		traits: [{
			name: "Two-Headed",
			description: "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dog makes two bite attacks.",
		}
		],
	},
	"Death Knight": {
		name: "Death Knight",
		source: ["Monster Manual", 47],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [20, "Plate", true],
		hp: 180,
		hd: [19, 8],
		speed: "30 ft",
		scores: [20, 11, 20, 12, 16, 18],
		saves: ["", "6", "", "", "9", "10"],
		damage_immunities: "necrotic, poison",
		condition_immunities: "exhaustion, frightened, poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "13",
		languages: "Abyssal, Common",
		challenge_rating: "17",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) necrotic damage; Two-Handed: 10 (1d10+5) slashing damage.",
		}
		],
		traits: [{
			name: "Undead Nature",
			description: "A death knight doesn't require air, food, drink, or sleep."
		}, {
			name: "Magic Resistance",
			description: "The death knight has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Marshal Undead",
			description: "Unless the death knight is incapacitated, it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The death knight makes three longsword attacks."
		}, {
			name: "Hellfire Orb (1/day)",
			description: "The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a DC 18 Dexterity saving throw . The sphere spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one."
		}
		],
		reactions: [{
			name: "Parry",
			description: "The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon."
		}
		],
		spells: [
			"The death knight is a 19th-level spell caster. Its spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). It has the following paladin spells prepared:",
			"1st level (4 slots): command, compelled duel, searing smite",
			"2nd level (3 slots): hold person, magic weapon",
			"3rd level (3 slots): dispel magic, elemental weapon", "4th level (3 slots): banishment, staggering smite",
			"5th level (2 slots): destructive wave (necrotic)"
		]
	},
	"Death Slaad": {
		name: "Death Slaad",
		source: ["Monster Manual", 278],
		size: "Medium",
		type: "aberration (shapechanger)",
		alignment: "chaotic evil",
		ac: [18, "Natural Armor", false],
		hp: 170,
		hd: [20, 8],
		speed: "30 ft",
		scores: [20, 15, 19, 15, 10, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +6, Perception +8",
		damage_resistances: "acid, cold, fire, lightning, thunder",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: "18",
		languages: "Slaad, telepathy 60 ft",
		challenge_rating: "10",
		attacks: [{
			name: "Bite (Slaad Form Only)",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) necrotic damage.",
		}, {
			name: "Claws (Slaad Form Only)",
			ability: 1,
			damage: [1, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) necrotic damage.",
		}, {
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) necrotic damage.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The slaad's innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). The slaad can innately cast the following spells, requiring no material components:",
				"At will: detect magic, detect thoughts, invisibility (self only), mage hand, major image",
				"2/day each: fear, fireball, fly, tongues",
				"1/day each: cloudkill, plane shift"
			]
		}, {
			name: "Magic Resistance",
			description: "The slaad has advantage on saving throws against spells and other magical effects"
		}, {
			name: "Magic Weapons",
			description: "The slaad's weapon attacks are magical."
		}, {
			name: "Regeneration",
			description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
		}, {
			name: "Variant: Control Gem",
			description: [
				"Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.",
				"Certain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.",
				"A greater restoration spell cast on the slaad destroys the gem without harming the slaad.",
				"Someone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The slaad makes three attacks: one with its bite and two with its claws or greatsword."
		}
		],
	},
	"Death Tyrant": {
		name: "Death Tyrant",
		source: ["Monster Manual", 29],
		size: "Large",
		type: "undead",
		alignment: "lawful evil",
		ac: [19, "Natural Armor", false],
		hp: 187,
		hd: [25, 10],
		speed: "0 ft, fly 20 ft (hover)",
		scores: [10, 14, 14, 19, 15, 19],
		saves: ["5", "", "7", "9", "7", "9"],
		skills: "Perception +12",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, paralyzed, petrified, poisoned, prone",
		senses: "darkvision 120 ft",
		passive_perception: "22",
		languages: "Deep Speech, Undercommon",
		challenge_rating: "14",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Negative Energy Cone",
			description: [
				"The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the tyrant decides which way the cone faces and whether the cone is active.",
				"Any creature in that area can't regain hit points. Any humanoid that dies there becomes a zombie under the tyrant's command. The dead humanoid retains its place in the initiative order and animates at the start of its next turn, provided that its body hasn't been completely destroyed."
			]
		}
		],
		actions: [{
			name: "Eye Rays",
			description: [
				"The death tyrant shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 ft of it:",
				"1. Charm Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be charmed by the death tyrant for 1 hour, or until the death tyrant harms the creature.",
				"2. Paralyzing Ray. The targeted creature must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"3. Fear Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"4. Slowing Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"5. Enervation Ray. The targeted creature must make a DC 17 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.",
				"6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 17 Strength saving throw or the death tyrant moves it up to 30 ft in any direction. It is restrained by the ray's telekinetic grip until the start of the death tyrant's next turn or until the death tyrant is incapacitated.",
				"If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 ft in any direction. The death tyrant can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.",
				"7. Sleep Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.",
				"8. Petrification Ray. The targeted creature must make a DC 17 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.",
				"9. Disintegration Ray. If the target is a creature, it must succeed on a DC 17 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.",
				"If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.", "10. Death Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points."
			]
		}
		],
		legendary_actions: [{
			name: "Eye Ray",
			description: "The death tyrant uses one random eye ray."
		}
		]
	},
	"Deep Gnome (Svirfneblin)": {
		name: "Deep Gnome (Svirfneblin)",
		source: ["Monster Manual", 164],
		size: "Small",
		type: "Humanoid (gnome)",
		alignment: "Neutral Good",
		ac: [15, "Chain Shirt", false],
		hp: 16,
		hd: [3, 6],
		speed: "20 ft",
		scores: [15, 14, 14, 12, 10, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Investigation +3, Perception +2, Stealth +4",
		senses: "Darkvision 120 ft",
		passive_perception: 12,
		languages: "Gnomish, Terran, Undercommon",
		challenge_rating: "1/2",
		attacks: [{
			name: "War Pick",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Poisoned Dart",
			ability: 2,
			damage: [1, 4, ""],
			range: "Ranged (30/120 ft)",
			description: "Target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success",
		}
		],
		traits: [{
			name: "Stone Camouflage",
			description: "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
		}, {
			name: "Gnome Cunning",
			description: "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The gnome's innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:",
				"At will: nondetection (self only)",
				"1/day each: blindness/deafness, blur, disguise self",
			],
		}
		],
	},
	"Deer": {
		name: "Deer",
		source: ["Monster Manual", 321],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 4,
		hd: [1, 8],
		speed: "50 ft",
		scores: [11, 16, 11, 2, 14, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: 12,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Demilich": {
		name: "Demilich",
		source: ["Monster Manual", 48],
		size: "Tiny",
		type: "undead",
		alignment: "neutral evil",
		ac: [20, "Natural Armor", false],
		hp: 80,
		hd: [20, 4],
		speed: "0 ft, fly 30 ft (hover)",
		scores: [1, 20, 10, 20, 17, 20],
		saves: ["", "", "6", "11", "9", "11"],
		damage_resistances: "bludgeoning, piercing, and slashing from magic weapons",
		damage_immunities: "necrotic, poison, psychic, bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone, stunned",
		senses: "truesight 120 ft",
		passive_perception: "13",
		challenge_rating: "18",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Avoidance",
			description: "If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the demilich fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Turn Immunity",
			description: "The demilich is immune to effects that turn undead."
		}
		],
		actions: [{
			name: "Howl (Recharge 5-6)",
			description: "The demilich emits a bloodcurdling howl. Each creature within 30 feet of the demilich that can hear the howl must succeed on a DC 15 Constitution saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn."
		}, {
			name: "Life Drain",
			description: "The demilich targets up to three creatures that it can see within 10 feet of it. Each target must succeed on a DC 19 Constitution saving throw or take 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets."
		}
		],
		legendary_actions: [{
			name: "Flight",
			description: "The demilich flies up to half its flying speed."
		}, {
			name: "Cloud of Dust",
			description: "The demilich magically swirls its dusty remains. Each creature within 10 feet of the demilich, including around a corner, must succeed on a DC 15 Constitution saving throw or be blinded until the end of the demilich' s next turn. A creature that succeeds on the saving throw is immune to this effect until the end of the demilich\'s next turn."
		}, {
			name: "Energy Drain (Costs 2 Actions)",
			description: "Each creature with in 30 feet of the demilich must make a DC 15 Constitution saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies. A creature's hit point maximum can be restored with the greater restoration spell or similar magic."
		}, {
			name: "Vile Curse (Costs 3 Actions)",
			description: "The demilich targets one creature it can see within 30 feet of it. The target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until the curse ends, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success."
		}
		]
	},
	"Deva": {
		name: "Deva",
		source: ["Monster Manual", 16],
		size: "Medium",
		type: "Celestial",
		alignment: "Lawful Good",
		ac: [17, "Natural Armor", false],
		hp: 136,
		hd: [16, 8],
		speed: "30 ft, fly 90 ft",
		scores: [18, 18, 18, 17, 20, 20],
		saves: ["", "", "", "", 9, 9],
		skills: "Insight +9, Perception +9",
		damage_resistances: "radiant; bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "Darkvision 120 ft",
		passive_perception: 19,
		languages: "all, telepathy 120 ft.",
		challenge_rating: "10",
		attacks: [{
			name: "Mace",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 18 (4d8) radiant damage.",
		}
		],
		traits: [{
			name: "Angelic Weapons",
			description: "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack).",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components:",
				"At will: detect evil and good",
				"1/day each: commune, raise dead",
			],
		}, {
			name: "Magic Resistance",
			description: "The deva has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The deva makes two melee attacks.",
		}, {
			name: "Healing Touch (3/Day)",
			description: "The deva touches another creature. The target magically regains 20 (4d8+2) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
		}, {
			name: "Change Shape",
			description: [
				"The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).",
				"In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.",
			]
		}
		],
	},
	"Dire Wolf": {
		name: "Dire Wolf",
		source: ["Monster Manual", 321],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [14, "Natural Armor", false],
		hp: 37,
		hd: [5, 10],
		speed: "50 ft",
		scores: [17, 15, 15, 3, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		senses: "Adv. on Wis (Perception) checks using hearing/smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 13 Strength saving throw or be knocked prone",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}, {
			name: "Pack Tactics",
			description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Displacer Beast": {
		name: "Displacer Beast",
		source: ["Monster Manual", 81],
		size: "Large",
		type: "monstrosity",
		alignment: "lawful evil",
		ac: [13, "Natural Armor", false],
		hp: 85,
		hd: [10, 10],
		speed: "40 ft",
		scores: [18, 15, 16, 6, 12, 8],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "11",
		challenge_rating: "3",
		attacks: [{
			name: "Tentacle",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 3 (1d6) piercing damage.",
		}
		],
		traits: [{
			name: "Avoidance",
			description: "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails ."
		}, {
			name: "Displacement",
			description: "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The displacer beast makes two attacks with its tentacles."
		}
		]
	},
	"Djinni": {
		name: "Djinni",
		source: ["Monster Manual", 144],
		size: "Large",
		type: "Elemental",
		alignment: "Chaotic Good",
		ac: [17, "Natural Armor", false],
		hp: 161,
		hd: [14, 10],
		speed: "30 ft, fly 90 ft",
		scores: [21, 15, 22, 15, 16, 20],
		saves: ["", 6, "", "", 7, 9],
		damage_immunities: "lightning, thunder",
		senses: "Darkvision 120 ft",
		passive_perception: 13,
		languages: "Auran",
		challenge_rating: "11",
		attacks: [{
			name: "Scimitar",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) lightning or thunder damage (djinni's choice).",
		}
		],
		traits: [{
			name: "Elemental Demise",
			description: "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: detect evil and good, detect magic, thunderwave 3/day each: create food and water (can create wine instead of water), tongues, wind walk",
				"1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift",
			],
		}, {
			name: "Variant: Genie Powers",
			description: [
				"Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.",
				"Disguises: Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.",
				"Wishes: The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.",
				"To be granted a wish, a creature within 60 ft of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.",
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The djinni makes three scimitar attacks.",
		}, {
			name: "Create Whirlwind",
			description: [
				"A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 ft of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 ft as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.",
				"A creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind.",
			]
		}
		],
	},
	"Doppelganger": {
		name: "Doppelganger",
		source: ["Monster Manual", 82],
		size: "Medium",
		type: "Monstrosity (shapechanger)",
		alignment: "Unaligned",
		ac: [14, "", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [11, 18, 14, 11, 12, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +6, Insight +3",
		damage_immunities: "charmed",
		senses: "Darkvision 60 ft",
		passive_perception: 11,
		languages: "Common",
		challenge_rating: "3",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
		}, {
			name: "Ambusher",
			description: "The doppelganger has advantage on attack rolls against any creature it has surprised.",
		}, {
			name: "Surprise Attack",
			description: "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The doppelganger makes two melee attacks.",
		}, {
			name: "Read Thoughts",
			description: "The doppelganger magically reads the surface thoughts of one creature within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target.",
		}
		],
	},
	"Draft Horse": {
		name: "Draft Horse",
		source: ["Monster Manual", 321],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 19,
		hd: [3, 10],
		speed: "40 ft",
		scores: [18, 10, 12, 2, 11, 7],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Dragon Turtle": {
		name: "Dragon Turtle",
		source: ["Monster Manual", 119],
		size: "Gargantuan",
		type: "Dragon",
		alignment: "Neutral",
		ac: [20, "Natural Armor", false],
		hp: 341,
		hd: [22, 20],
		speed: "20 ft, swim 40 ft",
		scores: [25, 10, 20, 10, 12, 12],
		saves: ["", 6, 11, "", 7, ""],
		damage_resistances: "fire",
		senses: "Darkvision 120 ft",
		passive_perception: 11,
		languages: "Aquan, Draconic",
		challenge_rating: "17",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 12, "piercing"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [3, 12, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 ft away from the dragon turtle and knocked prone.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon turtle can breathe air and water.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.",
		}, {
			name: "Steam Breath (Recharge 5-6)",
			description: "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.",
		}
		],
	},
	"Dretch": {
		name: "Dretch",
		source: ["Monster Manual", 57],
		size: "Small",
		type: "Fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [11, "Natural Armor", false],
		hp: 18,
		hd: [4, 6],
		speed: "20 ft",
		scores: [11, 11, 12, 5, 8, 3],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 9,
		languages: "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dretch makes two attacks: one with its bite and one with its claws.",
		}, {
			name: "Fetid Cloud (1/Day)",
			description: "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.",
		}
		],
	},
	"Drider": {
		name: "Drider",
		source: ["Monster Manual", 120],
		size: "Large",
		type: "Monstrosity",
		alignment: "Chaotic Evil",
		ac: [19, "Natural Armor", false],
		hp: 123,
		hd: [13, 10],
		speed: "30 ft, climb 30 ft",
		scores: [16, 16, 18, 13, 14, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +9",
		senses: "Darkvision 120 ft",
		passive_perception: 15,
		languages: "Elvish, Undercommon",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 9 (2d8) poison damage.",
		}, {
			name: "Longsword",
			ability: 1,
			damage: [1, 8, ""],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 4 (1d8) poison damage.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire",
			]
		}, {
			name: "Spider Climb",
			description: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
		}, {
			name: "Web Walker",
			description: "The drider ignores movement restrictions caused by webbing.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.",
		}
		],
	},
	"Drider Spellcaster": {
		name: "Drider Spellcaster",
		source: ["Monster Manual", 120],
		size: "Large",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [19, "Natural Armor", false],
		hp: 123,
		hd: [13, 10],
		speed: "30 ft, climb 30 ft",
		scores: [16, 16, 18, 13, 16, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +9",
		senses: "darkvision 120 ft",
		passive_perception: "15",
		languages: "Elvish, Undercommon",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 9 (2d8) poison damage.",
		}, {
			name: "Longsword",
			ability: 2,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 4 (1d8) poison damage.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire "
			]
		}, {
			name: "Spider Climb",
			description: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Web Walker",
			description: "The drider ignores movement restrictions caused by webbing."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack."
		}
		],
		spells: [
			"The drider is a 7th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14,+6 to hit with spell attacks). The drider has the following spells prepared from the cleric spell list:",
			"Cantrips (at will): poison spray, thaumaturgy",
			"1st level (4 slots): bane, detect magic, sanctuary",
			"2nd level (3 slots): hold person, silence",
			"3rd level (3 slots): clairvoyance, dispel magic",
			"4th level (2 slots): divination, freedom of movement "
		]
	},
	"Drow": {
		name: "Drow",
		source: ["Monster Manual", 128],
		size: "Medium",
		type: "Humanoid (elf)",
		alignment: "Neutral Evil",
		ac: [15, "Chain Shirt", false],
		hp: 13,
		hd: [3, 8],
		speed: "30 ft",
		scores: [10, 14, 10, 11, 11, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		senses: "Darkvision 120 ft",
		passive_perception: 12,
		languages: "Elvish, Undercommon",
		challenge_rating: "1/4",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire",
			]
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
		}
		],
	},
	"Drow Elite Warrior": {
		name: "Drow Elite Warrior",
		source: ["Monster Manual", 128],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [18, "Studded Leather", true],
		hp: 71,
		hd: [11, 8],
		speed: "30 ft",
		scores: [13, 18, 14, 11, 13, 12],
		saves: ["", "7", "5", "", "4", ""],
		skills: "Perception +4, Stealth +10",
		senses: "darkvision 120 ft",
		passive_perception: "14",
		languages: "Elvish, Undercommon",
		challenge_rating: "5",
		attacks: [{
			name: "Shortsword",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) poison damage.",
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire, levitate (self only)"
			]
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drow makes two shortsword attacks."
		}
		],
		reactions: [{
			name: "Parry",
			description: "The drow adds 3 to its AC against one melee attack that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon."
		}
		],
	},
	"Drow Mage": {
		name: "Drow Mage",
		source: ["Monster Manual", 129],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 45,
		hd: [10, 8],
		speed: "30 ft",
		scores: [9, 14, 10, 17, 13, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +6, Deception +5, Perception +4, Stealth +5",
		senses: "darkvision 120 ft",
		passive_perception: "14",
		languages: "Elvish, Undercommon",
		challenge_rating: "7",
		attacks: [{
			name: "Staff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) poison damage; Two-Handed: 3 (1d8-1) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire, levitate (self only)"
			]
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Summon Demon (1/day)",
			description: "The drow magically summons a quasit, or attempts to summon a shadow demon with a 50 percent chance of success. The summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
		}
		],
		spells: [
			"The drow is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The drow has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, minor illusion, poison spray, ray of frost", "1st level (4 slots): mage armor, magic missile, shield, witch bolt",
			"2nd level (3 slots): alter self, misty step, web",
			"3rd level (3 slots): fly, lightning bolt",
			"4th level (3 slots): Evard's black tentacles, greater invisibility",
			"5th level (2 slots): cloudkill"
		]
	},
	"Drow Priestess of Lolth": {
		name: "Drow Priestess of Lolth",
		source: ["Monster Manual", 129],
		size: "Medium",
		type: "humanoid (elf)",
		alignment: "neutral evil",
		ac: [15, "Scale Mail", false],
		hp: 71,
		hd: [13, 8],
		speed: "30 ft",
		scores: [10, 14, 12, 13, 17, 18],
		saves: ["", "", "4", "", "6", "7"],
		skills: "Insight +6, Perception +6, Religion +4, Stealth +5",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Elvish, Undercommon",
		challenge_rating: "8",
		attacks: [{
			name: "Scourge",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 17 (5d6) poison damage.",
		}
		],
		traits: [{
			name: "Fey Ancestry",
			description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The drow's spellcasting ability is Charisma (spell save DC 15. She can innately cast the following spells, requiring no material components:",
				"At will: dancing lights",
				"1/day each: darkness, faerie fire, levitate (self only)"
			]
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The drow makes two scourge attacks."
		}, {
			name: "Summon Demon (1/Day)",
			description: "The drow attempts to magically summon a yochlol with a 30 percent chance of success. If the attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
		}
		],
		spells: [
			"The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom (save DC 14, +6 to hit with spell attacks). The drow has the following cleric spells prepared:",
			"Cantrips (at will): guidance, poison spray, resistance, spare the dying, thaumaturgy",
			"1st level (4 slots): animal friendship, cure wounds, detect poison and disease, ray of sickness",
			"2nd level (3 slots): lesser restoration, protection from poison, web",
			"3rd level (3 slots): conjure animals (2 giant spiders), dispel magic",
			"4th level (3 slots): divination, freedom of movement",
			"5th level (2 slots): insect plague, mass cure wounds"
		]
	},
	"Druid": {
		name: "Druid",
		source: ["Monster Manual", 346],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [11, "", false],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft",
		scores: [10, 12, 13, 12, 15, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Medicine +4, Nature +3, Perception +4",
		passive_perception: 14,
		languages: "Druidic plus any two languages",
		challenge_rating: "2",
		attacks: [{
			name: "Quarterstaff",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "",
			description: "With shillelagh: +4 to hit; (1d8+2) bludgeoning damage",
		}
		],
		spells: [
			"The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:",
			"Cantrips (at will): druidcraft, produce flame, shillelagh",
			"1st level (4 slots): entangle, longstrider, speak with animals, thunderwave",
			"2nd level (3 slots): animal messenger, barkskin",
		]
	},
	"Dryad": {
		name: "Dryad",
		source: ["Monster Manual", 121],
		size: "Medium",
		type: "Fey",
		alignment: "Neutral",
		ac: [11, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "30 ft",
		scores: [10, 12, 11, 14, 15, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +5",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "Elvish, Sylvan",
		challenge_rating: "1",
		attacks: [{
			name: "Club",
			ability: 1,
			damage: [1, 4, ""],
			range: "Melee (5 ft)",
			description: "With shillelagh: +6 to hit, 1d8+4",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components:",
				"At will: druidcraft",
				"3/day each: entangle, goodberry",
				"1/day each: barkskin, pass without trace, shillelagh",
			]
		}, {
			name: "Magic Resistance",
			description: "The dryad has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Speak with Beasts and Plants",
			description: "The dryad can communicate with beasts and plants as if they shared a language.",
		}, {
			name: "Tree Stride",
			description: "Once on her turn, the dryad can use 10 ft. of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 ft. of the first tree, appearing in an unoccupied space within 5 ft. of the second tree. Both trees must be large or bigger.",
		}
		],
		actions: [{
			name: "Fey Charm",
			description: [
				"The dryad targets one humanoid or beast that she can see within 30 ft of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.",
				"Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.",
				"The dryad can have no more than one humanoid and up to three beasts charmed at a time.",
			]
		}
		],
	},
	"Duergar": {
		name: "Duergar",
		source: ["Monster Manual", 122],
		size: "Medium",
		type: "Humanoid (dwarf)",
		alignment: "Lawful Evil",
		ac: [16, "Scale Mail", true],
		hp: 26,
		hd: [4, 8],
		speed: "25 ft",
		scores: [14, 11, 14, 11, 10, 9],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "poison",
		senses: "Darkvision 120 ft",
		passive_perception: 10,
		languages: "Dwarvish, Undercommon",
		challenge_rating: "1",
		attacks: [{
			name: "War Pick",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 11 (2d8+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "Or 9 (2d6+2) piercing damage while enlarged.",
		}
		],
		traits: [{
			name: "Duergar Resilience",
			description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed.",
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
		}
		],
		actions: [{
			name: "Enlarge (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.",
		}, {
			name: "Invisibility (Recharges after a Short or Long Rest)",
			description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it .",
		}
		],
	},
	"Duodrone": {
		name: "Duodrone",
		source: ["Monster Manual", 225],
		size: "Medium",
		type: "construct",
		alignment: "construct",
		ac: [15, "Natural Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft",
		scores: [11, 13, 12, 6, 10, 7],
		saves: ["", "", "", "", "", ""],
		senses: "truesight 120 ft",
		passive_perception: "10",
		languages: "Modron",
		challenge_rating: "1/4",
		attacks: [{
			name: "Javelin (Melee)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}, {
			name: "Fist",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Axiomatic Mind",
			description: "The duodrone can't be compelled to act in a manner contrary to its nature or its instructions."
		}, {
			name: "Disintegration",
			description: "If the duodrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The duodrone makes two fist attacks or two javelin attacks."
		}
		]
	},
	"Dust Mephit": {
		name: "Dust Mephit",
		source: ["Monster Manual", 215],
		size: "Small",
		type: "Elemental",
		alignment: "Neutral Evil",
		ac: [12, "", false],
		hp: 17,
		hd: [5, 6],
		speed: "30 ft, fly 30 ft",
		scores: [5, 14, 10, 9, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		damage_vulnerabilities: "fire",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 12,
		languages: "Auran, Terran",
		challenge_rating: "1/2",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Death Burst",
			description: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 ft. of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Innate Spellcasting (1/Day)",
			description: "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma.",
		}
		],
		actions: [{
			name: "Blinding Breath (Recharge 6)",
			description: "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Variant: Summon Mephits (1/Day)",
			description: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
		}
		],
	},
	"Eagle": {
		name: "Eagle",
		source: ["Monster Manual", 322],
		size: "Small",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 3,
		hd: [1, 6],
		speed: "10 ft, fly 60 ft",
		scores: [6, 15, 10, 2, 14, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "Adv. on Wis (Perception) checks using sight",
		passive_perception: 14,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Talons",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight.",
		}
		],
	},
	"Earth Elemental": {
		name: "Earth Elemental",
		source: ["Monster Manual", 124],
		size: "Large",
		type: "Elemental",
		alignment: "Neutral",
		ac: [17, "Natural Armor", false],
		hp: 126,
		hd: [12, 10],
		speed: "30 ft, burrow 30 ft",
		scores: [20, 8, 20, 5, 10, 5],
		saves: ["", "", "", "", "", ""],
		damage_vulnerabilities: "thunder",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, paralyzed, petrified, poisoned, unconscious",
		senses: "Darkvision 60 ft; Tremorsense 60 ft",
		passive_perception: 10,
		languages: "Terran",
		challenge_rating: "5",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Two slam attacks as an Attack action",
		}
		],
		traits: [{
			name: "Earth Glide",
			description: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through.",
		}, {
			name: "Siege Monster",
			description: "The elemental deals double damage to objects and structures.",
		}
		],
	},
	"Efreeti": {
		name: "Efreeti",
		source: ["Monster Manual", 145],
		size: "Large",
		type: "Elemental",
		alignment: "Lawful Evil",
		ac: [17, "Natural Armor", false],
		hp: 200,
		hd: [16, 10],
		speed: "40 ft, fly 60 ft",
		scores: [22, 12, 24, 16, 15, 16],
		saves: ["", "", "", 7, 6, 7],
		damage_immunities: "fire",
		senses: "Darkvision 120 ft",
		passive_perception: 12,
		languages: "Ignan",
		challenge_rating: "11",
		attacks: [{
			name: "Scimitar",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) fire damage.",
		}, {
			name: "Hurl Flame",
			ability: 4,
			damage: [5, 6, "fire"],
			range: "Ranged (120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Elemental Demise",
			description: "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the djinni was wearing or carrying.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The efreeti's innate spell casting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: detect magic",
				"3/day: enlarge/reduce, tongues",
				"1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire",
			]
		}, {
			name: "Variant: Genie Powers",
			description: [
				"Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.",
				"Disguises: Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.",
				"Wishes: The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.",
				"To be granted a wish, a creature within 60 ft of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.",
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The efreeti makes two scimitar attacks or uses its Hurl Flame twice.",
		}
		],
	},
	"Elephant": {
		name: "Elephant",
		source: ["Monster Manual", 322],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 76,
		hd: [8, 12],
		speed: "40 ft",
		scores: [22, 9, 17, 3, 11, 6],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "4",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Trampling Charge trait",
		}, {
			name: "Stomp",
			ability: 1,
			damage: [3, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Can only be used on prone creatures (also see Trampling Charge trait)",
		}
		],
		traits: [{
			name: "Trampling Charge",
			description: "If the elephant moves at least 20 ft straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.",
		}
		],
	},
	"Elk": {
		name: "Elk",
		source: ["Monster Manual", 322],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 13,
		hd: [2, 10],
		speed: "50 ft",
		scores: [16, 10, 12, 2, 10, 6],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Ram",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Charge trait",
		}, {
			name: "Hooves",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the elk moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
		}
		],
	},
	"Empyrean": {
		name: "Empyrean",
		source: ["Monster Manual", 130],
		size: "Huge",
		type: "celestial (titan)",
		alignment: "chaotic good (75%) or neutral evil (25%)",
		ac: [22, "Natural Armor", false],
		hp: 313,
		hd: [19, 12],
		speed: "50 ft, fly 50 ft, swim 50 ft",
		scores: [30, 21, 30, 21, 22, 27],
		saves: ["17", "", "", "12", "13", "15"],
		skills: "Insight +13, Persuasion +15",
		damage_immunities: "bludgeoning, piercing, and slashing from nonmagical weapons",
		senses: "truesight 120 ft",
		passive_perception: "16",
		languages: "all",
		challenge_rating: "23",
		attacks: [{
			name: "Maul",
			ability: 1,
			damage: [6, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is a creature, it must succeed on a DC 15 Constitution saving throw or be stunned until the end of the empyrean's next turn.",
		}, {
			name: "Bolt",
			ability: 6,
			damage: [7, 6, ""],
			range: "Ranged (600 ft)",
			description: "Empyrean chooses the damage to be one of the following: acid, cold, fire, force, lightning, radiant, or thunder.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The empyrean's innate spellcasting ability is Charisma (spell save DC 23, +15 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: greater restoration, pass without trace, water breathing, water walk",
				"1/day each: commune, dispel evil and good, earthquake, fire storm, plane shift (self only)"
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the empyrean fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Magic Resistance",
			description: "The empyrean has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The empyrean's weapon attacks are magical."
		}
		],
		legendary_actions: [{
			name: "Attack",
			description: "The empyrean makes one attack."
		}, {
			name: "Bolster",
			description: "The empyrean bolsters all nonhostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn."
		}, {
			name: "Trembling Strike (Costs 2 Actions)",
			description: "The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a DC 25 Strength saving throw or be knocked prone."
		}
		],
	},
	"Erinyes": {
		name: "Erinyes",
		source: ["Monster Manual", 73],
		size: "Medium",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [18, "Plate", false],
		hp: 153,
		hd: [18, 8],
		speed: "30 ft, fly 60 ft",
		scores: [18, 16, 18, 14, 14, 18],
		saves: ["", 7, 8, "", 6, 8],
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Truesight 120 ft",
		passive_perception: 12,
		languages: "Infernal, telepathy 120 ft.",
		challenge_rating: "12",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 13 (3d8) poison damage; Two-Handed: 9 (1d10+4) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 13 (3d8) poison damage; target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.",
		}
		],
		traits: [{
			name: "Hellish Weapons",
			description: "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks).",
		}, {
			name: "Magic Resistance",
			description: "The erinyes has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The erinyes makes three attacks",
		}, {
			name: "Variant: Rope of Entanglement",
			description: "Some erinyes carry a rope of entanglement (detailed in the Dungeon Master's Guide). When such an erinyes uses its Multiattack, the erinyes can use the rope in place of two of the attacks.",
		}
		],
		reactions: [{
			name: "Parry",
			description: "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon.",
		}
		],
	},
	"Ettercap": {
		name: "Ettercap",
		source: ["Monster Manual", 131],
		size: "Medium",
		type: "Monstrosity",
		alignment: "Neutral Evil",
		ac: [13, "Natural Armor", false],
		hp: 44,
		hd: [8, 8],
		speed: "30 ft, climb 30 ft",
		scores: [14, 15, 13, 7, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4, Survival +3",
		senses: "Darkvision 60 ft",
		passive_perception: 13,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Spider Climb",
			description: "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}, {
			name: "Web Sense",
			description: "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web.",
		}, {
			name: "Web Walker",
			description: "The ettercap ignores movement restrictions caused by webbing.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The ettercap makes two attacks: one with its bite and one with its claws.",
		}, {
			name: "Web (Recharge 5-6)",
			description: "+4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to fire damage and immune to bludgeoning damage.",
		}, {
			name: "Variant: Web Garrote",
			description: "+4 to hit, reach 5 ft., one Medium or Small creature against which the ettercap has advantage on the attack roll. Hit: 4 (1d4+2) bludgeoning damage, and the target is grappled (escape DC 12). Until this grapple ends, the target can't breathe, and the ettercap has advantage on attack rolls against it.",
		}
		],
	},
	"Ettin": {
		name: "Ettin",
		source: ["Monster Manual", 132],
		size: "Large",
		type: "Giant",
		alignment: "Chaotic Evil",
		ac: [12, "Natural Armor", false],
		hp: 85,
		hd: [10, 10],
		speed: "40 ft",
		scores: [21, 8, 17, 6, 10, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "Giant, Orc",
		challenge_rating: "4",
		attacks: [{
			name: "Battleaxe",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Morningstar",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Two Heads",
			description: "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.",
		}, {
			name: "Wakeful",
			description: "When one of the ettin's heads is asleep, its other head is awake.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The ettin makes two attacks: one with its battleaxe and one with its morningstar.",
		}
		],
	},
	"Faerie Dragon (Blue)": {
		name: "Faerie Dragon (Blue)",
		source: ["Monster Manual", 133],
		size: "Tiny",
		type: "dragon",
		alignment: "chaotic good",
		ac: [15, "", false],
		hp: 14,
		hd: [4, 4],
		speed: "10 ft, fly 60 ft",
		scores: [3, 20, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Perception +3, Stealth +7",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Draconic, Sylvan",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 1, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "The Colors of Age",
			description: [
				"A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
				"Red — 5 years or less", "Orange — 6-10 years",
				"Yellow — 11-20 years",
				"Green — 21-30 years",
				"Blue — 31-40 years",
				"Indigo — 41-50 years",
				"Violet — 51 years or more",
				"A green or older faerie dragon's CR increases to 2"
			]
		}, {
			name: "Superior Invisibility",
			description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
		}, {
			name: "Limited Telepathy",
			description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
		}, {
			name: "Magic Resistance",
			description: "The faerie dragon has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.",
				"1/day each: color spray, dancing lights, mage hand, major image, minor illusion, mirror image, suggestion"
			]
		}
		],
		actions: [{
			name: "Euphoria Breath (Recharge 5-6)",
			description: [
				"The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
				"1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
				"5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
			]
		}
		],
	},
	"Faerie Dragon (Green)": {
		name: "Faerie Dragon (Green)",
		source: ["Monster Manual", 133],
		size: "Tiny",
		type: "dragon",
		alignment: "chaotic good",
		ac: [15, "", false],
		hp: 14,
		hd: [4, 4],
		speed: "10 ft, fly 60 ft",
		scores: [3, 20, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Perception +3, Stealth +7",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Draconic, Sylvan",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 1, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "The Colors of Age",
			description: [
				"A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
				"Red — 5 years or less",
				"Orange — 6-10 years",
				"Yellow — 11-20 years",
				"Green — 21-30 years",
				"Blue — 31-40 years",
				"Indigo — 41-50 years",
				"Violet — 51 years or more",
				"A green or older faerie dragon's CR increases to 2"
			]
		}, {
			name: "Superior Invisibility",
			description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
		}, {
			name: "Limited Telepathy",
			description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
		}, {
			name: "Magic Resistance",
			description: "The faerie dragon has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.",
				"1/day each: color spray, dancing lights, mage hand, minor illusion, mirror image, suggestion"
			]
		}
		],
		actions: [{
			name: "Euphoria Breath (Recharge 5-6)",
			description: [
				"The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
				"1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
				"5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
			]
		}
		],
	},
	"Faerie Dragon (Indigo)": {
		name: "Faerie Dragon (Indigo)",
		source: ["Monster Manual", 133],
		size: "Tiny",
		type: "dragon",
		alignment: "chaotic good",
		ac: [15, "", false],
		hp: 14,
		hd: [4, 4],
		speed: "10 ft, fly 60 ft",
		scores: [3, 20, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Perception +3, Stealth +7",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Draconic, Sylvan",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 1, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "The Colors of Age",
			description: [
				"A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
				"Red — 5 years or less",
				"Orange — 6-10 years",
				"Yellow — 11-20 years",
				"Green — 21-30 years",
				"Blue — 31-40 years",
				"Indigo — 41-50 years",
				"Violet — 51 years or more",
				"A green or older faerie dragon's CR increases to 2"
			]
		}, {
			name: "Superior Invisibility",
			description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
		}, {
			name: "Limited Telepathy",
			description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
		}, {
			name: "Magic Resistance",
			description: "The faerie dragon has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.",
				"1/day each: color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, suggestion"
			]
		}
		],
		actions: [{
			name: "Euphoria Breath (Recharge 5-6)",
			description: [
				"The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
				"1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
				"5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
			]
		}
		],
	},
	"Faerie Dragon (Orange)": {
		name: "Faerie Dragon (Orange)",
		source: ["Monster Manual", 133],
		size: "Tiny",
		type: "dragon",
		alignment: "chaotic good",
		ac: [15, "", false],
		hp: 14,
		hd: [4, 4],
		speed: "10 ft, fly 60 ft",
		scores: [3, 20, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Perception +3, Stealth +7",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Draconic, Sylvan",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 1, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "The Colors of Age",
			description: [
				"A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
				"Red — 5 years or less",
				"Orange — 6-10 years",
				"Yellow — 11-20 years",
				"Green — 21-30 years",
				"Blue — 31-40 years",
				"Indigo — 41-50 years",
				"Violet — 51 years or more",
				"A green or older faerie dragon's CR increases to 2"
			]
		}, {
			name: "Superior Invisibility",
			description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
		}, {
			name: "Limited Telepathy",
			description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
		}, {
			name: "Magic Resistance",
			description: "The faerie dragon has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.",
				"1/day each:color spray, dancing lights, mage hand, minor illusion"
			]
		}
		],
		actions: [{
			name: "Euphoria Breath (Recharge 5-6)",
			description: [
				"The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
				"1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
				"5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
			]
		}
		],
	},
	"Faerie Dragon (Red)": {
		name: "Faerie Dragon (Red)",
		source: ["Monster Manual", 133],
		size: "Tiny",
		type: "dragon",
		alignment: "chaotic good",
		ac: [15, "", false],
		hp: 14,
		hd: [4, 4],
		speed: "10 ft, fly 60 ft",
		scores: [3, 20, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Perception +3, Stealth +7",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Draconic, Sylvan",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 1, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "The Colors of Age",
			description: [
				"A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
				"Red — 5 years or less",
				"Orange — 6-10 years",
				"Yellow — 11-20 years",
				"Green — 21-30 years",
				"Blue — 31-40 years",
				"Indigo — 41-50 years",
				"Violet — 51 years or more", "A green or older faerie dragon's CR increases to 2."
			]
		}, {
			name: "Superior Invisibility",
			description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
		}, {
			name: "Limited Telepathy",
			description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
		}, {
			name: "Magic Resistance",
			description: "The faerie dragon has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.",
				"1/day each: dancing lights, mage hand, minor illusion"
			]
		}
		],
		actions: [{
			name: "Euphoria Breath (Recharge 5-6)",
			description: [
				"The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
				"1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
				"5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
			]
		}
		],
	},
	"Faerie Dragon (Violet)": {
		name: "Faerie Dragon (Violet)",
		source: ["Monster Manual", 133],
		size: "Tiny",
		type: "dragon",
		alignment: "chaotic good",
		ac: [15, "", false],
		hp: 14,
		hd: [4, 4],
		speed: "10 ft, fly 60 ft",
		scores: [3, 20, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Perception +3, Stealth +7",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Draconic, Sylvan",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 1, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "The Colors of Age",
			description: [
				"A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
				"Red — 5 years or less",
				"Orange — 6-10 years",
				"Yellow — 11-20 years",
				"Green — 21-30 years",
				"Blue — 31-40 years",
				"Indigo — 41-50 years",
				"Violet — 51 years or more",
				"A green or older faerie dragon's CR increases to 2"
			]
		}, {
			name: "Superior Invisibility",
			description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
		}, {
			name: "Limited Telepathy",
			description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
		}, {
			name: "Magic Resistance",
			description: "The faerie dragon has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.",
				"1/day each: color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, polymorph, suggestion"
			]
		}
		],
		actions: [{
			name: "Euphoria Breath (Recharge 5-6)",
			description: [
				"The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
				"1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
				"5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
			]
		}
		],
	},
	"Faerie Dragon (Yellow)": {
		name: "Faerie Dragon (Yellow)",
		source: ["Monster Manual", 133],
		size: "Tiny",
		type: "dragon",
		alignment: "chaotic good",
		ac: [15, "", false],
		hp: 14,
		hd: [4, 4],
		speed: "10 ft, fly 60 ft",
		scores: [3, 20, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, Perception +3, Stealth +7",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Draconic, Sylvan",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 1, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "The Colors of Age",
			description: [
				"A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
				"Red — 5 years or less",
				"Orange — 6-10 years",
				"Yellow — 11-20 years",
				"Green — 21-30 years",
				"Blue — 31-40 years",
				"Indigo — 41-50 years",
				"Violet — 51 years or more",
				"A green or older faerie dragon's CR increases to 2"
			]
		}, {
			name: "Superior Invisibility",
			description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
		}, {
			name: "Limited Telepathy",
			description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
		}, {
			name: "Magic Resistance",
			description: "The faerie dragon has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.",
				"1/day each: color spray, dancing lights, mage hand, minor illusion, mirror image"
			]
		}
		],
		actions: [{
			name: "Euphoria Breath (Recharge 5-6)",
			description: [
				"The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
				"1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
				"5-6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
			]
		}
		],
	},
	"Fire Elemental": {
		name: "Fire Elemental",
		source: ["Monster Manual", 125],
		size: "Large",
		type: "Elemental",
		alignment: "Neutral",
		ac: [13, "", false],
		hp: 102,
		hd: [12, 10],
		speed: "50 ft",
		scores: [10, 17, 16, 6, 10, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "fire, poison",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Ignan",
		challenge_rating: "5",
		attacks: [{
			name: "Touch",
			ability: 2,
			damage: [2, 6, "fire"],
			range: "Melee (5 ft)",
			description: "2 per Attack; ignites flammable; until action to douse, target 1d10 fire damage at start of its turn",
		}
		],
		traits: [{
			name: "Fire Form",
			description: "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 ft of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns.",
		}, {
			name: "Illumination",
			description: "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 ft.",
		}, {
			name: "Water Susceptibility",
			description: "For every 5 ft the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage.",
		}
		],
	},
	"Fire Giant": {
		name: "Fire Giant",
		source: ["Monster Manual", 154],
		size: "Huge",
		type: "Giant",
		alignment: "Lawful Evil",
		ac: [18, "Plate", false],
		hp: 162,
		hd: [13, 12],
		speed: "30 ft",
		scores: [25, 9, 23, 10, 14, 13],
		saves: ["", 3, 10, "", "", 5],
		skills: "Athletics +11, Perception +6",
		damage_immunities: "fire",
		passive_perception: 16,
		languages: "Giant",
		challenge_rating: "9",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [6, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two greatsword attacks.",
		}
		],
	},
	"Fire Snake": {
		name: "Fire Snake",
		source: ["Monster Manual", 265],
		size: "Medium",
		type: "elemental",
		alignment: "neutral evil",
		ac: [14, "Natural Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "30 ft",
		scores: [12, 14, 11, 7, 10, 8],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_vulnerabilities: "cold",
		damage_immunities: "fire",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "understands Ignan but can't speak",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) fire damage.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) fire damage.",
		}
		],
		traits: [{
			name: "Heated Body",
			description: "A creature that touches the snake or hits it with a melee attack while within 5 ft of it takes 3 (1d6) fire damage.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The snake makes two attacks: one with its bite and one with its tail."
		}
		]
	},
	"Flameskull": {
		name: "Flameskull",
		source: ["Monster Manual", 134],
		size: "Tiny",
		type: "undead",
		alignment: "neutral evil",
		ac: [13, "", false],
		hp: 40,
		hd: [9, 4],
		speed: "0 ft, fly 40 ft It can hover.",
		scores: [1, 17, 14, 16, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +5, Perception +2",
		damage_resistances: "lightning, necrotic, piercing",
		damage_immunities: "cold, fire, poison",
		condition_immunities: "charmed, frightened, paralyzed, poisoned, prone",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Common",
		challenge_rating: "4",
		attacks: [{
			name: "Fire Ray",
			ability: 4,
			damage: [3, 6, "fire"],
			range: "Ranged (30 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Illumination",
			description: "The flameskull sheds either dim light in a 15- foot radius, or bright light in a 15-foot radius and dim light for an additional 15 ft. It can switch between the options as an action."
		}, {
			name: "Magic Resistance",
			description: "The flameskull has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Rejuvenation",
			description: "If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a dispel magic or remove curse spell is cast on them."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The flameskull uses Fire Ray twice."
		}
		],
		spells: [
			"The flameskull is a 5th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It requires no somatic or material components to cast its spells. The flameskull has the following wizard spells prepared:",
			"Cantrips (at will): mage hand",
			"1st level (3 slots): magic missile, shield",
			"2nd level (2 slots): blur, flaming sphere",
			"3rd level (1 slot): fireball"
		]
	},
	"Flesh Golem": {
		name: "Flesh Golem",
		source: ["Monster Manual", 169],
		size: "Medium",
		type: "Construct",
		alignment: "Neutral",
		ac: [9, "", false],
		hp: 93,
		hd: [11, 8],
		speed: "30 ft",
		scores: [19, 9, 18, 6, 10, 5],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "lightning, poison; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "5",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Berserk",
			description: [
				"Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.",
				"The golem's creator, if within 60 ft of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again.",
			]
		}, {
			name: "Aversion of Fire",
			description: "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.",
		}, {
			name: "Immutable Form",
			description: "The golem is immune to any spell or effect that would alter its form.",
		}, {
			name: "Lightning Absorption",
			description: "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt.",
		}, {
			name: "Magic Resistance",
			description: "The golem has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Magic Weapons",
			description: "The golem's weapon attacks are magical.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The golem makes two slam attacks.",
		}
		],
	},
	"Flumph": {
		name: "Flumph",
		source: ["Monster Manual", 135],
		size: "Small",
		type: "aberration",
		alignment: "lawful good",
		ac: [12, "", false],
		hp: 7,
		hd: [2, 6],
		speed: "5 ft, fly 30 ft",
		scores: [6, 15, 10, 14, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +4, History +4, Religion +4",
		vulnerable: "psychic",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "understands Undercommon but can' t speak, telepathy 60 ft",
		challenge_rating: "1/8",
		attacks: [{
			name: "Tendrils",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4) acid damage. At the end of each of its turns, the target must make a DC 10 Constitution saving throw, taking 2 (1d4) acid damage on a failure or ending the recurring acid damage on a success. A lesser restoration spell cast on the target also ends the recurring acid damage.",
		}
		],
		traits: [{
			name: "Advanced Telepathy",
			description: "The flumph can perceive the content of any telepathic communication used within 60 feet of it, and it can't be surprised by creatures with any form of telepathy."
		}, {
			name: "Prone Deficiency",
			description: "If the flumph is knocked prone, roll a die. On an odd result, the flumph lands upside-down and is incapacitated. At the end of each of its turns, the flumph can make a DC 10 Dexterity saving throw, righting itself and ending the incapacitated condition if it succeeds."
		}, {
			name: "Telepathic Shroud",
			description: "The flumph is immune to any effect that would sense its emotions or read its thoughts, as well as all divination spells."
		}
		],
		actions: [{
			name: "Stench Spray (1/Day)",
			description: "Each creature in a 15-foot cone originating from the flumph must succeed on a DC 10 Dexterity saving throw or be coated in a foul-smelling liquid. A coated creature exudes a horrible stench for 1d4 hours. The coated creature is poisoned as long as the stench lasts, and other creatures are poisoned while with in 5 feet of the coated creature. A creature can remove the stench on itself by using a short rest to bathe in water, alcohol, or vinegar."
		}
		]
	},
	"Flying Snake": {
		name: "Flying Snake",
		source: ["Monster Manual", 322],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [14, "", false],
		hp: 5,
		hd: [2, 4],
		speed: "30 ft, fly 60 ft, swim 30 ft",
		scores: [4, 18, 11, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		senses: "Blindsight 10 ft",
		passive_perception: 11,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "Target also takes 3d4 poison damage",
		}
		],
		traits: [{
			name: "Flyby",
			description: "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
		}
		],
	},
	"Flying Sword": {
		name: "Flying Sword",
		source: ["Monster Manual", 20],
		size: "Small",
		type: "Construct",
		alignment: "Unaligned",
		ac: [17, "Natural Armor", false],
		hp: 17,
		hd: [5, 6],
		speed: "0 ft, fly 50 ft It can hover.",
		scores: [12, 15, 11, 1, 5, 1],
		saves: ["", 4, "", "", "", ""],
		damage_immunities: "poison, psychic",
		condition_immunities: "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
		senses: "Blindsight 60 ft (blind beyond this radius)",
		passive_perception: 7,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Antimagic Susceptibility",
			description: "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
		}, {
			name: "False Appearance",
			description: "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.",
		}
		],
	},
	"Fomorian": {
		name: "Fomorian",
		source: ["Monster Manual", 136],
		size: "Huge",
		type: "giant",
		alignment: "chaotic evil",
		ac: [14, "Natural Armor", false],
		hp: 149,
		hd: [13, 12],
		speed: "30 ft",
		scores: [23, 10, 20, 9, 14, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +8, Stealth +3",
		senses: "darkvision 120 ft",
		passive_perception: "18",
		languages: "Giant, Undercommon",
		challenge_rating: "8",
		attacks: [{
			name: "Greatclub",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The fomorian attacks twice with its greatclub or makes one greatclub attack and uses Evil Eye once."
		}, {
			name: "Evil Eye",
			description: "The fomorian magically forces a creature it can see within 60 feet of it to make a DC 14 Charisma saving throw. The creature takes 27 (6d8) psychic damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Curse of the Evil Eye (Recharges after a Short or Long Rest)",
			description: [
				"With a stare, the fomorian uses Evil Eye, but on a failed save, the creature is also cursed with magical deformities. While deformed, the creature has its speed halved and has disadvantage on ability checks, saving throws, and attacks based on Strength or Dexterity.",
				"The transformed creature can repeat the saving throw whenever it finishes a long rest, ending the effect on a success."
			]
		}
		]
	},
	"Frog": {
		name: "Frog",
		source: ["Monster Manual", 322],
		size: "Tiny",
		type: "beast",
		alignment: "unaligned",
		ac: [11, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "20 ft, swim 20 ft",
		scores: [1, 13, 8, 1, 8, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +1, Stealth +3",
		senses: "darkvision 30 ft",
		passive_perception: "11",
		challenge_rating: "0",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The frog can breathe air and water"
		}, {
			name: "Standing Leap",
			description: "The frog's long jump is up to 10 ft and its high jump is up to 5 ft, with or without a running start."
		}
		]
	},
	"Frost Giant": {
		name: "Frost Giant",
		source: ["Monster Manual", 155],
		size: "Huge",
		type: "Giant",
		alignment: "Neutral Evil",
		ac: [15, "Patchwork Armor", false],
		hp: 138,
		hd: [12, 12],
		speed: "40 ft",
		scores: [23, 9, 21, 9, 10, 12],
		saves: ["", "", 8, "", 3, 4],
		skills: "Athletics +9, Perception +3",
		damage_immunities: "cold",
		passive_perception: 13,
		languages: "Giant",
		challenge_rating: "8",
		attacks: [{
			name: "Greataxe",
			ability: 1,
			damage: [3, 12, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two greataxe attacks.",
		}
		],
	},
	"Galeb Duhr": {
		name: "Galeb Duhr",
		source: ["Monster Manual", 139],
		size: "Medium",
		type: "elemental",
		alignment: "neutral",
		ac: [16, "Natural Armor", false],
		hp: 85,
		hd: [9, 8],
		speed: "15 ft (30 ft when rolling, 60 ft rolling downhill)",
		scores: [20, 14, 20, 11, 12, 11],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, paralyzed, poisoned, petrified",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		passive_perception: "11",
		languages: "Terran",
		challenge_rating: "6",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the galeb duhr remains motionless, it is indistinguishable from a normal boulder."
		}, {
			name: "Rolling Charge",
			description: "If the galeb duhr rolls at least 20 ft straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
		}
		],
		actions: [{
			name: "Animate Boulders (1/Day)",
			description: "The galeb duhr magically animates up to two boulders it can see within 60 ft of it. A boulder has statistics like those of a galeb duhr, except it has Intelligence 1 and Charisma 1, it can't be charmed or frightened, and it lacks this action option. A boulder remains animated as long as the galeb duhr maintains concentration, up to 1 minute (as if concentrating on a spell)."
		}
		]
	},
	"Gargoyle": {
		name: "Gargoyle",
		source: ["Monster Manual", 140],
		size: "Medium",
		type: "Elemental",
		alignment: "Chaotic Evil",
		ac: [15, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "30 ft, fly 60 ft",
		scores: [15, 11, 16, 6, 11, 7],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, petrified, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Terran",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the gargoyle remains motion less, it is indistinguishable from an inanimate statue.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gargoyle makes two attacks: one with its bite and one with its claws.",
		}
		],
	},
	"Gas Spore": {
		name: "Gas Spore",
		source: ["Monster Manual", 138],
		size: "Large",
		type: "plant",
		alignment: "unaligned",
		ac: [5, "", false],
		hp: 1,
		hd: [1, 10],
		speed: "0 ft, fly 10 ft (hover)",
		scores: [5, 1, 3, 1, 1, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "blinded, deafened, frightened, paralyzed, poisoned, prone",
		senses: "blindsight 30 ft (blind beyond this radius)",
		passive_perception: "5",
		challenge_rating: "1/2",
		attacks: [{
			name: "Touch",
			ability: 1,
			damage: [1, 1, "poison"],
			range: "Melee (5 ft)",
			description: "The creature must succeed on a DC 10 Constitution saving throw or become infected with the disease described in the Death Burst trait.",
		}
		],
		traits: [{
			name: "Death Burst",
			description: [
				"The gas spore explodes when it drops to 0 hit points. Each creature within 20 feet of it must succeed on a DC 15 Constitution saving throw or take 10 (3d6) poison damage and become infected with a disease on a failed save. Creatures immune to the poisoned condition are immune to this disease.",
				"Spores invade an infected creature's system, killing the creature in a number of hours equal to 1d12+the creature's Constitution score, unless the disease is removed. In half that time, the creature becomes poisoned for the rest of the duration. After the creature dies, it sprouts 2d4 Tiny gas spores that grow to full size in 7 days."
			],
		}, {
			name: "Eerie Resemblance",
			description: "The gas spore resembles a beholder. A creature that can see the gas spore can discern its true nature with a successful DC 15 Intelligence (Nature) check."
		}
		],
	},
	"Gelatinous Cube": {
		name: "Gelatinous Cube",
		source: ["Monster Manual", 242],
		size: "Large",
		type: "Ooze",
		alignment: "Unaligned",
		ac: [6, "", false],
		hp: 84,
		hd: [8, 10],
		speed: "15 ft",
		scores: [14, 3, 20, 1, 6, 1],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
		senses: "Blindsight 60 ft (blind beyond this radius)",
		passive_perception: 8,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [3, 6, "acid"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Ooze Cube",
			description: [
				"The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.",
				"Creatures inside the cube can be seen but have total cover.",
				"A creature within 5 ft of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.",
				"The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.",
			]
		}, {
			name: "Transparent",
			description: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.",
		}
		],
		actions: [{
			name: "Engulf",
			description: [
				"The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.",
				"On a successful save, the creature can choose to be pushed 5 ft back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.",
				"On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.",
				"An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 ft of the cube.",
			]
		}
		],
	},
	"Ghast": {
		name: "Ghast",
		source: ["Monster Manual", 148],
		size: "Medium",
		type: "Undead",
		alignment: "Chaotic Evil",
		ac: [12, "", false],
		hp: 36,
		hd: [5, 8],
		speed: "30 ft",
		scores: [16, 17, 10, 11, 10, 8],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "necrotic",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Common",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Stench",
			description: "Any creature that starts its turn within 5 ft of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours.",
		}, {
			name: "Turn Defiance",
			description: "The ghast and any ghouls within 30 ft of it have advantage on saving throws against effects that turn undead.",
		}
		],
	},
	"Ghost": {
		name: "Ghost",
		source: ["Monster Manual", 147],
		size: "Medium",
		type: "Undead",
		alignment: "Any Alignment",
		ac: [11, "", false],
		hp: 45,
		hd: [10, 8],
		speed: "0 ft, fly 40 ft It can hover.",
		scores: [7, 13, 10, 10, 12, 17],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "cold, necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "Darkvision 60 ft",
		passive_perception: 11,
		languages: "any languages it knew in life",
		challenge_rating: "4",
		attacks: [{
			name: "Withering Touch",
			ability: 6,
			damage: [4, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Ethereal Sight",
			description: "The ghost can see 60 ft. into the Ethereal Plane when it is on the Material Plane, and vice versa.",
		}, {
			name: "Incorporeal Movement",
			description: "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
		}
		],
		actions: [{
			name: "Etherealness",
			description: "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.",
		}, {
			name: "Horrifying Visage",
			description: "Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 _ 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring.",
		}, {
			name: "Possession (Recharge 6)",
			description: [
				"One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.",
				"The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends.",
			]
		}
		],
	},
	"Ghoul": {
		name: "Ghoul",
		source: ["Monster Manual", 148],
		size: "Medium",
		type: "Undead",
		alignment: "Chaotic Evil",
		ac: [12, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "30 ft",
		scores: [13, 15, 10, 7, 10, 6],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Common",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Giant Ape": {
		name: "Giant Ape",
		source: ["Monster Manual", 323],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 157,
		hd: [15, 12],
		speed: "40 ft, climb 40 ft",
		scores: [23, 14, 18, 7, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +9, Perception +4",
		passive_perception: 14,
		languages: "",
		challenge_rating: "7",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [3, 10, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Two fist attacks as an Attack action",
		}, {
			name: "Rock",
			ability: 1,
			damage: [7, 6, "bludgeoning"],
			range: "50/100 ft",
			description: "One rock attack as an Attack action",
		}
		],
	},
	"Giant Badger": {
		name: "Giant Badger",
		source: ["Monster Manual", 323],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 13,
		hd: [2, 8],
		speed: "30 ft, burrow 10 ft",
		scores: [13, 10, 15, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 30 ft; Adv. on Wis (Perception) checks using smell",
		passive_perception: 11,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "One bite and one claws attack as an Attack action",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "One claws and one bite attack as an Attack action",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The badger has advantage on Wisdom (Perception) checks that rely on smell.",
		}
		],
	},
	"Giant Bat": {
		name: "Giant Bat",
		source: ["Monster Manual", 323],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 22,
		hd: [4, 10],
		speed: "10 ft, fly 60 ft",
		scores: [15, 16, 11, 2, 12, 6],
		saves: ["", "", "", "", "", ""],
		senses: "Blindsight 60 ft; Adv. on Wis (Perception) checks using hearing",
		passive_perception: 11,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Echolocation",
			description: "The bat can't use its Blindsight while deafened.",
		}, {
			name: "Keen Hearing",
			description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing.",
		}
		],
	},
	"Giant Boar": {
		name: "Giant Boar",
		source: ["Monster Manual", 323],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 42,
		hd: [5, 10],
		speed: "40 ft",
		scores: [17, 10, 16, 2, 7, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: 8,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Tusk",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Charge trait",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the boar hits with a tusk attack after moving at least 20 ft straight toward a target on the same turn, the target takes an extra 2d6 slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
		}, {
			name: "Relentless (Recharges after a Short or Long Rest)",
			description: "If the boar takes 10 damage or less that would reduce it to 0 HP, it is reduced to 1 HP instead.",
		}
		],
	},
	"Giant Centipede": {
		name: "Giant Centipede",
		source: ["Monster Manual", 323],
		size: "Small",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 4,
		hd: [1, 6],
		speed: "30 ft, climb 30 ft",
		scores: [5, 14, 12, 1, 7, 3],
		saves: ["", "", "", "", "", ""],
		senses: "Blindsight 30 ft",
		passive_perception: 8,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 11 Constitution saving throw or take 3d6 poison damage",
		}
		],
		traits: [{
			name: "Bite",
			description: "If the poison damage from the centipede's bite attack reduces the target to 0 HP, the target is stable but poisoned for 1 hour, even after regaining HP, and is paralyzed while poisoned in this way.",
		}
		],
	},
	"Giant Constrictor Snake": {
		name: "Giant Constrictor Snake",
		source: ["Monster Manual", 324],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 60,
		hd: [8, 12],
		speed: "30 ft, swim 30 ft",
		scores: [19, 14, 12, 1, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "Blindsight 10 ft",
		passive_perception: 12,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Constrict",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled and restrained (escape DC 16); can't use constrict again until grapple ends",
		}
		],
	},
	"Giant Crab": {
		name: "Giant Crab",
		source: ["Monster Manual", 324],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 13,
		hd: [3, 8],
		speed: "30 ft, swim 30 ft",
		scores: [13, 15, 11, 1, 9, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +4",
		senses: "Blindsight 30 ft",
		passive_perception: 9,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled and restrained (escape DC 11); can't use a claw again until grapple ends",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The crab can breathe air and water.",
		}
		],
	},
	"Giant Crocodile": {
		name: "Giant Crocodile",
		source: ["Monster Manual", 324],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [14, "Natural Armor", false],
		hp: 85,
		hd: [9, 12],
		speed: "30 ft, swim 50 ft",
		scores: [21, 9, 17, 2, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		passive_perception: 10,
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Target is grappled and restrained (escape DC 16); can't use bite again until grapple ends",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target must succeed on a DC 16 Strength saving throw or be knocked prone",
		}
		],
		traits: [{
			name: "Hold Breath",
			description: "The crocodile can hold its breath for 30 minutes.",
		}, {
			name: "Multiattack",
			description: "The crocodile makes two attacks: one with its bite and one with its tail (to a target it is not grappling).",
		}
		],
	},
	"Giant Eagle": {
		name: "Giant Eagle",
		source: ["Monster Manual", 324],
		size: "Large",
		type: "Beast",
		alignment: "Neutral Good",
		ac: [13, "", false],
		hp: 26,
		hd: [4, 10],
		speed: "10 ft, fly 80 ft",
		scores: [16, 17, 13, 8, 14, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "Adv. on Wis (Perception) checks using sight",
		passive_perception: 14,
		languages: "Giant Eagle, understands Common and Auran but can't speak",
		challenge_rating: "1",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "One beak and one talons attack as an Attack action",
		}, {
			name: "Talons",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "One talons and one beak attack as an Attack action",
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight.",
		}
		],
	},
	"Giant Elk": {
		name: "Giant Elk",
		source: ["Monster Manual", 325],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 42,
		hd: [5, 12],
		speed: "60 ft",
		scores: [19, 16, 14, 7, 14, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		passive_perception: 14,
		languages: "Giant Elk, understands Common, Elvish, and Sylvan but can't speak",
		challenge_rating: "2",
		attacks: [{
			name: "Ram",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If used after moving 20 ft straight in the same round, see Charge trait",
		}, {
			name: "Hooves",
			ability: 1,
			damage: [4, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the elk moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
		}
		],
	},
	"Giant Fire Beetle": {
		name: "Giant Fire Beetle",
		source: ["Monster Manual", 325],
		size: "Small",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 4,
		hd: [1, 6],
		speed: "30 ft",
		scores: [8, 10, 12, 1, 7, 3],
		saves: ["", "", "", "", "", ""],
		senses: "Blindsight 30 ft",
		passive_perception: 8,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Illumination",
			description: "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft.",
		}
		],
	},
	"Giant Fly": {
		name: "Giant Fly",
		source: ["Monster Manual", 0],
		size: "Large",
		type: "beast",
		alignment: "unaligned",
		ac: [11, "", false],
		hp: 19,
		hd: [3, 10],
		speed: "30 ft, fly 60 ft",
		scores: [14, 13, 13, 2, 10, 3],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "10",
		challenge_rating: "0",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Giant Frog": {
		name: "Giant Frog",
		source: ["Monster Manual", 325],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 18,
		hd: [4, 8],
		speed: "30 ft, swim 30 ft",
		scores: [12, 13, 11, 2, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +3",
		senses: "Darkvision 30 ft",
		passive_perception: 12,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target is grappled and restrained (escape DC 11); can't use bite again until grapple ends",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The frog can breathe air and water",
		}, {
			name: "Standing Leap",
			description: "The frog's long jump is up to 20 ft and its high jump is up to 10 ft, with or without a running start.",
		}, {
			name: "Swallow",
			description: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft of movement, exiting prone.",
		}
		],
	},
	"Giant Goat": {
		name: "Giant Goat",
		source: ["Monster Manual", 326],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "Natural Armor", false],
		hp: 19,
		hd: [3, 10],
		speed: "40 ft",
		scores: [17, 11, 12, 3, 12, 6],
		saves: ["", "", "", "", "", ""],
		passive_perception: 11,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Ram",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Charge trait",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the goat hits with a ram attack after moving at least 20 ft straight toward a target on the same turn, the target takes an extra 2d4 bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
		}, {
			name: "Sure-Footed",
			description: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
		}
		],
	},
	"Giant Hyena": {
		name: "Giant Hyena",
		source: ["Monster Manual", 326],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 45,
		hd: [6, 10],
		speed: "50 ft",
		scores: [16, 14, 14, 2, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "After reducing opponent to 0 HP, take bonus action to move and attack (see Rampage trait)",
		}
		],
		traits: [{
			name: "Rampage",
			description: "When the hyena reduces a creature to 0 HP with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack.",
		}
		],
	},
	"Giant Lizard": {
		name: "Giant Lizard",
		source: ["Monster Manual", 326],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 19,
		hd: [3, 10],
		speed: "30 ft, climb 30 ft",
		scores: [15, 12, 13, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 30 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Variant: Hold Breath",
			description: "The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 ft.)",
		}, {
			name: "Variant: Spider Climb",
			description: "The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}
		],
	},
	"Giant Octopus": {
		name: "Giant Octopus",
		source: ["Monster Manual", 326],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "Natural Armor", false],
		hp: 52,
		hd: [8, 10],
		speed: "10 ft, swim 60 ft",
		scores: [17, 13, 13, 4, 10, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +5",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Tentacles",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "Target is grappled and restrained (escape DC 16); can't use tentacles again until grapple ends",
		}
		],
		traits: [{
			name: "Hold Breath",
			description: "While out of water, the octopus can hold its breath for 1 hour.",
		}, {
			name: "Underwater Camouflage",
			description: "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
		}, {
			name: "Water Breathing",
			description: "The octopus can breathe only underwater.",
		}
		],
		actions: [{
			name: "Ink Cloud (Recharges after a Short or Long Rest)",
			description: "As an action, a 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
		}
		],
	},
	"Giant Owl": {
		name: "Giant Owl",
		source: ["Monster Manual", 327],
		size: "Large",
		type: "Beast",
		alignment: "Neutral",
		ac: [12, "", false],
		hp: 19,
		hd: [3, 10],
		speed: "5 ft, fly 60 ft",
		scores: [13, 15, 12, 8, 13, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +4",
		senses: "Darkvision 120 ft; Adv. on Wis (Perception) checks using hearing/sight",
		passive_perception: 15,
		languages: "Giant Owl, understands Common, Elvish, and Sylvan but can't speak",
		challenge_rating: "1/4",
		attacks: [{
			name: "Talons",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Flyby",
			description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
		}, {
			name: "Keen Hearing and Sight",
			description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
		}
		],
	},
	"Giant Poisonous Snake": {
		name: "Giant Poisonous Snake",
		source: ["Monster Manual", 327],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [14, "", false],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft, swim 30 ft",
		scores: [10, 18, 13, 2, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "Blindsight 10 ft",
		passive_perception: 12,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (10 ft)",
			description: "Target also takes 3d6 poison damage, half on a DC 11 Constitution saving throw",
		}
		],
	},
	"Giant Rat": {
		name: "Giant Rat",
		source: ["Monster Manual", 327],
		size: "Small",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 7,
		hd: [2, 6],
		speed: "30 ft",
		scores: [7, 15, 11, 2, 10, 4],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft; Adv. on Wis (Perception) checks using smell",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name: "Pack Tactics",
			description: "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Giant Rat (diseased)": {
		name: "Giant Rat (Diseased)",
		source: ["Monster Manual", 327],
		size: "Small",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 7,
		hd: [2, 6],
		speed: "30 ft",
		scores: [7, 15, 11, 2, 10, 4],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 10 Constitution saving throw or contract a disease",
		}
		],
		traits: [{
			name: "Disease",
			description: "A target that contracted the disease by the bite attack of the diseased giant rat has it until the disease is cured. It can't regain HP except by magical means, and the it's HP maximum decreases by 3 (1d6) every 24 hours. If the target's HP maximum drops to 0 as a result of this disease, the target dies.",
		}
		],
	},
	"Giant Scorpion": {
		name: "Giant Scorpion",
		source: ["Monster Manual", 327],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 52,
		hd: [7, 10],
		speed: "40 ft",
		scores: [15, 13, 15, 1, 9, 3],
		saves: ["", "", "", "", "", ""],
		senses: "Blindsight 60 ft",
		passive_perception: 9,
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled and restrained (escape DC 12); can't use a claw again until grapple ends",
		}, {
			name: "Sting",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Target also takes 4d10 poison damage, half on a DC 12 Constitution saving throw",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The scorpion makes three attacks: two with its claws and one with its sting.",
		}
		],
	},
	"Giant Sea Horse": {
		name: "Giant Sea Horse",
		source: ["Monster Manual", 328],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 16,
		hd: [3, 10],
		speed: "0 ft, swim 40 ft",
		scores: [12, 15, 11, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: 11,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Ram",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Charge trait",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the sea horse moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
		}, {
			name: "Water Breathing",
			description: "The sea horse can breathe only underwater.",
		}
		],
	},
	"Giant Shark": {
		name: "Giant Shark",
		source: ["Monster Manual", 328],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 126,
		hd: [11, 12],
		speed: "swim 50 ft",
		scores: [23, 11, 21, 1, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Blindsight 60 ft",
		passive_perception: 13,
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Blood Frenzy",
			description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its HP.",
		}, {
			name: "Water Breathing",
			description: "The shark can breathe only underwater.",
		}
		],
	},
	"Giant Spider": {
		name: "Giant Spider",
		source: ["Monster Manual", 328],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [14, "Natural Armor", false],
		hp: 26,
		hd: [4, 10],
		speed: "30 ft, climb 30 ft",
		scores: [14, 16, 12, 2, 11, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +7",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Target also takes 2d8 poison damage, half on a DC 11 Constitution saving throw",
		}, {
			name: "Web (Recharge 5-6)",
			ability: 2,
			damage: ["Restrained", "", ""],
			range: "30/60 ft",
			description: "On a hit, the target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
		}
		],
		traits: [{
			name: "Bite",
			description: "If the poison damage from the spider's bite attack reduces the target to 0 HP, the target is stable but poisoned for 1 hour, even after regaining HP, and is paralyzed while poisoned in this way.",
		}, {
			name: "Spider Climb",
			description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}, {
			name: "Web Sense",
			description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
		}, {
			name: "Web Walker",
			description: "The spider ignores movement restrictions caused by webbing.",
		}
		],
		actions: [{
			name: "Web (Recharge 5-6)",
			description: "See attack. On a hit, the target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
		}
		],
	},
	"Giant Toad": {
		name: "Giant Toad",
		source: ["Monster Manual", 329],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 39,
		hd: [6, 10],
		speed: "20 ft, swim 40 ft",
		scores: [15, 13, 13, 2, 10, 3],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 30 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "+1d10 poison damage; target is grappled and restrained (escape DC 13); can't use bite again until grapple ends",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The toad can breathe air and water",
		}, {
			name: "Standing Leap",
			description: "The toad's long jump is up to 20 ft and its high jump is up to 10 ft, with or without a running start.",
		}, {
			name: "Swallow",
			description: [
				"The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.",
				"If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft of movement, exiting prone.",
			]
		}
		],
	},
	"Giant Vulture": {
		name: "Giant Vulture",
		source: ["Monster Manual", 329],
		size: "Large",
		type: "Beast",
		alignment: "Neutral Evil",
		ac: [10, "", false],
		hp: 22,
		hd: [3, 10],
		speed: "10 ft, fly 60 ft",
		scores: [15, 10, 15, 6, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Adv. on Wis (Perception) checks using sight/smell",
		passive_perception: 13,
		languages: "understands Common but can't speak",
		challenge_rating: "1",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "One beak and one talons attack as an Attack action",
		}, {
			name: "Talons",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "One talons and one beak attack as an Attack action",
		}
		],
		traits: [{
			name: "Keen Sight and Smell",
			description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
		}, {
			name: "Pack Tactics",
			description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Giant Wasp": {
		name: "Giant Wasp",
		source: ["Monster Manual", 329],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 13,
		hd: [3, 8],
		speed: "10 ft, fly 50 ft, swim 50 ft",
		scores: [10, 14, 10, 1, 10, 3],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Sting",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target also takes 3d6 poison damage, half on a DC 11 Constitution saving throw",
		}
		],
		traits: [{
			name: "Sting",
			description: "If the poison damage from the giant wasp's sting attack reduces the target to 0 HP, the target is stable but poisoned for 1 hour, even after regaining HP, and is paralyzed while poisoned in this way.",
		}
		],
	},
	"Giant Weasel": {
		name: "Giant Weasel",
		source: ["Monster Manual", 329],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 9,
		hd: [2, 8],
		speed: "40 ft",
		scores: [11, 16, 10, 4, 12, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +5",
		senses: "Darkvision 60 ft; Adv. on Wis (Perception) checks using hearing/smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}
		],
	},
	"Giant Wolf Spider": {
		name: "Giant Wolf Spider",
		source: ["Monster Manual", 330],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 11,
		hd: [2, 8],
		speed: "40 ft, climb 40 ft",
		scores: [12, 16, 13, 3, 12, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +7",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target also takes 2d6 poison damage, half on a DC 11 Constitution saving throw",
		}
		],
		traits: [{
			name: "Bite",
			description: "If the poison damage from the spider's bite attack reduces the target to 0 HP, the target is stable but poisoned for 1 hour, even after regaining HP, and is paralyzed while poisoned in this way.",
		}, {
			name: "Spider Climb",
			description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}, {
			name: "Web Sense",
			description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
		}, {
			name: "Web Walker",
			description: "The spider ignores movement restrictions caused by webbing.",
		}
		],
	},
	"Gibbering Mouther": {
		name: "Gibbering Mouther",
		source: ["Monster Manual", 157],
		size: "Medium",
		type: "Aberration",
		alignment: "Neutral",
		ac: [9, "", false],
		hp: 67,
		hd: [9, 8],
		speed: "10 ft, swim 10 ft",
		scores: [10, 8, 16, 3, 10, 6],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "prone",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bites",
			ability: 1,
			damage: [5, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther.",
		}
		],
		traits: [{
			name: "Aberrant Ground",
			description: "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn.",
		}, {
			name: "Gibbering",
			description: "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 ft of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle.",
		}, {
			name: "Blinding Spittle (Recharge 5-6)",
			description: "The mouther spits a chemical glob at a point it can see within 15 ft of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 ft of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn.",
		}
		],
	},
	"Githyanki Knight": {
		name: "Githyanki Knight",
		source: ["Monster Manual", 160],
		size: "Medium",
		type: "humanoid (gith)",
		alignment: "lawful evil",
		ac: [18, "Plate", false],
		hp: 91,
		hd: [14, 8],
		speed: "30 ft",
		scores: [16, 14, 15, 14, 14, 15],
		saves: ["", "", "5", "5", "5", ""],
		passive_perception: "12",
		languages: "Gith",
		challenge_rating: "8",
		attacks: [{
			name: "Silver Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) psychic damage. This is a magic weapon attack. On a critical hit against a target in an astral body (as with the astral projection spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The githyanki's innate spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)",
				"3/day each: jump, misty step, nondetection (self only), tongues",
				"1/day each: plane shift, telekinesis"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The githyanki makes two silver greatsword attacks."
		}
		],
	},
	"Githyanki Warrior": {
		name: "Githyanki Warrior",
		source: ["Monster Manual", 160],
		size: "Medium",
		type: "humanoid (gith)",
		alignment: "lawful evil",
		ac: [17, "Half Plate", false],
		hp: 49,
		hd: [9, 8],
		speed: "30 ft",
		scores: [15, 14, 12, 13, 13, 10],
		saves: ["", "", "3", "3", "3", ""],
		passive_perception: "11",
		languages: "Gith",
		challenge_rating: "3",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) psychic damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The githyanki's innate spellcasting ability is Intelligence. It can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)",
				"3/day each: jump, misty step, nondetection (self only)"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The githyanki makes two greatsword attacks."
		}
		],
	},
	"Githzerai Monk": {
		name: "Githzerai Monk",
		source: ["Monster Manual", 161],
		size: "Medium",
		type: "humanoid (gith)",
		alignment: "lawful neutral",
		ac: [14, "", false],
		hp: 38,
		hd: [7, 8],
		speed: "30 ft",
		scores: [12, 15, 12, 13, 14, 10],
		saves: ["3", "4", "", "3", "4", ""],
		skills: "Insight +4, Perception +4",
		passive_perception: "14",
		languages: "Gith",
		challenge_rating: "2",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 9 (2d8) psychic damage. This is a magic weapon attack.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The githzerai's innate spellcasting ability is Wisdom. It can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)",
				"3/day each: feather fall, jump, see invisibility, shield"
			]
		}, {
			name: "Psychic Defense",
			description: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The githzerai makes two unarmed strikes."
		}
		],
	},
	"Githzerai Zerth": {
		name: "Githzerai Zerth",
		source: ["Monster Manual", 161],
		size: "Medium",
		type: "humanoid (gith)",
		alignment: "lawful neutral",
		ac: [17, "", false],
		hp: 84,
		hd: [13, 8],
		speed: "30 ft",
		scores: [13, 18, 15, 16, 17, 12],
		saves: ["4", "7", "", "6", "6", ""],
		skills: "Arcana +6, Insight +6, Perception +6",
		passive_perception: "16",
		languages: "Gith",
		challenge_rating: "6",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 13 (3d8) psychic damage. This is a magic weapon attack.",
		}
		],
		traits: [{
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The githzerai's innate spellcasting ability is Wisdom. It can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)",
				"3/day each: feather fall, jump, see invisibility, shield"
			]
		}, {
			name: "Psychic Defense",
			description: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The githzerai makes two unarmed strikes."
		}
		],
	},
	"Glabrezu": {
		name: "Glabrezu",
		source: ["Monster Manual", 58],
		size: "Large",
		type: "Fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [17, "Natural Armor", false],
		hp: 157,
		hd: [15, 10],
		speed: "40 ft",
		scores: [20, 15, 21, 19, 17, 16],
		saves: [9, "", 9, "", 7, 7],
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Truesight 120 ft",
		passive_perception: 13,
		languages: "Abyssal, telepathy 120 ft.",
		challenge_rating: "9",
		attacks: [{
			name: "Pincer",
			ability: 1,
			damage: [2, 10, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target.",
		}, {
			name: "Fist",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components:",
				"At will: darkness, detect magic, dispel magic",
				"1/day each: confusion, fly, power word stun",
			]
		}, {
			name: "Magic Resistance",
			description: "The glabrezu has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell.",
		}, {
			name: "Variant: Summon Demon (1/Day)",
			description: [
				"The demon chooses what to summon and attempts a magical summoning.",
				"A glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.",
				"A summoned demon appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
			]
		}
		],
	},
	"Gladiator": {
		name: "Gladiator",
		source: ["Monster Manual", 346],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [16, "", true],
		hp: 112,
		hd: [15, 8],
		speed: "30 ft",
		scores: [18, 15, 16, 10, 12, 15],
		saves: [7, 5, 6, "", "", ""],
		skills: "Athletics +10, Intimidation +5",
		passive_perception: 11,
		languages: "any one language (usually Common)",
		challenge_rating: "5",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 13 (2d8+4) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}, {
			name: "Shield Bash",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Brave",
			description: "The gladiator has advantage on saving throws against being frightened.",
		}, {
			name: "Brute",
			description: "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack).",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gladiator makes three melee attacks or two ranged attacks.",
		}
		],
		reactions: [{
			name: "Parry",
			description: "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon.",
		}
		],
	},
	"Gnoll": {
		name: "Gnoll",
		source: ["Monster Manual", 163],
		size: "Medium",
		type: "Humanoid (gnoll)",
		alignment: "Chaotic Evil",
		ac: [15, "Hide Armor", true],
		hp: 22,
		hd: [5, 8],
		speed: "30 ft",
		scores: [14, 12, 11, 6, 10, 7],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Gnoll",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (1d8+2) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, ""],
			range: "Ranged (20/60 ft)",
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Rampage",
			description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.",
		}
		],
	},
	"Gnoll Fang of Yeenoghu": {
		name: "Gnoll Fang of Yeenoghu",
		source: ["Monster Manual", 163],
		size: "Medium",
		type: "humanoid (gnoll)",
		alignment: "chaotic evil",
		ac: [14, "Hide Armor", false],
		hp: 65,
		hd: [10, 8],
		speed: "30 ft",
		scores: [17, 15, 15, 10, 11, 13],
		saves: ["", "", "4", "", "2", "3"],
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Abyssal, Gnoll",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 12 Constitution saving throw or take 7 (2d6) poison damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Rampage",
			description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gnoll makes three attacks: one with its bite and two with its claws."
		}
		]
	},
	"Gnoll Pack Lord": {
		name: "Gnoll Pack Lord",
		source: ["Monster Manual", 163],
		size: "Medium",
		type: "humanoid (gnoll)",
		alignment: "chaotic evil",
		ac: [15, "Chain Shirt", false],
		hp: 49,
		hd: [9, 8],
		speed: "30 ft",
		scores: [16, 14, 13, 8, 11, 9],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Gnoll",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Glaive",
			ability: 1,
			damage: [1, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Rampage",
			description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The gnoll makes two attacks, either with its glaive or its longbow, and uses its Incite Rampage if it can."
		}, {
			name: "Incite Rampage (Recharge 5-6)",
			description: "One creature the gnoll can see within 30 feet of it can use its reaction to make a melee attack if it can hear the gnoll and has the Rampage trait."
		}
		]
	},
	"Goat": {
		name: "Goat",
		source: ["Monster Manual", 330],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 4,
		hd: [1, 8],
		speed: "40 ft",
		scores: [12, 10, 11, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Ram",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Charge trait",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the goat hits with a ram attack after moving at least 20 ft straight toward a target on the same turn, the target takes an extra 1d4 bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
		}, {
			name: "Sure-Footed",
			description: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
		}
		],
	},
	"Goblin": {
		name: "Goblin",
		source: ["Monster Manual", 166],
		size: "Small",
		type: "Humanoid (goblinoid)",
		alignment: "Neutral Evil",
		ac: [15, "Leather Armor", true],
		hp: 7,
		hd: [2, 6],
		speed: "30 ft",
		scores: [8, 14, 10, 10, 8, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +6",
		senses: "Darkvision 60 ft",
		passive_perception: 9,
		languages: "Common, Goblin",
		challenge_rating: "1/4",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Nimble Escape",
			description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns.",
		}
		],
	},
	"Goblin Boss": {
		name: "Goblin Boss",
		source: ["Monster Manual", 166],
		size: "Small",
		type: "humanoid (goblinoid)",
		alignment: "neutral evil",
		ac: [17, "Chain Shirt", true],
		hp: 21,
		hd: [6, 6],
		speed: "30 ft",
		scores: [10, 14, 10, 10, 8, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +6",
		senses: "darkvision 60 ft",
		passive_perception: "9",
		languages: "Common, Goblin",
		challenge_rating: "1",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Nimble Escape",
			description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The goblin makes two attacks with its scimitar. The second attack has disadvantage."
		}
		],
		reactions: [{
			name: "Redirect Attack",
			description: "When a creature the goblin can see targets it with an attack, the goblin chooses another goblin within 5 feet of it. The two goblins swap places, and the chosen goblin becomes the target instead."
		}
		]
	},
	"Gold Dragon Wyrmling": {
		name: "Gold Dragon Wyrmling",
		source: ["Monster Manual", 115],
		size: "Medium",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [17, "Natural Armor", false],
		hp: 60,
		hd: [8, 8],
		speed: "30 ft, fly 60 ft, swim 30 ft",
		scores: [19, 14, 17, 14, 11, 16],
		saves: ["", 4, 5, "", 2, 5],
		skills: "Perception +4, Stealth +4",
		damage_immunities: "fire",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}
		],
		actions: [{
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Fire Breath: The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.",
				"Weakening Breath: The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			]
		}
		],
	},
	"Gorgon": {
		name: "Gorgon",
		source: ["Monster Manual", 171],
		size: "Large",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [19, "Natural Armor", false],
		hp: 114,
		hd: [12, 10],
		speed: "40 ft",
		scores: [20, 11, 18, 2, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		damage_immunities: "petrified",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [2, 12, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hooves",
			ability: 1,
			damage: [2, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Trampling Charge",
			description: "If the gorgon moves at least 20 ft straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action.",
		}
		],
		actions: [{
			name: "Petrifying Breath (Recharge 5-6)",
			description: "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic.",
		}
		],
	},
	"Goristro": {
		name: "Goristro",
		source: ["Monster Manual", 59],
		size: "Huge",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [19, "Natural Armor", false],
		hp: 310,
		hd: [23, 12],
		speed: "40 ft",
		scores: [25, 11, 15, 6, 13, 14],
		saves: ["13", "6", "13", "", "7", ""],
		skills: "Perception +7",
		damage_resistances: "cold, fire, lightning, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "17",
		languages: "Abyssal",
		challenge_rating: "17",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Hoof",
			ability: 1,
			damage: [3, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 21 Strength saving throw or be knocked prone.",
		}, {
			name: "Gore",
			ability: 1,
			damage: [7, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the goristro moves at least 15 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38 (7d10) piercing damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be pushed up to 20 feet away and knocked prone.",
		}, {
			name: "Labyrinthine Recall",
			description: "The goristro can perfectly recall any path it has traveled."
		}, {
			name: "Magic Resistance",
			description: "The goristro has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Siege Monster",
			description: "The goristro deals double damage to objects and structures."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The goristro makes three attacks: two with its fists and one with its hoof."
		}
		]
	},
	"Gray Ooze": {
		name: "Gray Ooze",
		source: ["Monster Manual", 243],
		size: "Medium",
		type: "Ooze",
		alignment: "Unaligned",
		ac: [8, "", false],
		hp: 22,
		hd: [3, 8],
		speed: "10 ft, climb 10 ft",
		scores: [12, 6, 16, 1, 6, 2],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		damage_resistances: "acid, cold, fire",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
		senses: "Blindsight 60 ft (blind beyond this radius)",
		passive_perception: 8,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The ooze can move through a space as narrow as 1 inch wide without squeezing.",
		}, {
			name: "Corrode Metal",
			description: [
				"Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.",
				"The ooze can eat through 2-inch-thick, nonmagical metal in 1 round.",
			]
		}, {
			name: "False Appearance",
			description: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock.",
		}
		],
	},
	"Gray Ooze (Psychic)": {
		name: "Gray Ooze (Psychic)",
		source: ["Monster Manual", 240],
		size: "Medium",
		type: "ooze",
		alignment: "unaligned",
		ac: [8, "", false],
		hp: 22,
		hd: [3, 8],
		speed: "10 ft, climb 10 ft",
		scores: [12, 6, 16, 6, 6, 2],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		damage_resistances: "acid, cold, fire",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passive_perception: "8",
		challenge_rating: "1/2",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The ooze can move through a space as narrow as 1 inch wide without squeezing."
		}, {
			name: "Corrode Metal",
			description: [
				"Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.",
				"The ooze can eat through 2-inch-thick, nonmagical metal in 1 round."
			]
		}, {
			name: "False Appearance",
			description: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock."
		}
		],
		actions: [{
			name: "Psychic Crush (Recharge 5-6)",
			description: "The ooze targets one creature that it can sense within 60 feet of it. The target must make a DC 10 Intelligence saving throw, taking 10 (3d6) psychic damage on a failed save, or half as much damage on a successful one."
		}
		]
	},
	"Gray Slaad": {
		name: "Gray Slaad",
		source: ["Monster Manual", 277],
		size: "Medium",
		type: "aberration (shapechanger)",
		alignment: "chaotic neutral",
		ac: [18, "Natural Armor", false],
		hp: 127,
		hd: [17, 8],
		speed: "30 ft",
		scores: [17, 17, 16, 13, 8, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +5, Perception +6",
		damage_resistances: "acid, cold, fire, lightning, thunder",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: "16",
		languages: "Slaad, telepathy 60 ft",
		challenge_rating: "9",
		attacks: [{
			name: "Bite (Slaad Form Only)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws (Slaad Form Only)",
			ability: 1,
			damage: [1, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The slaad's innate spellcasting ability is Charisma (spell save DC 14). The slaad can innately cast the following spells, requiring no material components:",
				"At will: detect magic, detect thoughts, invisibility (self only), mage hand, major image",
				"2/day each: fear, fly, fireball, tongues",
				"1/day: plane shift (self only)"
			]
		}, {
			name: "Magic Resistance",
			description: "The slaad has advantage on saving throws against spells and other magical effects"
		}, {
			name: "Magic Weapons",
			description: "The slaad's weapon attacks are magical."
		}, {
			name: "Regeneration",
			description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
		}, {
			name: "Variant: Control Gem",
			description: [
				"Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.",
				"Certain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.",
				"A greater restoration spell cast on the slaad destroys the gem without harming the slaad.",
				"Someone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The slaad makes three attacks: one with its bite and two with its claws or greatsword."
		}
		],
	},
	"Green Dragon Wyrmling": {
		name: "Green Dragon Wyrmling",
		source: ["Monster Manual", 95],
		size: "Medium",
		type: "Dragon",
		alignment: "Lawful Evil",
		ac: [17, "Natural Armor", false],
		hp: 38,
		hd: [7, 8],
		speed: "30 ft, fly 60 ft, swim 30 ft",
		scores: [15, 12, 13, 14, 11, 13],
		saves: ["", 3, 3, "", 2, 3],
		skills: "Perception +4, Stealth +3",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) poison damage.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}
		],
		actions: [{
			name: "Poison Breath (Recharge 5-6)",
			description: "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Green Hag": {
		name: "Green Hag",
		source: ["Monster Manual", 177],
		size: "Medium",
		type: "Fey",
		alignment: "Neutral Evil",
		ac: [17, "Natural Armor", false],
		hp: 82,
		hd: [11, 8],
		speed: "30 ft",
		scores: [18, 12, 16, 13, 14, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +3, Deception +4, Perception +4, Stealth +3",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "Common, Draconic, Sylvan",
		challenge_rating: "3",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The hag can breathe air and water.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components:",
				"At will: dancing lights, minor illusion, vicious mockery",
			]
		}, {
			name: "Mimicry",
			description: "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.",
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
				"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
			]
		}, {
			name: "Shared Spellcasting (Coven Only)",
			description: [
				"While all three members of a hag coven are within 30 ft of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:",
				"1st level (4 slots): identify, ray of sickness",
				"2nd level (3 slots): hold person, locate object",
				"3rd level (3 slots): bestow curse, counterspell, lightning bolt",
				"4th level (3 slots): phantasmal killer, polymorph",
				"5th level (2 slots): contact other plane, scrying",
				"6th level (1 slot): eye bite",
				"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4 plus the hag's Intelligence modifier.",
			]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and Darkvision with a radius of 60 ft. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.",
			]
		}
		],
		actions: [{
			name: "Illusory Appearance",
			description: [
				"The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.",
				"The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised.",
			]
		}, {
			name: "Invisible Passage",
			description: "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her.",
		}
		],
	},
	"Green Slaad": {
		name: "Green Slaad",
		source: ["Monster Manual", 277],
		size: "Large",
		type: "aberration (shapechanger)",
		alignment: "chaotic neutral",
		ac: [16, "Natural Armor", false],
		hp: 127,
		hd: [15, 10],
		speed: "30 ft",
		scores: [18, 15, 16, 11, 8, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +3, Perception +2",
		damage_resistances: "acid, cold, fire, lightning, thunder",
		senses: "blindsight 30 ft, darkvision 60 ft",
		passive_perception: "12",
		languages: "Slaad, telepathy 60 ft",
		challenge_rating: "8",
		attacks: [{
			name: "Bite (Slaad Form Only)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw (Slaad Form Only)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Staff",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hurl Flame",
			ability: 6,
			damage: [3, 6, "fire"],
			range: "Ranged (60 ft)",
			description: "The fire ignites flammable objects that aren't being worn or carried.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The slaad's innate spellcasting ability is Charisma (spell save DC 12). The slaad can innately cast the following spells, requiring no material components:",
				"At will: detect magic, detect thoughts, mage hand",
				"2/day each: fear, invisibility (self only)",
				"1/day: fireball"
			]
		}, {
			name: "Magic Resistance",
			description: "The slaad has advantage on saving throws against spells and other magical effects"
		}, {
			name: "Regeneration",
			description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
		}, {
			name: "Variant: Control Gem",
			description: [
				"Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.",
				"Certain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.",
				"A greater restoration spell cast on the slaad destroys the gem without harming the slaad.",
				"Someone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The slaad makes three attacks: one with its bite and two with its claws or staff. Alternatively, it uses its Hurl Flame twice."
		}
		],
	},
	"Grell": {
		name: "Grell",
		source: ["Monster Manual", 172],
		size: "Medium",
		type: "aberration",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 55,
		hd: [10, 8],
		speed: "10 ft, fly 30 ft (hover)",
		scores: [15, 14, 13, 12, 11, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +6",
		damage_immunities: "lightning",
		condition_immunities: "blinded, prone",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passive_perception: "14",
		languages: "Grell",
		challenge_rating: "3",
		attacks: [{
			name: "Tentacles",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The poisoned target is paralyzed, and it can repeat the saving throw at the end of each of its turns, ending the effect on a success. The target is also grappled (escape DC 15). If the target is Medium or smaller, it is also restrained until this grapple ends. While grappling the target, the grell has advantage on attack rolls against it and can't use this attack against other targets. When the grell moves, any Medium or smaller target it is grappling moves with it.",
		}, {
			name: "Beak",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The grell makes two attacks: one with its tentacles and one with its beak."
		}
		]
	},
	"Grick": {
		name: "Grick",
		source: ["Monster Manual", 173],
		size: "Medium",
		type: "Monstrosity",
		alignment: "Neutral",
		ac: [14, "Natural Armor", false],
		hp: 27,
		hd: [6, 8],
		speed: "30 ft, climb 30 ft",
		scores: [14, 14, 11, 3, 14, 5],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing damage from nonmagical weapons",
		senses: "Darkvision 60 ft",
		passive_perception: 12,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Tentacles",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Beak",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Stone Camouflage",
			description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target.",
		}
		],
	},
	"Grick Alpha": {
		name: "Grick Alpha",
		source: ["Monster Manual", 173],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral",
		ac: [18, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "30 ft, climb 30 ft",
		scores: [18, 16, 15, 4, 14, 9],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing damage from nonmagical weapons",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		challenge_rating: "7",
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tentacles",
			ability: 1,
			damage: [4, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Beak",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Stone Camouflage",
			description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The grick makes two attacks: one with its tail and one with its tentacles. If it hits with its tentacles, the grick can make one beak attack against the same target."
		}
		]
	},
	"Griffon": {
		name: "Griffon",
		source: ["Monster Manual", 174],
		size: "Large",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 59,
		hd: [7, 10],
		speed: "30 ft, fly 80 ft",
		scores: [18, 15, 16, 2, 13, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5",
		senses: "Darkvision 60 ft; Adv. on Wis (Perception) checks using sight",
		passive_perception: 15,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "One beak and one claws attack as an Attack action",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "One claws and one beak attack as an Attack action",
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The griffon has advantage on Wisdom (Perception) checks that rely on sight.",
		}
		],
	},
	"Grimlock": {
		name: "Grimlock",
		source: ["Monster Manual", 175],
		size: "Medium",
		type: "Humanoid (grimlock)",
		alignment: "Neutral Evil",
		ac: [11, "", false],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft",
		scores: [16, 12, 12, 9, 8, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Perception +3, Stealth +3",
		damage_immunities: "blinded",
		senses: "Blindsight 30 ft or 10 ft while deafened (blind beyond this radius)",
		passive_perception: 13,
		languages: "Undercommon",
		challenge_rating: "1/4",
		attacks: [{
			name: "Spiked Bone Club",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4) piercing damage.",
		}
		],
		traits: [{
			name: "Blind Senses",
			description: "The grimlock can't use its Blindsight while deafened and unable to smell.",
		}, {
			name: "Keen Hearing and Smell",
			description: "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}, {
			name: "Stone Camouflage",
			description: "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
		}
		],
	},
	"Guard": {
		name: "Guard",
		source: ["Monster Manual", 347],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [16, "Chain Shirt", true],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft",
		scores: [13, 12, 12, 10, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		passive_perception: 12,
		languages: "any one language (usually Common)",
		challenge_rating: "1/8",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
	},
	"Guardian Naga": {
		name: "Guardian Naga",
		source: ["Monster Manual", 234],
		size: "Large",
		type: "Monstrosity",
		alignment: "Lawful Good",
		ac: [18, "Natural Armor", false],
		hp: 127,
		hd: [15, 10],
		speed: "40 ft",
		scores: [19, 18, 16, 16, 19, 18],
		saves: ["", 8, 7, 7, 8, 8],
		damage_immunities: "poison",
		condition_immunities: "charmed, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "Celestial, Common",
		challenge_rating: "10",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (10 ft)",
			dc: true,
			description: "Target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Spit Poison",
			ability: 1,
			damage: [10, 8, "poison"],
			range: "Ranged (15/30 ft)",
			description: "Target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Rejuvenation",
			description: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning.",
		}
		],
		spells: [
			"The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:",
			"Cantrips (at will): mending, sacred flame, thaumaturgy",
			"1st level (4 slots): command, cure wounds, shield of faith",
			"2nd level (3 slots): calm emotions, hold person",
			"3rd level (3 slots): bestow curse, clairvoyance",
			"4th level (3 slots): banishment, freedom of movement",
			"5th level (2 slots): flame strike, geas",
			"6th level (1 slot): true seeing",
		]
	},
	"Gynosphinx": {
		name: "Gynosphinx",
		source: ["Monster Manual", 282],
		size: "Large",
		type: "Monstrosity",
		alignment: "Lawful Neutral",
		ac: [17, "Natural Armor", false],
		hp: 136,
		hd: [16, 10],
		speed: "40 ft, fly 60 ft",
		scores: [18, 15, 16, 18, 18, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +12, History +12, Perception +8, Religion +8",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "psychic",
		condition_immunities: "charmed, frightened",
		senses: "Truesight 120 ft",
		passive_perception: 18,
		languages: "Common, Sphinx",
		challenge_rating: "11",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Inscrutable",
			description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.",
		}, {
			name: "Magic Weapons",
			description: "The sphinx's weapon attacks are magical.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The sphinx makes two claw attacks.",
		}
		],
		legendary_actions: [{
			name: "Claw Attack",
			description: "The sphinx makes one claw attack.",
		}, {
			name: "Teleport (Costs 2 Actions)",
			description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 ft to an unoccupied space it can see.",
		}, {
			name: "Cast a Spell (Costs 3 Actions)",
			description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.",
		}
		],
		spells: [
			"The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, minor illusion, prestidigitation",
			"1st level (4 slots): detect magic, identify, shield",
			"2nd level (3 slots): darkness, locate object, suggestion",
			"3rd level (3 slots): dispel magic, remove curse, tongues",
			"4th level (3 slots): banishment, greater invisibility",
			"5th level (1 slot): legend lore",
		]
	},
	"Half-Ogre (Ogrillon)": {
		name: "Half-Ogre (Ogrillon)",
		source: ["Monster Manual", 238],
		size: "Large",
		type: "giant",
		alignment: "any chaotic alignment",
		ac: [12, "Hide Armor", false],
		hp: 30,
		hd: [4, 10],
		speed: "30 ft",
		scores: [17, 10, 14, 7, 9, 10],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "9",
		languages: "Common, Giant",
		challenge_rating: "1",
		attacks: [{
			name: "Battleaxe",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 14 (2d10+3) slashing damage.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
	},
	"Half-Red Dragon Veteran": {
		name: "Half-Red Dragon Veteran",
		source: ["Monster Manual", 180],
		size: "Medium",
		type: "humanoid (human)",
		alignment: "any alignment",
		ac: [18, "Plate", false],
		hp: 65,
		hd: [10, 8],
		speed: "30 ft",
		scores: [16, 13, 14, 10, 11, 10],
		saves: ["5", "", "4", "", "", ""],
		skills: "Athletics +5, Perception +2",
		damage_resistances: "fire",
		senses: "blindsight 10 ft, darkvision 60 ft",
		passive_perception: "12",
		languages: "Common, Draconic",
		challenge_rating: "5",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}, {
			name: "Shortsword",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Heavy Crossbow",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
		}, {
			name: "Fire Breath (Recharge 5-6)",
			description: "The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.",
		}
		]
	},
	"Harpy": {
		name: "Harpy",
		source: ["Monster Manual", 181],
		size: "Medium",
		type: "Monstrosity",
		alignment: "Chaotic Evil",
		ac: [11, "", false],
		hp: 38,
		hd: [7, 8],
		speed: "20 ft, fly 40 ft",
		scores: [12, 13, 12, 7, 10, 13],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "Common",
		challenge_rating: "1",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Club",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The harpy makes two attacks: one with its claws and one with its club.",
		}, {
			name: "Luring Song",
			description: [
				"The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.",
				"While charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it.",
				"A target that successfully saves is immune to this harpy's song for the next 24 hours.",
			]
		}
		],
	},
	"Hawk": {
		name: "Hawk",
		source: ["Monster Manual", 330],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "10 ft, fly 60 ft",
		scores: [5, 16, 8, 2, 14, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "Adv. on Wis (Perception) checks using sight",
		passive_perception: 14,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Talons",
			ability: 2,
			damage: [1, "", "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
		}
		],
	},
	"Hell Hound": {
		name: "Hell Hound",
		source: ["Monster Manual", 182],
		size: "Medium",
		type: "Fiend",
		alignment: "Lawful Evil",
		ac: [15, "Natural Armor", false],
		hp: 45,
		hd: [7, 8],
		speed: "50 ft",
		scores: [17, 12, 14, 6, 13, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5",
		damage_immunities: "fire",
		senses: "Darkvision 60 ft",
		passive_perception: 15,
		languages: "understands Infernal but can't speak it",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) fire damage.",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}, {
			name: "Pack Tactics",
			description: "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
		}
		],
		actions: [{
			name: "Fire Breath (Recharge 5-6)",
			description: "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Helmed Horror": {
		name: "Helmed Horror",
		source: ["Monster Manual", 183],
		size: "Medium",
		type: "construct",
		alignment: "unaligned",
		ac: [20, "Plate", true],
		hp: 60,
		hd: [8, 8],
		speed: "30 ft, fly 30 ft",
		scores: [18, 13, 16, 10, 10, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
		damage_immunities: "force, necrotic, poison",
		condition_immunities: "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned, stunned",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passive_perception: "14",
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "4",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 9 (1d10+4) slashing damage.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The helmed horror has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Spell Immunity",
			description: "The helmed horror is immune to three spells chosen by its creator. Typical immunities include fireball, heat metal, and lightning bolt."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The helmed horror makes two longsword attacks."
		}
		]
	},
	"Hezrou": {
		name: "Hezrou",
		source: ["Monster Manual", 60],
		size: "Large",
		type: "Fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [16, "Natural Armor", false],
		hp: 136,
		hd: [13, 10],
		speed: "30 ft",
		scores: [19, 17, 20, 5, 12, 13],
		saves: [7, "", 8, "", 4, ""],
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 11,
		languages: "Abyssal, telepathy 120 ft.",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The hezrou has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Stench",
			description: "Any creature that starts its turn within 10 ft of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hezrou makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Variant: Summon Demon (1/Day)",
			description: [
				"The demon chooses what to summon and attempts a magical summoning.",
				"A hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.",
				"A summoned demon appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
			]
		}
		],
	},
	"Hill Giant": {
		name: "Hill Giant",
		source: ["Monster Manual", 155],
		size: "Huge",
		type: "Giant",
		alignment: "Chaotic Evil",
		ac: [13, "Natural Armor", false],
		hp: 105,
		hd: [10, 12],
		speed: "40 ft",
		scores: [21, 8, 19, 5, 9, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		passive_perception: 12,
		languages: "Giant",
		challenge_rating: "5",
		attacks: [{
			name: "Greatclub",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [3, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two greatclub attacks.",
		}
		],
	},
	"Hippogriff": {
		name: "Hippogriff",
		source: ["Monster Manual", 184],
		size: "Large",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 19,
		hd: [3, 10],
		speed: "40 ft, fly 60 ft",
		scores: [17, 13, 13, 2, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5",
		senses: "Adv. on Wis (Perception) checks using sight",
		passive_perception: 15,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "One beak and one claws attack as an Attack action",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "One claws and one beak attack as an Attack action",
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight.",
		}
		],
	},
	"Hobgoblin": {
		name: "Hobgoblin",
		source: ["Monster Manual", 186],
		size: "Medium",
		type: "Humanoid (goblinoid)",
		alignment: "Lawful Evil",
		ac: [18, "Chain Shirt", true],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft",
		scores: [13, 12, 12, 10, 10, 9],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Common, Goblin",
		challenge_rating: "1/2",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (1d10+1) slashing damage.",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Martial Advantage",
			description: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated.",
		}
		],
	},
	"Hobgoblin Captain": {
		name: "Hobgoblin Captain",
		source: ["Monster Manual", 186],
		size: "Medium",
		type: "humanoid (goblinoid)",
		alignment: "lawful evil",
		ac: [17, "Half Plate", false],
		hp: 39,
		hd: [6, 8],
		speed: "30 ft",
		scores: [15, 14, 14, 12, 10, 13],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Common, Goblin",
		challenge_rating: "3",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Martial Advantage",
			description: "Once per turn, the hobgoblin can deal an extra 10 (3d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft of an ally of the hobgoblin that isn't incapacitated.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hobgoblin makes two greatsword attacks."
		}, {
			name: "Leadership (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated."
		}
		]
	},
	"Hobgoblin Warlord": {
		name: "Hobgoblin Warlord",
		source: ["Monster Manual", 187],
		size: "Medium",
		type: "humanoid (goblinoid)",
		alignment: "lawful evil",
		ac: [20, "Plate", true],
		hp: 97,
		hd: [13, 8],
		speed: "30 ft",
		scores: [16, 14, 16, 14, 11, 15],
		saves: ["", "", "", "5", "3", "5"],
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Common, Goblin",
		challenge_rating: "6",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}, {
			name: "Shield Bash",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is Large or smaller, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Martial Advantage",
			description: "Once per turn, the hobgoblin can deal an extra 14 (4d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft of an ally of the hobgoblin that isn't incapacitated.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hobgoblin makes three melee attacks. Alternatively, it can make two ranged attacks with its javelins."
		}, {
			name: "Leadership (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw . The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated."
		}
		],
		reactions: [{
			name: "Parry",
			description: "The hobgoblin adds 3 to its AC against one melee attack that would hit it. To do so, the hobgoblin must see the attacker and be wielding a melee weapon."
		}
		]
	},
	"Homunculus": {
		name: "Homunculus",
		source: ["Monster Manual", 188],
		size: "Tiny",
		type: "Construct",
		alignment: "Neutral",
		ac: [13, "Natural Armor", false],
		hp: 5,
		hd: [2, 4],
		speed: "20 ft, fly 40 ft",
		scores: [4, 15, 11, 10, 10, 7],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "charmed, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, "", ""],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way.",
		}
		],
		traits: [{
			name: "Telepathic Bond",
			description: "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically.",
		}
		],
	},
	"Hook Horror": {
		name: "Hook Horror",
		source: ["Monster Manual", 189],
		size: "Large",
		type: "monstrosity",
		alignment: "neutral",
		ac: [15, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "30 ft, climb 30 ft",
		scores: [18, 10, 15, 6, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "blindsight 60 ft, darkvision 10 ft",
		passive_perception: "13",
		languages: "Hook Horror",
		challenge_rating: "3",
		attacks: [{
			name: "Hook",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Echolocation",
			description: "The hook horror can't use its blindsight while deafened."
		}, {
			name: "Keen Hearing",
			description: "The hook horror has advantage on Wisdom (Perception) checks that rely on hearing."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hook horror makes two hook attacks."
		}
		]
	},
	"Horned Devil": {
		name: "Horned Devil",
		source: ["Monster Manual", 74],
		size: "Large",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 148,
		hd: [17, 10],
		speed: "20 ft, fly 60 ft",
		scores: [22, 17, 21, 12, 16, 17],
		saves: [10, 7, "", "", 7, 7],
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 13,
		languages: "Infernal, telepathy 120 ft.",
		challenge_rating: "11",
		attacks: [{
			name: "Fork",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (10 ft)",
			dc: true,
			description: "If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
		}, {
			name: "Hurl Flame",
			ability: 5,
			damage: [4, 6, "fire"],
			range: "Ranged (150 ft)",
			description: "If the target is a flammable object that isn't being worn or carried, it also catches fire.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the devil's Darkvision.",
		}, {
			name: "Magic Resistance",
			description: "The devil has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack.",
		}
		],
	},
	"Hunter Shark": {
		name: "Hunter Shark",
		source: ["Monster Manual", 330],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 45,
		hd: [6, 10],
		speed: "swim 40 ft",
		scores: [18, 13, 15, 1, 10, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "Darkvision 30 ft",
		passive_perception: 12,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Blood Frenzy",
			description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its HP.",
		}, {
			name: "Water Breathing",
			description: "The shark can breathe only underwater.",
		}
		],
	},
	"Hydra": {
		name: "Hydra",
		source: ["Monster Manual", 190],
		size: "Huge",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 172,
		hd: [15, 12],
		speed: "30 ft, swim 30 ft",
		scores: [20, 12, 20, 2, 10, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6",
		senses: "Darkvision 60 ft",
		passive_perception: 16,
		languages: "",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Hold Breath",
			description: "The hydra can hold its breath for 1 hour.",
		}, {
			name: "Multiple Heads",
			description: [
				"The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.",
				"Whenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.",
				"At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way.",
			]
		}, {
			name: "Reactive Heads",
			description: "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks.",
		}, {
			name: "Wakeful",
			description: "While the hydra sleeps, at least one of its heads is awake.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The hydra makes as many bite attacks as it has heads.",
		}
		],
	},
	"Hyena": {
		name: "Hyena",
		source: ["Monster Manual", 331],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 5,
		hd: [1, 8],
		speed: "50 ft",
		scores: [11, 13, 12, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		passive_perception: 13,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Ice Devil": {
		name: "Ice Devil",
		source: ["Monster Manual", 75],
		size: "Large",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 180,
		hd: [19, 10],
		speed: "40 ft",
		scores: [21, 14, 18, 18, 15, 18],
		saves: ["", 7, 9, "", 7, 9],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Blindsight 60 ft; Darkvision 120 ft",
		passive_perception: 12,
		languages: "Infernal, telepathy 120 ft.",
		challenge_rating: "14",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) cold damage.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) cold damage.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 10 (3d6) cold damage.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the devil's Darkvision.",
		}, {
			name: "Magic Resistance",
			description: "The devil has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devil makes three attacks: one with its bite, one with its claws, and one with its tail.",
		}, {
			name: "Wall of Ice",
			description: [
				"The devil magically forms an opaque wall of ice on a solid surface it can see within 60 ft of it. The wall is 1 foot thick and up to 30 ft long and 10 ft high, or it's a hemispherical dome up to 20 ft in diameter.",
				"When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.",
				"The wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.",
			]
		}
		],
	},
	"Ice Devil Spear": {
		name: "Ice Devil Spear",
		source: ["Monster Manual", 75],
		size: "Large",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [18, "Natural Armor", false],
		hp: 180,
		hd: [19, 10],
		speed: "40 ft",
		scores: [21, 14, 18, 18, 15, 18],
		saves: ["", "7", "9", "", "7", "9"],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "blindsight 60 ft, darkvision 120 ft",
		passive_perception: "12",
		languages: "Infernal, telepathy 120 ft",
		challenge_rating: "14",
		attacks: [{
			name: "Ice Spear",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 10 (3d6) cold damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw, or for 1 minute, its speed is reduced by 10 feet; it can take either an action or a bonus action on each of its turns, not both; and it can't take reactions. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) cold damage.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) cold damage.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 10 (3d6) cold damage.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the devil's darkvision."
		}, {
			name: "Magic Resistance",
			description: "The devil has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devil makes two attacks: one with its spear and one with its tail."
		}, {
			name: "Wall of Ice",
			description: [
				"The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.",
				"When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.",
				"The wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes."
			]
		}
		]
	},
	"Ice Mephit": {
		name: "Ice Mephit",
		source: ["Monster Manual", 215],
		size: "Small",
		type: "Elemental",
		alignment: "Neutral Evil",
		ac: [11, "", false],
		hp: 21,
		hd: [6, 6],
		speed: "30 ft, fly 30 ft",
		scores: [7, 13, 10, 9, 11, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +3",
		damage_vulnerabilities: "bludgeoning, fire",
		damage_immunities: "cold, poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 12,
		languages: "Aquan, Auran",
		challenge_rating: "1/2",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4) cold damage.",
		}
		],
		traits: [{
			name: "Death Burst",
			description: "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 ft. of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "False Appearance",
			description: "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice.",
		}, {
			name: "Innate Spellcasting (1/Day)",
			description: "The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma.",
		}
		],
		actions: [{
			name: "Frost Breath (Recharge 6)",
			description: "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Variant: Summon Mephits (1/Day)",
			description: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
		}
		],
	},
	"Imp": {
		name: "Imp",
		source: ["Monster Manual", 76],
		size: "Tiny",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [13, "", false],
		hp: 10,
		hd: [3, 4],
		speed: "20 ft, fly 40 ft",
		scores: [6, 17, 13, 11, 12, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +4, Insight +3, Persuasion +4, Stealth +5",
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical/nonsilver weapons",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 120 ft; Devil's Sight (Magical darkness doesn't impede the imp's Darkvision)",
		passive_perception: 11,
		languages: "Infernal, Common",
		challenge_rating: "1",
		attacks: [{
			name: "Sting (Bite in Beast Form)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			dc: true,
			description: "Target also takes 3d6 poison damage, half on a DC 11 Constitution saving throw",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft), a raven (20 ft, fly 60 ft), or a spider (20 ft, climb 20 ft), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
		}, {
			name: "Magic Resistance",
			description: "The imp has advantage on saving throws against spells and other magical effects.",
		}
		],
		variant: [{
			name: "Variant: Familiar",
			description: "The imp can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the imp senses as long as they are within 1 mile of each other. While the imp is within 10 ft of its master, the master shares the imp's Magic Resistance trait. At any time and for any reason, the imp can end its service as a familiar, ending the telepathic bond.",
		}
		],
		actions: [{
			name: "Invisibility",
			description: "As an action, the imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.",
		}
		],
	},
	"Intellect Devourer": {
		name: "Intellect Devourer",
		source: ["Monster Manual", 191],
		size: "Tiny",
		type: "aberration",
		alignment: "lawful evil",
		ac: [12, "", false],
		hp: 21,
		hd: [6, 4],
		speed: "40 ft",
		scores: [6, 14, 13, 12, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "blinded",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passive_perception: "12",
		languages: "understands Deep Speech but can't speak, telepathy 60 ft",
		challenge_rating: "2",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Detect Sentience",
			description: "The intellect devourer can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a mind blank spell."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The intellect devourer makes one attack with its claws and uses Devour Intellect."
		}, {
			name: "Devour Intellect",
			description: "The intellect devourer targets one creature it can see within 10 feet of it that has a brain. The target must succeed on a DC 12 Intelligence saving throw against this magic or take 11 (2d10) psychic damage. Also on a failure, roll 3d6: If the total equals or exceeds the target's Intelligence score, that score is reduced to 0. The target is stunned until it regains at least one point of Intelligence."
		}, {
			name: "Body Thief",
			description: [
				"The intellect devourer initiates an Intelligence contest with an incapacitated humanoid within 5 feet of it that isn't protected by protection from evil and good. If it wins the contest, the intellect devourer magically consumes the target's brain, teleports into the target's skull, and takes control of the target's body. While inside a creature, the intellect devourer has total cover against attacks and other effects originating outside its host. The intellect devourer retains its Intelligence, Wisdom, and Charisma scores, as well as its understanding of Deep Speech, its telepathy, and its traits. It otherwise adopts the target's statistics. It knows everything the creature knew, including spells and languages.",
				"If the host body dies, the intellect devourer must leave it. A protection from evil and good spell cast on the body drives the intellect devourer out. The intellect devourer is also forced out if the target regains its devoured brain by means of a wish. By spending 5 feet of its movement, the intellect devourer can voluntarily leave the body, teleporting to the nearest unoccupied space within 5 feet of it. The body then dies, unless its brain is restored within 1 round."
			]
		}
		]
	},
	"Invisible Stalker": {
		name: "Invisible Stalker",
		source: ["Monster Manual", 192],
		size: "Medium",
		type: "Elemental",
		alignment: "Neutral",
		ac: [14, "", false],
		hp: 104,
		hd: [16, 8],
		speed: "50 ft, fly 50 ft (hover)",
		scores: [16, 19, 14, 10, 15, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +8, Stealth +10",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		senses: "Darkvision 60 ft",
		passive_perception: 18,
		languages: "Auran, understands Common but doesn't speak it",
		challenge_rating: "6",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Invisibility",
			description: "The stalker is invisible.",
		}, {
			name: "Faultless Tracker",
			description: "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The stalker makes two slam attacks.",
		}
		],
	},
	"Iron Golem": {
		name: "Iron Golem",
		source: ["Monster Manual", 170],
		size: "Large",
		type: "Construct",
		alignment: "Unaligned",
		ac: [20, "Natural Armor", false],
		hp: 210,
		hd: [20, 10],
		speed: "30 ft",
		scores: [24, 9, 20, 3, 11, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "fire, poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 10,
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "16",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Sword",
			ability: 1,
			damage: [3, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Fire Absorption",
			description: "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt.",
		}, {
			name: "Immutable Form",
			description: "The golem is immune to any spell or effect that would alter its form.",
		}, {
			name: "Magic Resistance",
			description: "The golem has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Magic Weapons",
			description: "The golem's weapon attacks are magical.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The golem makes two melee attacks.",
		}, {
			name: "Poison Breath (Recharge 5-6)",
			description: "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (l0d8) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Iymrith, Ancient Blue Dragon": {
		name: "Iymrith, Ancient Blue Dragon",
		source: ["Monster Manual", 0],
		size: "Giant",
		type: "dragon",
		alignment: "lawful evil",
		ac: [22, "Natural Armor", false],
		hp: 481,
		hd: [26, 20],
		speed: "40 ft, burrow 40 ft, fly 80 ft",
		scores: [29, 10, 27, 18, 17, 21],
		saves: ["", "7", "15", "", "10", "12"],
		skills: "Perception +17, Stealth +7",
		damage_immunities: "lightning",
		senses: "blindsight 60 ft, darkvision 120 ft",
		passive_perception: "27",
		languages: "Common, Draconic, Giant, Terran",
		challenge_rating: "23",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (15 ft)",
			description: "Plus 11 (2d10) lightning damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"Iymrith's innate spellcasting ability is Charisma (spell save DC 20). Iymrith's stone shape can create a living gargoyle instead of altering the stone as described in the spell description. She can innately cast the following spells, requiring no material components:",
				"1/day: counterspell, detect magic, ice storm, stone shape, teleport "
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
		}, {
			name: "Frightful Presence",
			description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
		}, {
			name: "Lightning Breath (Recharge 5-6)",
			description: "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Change Shape",
			description: [
				"Iymrith magically polymorphs into a female storm giant or back into her true form. She reverts to her true form if she dies. Any equipment she is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
				"In storm giant form, Iymrith retains her alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Her statistics are otherwise replaced by those of the new form."
			]
		}
		],
		legendary_actions: [{
			name: "Detect",
			description: "The dragon makes a Wisdom (Perception) check."
		}, {
			name: "Tail Attack",
			description: "The dragon makes a tail attack."
		}, {
			name: "Wing Attack (Costs 2 Actions)",
			description: "The dragon beats its wings. Each creature within 15 ftof the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
		}
		],
	},
	"Jackal": {
		name: "Jackal",
		source: ["Monster Manual", 331],
		size: "Small",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 3,
		hd: [1, 6],
		speed: "40 ft",
		scores: [8, 15, 11, 3, 12, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Adv. on Wis (Perception) checks using hearing/smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}, {
			name: "Pack Tactics",
			description: "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Jackalwere": {
		name: "Jackalwere",
		source: ["Monster Manual", 193],
		size: "Medium",
		type: "humanoid (shapechanger)",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 18,
		hd: [4, 8],
		speed: "40 ft",
		scores: [11, 15, 11, 13, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +4, Perception +2, Stealth +4",
		damage_immunities: "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
		passive_perception: "12",
		languages: "Common (can't speak in jackal form)",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite (Jackal or Hybrid Form Only)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Scimitar (Human or Hybrid Form Only)",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The jackalwere can use its action to polymorph into a specific Medium human or a jackal-humanoid hybrid, or back into its true form (that of a Small jackal). Other than its size, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
		}, {
			name: "Keen Hearing and Smell",
			description: "The jackalwere has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name: "Pack Tactics",
			description: "The jackalwere has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
		],
		actions: [{
			name: "Sleep Gaze",
			description: "The jackalwere gazes at one creature it can see within 30 feet of it. The target must make a DC 10 Wisdom saving throw . On a failed save, the target succumbs to a magical slumber, falling unconscious for 10 minutes or until someone uses an action to shake the target awake. A creature that successfully saves against the effect is immune to this jackalwere's gaze for the next 24 hours. Undead and creatures immune to being charmed aren't affected by it."
		}
		]
	},
	"Kenku": {
		name: "Kenku",
		source: ["Monster Manual", 194],
		size: "Medium",
		type: "humanoid (kenku)",
		alignment: "chaotic neutral",
		ac: [13, "", false],
		hp: 13,
		hd: [3, 8],
		speed: "30 ft",
		scores: [10, 16, 10, 11, 10, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +4, Perception +2, Stealth +5",
		passive_perception: "12",
		languages: "understands Auran and Common but speaks only through the use of its Mimicry trait",
		challenge_rating: "1/4",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Ambusher",
			description: "In the first round of a combat, the kenku has advantage on attack rolls against any creature it surprised"
		}, {
			name: "Mimicry",
			description: "The kenku can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check."
		}
		],
	},
	"Killer Whale": {
		name: "Killer Whale",
		source: ["Monster Manual", 331],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 90,
		hd: [12, 12],
		speed: "swim 60 ft",
		scores: [19, 10, 13, 3, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Blindsight 120 ft; Adv. on Wis (Perception) checks using hearing",
		passive_perception: 13,
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [5, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Echolocation",
			description: "The whale can't use its Blindsight while deafened.",
		}, {
			name: "Hold Breath",
			description: "The whale can hold its breath for 30 minutes.",
		}, {
			name: "Keen Hearing",
			description: "The whale has advantage on Wisdom (Perception) checks that rely on hearing.",
		}
		],
	},
	"Knight": {
		name: "Knight",
		source: ["Monster Manual", 347],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [18, "", false],
		hp: 52,
		hd: [8, 8],
		speed: "30 ft",
		scores: [16, 11, 14, 11, 11, 15],
		saves: ["", "", 4, "", 2, ""],
		passive_perception: 10,
		languages: "any one language (usually Common)",
		challenge_rating: "3",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Heavy Crossbow",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Brave",
			description: "The knight has advantage on saving throws against being frightened.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The knight makes two melee attacks.",
		}, {
			name: "Leadership (Recharges after a Short or Long Rest)",
			description: "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.",
		}
		],
		reactions: [{
			name: "Parry",
			description: "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.",
		}
		],
	},
	"Kobold": {
		name: "Kobold",
		source: ["Monster Manual", 195],
		size: "Small",
		type: "Humanoid (kobold)",
		alignment: "Lawful Evil",
		ac: [12, "", false],
		hp: 5,
		hd: [2, 6],
		speed: "30 ft",
		scores: [7, 15, 9, 8, 7, 8],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 8,
		languages: "Common, Draconic",
		challenge_rating: "1/8",
		attacks: [{
			name: "Dagger",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Sling",
			ability: 2,
			damage: [1, 4, "bludgeoning"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
		}, {
			name: "Pack Tactics",
			description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Kraken": {
		name: "Kraken",
		source: ["Monster Manual", 197],
		size: "Gargantuan",
		type: "Monstrosity (titan)",
		alignment: "Chaotic Evil",
		ac: [18, "Natural Armor", false],
		hp: 472,
		hd: [27, 20],
		speed: "20 ft, swim 60 ft",
		scores: [30, 11, 25, 22, 18, 20],
		saves: [17, 7, 14, 13, 11, ""],
		damage_immunities: "lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "frightened, paralyzed",
		senses: "Truesight 120 ft",
		passive_perception: 14,
		languages: "understands Abyssal, Celestial, Infernal, and Primordial but can't speak, telepathy 120 ft.",
		challenge_rating: "23",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 ft of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 ft of movement, exiting prone.",
		}, {
			name: "Tentacle",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (30 ft)",
			description: "On hit target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The kraken can breathe air and water.",
		}, {
			name: "Freedom of Movement",
			description: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 ft of movement to escape from nonmagical restraints or being grappled.",
		}, {
			name: "Siege Monster",
			description: "The kraken deals double damage to objects and structures.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling.",
		}, {
			name: "Fling",
			description: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 ft in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 ft it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone.",
		}, {
			name: "Lightning Storm",
			description: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 ft of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}
		],
		legendary_actions: [{
			name: "Tentacle Attack or Fling",
			description: "The kraken makes one tentacle attack or uses its Fling.",
		}, {
			name: "Lightning Storm (Costs 2 Actions)",
			description: "The kraken uses Lightning Storm.",
		}, {
			name: "Ink Cloud (Costs 3 Actions)",
			description: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn.",
		}
		],
	},
	"Kuo-Toa": {
		name: "Kuo-Toa",
		source: ["Monster Manual", 199],
		size: "Medium",
		type: "humanoid (kuo-toa)",
		alignment: "neutral evil",
		ac: [13, "Natural Armor", true],
		hp: 18,
		hd: [4, 8],
		speed: "30 ft, swim 30 ft",
		scores: [13, 10, 11, 11, 10, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "darkvision 120 ft",
		passive_perception: "14",
		languages: "Undercommon",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}, {
			name: "Net",
			ability: 1,
			damage: [0, "", ""],
			range: "Ranged (5/15 ft)",
			description: "One Large or smaller creature. Hit: The target is restrained. A creature can use its action to make a DC 10 Strength check to free itself or another creature in a net, ending the effect on a success. Dealing 5 slashing damage to the net (AC 10) frees the target without harming it and destroys the net.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The kuo-toa can breathe air and water."
		}, {
			name: "Otherwordly Perception",
			description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
		}, {
			name: "Slippery",
			description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		reactions: [{
			name: "Sticky Shield",
			description: "When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a DC 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a DC 11 Strength check and succeeding."
		}
		]
	},
	"Kuo-Toa Archpriest": {
		name: "Kuo-Toa Archpriest",
		source: ["Monster Manual", 200],
		size: "Medium",
		type: "humanoid (kuo-toa)",
		alignment: "neutral evil",
		ac: [13, "Natural Armor", false],
		hp: 97,
		hd: [13, 8],
		speed: "31 ft, swim 30 ft",
		scores: [16, 14, 16, 13, 16, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +9, Religion +6",
		senses: "darkvision 120 ft",
		passive_perception: "19",
		languages: "Undercommon",
		challenge_rating: "6",
		attacks: [{
			name: "Scepter",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) lightning damage.",
		}, {
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The kuo-toa can breathe air and water."
		}, {
			name: "Otherwordly Perception",
			description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
		}, {
			name: "Slippery",
			description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kuo-toa makes two melee attacks."
		}
		],
		spells: [
			"The kuo-toa is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The kuo-toa has the following cleric spells prepared:",
			"Cantrips (at will): guidance, sacred flame, thaumaturgy",
			"1st level (4 slots): detect magic, sanctuary, shield of faith",
			"2nd level (3 slots): hold person, spiritual weapon",
			"3rd level (3 slots): spirit guardians, tongues",
			"4th level (3 slots): control water, divination",
			"5th level (2 slots): mass cure wounds, scrying"
		]
	},
	"Kuo-Toa Monitor": {
		name: "Kuo-Toa Monitor",
		source: ["Monster Manual", 198],
		size: "Medium",
		type: "humanoid (kuo-toa)",
		alignment: "neutral evil",
		ac: [13, "Natural Armor", false],
		hp: 65,
		hd: [10, 8],
		speed: "33 ft, swim 30 ft",
		scores: [14, 10, 14, 12, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6, Religion +4",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) lightning damage, and the target can't take reactions until the end of the kuo-toa's next turn.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The kuo-toa can breathe air and water."
		}, {
			name: "Otherwordly Perception",
			description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
		}, {
			name: "Slippery",
			description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Unarmored Defense",
			description: "The kuo-toa adds its Wisdom modifier to its armor class."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kuo-toa makes one bite attack and two unarmed strikes."
		}
		]
	},
	"Kuo-Toa Whip": {
		name: "Kuo-Toa Whip",
		source: ["Monster Manual", 200],
		size: "Medium",
		type: "humanoid (kuo-toa)",
		alignment: "neutral evil",
		ac: [11, "Natural Armor", false],
		hp: 65,
		hd: [10, 8],
		speed: "32 ft, swim 30 ft",
		scores: [14, 10, 14, 12, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6, Religion +4",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Undercommon",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Pincer Staff",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "If the target is a Medium or smaller creature, it is grappled (escape DC 14). Until this grapple ends, the kuo-toa can't use its pincer staff on another target.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The kuo-toa can breathe air and water."
		}, {
			name: "Otherwordly Perception",
			description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
		}, {
			name: "Slippery",
			description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The kuo-toa makes two attacks: one with its bite and one with its pincer staff."
		}
		],
		spells: [
			"The kuo-toa is a 2nd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The kuo-toa has the following cleric spells prepared:",
			"Cantrips (at will): sacred flame, thaumaturgy",
			"1st level (3 slots): bane, shield of faith"
		]
	},
	"Lamia": {
		name: "Lamia",
		source: ["Monster Manual", 201],
		size: "Large",
		type: "Monstrosity",
		alignment: "Chaotic Evil",
		ac: [13, "Natural Armor", false],
		hp: 97,
		hd: [13, 10],
		speed: "30 ft",
		scores: [16, 13, 15, 14, 15, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +7, Insight +4, Stealth +3",
		senses: "Darkvision 60 ft",
		passive_perception: 12,
		languages: "Abyssal, Common",
		challenge_rating: "4",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dagger",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Intoxicating Touch",
			ability: 1,
			damage: [0, 0, ""],
			range: "Melee (5 ft)",
			description: "The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components.",
				"At will: disguise self (any humanoid form), major image",
				"3/day each: charm person, mirror image, scrying, suggestion",
				"1/day: geas"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch.",
		}
		],
	},
	"Lemure": {
		name: "Lemure",
		source: ["Monster Manual", 76],
		size: "Medium",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [7, "", false],
		hp: 13,
		hd: [3, 8],
		speed: "15 ft",
		scores: [10, 5, 11, 1, 11, 3],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold",
		damage_immunities: "fire, poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 10,
		languages: "understands infernal but can't speak",
		challenge_rating: "0",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the lemure's Darkvision.",
		}, {
			name: "Hellish Rejuvenation",
			description: "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.",
		}
		],
	},
	"Lich": {
		name: "Lich",
		source: ["Monster Manual", 202],
		size: "Medium",
		type: "Undead",
		alignment: "Any Evil",
		ac: [17, "Natural Armor", false],
		hp: 135,
		hd: [18, 8],
		speed: "30 ft",
		scores: [11, 16, 16, 20, 14, 16],
		saves: ["", "", 10, 12, 9, ""],
		skills: "Arcana +18, History +12, Insight +9, Perception +9",
		damage_resistances: "cold, lightning, necrotic",
		damage_immunities: "poison; bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "Truesight 120 ft",
		passive_perception: 19,
		languages: "Common plus up to five other languages",
		challenge_rating: "21",
		attacks: [{
			name: "Paralyzing Touch",
			ability: 4,
			damage: [3, 6, "cold"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the lich fails a saving throw, it can choose to succeed instead.",
		}, {
			name: "Rejuvenation",
			description: "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 ft of the phylactery.",
		}, {
			name: "Turn Resistance",
			description: "The lich has advantage on saving throws against any effect that turns undead.",
		}
		],
		legendary_actions: [{
			name: "Cantrip",
			description: "The lich casts a cantrip.",
		}, {
			name: "Paralyzing Touch (Costs 2 Actions)",
			description: "The lich uses its Paralyzing Touch.",
		}, {
			name: "Frightening Gaze (Costs 2 Actions)",
			description: "The lich fixes its gaze on one creature it can see within 10 ft of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours.",
		}, {
			name: "Disrupt Life (Costs 3 Actions)",
			description: "Each living creature within 20 ft of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.",
		}
		],
		spells: [
			"The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, prestidigitation, ray of frost",
			"1st level (4 slots): detect magic, magic missile, shield, thunderwave",
			"2nd level (3 slots): detect thoughts, invisibility, Melf's acid arrow, mirror image",
			"3rd level (3 slots): animate dead, counterspell, dispel magic, fireball",
			"4th level (3 slots): blight, dimension door",
			"5th level (3 slots): cloudkill, scrying",
			"6th level (1 slot): disintegrate, globe of invulnerability",
			"7th level (1 slot): finger of death, plane shift",
			"8th level (1 slot): dominate monster, power word stun",
			"9th level (1 slot): power word kill"
		]
	},
	"Lion": {
		name: "Lion",
		source: ["Monster Manual", 331],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 26,
		hd: [4, 10],
		speed: "50 ft",
		scores: [17, 15, 13, 3, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +6",
		senses: "Adv. on Wis (Perception) checks using smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Pounce trait",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Can be used in combination with claw while pouncing (see Pounce trait)",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The lion has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name: "Pack Tactics",
			description: "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}, {
			name: "Pounce",
			description: "If the lion moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action.",
		}, {
			name: "Running Leap",
			description: "With a 10-foot running start, the lion can long jump up to 25 ft.",
		}
		],
	},
	"Lizard": {
		name: "Lizard",
		source: ["Monster Manual", 332],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 2,
		hd: [1, 4],
		speed: "20 ft, climb 20 ft",
		scores: [2, 11, 10, 1, 8, 3],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 30 ft",
		passive_perception: 9,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Lizard King/Queen": {
		name: "Lizard King/Queen",
		source: ["Monster Manual", 205],
		size: "Medium",
		type: "humanoid (lizardfolk)",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 78,
		hd: [12, 8],
		speed: "30 ft, swim 30 ft",
		scores: [17, 12, 15, 11, 11, 15],
		saves: ["", "", "4", "", "2", ""],
		skills: "Perception +4, Stealth +5, Survival +4",
		condition_immunities: "frightened",
		senses: "darkvision 60 ft",
		passive_perception: "14",
		languages: "Abyssal, Draconic",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Trident (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 7 (1d8+3) piercing damage.",
		}, {
			name: "Trident (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Hold Breath",
			description: "The lizardfolk can hold its breath for 15 minutes."
		}, {
			name: "Skewer",
			description: "Once per turn, when the lizardfolk makes a melee attack with its trident and hits, the target takes an extra 10 (3d6) damage, and the lizardfolk gains temporary hit points equal to the extra damage dealt."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The lizardfolk makes two attacks: one with its bite and one with its claws or trident or two melee attacks with its trident."
		}
		]
	},
	"Lizardfolk": {
		name: "Lizardfolk",
		source: ["Monster Manual", 204],
		size: "Medium",
		type: "Humanoid (lizardfolk)",
		alignment: "Neutral",
		ac: [15, "Natural Armor", true],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft, swim 30 ft",
		scores: [15, 10, 13, 7, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4, Survival +5",
		passive_perception: 13,
		languages: "Draconic",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Heavy Club",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin",
			ability: 1,
			damage: [1, 6, ""],
			range: "Melee (5 ft)",
			description: "Or ranged attack (30/120 ft) 5 (1d6 +2) piercing damage",
		}, {
			name: "Spiked Shield",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Hold Breath",
			description: "The lizardfolk can hold its breath for 15 minutes.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The lizardfolk makes two melee attacks, each one with a different weapon.",
		}
		],
	},
	"Lizardfolk Shaman": {
		name: "Lizardfolk Shaman",
		source: ["Monster Manual", 205],
		size: "Medium",
		type: "humanoid (lizardfolk)",
		alignment: "neutral",
		ac: [13, "Natural Armor", false],
		hp: 27,
		hd: [5, 8],
		speed: "30 ft, swim 30 ft",
		scores: [15, 10, 13, 10, 15, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +4, Survival +6",
		passive_perception: "14",
		languages: "Draconic",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Crocodile form: 7 (1d10+2) piercing damage. If the lizardfolk is in crocodile form and the target is a Large or smaller creature, the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the lizardfolk can't bite another target. If the lizardfolk reverts to its true form, the grapple ends.",
		}, {
			name: "Claws (Lizardfolk Form Only)",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Hold Breath",
			description: "The lizardfolk can hold its breath for 15 minutes."
		}, {
			name: "Spellcasting (Lizardfolk Form Only)",
			description: [
				"The lizardfolk is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The lizardfolk has the following druid spells prepared:",
				"Cantrips (at will): druidcraft, produce flame, thorn whip",
				"1st Level (4 slots): entangle, fog cloud",
				"2nd Level (3 slots): heat metal, spike growth",
				"3rd Level (2 slots): conjure animals (reptiles only), plant growth"
			]
		}
		],
		actions: [{
			name: "Multiattack (Lizardfolk Form Only)",
			description: "The lizardfolk makes two attacks: one with its bite and one with its claws."
		}, {
			name: "Change Shape (Recharges after a Short or Long Rest)",
			description: "The lizardfolk magically polymorphs into a crocodile, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
		}
		],
	},
	"Mage": {
		name: "Mage",
		source: ["Monster Manual", 347],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [12, "", false],
		hp: 40,
		hd: [9, 8],
		speed: "30 ft",
		scores: [9, 14, 11, 17, 12, 11],
		saves: ["", "", "", 6, 4, ""],
		skills: "Arcana +6, History +6",
		passive_perception: 11,
		languages: "any four languages",
		challenge_rating: "6",
		attacks: [{
			name: "Dagger (Melee)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dagger (Ranged)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		spells: [
			"The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:",
			"Cantrips (at will): fire bolt, light, mage hand, prestidigitation",
			"1st level (4 slots): detect magic, mage armor, magic missile, shield",
			"2nd level (3 slots): misty step, suggestion",
			"3rd level (3 slots): counterspell, fireball, fly",
			"4th level (3 slots): greater invisibility, ice storm",
			"5th level (1 slot): cone of cold"
		]
	},
	"Magma Mephit": {
		name: "Magma Mephit",
		source: ["Monster Manual", 216],
		size: "Small",
		type: "Elemental",
		alignment: "Neutral Evil",
		ac: [11, "", false],
		hp: 22,
		hd: [5, 6],
		speed: "30 ft, fly 30 ft",
		scores: [8, 12, 12, 7, 10, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +3",
		damage_vulnerabilities: "cold",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Ignan, Terran",
		challenge_rating: "1/2",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4) fire damage.",
		}
		],
		traits: [{
			name: "Death Burst",
			description: "When the mephit dies, it explodes in a burst of lava. Each creature within 5 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "False Appearance",
			description: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma.",
		}, {
			name: "Innate Spellcasting (1/Day)",
			description: "The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma.",
		}
		],
		actions: [{
			name: "Fire Breath (Recharge 6)",
			description: "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Variant: Summon Mephits (1/Day)",
			description: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
		}
		],
	},
	"Magmin": {
		name: "Magmin",
		source: ["Monster Manual", 212],
		size: "Small",
		type: "Elemental",
		alignment: "Chaotic Neutral",
		ac: [14, "Natural Armor", false],
		hp: 9,
		hd: [2, 6],
		speed: "30 ft",
		scores: [7, 15, 12, 8, 11, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "fire",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Ignan",
		challenge_rating: "1/2",
		attacks: [{
			name: "Touch",
			ability: 2,
			damage: [2, 6, "fire"],
			range: "Melee (5 ft)",
			description: "If the target is a creature or a flammable object, it ignites. Until a target takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns.",
		}
		],
		traits: [{
			name: "Death Burst",
			description: "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.",
		}, {
			name: "Ignited Illumination",
			description: "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 ft.",
		}
		],
	},
	"Mammoth": {
		name: "Mammoth",
		source: ["Monster Manual", 332],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 126,
		hd: [11, 12],
		speed: "40 ft",
		scores: [24, 9, 21, 3, 11, 6],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "6",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [4, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If used after moving 20 ft straight in the same round, see Trampling Charge trait",
		}, {
			name: "Stomp",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Can only be used on prone creatures (also see Trampling Charge trait)",
		}
		],
		traits: [{
			name: "Trampling Charge",
			description: "If the mammoth moves at least 20 ft straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action.",
		}
		],
	},
	"Manes": {
		name: "Manes",
		source: ["Monster Manual", 60],
		size: "Small",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [9, "Natural Armor", false],
		hp: 9,
		hd: [2, 6],
		speed: "20 ft",
		scores: [10, 9, 13, 3, 8, 4],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, fire, lightning",
		damage_immunities: "poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "9",
		languages: "understands Abyssal but can't speak",
		challenge_rating: "1/8",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Manticore": {
		name: "Manticore",
		source: ["Monster Manual", 213],
		size: "Large",
		type: "Monstrosity",
		alignment: "Lawful Evil",
		ac: [14, "Natural Armor", false],
		hp: 68,
		hd: [8, 10],
		speed: "30 ft, fly 50 ft",
		scores: [17, 16, 17, 7, 12, 8],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 11,
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail Spike",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Ranged (100/200 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Tail Spike Regrowth",
			description: "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes.",
		}
		],
	},
	"Marid": {
		name: "Marid",
		source: ["Monster Manual", 146],
		size: "Large",
		type: "elemental",
		alignment: "chaotic neutral",
		ac: [17, "Natural Armor", false],
		hp: 229,
		hd: [17, 10],
		speed: "30 ft, fly 60 ft, swim 90 ft",
		scores: [22, 12, 26, 18, 17, 18],
		saves: ["", "5", "", "", "7", "8"],
		damage_resistances: "acid, cold, lightning",
		senses: "blindsight 30 ft, darkvision 120 ft",
		passive_perception: "13",
		languages: "Aquan",
		challenge_rating: "11",
		attacks: [{
			name: "Trident (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "Two-Handed: 15 (2d8+6) piercing damage.",
		}, {
			name: "Trident (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The marid can breathe air and water."
		}, {
			name: "Elemental Demise",
			description: "If the marid dies, its body disintegrates into a burst of water and foam, leaving behind only equipment the marid was wearing or carrying."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The marid's innate spellcasting ability is Charisma (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
				"At will: create or destroy water, detect evil and good, detect magic, fog cloud, purify food and drink",
				"3/day each: tongues, water breathing, water walk",
				"1/day each: conjure elemental (water elemental only), control water, gaseous form, invisibility, plane shift"
			]
		}, {
			name: "Variant: Genie Powers",
			description: [
				"Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.",
				"Disguises: Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.",
				"Wishes: The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.",
				"To be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The marid makes two trident attacks."
		}, {
			name: "Water Jet",
			description: "The marid magically shoots water in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw . On a failure, a target takes 21 (6d6) bludgeoning damage and, if it is Huge or smaller, is pushed up to 20 feet away from the marid and knocked prone. On a success, a target takes half the bludgeoning damage, but is neither pushed nor knocked prone.",
		}
		],
	},
	"Marilith": {
		name: "Marilith",
		source: ["Monster Manual", 61],
		size: "Large",
		type: "Fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [18, "Natural Armor", false],
		hp: 189,
		hd: [18, 10],
		speed: "40 ft",
		scores: [18, 20, 20, 18, 16, 20],
		saves: [9, "", 10, "", 8, 10],
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Truesight 120 ft",
		passive_perception: 13,
		languages: "Abyssal, telepathy 120 ft.",
		challenge_rating: "16",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 10, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The marilith has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Magic Weapons",
			description: "The marilith's weapon attacks are magical.",
		}, {
			name: "Reactive",
			description: "The marilith can take one reaction on every turn in combat.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The marilith can make seven attacks: six with its longswords and one with its tail.",
		}, {
			name: "Teleport",
			description: "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 ft to an unoccupied space it can see.",
		}, {
			name: "Variant: Summon Demon (1/Day)",
			description: [
				"The demon chooses what to summon and attempts a magical summoning.",
				"A marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.",
				"A summoned demon appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
			]
		}
		],
		reactions: [{
			name: "Parry",
			description: "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon.",
		}
		],
	},
	"Mastiff": {
		name: "Mastiff",
		source: ["Monster Manual", 332],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 5,
		hd: [1, 8],
		speed: "40 ft",
		scores: [13, 14, 12, 3, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Adv. on Wis (Perception) checks using hearing/smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 11 Strength saving throw or be knocked prone",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}
		],
	},
	"Medusa": {
		name: "Medusa",
		source: ["Monster Manual", 214],
		size: "Medium",
		type: "Monstrosity",
		alignment: "Lawful Evil",
		ac: [15, "Natural Armor", false],
		hp: 127,
		hd: [17, 8],
		speed: "30 ft",
		scores: [10, 15, 16, 12, 13, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +4, Perception +4, Stealth +5",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "Common",
		challenge_rating: "6",
		attacks: [{
			name: "Snake Hair",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 14 (4d6) poison damage.",
		}, {
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}
		],
		traits: [{
			name: "Petrifying Gaze",
			description: [
				"When a creature that can see the medusa's eyes starts its turn within 30 ft. of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.",
				"Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.",
				"If the medusa sees itself reflected on a polished surface within 30 ft. of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze.",
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The medusa makes either three melee attacks — one with its snake hair and two with its shortsword — or two ranged attacks with its longbow.",
		}
		],
	},
	"Merfolk": {
		name: "Merfolk",
		source: ["Monster Manual", 218],
		size: "Medium",
		type: "Humanoid (merfolk)",
		alignment: "Neutral",
		ac: [11, "", false],
		hp: 11,
		hd: [2, 8],
		speed: "10 ft, swim 40 ft",
		scores: [10, 13, 12, 11, 11, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		passive_perception: 12,
		languages: "Aquan, Common",
		challenge_rating: "1/8",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 4 (1d8) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, ""],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The merfolk can breathe air and water.",
		}
		],
	},
	"Merrow": {
		name: "Merrow",
		source: ["Monster Manual", 219],
		size: "Large",
		type: "Monstrosity",
		alignment: "Chaotic Evil",
		ac: [13, "Natural Armor", false],
		hp: 45,
		hd: [6, 10],
		speed: "10 ft, swim 40 ft",
		scores: [18, 10, 15, 8, 10, 9],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Abyssal, Aquan",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Harpoon (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Harpoon (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 ft toward the merrow.",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The merrow can breathe air and water.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The merrow makes two attacks: one with its bite and one with its claws or harpoon.",
		}
		],
	},
	"Mezzoloth": {
		name: "Mezzoloth",
		source: ["Monster Manual", 313],
		size: "Medium",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [18, "Natural Armor", false],
		hp: 75,
		hd: [10, 8],
		speed: "40 ft",
		scores: [18, 11, 16, 7, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		damage_resistances: "cold, fire, lightning, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "acid, poison",
		condition_immunities: "poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: "13",
		languages: "Abyssal, Infernal, telepathy 60 ft",
		challenge_rating: "5",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Trident (Melee)",
			ability: 1,
			damage: [1, 6, ""],
			range: "Melee (5 ft)",
			description: "Or 8 (1d8+4) piercing damage when held with two claws.",
		}, {
			name: "Trident (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The mezzoloth's innate spellcasting ability is Charisma (spell save DC 11). The mezzoloth can innately cast the following spells, requiring no material components:",
				"2/day each: darkness, dispel magic",
				"1/day: cloudkill"
			]
		}, {
			name: "Magic Resistance",
			description: "The mezzoloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The mezzoloth's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The mezzoloth makes two attacks: one with its claws and one with its trident."
		}, {
			name: "Teleport",
			description: "The mezzoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
		}, {
			name: "Variant: Summon Yugoloth (1/day)",
			description: [
				"The yugoloth attempts a magical summoning.",
				"A mezzoloth has a 30 percent chance of summoning one mezzoloth.",
				"A summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, does as it pleases, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it."
			]
		}
		],
	},
	"Mimic": {
		name: "Mimic",
		source: ["Monster Manual", 220],
		size: "Medium",
		type: "Monstrosity (shapechanger)",
		alignment: "Neutral",
		ac: [12, "Natural Armor", false],
		hp: 58,
		hd: [9, 8],
		speed: "15 ft",
		scores: [17, 12, 15, 5, 13, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		damage_immunities: "acid",
		condition_immunities: "prone",
		senses: "Darkvision 60 ft",
		passive_perception: 11,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the mimic is in object form, the target is subjected to its Adhesive trait.",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 4 (1d8) acid damage.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn 't transformed. It reverts to its true form if it dies.",
		}, {
			name: "Adhesive (Object Form Only)",
			description: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage.",
		}, {
			name: "False Appearance (Object Form Only)",
			description: "While the mimic remains motionless, it is indistinguishable from an ordinary object.",
		}, {
			name: "Grappler",
			description: "The mimic has advantage on attack rolls against any creature grappled by it.",
		}
		],
	},
	"Mind Flayer": {
		name: "Mind Flayer",
		source: ["Monster Manual", 222],
		size: "Medium",
		type: "aberration",
		alignment: "lawful evil",
		ac: [15, "Breastplate", false],
		hp: 71,
		hd: [13, 8],
		speed: "30 ft",
		scores: [11, 12, 12, 19, 17, 17],
		saves: ["", "", "", "7", "6", "6"],
		skills: "Arcana +7, Deception +6, Insight +6, Perception +6, Persuasion +6, Stealth +4",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Deep Speech, Undercommon, telepathy 120 ft",
		challenge_rating: "7",
		attacks: [{
			name: "Tentacles",
			ability: 4,
			damage: [2, 10, "psychic"],
			range: "Melee (5 ft)",
			description: "If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends.",
		}, {
			name: "Extract Brain",
			ability: 4,
			damage: [10, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "One incapacitated humanoid grappled by the mind flayer. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The mind flayer has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The mind flayer's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components:",
				"At will: detect thoughts, levitate",
				"1/day each: dominate monster, plane shift (self only)"
			]
		}
		],
		actions: [{
			name: "Mind Blast (Recharge 5-6)",
			description: "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Mind Flayer Arcanist": {
		name: "Mind Flayer Arcanist",
		source: ["Monster Manual", 222],
		size: "Medium",
		type: "aberration",
		alignment: "lawful evil",
		ac: [15, "Breastplate", false],
		hp: 71,
		hd: [13, 8],
		speed: "30 ft",
		scores: [11, 12, 12, 19, 17, 17],
		saves: ["", "", "", "7", "6", "6"],
		skills: "Arcana +7, Deception +6, Insight +6, Perception +6, Persuasion +6, Stealth +4",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Deep Speech, Undercommon, telepathy 120 ft",
		challenge_rating: "8",
		attacks: [{
			name: "Tentacles",
			ability: 4,
			damage: [2, 10, "psychic"],
			range: "Melee (5 ft)",
			description: "If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends.",
		}, {
			name: "Extract Brain",
			ability: 4,
			damage: [10, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "One incapacitated humanoid grappled by the mind flayer. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The mind flayer has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The mind flayer's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components:",
				"At will: detect thoughts, levitate",
				"1/day each: dominate monster, plane shift (self only)"
			]
		}
		],
		actions: [{
			name: "Mind Blast (Recharge 5-6)",
			description: "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
		spells: [
			"The mind flayer is a 10th-level spellcaster. Its spellcasting ability is Intelligence (save DC 15, +7 to hit with spell attacks). The mind flayer has the following wizard spells prepared:",
			"Cantrips (at will): blade ward, dancing lights, mage hand, shocking grasp",
			"1st level (4 slots): detect magic, disguise self, shield, sleep",
			"2nd level (3 slots): blur, invisibility, ray of enfeeblement",
			"3rd level (3 slots): clairvoyance, lightning bolt, sending",
			"4th level (3 slots): confusion, hallucinatory terrain",
			"5th level (2 slots): telekinesis, wall of force"
		]
	},
	"Minotaur": {
		name: "Minotaur",
		source: ["Monster Manual", 223],
		size: "Large",
		type: "Monstrosity",
		alignment: "Chaotic Evil",
		ac: [14, "Natural Armor", false],
		hp: 76,
		hd: [9, 10],
		speed: "40 ft",
		scores: [18, 11, 16, 6, 16, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +7",
		senses: "Darkvision 60 ft",
		passive_perception: 17,
		languages: "Abyssal",
		challenge_rating: "3",
		attacks: [{
			name: "Greataxe",
			ability: 1,
			damage: [2, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Gore",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the minotaur moves at least 10 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 ft. away and knocked prone.",
		}, {
			name: "Labyrinthine Recall",
			description: "The minotaur can perfectly recall any path it has traveled.",
		}, {
			name: "Reckless",
			description: "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.",
		}
		],
	},
	"Minotaur Skeleton": {
		name: "Minotaur Skeleton",
		source: ["Monster Manual", 273],
		size: "Large",
		type: "Undead",
		alignment: "Lawful Evil",
		ac: [12, "Natural Armor", false],
		hp: 67,
		hd: [9, 10],
		speed: "40 ft",
		scores: [18, 11, 15, 6, 8, 5],
		saves: ["", "", "", "", "", ""],
		damage_vulnerabilities: "bludgeoning",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 9,
		languages: "understands Abyssal but can't speak",
		challenge_rating: "2",
		attacks: [{
			name: "Greataxe",
			ability: 1,
			damage: [2, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Gore",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the skeleton moves at least 10 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 ft away and knocked prone.",
		}
		],
	},
	"Monodrone": {
		name: "Monodrone",
		source: ["Monster Manual", 224],
		size: "Medium",
		type: "construct",
		alignment: "construct",
		ac: [15, "Natural Armor", false],
		hp: 5,
		hd: [1, 8],
		speed: "30 ft, fly 30 ft",
		scores: [10, 13, 12, 4, 10, 5],
		saves: ["", "", "", "", "", ""],
		senses: "truesight 120 ft",
		passive_perception: "10",
		languages: "Modron",
		challenge_rating: "1/8",
		attacks: [{
			name: "Dagger",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Axiomatic Mind",
			description: "The monodrone can't be compelled to act in a manner contrary to its nature or its instructions."
		}, {
			name: "Disintegration",
			description: "If the monodrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
		}
		],
	},
	"Mud Mephit": {
		name: "Mud Mephit",
		source: ["Monster Manual", 216],
		size: "Small",
		type: "elemental",
		alignment: "neutral evil",
		ac: [11, "", false],
		hp: 27,
		hd: [6, 6],
		speed: "20 ft, fly 20 ft, swim 20 ft",
		scores: [8, 12, 12, 9, 11, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +3",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Aquan, Terran",
		challenge_rating: "1/4",
		attacks: [{
			name: "Fists",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Death Burst",
			description: "When the mephit dies, it explodes in a burst of sticky mud. Each Medium or smaller creature within 5 ft of it must succeed on a DC 11 Dexterity saving throw or be restrained until the end of the creature's next turn."
		}, {
			name: "False Appearance",
			description: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of mud."
		}
		],
		actions: [{
			name: "Mud Breath (Recharge 6)",
			description: "The mephit belches viscid mud onto one creature within 5 ft of it. If the target is Medium or smaller, it must succeed on a DC 11 Dexterity saving throw or be restrained for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Variant: Summon Mephits (1/Day)",
			description: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
		}
		]
	},
	"Mule": {
		name: "Mule",
		source: ["Monster Manual", 333],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 11,
		hd: [2, 8],
		speed: "40 ft",
		scores: [14, 10, 13, 2, 10, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Beast of Burden",
			description: "The mule is considered to be a Large animal for the purpose of determining its carrying capacity.",
		}, {
			name: "Sure-Footed",
			description: "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
		}
		],
	},
	"Mummy": {
		name: "Mummy",
		source: ["Monster Manual", 228],
		size: "Medium",
		type: "Undead",
		alignment: "Lawful Evil",
		ac: [11, "Natural Armor", false],
		hp: 58,
		hd: [9, 8],
		speed: "20 ft",
		scores: [16, 8, 15, 6, 10, 12],
		saves: ["", "", "", "", 2, ""],
		damage_vulnerabilities: "fire",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "all languages it knew in life",
		challenge_rating: "3",
		attacks: [{
			name: "Rotting Fist",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3d6 necrotic damage; DC 12 Constitution save or cursed with Mummy Rot",
		}, {
			name: "Dreadful Glare",
			ability: 6,
			damage: ["Frightened", "", ""],
			range: "60 ft",
			description: "Wis save or frightened for 1 round; If failed by 5 or more, paralyzed as well",
		}
		],
		traits: [{
			name: "Multiattack",
			description: "With one Attack action, do both Dreadful Glare and a Rotting Fist attack.",
		}, {
			name: "Mummy Rot",
			description: "A cursed creature can't regain hit points, and its hit point maximum decreases by 3d6 for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
		}, {
			name: "Dreadful Glare",
			description: "If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours.",
		}
		],
	},
	"Mummy Lord": {
		name: "Mummy Lord",
		source: ["Monster Manual", 229],
		size: "Medium",
		type: "Undead",
		alignment: "Lawful Evil",
		ac: [17, "Natural Armor", false],
		hp: 97,
		hd: [13, 8],
		speed: "20 ft",
		scores: [18, 10, 17, 11, 18, 16],
		saves: ["", "", 8, 5, 9, 8],
		skills: "History +5, Religion +5",
		damage_vulnerabilities: "bludgeoning",
		damage_immunities: "necrotic, poison; bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "the languages it knew in life",
		challenge_rating: "15",
		attacks: [{
			name: "Rotting Fist",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The mummy lord has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Rejuvenation",
			description: "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 ft of the mummy lord's heart.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist.",
		}, {
			name: "Dreadful Glare",
			description: "The mummy lord targets one creature it can see within 60 ft of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours.",
		}
		],
		legendary_actions: [{
			name: "Attack",
			description: "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare.",
		}, {
			name: "Blinding Dust",
			description: "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 ft of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn.",
		}, {
			name: "Blasphemous Word (Costs 2 Actions)",
			description: "The mummy lord utters a blasphemous word. Each non-undead creature within 10 ft of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn.",
		}, {
			name: "Channel Negative Energy (Costs 2 Actions)",
			description: "The mummy lord magically unleashes negative energy. Creatures within 60 ft of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn.",
		}, {
			name: "Whirlwind of Sand (Costs 2 Actions)",
			description: "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 ft, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession.",
		}
		],
		spells: [
			"The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared:",
			"Cantrips (at will): sacred flame, thaumaturgy",
			"1st level (4 slots): command, guiding bolt, shield of faith",
			"2nd level (3 slots): hold person, silence, spiritual weapon",
			"3rd level (3 slots): animate dead, dispel magic",
			"4th level (3 slots): divination, guardian of faith",
			"5th level (2 slots): contagion, insect plague",
			"6th level (1 slot): harm"
		]
	},
	"Myconid Adult": {
		name: "Myconid Adult",
		source: ["Monster Manual", 232],
		size: "Medium",
		type: "plant",
		alignment: "lawful neutral",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [4, 8],
		speed: "20 ft",
		scores: [10, 10, 12, 10, 13, 7],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 120 ft",
		passive_perception: "11",
		challenge_rating: "1/2",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 5 (2d4) poison damage.",
		}
		],
		traits: [{
			name: "Distress Spores",
			description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
		}, {
			name: "Sun Sickness",
			description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
		}
		],
		actions: [{
			name: "Pacifying Spores (3/day)",
			description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 11 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Rapport Spores",
			description: "A 20-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
		}
		]
	},
	"Myconid Sovereign": {
		name: "Myconid Sovereign",
		source: ["Monster Manual", 232],
		size: "Large",
		type: "plant",
		alignment: "lawful neutral",
		ac: [13, "Natural Armor", false],
		hp: 60,
		hd: [8, 10],
		speed: "30 ft",
		scores: [12, 10, 14, 13, 15, 10],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 120 ft",
		passive_perception: "12",
		challenge_rating: "2",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [3, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 7 (3d4) poison damage.",
		}
		],
		traits: [{
			name: "Distress Spores",
			description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
		}, {
			name: "Sun Sickness",
			description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The myconid uses either its Hallucination Spores or its Pacifying Spores, then makes a fist attack."
		}, {
			name: "Animating Spores",
			description: "The myconid targets one corpse of a humanoid or a Large or smaller beast within 5 feet of it and releases spores at the corpse. In 24 hours, the corpse rises as a spore servant. The corpse stays animated for 1d4 +1 weeks or until destroyed, and it can't be animated again in this way."
		}, {
			name: "Hallucination Spores",
			description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The poisoned target is incapacitated while it hallucinates. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Pacifying Spores",
			description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}, {
			name: "Rapport Spores",
			description: "A 30-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
		}
		]
	},
	"Myconid Sprout": {
		name: "Myconid Sprout",
		source: ["Monster Manual", 230],
		size: "Small",
		type: "plant",
		alignment: "lawful neutral",
		ac: [10, "", false],
		hp: 7,
		hd: [2, 6],
		speed: "10 ft",
		scores: [8, 10, 10, 8, 11, 5],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 120 ft",
		passive_perception: "10",
		challenge_rating: "0",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4 ) poison damage.",
		}
		],
		traits: [{
			name: "Distress Spores",
			description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
		}, {
			name: "Sun Sickness",
			description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
		}
		],
		actions: [{
			name: "Rapport Spores (3/day)",
			description: "A 10-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
		}
		]
	},
	"Nalfeshnee": {
		name: "Nalfeshnee",
		source: ["Monster Manual", 62],
		size: "Large",
		type: "Fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [18, "Natural Armor", false],
		hp: 184,
		hd: [16, 10],
		speed: "20 ft, fly 30 ft",
		scores: [21, 10, 22, 19, 12, 15],
		saves: ["", "", 11, 9, 6, 7],
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Truesight 120 ft",
		passive_perception: 11,
		languages: "Abyssal, telepathy 120 ft.",
		challenge_rating: "13",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [5, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [3, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The nalfeshnee has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Horror Nimbus (Recharge 5-6)",
			description: "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 ft of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours.",
		}, {
			name: "Teleport",
			description: "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 ft to an unoccupied space it can see.",
		}, {
			name: "Variant: Summon Demon (1/Day)",
			description: [
				"The demon chooses what to summon and attempts a magical summoning.",
				"A nalfeshnee has a 50 percent chance of summoning (1d4) vrocks, (1d3) hezrous, (1d2) glabrezus, or one nalfeshnee.",
				"A summoned demon appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
			]
		}
		],
	},
	"Needle Blight": {
		name: "Needle Blight",
		source: ["Monster Manual", 32],
		size: "Medium",
		type: "plant",
		alignment: "neutral evil",
		ac: [12, "Natural Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft",
		scores: [12, 12, 13, 4, 8, 3],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "blinded, deafened",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passive_perception: "9",
		languages: "understands Common but can't speak",
		challenge_rating: "1/4",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Needles",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (30/60 ft)",
			description: "",
		}
		],
	},
	"Night Hag": {
		name: "Night Hag",
		source: ["Monster Manual", 178],
		size: "Medium",
		type: "Fiend",
		alignment: "Neutral Evil",
		ac: [17, "Natural Armor", false],
		hp: 112,
		hd: [15, 8],
		speed: "30 ft",
		scores: [18, 15, 16, 16, 14, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +7, Insight +6, Perception +6, Stealth +6",
		damage_resistances: "cold, fire; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		condition_immunities: "charmed",
		senses: "Darkvision 120 ft",
		passive_perception: 16,
		languages: "Abyssal, Common, Infernal, Primordial",
		challenge_rating: "5",
		attacks: [{
			name: "Claws (Hag Form Only)",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The hag's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:",
				"At will: detect magic, magic missile",
				"2/day each: plane shift (self only), ray of enfeeblement, sleep"
			]
		}, {
			name: "Magic Resistance",
			description: "The hag has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Night Hag Items",
			description: [
				"A night hag carries two very rare magic items that she must craft for herself If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort.",
				"Heartstone: This lustrous black gem allows a night hag to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days.",
				"Soul Bag: When an evil humanoid dies as a result of a night hag's Nightmare Haunting, the hag catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag).",
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
				"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
			]
		}, {
			name: "Shared Spellcasting (Coven Only)",
			description: [
				"While all three members of a hag coven are within 30 ft of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:",
				"1st level (4 slots): identify, ray of sickness",
				"2nd level (3 slots): hold person, locate object",
				"3rd level (3 slots): bestow curse, counterspell, lightning bolt",
				"4th level (3 slots): phantasmal killer, polymorph",
				"5th level (2 slots): contact other plane, scrying",
				"6th level (1 slot): eye bite",
				"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
			]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and Darkvision with a radius of 60 ft. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.",
			]
		}
		],
		actions: [{
			name: "Change Shape",
			description: "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies.",
		}, {
			name: "Etherealness",
			description: "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession.",
		}, {
			name: "Nightmare Haunting (1/Day)",
			description: "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic.",
		}
		],
	},
	"Nightmare": {
		name: "Nightmare",
		source: ["Monster Manual", 235],
		size: "Large",
		type: "Fiend",
		alignment: "Neutral Evil",
		ac: [13, "Natural Armor", false],
		hp: 68,
		hd: [8, 10],
		speed: "60 ft, fly 90 ft",
		scores: [18, 15, 16, 10, 13, 15],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "fire",
		passive_perception: 11,
		languages: "understands Abyssal, Common, and Infernal but can't speak",
		challenge_rating: "3",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target also takes 2d6 fire damage upon a hit",
		}
		],
		traits: [{
			name: "Confer Fire Resistance",
			description: "The nightmare can grant resistance to fire damage to anyone riding it.",
		}, {
			name: "Illumination",
			description: "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 ft.",
		}
		],
		actions: [{
			name: "Ethereal Stride",
			description: "As an action, the nightmare and up to three willing creatures within 5 ft of it magically enter the Ethereal Plane from the Material Plane, or vice versa.",
		}
		],
	},
	"Noble": {
		name: "Noble",
		source: ["Monster Manual", 348],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [15, "Breastplate", false],
		hp: 9,
		hd: [2, 8],
		speed: "30 ft",
		scores: [11, 12, 11, 12, 14, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +4, Persuasion +5",
		passive_perception: 12,
		languages: "any two languages",
		challenge_rating: "1/8",
		attacks: [{
			name: "Rapier",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		reactions: [{
			name: "Parry",
			description: "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon.",
		}
		],
	},
	"Nothic": {
		name: "Nothic",
		source: ["Monster Manual", 236],
		size: "Medium",
		type: "aberration",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft",
		scores: [14, 16, 16, 13, 10, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Arcana +3, Insight +4, Perception +2, Stealth +5",
		senses: "truesight 120 ft",
		passive_perception: "12",
		languages: "Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The nothic has advantage on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The nothic makes two claw attacks."
		}, {
			name: "Rotting Gaze",
			description: "The nothic targets one creature it can see within 30 ft of it. The target must succeed on a DC 12 Constitution saving throw against this magic or take 10 (3d6) necrotic damage.",
		}, {
			name: "Weird Insight",
			description: "The nothic targets one creature it can see within 30 ft of it. The target must contest its Charisma (Deception) check against the nothic's Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the target. The target automatically wins if it is immune to being charmed."
		}
		]
	},
	"Nycaloth": {
		name: "Nycaloth",
		source: ["Monster Manual", 314],
		size: "Large",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [18, "Natural Armor", false],
		hp: 123,
		hd: [13, 10],
		speed: "40 ft, fly 60 ft",
		scores: [20, 11, 19, 12, 10, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +6, Perception +4, Stealth +4",
		damage_resistances: "cold, fire, lightning, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "acid, poison",
		condition_immunities: "poisoned",
		senses: "blindsight 60 ft, darkvision 60 ft",
		passive_perception: "14",
		languages: "Abyssal, Infernal, telepathy 60 ft",
		challenge_rating: "9",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 16 Constitution saving throw or take 5 (2d4) slashing damage at the start of each of its turns due to a fiendish wound. Each time the nycaloth hits the wounded target with this attack, the damage dealt by the wound increases by 5 (2d4). Any creature can take an action to stanch the wound with a successful DC 13 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
		}, {
			name: "Greataxe",
			ability: 1,
			damage: [2, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The nycaloth's innate spellcasting ability is Charisma. The nycaloth can innately cast the following spells, requiring no material components:",
				"At will: darkness, detect magic, dispel magic, invisibility (self only), mirror image"
			]
		}, {
			name: "Magic Resistance",
			description: "The nycaloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The nycaloth's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The nycaloth makes two melee attacks, or it makes one melee attack and teleports before or after the attack."
		}, {
			name: "Teleport",
			description: "The nycaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
		}, {
			name: "Variant: Summon Yugoloth (1/day)",
			description: [
				"The yugoloth chooses what to summon and attempts a magical summoning.",
				"A nycaloth has a 50 percent chance of summoning 1d4 mezzoloths or one nycaloth.",
				"A summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, does as it pleases, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it."
			]
		}
		],
	},
	"Ochre Jelly": {
		name: "Ochre Jelly",
		source: ["Monster Manual", 243],
		size: "Large",
		type: "Ooze",
		alignment: "Unaligned",
		ac: [8, "", false],
		hp: 45,
		hd: [6, 10],
		speed: "10 ft, climb 10 ft",
		scores: [15, 6, 14, 2, 6, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "acid",
		damage_immunities: "lightning, slashing",
		condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, prone",
		senses: "Blindsight 60 ft (blind beyond this radius)",
		passive_perception: 8,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Pseudopod",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) acid damage.",
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The jelly can move through a space as narrow as 1 inch wide without squeezing.",
		}, {
			name: "Spider Climb",
			description: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}
		],
		reactions: [{
			name: "Split",
			description: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly.",
		}
		],
	},
	"Octopus": {
		name: "Octopus",
		source: ["Monster Manual", 333],
		size: "Small",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 3,
		hd: [1, 6],
		speed: "5 ft, swim 30 ft",
		scores: [4, 15, 11, 3, 10, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		senses: "Darkvision 30 ft",
		passive_perception: 12,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Tentacles",
			ability: 2,
			damage: [1, "", "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled and restrained (escape DC 10); can't use tentacles again until grapple ends",
		}
		],
		traits: [{
			name: "Hold Breath",
			description: "While out of water, the octopus can hold its breath for 30 minutes.",
		}, {
			name: "Underwater Camouflage",
			description: "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
		}, {
			name: "Water Breathing",
			description: "The octopus can breathe only underwater.",
		}
		],
	},
	"Ogre": {
		name: "Ogre",
		source: ["Monster Manual", 237],
		size: "Large",
		type: "Giant",
		alignment: "Chaotic Evil",
		ac: [11, "Hide Armor", false],
		hp: 59,
		hd: [7, 10],
		speed: "40 ft",
		scores: [19, 8, 16, 5, 7, 7],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 8,
		languages: "Common, Giant",
		challenge_rating: "2",
		attacks: [{
			name: "Greatclub",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
	},
	"Ogre Zombie": {
		name: "Ogre Zombie",
		source: ["Monster Manual", 316],
		size: "Large",
		type: "Undead",
		alignment: "Neutral Evil",
		ac: [8, "", false],
		hp: 85,
		hd: [9, 10],
		speed: "30 ft",
		scores: [19, 6, 18, 3, 6, 5],
		saves: ["", "", "", "", 0, ""],
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 8,
		languages: "understands Command and Giant but can't speak",
		challenge_rating: "2",
		attacks: [{
			name: "Morningstar",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Undead Fortitude",
			description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 @ the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
		}
		],
	},
	"Oni": {
		name: "Oni",
		source: ["Monster Manual", 239],
		size: "Large",
		type: "Giant",
		alignment: "Lawful Evil",
		ac: [16, "Chain Mail", false],
		hp: 110,
		hd: [13, 10],
		speed: "30 ft, fly 30 ft",
		scores: [19, 11, 16, 14, 12, 15],
		saves: ["", 3, 6, "", 4, 5],
		skills: "Arcana +5, Deception +8, Perception +4",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "Common, Giant",
		challenge_rating: "7",
		attacks: [{
			name: "Claw (Oni Form Only)",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Glaive",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (10 ft)",
			description: "Or 9 (1d10+4) slashing damage in Small or Medium form.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components:",
				"At will: darkness, invisibility",
				"1/day each: charm person, cone of cold, gaseous form, sleep"
			]
		}, {
			name: "Magic Weapons",
			description: "The oni's weapon attacks are magical.",
		}, {
			name: "Regeneration",
			description: "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The oni makes two attacks, either with its claws or its glaive.",
		}, {
			name: "Change Shape",
			description: "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size.",
		}
		],
	},
	"Orc": {
		name: "Orc",
		source: ["Monster Manual", 246],
		size: "Medium",
		type: "Humanoid (orc)",
		alignment: "Chaotic Evil",
		ac: [13, "Hide Armor", false],
		hp: 15,
		hd: [2, 8],
		speed: "30 ft",
		scores: [16, 12, 16, 7, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +2",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Common, Orc",
		challenge_rating: "1/2",
		attacks: [{
			name: "Greataxe",
			ability: 1,
			damage: [1, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.",
		}
		],
	},
	"Orc Eye of Gruumsh": {
		name: "Orc Eye of Gruumsh",
		source: ["Monster Manual", 247],
		size: "Medium",
		type: "humanoid (orc)",
		alignment: "chaotic evil",
		ac: [16, "Ring Mail", true],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft",
		scores: [16, 12, 17, 9, 13, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +3, Religion +1",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Common, Orc",
		challenge_rating: "2",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 12 (2d8+3) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
		}, {
			name: "Gruumsh's Fury",
			description: "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attacks)."
		}
		],
		spells: [
			"The orc is a 3rd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The orc has the following cleric spells prepared:",
			"Cantrips (at will): guidance, resistance, thaumaturgy",
			"1st level (4 slots): bless, command",
			"2nd level (2 slots): augury, spiritual weapon (spear)"
		]
	},
	"Orc War Chief": {
		name: "Orc War Chief",
		source: ["Monster Manual", 246],
		size: "Medium",
		type: "humanoid (orc)",
		alignment: "chaotic evil",
		ac: [16, "Chain Mail", false],
		hp: 93,
		hd: [11, 8],
		speed: "30 ft",
		scores: [18, 12, 18, 11, 11, 16],
		saves: ["6", "", "6", "", "2", ""],
		skills: "Intimidation +5",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Common, Orc",
		challenge_rating: "4",
		attacks: [{
			name: "Greataxe",
			ability: 1,
			damage: [1, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 1d8 damage.",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 1d8 damage; Two-Handed: 13 (2d8+4) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "Plus 1d8 damage.",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
		}, {
			name: "Gruumsh's Fury",
			description: "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attacks)."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The orc makes two attacks with its greataxe or its spear."
		}, {
			name: "Battle Cry (1/Day)",
			description: "Each creature of the war chief's choice that is within 30 feet of it, can hear it, and not already affected by Battle Cry gain advantage on attack rolls until the start of the war chief's next turn. The war chief can then make one attack as a bonus action."
		}
		]
	},
	"Orog": {
		name: "Orog",
		source: ["Monster Manual", 247],
		size: "Medium",
		type: "humanoid (orc)",
		alignment: "chaotic evil",
		ac: [18, "Plate", false],
		hp: 42,
		hd: [5, 8],
		speed: "30 ft",
		scores: [18, 12, 18, 12, 11, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +5, Survival +2",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Common, Orc",
		challenge_rating: "2",
		attacks: [{
			name: "Greataxe",
			ability: 1,
			damage: [1, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Aggressive",
			description: "As a bonus action, the orog can move up to its speed toward a hostile creature that it can see."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The orog makes two greataxe attacks."
		}
		]
	},
	"Otyugh": {
		name: "Otyugh",
		source: ["Monster Manual", 248],
		size: "Large",
		type: "Aberration",
		alignment: "Neutral",
		ac: [14, "Natural Armor", false],
		hp: 114,
		hd: [12, 10],
		speed: "30 ft",
		scores: [16, 11, 19, 6, 13, 6],
		saves: ["", "", 7, "", "", ""],
		senses: "Darkvision 120 ft",
		passive_perception: 11,
		languages: "Otyugh",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			dc: true,
			description: "If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured.",
		}, {
			name: "Tentacle",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			dc: true,
			description: "Plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target.",
		}
		],
		traits: [{
			name: "Limited Telepathy",
			description: "The otyugh can magically transmit simple messages and images to any creature within 120 ft. of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The otyugh makes three attacks: one with its bite and two with its tentacles.",
		}, {
			name: "Tentacle Slam",
			description: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6+3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned.",
		}
		],
	},
	"Owl": {
		name: "Owl",
		source: ["Monster Manual", 333],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "5 ft, fly 60 ft",
		scores: [3, 13, 8, 2, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +3",
		senses: "Darkvision 120 ft; Adv. on Wis (Perception) checks using hearing/sight",
		passive_perception: 13,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Talons",
			ability: 2,
			damage: [1, "", "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Flyby",
			description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
		}, {
			name: "Keen Hearing and Sight",
			description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
		}
		],
	},
	"Owlbear": {
		name: "Owlbear",
		source: ["Monster Manual", 249],
		size: "Large",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 59,
		hd: [7, 10],
		speed: "40 ft",
		scores: [20, 12, 17, 3, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Darkvision 60 ft",
		passive_perception: 13,
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Sight and Smell",
			description: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The owlbear makes two attacks: one with its beak and one with its claws.",
		}
		],
	},
	"Panther": {
		name: "Panther",
		source: ["Monster Manual", 333],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 13,
		hd: [3, 8],
		speed: "50 ft, climb 40 ft",
		scores: [14, 15, 10, 3, 14, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +6",
		senses: "Adv. on Wis (Perception) checks using smell",
		passive_perception: 14,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Pounce trait",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Can be used in combination with claw while pouncing (see Pounce trait)",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The panther has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name: "Pounce",
			description: "If the panther moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action.",
		}
		],
	},
	"Pegasus": {
		name: "Pegasus",
		source: ["Monster Manual", 250],
		size: "Large",
		type: "Celestial",
		alignment: "Chaotic Good",
		ac: [12, "", false],
		hp: 59,
		hd: [7, 10],
		speed: "60 ft, fly 90 ft",
		scores: [18, 15, 16, 10, 15, 13],
		saves: ["", 4, "", "", 4, 3],
		skills: "Perception +6",
		passive_perception: 16,
		languages: "understands Celestial, Common, Elvish, and Sylvan but can't speak",
		challenge_rating: "2",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Pentadrone": {
		name: "Pentadrone",
		source: ["Monster Manual", 226],
		size: "Medium",
		type: "construct",
		alignment: "construct",
		ac: [16, "Natural Armor", false],
		hp: 32,
		hd: [5, 10],
		speed: "40 ft",
		scores: [15, 14, 12, 10, 10, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "truesight 120 ft",
		passive_perception: "14",
		languages: "Modron",
		challenge_rating: "2",
		attacks: [{
			name: "Arm",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Axiomatic Mind",
			description: "The pentadrone can't be compelled to act in a manner contrary to its nature or its instructions."
		}, {
			name: "Disintegration",
			description: "If the pentadrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The pentadrone makes five arm attacks."
		}, {
			name: "Paralysis Gas (Recharge 5-6)",
			description: "The pentadrone exhales a 30-foot cone of gas. Each creature in that area must succeed on a DC 11 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
		}
		]
	},
	"Peryton": {
		name: "Peryton",
		source: ["Monster Manual", 251],
		size: "Medium",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [13, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "20 ft, fly 60 ft",
		scores: [16, 12, 13, 9, 12, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		passive_perception: "15",
		languages: "understands Common and Elvish but can't speak",
		challenge_rating: "2",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Talons",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Dive Attack",
			description: "If the peryton is flying and dives at least 30 ft straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8) damage to the target."
		}, {
			name: "Flyby",
			description: "The peryton doesn't provoke an opportunity attack when it flies out of an enemy's reach."
		}, {
			name: "Keen Sight and Smell",
			description: "The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The peryton makes one gore attack and one talon attack."
		}
		]
	},
	"Phase Spider": {
		name: "Phase Spider",
		source: ["Monster Manual", 334],
		size: "Large",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 32,
		hd: [5, 10],
		speed: "30 ft, climb 30 ft",
		scores: [15, 15, 12, 6, 10, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +6",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			dc: true,
			description: "Target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
		}
		],
		traits: [{
			name: "Ethereal Jaunt",
			description: "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa.",
		}, {
			name: "Spider Climb",
			description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}, {
			name: "Web Walker",
			description: "The spider ignores movement restrictions caused by webbing.",
		}
		],
	},
	"Piercer": {
		name: "Piercer",
		source: ["Monster Manual", 252],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [15, "Natural Armor", false],
		hp: 22,
		hd: [3, 8],
		speed: "5 ft, climb 5 ft",
		scores: [10, 13, 16, 1, 7, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		senses: "blindsight 30 ft, darkvision 60 ft",
		passive_perception: "8",
		challenge_rating: "1/2",
		attacks: [{
			name: "Drop",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "",
			description: "One creature directly underneath the piercer. Hit: Damage per 10 feet fallen, up to 21 (6d6). Miss: The piercer takes half the normal falling damage for the distance fallen.",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the piercer remains motionless on the ceiling, it is indistinguishable from a normal stalactite."
		}, {
			name: "Spider Climb",
			description: "The piercer can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}
		],
	},
	//PIRATE SEE Bandit
	//PIRATE CAPTAIN SEE BANDIT CAPTAIN
	"Pit Fiend": {
		name: "Pit Fiend",
		source: ["Monster Manual", 77],
		size: "Large",
		type: "Fiend (devil)",
		alignment: "Lawful Evil",
		ac: [19, "Natural Armor", false],
		hp: 300,
		hd: [24, 10],
		speed: "30 ft, fly 60 ft",
		scores: [26, 14, 24, 22, 18, 24],
		saves: ["", 8, 13, "", 10, ""],
		damage_resistances: "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Truesight 120 ft",
		passive_perception: 14,
		languages: "Infernal, telepathy 120 ft.",
		challenge_rating: "20",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 6, "piercing"],
			range: "Melee (5 ft)",
			dc: true,
			description: "Target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Mace",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 21 (6d6) fire damage.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [3, 10, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Fear Aura",
			description: "Any creature hostile to the pit fiend that starts its turn within 20 ft of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours.",
		}, {
			name: "Magic Resistance",
			description: "The pit fiend has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Magic Weapons",
			description: "The pit fiend's weapon attacks are magical.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The pit fiend's spellcasting ability is Charisma (spell save DC 21). The pit fiend can innately cast the following spells, requiring no material components:",
				"At will: detect magic, fireball",
				"3/day each: hold monster, wall of fire"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail.",
		}
		],
	},
	"Pixie": {
		name: "Pixie",
		source: ["Monster Manual", 253],
		size: "Tiny",
		type: "fey",
		alignment: "neutral good",
		ac: [15, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "10 ft, fly 30 ft",
		scores: [2, 20, 8, 10, 14, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +7",
		passive_perception: "14",
		languages: "Sylvan",
		challenge_rating: "1/4",
		attacks: [{
			name: "Unarmed Strike",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The pixie has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The pixie's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring only its pixie dust as a component:",
				"At will: druidcraft",
				"1/day each: confusion, dancing lights, detect evil and good, detect thoughts, dispel magic, entangle, fly, phantasmal force, polymorph, sleep"
			]
		}
		],
		actions: [{
			name: "Superior Invisibility",
			description: "The pixie magically turns invisible until its concentration ends (as if concentrating on a spell). Any equipment the pixie wears or carries is invisible with it."
		}
		],
	},
	"Planetar": {
		name: "Planetar",
		source: ["Monster Manual", 17],
		size: "Large",
		type: "Celestial",
		alignment: "Lawful Good",
		ac: [19, "Natural Armor", false],
		hp: 200,
		hd: [16, 10],
		speed: "40 ft, fly 120 ft",
		scores: [24, 20, 24, 19, 22, 25],
		saves: ["", "", 12, "", 11, 12],
		skills: "Perception +11",
		damage_resistances: "radiant; bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "charmed, exhaustion, frightened",
		senses: "Truesight 120 ft",
		passive_perception: 21,
		languages: "all, telepathy 120 ft.",
		challenge_rating: "16",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 22 (5d8) radiant damage.",
		}
		],
		traits: [{
			name: "Angelic Weapons",
			description: "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack).",
		}, {
			name: "Divine Awareness",
			description: "The planetar knows if it hears a lie.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components:",
				"At will: detect evil and good, invisibility (self only)",
				"3/day each: blade barrier, dispel evil and good, flame strike, raise dead",
				"1/day each: commune, control weather, insect plague"
			]
		}, {
			name: "Magic Resistance",
			description: "The planetar has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The planetar makes two melee attacks.",
		}, {
			name: "Healing Touch (4/Day)",
			description: "The planetar touches another creature. The target magically regains 30 (6d8+3) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
		}
		],
	},
	"Plesiosaurus": {
		name: "Plesiosaurus",
		source: ["Monster Manual", 80],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 68,
		hd: [8, 10],
		speed: "20 ft, swim 40 ft",
		scores: [18, 15, 16, 2, 12, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		passive_perception: 13,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Hold Breath",
			description: "The plesiosaurus can hold its breath for 1 hour.",
		}
		],
	},
	"Poisonous Snake": {
		name: "Poisonous Snake",
		source: ["Monster Manual", 334],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 2,
		hd: [1, 4],
		speed: "30 ft, swim 30 ft",
		scores: [2, 16, 11, 1, 10, 3],
		saves: ["", "", "", "", "", ""],
		senses: "Blindsight 10 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "Target also takes 2d4 poison damage, half on a DC 10 Constitution saving throw",
		}
		],
	},
	"Polar Bear": {
		name: "Polar Bear",
		source: ["Monster Manual", 334],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 42,
		hd: [5, 10],
		speed: "40 ft, swim 30 ft",
		scores: [20, 10, 16, 2, 13, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Adv. on Wis (Perception) checks using smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "One bite and one claw attack as an Attack action",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "One claw and one bite attack as an Attack action",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
		}
		],
	},
	"Poltergeist": {
		name: "Poltergeist",
		source: ["Monster Manual", 279],
		size: "Medium",
		type: "undead",
		alignment: "chaotic evil",
		ac: [12, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "0 ft, fly 50 ft (hover)",
		scores: [1, 14, 11, 10, 10, 11],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "acid, cold, fire, lightning, thunder, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "necrotic, poison",
		condition_immunities: "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "understands all languages it knew in life but can't speak",
		challenge_rating: "2",
		attacks: [{
			name: "Forceful Slam",
			ability: 2,
			damage: [3, 6, "force"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Incorporeal Movement",
			description: "The poltergeist can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the poltergeist has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Invisibility",
			description: "The poltergeist is invisible."
		}
		],
		actions: [{
			name: "Telekinetic Thrust",
			description: [
				"The poltergeist targets a creature or unattended object within 30 feet of it. A creature must be Medium or smaller to be affected by this magic, and an object can weigh up to 150 pounds.",
				"If the target is a creature, the poltergeist makes a Charisma check contested by the target's Strength check. If the poltergeist wins the contest, the poltergeist hurls the target up to 30 feet in any direction, including upward. If the target then comes into contact with a hard surface or heavy object, the target takes 1d6 damage per 10 feet moved.",
				"If the target is an object that isn't being worn or carried, the poltergeist hurls it up to 30 feet in any direction. The poltergeist can use the object as a ranged weapon, attacking one creature along the object's path (+4 to hit) and dealing 5 (2d4) bludgeoning damage on a hit."
			]
		}
		]
	},
	"Pony": {
		name: "Pony",
		source: ["Monster Manual", 335],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 11,
		hd: [2, 8],
		speed: "40 ft",
		scores: [15, 10, 13, 2, 11, 7],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Priest": {
		name: "Priest",
		source: ["Monster Manual", 348],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [13, "Chain Shirt", false],
		hp: 27,
		hd: [5, 8],
		speed: "25 ft",
		scores: [10, 10, 12, 13, 16, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Medicine +7, Persuasion +3, Religion +4",
		passive_perception: 13,
		languages: "any two languages",
		challenge_rating: "2",
		attacks: [{
			name: "Mace",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Divine Eminence",
			description: "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st.",
		}
		],
		spells: [
			"The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:",
			"Cantrips (at will): light, sacred flame, thaumaturgy",
			"1st level (4 slots): cure wounds, guiding bolt, sanctuary",
			"2nd level (3 slots): lesser restoration, spiritual weapon",
			"3rd level (2 slots): dispel magic, spirit guardians"
		]
	},
	"Pseudodragon": {
		name: "Pseudodragon",
		source: ["Monster Manual", 254],
		size: "Tiny",
		type: "Dragon",
		alignment: "Neutral Good",
		ac: [13, "Natural Armor", false],
		hp: 7,
		hd: [2, 4],
		speed: "15 ft, fly 60 ft",
		scores: [6, 15, 13, 10, 12, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		senses: "Blindsight 10 ft; Darkvision 60 ft; Adv. on Wis (Perception) checks using hearing/sight/smell",
		passive_perception: 13,
		languages: "understands Common and Draconic but can't speak",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Sting",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "The target hit must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.",
		}
		],
		traits: [{
			name: "Keen Senses",
			description: "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell.",
		}, {
			name: "Magic Resistance",
			description: "The pseudodragon has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Limited Telepathy",
			description: "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft of it that can understand a language.",
		}
		],
		variant: [{
			name: "Variant: Familiar",
			description: "The pseudodragon can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the pseudodragon senses as long as they are within 1 mile of each other. While the pseudodragon is within 10 ft of its companion, the companion shares the pseudodragon's Magic Resistance trait. At any time and for any reason, the pseudodragon can end its service as a familiar, ending the telepathic bond.",
		}
		],
	},
	"Pteranodon": {
		name: "Pteranodon",
		source: ["Monster Manual", 80],
		size: "Medium",
		type: "beast",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 13,
		hd: [3, 8],
		speed: "10 ft, fly 60 ft",
		scores: [12, 15, 10, 2, 9, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +1",
		passive_perception: "11",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Flyby",
			description: "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
		}
		],
	},
	"Purple Worm": {
		name: "Purple Worm",
		source: ["Monster Manual", 255],
		size: "Gargantuan",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [18, "Natural Armor", false],
		hp: 247,
		hd: [15, 20],
		speed: "50 ft, burrow 30 ft",
		scores: [28, 7, 22, 1, 8, 4],
		saves: ["", "", 11, "", 4, ""],
		senses: "Blindsight 30 ft; tremorsense 60 ft",
		passive_perception: 9,
		languages: "",
		challenge_rating: "15",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 8, "piercing"],
			range: "Melee (10 ft)",
			dc: true,
			description: [
				"If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.",
				"If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 ft of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 ft of movement, exiting prone.",
			]
		}, {
			name: "Tail Stinger",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (10 ft)",
			dc: true,
			description: "Target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Tunneler",
			description: "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The worm makes two attacks: one with its bite and one with its stinger.",
		}
		],
	},
	"Quadrone": {
		name: "Quadrone",
		source: ["Monster Manual", 226],
		size: "Medium",
		type: "construct",
		alignment: "construct",
		ac: [16, "Natural Armor", false],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft, fly 30 ft",
		scores: [12, 14, 12, 10, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "truesight 120 ft",
		passive_perception: "12",
		languages: "Modron",
		challenge_rating: "1",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Axiomatic Mind",
			description: "The quadrone can't be compelled to act in a manner contrary to its nature or its instructions."
		}, {
			name: "Disintegration",
			description: "If the quadrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The quadrone makes two fist attacks or four shortbow attacks."
		}
		]
	},
	"Quaggoth": {
		name: "Quaggoth",
		source: ["Monster Manual", 256],
		size: "Medium",
		type: "humanoid (quaggoth)",
		alignment: "chaotic neutral",
		ac: [13, "Natural Armor", false],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft, climb 30 ft",
		scores: [17, 12, 16, 6, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Undercommon",
		challenge_rating: "2",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Wounded Fury",
			description: "While it has 10 hit points or fewer, the quaggoth has advantage on attack rolls. In addition, it deals an extra 7 (2d6) damage to any target it hits with a melee attack.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The quaggoth makes two claw attacks."
		}
		]
	},
	"Quaggoth Spore Servant": {
		name: "Quaggoth Spore Servant",
		source: ["Monster Manual", 256],
		size: "Medium",
		type: "plant",
		alignment: "unaligned",
		ac: [13, "Natural Armor", false],
		hp: 45,
		hd: [6, 8],
		speed: "20 ft, climb 20 ft",
		scores: [17, 12, 16, 2, 6, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "blinded, charmed, frightened, paralyzed, poisoned",
		senses: "blindsight 30 ft (blind beyond this radius)",
		passive_perception: "8",
		challenge_rating: "1",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The spore servant makes two claw attacks."
		}
		]
	},
	"Quaggoth Thonot": {
		name: "Quaggoth Thonot",
		source: ["Monster Manual", 256],
		size: "Medium",
		type: "humanoid (quaggoth)",
		alignment: "chaotic neutral",
		ac: [13, "Natural Armor", false],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft, climb 30 ft",
		scores: [17, 12, 16, 6, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "10",
		languages: "Undercommon",
		challenge_rating: "3",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Wounded Fury",
			description: "While it has 10 hit points or fewer, the quaggoth has advantage on attack rolls. In addition, it deals an extra 7 (2d6) damage to any target it hits with a melee attack.",
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The quaggoth's innate spellcasting ability is Wisdom (spell save DC 11). The quaggoth can innately cast the following spells, requiring no components:",
				"At will: feather fall, mage hand (the hand is invisible)",
				"1/day each: cure wounds, enlarge/reduce, heat metal, mirror image"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The quaggoth makes two claw attacks."
		}
		],
	},
	"Quasit": {
		name: "Quasit",
		source: ["Monster Manual", 63],
		size: "Tiny",
		type: "Fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [13, "", false],
		hp: 7,
		hd: [3, 4],
		speed: "40 ft",
		scores: [5, 17, 10, 7, 10, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +5",
		damage_resistances: "cold; fire; lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 10,
		languages: "Abyssal, Common",
		challenge_rating: "1",
		attacks: [{
			name: "Claws (Bite in Beast Form)",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Target makes DC 10 Con save or takes 2d4 poison damage and poisoned for 1 min (can save each turn)",
		}, {
			name: "Scare (1/day)",
			ability: 6,
			damage: ["Frightened", "", ""],
			range: "20 ft",
			description: "Wis save or frightened for 1 min (can save at end of each turn, disadv. if quasit is in sight)",
			dc: true,
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft, fly 40 ft), a centipede (40 ft, climb 40 ft), or a toad (40 ft, swim 40 ft), or back into its true form . Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed . It reverts to its true form if it dies.",
		}, {
			name: "Magic Resistance",
			description: "The quasit has advantage on saving throws against spells and other magical effects.",
		}
		],
		variant: [{
			name: "Variant: Familiar",
			description: "The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10 ft of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond.",
		}
		],
		actions: [{
			name: "Invisibility",
			description: "As an action, the quasit magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it.",
		}
		],
	},
	"Quipper": {
		name: "Quipper",
		source: ["Monster Manual", 335],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "swim 40 ft",
		scores: [2, 16, 9, 1, 7, 2],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 8,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Blood Frenzy",
			description: "The quipper has advantage on melee attack rolls against any creature that doesn't have all its HP.",
		}, {
			name: "Water Breathing",
			description: "The quipper can breathe only underwater.",
		}
		],
	},
	"Rakshasa": {
		name: "Rakshasa",
		source: ["Monster Manual", 257],
		size: "Medium",
		type: "Fiend",
		alignment: "Lawful Evil",
		ac: [16, "Natural Armor", false],
		hp: 110,
		hd: [13, 8],
		speed: "40 ft",
		scores: [14, 17, 18, 13, 16, 20],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +10, Insight +8",
		damage_vulnerabilities: "piercing from magic weapons wielded by good creatures",
		damage_immunities: "bludgeoning, piercing, and slashing from nonmagical weapons",
		senses: "Darkvision 60 ft",
		passive_perception: 13,
		languages: "Common, Infernal",
		challenge_rating: "13",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic.",
		}
		],
		traits: [{
			name: "Limited Magic Immunity",
			description: "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:",
				"At will: detect thoughts, disguise self, mage hand, minor illusion",
				"3/day each: charm person, detect magic, invisibility, major image, suggestion",
				"1/day each: dominate person, fly, plane shift, true seeing"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The rakshasa makes two claw attacks",
		}
		],
	},
	"Rat": {
		name: "Rat",
		source: ["Monster Manual", 335],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "20 ft",
		scores: [2, 11, 9, 2, 10, 4],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 30 ft; Adv. on Wis (Perception) checks using smell",
		passive_perception: 10,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
		}
		],
	},
	"Raven": {
		name: "Raven",
		source: ["Monster Manual", 335],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "10 ft, fly 50 ft",
		scores: [2, 14, 8, 2, 12, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		passive_perception: 13,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Beak",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Mimicry",
			description: "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.",
		}
		],
	},
	"Red Dragon Wyrmling": {
		name: "Red Dragon Wyrmling",
		source: ["Monster Manual", 98],
		size: "Medium",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [17, "Natural Armor", false],
		hp: 75,
		hd: [10, 8],
		speed: "30 ft, climb 30 ft, fly 60 ft",
		scores: [19, 10, 17, 12, 11, 15],
		saves: ["", 2, 5, "", 2, 4],
		skills: "Perception +4, Stealth +2",
		damage_immunities: "fire",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) fire damage.",
		}
		],
		actions: [{
			name: "Fire Breath (Recharge 5-6)",
			description: "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC l3 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Red Slaad": {
		name: "Red Slaad",
		source: ["Monster Manual", 276],
		size: "Large",
		type: "aberration",
		alignment: "chaotic neutral",
		ac: [14, "Natural Armor", false],
		hp: 93,
		hd: [11, 10],
		speed: "30 ft",
		scores: [16, 12, 16, 6, 6, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +1",
		damage_resistances: "acid, cold, fire, lightning, thunder",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Slaad, telepathy 60 ft",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be infected with a disease — a minuscule slaad egg. A humanoid host can carry only one slaad egg to term at a time. Over three months, the egg moves to the chest cavity, gestates, and forms a slaad tadpole. In the 24-hour period before giving birth, the host starts to feel unwell, its speed is halved, and it has disadvantage on attack rolls, ability checks, and saving throws. At birth, the tadpole chews its way through vital organs and out of the host's chest in 1 round, killing the host in the process. If the disease is cured before the tadpole's emergence, the unborn slaad is disintegrated.",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The slaad has advantage on saving throws against spells and other magical effects"
		}, {
			name: "Regeneration",
			description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
		}, {
			name: "Variant: Control Gem",
			description: [
				"Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.",
				"Certain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.",
				"A greater restoration spell cast on the slaad destroys the gem without harming the slaad.",
				"Someone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad."
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The slaad makes three attacks: one with its bite and two with its claws."
		}
		]
	},
	"Reef Shark": {
		name: "Reef Shark",
		source: ["Monster Manual", 336],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [4, 8],
		speed: "swim 40 ft",
		scores: [14, 13, 13, 1, 10, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "Blindsight 30 ft",
		passive_perception: 12,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}, {
			name: "Water Breathing",
			description: "The shark can breathe only underwater.",
		}
		],
	},
	"Remorhaz": {
		name: "Remorhaz",
		source: ["Monster Manual", 258],
		size: "Huge",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [17, "Natural Armor", false],
		hp: 195,
		hd: [17, 12],
		speed: "30 ft, burrow 20 ft",
		scores: [24, 13, 21, 4, 10, 5],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "cold, fire",
		senses: "Darkvision 60 ft; tremorsense 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "11",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [6, 10, "piercing"],
			range: "Melee (10 ft)",
			dc: true,
			description: "Plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target.",
		}
		],
		traits: [{
			name: "Heated Body",
			description: "A creature that touches the remorhaz or hits it with a melee attack while within 5 ft of it takes 10 (3d6) fire damage.",
		}
		],
		actions: [{
			name: "Swallow",
			description: [
				"The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.",
				"If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 ft oft he remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 ft of movement, exiting prone.",
			]
		}
		],
	},
	"Revenant": {
		name: "Revenant",
		source: ["Monster Manual", 259],
		size: "Medium",
		type: "undead",
		alignment: "neutral",
		ac: [13, "Leather Armor", false],
		hp: 136,
		hd: [16, 8],
		speed: "30 ft",
		scores: [18, 14, 18, 13, 16, 18],
		saves: ["7", "", "7", "", "6", "7"],
		damage_resistances: "necrotic, psychic",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned, stunned",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "the languages it knew in life",
		challenge_rating: "5",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If the target is a creature against which the revenant has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, the revenant can grapple the target (escape DC 14) provided the target is Large or smaller.",
		}
		],
		traits: [{
			name: "Regeneration",
			description: "The revenant regains 10 hit points at the start of its turn. If the revenant takes fire or radiant damage, this trait doesn't function at the start of the revenant's next turn. The revenant's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate."
		}, {
			name: "Rejuvenation",
			description: "When the revenant's body is destroyed, its soul lingers. After 24 hours, the soul inhabits and animates another corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a wish spell can be used to force the soul to go to the afterlife and not return ."
		}, {
			name: "Turn Immunity",
			description: "The revenant is immune to effects that turn undead."
		}, {
			name: "Vengeful Tracker",
			description: "The revenant knows the distance to and direction of any creature against which it seeks revenge, even if the creature and the revenant are on different planes of existence. If the creature being tracked by the revenant dies, the revenant knows."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The revenant makes two fist attacks."
		}, {
			name: "Vengeful Glare",
			description: "The revenant targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw . On a failure, the target is paralyzed until the revenant deals damage to it, or until the end of the revenant's next turn. When the paralysis ends, the target is frightened of the revenant for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if it can see the revenant, ending the frightened condition on itself on a success."
		}
		]
	},
	"Rhinoceros": {
		name: "Rhinoceros",
		source: ["Monster Manual", 336],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "Natural Armor", false],
		hp: 45,
		hd: [6, 10],
		speed: "40 ft",
		scores: [21, 8, 15, 2, 12, 6],
		saves: ["", "", "", "", "", ""],
		passive_perception: 11,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Charge trait",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the rhinoceros moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
		}
		],
	},
	"Riding Horse": {
		name: "Riding Horse",
		source: ["Monster Manual", 336],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 13,
		hd: [2, 10],
		speed: "60 ft",
		scores: [16, 10, 12, 2, 11, 7],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Roc": {
		name: "Roc",
		source: ["Monster Manual", 260],
		size: "Gargantuan",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 248,
		hd: [16, 20],
		speed: "20 ft, fly 120 ft",
		scores: [28, 10, 20, 3, 10, 9],
		saves: ["", 4, 9, "", 4, 3],
		skills: "Perception +4",
		passive_perception: 14,
		languages: "",
		challenge_rating: "11",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [4, 8, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Talons",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target.",
		}
		],
		traits: [{
			name: "Keen Sight",
			description: "The roc has advantage on Wisdom (Perception) checks that rely on sight.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The roc makes two attacks: one with its beak and one with its talons.",
		}
		],
	},
	//ROGUE MODRON
	"Roper": {
		name: "Roper",
		source: ["Monster Manual", 261],
		size: "Large",
		type: "Monstrosity",
		alignment: "Neutral Evil",
		ac: [20, "Natural Armor", false],
		hp: 93,
		hd: [11, 10],
		speed: "10 ft, climb 10 ft",
		scores: [18, 8, 17, 7, 16, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6, Stealth +5",
		senses: "Darkvision 60 ft",
		passive_perception: 16,
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tendril",
			ability: 1,
			damage: [0, 0, ""],
			range: "Ranged (50 ft)",
			description: "Target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target.",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite.",
		}, {
			name: "Grasping Tendrils",
			description: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it.",
		}, {
			name: "Spider Climb",
			description: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite.",
		}, {
			name: "Reel",
			description: "The roper pulls each creature grappled by it up to 25 ft. straight toward it.",
		}
		],
	},
	"Rug Of Smothering": {
		name: "Rug of Smothering",
		source: ["Monster Manual", 20],
		size: "Large",
		type: "Construct",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 33,
		hd: [6, 10],
		speed: "10 ft",
		scores: [17, 14, 10, 1, 3, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison, psychic",
		condition_immunities: "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
		senses: "Blindsight 60 ft (blind beyond this radius)",
		passive_perception: 6,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Smother",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "One Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6+3) bludgeoning damage.",
		}
		],
		traits: [{
			name: "Antimagic Susceptibility",
			description: "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
		}, {
			name: "Damage Transfer",
			description: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.",
		}, {
			name: "False Appearance",
			description: "While the rug remains motionless, it is indistinguishable from a normal rug.",
		}
		],
	},
	"Rust Monster": {
		name: "Rust Monster",
		source: ["Monster Manual", 262],
		size: "Medium",
		type: "Monstrosity",
		alignment: "Unaligned",
		ac: [14, "Natural Armor", false],
		hp: 27,
		hd: [5, 8],
		speed: "40 ft",
		scores: [13, 12, 13, 2, 13, 6],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 11,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Iron Scent",
			description: "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 ft of it.",
		}, {
			name: "Rust Metal",
			description: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Non magical ammunition made of metal that hits the rust monster is destroyed after dealing damage.",
		}
		],
		actions: [{
			name: "Antennae",
			description: [
				"The rust monster corrodes a nonmagical ferrous metal object it can see within 5 ft of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch.",
				"If the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait.",
			]
		}
		],
	},
	"Saber-Toothed Tiger": {
		name: "Saber-Toothed Tiger",
		source: ["Monster Manual", 336],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 52,
		hd: [7, 10],
		speed: "40 ft",
		scores: [18, 14, 15, 3, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +6",
		senses: "Adv. on Wis (Perception) checks using smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Pounce trait",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Can be used in combination with claw while pouncing (see Pounce trait)",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name: "Pounce",
			description: "If the tiger moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.",
		}
		],
	},
	"Sahuagin": {
		name: "Sahuagin",
		source: ["Monster Manual", 263],
		size: "Medium",
		type: "Humanoid (sahuagin)",
		alignment: "Lawful Evil",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [4, 8],
		speed: "30 ft, swim 40 ft",
		scores: [13, 11, 12, 12, 13, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5",
		senses: "Darkvision 120 ft",
		passive_perception: 15,
		languages: "Sahuagin",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Blood Frenzy",
			description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
		}, {
			name: "Limited Amphibiousness",
			description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.",
		}, {
			name: "Shark Telepathy",
			description: "The sahuagin can magically command any shark within 120 ft of it, using a limited telepathy.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear.",
		}
		],
	},
	"Sahuagin Baron": {
		name: "Sahuagin Baron",
		source: ["Monster Manual", 264],
		size: "Medium",
		type: "humanoid (sahuagin)",
		alignment: "lawful evil",
		ac: [16, "Breastplate", false],
		hp: 76,
		hd: [9, 10],
		speed: "30 ft, swim 50 ft",
		scores: [19, 15, 16, 14, 13, 17],
		saves: ["", "5", "6", "5", "4", ""],
		skills: "Perception +7",
		senses: "darkvision 120 ft",
		passive_perception: "17",
		languages: "Sahuagin",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Trident (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 13 (2d8+4) piercing damage.",
		}, {
			name: "Trident (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Blood Frenzy",
			description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
		}, {
			name: "Limited Amphibiousness",
			description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
		}, {
			name: "Shark Telepathy",
			description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The sahuagin makes three attacks: one with his bite and two with his claws or trident."
		}
		]
	},
	"Sahuagin Priestess": {
		name: "Sahuagin Priestess",
		source: ["Monster Manual", 264],
		size: "Medium",
		type: "humanoid (sahuagin)",
		alignment: "lawful evil",
		ac: [12, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft, swim 40 ft",
		scores: [13, 11, 12, 12, 14, 13],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6, Religion +3",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Sahuagin",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Blood Frenzy",
			description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
		}, {
			name: "Limited Amphibiousness",
			description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
		}, {
			name: "Shark Telepathy",
			description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The sahuagin makes two melee attacks: one with her bite and one with her claws."
		}
		],
		spells: [
			"The sahuagin is a 6th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). She has the following cleric spells prepared:",
			"Cantrips (at will): guidance, thaumaturgy",
			"1st level (4 slots): bless, detect magic, guiding bolt",
			"2nd level (3 slots): hold person, spiritual weapon (trident)",
			"3rd level (3 slots): mass healing word, tongues"
		]
	},
	"Salamander": {
		name: "Salamander",
		source: ["Monster Manual", 266],
		size: "Large",
		type: "Elemental",
		alignment: "Neutral Evil",
		ac: [15, "Natural Armor", false],
		hp: 90,
		hd: [12, 10],
		speed: "30 ft",
		scores: [18, 14, 15, 11, 10, 12],
		saves: ["", "", "", "", "", ""],
		damage_vulnerabilities: "cold",
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "fire",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Ignan",
		challenge_rating: "5",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) fire damage; Two-Handed: 13 (2d8+4) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "Plus 3 (1d6) fire damage.",
		}, {
			name: "Tail",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Plus 7 (2d6) fire damage; Target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets.",
		}
		],
		traits: [{
			name: "Heated Body",
			description: "A creature that touches the salamander or hits it with a melee attack while within 5 ft. of it takes 7 (2d6) fire damage.",
		}, {
			name: "Heated Weapons",
			description: "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack).",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The salamander makes two attacks: one with its spear and one with its tail.",
		}
		],
	},
	"Satyr": {
		name: "Satyr",
		source: ["Monster Manual", 267],
		size: "Medium",
		type: "Fey",
		alignment: "Chaotic Neutral",
		ac: [14, "Leather Armor", false],
		hp: 31,
		hd: [7, 8],
		speed: "40 ft",
		scores: [12, 16, 11, 12, 10, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Performance +6, Stealth +5",
		passive_perception: 12,
		languages: "Common, Elvish, Sylvan",
		challenge_rating: "1/2",
		attacks: [{
			name: "Ram",
			ability: 1,
			damage: [2, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The satyr has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Variant: Panpipes",
			description: "Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake.",
		}
		],
	},
	"Scarecrow": {
		name: "Scarecrow",
		source: ["Monster Manual", 268],
		size: "Medium",
		type: "construct",
		alignment: "chaotic evil",
		ac: [11, "", false],
		hp: 36,
		hd: [8, 8],
		speed: "30 ft",
		scores: [11, 13, 11, 10, 10, 13],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_vulnerabilities: "fire",
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned, unconscious",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "1",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 11 Wisdom saving throw or be frightened until the end of the scarecrow's next turn.",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The scarecrow makes two claw attacks."
		}, {
			name: "Terrifying Glare",
			description: "The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn. The frightened target is paralyzed."
		}
		]
	},
	"Scorpion": {
		name: "Scorpion",
		source: ["Monster Manual", 337],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "Natural Armor", false],
		hp: 1,
		hd: [1, 4],
		speed: "10 ft",
		scores: [2, 11, 8, 1, 8, 2],
		saves: ["", "", "", "", "", ""],
		senses: "Blindsight 10 ft",
		passive_perception: 9,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Sting",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "Target also takes 1d8 poison damage, half on a DC 9 Constitution saving throw",
		}
		],
	},
	"Scout": {
		name: "Scout",
		source: ["Monster Manual", 349],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [13, "Leather Armor", false],
		hp: 16,
		hd: [3, 8],
		speed: "30 ft",
		scores: [11, 14, 12, 11, 13, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Nature +4, Perception +5, Stealth +6, Survival +5",
		passive_perception: 15,
		languages: "any one language (usually Common)",
		challenge_rating: "1/2",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Hearing and Sight",
			description: "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The scout makes two melee attacks or two ranged attacks.",
		}
		],
	},
	"Sea Hag": {
		name: "Sea Hag",
		source: ["Monster Manual", 179],
		size: "Medium",
		type: "Fey",
		alignment: "Chaotic Evil",
		ac: [14, "Natural Armor", false],
		hp: 52,
		hd: [7, 8],
		speed: "30 ft, swim 40 ft",
		scores: [16, 13, 16, 12, 12, 13],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 11,
		languages: "Aquan, Common, Giant",
		challenge_rating: "2",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The hag can breathe air and water.",
		}, {
			name: "Horrific Appearance",
			description: [
				"Any humanoid that starts its turn within 30 ft of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours.",
				"Unless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag.",
			]
		}, {
			name: "Hag Coven",
			description: [
				"When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.",
				"A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
			]
		}, {
			name: "Shared Spellcasting (Coven Only)",
			description: [
				"While all three members of a hag coven are within 30 ft of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:",
				"1st level (4 slots): identify, ray of sickness",
				"2nd level (3 slots): hold person, locate object",
				"3rd level (3 slots): bestow curse, counterspell, lightning bolt",
				"4th level (3 slots): phantasmal killer, polymorph",
				"5th level (2 slots): contact other plane, scrying",
				"6th level (1 slot): eye bite",
				"For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier."
			]
		}, {
			name: "Hag Eye (Coven Only)",
			description: [
				"A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and Darkvision with a radius of 60 ft. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.",
				"A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
			]
		}
		],
		actions: [{
			name: "Death Glare",
			description: "The hag targets one frightened creature she can see within 30 ft. of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points.",
		}, {
			name: "Illusory Appearance",
			description: [
				"The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.",
				"The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised."
			]
		}
		],
	},
	"Sea Horse": {
		name: "Sea Horse",
		source: ["Monster Manual", 337],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "swim 20 ft",
		scores: [1, 12, 8, 1, 10, 2],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "0",
		attacks: [],
		traits: [{
			name: "Water Breathing",
			description: "The sea horse can breathe only underwater.",
		},
		]
	},
	"Shadow": {
		name: "Shadow",
		source: ["Monster Manual", 269],
		size: "Medium",
		type: "Undead",
		alignment: "Chaotic Evil",
		ac: [12, "", false],
		hp: 16,
		hd: [3, 8],
		speed: "40 ft",
		scores: [6, 14, 13, 6, 10, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +4",
		damage_vulnerabilities: "radiant",
		damage_resistances: "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "necrotic, poison",
		condition_immunities: "exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Strength Drain",
			ability: 2,
			damage: [2, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: [
				"Target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.",
				"If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later.",
			]
		}
		],
		traits: [{
			name: "Amorphous",
			description: "The shadow can move through a space as narrow as 1 inch wide without squeezing.",
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6.",
		}, {
			name: "Sunlight Weakness",
			description: "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws.",
		}
		],
	},
	"Shadow Demon": {
		name: "Shadow Demon",
		source: ["Monster Manual", 64],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [13, "", false],
		hp: 66,
		hd: [12, 8],
		speed: "30 ft, fly 30 ft",
		scores: [1, 17, 12, 14, 13, 14],
		saves: ["", "5", "", "", "", "4"],
		skills: "Stealth +7",
		damage_resistances: "acid, fire, necrotic, thunder, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_vulnerabilities: "radiant",
		damage_immunities: "cold, lightning, poison",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "darkvision 120 ft",
		passive_perception: "11",
		languages: "Abyssal, telepathy 120 ft",
		challenge_rating: "4",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [2, 6, "psychic"],
			range: "Melee (5 ft)",
			description: "If the demon had advantage on the attack roll, 17 (4d6+3) psychic damage.",
		}
		],
		traits: [{
			name: "Incorporeal Movement",
			description: "The demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name: "Light Sensitivity",
			description: "While in bright light, the demon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the demon can take the Hide action as a bonus action."
		}
		],
	},
	//SHADOW DRAGON TEMPLATE
	"Shambling Mound": {
		name: "Shambling Mound",
		source: ["Monster Manual", 270],
		size: "Large",
		type: "Plant",
		alignment: "Unaligned",
		ac: [15, "Natural Armor", false],
		hp: 136,
		hd: [16, 10],
		speed: "20 ft, swim 20 ft",
		scores: [18, 8, 16, 5, 10, 5],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		damage_resistances: "cold, fire",
		damage_immunities: "lightning",
		condition_immunities: "blinded, deafened, exhaustion",
		senses: "Blindsight 60 ft (blind beyond this radius)",
		passive_perception: 10,
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Lightning Absorption",
			description: "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it.",
		}, {
			name: "Engulf",
			description: "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8+4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.",
		}
		],
	},
	"Shield Guardian": {
		name: "Shield Guardian",
		source: ["Monster Manual", 271],
		size: "Large",
		type: "Construct",
		alignment: "Unaligned",
		ac: [17, "Natural Armor", false],
		hp: 142,
		hd: [15, 10],
		speed: "30 ft",
		scores: [18, 8, 18, 7, 10, 3],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 10,
		languages: "understands commands given in any language but can't speak",
		challenge_rating: "7",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two fist attacks as an Attack action",
		}
		],
		traits: [{
			name: "Bound",
			description: "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 ft of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian.",
		}, {
			name: "Regeneration",
			description: "The guardian regains 10 HP at the start of its turn if it has at least 1 HP.",
		}, {
			name: "Spell Storing",
			description: "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost.",
		}
		],
		actions: [{
			name: "Shield",
			description: "As a reaction, when a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 ft of the wearer.",
		}
		],
	},
	"Shrieker": {
		name: "Shrieker",
		source: ["Monster Manual", 138],
		size: "Medium",
		type: "Plant",
		alignment: "Unaligned",
		ac: [5, "", false],
		hp: 13,
		hd: [3, 8],
		speed: "0 ft",
		scores: [1, 1, 10, 1, 3, 1],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "blinded, deafened, frightened",
		senses: "Blindsight 30 ft (blind beyond this radius)",
		passive_perception: 6,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus.",
		}
		],
		actions: [{
			name: "Shriek",
			description: "When bright light or a creature is within 30 ft of the shrieker, it emits a shriek audible within 300 ft of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward",
		}
		],
	},
	"Silver Dragon Wyrmling": {
		name: "Silver Dragon Wyrmling",
		source: ["Monster Manual", 118],
		size: "Medium",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [17, "Natural Armor", false],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft, fly 60 ft",
		scores: [19, 10, 17, 12, 11, 15],
		saves: ["", 2, 5, "", 2, 4],
		skills: "Perception +4, Stealth +2",
		damage_immunities: "cold",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons:",
				"Cold Breath: The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
				"Paralyzing Breath: The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			]
		}
		],
	},
	"Skeleton": {
		name: "Skeleton",
		source: ["Monster Manual", 272],
		size: "Medium",
		type: "Undead",
		alignment: "lawful evil",
		ac: [13, "Armor Scraps", false],
		hp: 13,
		hd: [2, 8],
		speed: "30 ft",
		scores: [10, 14, 15, 6, 8, 5],
		saves: ["", "", "", "", "", ""],
		damage_vulnerabilities: "bludgeoning",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 9,
		languages: "understands all languages it knew in life but can't speak",
		challenge_rating: "1/4",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Finesse, light",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "80/320 ft",
			description: "Ammunition, two-handed",
		}
		],
	},
	"Slaad Tadpole": {
		name: "Slaad Tadpole",
		source: ["Monster Manual", 276],
		size: "Tiny",
		type: "aberration",
		alignment: "chaotic neutral",
		ac: [12, "", false],
		hp: 10,
		hd: [4, 4],
		speed: "30 ft",
		scores: [7, 15, 10, 3, 5, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +4",
		damage_resistances: "acid, cold, fire, lightning, thunder",
		senses: "darkvision 60 ft",
		passive_perception: "7",
		languages: "understands Slaad but can't speak",
		challenge_rating: "1/8",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The slaad has advantage on saving throws against spells and other magical effects"
		}
		],
	},
	"Smoke Mephit": {
		name: "Smoke Mephit",
		source: ["Monster Manual", 217],
		size: "Small",
		type: "elemental",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 22,
		hd: [5, 6],
		speed: "30 ft, fly 30 ft",
		scores: [6, 14, 12, 10, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "12",
		languages: "Auran, Ignan",
		challenge_rating: "1/4",
		attacks: [{
			name: "Claws",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Death Burst",
			description: "When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius sphere centered on its space. The sphere is heavily obscured. Wind disperses the cloud, which otherwise lasts for 1 minute."
		}, {
			name: "Innate Spellcasting (1/day)",
			description: "The mephit can innately cast dancing lights, requiring no material components. Its innate spellcasting ability is Charisma."
		}
		],
		actions: [{
			name: "Cinder Breath (Recharge 6)",
			description: "The mephit exhales a 15-foot cone of smoldering ash. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded until the end of the mephit's next turn."
		}, {
			name: "Variant: Summon Mephits (1/day)",
			description: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
		}
		],
	},
	"Solar": {
		name: "Solar",
		source: ["Monster Manual", 18],
		size: "Large",
		type: "Celestial",
		alignment: "Lawful Good",
		ac: [21, "Natural Armor", false],
		hp: 243,
		hd: [18, 10],
		speed: "50 ft, fly 150 ft",
		scores: [26, 22, 26, 25, 25, 30],
		saves: ["", "", "", 14, 14, 17],
		skills: "Perception +14",
		damage_resistances: "radiant; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "necrotic, poison",
		condition_immunities: "charmed, exhaustion, frightened, poisoned",
		senses: "Truesight 120 ft",
		passive_perception: 24,
		languages: "all, telepathy 120 ft.",
		challenge_rating: "21",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [4, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 27 (6d8) radiant damage.",
		}, {
			name: "Slaying Longbow",
			ability: 2,
			damage: [2, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.",
		}
		],
		traits: [{
			name: "Angelic Weapons",
			description: "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack).",
		}, {
			name: "Divine Awareness",
			description: "The solar knows if it hears a lie.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The solar's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:",
				"At will: detect evil and good, invisibility (self only)",
				"3/day each: blade barrier, dispel evil and good, resurrection",
				"1/day each: commune, control weather"
			]
		}, {
			name: "Magic Resistance",
			description: "The solar has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The solar makes two greatsword attacks.",
		}, {
			name: "Flying Sword",
			description: "The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.",
		}, {
			name: "Healing Touch (4/Day)",
			description: "The solar touches another creature. The target magically regains 40 (8d8+4) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
		}
		],
		legendary_actions: [{
			name: "Teleport",
			description: "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see.",
		}, {
			name: "Searing Burst (Costs 2 Actions)",
			description: "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Blinding Gaze (Costs 3 Actions)",
			description: "The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.",
		}
		],
	},
	"Spectator": {
		name: "Spectator",
		source: ["Monster Manual", 279],
		size: "Medium",
		type: "aberration",
		alignment: "lawful neutral",
		ac: [14, "Natural Armor", false],
		hp: 39,
		hd: [6, 8],
		speed: "0 ft, fly 30 ft (hover)",
		scores: [8, 14, 14, 13, 14, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6",
		condition_immunities: "prone",
		senses: "darkvision 120 ft",
		passive_perception: "16",
		languages: "Deep Speech, Undercommon, telepathy 120 ft",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Eye Rays",
			description: [
				"The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 ft of it. It can use each ray only once on a turn.",
				"1. Confusion Ray. The target must succeed on a DC 13 Wisdom saving throw, or it can't take reactions until the end of its next turn. On its turn, the target can't move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can't attack, it does nothing on its turn.",
				"2. Paralyzing Ray. The target must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"3. Fear Ray. The target must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the spectator is visible to the target, ending the effect on itself on a success.", "4. Wounding Ray. The target must make a DC 13 Constitution saving throw, taking 16 (3d10) necrotic damage on a failed save, or half as much damage on a successful one."]
		}, {
			name: "Create Food and Water",
			description: "The spectator magically creates enough food and water to sustain itself for 24 hours."
		}
		],
		reactions: [{
			name: "Spell Reflection",
			description: "If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30 ft of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
		}
		]
	},
	"Specter": {
		name: "Specter",
		source: ["Monster Manual", 279],
		size: "Medium",
		type: "Undead",
		alignment: "Chaotic Evil",
		ac: [12, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "0 ft, fly 50 ft (hover)",
		scores: [1, 14, 11, 10, 10, 11],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "necrotic, poison",
		condition_immunities: "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "understands all languages it knew in life but can't speak",
		challenge_rating: "1",
		attacks: [{
			name: "Life Drain",
			ability: 2,
			damage: [3, 6, "necrotic"],
			range: "Melee (5 ft)",
			modifiers: ["", "", false],
			description: "Target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
		}
		],
		traits: [{
			name: "Incorporeal Movement",
			description: "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
		}
		],
	},
	"Spider": {
		name: "Spider",
		source: ["Monster Manual", 337],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "20 ft, climb 20 ft",
		scores: [2, 14, 8, 1, 10, 2],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +4",
		senses: "Darkvision 30 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "Target also takes 1d4 poison damage, half on a DC 9 Constitution saving throw",
		}
		],
		traits: [{
			name: "Spider Climb",
			description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}, {
			name: "Web Sense",
			description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
		}, {
			name: "Web Walker",
			description: "The spider ignores movement restrictions caused by webbing.",
		}
		],
	},
	"Spined Devil": {
		name: "Spined Devil",
		source: ["Monster Manual", 78],
		size: "Small",
		type: "fiend (devil)",
		alignment: "lawful evil",
		ac: [13, "Natural Armor", false],
		hp: 22,
		hd: [5, 6],
		speed: "20 ft, fly 40 ft",
		scores: [10, 15, 12, 11, 14, 8],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "cold, bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "12",
		languages: "Infernal, telepathy 120 ft",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Fork",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tail Spine",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Ranged (20/80 ft)",
			description: "Plus 3 (1d6) fire damage.",
		}
		],
		traits: [{
			name: "Devil's Sight",
			description: "Magical darkness doesn't impede the devil's darkvision."
		}, {
			name: "Flyby",
			description: "The devil doesn't provoke an opportunity attack when it flies out of an enemy's reach."
		}, {
			name: "Limited Spines",
			description: "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest."
		}, {
			name: "Magic Resistance",
			description: "The devil has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines."
		}
		]
	},
	"Spirit Naga": {
		name: "Spirit Naga",
		source: ["Monster Manual", 234],
		size: "Large",
		type: "Monstrosity",
		alignment: "Chaotic Evil",
		ac: [15, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "40 ft",
		scores: [18, 17, 14, 16, 15, 16],
		saves: ["", 6, 5, "", 5, 6],
		damage_immunities: "poison",
		condition_immunities: "charmed, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 12,
		languages: "Abyssal, Common",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (10 ft)",
			dc: true,
			description: "Target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Rejuvenation",
			description: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning.",
		}
		],
		spells: [
			"The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:",
			"Cantrips (at will): mage hand, minor illusion, ray of frost",
			"1st level (4 slots): charm person, detect magic, sleep",
			"2nd level (3 slots): detect thoughts, hold person",
			"3rd level (3 slots): lightning bolt, water breathing",
			"4th level (3 slots): blight, dimension door",
			"5th level (2 slots): dominate person"
		]
	},
	//SPORE SERVANT TEMPLATE
	"Sprite": {
		name: "Sprite",
		source: ["Monster Manual", 283],
		size: "Tiny",
		type: "Fey",
		alignment: "Neutral Good",
		ac: [15, "Leather Armor", false],
		hp: 2,
		hd: [1, 4],
		speed: "10 ft, fly 40 ft",
		scores: [3, 18, 10, 14, 13, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +8",
		passive_perception: 13,
		languages: "Common, Elvish, Sylvan",
		challenge_rating: "1/4",
		attacks: [{
			name: "Longsword",
			ability: 2,
			damage: [1, "", "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "40/160 ft",
			description: "The target hit must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake.",
		}, {
			name: "Heart Sight",
			ability: 6,
			damage: ["Reveal", "", ""],
			range: "Touch (5 ft)",
			description: "Cha save or sprite knows emotional state and alignment (celestial/fiend/undead auto fail the save)",
			dc: true,
		}
		],
		actions: [{
			name: "Invisibility",
			description: "As an action, the sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it.",
		}
		],
	},
	"Spy": {
		name: "Spy",
		source: ["Monster Manual", 349],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [12, "", false],
		hp: 27,
		hd: [6, 8],
		speed: "30 ft",
		scores: [10, 15, 10, 12, 14, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Insight +4, Investigation +5, Perception +6, Persuasion +5, Sleight of Hand +4, Stealth +4",
		passive_perception: 16,
		languages: "any two languages",
		challenge_rating: "1",
		attacks: [{
			name: "Shortsword",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hand Crossbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Cunning Action",
			description: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action.",
		}, {
			name: "Sneak Attack (1/Turn)",
			description: "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The spy makes two melee attacks.",
		}
		],
	},
	"Steam Mephit": {
		name: "Steam Mephit",
		source: ["Monster Manual", 217],
		size: "Small",
		type: "Elemental",
		alignment: "Neutral Evil",
		ac: [10, "", false],
		hp: 21,
		hd: [6, 6],
		speed: "30 ft, fly 30 ft",
		scores: [5, 11, 10, 11, 10, 12],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "fire, poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Aquan, Ignan",
		challenge_rating: "1/4",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4) fire damage.",
		}
		],
		traits: [{
			name: "Death Burst",
			description: "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 ft. of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage.",
		}, {
			name: "Innate Spellcasting (1/Day)",
			description: "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma.",
		}
		],
		actions: [{
			name: "Steam Breath (Recharge 6)",
			description: "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one.",
		}, {
			name: "Variant: Summon Mephits (1/Day)",
			description: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
		}
		],
	},
	"Stirge": {
		name: "Stirge",
		source: ["Monster Manual", 284],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [14, "Natural Armor", false],
		hp: 2,
		hd: [1, 4],
		speed: "10 ft, fly 40 ft",
		scores: [4, 16, 11, 2, 8, 6],
		saves: ["", "", "", "", "", ""],
		senses: "Darkvision 60 ft",
		passive_perception: 9,
		languages: "",
		challenge_rating: "1/8",
		attacks: [{
			name: "Blood Drain",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "The stirge attaches itself to the target, see Blood Drain trait",
		}
		],
		traits: [{
			name: "Blood Drain",
			description: "While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4+3) HP due to blood loss. The stirge can detach itself by spending 5 ft of its movement. It does so after it drains 10 HP of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.",
		}
		],
	},
	"Stone Giant": {
		name: "Stone Giant",
		source: ["Monster Manual", 156],
		size: "Huge",
		type: "Giant",
		alignment: "Neutral",
		ac: [17, "Natural Armor", false],
		hp: 126,
		hd: [11, 12],
		speed: "40 ft",
		scores: [23, 15, 20, 10, 12, 9],
		saves: ["", 5, 8, "", 4, ""],
		skills: "Athletics +12, Perception +4",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "Giant",
		challenge_rating: "7",
		attacks: [{
			name: "Greatclub",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			dc: true,
			description: "If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Stone Camouflage",
			description: "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two greatclub attacks.",
		}
		],
		reactions: [{
			name: "Rock Catching",
			description: "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it.",
		}
		],
	},
	"Stone Golem": {
		name: "Stone Golem",
		source: ["Monster Manual", 170],
		size: "Large",
		type: "Construct",
		alignment: "Unaligned",
		ac: [17, "Natural Armor", false],
		hp: 178,
		hd: [17, 10],
		speed: "30 ft",
		scores: [22, 9, 20, 3, 11, 1],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
		condition_immunities: "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 10,
		languages: "understands the languages of its creator but can't speak",
		challenge_rating: "10",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Immutable Form",
			description: "The golem is immune to any spell or effect that would alter its form.",
		}, {
			name: "Magic Resistance",
			description: "The golem has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Magic Weapons",
			description: "The golem's weapon attacks are magical.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The golem makes two slam attacks.",
		}, {
			name: "Slow (Recharge 5-6)",
			description: "The golem targets one or more creatures it can see within 10 ft. of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		}
		],
	},
	"Storm Giant": {
		name: "Storm Giant",
		source: ["Monster Manual", 156],
		size: "Huge",
		type: "Giant",
		alignment: "Chaotic Good",
		ac: [16, "Scale Mail", false],
		hp: 230,
		hd: [20, 12],
		speed: "50 ft, swim 50 ft",
		scores: [29, 14, 20, 16, 18, 18],
		saves: [14, "", 10, "", 9, 9],
		skills: "Arcana +8, Athletics +14, History +8, Perception +9",
		damage_resistances: "cold",
		damage_immunities: "lightning, thunder",
		passive_perception: 19,
		languages: "Common, Giant",
		challenge_rating: "13",
		attacks: [{
			name: "Greatsword",
			ability: 1,
			damage: [6, 6, "slashing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 12, "bludgeoning"],
			range: "Ranged (60/240 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The giant can breathe air and water.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:",
				"At will: detect magic, feather fall, levitate, light",
				"3/day each: control weather, water breathing"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The giant makes two greatsword attacks.",
		}, {
			name: "Lightning Strike (Recharge 5-6)",
			description: "The giant hurls a magical lightning bolt at a point it can see within 500 ft of it. Each creature within 10 ft of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Succubus/Incubus": {
		name: "Succubus/Incubus",
		source: ["Monster Manual", 285],
		size: "Medium",
		type: "Fiend (shapechanger)",
		alignment: "Neutral Evil",
		ac: [15, "Natural Armor", false],
		hp: 66,
		hd: [12, 8],
		speed: "30 ft, fly 60 ft",
		scores: [8, 17, 13, 15, 12, 20],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",
		damage_resistances: "cold, fire, lightning, poison; bludgeoning, piercing, and slashing from nonmagical weapons",
		senses: "Darkvision 60 ft",
		passive_perception: 15,
		languages: "Abyssal, Common, Infernal, telepathy 60 ft.",
		challenge_rating: "4",
		attacks: [{
			name: "Claw (Fiend Form Only)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Telepathic Bond",
			description: "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence.",
		}, {
			name: "Shapechanger",
			description: "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
		}
		],
		actions: [{
			name: "Charm",
			description: [
				"One humanoid the fiend can see within 30 ft of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.",
				"The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends.",
			]
		}, {
			name: "Draining Kiss",
			description: "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10+5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
		}, {
			name: "Etherealness",
			description: "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa.",
		}
		],
	},
	"Swarm Of Bats": {
		name: "Swarm of Bats",
		source: ["Monster Manual", 337],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 22,
		hd: [5, 8],
		speed: "0 ft, fly 30 ft",
		scores: [5, 15, 10, 2, 12, 4],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		senses: "Blindsight 60 ft",
		passive_perception: 11,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [2, 4, "piercing"],
			range: "Melee (0 ft)",
			description: "Or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer.",
		}
		],
		traits: [{
			name: "Echolocation",
			description: "The swarm can't use its Blindsight while deafened.",
		}, {
			name: "Keen Hearing",
			description: "The swarm has advantage on Wisdom (Perception) checks that rely on hearing.",
		}, {
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points.",
		}
		],
	},
	"Swarm Of Beetles": {
		name: "Swarm of Beetles",
		source: ["Monster Manual", 338],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "20 ft, burrow 5 ft, climb 20 ft",
		scores: [3, 13, 10, 1, 7, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		senses: "Blindsight 10 ft",
		passive_perception: 8,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [4, 4, "piercing"],
			range: "Melee (0 ft)",
			description: "Or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
		}
		],
		traits: [{
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
		}
		],
	},
	"Swarm of Centipedes": {
		name: "Swarm of Centipedes",
		source: ["Monster Manual", 338],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "20 ft, climb 20 ft",
		scores: [3, 13, 10, 1, 7, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		senses: "Blindsight 10 ft",
		passive_perception: 8,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [4, 4, "piercing"],
			range: "Melee (0 ft)",
			description: "Or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer. If reduced to 0 hitpoints, stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way.",
		}
		],
		traits: [{
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
		}
		],
	},
	"Swarm of Insects": {
		name: "Swarm of Insects",
		source: ["Monster Manual", 338],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "20 ft, climb 20 ft",
		scores: [3, 13, 10, 1, 7, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		senses: "Blindsight 10 ft",
		passive_perception: 8,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [4, 4, "piercing"],
			range: "Melee (0 ft)",
			description: "Or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
		}
		],
		traits: [{
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
		}
		],
	},
	"Swarm of Poisonous Snakes": {
		name: "Swarm of Poisonous Snakes",
		source: ["Monster Manual", 338],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [14, "", false],
		hp: 36,
		hd: [8, 8],
		speed: "30 ft, swim 30 ft",
		scores: [8, 18, 11, 1, 10, 3],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		senses: "Blindsight 10 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "2",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [2, 6, "piercing"],
			range: "Melee (0 ft)",
			dc: true,
			description: "Or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		traits: [{
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points.",
		}
		],
	},
	"Swarm of Quippers": {
		name: "Swarm of Quippers",
		source: ["Monster Manual", 338],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 28,
		hd: [8, 8],
		speed: "0 ft, swim 40 ft",
		scores: [13, 16, 9, 1, 7, 2],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		senses: "Darkvision 60 ft",
		passive_perception: 8,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [4, 6, "piercing"],
			range: "Melee (0 ft)",
			description: "Or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.",
		}
		],
		traits: [{
			name: "Blood Frenzy",
			description: "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
		}, {
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points.",
		}, {
			name: "Water Breathing",
			description: "The swarm can breathe only underwater.",
		}
		],
	},
	"Swarm of Rats": {
		name: "Swarm of Rats",
		source: ["Monster Manual", 339],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 24,
		hd: [7, 8],
		speed: "30 ft",
		scores: [9, 11, 9, 2, 10, 3],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		senses: "Darkvision 30 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [2, 6, "piercing"],
			range: "Melee (0 ft)",
			description: "Or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The swarm has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points.",
		}
		],
	},
	"Swarm of Ravens": {
		name: "Swarm of Ravens",
		source: ["Monster Manual", 339],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 24,
		hd: [7, 8],
		speed: "10 ft, fly 50 ft",
		scores: [6, 14, 8, 3, 12, 6],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		"perception": 5,
		passive_perception: 15,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Beaks",
			ability: 2,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
		}
		],
		traits: [{
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points.",
		}
		],
	},
	"Swarm of Spiders": {
		name: "Swarm of Spiders",
		source: ["Monster Manual", 338],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "20 ft, climb 20 ft",
		scores: [3, 13, 10, 1, 7, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, paralyzed, petrified, prone, restrained, stunned",
		senses: "Blindsight 10 ft",
		passive_perception: 8,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [4, 4, "piercing"],
			range: "Melee (0 ft)",
			description: "Or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
		}
		],
		traits: [{
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
		}, {
			name: "Spider Climb",
			description: "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}, {
			name: "Web Sense",
			description: "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web.",
		}, {
			name: "Web Walker",
			description: "The swarm ignores movement restrictions caused by webbing.",
		}
		],
	},
	"Swarm of Wasps": {
		name: "Swarm of Wasps",
		source: ["Monster Manual", 338],
		size: "Medium",
		type: "Swarm of Tiny beasts",
		alignment: "Unaligned",
		ac: [12, "Natural Armor", false],
		hp: 22,
		hd: [5, 8],
		speed: "5 ft, fly 30 ft",
		scores: [3, 13, 10, 1, 7, 1],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "bludgeoning, piercing, slashing",
		condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
		senses: "Blindsight 10 ft",
		passive_perception: 8,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bites",
			ability: 2,
			damage: [4, 4, "piercing"],
			range: "Melee (0 ft)",
			description: "Or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
		}
		],
		traits: [{
			name: "Swarm",
			description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
		}
		],
	},
	"Tarrasque": {
		name: "Tarrasque",
		source: ["Monster Manual", 286],
		size: "Gargantuan",
		type: "Monstrosity (titan)",
		alignment: "Unaligned",
		ac: [25, "Natural Armor", false],
		hp: 676,
		hd: [33, 20],
		speed: "40 ft",
		scores: [30, 11, 30, 3, 11, 11],
		saves: ["", "", "", 5, 9, 9],
		damage_immunities: "fire, poison; bludgeoning, piercing, and slashing from nonmagical weapons",
		condition_immunities: "charmed, frightened, paralyzed, poisoned",
		senses: "Blindsight 120 ft",
		passive_perception: 10,
		languages: "",
		challenge_rating: "30",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [4, 12, "piercing"],
			range: "Melee (10 ft)",
			dc: true,
			description: "If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [4, 8, "slashing"],
			range: "Melee (15 ft)",
			description: "",
		}, {
			name: "Horns",
			ability: 1,
			damage: [4, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Tail",
			ability: 1,
			damage: [4, 6, "bludgeoning"],
			range: "Melee (20 ft)",
			dc: true,
			description: "If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Legendary Resistance (3/Day)",
			description: "If the tarrasque fails a saving throw, it can choose to succeed instead.",
		}, {
			name: "Magic Resistance",
			description: "The tarrasque has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Reflective Carapace",
			description: "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target.",
		}, {
			name: "Siege Monster",
			description: "The tarrasque deals double damage to objects and structures.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tai l. It can use its Swallow instead of its bite.",
		}, {
			name: "Frightful Presence",
			description: "Each creature of the tarrasque's choice within 120 ft of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours.",
		}, {
			name: "Swallow",
			description: [
				"The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.",
				"If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 ft of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 ft of movement, exiting prone.",
			]
		}
		],
		legendary_actions: [{
			name: "Attack",
			description: "The tarrasque makes one claw attack or tail attack.",
		}, {
			name: "Move",
			description: "The tarrasque moves up to half its speed.",
		}, {
			name: "Chomp (Costs 2 Actions)",
			description: "The tarrasque makes one bite attack or uses its Swallow.",
		}
		],
	},
	"Thri-kreen": {
		name: "Thri-kreen",
		source: ["Monster Manual", 288],
		size: "Medium",
		type: "humanoid (thri-kreen)",
		alignment: "chaotic neutral",
		ac: [15, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "40 ft",
		scores: [12, 15, 13, 8, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4, Survival +3",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Thri-kreen",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is also paralyzed while poisoned in this way. The poisoned target can repeat the saving throw on each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Gythka",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Chatkcha",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Chameleon Carapace",
			description: "The thri-kreen can change the color of its carapace to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Standing Leap",
			description: "The thri-kreen's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The thri-kreen makes two attacks: one with its bite and one with its claws."
		}, {
			name: "Variant: Weapons Multiattack",
			description: "The thri-kreen makes two gythka attacks or two chatkcha attacks."
		}
		]
	},
	"Thri-kreen (Psionic)": {
		name: "Thri-kreen (Psionic)",
		source: ["Monster Manual", 288],
		size: "Medium",
		type: "humanoid (thri-kreen)",
		alignment: "chaotic neutral",
		ac: [15, "Natural Armor", false],
		hp: 33,
		hd: [6, 8],
		speed: "40 ft",
		scores: [12, 15, 13, 8, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4, Survival +3",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Thri-kreen, telepathy 60 ft",
		challenge_rating: "1",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is also paralyzed while poisoned in this way. The poisoned target can repeat the saving throw on each of its turns, ending the effect on itself on a success.",
		}, {
			name: "Claws",
			ability: 2,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Variant: Gythka",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Variant: Chatkcha",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Chameleon Carapace",
			description: "The thri-kreen can change the color of its carapace to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Standing Leap",
			description: "The thri-kreen's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
		}, {
			name: "Innate Spellcasting (Psionics)",
			description: [
				"The thri-kreen's innate spellcasting ability is Wisdom. The thri-kreen can innately cast the following spells, requiring no components:",
				"At will: mage hand (the hand is invisible)", "2/day each: blur, magic weapon",
				"1/day: invisibility (self only)"
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The thri-kreen makes two attacks: one with its bite and one with its claws."
		}, {
			name: "Variant: Weapons Multiattack",
			description: "The thri-kreen makes two gythka attacks or two chatkcha attacks."
		}
		],
	},
	"Thug": {
		name: "Thug",
		source: ["Monster Manual", 350],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Non-Good",
		ac: [11, "Leather Armor", false],
		hp: 32,
		hd: [5, 8],
		speed: "30 ft",
		scores: [15, 11, 14, 10, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +2",
		passive_perception: 10,
		languages: "any one language (usually Common)",
		challenge_rating: "1/2",
		attacks: [{
			name: "Mace",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Heavy Crossbow",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The thug makes two melee attacks.",
		}
		],
	},
	"Tiger": {
		name: "Tiger",
		source: ["Monster Manual", 339],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [12, "", false],
		hp: 37,
		hd: [5, 10],
		speed: "40 ft",
		scores: [17, 15, 14, 3, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +6",
		senses: "Darkvision 60 ft; Adv. on Wis (Perception) checks using smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Pounce trait",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Can be used in combination with claw while pouncing (see Pounce trait)",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name: "Pounce",
			description: "If the tiger moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.",
		}
		],
	},
	"Treant": {
		name: "Treant",
		source: ["Monster Manual", 289],
		size: "Huge",
		type: "Plant",
		alignment: "Chaotic Good",
		ac: [16, "Natural Armor", false],
		hp: 138,
		hd: [12, 12],
		speed: "30 ft",
		scores: [23, 8, 21, 12, 16, 12],
		saves: ["", "", "", "", "", ""],
		damage_vulnerabilities: "fire",
		damage_resistances: "bludgeoning, piercing",
		passive_perception: 13,
		languages: "Common, Druidic, Elvish, Sylvan",
		challenge_rating: "9",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Rock",
			ability: 1,
			damage: [4, 10, "bludgeoning"],
			range: "Ranged (60/180 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the treant remains motionless, it is indistinguishable from a normal tree.",
		}, {
			name: "Siege Monster",
			description: "The treant deals double damage to objects and structures.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The treant makes two slam attacks.",
		}, {
			name: "Animate Trees (1/Day)",
			description: "The treant magically animates one or two trees it can see within 60 ft of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 ft from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible.",
		}
		],
	},
	//TRIBAL SHAMAN SEE DRUID
	"Tribal Warrior": {
		name: "Tribal Warrior",
		source: ["Monster Manual", 350],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [12, "Hide Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "30 ft",
		scores: [13, 11, 12, 8, 11, 8],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "any one language",
		challenge_rating: "1/8",
		attacks: [{
			name: "Spear (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 5 (1d8+1) piercing damage.",
		}, {
			name: "Spear (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Pack Tactics",
			description: "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Triceratops": {
		name: "Triceratops",
		source: ["Monster Manual", 80],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 95,
		hd: [10, 12],
		speed: "50 ft",
		scores: [22, 9, 17, 2, 11, 5],
		saves: ["", "", "", "", "", ""],
		passive_perception: 10,
		languages: "",
		challenge_rating: "5",
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [4, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Trampling Charge trait",
		}, {
			name: "Stomp",
			ability: 1,
			damage: [3, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Can only be used on prone creatures (also see Trampling Charge trait)",
		}
		],
		traits: [{
			name: "Trampling Charge",
			description: "If the triceratops moves at least 20 ft straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action.",
		}
		],
	},
	"Tridrone": {
		name: "Tridrone",
		source: ["Monster Manual", 225],
		size: "Medium",
		type: "construct",
		alignment: "construct",
		ac: [15, "Natural Armor", false],
		hp: 16,
		hd: [3, 8],
		speed: "30 ft",
		scores: [12, 13, 12, 9, 10, 9],
		saves: ["", "", "", "", "", ""],
		senses: "truesight 120 ft",
		passive_perception: "10",
		languages: "Modron",
		challenge_rating: "1/2",
		attacks: [{
			name: "Fist",
			ability: 1,
			damage: [1, 4, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Javelin (Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Axiomatic Mind",
			description: "The tridrone can't be compelled to act in a manner contrary to its nature or its instructions."
		}, {
			name: "Disintegration",
			description: "If the tridrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The tridrone makes three fist attacks or three javelin attacks."
		}
		]
	},
	"Troglodyte": {
		name: "Troglodyte",
		source: ["Monster Manual", 290],
		size: "Medium",
		type: "humanoid (troglodyte)",
		alignment: "chaotic evil",
		ac: [11, "Natural Armor", false],
		hp: 13,
		hd: [2, 8],
		speed: "30 ft",
		scores: [14, 10, 14, 6, 10, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +2",
		senses: "darkvision 60 ft",
		passive_perception: "10",
		languages: "Troglodyte",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Chameleon Skin",
			description: "The troglodyte has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name: "Stench",
			description: "Any creature other than a troglodyte that starts its turn within 5 ft of the troglodyte must succeed on a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the troglodyte has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troglodyte makes three attacks: one with its bite and two with its claws."
		}
		]
	},
	"Troll": {
		name: "Troll",
		source: ["Monster Manual", 291],
		size: "Large",
		type: "Giant",
		alignment: "Chaotic Evil",
		ac: [15, "Natural Armor", false],
		hp: 84,
		hd: [8, 10],
		speed: "30 ft",
		scores: [18, 13, 20, 7, 9, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		senses: "Darkvision 60 ft",
		passive_perception: 12,
		languages: "Giant",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Smell",
			description: "The troll has advantage on Wisdom (Perception) checks that rely on smell.",
		}, {
			name: "Regeneration",
			description: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate.",
		}, {
			name: "Variant: Loathsome Limbs",
			description: [
				"Whenever the troll takes at least 15 slashing damage at one time, roll a d20 to determine what else happens to it:",
				"1-10: Nothing else happens.",
				"11-14: One leg is severed from the troll if it has any legs left.",
				"15-18: One arm is severed from the troll if it has any arms left.",
				"19-20: The troll is decapitated, but the troll dies only if it can't regenerate. If it dies, so does the severed head.",
				"If the troll finishes a short or long rest without reattaching a severed limb or head, the part regrows. At that point, the severed part dies. Until then, a severed part acts on the troll's initiative and has its own action and movement. A severed part has AC 13, 10 hit points, and the troll's Regeneration trait.",
				"A severed leg is unable to attack and has a speed of 5 ft.",
				"A severed arm has a speed of 5 ft and can make one claw attack on its turn, with disadvantage on the attack roll unless the troll can see the arm and its target. Each time the troll loses an arm, it loses a claw attack.",
				"If its head is severed, the troll loses its bite attack and its body is blinded unless the head can see it. The severed head has a speed of 0 ft and the troll's Keen Smell trait. It can make a bite attack but only against a target in its space.",
				"The troll's speed is halved if it's missing a leg. If it loses both legs, it falls prone. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0, and it can't benefit from bonuses to speed.",
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The troll makes three attacks: one with its bite and two with its claws.",
		}
		],
	},
	"Twig Blight": {
		name: "Twig Blight",
		source: ["Monster Manual", 32],
		size: "Small",
		type: "plant",
		alignment: "neutral evil",
		ac: [13, "Natural Armor", false],
		hp: 4,
		hd: [1, 6],
		speed: "20 ft",
		scores: [6, 13, 12, 4, 8, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +3",
		damage_vulnerabilities: "fire",
		condition_immunities: "blinded, deafened",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passive_perception: "9",
		languages: "understands Common but can't speak",
		challenge_rating: "1/8",
		attacks: [{
			name: "Claws",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the blight remains motionless, it is indistinguishable from a dead shrub."
		}
		],
	},
	"Tyrannosaurus Rex": {
		name: "Tyrannosaurus Rex",
		source: ["Monster Manual", 80],
		size: "Huge",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 136,
		hd: [13, 12],
		speed: "50 ft",
		scores: [25, 10, 19, 2, 12, 9],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		passive_perception: 14,
		languages: "",
		challenge_rating: "8",
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [3, 8, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Medium or smaller target is grappled and restrained (escape DC 17); can't use bite again until grapple ends",
		}, {
			name: "Bite",
			ability: 1,
			damage: [4, 12, "piercing"],
			range: "Melee (10 ft)",
			description: "One bite and one tail attack to a different as an Attack action",
		}
		],
		traits: [{
			name: "Multiattack",
			description: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target.",
		},
		]
	},
	"Ultroloth": {
		name: "Ultroloth",
		source: ["Monster Manual", 314],
		size: "Medium",
		type: "fiend (yugoloth)",
		alignment: "neutral evil",
		ac: [19, "Natural Armor", false],
		hp: 153,
		hd: [18, 8],
		speed: "30 ft, fly 60 ft",
		scores: [16, 16, 18, 18, 15, 19],
		saves: ["", "", "", "", "", ""],
		skills: "Intimidation +9, Perception +7, Stealth +8",
		damage_resistances: "cold, fire, lightning, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "acid, poison",
		condition_immunities: "charmed, frightened, poisoned",
		senses: "truesight 120 ft",
		passive_perception: "17",
		languages: "Abyssal, Infernal, telepathy 120 ft",
		challenge_rating: "13",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The ultroloth's innate spellcasting ability is Charisma (spell save DC 17). The ultroloth can innately cast the following spells, requiring no material components:",
				"At will: alter self, clairvoyance, darkness, detect magic, detect thoughts, dispel magic, invisibility (self only), suggestion",
				"3/day each: dimension door, fear, wall of fire",
				"1/day each: fire storm, mass suggestion"
			]
		}, {
			name: "Magic Resistance",
			description: "The ultroloth has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Magic Weapons",
			description: "The ultroloth's weapon attacks are magical."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The ultroloth can use its Hypnotic Gaze and makes three melee attacks."
		}, {
			name: "Hypnotic Gaze",
			description: "The ultroloth's eyes sparkle with opalescent light as it targets one creature it can see within 30 feet of it. If the target can see the ultroloth, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed until the end of the ultroloth's next turn. The charmed target is stunned. If the target's saving throw is successful, the target is immune to the ultroloth's gaze for the next 24 hours."
		}, {
			name: "Teleport",
			description: "The ultroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
		}, {
			name: "Variant: Summon Yugoloth (1/day)",
			description: [
				"The yugoloth chooses what to summon and attempts a magical summoning.",
				"An ultroloth has a 50 percent chance of summoning 1d6 mezzoloths, 1d4 nycaloths, or one ultroloth.",
				"A summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it."
			]
		}
		],
	},
	"Umber Hulk": {
		name: "Umber Hulk",
		source: ["Monster Manual", 292],
		size: "Large",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [18, "Natural Armor", false],
		hp: 93,
		hd: [11, 10],
		speed: "30 ft, burrow 20 ft",
		scores: [20, 13, 16, 9, 10, 10],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 120 ft, tremorsense 60 ft",
		passive_perception: "10",
		languages: "Umber Hulk",
		challenge_rating: "5",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Mandibles",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Confusing Gaze",
			description: ["When a creature starts its turn within 30 feet of the umber hulk and is able to see the umber hulk's eyes, the umber hulk can magically force it to make a DC 15 Charisma saving throw, unless the umber hulk is incapacitated.", "On a failed saving throw, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during that turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action but uses all its movement to move in a random direction. On a 7 or 8, the creature makes one melee attack against a random creature, or it does nothing if no creature is within reach.", "Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the umber hulk until the start of its next turn, when it can avert its eyes again. If the creature looks at the umber hulk in the meantime, it must immediately make the save."]
		}, {
			name: "Tunneler",
			description: "The umber hulk can burrow through solid rock at half its burrowing speed and leaves a 5 foot-wide, 8-foot-high tunnel in its wake."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The umber hulk makes three attacks: two with its claws and one with its mandibles."
		}
		]
	},
	"Unicorn": {
		name: "Unicorn",
		source: ["Monster Manual", 294],
		size: "Large",
		type: "Celestial",
		alignment: "Lawful Good",
		ac: [12, "", false],
		hp: 67,
		hd: [9, 10],
		speed: "50 ft",
		scores: [18, 14, 15, 11, 17, 16],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "poison",
		condition_immunities: "charmed, paralyzed, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 13,
		languages: "Celestial, Elvish, Sylvan, telepathy 60 ft.",
		challenge_rating: "5",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Horn",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Charge",
			description: "If the unicorn moves at least 20 ft. straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
		}, {
			name: "Innate Spellcasting",
			description: [
				"The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components:",
				"At will: detect evil and good, druidcraft, pass without trace",
				"1/day each: calm emotions, dispel evil and good, entangle"
			]
		}, {
			name: "Magic Resistance",
			description: "The unicorn has advantage on saving throws against spells and other magical effects.",
		}, {
			name: "Magic Weapons",
			description: "The unicorn's weapon attacks are magical.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The unicorn makes two attacks: one with its hooves and one with its horn.",
		}, {
			name: "Healing Touch (3/Day)",
			description: "The unicorn touches another creature with its horn. The target magically regains 11 (2d8+2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target.",
		}, {
			name: "Teleport (1/Day)",
			description: "The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away.",
		}
		],
		legendary_actions: [{
			name: "Hooves",
			description: "The unicorn makes one attack with its hooves.",
		}, {
			name: "Shimmering Shield (Costs 2 Actions)",
			description: "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 ft. of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn.",
		}, {
			name: "Heal Self (Costs 3 Actions)",
			description: "The unicorn magically regains 11 (2d8+2) hit points.",
		}
		],
	},
	//URD SEE WINGED KOBOLD
	"Vampire": {
		name: "Vampire",
		source: ["Monster Manual", 297],
		size: "Medium",
		type: "Undead (shapechanger)",
		alignment: "Lawful Evil",
		ac: [16, "Natural Armor", false],
		hp: 144,
		hd: [17, 8],
		speed: "30 ft",
		scores: [18, 18, 18, 17, 15, 18],
		saves: ["", 9, "", "", 7, 9],
		skills: "Perception +7, Stealth +9",
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical weapons",
		senses: "Darkvision 120 ft",
		passive_perception: 17,
		languages: "the languages it knew in life",
		challenge_rating: "13",
		attacks: [{
			name: "Unarmed Strike (Vampire Form Only)",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			dc: true,
			description: "Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
		}, {
			name: "Bite (Bat or Vampire Form Only)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) necrotic damage. One willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: [
				"If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.",
				"While in bat form, the vampire can't speak, its walking speed is 5 ft, and it has a flying speed of 30 ft. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.",
				"While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 ft, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.",
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the vampire fails a saving throw, it can choose to succeed instead.",
		}, {
			name: "Misty Escape",
			description: [
				"When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.",
				"While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point.",
			]
		}, {
			name: "Regeneration",
			description: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.",
		}, {
			name: "Spider Climb",
			description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}, {
			name: "Vampire Weaknesses",
			description: [
				"The vampire has the following flaws:",
				"Forbiddance: The vampire can't enter a residence without an invitation from one of the occupants.",
				"Harmed by Running Water: The vampire takes 20 acid damage if it ends its turn in running water.",
				"take to the Heart: If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.",
				"Sunlight Hypersensitivity: The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.",
			]
		}
		],
		actions: [{
			name: "Multiattack (Vampire Form Only)",
			description: "The vampire makes two attacks, only one of which can be a bite attack.",
		}, {
			name: "Charm",
			description: [
				"The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.",
				"Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.",
			]
		}, {
			name: "Children of the Night (1/Day)",
			description: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action.",
		}
		],
		legendary_actions: [{
			name: "Move",
			description: "The vampire moves up to its speed without provoking opportunity attacks.",
		}, {
			name: "Unarmed Strike",
			description: "The vampire makes one unarmed strike.",
		}, {
			name: "Bite (Costs 2 Actions)",
			description: "The vampire makes one bite attack.",
		}
		],
	},
	"Vampire Spawn": {
		name: "Vampire Spawn",
		source: ["Monster Manual", 298],
		size: "Medium",
		type: "Undead",
		alignment: "Neutral Evil",
		ac: [15, "Natural Armor", false],
		hp: 82,
		hd: [11, 8],
		speed: "30 ft",
		scores: [16, 16, 16, 11, 10, 12],
		saves: ["", 6, "", "", 3, ""],
		skills: "Perception +3, Stealth +6",
		damage_resistances: "necrotic; bludgeoning, piercing, and slashing from nonmagical weapons",
		senses: "Darkvision 60 ft",
		passive_perception: 13,
		languages: "the languages it knew in life",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) necrotic damage. One willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			dc: true,
			description: "Instead of dealing damage, the vampire can grapple the target (escape DC 13).",
		}
		],
		traits: [{
			name: "Regeneration",
			description: "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.",
		}, {
			name: "Spider Climb",
			description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		}, {
			name: "Vampire Weaknesses",
			description: [
				"The vampire has the following flaws:",
				"Forbiddance: The vampire can't enter a residence without an invitation from one of the occupants.",
				"Harmed by Running Water: The vampire takes 20 acid damage when it ends its turn in running water.",
				"Stake to the Heart: The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place.",
				"Sunlight Hypersensitivity: The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.",
			]
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The vampire makes two attacks, only one of which can be a bite attack.",
		}
		],
	},
	"Vampire Spellcaster": {
		name: "Vampire Spellcaster",
		source: ["Monster Manual", 298],
		size: "Medium",
		type: "undead (shapechanger)",
		alignment: "lawful evil",
		ac: [16, "Natural Armor", false],
		hp: 144,
		hd: [17, 8],
		speed: "30 ft",
		scores: [18, 18, 18, 17, 15, 18],
		saves: ["", "9", "", "", "7", "9"],
		skills: "Perception +7, Stealth +9",
		damage_resistances: "necrotic, bludgeoning, piercing, and slashing from nonmagical weapons",
		senses: "darkvision 120 ft",
		passive_perception: "17",
		languages: "the languages it knew in life",
		challenge_rating: "15",
		attacks: [{
			name: "Unarmed Strike (Vampire Form Only)",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
		}, {
			name: "Bite (Bat or Vampire Form Only)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "One willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Plus 10 (3d6) necrotic damage. Target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. Target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: [
				"If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.",
				"While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.",
				"While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the vampire fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Misty Escape",
			description: [
				"When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.",
				"While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
			]
		}, {
			name: "Regeneration",
			description: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
		}, {
			name: "Spider Climb",
			description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Vampire Weaknesses",
			description: [
				"The vampire has the following flaws:",
				"Forbiddance: The vampire can't enter a residence without an invitation from one of the occupants.",
				"Harmed by Running Water: The vampire takes 20 acid damage if it ends its turn in running water.",
				"Stake to the Heart: If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.",
				"Sunlight Hypersensitivity: The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
			]
		}
		],
		actions: [{
			name: "Multiattack (Vampire Form Only)",
			description: "The vampire makes two attacks, only one of which can be a bite attack."
		}, {
			name: "Charm",
			description: [
				"The vampire targets one humanoid it can see within 30 ftof it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.",
				"Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
			]
		}, {
			name: "Children of the Night (1/Day)",
			description: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
		}
		],
		spells: [
			"The vampire is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16,+8 to hit with spell attacks). The vampire has the following wizard spells prepared:",
			"Cantrips (at will) : mage hand, prestidigitation, ray of frost",
			"1st level (4 slots) : comprehend languages, fog cloud, sleep",
			"2nd level (3 slots) : detect thoughts, gust of wind, mirror image",
			"3rd level (3 slots) : animate dead, bestow curse, nondetection",
			"4th level (3 slots) : blight, greater invisibility",
			"5th level (1 slot) : dominate person "
		]
	},
	"Vampire Warrior": {
		name: "Vampire Warrior",
		source: ["Monster Manual", 298],
		size: "Medium",
		type: "undead (shapechanger)",
		alignment: "lawful evil",
		ac: [18, "Plate", false],
		hp: 144,
		hd: [17, 8],
		speed: "30 ft",
		scores: [18, 18, 18, 17, 15, 18],
		saves: ["", "9", "", "", "7", "9"],
		skills: "Perception +7, Stealth +9",
		damage_resistances: "necrotic, bludgeoning, piercing, and slashing from nonmagical weapons",
		senses: "darkvision 120 ft",
		passive_perception: "17",
		languages: "the languages it knew in life",
		challenge_rating: "15",
		attacks: [{
			name: "Unarmed Strike (Vampire Form Only)",
			ability: 1,
			damage: [1, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
		}, {
			name: "Bite (Bat or Vampire Form Only)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "One willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
		}, {
			name: "Greatsword",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: [
				"If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.",
				"While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.",
				"While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
			]
		}, {
			name: "Legendary Resistance (3/Day)",
			description: "If the vampire fails a saving throw, it can choose to succeed instead."
		}, {
			name: "Misty Escape",
			description: [
				"When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.",
				"While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
			]
		}, {
			name: "Regeneration",
			description: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
		}, {
			name: "Spider Climb",
			description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Vampire Weaknesses",
			description: [
				"The vampire has the following flaws:",
				"Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants.",
				"Harmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.",
				"Stake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.",
				"Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
			]
		}
		],
		actions: [{
			name: "Multiattack (Vampire Form Only)",
			description: "The vampire makes two attacks, only one of which can be a bite attack."
		}, {
			name: "Charm",
			description: [
				"The vampire targets one humanoid it can see within 30 ftof it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.",
				"Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
			]
		}, {
			name: "Children of the Night (1/Day)",
			description: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
		}
		]
	},
	"Veteran": {
		name: "Veteran",
		source: ["Monster Manual", 350],
		size: "Medium",
		type: "Humanoid (any race)",
		alignment: "Any Alignment",
		ac: [17, "Splint", false],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft",
		scores: [16, 13, 14, 10, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Athletics +5, Perception +2",
		passive_perception: 12,
		languages: "any one language (usually Common)",
		challenge_rating: "3",
		attacks: [{
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 8 (1d10+3) slashing damage.",
		}, {
			name: "Shortsword",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Heavy Crossbow",
			ability: 2,
			damage: [1, 10, "piercing"],
			range: "Ranged (100/400 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.",
		}
		],
	},
	"Vine Blight": {
		name: "Vine Blight",
		source: ["Monster Manual", 32],
		size: "Medium",
		type: "plant",
		alignment: "neutral evil",
		ac: [12, "Natural Armor", false],
		hp: 26,
		hd: [4, 8],
		speed: "10 ft",
		scores: [15, 8, 14, 5, 10, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Stealth +1",
		condition_immunities: "blinded, deafened",
		senses: "blindsight 60 ft (blind beyond this radius)",
		passive_perception: "10",
		languages: "Common",
		challenge_rating: "1/2",
		attacks: [{
			name: "Constrict",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "A Large or smaller target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the blight can't constrict another target.",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the blight remains motionless, it is indistinguishable from a tangle of vines."
		}
		],
		actions: [{
			name: "Entangling Plants (Recharge 5-6)",
			description: "Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing it self or another entangled creature within reach on a success."
		}
		]
	},
	"Violet Fungus": {
		name: "Violet Fungus",
		source: ["Monster Manual", 138],
		size: "Medium",
		type: "Plant",
		alignment: "Unaligned",
		ac: [5, "", false],
		hp: 18,
		hd: [4, 8],
		speed: "5 ft",
		scores: [3, 1, 10, 1, 3, 1],
		saves: ["", "", "", "", "", ""],
		condition_immunities: "blinded, deafened, frightened",
		senses: "Blindsight 30 ft (blind beyond this radius)",
		passive_perception: 6,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Rotting Touch",
			ability: 3,
			damage: [1, 8, "necrotic"],
			range: "Melee (10 ft)",
			description: "",
		}
		],
		traits: [{
			name: "False Appearance",
			description: "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The fungus makes 1d4 Rotting Touch attacks.",
		}
		],
	},
	"Vrock": {
		name: "Vrock",
		source: ["Monster Manual", 64],
		size: "Large",
		type: "Fiend (demon)",
		alignment: "Chaotic Evil",
		ac: [15, "Natural Armor", false],
		hp: 104,
		hd: [11, 10],
		speed: "40 ft, fly 60 ft",
		scores: [17, 15, 18, 8, 13, 8],
		saves: ["", 5, "", "", 4, 2],
		damage_resistances: "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 120 ft",
		passive_perception: 11,
		languages: "Abyssal, telepathy 120 ft.",
		challenge_rating: "6",
		attacks: [{
			name: "Beak",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Talons",
			ability: 1,
			damage: [2, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Magic Resistance",
			description: "The vrock has advantage on saving throws against spells and other magical effects.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The vrock makes two attacks: one with its beak and one with its talons.",
		}, {
			name: "Spores (Recharge 6)",
			description: "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.",
		}, {
			name: "Stunning Screech (1/Day)",
			description: "The vrock emits a horrific screech. Each creature within 20 ft of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn .",
		}, {
			name: "Variant: Summon Demon (1/Day)",
			description: [
				"The demon chooses what to summon and attempts a magical summoning.",
				"A vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.",
				"A summoned demon appears in an unoccupied space within 60 ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
			]
		}
		],
	},
	"Vulture": {
		name: "Vulture",
		source: ["Monster Manual", 339],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [10, "", false],
		hp: 5,
		hd: [1, 8],
		speed: "10 ft, fly 50 ft",
		scores: [7, 10, 13, 2, 12, 4],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3",
		senses: "Adv. on Wis (Perception) checks using sight/smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Beak",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Sight and Smell",
			description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
		}, {
			name: "Pack Tactics",
			description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Warhorse": {
		name: "Warhorse",
		source: ["Monster Manual", 340],
		size: "Large",
		type: "Beast",
		alignment: "Unaligned",
		ac: [11, "", false],
		hp: 19,
		hd: [3, 10],
		speed: "60 ft",
		scores: [18, 12, 13, 2, 12, 7],
		saves: ["", "", "", "", "", ""],
		passive_perception: 11,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Trampling Charge trait",
		}
		],
		traits: [{
			name: "Trampling Charge",
			description: "If the horse moves at least 20 ft straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action.",
		}
		],
	},
	"Warhorse Skeleton": {
		name: "Warhorse Skeleton",
		source: ["Monster Manual", 273],
		size: "Large",
		type: "Undead",
		alignment: "Lawful Evil",
		ac: [13, "Barding Scraps", false],
		hp: 22,
		hd: [3, 10],
		speed: "60 ft",
		scores: [18, 12, 15, 2, 8, 5],
		saves: ["", "", "", "", "", ""],
		damage_vulnerabilities: "bludgeoning",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 9,
		languages: "",
		challenge_rating: "1/2",
		attacks: [{
			name: "Hooves",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
	},
	"Water Elemental": {
		name: "Water Elemental",
		source: ["Monster Manual", 125],
		size: "Large",
		type: "Elemental",
		alignment: "Neutral",
		ac: [14, "Natural Armor", false],
		hp: 114,
		hd: [12, 10],
		speed: "30 ft, swim 90 ft",
		scores: [18, 14, 18, 5, 10, 8],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "acid; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
		senses: "Darkvision 60 ft",
		passive_perception: 10,
		languages: "Aquan",
		challenge_rating: "5",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [2, 8, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Two slam attacks as an Attack action",
		}, {
			name: "Whelm (Recharge 4-6)",
			ability: 1,
			dc: true,
			damage: [2, 8, "bludgeoning"],
			range: "All in shared area",
			description: [
				"Each creature in the elemental's space that is Large or smaller, is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.",
				"The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8+4) bludgeoning damage. A creature within 5 ft of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding."
			]
		}
		],
		traits: [{
			name: "Water Form",
			description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.",
		}, {
			name: "Freeze",
			description: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 ft until the end of its next turn.",
		}
		],
		actions: [{
			name: "Whelm (Recharge 4-6)",
			description: [
				"See attack. Each creature in the elemental's space that is Large or smaller, is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.",
				"The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8+4) bludgeoning damage. A creature within 5 ft of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding.",
			]
		}
		],
	},
	"Water Weird": {
		name: "Water Weird",
		source: ["Monster Manual", 299],
		size: "Large",
		type: "elemental",
		alignment: "neutral",
		ac: [13, "", false],
		hp: 58,
		hd: [9, 10],
		speed: "0 ft, swim 60 ft",
		scores: [17, 16, 13, 11, 10, 10],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "fire, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "exhaustion, grappled, paralyzed, poisoned, restrained, prone, unconscious",
		senses: "blindsight 30 ft",
		passive_perception: "10",
		languages: "understands Aquan but doesn't speak",
		challenge_rating: "3",
		attacks: [{
			name: "Constrict",
			ability: 1,
			damage: [3, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "If the target is Medium or smaller, it is grappled (escape DC 13) and pulled 5 ft toward the water weird. Until this grapple ends, the target is restrained, the water weird tries to drown it, and the water weird can't constrict another target.",
		}
		],
		traits: [{
			name: "Invisible in Water",
			description: "The water weird is invisible while fully immersed in water."
		}, {
			name: "Water Bound",
			description: "The water weird dies if it leaves the water to which it is bound or if that water is destroyed."
		}
		],
	},
	"Weasel": {
		name: "Weasel",
		source: ["Monster Manual", 340],
		size: "Tiny",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "", false],
		hp: 1,
		hd: [1, 4],
		speed: "30 ft",
		scores: [3, 16, 8, 2, 12, 3],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +5",
		senses: "Adv. on Wis (Perception) checks using hearing/smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "0",
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}
		],
	},
	"Werebear": {
		name: "Werebear",
		source: ["Monster Manual", 208],
		size: "Medium",
		type: "Humanoid (human)",
		alignment: "Neutral Good",
		ac: [10, "", false],
		hp: 135,
		hd: [18, 8],
		speed: "30 ft (40 ft, climb 30 ft in bear or hybrid form)",
		scores: [19, 10, 17, 11, 12, 12],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +7",
		damage_immunities: "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
		passive_perception: 17,
		languages: "Common (can't speak in bear form)",
		challenge_rating: "5",
		attacks: [{
			name: "Bite (Bear or Hybrid Form Only)",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (5 ft)",
			dc: true,
			description: "If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with were bear lycanthropy.",
		}, {
			name: "Claw (Bear or Hybrid Form Only)",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Greataxe (Humanoid or Hybrid Form Only)",
			ability: 1,
			damage: [1, 12, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size(Large) and AC(11, Natural Armor), are the same in each form. Any equipment it. is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
		}, {
			name: "Keen Smell",
			description: "The werebear has advantage on WisGlom (Perception) checks that rely on smell.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid.",
		}
		],
	},
	"Wereboar": {
		name: "Wereboar",
		source: ["Monster Manual", 209],
		size: "Medium",
		type: "Humanoid (human)",
		alignment: "Neutral Evil",
		ac: [10, "", false],
		hp: 78,
		hd: [12, 8],
		speed: "30 ft (40 ft in boar form)",
		scores: [17, 10, 15, 10, 11, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2",
		damage_immunities: "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
		passive_perception: 12,
		languages: "Common (can't speak in boar form)",
		challenge_rating: "4",
		attacks: [{
			name: "Maul (Humanoid or Hybrid Form Only)",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Tusks (Boar or Hybrid Form Only)",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			dc: true,
			description: "If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC(11, Natural Armor), are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
		}, {
			name: "Charge (Boar or Hybrid Form Only)",
			description: "If the wereboar moves at least 15 ft straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
		}, {
			name: "Relentless (Recharges after a Short or Long Rest)",
			description: "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
		}
		],
		actions: [{
			name: "Multiattack (Humanoid or Hybrid Form Only)",
			description: "The wereboar makes two attacks, only one of which can be with its tusks.",
		}
		],
	},
	"Wererat": {
		name: "Wererat",
		source: ["Monster Manual", 209],
		size: "Medium",
		type: "Humanoid (human)",
		alignment: "Lawful Evil",
		ac: [12, "", false],
		hp: 33,
		hd: [6, 8],
		speed: "30 ft",
		scores: [10, 15, 12, 11, 10, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +2, Stealth +4",
		damage_immunities: "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
		senses: "Darkvision 60 ft (rat form only)",
		passive_perception: 12,
		languages: "Common (can't speak in rat form)",
		challenge_rating: "2",
		attacks: [{
			name: "Bite (Rat or Hybrid Form Only).",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy.",
		}, {
			name: "Shortsword (Humanoid or Hybrid Form Only)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Hand Crossbow (Humanoid or Hybrid Form Only)",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (30/120 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
		}, {
			name: "Keen Smell",
			description: "The wererat has advantage on Wisdom (Perception) checks that rely on smell.",
		}
		],
		actions: [{
			name: "Multiattack (Humanoid or Hybrid Form Only)",
			description: "The wererat makes two attacks, only one of which can be a bite.",
		}
		],
	},
	"Weretiger": {
		name: "Weretiger",
		source: ["Monster Manual", 210],
		size: "Medium",
		type: "Humanoid (human)",
		alignment: "Neutral",
		ac: [12, "", false],
		hp: 120,
		hd: [16, 8],
		speed: "30 ft (40 ft in tiger form)",
		scores: [17, 15, 16, 10, 13, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +4",
		damage_immunities: "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
		senses: "Darkvision 60 ft",
		passive_perception: 15,
		languages: "Common (can't speak in tiger form)",
		challenge_rating: "4",
		attacks: [{
			name: "Bite (Tiger or Hybrid Form Only)",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy.",
		}, {
			name: "Claw (Tiger or Hybrid Form Only)",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Scimitar (Humanoid or Hybrid Form Only)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Longbow (Humanoid or Hybrid Form Only)",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
		}, {
			name: "Keen Hearing and Smell",
			description: "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}, {
			name: "Pounce (Tiger or Hybrid Form Only)",
			description: "If the weretiger moves at least 15 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action.",
		}
		],
		actions: [{
			name: "Multiattack (Humanoid or Hybrid Form Only)",
			description: "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks.",
		}
		],
	},
	"Werewolf": {
		name: "Werewolf",
		source: ["Monster Manual", 211],
		size: "Medium",
		type: "Humanoid (human)",
		alignment: "Chaotic Evil",
		ac: [11, "", false],
		hp: 58,
		hd: [9, 8],
		speed: "30 ft (40 ft in wolf form)",
		scores: [15, 13, 14, 10, 11, 10],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4, Stealth +3",
		damage_immunities: "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
		passive_perception: 14,
		languages: "Common (can't speak in wolf form)",
		challenge_rating: "3",
		attacks: [{
			name: "Bite (Wolf or Hybrid Form Only)",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy.",
		}, {
			name: "Claws (Hybrid Form Only)",
			ability: 1,
			damage: [2, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Spear (Humanoid, Melee)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Two-Handed: 6 (1d8+2) piercing damage.",
		}, {
			name: "Spear (Humanoid, Ranged)",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Ranged (20/60 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC(12, Natural Armor), are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
		}, {
			name: "Keen Hearing and Smell",
			description: "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}
		],
		actions: [{
			name: "Multiattack (Humanoid or Hybrid Form Only)",
			description: "The werewolf makes two attacks: one with its bite and one with its claws or spear.",
		}
		],
	},
	"White Dragon Wyrmling": {
		name: "White Dragon Wyrmling",
		source: ["Monster Manual", 102],
		size: "Medium",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [16, "Natural Armor", false],
		hp: 32,
		hd: [5, 8],
		speed: "30 ft, burrow 15 ft, fly 60 ft, swim 30 ft",
		scores: [14, 10, 14, 5, 10, 11],
		saves: ["", 2, 4, "", 2, 2],
		skills: "Perception +4, Stealth +2",
		damage_immunities: "cold",
		senses: "Blindsight 10 ft; Darkvision 60 ft",
		passive_perception: 14,
		languages: "Draconic",
		challenge_rating: "2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 2 (1d4) cold damage.",
		}
		],
		actions: [{
			name: "Cold Breath (Recharge 5-6)",
			description: "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Wight": {
		name: "Wight",
		source: ["Monster Manual", 300],
		size: "Medium",
		type: "Undead",
		alignment: "Neutral Evil",
		ac: [14, "Studded Leather", false],
		hp: 45,
		hd: [6, 8],
		speed: "30 ft",
		scores: [15, 14, 16, 10, 13, 15],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		senses: "Darkvision 60 ft; While in sunlight, disadv. on Wis (Perception) checks using sight",
		passive_perception: 13,
		languages: "all languages it knew in life",
		challenge_rating: "3",
		attacks: [{
			name: "Life Drain",
			ability: 1,
			damage: [1, 6, "necrotic"],
			range: "Melee (5 ft)",
			description: [
				"The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
				"A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.",
			]
		}, {
			name: "Longsword",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Versatile (1d10)",
		}, {
			name: "Longbow",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "150/600 ft",
			description: "Ammunition, heavy, two-handed)",
		}
		],
		traits: [{
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
		}, {
			name: "Life Drain",
			description: [
				"A target of the wight's life drain attack must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
				"A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.",
			]
		}
		],
	},
	"Will-o'-Wisp": {
		name: "Will-o'-Wisp",
		source: ["Monster Manual", 301],
		size: "Tiny",
		type: "Undead",
		alignment: "Chaotic Evil",
		ac: [19, "", false],
		hp: 22,
		hd: [9, 4],
		speed: "0 ft, fly 50 ft (hover)",
		scores: [1, 28, 10, 13, 14, 11],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "acid, cold, fire, necrotic, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "lightning, poison",
		condition_immunities: "exhaustion, grappled, paralyzed, poisoned, prone, restrained, unconscious",
		senses: "Darkvision 120 ft",
		passive_perception: 12,
		languages: "the languages it knew in life",
		challenge_rating: "2",
		attacks: [{
			name: "Shock",
			ability: 5,
			damage: [2, 8, "lightning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Consume Life",
			description: "As a bonus action, the will-o'-wisp can target one creature it can see within 5 ft. of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points.",
		}, {
			name: "Ephemeral",
			description: "The will-o'-wisp can't wear or carry anything.",
		}, {
			name: "Incorporeal Movement",
			description: "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
		}, {
			name: "Variable Illumination",
			description: "The will-o'-wisp sheds bright light in a 5-20-foot radius and dim light for an additional number of ft. equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action.",
		}
		],
		actions: [{
			name: "Invisibility",
			description: "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell).",
		}
		],
	},
	"Winged Kobold": {
		name: "Winged Kobold",
		source: ["Monster Manual", 195],
		size: "Small",
		type: "humanoid (kobold)",
		alignment: "lawful evil",
		ac: [13, "", false],
		hp: 7,
		hd: [3, 6],
		speed: "30 ft, fly 30 ft",
		scores: [7, 16, 9, 8, 7, 8],
		saves: ["", "", "", "", "", ""],
		senses: "darkvision 60 ft",
		passive_perception: "8",
		languages: "Common, Draconic",
		challenge_rating: "1/4",
		attacks: [{
			name: "Dagger",
			ability: 2,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Dropped Rock",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Ranged (0 ft)",
			description: "One target directly below the kobold.",
		}
		],
		traits: [{
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name: "Pack Tactics",
			description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ftof the creature and the ally isn't incapacitated."
		}
		],
	},
	"Winter Wolf": {
		name: "Winter Wolf",
		source: ["Monster Manual", 340],
		size: "Large",
		type: "Monstrosity",
		alignment: "Neutral Evil",
		ac: [13, "Natural Armor", false],
		hp: 75,
		hd: [10, 10],
		speed: "50 ft",
		scores: [18, 13, 14, 7, 12, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +3",
		damage_immunities: "cold",
		passive_perception: 15,
		languages: "Common, Giant, Winter Wolf",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}, {
			name: "Pack Tactics",
			description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
		}, {
			name: "Snow Camouflage",
			description: "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.",
		}
		],
		actions: [{
			name: "Cold Breath (Recharge 5-6)",
			description: "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Wolf": {
		name: "Wolf",
		source: ["Monster Manual", 341],
		size: "Medium",
		type: "Beast",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 11,
		hd: [2, 8],
		speed: "40 ft",
		scores: [12, 15, 12, 3, 12, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +4",
		senses: "Adv. on Wis (Perception) checks using hearing/smell",
		passive_perception: 13,
		languages: "",
		challenge_rating: "1/4",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 11 Strength saving throw or be knocked prone",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}, {
			name: "Pack Tactics",
			description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft of the creature and the ally isn't incapacitated.",
		}
		],
	},
	"Worg": {
		name: "Worg",
		source: ["Monster Manual", 341],
		size: "Large",
		type: "Monstrosity",
		alignment: "Neutral Evil",
		ac: [13, "Natural Armor", false],
		hp: 26,
		hd: [4, 10],
		speed: "50 ft",
		scores: [16, 13, 13, 7, 11, 8],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "Darkvision 60 ft; Adv. on Wis (Perception) checks using hearing/smell",
		passive_perception: 14,
		languages: "Goblin, Worg",
		challenge_rating: "1/2",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Target must succeed on a DC 13 Strength saving throw or be knocked prone",
		}
		],
		traits: [{
			name: "Keen Hearing and Smell",
			description: "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
		}
		],
	},
	"Wraith": {
		name: "Wraith",
		source: ["Monster Manual", 302],
		size: "Medium",
		type: "Undead",
		alignment: "Neutral Evil",
		ac: [13, "", false],
		hp: 67,
		hd: [9, 8],
		speed: "0 ft, fly 60 ft (hover)",
		scores: [6, 16, 16, 12, 14, 15],
		saves: ["", "", "", "", "", ""],
		damage_resistances: "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
		damage_immunities: "necrotic, poison",
		condition_immunities: "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
		senses: "Darkvision 60 ft",
		passive_perception: 12,
		languages: "the languages it knew in life",
		challenge_rating: "5",
		attacks: [{
			name: "Life Drain",
			ability: 3,
			damage: [4, 8, "necrotic"],
			range: "Melee (5 ft)",
			dc: true,
			description: "Target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
		}
		],
		traits: [{
			name: "Incorporeal Movement",
			description: "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
		}
		],
		actions: [{
			name: "Create Specter",
			description: "The wraith targets a humanoid within 10 ft of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time.",
		}
		],
	},
	"Wyvern": {
		name: "Wyvern",
		source: ["Monster Manual", 303],
		size: "Large",
		type: "Dragon",
		alignment: "Unaligned",
		ac: [13, "Natural Armor", false],
		hp: 110,
		hd: [13, 10],
		speed: "20 ft, fly 80 ft",
		scores: [19, 10, 16, 5, 12, 6],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +4",
		senses: "Darkvision 60 ft",
		passive_perception: 14,
		languages: "",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claws",
			ability: 1,
			damage: [2, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Stinger",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (10 ft)",
			dc: true,
			description: "Target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack.",
		}
		],
	},
	"Xorn": {
		name: "Xorn",
		source: ["Monster Manual", 304],
		size: "Medium",
		type: "Elemental",
		alignment: "Neutral",
		ac: [19, "Natural Armor", false],
		hp: 73,
		hd: [7, 8],
		speed: "20 ft, burrow 20 ft",
		scores: [17, 10, 22, 11, 10, 11],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +6, Stealth +3",
		damage_resistances: "piercing and slashing from nonmagical weapons that aren't adamantine",
		senses: "Darkvision 60 ft; tremorsense 60 ft",
		passive_perception: 16,
		languages: "Terran",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Earth Glide",
			description: "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through.",
		}, {
			name: "Stone Camouflage",
			description: "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
		}, {
			name: "Treasure Sense",
			description: "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 ft. of it.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The xorn makes three claw attacks and one bite attack.",
		}
		],
	},
	"Yeti": {
		name: "Yeti",
		source: ["Monster Manual", 305],
		size: "Large",
		type: "monstrosity",
		alignment: "chaotic evil",
		ac: [12, "Natural Armor", false],
		hp: 51,
		hd: [6, 10],
		speed: "40 ft, climb 40 ft",
		scores: [18, 13, 16, 8, 12, 7],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +3, Stealth +3",
		damage_immunities: "cold",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Yeti",
		challenge_rating: "3",
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "Plus 3 (1d6) cold damage.",
		}
		],
		traits: [{
			name: "Fear of Fire",
			description: "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
		}, {
			name: "Keen Smell",
			description: "The yeti has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name: "Snow Camouflage",
			description: "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The yeti can use its Chilling Gaze and makes two claw attacks."
		}, {
			name: "Chilling Gaze",
			description: "The yeti targets one creature it can see within 30 ft of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour."
		}
		]
	},
	"Yochlol": {
		name: "Yochlol",
		source: ["Monster Manual", 65],
		size: "Medium",
		type: "fiend (demon)",
		alignment: "chaotic evil",
		ac: [15, "Natural Armor", false],
		hp: 136,
		hd: [16, 8],
		speed: "30 ft, climb 30 ft",
		scores: [15, 14, 18, 13, 15, 15],
		saves: ["", "6", "", "5", "6", "6"],
		skills: "Deception +10, Insight +6",
		damage_resistances: "cold, fire, lightning, bludgeoning, piercing, and slashing from nonmagical weapons",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 120 ft",
		passive_perception: "12",
		languages: "Abyssal, Elvish, Undercommon",
		challenge_rating: "10",
		attacks: [{
			name: "Slam (Bite in Spider Form)",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Plus 21 (6d6) poison damage. Range is 10 ft in demon form. Damage is piercing in spider form.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The yochlol can use its action to polymorph into a form that resembles a female drow or giant spider, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
		}, {
			name: "Magic Resistance",
			description: "The yochlol has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Spider Climb",
			description: "The yochlol can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name: "Innate Spellcasting",
			description: [
				"The yochlol's spellcasting ability is Charisma (spell save DC 14). The yochlol can innately cast the following spells, requiring no material components:",
				"At will: detect thoughts, web",
				"1/day: dominate person"
			]
		}, {
			name: "Web Walker",
			description: "The yochlol ignores movement restrictions caused by webbing."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The yochlol makes two melee attacks."
		}, {
			name: "Mist Form",
			description: [
				"The yochlol transforms into toxic mist or reverts to its true form. Any equipment it is wearing or carrying is also transformed. It reverts to its true form if it dies.",
				"While in mist form, the yochlol is incapacitated and can't speak. It has a flying speed of 30 feet, can hover, and can pass through any space that isn't airtight. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to nonmagical damage.",
				"While in mist form, the yochlol can enter a creature's space and stop there. Each time that creature starts its turn with the yochlol in its space, the creature must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target is incapacitated."
			]
		}, {
			name: "Variant: Summon Demon (1/day)",
			description: [
				"The demon chooses what to summon and attempts a magical summoning.",
				"A yochlol has a 50 percent chance of summoning one yochlol.",
				"A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
			]
		}
		],
	},
	"Young Black Dragon": {
		name: "Young Black Dragon",
		source: ["Monster Manual", 88],
		size: "Large",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [18, "Natural Armor", false],
		hp: 127,
		hd: [15, 10],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [19, 14, 17, 12, 11, 15],
		saves: ["", 5, 6, "", 3, 5],
		skills: "Perception +6, Stealth +5",
		damage_immunities: "acid",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 16,
		languages: "Common, Draconic",
		challenge_rating: "7",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 4 (1d8) acid damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Acid Breath (Recharge 5-6)",
			description: "The dragon exhales acid in a 30-foot line that is 5 ft wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Young Blue Dragon": {
		name: "Young Blue Dragon",
		source: ["Monster Manual", 91],
		size: "Large",
		type: "Dragon",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 152,
		hd: [16, 10],
		speed: "40 ft, burrow 40 ft, fly 80 ft",
		scores: [21, 10, 19, 14, 13, 17],
		saves: ["", 4, 8, "", 5, 7],
		skills: "Perception +9, Stealth +4",
		damage_immunities: "lightning",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 19,
		languages: "Common, Draconic",
		challenge_rating: "9",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 5 (1d10) lightning damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Lightning Breath (Recharge 5-6)",
			description: "The dragon exhales lightning in an 60-foot line that is 5 ft wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Young Brass Dragon": {
		name: "Young Brass Dragon",
		source: ["Monster Manual", 105],
		size: "Large",
		type: "Dragon",
		alignment: "Chaotic Good",
		ac: [17, "Natural Armor", false],
		hp: 110,
		hd: [13, 10],
		speed: "40 ft, burrow 20 ft, fly 80 ft",
		scores: [19, 10, 17, 12, 11, 15],
		saves: ["", 3, 6, "", 3, 5],
		skills: "Perception +10, Persuasion +7, Stealth +5",
		damage_immunities: "fire",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 16,
		languages: "Common, Draconic",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Fire Breath: The dragon exhales fire in a 40-foot line that is 5 ft wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one.",
				"Sleep Breath: The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
			]
		}
		],
	},
	"Young Bronze Dragon": {
		name: "Young Bronze Dragon",
		source: ["Monster Manual", 108],
		size: "Large",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [18, "Natural Armor", false],
		hp: 142,
		hd: [15, 10],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [21, 10, 19, 14, 13, 17],
		saves: ["", 3, 7, "", 4, 6],
		skills: "Insight +4, Perception +7, Stealth +3",
		damage_immunities: "lightning",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 17,
		languages: "Common, Draconic",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Lightning Breath: The dragon exhales lightning in a 60-foot line that is 5 ft wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.",
				"Repulsion Breath: The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 ft away from the dragon.",
			]
		}
		],
	},
	"Young Copper Dragon": {
		name: "Young Copper Dragon",
		source: ["Monster Manual", 111],
		size: "Large",
		type: "Dragon",
		alignment: "Chaotic Good",
		ac: [17, "Natural Armor", false],
		hp: 119,
		hd: [14, 10],
		speed: "40 ft, climb 40 ft, fly 80 ft",
		scores: [19, 12, 17, 16, 13, 15],
		saves: ["", 4, 6, "", 4, 5],
		skills: "Deception +5, Perception +7, Stealth +4",
		damage_immunities: "acid",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 17,
		languages: "Common, Draconic",
		challenge_rating: "7",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Acid Breath: The dragon exhales acid in an 40-foot line that is 5 ft wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one.",
				"Slowing Breath: The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
			]
		}
		],
	},
	"Young Gold Dragon": {
		name: "Young Gold Dragon",
		source: ["Monster Manual", 115],
		size: "Large",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [18, "Natural Armor", false],
		hp: 178,
		hd: [17, 10],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [23, 14, 21, 16, 13, 20],
		saves: ["", 6, 9, "", 5, 9],
		skills: "Insight +5, Perception +9, Persuasion +9, Stealth +6",
		damage_immunities: "fire",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 19,
		languages: "Common, Draconic",
		challenge_rating: "10",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Fire Breath: The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one.",
				"Weakening Breath: The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			]
		}
		],
	},
	"Young Green Dragon": {
		name: "Young Green Dragon",
		source: ["Monster Manual", 94],
		size: "Large",
		type: "Dragon",
		alignment: "Lawful Evil",
		ac: [18, "Natural Armor", false],
		hp: 136,
		hd: [16, 10],
		speed: "40 ft, fly 80 ft, swim 40 ft",
		scores: [19, 12, 17, 16, 13, 15],
		saves: ["", 4, 6, "", 4, 5],
		skills: "Deception +5, Perception +7, Stealth +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 17,
		languages: "Common, Draconic",
		challenge_rating: "8",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Amphibious",
			description: "The dragon can breathe air and water.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Poison Breath (Recharge 5-6)",
			description: "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Young Red Dragon": {
		name: "Young Red Dragon",
		source: ["Monster Manual", 98],
		size: "Large",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [18, "Natural Armor", false],
		hp: 178,
		hd: [17, 10],
		speed: "40 ft, climb 40 ft, fly 80 ft",
		scores: [23, 10, 21, 14, 11, 19],
		saves: ["", 4, 9, "", 4, 8],
		skills: "Perception +8, Stealth +4",
		damage_immunities: "fire",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 18,
		languages: "Common, Draconic",
		challenge_rating: "10",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 3 (1d6) fire damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Fire Breath (Recharge 5-6)",
			description: "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Young Red Shadow Dragon": {
		name: "Young Red Shadow Dragon",
		source: ["Monster Manual", 85],
		size: "Large",
		type: "dragon",
		alignment: "chaotic evil",
		ac: [18, "Natural Armor", false],
		hp: 178,
		hd: [17, 10],
		speed: "40 ft, climb 40 ft, fly 80 ft",
		scores: [23, 10, 21, 14, 11, 19],
		saves: ["", "4", "9", "", "4", "8"],
		skills: "Perception +8, Stealth +8",
		damage_resistances: "necrotic",
		damage_immunities: "fire",
		senses: "blindsight 30 ft, darkvision 120 ft",
		passive_perception: "18",
		languages: "Common, Draconic",
		challenge_rating: "13",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 3 (1d6) necrotic damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Living Shadow",
			description: "While in dim light or darkness, the dragon has resistance to damage that isn't force, psychic, or radiant."
		}, {
			name: "Shadow Stealth",
			description: "While in dim light or darkness, the dragon can take the Hide action as a bonus action."
		}, {
			name: "Sunlight Sensitivity",
			description: "While in sunlight, the dragon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws."
		}, {
			name: "Shadow Breath (Recharge 5-6)",
			description: "The dragon exhales shadowy fire in a 30-foot cone. Each creature in that area must make a DC 18 Dexterity saving throw, taking 56 (16d6) necrotic damage on a failed save, or half as much damage on a successful one. A humanoid reduced to 0 hit points by this damage dies, and an undead shadow rises from its corpse and acts immediately after the dragon in the initiative count. The shadow is under the dragon's control.",
		}
		]
	},
	"Young Remorhaz": {
		name: "Young Remorhaz",
		source: ["Monster Manual", 258],
		size: "Large",
		type: "monstrosity",
		alignment: "unaligned",
		ac: [14, "Natural Armor", false],
		hp: 93,
		hd: [11, 10],
		speed: "30 ft, burrow 20 ft",
		scores: [18, 13, 17, 3, 10, 4],
		saves: ["", "", "", "", "", ""],
		damage_immunities: "cold, fire",
		senses: "darkvision 60 ft, tremorsense 60 ft",
		passive_perception: "10",
		challenge_rating: "5",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 10, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) fire damage.",
		}
		],
		traits: [{
			name: "Heated Body",
			description: "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage.",
		}
		],
	},
	"Young Silver Dragon": {
		name: "Young Silver Dragon",
		source: ["Monster Manual", 118],
		size: "Large",
		type: "Dragon",
		alignment: "Lawful Good",
		ac: [18, "Natural Armor", false],
		hp: 168,
		hd: [16, 10],
		speed: "40 ft, fly 80 ft",
		scores: [23, 10, 21, 14, 11, 19],
		saves: ["", 4, 9, "", 4, 8],
		skills: "Arcana +6, History +6, Perception +8, Stealth +4",
		damage_immunities: "cold",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 18,
		languages: "Common, Draconic",
		challenge_rating: "9",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Breath Weapons (Recharge 5-6)",
			description: [
				"The dragon uses one of the following breath weapons.",
				"Cold Breath: The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
				"Paralyzing Breath: The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			]
		}
		],
	},
	"Young White Dragon": {
		name: "Young White Dragon",
		source: ["Monster Manual", 101],
		size: "Large",
		type: "Dragon",
		alignment: "Chaotic Evil",
		ac: [17, "Natural Armor", false],
		hp: 133,
		hd: [14, 10],
		speed: "40 ft, burrow 20 ft, fly 80 ft, swim 40 ft",
		scores: [18, 10, 18, 6, 11, 12],
		saves: ["", 3, 7, "", 3, 4],
		skills: "Perception +6, Stealth +3",
		damage_immunities: "cold",
		senses: "Blindsight 30 ft; Darkvision 120 ft",
		passive_perception: 16,
		languages: "Common, Draconic",
		challenge_rating: "6",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 10, "piercing"],
			range: "Melee (10 ft)",
			description: "Plus 4 (1d8) cold damage.",
		}, {
			name: "Claw",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Ice Walk",
			description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The dragon makes three attacks: one with its bite and two with its claws.",
		}, {
			name: "Cold Breath (Recharge 5-6)",
			description: "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.",
		}
		],
	},
	"Yuan-ti Abomination": {
		name: "Yuan-ti Abomination",
		source: ["Monster Manual", 308],
		size: "Large",
		type: "monstrosity (shapechanger, yuan-ti)",
		alignment: "neutral evil",
		ac: [15, "Natural Armor", false],
		hp: 127,
		hd: [15, 10],
		speed: "40 ft",
		scores: [19, 16, 17, 17, 15, 18],
		saves: ["", "", "", "", "", ""],
		skills: "Perception +5, Stealth +6",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "15",
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "7",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 10 (3d6) poison damage.",
		}, {
			name: "Constrict",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (10 ft)",
			description: "Target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target.",
		}, {
			name: "Scimitar (Abomination Form Only)",
			ability: 1,
			damage: [2, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Longbow (Abomination Form Only)",
			ability: 2,
			damage: [2, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "P7lus 10 (3d6) poison damage.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The yuan-ti can use its action to polymorph into a Large snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
		}, {
			name: "Innate Spellcasting (Abomination Form Only)",
			description: [
				"The yuan-ti's innate spellcasting ability is Charisma (spell save DC 15). The yuan-ti can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only)",
				"3/day: suggestion",
				"1/day: fear"
			]
		}, {
			name: "Magic Resistance",
			description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack (Abomination Form Only)",
			description: "The yuan-ti makes two ranged attacks or three melee attacks, but can use its bite and constrict attacks only once each."
		}
		],
	},
	"Yuan-ti Malison Type 1": {
		name: "Yuan-ti Malison Type 1",
		source: ["Monster Manual", 309],
		size: "Medium",
		type: "monstrosity (shapechanger, yuan-ti)",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 66,
		hd: [12, 8],
		speed: "30 ft",
		scores: [16, 14, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Stealth +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}, {
			name: "Scimitar (Yuan-ti Form Only)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Longbow (Yuan-ti Form Only)",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
		}, {
			name: "Innate Spellcasting (yuan-ti Form Only)",
			description: [
				"The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only)",
				"3/day: suggestion"
			]
		}, {
			name: "Magic Resistance",
			description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Malison Type",
			description: [
				"The yuan-ti has one of the following types:",
				"Type 1: Human body with snake head",
				"Type 2: Human head and body with snakes for arms",
				"Type 3: Human head and upper body with a serpentine lower body instead of legs"
			]
		}
		],
		actions: [{
			name: "Multiattack (Yuan-ti Form Only)",
			description: "The yuan-ti makes two ranged attacks or two melee attacks, but can use its bite only once."
		}
		],
	},
	"Yuan-ti Malison Type 2": {
		name: "Yuan-ti Malison Type 2",
		source: ["Monster Manual", 309],
		size: "Medium",
		type: "monstrosity (shapechanger, yuan-ti)",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 66,
		hd: [12, 8],
		speed: "30 ft",
		scores: [16, 14, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Stealth +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "3",
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
		}, {
			name: "Innate Spellcasting (yuan-ti Form Only)",
			description: [
				"The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only)",
				"3/day: suggestion"
			]
		}, {
			name: "Magic Resistance",
			description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Malison Type",
			description: [
				"The yuan-ti has one of the following types:",
				"Type 1: Human body with snake head",
				"Type 2: Human head and body with snakes for arms",
				"Type 3: Human head and upper body with a serpentine lower body instead of legs"
			]
		}
		],
		actions: [{
			name: "Multiattack (yuan-ti Form Only)",
			description: "The yuan-ti makes two bite attacks using its snake arms."
		}
		],
	},
	"Yuan-ti Malison Type 3": {
		name: "Yuan-ti Malison Type 3",
		source: ["Monster Manual", 309],
		size: "Medium",
		type: "monstrosity (shapechanger, yuan-ti)",
		alignment: "neutral evil",
		ac: [12, "", false],
		hp: 66,
		hd: [12, 8],
		speed: "30 ft",
		scores: [16, 14, 13, 14, 12, 16],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +5, Stealth +4",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "11",
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "3",
		attacks: [{
			name: "Bite (Snake Form Only)",
			ability: 1,
			damage: [1, 4, "piercing"],
			range: "Melee (5 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}, {
			name: "Constrict",
			ability: 1,
			damage: [2, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "Target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target.",
		}, {
			name: "Scimitar (Yuan-ti Form Only)",
			ability: 1,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Longbow (Yuan-ti Form Only)",
			ability: 2,
			damage: [1, 8, "piercing"],
			range: "Ranged (150/600 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Shapechanger",
			description: "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
		}, {
			name: "Innate Spellcasting (Yuan-ti Form Only)",
			description: [
				"The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only)",
				"3/day: suggestion"
			]
		}, {
			name: "Magic Resistance",
			description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
		}, {
			name: "Malison Type",
			description: [
				"The yuan-ti has one of the following types:",
				"Type 1: Human body with snake head",
				"Type 2: Human head and body with snakes for arms",
				"Type 3: Human head and upper body with a serpentine lower body instead of legs"
			]
		}
		],
		actions: [{
			name: "Multiattack (yuan-ti Form Only)",
			description: "The yuan-ti makes two ranged attacks or two melee attacks, but can constrict only once."
		}
		],
	},
	"Yuan-ti Pureblood": {
		name: "Yuan-ti Pureblood",
		source: ["Monster Manual", 310],
		size: "Medium",
		type: "humanoid (yuan-ti)",
		alignment: "neutral evil",
		ac: [11, "", false],
		hp: 40,
		hd: [9, 8],
		speed: "30 ft",
		scores: [11, 12, 11, 13, 12, 14],
		saves: ["", "", "", "", "", ""],
		skills: "Deception +6, Perception +3, Stealth +3",
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "darkvision 60 ft",
		passive_perception: "13",
		languages: "Abyssal, Common, Draconic",
		challenge_rating: "1",
		attacks: [{
			name: "Scimitar",
			ability: 2,
			damage: [1, 6, "slashing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Shortbow",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Ranged (80/320 ft)",
			description: "Plus 7 (2d6) poison damage.",
		}
		],
		traits: [{
			name: "Innate Spellcasting",
			description: [
				"The yuan-ti's spellcasting ability is Charisma (spell save DC 12). The yuan-ti can innately cast the following spells, requiring no material components:",
				"At will: animal friendship (snakes only)",
				"3/day each: poison spray, suggestion"
			]
		}, {
			name: "Magic Resistance",
			description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
		}
		],
		actions: [{
			name: "Multiattack",
			description: "The yuan-ti makes two melee attacks."
		}
		],
	},
	"Zombie": {
		name: "Zombie",
		source: ["Monster Manual", 316],
		size: "Medium",
		type: "Undead",
		alignment: "Neutral Evil",
		ac: [8, "", false],
		hp: 22,
		hd: [3, 8],
		speed: "20 ft",
		scores: [13, 6, 16, 3, 6, 5],
		saves: ["", "", "", "", 0, ""],
		damage_immunities: "poison",
		condition_immunities: "poisoned",
		senses: "Darkvision 60 ft",
		passive_perception: 8,
		languages: "understands all languages it knew in life but can't speak",
		challenge_rating: "1/4",
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}
		],
		traits: [{
			name: "Undead Fortitude",
			description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 @ the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
		}
		],
	},
};