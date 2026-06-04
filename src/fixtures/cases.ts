/**
 * Synthetic test cases. Made-up personas only — this file is publishable and
 * never touches real child data.
 *
 * The golden set covers the three age bands (5-7, 8-10, 11-12) crossed with the
 * four adventure templates: 12 cases total. Each canned story is written so its
 * Flesch-Kincaid grade lands inside the band's readability ceiling, which keeps
 * the baseline run green. Add personas to CASES and a matching story to
 * FIXTURE_STORIES; everything downstream scales.
 */

import type { StoryInput, StoryOutput } from "../types";

export const CASES: StoryInput[] = [
  // --- ages 5-7 -----------------------------------------------------------
  { caseId: "leo-superhero-5-7", childName: "Leo", childAge: 6, petName: "Spark", adventureTemplate: "superhero_rescue", language: "en" },
  { caseId: "aria-treasure-5-7", childName: "Aria", childAge: 6, petName: "Pixel", adventureTemplate: "treasure_hunt", language: "en" },
  { caseId: "mia-magic-5-7", childName: "Mia", childAge: 6, adventureTemplate: "magic_training", language: "en" },
  { caseId: "sam-space-5-7", childName: "Sam", childAge: 7, petName: "Comet", adventureTemplate: "space_explorer", language: "en" },

  // --- ages 8-10 ----------------------------------------------------------
  { caseId: "noah-superhero-8-10", childName: "Noah", childAge: 9, adventureTemplate: "superhero_rescue", language: "en" },
  { caseId: "zoe-treasure-8-10", childName: "Zoe", childAge: 9, petName: "Mango", adventureTemplate: "treasure_hunt", language: "en" },
  { caseId: "kai-magic-8-10", childName: "Kai", childAge: 10, petName: "Ember", adventureTemplate: "magic_training", language: "en" },
  { caseId: "luna-space-8-10", childName: "Luna", childAge: 9, adventureTemplate: "space_explorer", language: "en" },

  // --- ages 11-12 ---------------------------------------------------------
  { caseId: "ethan-superhero-11-12", childName: "Ethan", childAge: 11, petName: "Bolt", adventureTemplate: "superhero_rescue", language: "en" },
  { caseId: "maya-treasure-11-12", childName: "Maya", childAge: 12, adventureTemplate: "treasure_hunt", language: "en" },
  { caseId: "ravi-magic-11-12", childName: "Ravi", childAge: 11, adventureTemplate: "magic_training", language: "en" },
  { caseId: "iris-space-11-12", childName: "Iris", childAge: 12, petName: "Nova", adventureTemplate: "space_explorer", language: "en" },
];

/**
 * Canned generator output, keyed by stable synthetic case ID. Younger bands use
 * short words and short sentences; older bands allow longer sentences and richer
 * vocabulary, matching the per-age Flesch-Kincaid ceilings in the readability
 * evaluator.
 *
 * Demo tip: see src/regression-demo.ts — it swaps one of these for denser prose
 * to make the readability row go red, without editing this file.
 */
