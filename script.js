// Story object
const story = {
  1: {
    text: "As a space-age private detective, you find yourself immersed in the complexities of the new Mars Federation. However, the suffocating atmosphere of red tape and politics has finally taken its toll on you. You yearn to distance yourself from aiding others, yet you're trapped by your singular expertise - the unravelling of enigmatic puzzles has become an intrinsic part of your very being. In a twist of fate, you receive a summons to investigate an abandoned space trawler, owned by a humble moisture farmer who maintains familial ties with New Earth-2. Pondering the intriguing connection between such associations and his occupation, the enigmatic role of the moisture farmer consumes your thoughts. But before you can delve further into these musings, the jolt of artificial gravity shifting abruptly reminds you of your arrival as your pilot expertly docks onto the trawler. The distinct scent of synthetic gravity fills the air, a constant reminder of the surreal nature of your surroundings. It's a fragrance you will never quite grow accustomed to, as it serves as a poignant reminder that violence is not the solution to the mysteries that lie ahead.",
    options: [
      { text: "Stand Up", next: 2, img: "https://w0.peakpx.com/wallpaper/111/269/HD-wallpaper-giant-spaceship-galaxy-stars-planet-surface-sci-fi.jpg" },
    ]
  },
  2: {
    text: "You rise to your feet, adjusting the holster of your trusty mag-pistol. In a world where advanced technology reigns supreme, you remain a staunch advocate of magnet propulsion slugs, a relic of a bygone era. As the sole individual on this side of Eris-9 who still relies on this archaic ammunition, you understand that these bullets possess a unique quality: they shred through armor rather than scorching it. With every step you take, the weight of your next choice hangs in the air, a decision to cling to a future to fear or look forward to. ",
    options: [
      { text: "Look Around", next: 25, img: "https://preview.redd.it/view-from-a-cockpit-of-a-giant-spaceship-realistic-detailed-v0-xs6f5qoprdja1.png?width=1568&format=png&auto=webp&v=enabled&s=aa8460104c4e008dc95e3dd9bf8dcad1fe4b3966" },  { text: "Look out the porthole", next: 3}, {text: "Head for the Docking Bay", next: 4
    } 
      
    ]
  },
  
  3: {
    text: "As your gaze fixates on the vast expanse before you, an abyss stretching out into the unknown, you can't help but succumb to a profound sense of emptiness. It is a void that pervades your very being, despite the fact that you were born and raised within its grasp. While others may perceive majesty in this boundless space, your emotions are tinged with an overwhelming feeling of insignificance and fear. The sheer magnitude of the cosmos overwhelms you, dwarfing your existence to a mere speck in the grand tapestry of the universe. The weight of your own mortality presses upon you, a reminder of your vulnerability amidst the cosmic chaos. Despite the wonders and possibilities that this expansive frontier offers, you are acutely aware of your own limitations and the fragility of your existence within this infinite realm. In the face of the unknown, you are filled with trepidation, a visceral reaction to the unfathomable depths that surround you.", 
   options:[
    { text: "Look Around", next: 25, img: "https://preview.redd.it/astronaut-looking-out-a-spaceships-window-v0-lei5qymckdra1.jpg?width=640&crop=smart&auto=webp&s=107f1d0730b5817536de32369c02c2598e2e78e1"},  { text: "Look out the porthole", next: 3}, {text: "Head for the Docking Bay", next: 4
  } 
   ]
  },
  4:{
    text:"With measured steps, you traverse the high-tech bridge that extends from your ship to the docking bay of the next vessel in the scene. As you step foot onto the docking bay, your senses struggle to adapt to the artificial oxygen and gravity, a stark reminder of the alien environment you find yourself in. Immediately, a sense of unease creeps over you, like a shroud of silence that envelops the entire vessel. Something is amiss, and it becomes evident as you take in your surroundings. Despite the engine having been powered down, the absence of bustling activity is unsettling. A moisture farmer's trawler typically accommodates a minimum of ten, yet not a single soul makes their presence known. The disquieting stillness hangs in the air, leaving you with a sense of foreboding. Your eyes scan the area, drawn to three doorways beckoning from different directions. To the north, west, and east, these paths promise unknown discoveries, but also potential dangers. With caution as your guide, you stand at this crossroad, ready to embark on the path that will unveil the truth behind the enigmatic silence that pervades this vessel. ",
    options:[
      {text:"Go Back out the door you came in from", next: 24,img:"https://i.pinimg.com/564x/06/47/26/06472677904b8f269a5c3756ded7a0f6.jpg"},{text: "Go North", next:5} , {text:"Go East" , next:6},
      {text:"Go West", next: 7}
    ]
  },
  5:{
    text:"Determined to uncover the truth behind the eerie silence, you make a calculated decision to proceed towards the command deck. As you step into the room, the epicenter of operations on any typical vessel, a sight catches you off guard, almost causing you to lose your footing. Hovering above, an overhead view displays a cryptic message in a bluish-green substance, sending a shiver down your spine. The words etched in the material read: 'The answer lies in the forgotten flora. Seek the metal of life where green once thrived.' Despite the emptiness that engulfs the command deck, an inexplicable sensation penetrates your suit, heightening your awareness. With a swift connection to the system diagnostics, a vibrant green screen illuminates before you, its dark text demanding attention. You navigate through the essential commands, meticulously checking for any glaring anomalies. The results reverberate throughout the command deck, echoing with a sense of urgency: Engines: Offline. Oxygen: Acceptable levels. Grav-projector: Unstable. Escape pods: 4 of 5 launched, with no trace of their destination. The gravity of the situation intensifies as you absorb the implications of the diagnostics. It becomes evident that something has gone gravely wrong on this vessel. The message's enigmatic words intertwine with the ominous discoveries, adding to the mounting mystery that surrounds you. Undeterred by the unsettling circumstances, you brace yourself for the investigation that lies ahead, determined to unravel the secrets concealed within the forgotten flora and the elusive metal of life, once adorned with vibrant greenery.",
    options:[
      {text:"go to the oxygen/ grav-projector room", next: 6, img:"https://i.pinimg.com/564x/3a/54/ce/3a54cea50f6b3db7e2ca161124a92fe1.jpg"}, {text:"Go to Escape pods/ Engines Room", next: 7} ,{text:"Go back to Docking Bay", next: 4}
    ]
  },
  6:{
    text:"Choosing the path leading east, you navigate through a series of corridors, the tension mounting with each step. As you round a corner, your eyes catch sight of the ominous blue lights emanating from the doorway ahead. Activating the flashlight integrated into your suit, you cautiously proceed inside, the beam of light offering only a limited view of the immediate vicinity—three feet ahead and a few inches on either side. The scene that unfolds before you is one of disarray. Pipes and tubing, which should have been securely hidden within the walls, now lie scattered across the floor. Negotiating your way through this labyrinth of misplaced conduits proves to be a daunting task. With painstaking effort, you maneuver past the tangled mess, mindful of the delicate wires that threaten to impede your progress. Amidst this chaos, the cause of the disrupted gravity and compromised oxygen becomes apparent. Burn marks mar the surfaces, evidence of someone or something having utilized these vital systems as a scratching post. Fortunately, the damage is superficial, the adamantium shell of the vessel preventing any substantial breaches. Reflecting on the protective properties of admantium, a fleeting wish passes through your thoughts—how advantageous it would be if your own suit were forged from such resilient material. Resolute in your determination, you press forward, emboldened by the knowledge that the source of this disturbance lies within reach. As you navigate the twisted corridors, the enigmatic nature of the vessel deepens, beckoning you further into the heart of the mystery that unravels with each step you take.",
    options:[
      {text:"You know when you're supposed to leave a room, head back to the docking bay", next:4,img:"https://cdna.artstation.com/p/assets/images/images/022/043/208/large/chen-tang-artstation3.jpg?1573897224" },{text:"Scan the burn marks", next: 8}
    ]
  },
  7:{ 
    text:" Determined to uncover any possible clues regarding the whereabouts of the missing individuals, you decide to make your way to the Escape Pods. Considering the capacity of a typical escape shuttle, you estimate that it should comfortably accommodate four occupants, or six individuals in cramped conditions, as you recall from the tumultuous riots on Centari-Minor. You activate your visor communicator, responding to the call from your pilot back on your vessel. Your display clicks on, your pilot's voice fills your ears. 'Hey, Choom,' he begins, using the unfamiliar nickname, ' Just a heads-up. Your contract only covers a time of 59,870 parsecs, and we're at 49,870. I suggest you pick up the pace if you want to stay on contract.'The reminder of the limited scope of your contract adds a sense of urgency to your mission. As the seconds tick away, the crucial choice arises: to either plunge further into the depths of the investigation or prioritize your own self-preservation, each moment amplifying the weight of this decision",
    options:[
      {text:"Calm Answer: 'Dont call me Choom, ill be done soon just keep the thrusters on'", next:11, img:"https://cdn.openart.ai/stable_diffusion/dca76d1e363668be51ed14fe3ad4dcb4402bafc6_2000x2000.webp"}, {text: "Rude Answer: 'screw you! I am going to take all the time i need'", next:10}, {text:"Ignore his warning and look around the room for the escape pod functions", next:12}, {text:"ignore his warning and scan the room for the engine", next:16} ,{text:"Go back to Docking Bay", next: 4}
    ]
  },
  8: {
    text:"As your device beeps, breaking the silence in the dimly lit room, you divert your attention to the palm-sized screen in your hands. The green glow reflects off your visor, casting an eerie hue in the surrounding darkness. The text displayed on the screen reveals a significant discovery: 'Species recognized: Rinorea niccolifera. Origin: Terra-P. Status: Extinct.' Frustration wells within you as you recall instructing your engineer to modify the scanner's output to use comprehensible language. However, after a few moments of space research, a sense of familiarity tingles through your spine, reminiscent of the awe you experienced upon encountering your first floater. Rinorea niccolifera is a life form known for its ability to consume alloys which was discovered on Terra-P, the long-lost origin planet of the human race, thought to be lost to the ages. How is it possible that they possess this extinct species? What were their intentions with it? Countless questions swirl through your mind, demanding answers. Yet, in this moment, you remind yourself to focus on your primary mission: finding the moisture farmer and ensuring your own survival. You take a deep breath, allowing the rush of inquiries to settle, clearing your mind for the task at hand. With determination as your guiding light, you steel yourself for the challenges that lie ahead, resolved to navigate the treacherous path before you.",
    options:[
      {text:"Investigate the Room Further", next:9,img:"https://cdna.artstation.com/p/assets/images/images/022/043/208/large/chen-tang-artstation3.jpg?1573897224"}, {text:"Go back to Docking Bay", next: 4} 
    ]
  },
  9: {
    text:"Your attention shifts to a nearby console, its illuminated status menus capturing your focus in the dimly lit room. As your eyes scan the information presented, two glaring errors stand out in stark contrast: 'Missing escape pods 4/5 and Systems malfunction on command deck.'The revelation of the missing escape pods intensifies the growing sense of unease within you. It confirms that the vessel's occupants had indeed made an attempt to evacuate, leaving behind only a fraction of the available escape options. The question of why they fled and where they went hangs in the air, their absence amplifying the enigma that surrounds this abandoned trawler. Simultaneously, the indication of a systems malfunction on the command deck deepens the mystery further. What could have caused such a malfunction, and how does it connect to the overarching puzzle of the vessel's silence? These errors serve as crucial pieces of information, beckoning you to investigate further and unravel the intricate web of events that have unfolded on this vessel. As the weight of the situation settles upon your shoulders, you reaffirm your commitment to unravel the truth. The missing escape pods and the systems malfunction serve as beacons, urging you to persist in your search for the farmer and the answers that lie buried within the forsaken corridors. With each discovery, the urgency to uncover the secrets intensifies, compelling you to navigate the unknown with unwavering resolve.",
    options:[
      {text:"Go back to Docking Bay", next: 4,img:"https://cdna.artstation.com/p/assets/images/images/022/043/208/large/chen-tang-artstation3.jpg?1573897224"}, {text:"Go to Escape pods/ Engines Room", next: 7},{text: "Go to Command Deck", next:5} 
    ]
  },
  10:{
    text: "That hurt the pilots feelings he left, you die alone in space like you always thought you would",
    options:[
      {text:"Start Over :/", next:1,img:"https://cdn.vox-cdn.com/thumbor/nKLkBeQL49lnfVHRJGfs13D_zzg=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24105713/SIGNALIS_Elster_6.png"}
    ]
  },
  11:{
    text: "You take a deep breath, momentarily finding solace in the familiar banter between you and your pilot. The nickname, though grating, is a reminder of the camaraderie and shared experiences you both have endured. With a renewed sense of focus, you respond firmly, 'Don't call me choom, I'll be done soon. Keep the thrusters on.'The pilot's acknowledgment comes through the comms, a reassuring confirmation that they understand the gravity of the situation. The click of the communication channel fills the silence once more, and you prepare yourself to continue your investigation.",
    options:[
      {text:"Scan the room for the escape pod functions", next:12,img:"https://cdn.openart.ai/stable_diffusion/dca76d1e363668be51ed14fe3ad4dcb4402bafc6_2000x2000.webp"}, {text:"Scan the room for the engine" ,next:16} ,{text:"Go back to Docking Bay", next: 4}
    ]
  },
  12:{
    text:"You make your way to the escape pod bay. The evidence of recent launches becomes apparent as your eyes lock onto scorch marks adorning four of the five pod ports. The urgency and haste with which the occupants fled the vessel becomes palpable. Amidst the marks of departure, an anomaly catches your attention—an exposed leg extending from the fifth pod bay. Balancing curiosity with caution, you contemplate your next move. Should you investigate further, carefully examining the situation to understand the circumstances surrounding the protruding leg? Or should you prioritize your own safety. ",
    options:[
      {text: "Approach the motionless limb and tap it with your foot, and wait for a response", next:13,img:"https://i.pinimg.com/564x/a0/54/e2/a054e2e9304a1963fbe348999f709772.jpg"}, {text:"Walk to the entrance of the escape pod and look inside", next:14} ,{text:"Go back to Docking Bay", next: 4}
    ]
  },
  13:{
    text:"With a mixture of caution and curiosity, you give the protruding leg a gentle kick, hoping to elicit a response or discern any signs of life. However, to your dismay, there is no reaction—no movement, no sound. The silence that ensues only adds to the growing sense of unease that permeates the escape pod bay. he unknown awaits beyond that motionless limb, concealing answers that may hold the key to unraveling the mystery that enshrouds this vessel. ",
    options:[
      {text:"Walk to the entrance of the escape pod and look inside", next:14,img:"https://i.pinimg.com/564x/a0/54/e2/a054e2e9304a1963fbe348999f709772.jpg"}, {text:"Go back to Docking Bay", next: 4}
    ]
  },
  14:{
    text:"As you approach the entrance of the escape pod, a sense of foreboding tightens its grip on your heart. With cautious steps, you peer inside, bracing yourself for whatever awaits. What you witness defies comprehension—a nightmarish tableau unfolds before your eyes. Black and blue vines, sinister and otherworldly, writhe and weave through the decaying flesh of a man ensnared within the pod. His anguished form bears the marks of both physical and metaphysical torment. Above his head, a chilling message has been inscribed, hinting at the connection between this macabre scene and the forgotten flora. 'The answer lies in the forgotten flora. Seek the metal of life where green once thrived.' Despite his state of decay, the rhythmic rise and fall of the man's chest serves as a stark reminder of his continued existence—a fragile lifeline teetering on the precipice of suffering. Your instincts kick in, and you swiftly draw your pistol, a tool that has been your constant companion throughout your spacefaring adventures. The weight of the situation bears down upon you as you wrestle with the gravity of the decision. In this grim moment, is it empathy guides your actions? With a heavy heart, you acknowledge that ending the man's suffering is the only compassionate choice, but it may not be a choice for you to make for him. ",
    options:[
      {text:"Steadying your aim you deliver the final mercy.", next:15,img:"https://i.pinimg.com/564x/a0/54/e2/a054e2e9304a1963fbe348999f709772.jpg"}, {text:"Go back to Docking Bay", next: 4}
    ]
  },
  15:{
    text: "As you take a deep breath and pull the trigger, the resounding gunshot pierces the stagnant air of the escape pod bay, shattering the oppressive silence. In that moment, the man's suffering is mercifully brought to an end. You lower your pistol, a mix of relief and sorrow coursing through your veins. The weight of your actions settles upon you, reminding you of the harsh realities of this forsaken vessel. However, as you turn the safety back on and carefully holster your sidearm, an unexpected revelation shakes you to your core. The wound you inflicted on the man's sternum begins to bubble and fester, indicating that it was not a fatal shot. Panic surges through your veins as you reach for your pistol, only to realize that some of the strange plant substance has contaminated it. Desperation grips you as you attempt to discharge the gun, but it misfires, jammed by the foreign material. In a catastrophic turn of events, the cartridge backfires in your hand, ripping open your suit and exposing you to the mysterious flora. In that pivotal moment, as the reality of your impending doom sets in, you reflect on your past with a tinge of disdain. Violence has been a constant companion, a tool that defined your existence. Now, faced with the insidious power of the unknown flora, you resign yourself to a grim fate, accepting the consequences of a life consumed by violence. ",
    options:[
      {text:"Start Over :/", next:1,img:"https://cdn.vox-cdn.com/thumbor/nKLkBeQL49lnfVHRJGfs13D_zzg=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24105713/SIGNALIS_Elster_6.png"}
    ]
  },
  16:{
    text: "With a sense of urgency, you activate the augmented reality (AR) interface on your palm screen, scanning for information about the engine. The frozen floor beneath you creaks and shifts as it opens up, revealing the raised engines in all their mechanical glory. Memories flood back from your past, when you served as an engineer for the Guardian Corps during the war on Mahalva Prime, fighting alongside the Browncoats. Your training and experience in handling complex machinery become vital in this critical moment. Running a swift diagnostics check on your palm screen, the reassuring message appears before you: 'The engines are fully functional.' Relief washes over you, knowing that at least one critical system on the ship is still operational. With the options menu at your disposal, you weigh your next move carefully. Considering the dire circumstances and your mission to find the missing farmer and uncover the truth, you contemplate your available choices. Should you attempt to activate the engines and restore power to the ship, potentially enabling a means of escape or discovering valuable information? Alternatively, you could delve deeper into the ship's mysteries, exploring the unexplored areas in search of answers. As you contemplate the options before you, the weight of responsibility rests on your shoulders. The fate of both the farmer and yourself hangs in the balance. With a determined focus, you select your next course of action, driven by your expertise, intuition, and a relentless pursuit of the truth.",
    options:[
      {text:"Self- Destruct (Maybe Avoid this)",next:17,img:"https://i.pinimg.com/564x/09/c1/90/09c190f5e77aa7d1c5b221f284a4cbe0.jpg"},{text:"Navigation Protocol", next:20}, {text:"Go back to Escape pods/ Engines Room", next: 7}
    ]
  },
  17:{
    text:"A somber determination settles upon you as you make the difficult decision to initiate the ship's self-destruct sequence. Recognizing the potential dangers lurking within and the need to prevent any further harm or spread of the enigmatic flora, you bring up the self-destruct options on your palm screen. The interface illuminates before you, presenting a series of critical choices that will set in motion a chain of irreversible events. With every passing moment, the weight of your decision intensifies, but you remain resolute in your commitment to protect others and ensure that the secrets within this vessel do not escape into the wider universe.",
    options:[
      {text:"Set Timer to Immediate", next:18, img:"https://i.pinimg.com/564x/09/c1/90/09c190f5e77aa7d1c5b221f284a4cbe0.jpg"}, {text:"Set Timer to 5 minutes", next:19},{text:"Set Timer to 10 minutes", next:19},{text:"Set Timer to 15 minutes", next:19}
    ]
  },
  18:{
    text:"In a sudden and irreversible decision, driven by a sense of urgency and an overwhelming desire to ensure the complete eradication of the enigmatic life form, you choose to immediately initiate the self-destruct sequence. The gravity of your choice becomes apparent as the countdown begins, ticking away the remaining moments before the ship's annihilation. In a final act of sacrifice, you embrace the inevitable fate that awaits both you and the flora, detonating the vessel and sealing your own destiny within its destructive grasp.",
    options:[
      {text:"Start Over :/", next:1,img:"https://cdn.vox-cdn.com/thumbor/nKLkBeQL49lnfVHRJGfs13D_zzg=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24105713/SIGNALIS_Elster_6.png"}
    ]  
  },
  19:{
    text:"As you navigate the self-destruct options, a mix of apprehension and clarity fills your mind. Pausing for a moment to reflect on the potential ramifications, you reaffirm your conviction and make your final selection, initiating the self-destruct sequence. The countdown begins, a stark reminder of the limited time you have to fulfill your remaining objectives and escape the vessel before it succumbs to annihilation.",
    options:[
      {text:"You win :D", next:1, img:"https://zxart.ee/zxscreen/border:0/mode:mix/pal:srgb/type:standard/zoom:3/id:44497/"}    ]
  },
  20:{
    text:"With a sense of curiosity and confusion, you activate the navigation protocol on your palm screen. As the ship's navigation system springs to life, a holographic display materializes, revealing vital information about the vessel's current location and trajectory. To your surprise, the status of the engines indicates that they are operating at full capacity, contradicting the previous indications of malfunction and inactivity.",
    options:[
      {text:"Download local star-maps", next:21, img:"https://thumbs.dreamstime.com/b/sci-fi-futuristic-hud-dashboard-display-virtual-reality-technology-screen-target-139801402.jpg"}, {text:"Go back to Escape pods/ Engines Room", next: 7}
    ]
  },
  21:{
    text:"With the palm screen now online, displaying data on the largest planetary bodies in the vicinity, you find yourself presented with a valuable tool for navigation. Assessing the information before you, you consider your options for maneuvering the ship effectively through the vast expanse of space.Taking into account the trajectory, gravitational forces, and proximity of the nearby planetary bodies, you weigh the advantages and disadvantages of each potential course. Carefully analyzing the data, you seek a path that maximizes efficiency, minimizes risks, and aligns with your ultimate objective.",
    options:[
      {text:"navigate the ship to a nearby desert planet",next:23, img:"https://www.depts.ttu.edu/architecture/images/people/faculty/bios/haq/6.jpg"}, {text:"look for the closest sun and set a course",next:22}, {text:"Go back to Docking Bay", next: 4}
    ]
  },
  22:{
    text:"As the ship hurtles towards Kepler-47, a mix of anticipation and urgency fills your being. You navigate the vessel with a calculated precision, utilizing the data from the palm screen to adjust your trajectory and maintain a steady course. The distant celestial body looms larger in your viewport, a beacon of hope and a reminder of the time slipping away. However, as you rush back to the docking bay, a sinking realization dawns upon you. The transport ship, your lifeline to safety, has departed without you. A wave of regret washes over you, tinged with a profound sadness for the moments and choices that led you to this juncture. The weight of the situation bears down upon your shoulders, and a sense of finality settles in. Gazing out into the vast expanse of space, you take in the grandeur and enormity of it all. In this final moment, you reflect on the journey that brought you here, contemplating the highs and lows, the triumphs and regrets. There is a bittersweet acceptance as you come to terms with the consequences of your actions. With a heavy heart, you embrace the impending fate, preparing to go down with the ship. The vastness of The Expanse stretches out before you, a reminder of the infinite possibilities and untold stories that will forever remain beyond your reach.",
    options:[
      {text:"Start Over :/", next:1,img:"https://cdn.vox-cdn.com/thumbor/nKLkBeQL49lnfVHRJGfs13D_zzg=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24105713/SIGNALIS_Elster_6.png"}
    ]
  },
  23:{
    text:"With a sense of urgency, you activate the timer, entrusting fate to carry out the ship's destruction. Without dwelling on the regret and turmoil that brought you to this point, you swiftly make your way back to your transport, driven by the instinct for self-preservation. Adrenaline courses through your veins as you navigate the corridors, your footsteps echoing in the empty ship. Finally, you reach your transport vessel, and with a sigh of relief, you board and quickly disengage from the decaying ship. The engines hum to life, propelling you away from the impending destruction and the haunting memories of what transpired on the abandoned vessel. As you leave the immediate area, you can't help but feel a mix of relief and melancholy. The weight of the lives lost weighs heavily on your conscience, but you understand that containing the contamination and preventing it from spreading was of paramount importance. Returning to your employers, you recount the events 'truthfully', informing them of the tragedy that unfolded aboard the ship. As you conclude your report, you reflect on the profound impact that this experience has had on your life. It serves as a reminder of the fragile nature of existence, the choices we make, and the consequences they bear.",
    options:[
      {text:"You win :D", next:1, img:"https://zxart.ee/zxscreen/border:0/mode:mix/pal:srgb/type:standard/zoom:3/id:44497/"}
    ]
  },
  24:{
    text:"it was too spooky you went back to your ship and left",
    options:[
      {text:"Start Over", next:1,img:"https://zxart.ee/zxscreen/border:0/mode:mix/pal:srgb/type:standard/zoom:3/id:44497/"}
    ]
  },
  25:{
    text:" You see your pilot attempting to establish contact through the radio, a sense of unease settles upon you. The silence that greets their efforts is disconcerting, amplifying the growing sense of isolation and uncertainty. You exchange worried glances with your pilot, both acknowledging the absence of any response from the ship.",
    options:[
       { text: "Look out the porthole", next: 3, img: "https://preview.redd.it/view-from-a-cockpit-of-a-giant-spaceship-realistic-detailed-v0-xs6f5qoprdja1.png?width=1568&format=png&auto=webp&v=enabled&s=aa8460104c4e008dc95e3dd9bf8dcad1fe4b3966"}, {text: "Head for the Docking Bay", next: 4 } 
      
    ]
  
  }
};


let currentSection = 1;

function renderStory() {
  const section = story[currentSection];
  
  // Update story text
  document.getElementById("story").textContent = section.text;
  
  // Clear previous options
  document.getElementById("options").innerHTML = "";
  
  // Render options
  section.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.addEventListener("click", () => selectOption(index));
    document.getElementById("options").appendChild(button);
  });
  
  // Show corresponding pic
  const img = section.options[0].img;
  if (img) {
    document.getElementById("image").src = img;
    document.getElementById("image").style.display = "block";
  } else {
    document.getElementById("image").style.display = "none";
  }
}

function selectOption(index) {
  const option = story[currentSection].options[index];
  currentSection = option.next;
  renderStory();
}


renderStory();