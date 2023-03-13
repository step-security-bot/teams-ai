import { IMap, IMapLocation } from "../interfaces";

export function findMapLocation(name: string): IMapLocation|undefined {
    let key = name.toLowerCase().trim();
    if (key.startsWith('the ')) {
        key = key.substring('the '.length);
    }
    if (map.aliases.hasOwnProperty(key)) {
        key = map.aliases[key];
    }
    return map.locations[key];
}

export const map: IMap = {
    locations: {
        village: {
                id: 'village',
                name: 'Shadow Falls',
                description: 'A bustling settlement of small homes and shops, the Village of Shadow Falls is a friendly and welcoming place.',
                details: `A bustling settlement of small homes and shops, the Village of Shadow Falls is a friendly and welcoming place. The villagers are skilled in farming, fishing, hunting, and trading, and live in harmony with the land and each other. They have a simple but comfortable lifestyle, and enjoy festivals, music, and stories. They are also curious and adventurous, and often explore the surrounding areas, looking for clues and treasures from their ancient heritage. To the north are the Shadow Mountains, a rugged and dangerous land, rumored to be home to dragons and other mythical creatures. To the west is Shadow Lake, a peaceful and serene body of water, home to a booming fishing and logging industry. To the south is Shadowwood Forest, an ancient forest full of tall trees and thick foliage, home to many animals and plants, some of which have magical properties or are sacred to the villagers. To the east is the Desert of Shadows, a vast and desolate wasteland, home to bandits and hidden secrets.`,
                encounterChance: 0.05,
                prompt: 'prompt.txt',
                mapPaths: 'village->S:forest\nvillage->W:lake->N:river\nvillage->E:desert\nvillage->N:mountains\nvillage->E:desert->N:canyon\nvillage->W:lake\nvillage->W:lake->N:river->E:swamp\nvillage->E:desert->E:oasis\nvillage->W:lake->N:river->N:valley\nvillage->W:lake->N:river->N:valley->E:temple\nvillage->S:forest->S:cave\nvillage->E:desert->S:pyramids',
                north: 'mountains',
                west: 'lake',
                south: 'forest',
                east: 'desert'
            },
        forest: {
                id: 'forest',
                name: 'Shadowwood Forest',
                description: 'The ancient forest of Shadowwood is a sprawling wilderness full of tall trees and thick foliage.',
                details: `The ancient forest of Shadowwood is a sprawling wilderness full of tall trees and thick foliage. The forest is home to many animals and plants, some of which have magical properties or are sacred to the Zalari. The forest also hides some of the Zalari's secrets, such as hidden shrines, stone carvings, and portals. The forest is a source of food, medicine, and materials for the villagers of Shadow Falls, who respect and protect the forest and its inhabitants. The forest is also a source of adventure and danger for the villagers, who often encounter wild beasts, traps, and puzzles in the forest. The forest is also a source of mystery and wonder for the villagers, who sometimes hear strange noises, see glowing lights, or feel a presence in the forest. To the north is the village of Shadow Falls, a friendly and welcoming place, where the villagers are descendants of the Zalari. To the south is the Cave of the Ancients, a hidden and treacherous place, filled with strange echoes and whispers, where the Zalari used to explore other dimensions, realities, and possibilities.`,
                encounterChance: 0.4,
                mapPaths: 'forest->N:village\nforest->N:village->W:lake->N:river\nforest->N:village->E:desert\nforest->N:village->N:mountains\nforest->N:village->E:desert->N:canyon\nforest->N:village->W:lake\nforest->N:village->W:lake->N:river->E:swamp\nforest->N:village->E:desert->E:oasis\nforest->N:village->W:lake->N:river->N:valley\nforest->N:village->W:lake->N:river->N:valley->E:temple\nforest->S:cave\nforest->N:village->E:desert->S:pyramids',
                prompt: 'prompt.txt',
                north: 'village',
                south: 'cave'
            },
        river: {
                id: 'river',
                name: 'Shadow Falls River',
                description: 'A winding and treacherous path, the Shadow Falls River is a source of food for the villagers and home to dangerous creatures.',
                details: `A winding and treacherous path, the Shadow Falls River is a source of food for the villagers of Shadow Falls and home to dangerous creatures. The river is also a source of power for the Zalari, as they used it to create canals, aqueducts, and water wheels, some of which still function or can be repaired. The river is also a source of history and culture for the Zalari, as they used it to carve their symbols and stories on the rocks and bridges, some of which still can be read or interpreted. The river is also a source of challenge and exploration for the villagers, who often brave the rapids, the waterfalls, and the hidden passages in the river. To the north is the Valley of the Zalari, a mysterious and uncharted land, home to the ruins of their temples and monuments, where they showcased their achievements, beliefs, and legacy. To the west is Shadow Swamp, a murky and treacherous marsh, home to some of the most dangerous creatures in the region, where the Zalari disposed of their enemies, mistakes, and failures. To the south is Shadow Lake, a peaceful and serene body of water, home to a booming fishing and logging industry, where the Zalari reflected their art, music, and poetry. To the east are the Shadow Mountains, a rugged and dangerous land, rumored to be home to dragons and other mythical creatures, where the Zalari tested their courage, strength, and skill.`,
                encounterChance: 0.2,
                mapPaths: 'river->S:lake\nriver->S:lake->E:village\nriver->S:lake->E:village->S:forest\nriver->S:lake->E:village->E:desert\nriver->S:lake->E:village->N:mountains\nriver->S:lake->E:village->E:desert->N:canyon\nriver->E:swamp\nriver->S:lake->E:village->E:desert->E:oasis\nriver->N:valley\nriver->N:valley->E:temple\nriver->S:lake->E:village->S:forest->S:cave\nriver->S:lake->E:village->E:desert->S:pyramids',
                prompt: 'prompt.txt',
                north: 'valley',
                west: 'swamp',
                south: 'lake',
                east: 'mountains'
            },
        desert: {
                id: 'desert',
                name: 'Desert of Shadows',
                description: 'The Desert of Shadows is a vast and desolate wasteland, home to bandits and hidden secrets.',
                details: `The Desert of Shadows is a vast and desolate wasteland, home to bandits and hidden secrets. The desert is also a source of mystery for the Zalari, as they used it to study the stars, the sun, and the sand, some of which still reveal clues or wonders. The desert is also a source of hardship and survival for the villagers of Shadow Falls, who sometimes venture into the desert to trade, scavenge, or explore, but often face the harsh elements, the hostile inhabitants, and the deadly traps in the desert. The desert is also a source of awe and beauty for the villagers, who sometimes witness the spectacular sunrises, sunsets, and night skies in the desert, or find rare and valuable gems, metals, and artifacts in the desert. To the north is Shadow Canyon, a deep and treacherous ravine, where the walls are steep and jagged, and secrets are hidden within, where the Zalari hid their treasures, inventions, and experiments. To the west is the village of Shadow Falls, a friendly and welcoming place, where the villagers are descendants of the Zalari. To the south are the Pyramids of the Forgotten, ancient and majestic structures, built by the Zalari, where they stored their secrets, treasures, and mysteries, guarded by ancient and powerful creatures. To the east is the Oasis of the Lost, a lush and vibrant paradise, full of exotic flowers and the sweet smell of coconut, where the Zalari escaped from their troubles, regrets, and fears, some of which still remain or resurface.`,
                encounterChance: 0.2,
                mapPaths: 'desert->W:village\ndesert->W:village->S:forest\ndesert->W:village->W:lake->N:river\ndesert->W:village->N:mountains\ndesert->N:canyon\ndesert->W:village->W:lake\ndesert->W:village->W:lake->N:river->E:swamp\ndesert->E:oasis\ndesert->W:village->W:lake->N:river->N:valley\ndesert->W:village->W:lake->N:river->N:valley->E:temple\ndesert->W:village->S:forest->S:cave\ndesert->S:pyramids',
                prompt: 'prompt.txt',
                north: 'canyon',
                west: 'village',
                south: 'pyramids',
                east: 'oasis'
            },
        mountains: {
                id: 'mountains',
                name: 'Shadow Mountains',
                description: 'The Shadow Mountains are a rugged and dangerous land, rumored to be home to dragons and other mythical creatures.',
                details: `The Shadow Mountains are a rugged and dangerous land, rumored to be home to dragons and other mythical creatures. The mountains are also a source of challenge for the Zalari, as they used them to test their courage, strength, and skill, some of which still await adventurers or heroes. The mountains are also a source of isolation and protection for the villagers of Shadow Falls, who sometimes seek refuge or solitude in the mountains, but also face the perils and predators in the mountains. The mountains are also a source of wonder and discovery for the villagers, who sometimes find ancient ruins, hidden caves, or rare minerals in the mountains, or witness the breathtaking views, the snow-capped peaks, or the thundering storms in the mountains. To the west is the Shadow Falls River, a winding and treacherous path, where the Zalari carved their symbols and stories on the rocks and bridges, and created canals, aqueducts, and water wheels. To the south is the village of Shadow Falls, a friendly and welcoming place, where the villagers are descendants of the Zalari. To the east is Shadow Canyon, a deep and treacherous ravine, where the walls are steep and jagged, and secrets are hidden within, where the Zalari hid their treasures, inventions, and experiments.`,
                encounterChance: 0.2,
                mapPaths: 'mountains->S:village\nmountains->W:river\nmountains->W:river->S:lake\nmountains->E:canyon->S:desert->E:oasis\nmountains->W:river->E:swamp\nmountains->W:river->N:valley\nmountains->W:river->N:valley->E:temple\nmountains->S:village->S:forest\nmountains->S:village->S:forest->S:cave\nmountains->E:canyon\nmountains->E:canyon->S:desert\nmountains->E:canyon->S:desert->S:pyramids',
                prompt: 'prompt.txt',
                west: 'river',
                south: 'village',
                east: 'canyon'
            },
        canyon: {
                id: 'canyon',
                name: 'Shadow Canyon',
                description: 'Shadow Canyon is a deep and treacherous ravine, the walls are steep and jagged, and secrets are hidden within.',
                details: `Shadow Canyon is a deep and treacherous ravine, the walls are steep and jagged, and secrets are hidden within. The canyon is also a source of discovery for the Zalari, as they used it to hide their treasures, inventions, and experiments, some of which still can be found or activated. The canyon is also a source of danger and intrigue for the villagers of Shadow Falls, who sometimes explore the canyon to seek fortune, knowledge, or adventure, but also encounter the traps, the puzzles, and the guardians in the canyon. The canyon is also a source of awe and mystery for the villagers, who sometimes see the ancient machinery, the glowing crystals, or the mysterious portals in the canyon, or hear the rumbling noises, the eerie voices, or the strange music in the canyon. To the west are the Shadow Mountains, a rugged and dangerous land, rumored to be home to dragons and other mythical creatures, where the Zalari tested their courage, strength, and skill. To the south is the Desert of Shadows, a vast and desolate wasteland, home to bandits and hidden secrets, where the Zalari studied the stars, the sun, and the sand.`,
                encounterChance: 0.3,
                mapPaths: 'canyon->S:desert\ncanyon->S:desert->W:village\ncanyon->S:desert->W:village->S:forest\ncanyon->S:desert->W:village->W:lake->N:river\ncanyon->W:mountains\ncanyon->S:desert->W:village->E:desert\ncanyon->S:desert->W:village->W:lake\ncanyon->S:desert->W:village->W:lake->N:river->E:swamp\ncanyon->S:desert->E:oasis\ncanyon->S:desert->W:village->W:lake->N:river->N:valley\ncanyon->S:desert->W:village->W:lake->N:river->N:valley->E:temple\ncanyon->S:desert->W:village->S:forest->S:cave\ncanyon->S:desert->S:pyramids',
                prompt: 'prompt.txt',
                west: 'mountains',
                south: 'desert'
            },
        lake: {
                id: 'lake',
                name: 'Shadow Falls Lake',
                description: 'Shadow Falls Lake is a peaceful and serene body of water, home to a booming fishing and logging industry.',
                details: `Shadow Falls Lake is a peaceful and serene body of water, home to a booming fishing and logging industry. The lake is also a source of beauty for the Zalari, as they used it to reflect their art, music, and poetry, some of which still can be seen or heard. The lake is also a source of prosperity and cooperation for the villagers of Shadow Falls, who use the lake to provide food, materials, and trade for their community, and work together to maintain and improve the lake and its resources. The lake is also a source of leisure and fun for the villagers, who enjoy swimming, boating, and fishing in the lake, or relaxing, picnicking, and playing by the lake. To the north is Shadow Falls River, a winding and treacherous path, where the Zalari carved their symbols and stories on the rocks and bridges, and created canals, aqueducts, and water wheels. To the east is the village of Shadow Falls, a friendly and welcoming place, where the villagers are descendants of the Zalari.`,
                encounterChance: 0.2,
                mapPaths: 'lake->E:village\nlake->E:village->S:forest\nlake->N:river\nlake->E:village->E:desert\nlake->E:village->N:mountains\nlake->E:village->E:desert->N:canyon\nlake->N:river->E:swamp\nlake->E:village->E:desert->E:oasis\nlake->N:river->N:valley\nlake->N:river->N:valley->E:temple\nlake->E:village->S:forest->S:cave\nlake->E:village->E:desert->S:pyramids',
                prompt: 'prompt.txt',
                north: 'river',
                west: 'swamp',
                east: 'village'
            },
        swamp: {
                id: 'swamp',
                name: 'Shadow Swamp',
                description: 'Shadow Swamp is a murky and treacherous marsh, home to some of the most dangerous creatures in the region.',
                details: `Shadow Swamp is a murky and treacherous marsh, home to some of the most dangerous creatures in the region. The swamp is also a source of danger for the Zalari, as they used it to dispose of their enemies, mistakes, and failures, some of which still lurk or haunt. The swamp is also a source of fear and dread for the villagers of Shadow Falls, who avoid the swamp as much as possible, but sometimes have to enter the swamp to hunt, gather, or escape, but often face the horrors and hazards in the swamp. The swamp is also a source of disgust and fascination for the villagers, who sometimes encounter the foul smells, the slimy plants, or the grotesque mutations in the swamp, or discover the dark secrets, the hidden relics, or the forbidden magic in the swamp. To the east is Shadow Falls River, a winding and treacherous path, where the Zalari carved their symbols and stories on the rocks and bridges, and created canals, aqueducts, and water wheels.`,
                encounterChance: 0.3,
                mapPaths: 'swamp->W:river\nswamp->W:river->S:lake\nswamp->W:river->S:lake->E:village\nswamp->W:river->S:lake->E:village->S:forest\nswamp->W:river->S:lake->E:village->E:desert\nswamp->W:river->S:lake->E:village->N:mountains\nswamp->W:river->S:lake->E:village->E:desert->N:canyon\nswamp->W:river->S:lake->E:village->E:desert->E:oasis\nswamp->W:river->N:valley\nswamp->W:river->N:valley->E:temple\nswamp->W:river->S:lake->E:village->S:forest->S:cave\nswamp->W:river->S:lake->E:village->E:desert->S:pyramids',
                prompt: 'prompt.txt',
                east: 'river'
            },
        oasis: {
                id: 'oasis',
                name: 'Oasis of the Lost',
                description: 'The Oasis of the Lost is a lush and vibrant paradise, full of exotic flowers and the sweet smell of coconut.',
                details: `The Oasis of the Lost is a lush and vibrant paradise, full of exotic flowers and the sweet smell of coconut. The oasis is also a source of sorrow for the Zalari, as they used it to escape from their troubles, regrets, and fears, some of which still remain or resurface. The oasis is also a source of joy and comfort for the villagers of Shadow Falls, who sometimes visit the oasis to rest, heal, or celebrate, but also respect and honor the oasis and its gifts. The oasis is also a source of wonder and delight for the villagers, who sometimes see the colorful birds, the playful monkeys, or the sparkling waterfalls in the oasis, or find the delicious fruits, the fragrant herbs, or the precious pearls in the oasis. To the west is the Desert of Shadows, a vast and desolate wasteland, home to bandits and hidden secrets, where the Zalari studied the stars, the sun, and the sand.`,
                encounterChance: 0.1,
                mapPaths: 'oasis->W:desert->W:village->W:lake\noasis->W:desert->W:village\noasis->W:desert->W:village->W:river\noasis->W:desert->W:village->S:forest\noasis->W:desert->\noasis->W:desert->W:village->:mountains\noasis->W:desert->N:canyon\noasis->W:desert->W:village->W:river->E:swamp\noasis->W:desert->W:village->W:river->N:valley\noasis->W:desert->W:village->W:river->N:valley->E:temple\noasis->W:desert->W:village->S:forest->S:cave\noasis->W:desert->S:pyramids',
                prompt: 'prompt.txt',
                west: 'desert'
            },
        valley: {
                id: 'valley',
                name: 'Valley of the Zalari',
                description: 'The Valley of the Anasazi is a mysterious and uncharted land, home to the ruins of forgotten temples.',
                details: `The Valley of the Zalari is a mysterious and uncharted land, home to the ruins of their temples and monuments. The valley is also a source of awe for the Zalari, as they used it to showcase their achievements, beliefs, and legacy, some of which still inspire or impress. The valley is also a source of curiosity and reverence for the villagers of Shadow Falls, who sometimes explore the valley to learn, worship, or honor, but also face the puzzles, the traps, and the guardians in the valley. The valley is also a source of pride and hope for the villagers, who sometimes see the majestic statues, the intricate carvings, or the glowing runes in the valley, or feel the ancient magic, the divine presence, or the ancestral connection in the valley. To the south is Shadow Falls River, a winding and treacherous path, where the Zalari carved their symbols and stories on the rocks and bridges, and created canals, aqueducts, and water wheels. To the east is the Zalari Temple, the abandoned and crumbling ruin, where the Zalari harnessed their magic, knowledge, and destiny, some of which still work or await.`,
                encounterChance: 0.3,
                mapPaths: 'valley->S:river\nvalley->S:river->S:lake\nvalley->S:river->S:lake->E:village\nvalley->S:river->S:lake->E:village->S:forest\nvalley->S:river->S:lake->E:village->E:desert\nvalley->S:river->S:lake->E:village->N:mountains\nvalley->S:river->S:lake->E:village->E:desert->N:canyon\nvalley->S:river->S:lake->N:river->E:swamp\nvalley->S:river->S:lake->E:village->E:desert->E:oasis\nvalley->E:temple\nvalley->S:river->S:lake->E:village->S:forest->S:cave\nvalley->S:river->S:lake->E:village->E:desert->S:pyramids',
                prompt: 'prompt.txt',
                south: 'river',
                east: 'temple'
            },
        temple: {
                id: 'temple',
                name: 'Zalari Temple',
                description: 'The abandoned Anasazi Temple is a forgotten and crumbling ruin, its walls covered in vines and ancient symbols.',
                details: `The abandoned Zalari Temple is a forgotten and crumbling ruin, its walls covered in vines and ancient symbols. The temple is also a source of power for the Zalari, as they used it to harness their magic, knowledge, and destiny, some of which still work or await. The temple is also a source of danger and temptation for the villagers of Shadow Falls, who sometimes enter the temple to seek power, wisdom, or fate, but also encounter the curses, the secrets, and the choices in the temple. The temple is also a source of wonder and mystery for the villagers, who sometimes see the arcane devices, the hidden chambers, or the mysterious artifacts in the temple, or hear the chanting voices, the cryptic messages, or the ominous warnings in the temple. To the west is the Valley of the Zalari, a mysterious and uncharted land, home to the ruins of their temples and monuments, where they showcased their achievements, beliefs, and legacy.`,
                encounterChance: 0.4,
                mapPaths: 'temple->W:valley\ntemple->W:valley->S:river\ntemple->W:valley->S:river->S:lake\ntemple->W:valley->S:river->S:lake->E:village\ntemple->W:valley->S:river->S:lake->E:village->S:forest\ntemple->W:valley->S:river->S:lake->E:village->E:desert\ntemple->W:valley->S:river->S:lake->E:village->N:mountains\ntemple->W:valley->S:river->S:lake->E:village->E:desert->N:canyon\ntemple->W:valley->S:river->S:lake->N:river->E:swamp\ntemple->W:valley->S:river->S:lake->E:village->E:desert->E:oasis\ntemple->W:valley->S:river->S:lake->E:village->S:forest->S:cave\ntemple->W:valley->S:river->S:lake->E:village->E:desert->S:pyramids',
                prompt: 'prompt.txt',
                west: 'valley'
            },
        cave: {
                id: 'cave',
                name: 'Cave of the Ancients',
                description: 'The Cave of the Ancients is a hidden and treacherous place, filled with strange echoes and whispers.',
                details: `The Cave of the Ancients is a hidden and treacherous place, filled with strange echoes and whispers. The cave is also a source of wonder for the Zalari, as they used it to explore other dimensions, realities, and possibilities, some of which still exist or beckon. The cave is also a source of madness and obsession for the villagers of Shadow Falls, who sometimes venture into the cave to seek other worlds, truths, or experiences, but also face the illusions, the dangers, and the consequences in the cave. The cave is also a source of fear and fascination for the villagers, who sometimes see the bizarre shapes, the shifting colors, or the unknown entities in the cave, or feel the distorted time, the altered space, or the foreign sensations in the cave. To the north is Shadowwood Forest, an ancient forest full of tall trees and thick foliage, home to many animals and plants, some of which have magical properties or are sacred to the Zalari, where they hid their shrines, stone carvings, and portals.`,
                encounterChance: 0.5,
                mapPaths: 'cave->N:forest\ncave->N:forest->N:village\ncave->N:forest->N:village->W:lake->N:river\ncave->N:forest->N:village->E:desert\ncave->N:forest->N:village->N:mountains\ncave->N:forest->N:village->E:desert->N:canyon\ncave->N:forest->N:village->W:lake\ncave->N:forest->N:village->W:lake->N:river->E:swamp\ncave->N:forest->N:village->E:desert->E:oasis\ncave->N:forest->N:village->W:lake->N:river->N:valley\ncave->N:forest->N:village->W:lake->N:river->N:valley->E:temple\ncave->N:forest->N:village->E:desert->S:pyramids',
                prompt: 'prompt.txt',
                north: 'forest'
            },
        pyramids: {
                id: 'pyramids',
                name: 'Pyramids of the Forgotten',
                description: 'The ancient Pyramids of the Forgotten, built by the Anuket, are home to powerful magic, guarded by ancient and powerful creatures.',
                details: `he ancient Pyramids of the Forgotten, built by the Zalari, are home to powerful magic, guarded by ancient and powerful creatures. The pyramids are also a source of mystery for the Zalari, as they used them to store their secrets, treasures, and mysteries, some of which still are hidden or guarded. The pyramids are also a source of greed and ambition for the villagers of Shadow Falls, who sometimes try to enter the pyramids to loot, claim, or unlock, but also face the riddles, the traps, and the protectors in the pyramids. The pyramids are also a source of awe and respect for the villagers, who sometimes see the grand architecture, the elaborate decorations, or the impressive statues in the pyramids, or feel the ancient energy, the sacred aura, or the noble spirit in the pyramids. To the north is the Desert of Shadows, a vast and desolate wasteland, home to bandits and hidden secrets, where the Zalari studied the stars, the sun, and the sand.`,
                encounterChance: 0.4,
                mapPaths: 'pyramids->N:desert\npyramids->N:desert->W:village\npyramids->N:desert->W:village->S:forest\npyramids->N:desert->W:village->W:lake->N:river\npyramids->N:desert->W:village->N:mountains\npyramids->N:desert->N:canyon\npyramids->N:desert->W:village->W:lake\npyramids->N:desert->W:village->W:lake->N:river->E:swamp\npyramids->N:desert->E:oasis\npyramids->N:desert->W:village->W:lake->N:river->N:valley\npyramids->N:desert->W:village->W:lake->N:river->N:valley->E:temple\npyramids->N:desert->W:village->S:forest->S:cave',
                prompt: 'prompt.txt',
                north: 'desert'
            }
    },
    aliases: {
        'shadow falls': 'village',
        'town': 'village',
        'city': 'village',
        'market': 'village',
        'shops': 'village',
        'home': 'village',
        'base': 'village',
        'shadowwood forest': 'forest',
        'shadow forest': 'forest',
        'shadow falls forest': 'forest',
        'woods': 'forest',
        'trees': 'forest',
        'shadow falls river': 'river',
        'shadow river': 'river',
        'rivers': 'river',
        'desert of shadows': 'desert',
        'shadow falls desert': 'desert',
        'shadow desert': 'desert',
        'shadow mountains': 'mountains',
        'shadow falls mountain': 'mountains',
        'mountain': 'mountain',
        'shadow canyon': 'canyon',
        'shadow falls canyon': 'canyon',
        'canyons': 'canyon',
        'shadow falls lake': 'lake',
        'shadow lake': 'lake',
        'lakes': 'lake',
        'shadow swamp': 'swamp',
        'shadow fallse swamp': 'swamp',
        'swamps': 'swamp',
        'oasis of the lost': 'oasis',
        'lost oasis': 'oasis',
        'valley of the zalari': 'valley',
        'zalari valley': 'valley',
        'shadow valley': 'valley',
        'shadow falls valley': 'valley',
        'anasazi temple': 'temple',
        'shadow temple': 'temple',
        'shadow falls temple': 'temple',
        'temples': 'temple',
        'cave of the ancients': 'cave',
        'shadow falls cave': 'cave',
        'shadow cave': 'cave',
        'hidden cave': 'cave',
        'caves': 'cave',
        'pyramids of the forgotten': 'pyramids',
        'forgotten pyramids': 'pyramids',
        'shadow pyramids': 'pyramids',
        'shadow pyramid': 'pyramids',
        'shadow falls pyramids': 'pyramids',
        'shadow falls pyramid': 'pyramids',
        'pyramid': 'pyramids'
    }
};