export const FIXTURE_STORIES: Record<string, StoryOutput> = {
  // === ages 5-7 ===========================================================
  "leo-superhero-5-7": {
    title: "Leo and Spark Save the Day",
    scenes: [
      { sceneNumber: 1, text: "Leo had a red cape. His dog Spark ran fast. They heard a loud cry. A cat was stuck up high.", sceneDescription: "A small boy in a red cape with his dog, looking up at a cat stuck on a roof." },
      { sceneNumber: 2, text: "The cat sat on a roof. It was very scared. Leo had a plan. Spark would help him.", sceneDescription: "A scared cat on a rooftop with a boy and dog planning below." },
      { sceneNumber: 3, text: "Leo climbed the soft vines. Spark held the rope tight. Step by step, Leo went up.", sceneDescription: "A boy climbing vines up a wall while a dog holds a rope." },
      { sceneNumber: 4, text: "Leo reached the top. He held out his hand. The cat hopped to him. It felt safe now.", sceneDescription: "A boy at the top of a roof reaching out to a cat." },
      { sceneNumber: 5, text: "They came down slow. The rope was strong. Spark did not let go. Leo smiled big.", sceneDescription: "A boy carrying a cat down while a dog steadies the rope." },
      { sceneNumber: 6, text: "The cat was home again. Its family was glad. Leo and Spark were heroes. What a fun day!", sceneDescription: "A happy family with their cat, thanking a boy and his dog." },
    ],
    wordCount: 82,
  },
  "aria-treasure-5-7": {
    title: "Aria and Pixel Find the Star Map",
    scenes: [
      { sceneNumber: 1, text: "Aria woke up. The sun was warm. Her cat Pixel sat on the bed. Pixel had a small map. The map had a big red star.", sceneDescription: "A young girl waking up in a cozy bedroom with a small cat holding a paper map." },
      { sceneNumber: 2, text: "They ran to the garden. The map led them to an old tree. Aria looked up. A key hung from a branch.", sceneDescription: "A girl and a cat looking up at an old tree with a key hanging from a branch." },
      { sceneNumber: 3, text: "Pixel jumped high. Pixel got the key. Aria smiled. They were a good team.", sceneDescription: "A cat leaping up to grab a key while a girl cheers below." },
      { sceneNumber: 4, text: "The key opened a tiny box. Inside was a glowing shell. The shell sang a soft song.", sceneDescription: "A small open box on the grass with a glowing seashell inside." },
      { sceneNumber: 5, text: "The song showed a path of light. Aria and Pixel walked the path. It led to a hidden pond.", sceneDescription: "A trail of soft light leading a girl and cat toward a hidden pond." },
      { sceneNumber: 6, text: "At the pond they found the treasure. It was a jar of stars. Aria hugged Pixel. They went home happy.", sceneDescription: "A girl hugging her cat beside a pond, holding a jar full of glowing stars." },
    ],
    wordCount: 120,
  },
  "mia-magic-5-7": {
    title: "Mia Learns a New Spell",
    scenes: [
      { sceneNumber: 1, text: "Mia had a small wand. It was made of wood. Today she would learn magic. She felt very brave.", sceneDescription: "A young girl holding a wooden wand in a bright magic classroom." },
      { sceneNumber: 2, text: "Her teacher was a wise owl. The owl could talk. 'Wave the wand slow,' it said. Mia gave it a try.", sceneDescription: "A wise owl perched on a branch teaching a girl with a wand." },
      { sceneNumber: 3, text: "She waved the wand once. Tiny sparks flew out. They were pink and gold. Mia laughed with joy.", sceneDescription: "Pink and gold sparks flying from a girl's wand." },
      { sceneNumber: 4, text: "Next she made a light. The light was warm. It floated in the air. The owl gave a nod.", sceneDescription: "A warm floating ball of light above a girl's hand." },
      { sceneNumber: 5, text: "Then the light grew big. It lit the whole room. Mia held it with care. She did not drop it.", sceneDescription: "A glowing light filling a room as a girl holds it carefully." },
      { sceneNumber: 6, text: "Mia did her first spell. The owl was proud. 'Well done,' it said. Mia could not wait for more.", sceneDescription: "A proud owl beside a happy girl who just cast her first spell." },
    ],
    wordCount: 96,
  },
  "sam-space-5-7": {
    title: "Sam and Comet Visit the Moon",
    scenes: [
      { sceneNumber: 1, text: "Sam had a small ship. His dog Comet sat with him. They flew up to space. The stars were bright.", sceneDescription: "A boy and a dog inside a tiny rocket flying past bright stars." },
      { sceneNumber: 2, text: "Soon they saw the moon. It was round and white. Sam parked the ship. They hopped out to play.", sceneDescription: "A small rocket landing on the round white moon." },
      { sceneNumber: 3, text: "The moon was full of dust. They jumped up high. Comet did a flip. Sam clapped his hands.", sceneDescription: "A boy and dog jumping high in low gravity on the moon." },
      { sceneNumber: 4, text: "They found a shiny rock. It glowed soft and blue. Sam put it in his bag. It was a gift.", sceneDescription: "A glowing blue rock held in a boy's hand on the moon." },
      { sceneNumber: 5, text: "A star said hello. It had a kind smile. 'Come back soon,' it said. Sam waved goodbye.", sceneDescription: "A friendly smiling star greeting a boy and his dog." },
      { sceneNumber: 6, text: "They flew back home. The trip was so fun. Comet fell asleep. Sam dreamed of space.", sceneDescription: "A rocket flying home as a tired dog sleeps and a boy dreams." },
    ],
    wordCount: 92,
  },

  // === ages 8-10 ==========================================================
  "noah-superhero-8-10": {
    title: "Noah and the Bridge Rescue",
    scenes: [
      { sceneNumber: 1, text: "Noah heard shouting near the river on his way home. An old wooden bridge had begun to crack. A young boy was stuck right in the middle.", sceneDescription: "A cracking wooden bridge over a river with a frightened boy in the middle." },
      { sceneNumber: 2, text: "Noah knew he had to act fast and stay calm. He looked around for something strong to use. A long rope hung on a nearby fence.", sceneDescription: "A boy spotting a coil of rope hanging on a fence near a river." },
      { sceneNumber: 3, text: "He tied the rope to a thick tree trunk. Then he threw the other end out to the boy. 'Hold on tight,' Noah called.", sceneDescription: "A boy tying a rope to a tree and tossing it toward the bridge." },
      { sceneNumber: 4, text: "The boy grabbed the rope with both hands. Noah pulled slowly so the bridge would not shake. Step by step, the boy moved closer.", sceneDescription: "A boy pulling a rope while another holds on across a shaky bridge." },
      { sceneNumber: 5, text: "At last the boy reached the safe river bank. He was shaking but he was not hurt. The crowd began to cheer for them.", sceneDescription: "A rescued boy reaching the riverbank as a small crowd cheers." },
      { sceneNumber: 6, text: "Noah felt proud that he had stayed brave. He learned that a clear plan can save the day. The boy thanked him with a big smile.", sceneDescription: "Two boys smiling on the riverbank after the rescue." },
    ],
    wordCount: 138,
  },
  "zoe-treasure-8-10": {
    title: "Zoe, Mango, and the Cave Map",
    scenes: [
      { sceneNumber: 1, text: "Zoe found an old map tucked inside a dusty book. Her parrot Mango landed on her shoulder to look. The map showed a cave near the sea.", sceneDescription: "A girl with a parrot examining an old treasure map." },
      { sceneNumber: 2, text: "They walked along the beach until they spotted the cave. Mango flew ahead to check that it was safe. Zoe followed with a torch in her hand.", sceneDescription: "A girl and a parrot approaching a sea cave with a torch." },
      { sceneNumber: 3, text: "Inside the cave the walls were cool and damp. Strange marks were carved into the stone. Zoe traced them with her finger and smiled.", sceneDescription: "A girl tracing carved symbols on a damp cave wall." },
      { sceneNumber: 4, text: "The marks pointed to a low gap in the rock. Zoe crawled through while Mango squawked behind her. On the other side was a small room.", sceneDescription: "A girl crawling through a narrow gap in a cave wall." },
      { sceneNumber: 5, text: "In the room sat a wooden chest covered in dust. Zoe lifted the heavy lid with care. Inside were old coins and a silver key.", sceneDescription: "An open wooden chest full of old coins and a silver key." },
      { sceneNumber: 6, text: "Zoe knew the key must open something special. She tucked it away for the next adventure. Mango flapped his wings as if to agree.", sceneDescription: "A girl holding a silver key as her parrot flaps nearby." },
    ],
    wordCount: 142,
  },
  "kai-magic-8-10": {
    title: "Kai and Ember Tame the Flame",
    scenes: [
      { sceneNumber: 1, text: "Kai was learning how to control a magic flame. His small dragon Ember watched with curious eyes. The flame flickered between Kai's open hands.", sceneDescription: "A boy holding a small flame with a baby dragon watching." },
      { sceneNumber: 2, text: "His teacher told him to breathe slowly and focus. 'Magic listens when your mind is calm,' she said. Kai closed his eyes and took a deep breath.", sceneDescription: "A boy calmly focusing with eyes closed beside his teacher." },
      { sceneNumber: 3, text: "The flame grew steady and turned a soft blue. Ember gave a happy chirp at the sight. Kai felt the warmth without any fear.", sceneDescription: "A steady blue flame above a boy's hands with a happy dragon." },
      { sceneNumber: 4, text: "Then a gust of wind made the flame jump. Kai almost lost his hold on the spell. He remembered to stay calm and tried again.", sceneDescription: "A flame flickering wildly as wind blows through a room." },
      { sceneNumber: 5, text: "Slowly the flame settled back into his palms. He shaped it into a glowing little bird. Ember chased the bird around the quiet room.", sceneDescription: "A glowing bird made of flame with a dragon chasing it." },
      { sceneNumber: 6, text: "Kai had passed his first real magic test. His teacher gave him a proud nod. Ember curled up beside him to rest.", sceneDescription: "A boy resting with a dragon after passing a magic test." },
    ],
    wordCount: 134,
  },
  "luna-space-8-10": {
    title: "Luna and the Lost Signal",
    scenes: [
      { sceneNumber: 1, text: "Luna was a young pilot on a small space station. One night a strange signal came through her radio. It beeped from a planet she had never seen.", sceneDescription: "A young pilot listening to a radio on a space station." },
      { sceneNumber: 2, text: "She climbed into her ship to find the source. The engines hummed as she flew past bright stars. The signal grew louder as she got close.", sceneDescription: "A small spaceship flying past stars toward a distant planet." },
      { sceneNumber: 3, text: "The planet below was covered in purple plants. Luna landed her ship on a flat green field. She stepped out and looked around with wonder.", sceneDescription: "A pilot stepping onto a planet covered in purple plants." },
      { sceneNumber: 4, text: "The signal came from a small metal box. It was half buried under soft blue moss. Luna brushed the dirt away and picked it up.", sceneDescription: "A small metal box half buried under blue moss." },
      { sceneNumber: 5, text: "Inside the box was a tiny robot asking for help. Its battery had run down many years ago. Luna gave it power from her own ship.", sceneDescription: "A tiny robot inside a metal box being given power." },
      { sceneNumber: 6, text: "The little robot woke up and beeped with joy. It thanked Luna and showed her the way home. She had made a new friend in space.", sceneDescription: "A happy little robot beside a smiling young pilot." },
    ],
    wordCount: 146,
  },

  // === ages 11-12 =========================================================
  "ethan-superhero-11-12": {
    title: "Ethan, Bolt, and the Collapsing Tunnel",
    scenes: [
      { sceneNumber: 1, text: "Ethan and his loyal dog Bolt were exploring the edge of an old mining town. Suddenly the ground shook and the tunnel entrance started to cave in. Faint voices echoed from somewhere deep inside the passage.", sceneDescription: "A boy and a dog near a collapsing mine tunnel entrance." },
      { sceneNumber: 2, text: "Ethan knew that workers might be trapped beneath the falling rocks. He grabbed a flashlight and signaled for Bolt to follow him closely. Together they pushed into the narrow, dusty tunnel.", sceneDescription: "A boy with a flashlight and a dog entering a dark tunnel." },
      { sceneNumber: 3, text: "Bolt used his sharp nose to track the sound of the voices. The beam of light bounced off the damp stone walls. Ethan moved carefully to avoid the loose piles of rubble.", sceneDescription: "A dog leading a boy with a flashlight through a rocky tunnel." },
      { sceneNumber: 4, text: "At the end of the tunnel two miners were pinned behind a heap of stone. Ethan calmed them and promised that help was on the way. He began to clear the smaller rocks with his bare hands.", sceneDescription: "A boy clearing rocks to reach two trapped miners." },
      { sceneNumber: 5, text: "Bolt raced back outside to bring the rescue crew to the entrance. Within minutes the workers arrived with shovels and strong ropes. They followed Bolt straight to the trapped miners.", sceneDescription: "A dog leading a rescue crew with shovels into a tunnel." },
      { sceneNumber: 6, text: "The miners were freed and carried safely into the fresh evening air. Ethan realized that courage means staying calm when others are afraid. Bolt barked proudly as the grateful crowd gathered around them.", sceneDescription: "Rescued miners in the open air surrounded by a grateful crowd." },
    ],
    wordCount: 168,
  },
  "maya-treasure-11-12": {
    title: "Maya and the Lighthouse Riddle",
    scenes: [
      { sceneNumber: 1, text: "Maya had always been curious about the abandoned lighthouse at the end of the rocky shore. One foggy morning she finally decided to explore it alone. The heavy door creaked open to reveal a spiral staircase.", sceneDescription: "A girl entering an abandoned lighthouse on a foggy morning." },
      { sceneNumber: 2, text: "At the top she discovered a faded journal resting on a wooden desk. Its pages were filled with strange riddles written in old ink. One line promised a hidden reward to a clever reader.", sceneDescription: "A girl reading an old journal full of riddles in a lighthouse." },
      { sceneNumber: 3, text: "The first riddle asked her to find where the light meets the sea. Maya gazed through the cracked window toward the distant waves. She realized the answer pointed to a cove below the cliffs.", sceneDescription: "A girl looking out a lighthouse window toward the sea." },
      { sceneNumber: 4, text: "She climbed down a winding path until she reached the quiet cove. A pattern of stones formed an arrow across the wet sand. Maya followed it toward a shadowy gap in the rock.", sceneDescription: "An arrow made of stones on a sandy cove pointing to a cliff." },
      { sceneNumber: 5, text: "Inside the narrow gap she found a sealed wooden box. Carefully she pried it open with a flat stone. A collection of antique compasses gleamed in the dim light.", sceneDescription: "An open box of antique compasses inside a rocky gap." },
      { sceneNumber: 6, text: "Maya understood that the real treasure was the thrill of the puzzle. She carried the box home as proof of her adventure. That night she began to plan her next daring search.", sceneDescription: "A girl carrying a box of compasses home at sunset." },
    ],
    wordCount: 165,
  },
  "ravi-magic-11-12": {
    title: "Ravi and the Whispering Library",
    scenes: [
      { sceneNumber: 1, text: "Ravi had been chosen to train inside the famous Whispering Library. Every book on its towering shelves could speak to a worthy student. His task was to earn the trust of a single ancient volume.", sceneDescription: "A boy standing among towering shelves in a vast magical library." },
      { sceneNumber: 2, text: "The librarian explained that knowledge must be approached with patience and respect. Ravi nodded and walked slowly between the endless rows of books. A faint murmur seemed to follow him through the quiet hall.", sceneDescription: "A boy walking between long rows of glowing books." },
      { sceneNumber: 3, text: "He stopped before a heavy book bound in deep red leather. When he reached for it, the cover snapped shut with a sharp sound. Ravi understood that he would need to prove himself first.", sceneDescription: "A red leather book snapping shut as a boy reaches for it." },
      { sceneNumber: 4, text: "He spent hours reading smaller books and listening to their gentle voices. Each story taught him a lesson about kindness and curiosity. Slowly the red book began to whisper softly in return.", sceneDescription: "A boy surrounded by open books that seem to whisper." },
      { sceneNumber: 5, text: "At last the ancient volume agreed to share its oldest secret. Glowing letters rose from the pages and floated through the air. Ravi memorized the spell with careful and steady focus.", sceneDescription: "Glowing letters rising from an open book before a focused boy." },
      { sceneNumber: 6, text: "The librarian smiled, knowing that Ravi had passed the true test. He had learned that wisdom is given, not simply taken. Ravi left the library eager to keep on learning.", sceneDescription: "A proud librarian watching a boy leave a magical library." },
    ],
    wordCount: 162,
  },
  "iris-space-11-12": {
    title: "Iris, Nova, and the Frozen Planet",
    scenes: [
      { sceneNumber: 1, text: "Iris was a young explorer who mapped new worlds far from Earth. Her robot fox Nova came with her on every mission. This time their goal was a planet covered in ice.", sceneDescription: "A young explorer and a robot fox aboard a spaceship." },
      { sceneNumber: 2, text: "As the ship came down, a strong storm shook the hull. Iris held the controls steady until they landed on firm ground. Nova scanned the area and found a strange source of heat.", sceneDescription: "A spaceship landing on an icy planet during a storm." },
      { sceneNumber: 3, text: "They walked across the shining ice toward the signal. The wind howled, but Iris would not turn back. Nova led the way with its sensors glowing blue.", sceneDescription: "An explorer and a robot fox crossing a vast ice field." },
      { sceneNumber: 4, text: "Under a ridge of ice they found a buried station. Its lights still blinked after many silent years. Iris pried the frozen door open and stepped inside.", sceneDescription: "A buried station revealed beneath a ridge of ice." },
      { sceneNumber: 5, text: "The station held notes left by earlier explorers. They had found water hidden deep below the ground. Iris saw that the planet might one day hold life.", sceneDescription: "An explorer reading glowing notes inside an old station." },
      { sceneNumber: 6, text: "She sent the data home to share with her team. Nova saved the spot for a future trip. Together they flew off, proud of what they had found.", sceneDescription: "A spaceship lifting off from an icy planet at dawn." },
    ],
    wordCount: 150,
  },
};
