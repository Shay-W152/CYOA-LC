// Story object
const story = {
  1: {
    text: "You're a space age private detective after years of working with the new Mars Federation, you had enough with red tape and politics. You no longer want to help anyone, but you don't have any other skills. Solving mysteries is in your blood now. You've been called to an abandoned space trawler that belongs to a moisture farmer who has family on New Earth-2. You think, 'Connections like that, why is he a moisture farmer?' Before you can extrapolate on that, you feel the gravity shift as your pilot docks onto the moisture farmer's trawler. You'll never get used to the smell of artificial gravity",
    options: [
      { text: "Stand Up", next: 2, img: "https://w0.peakpx.com/wallpaper/111/269/HD-wallpaper-giant-spaceship-galaxy-stars-planet-surface-sci-fi.jpg" },
    ]
  },
  2: {
    text: "You see your pilot clicking on and off the radio. No one seems to respond from the ship.",
    options: [
      { text: "Look Around", next: 2, img: "https://preview.redd.it/view-from-a-cockpit-of-a-giant-spaceship-realistic-detailed-v0-xs6f5qoprdja1.png?width=1568&format=png&auto=webp&v=enabled&s=aa8460104c4e008dc95e3dd9bf8dcad1fe4b3966" },  { text: "Look out the porthole", next: 3}, {text: "Head for the Docking Bay", next: 4
    } 
      
    ]
  },
  
  3: {
    text: "You see the emptiness and void of The Expanse, even though you were born in it. Others see majesty, but you can only feel small and terrified.", 
   options:[
    { text: "Look Around", next: 2 , img: "https://preview.redd.it/view-from-a-cockpit-of-a-giant-spaceship-realistic-detailed-v0-xs6f5qoprdja1.png?width=1568&format=png&auto=webp&v=enabled&s=aa8460104c4e008dc95e3dd9bf8dcad1fe4b3966"},  { text: "Look out the porthole", next: 3}, {text: "Head for the Docking Bay", next: 4
  } 
   ]
  },
  4:{
    text:"you make your way across the high tech bridge extending from your ship to the next scene ship docking bay. you walk onboard the ship's docking bay as your senses still adapting to the artificial o2 and gravity you can already tell something isnt right on this vessel its far too quiet even with the engine being turned off a moisture farmers trawler should have atleast 10 people  you dont see or hear a single soul. You can see 3 door ways to the north, west, and, east of you. ",
    options:[
      {text:"Go Back out the door you came in from", next: 24,img:"https://i.pinimg.com/564x/06/47/26/06472677904b8f269a5c3756ded7a0f6.jpg"},{text: "Go North", next:5} , {text:"Go East" , next:6},
      {text:"Go West", next: 7}
    ]
  },
  5:{
    text:"You decide the smartest course of action is to head to the command deck and run a systems diagnostic. You walk into the commmand deck on any other ship this is the heart of the operations, this isnt any other ship, as you come into the room you almost fall off you feet on the over head view the words 'The answer lies in the forgotten flora. Seek the metal of life where green once thrived.' are scrawled in a bluish green material. the command deck is empty but, even through your suit you get a spine tingle sensation you connect to the systems diagnostics a bright green screen comes up with black text. you run therough the basic systems commands checking through the obvious culprits the results ping and echo through the command deck: engines: off, oxygen: acceptable levels, grav-projector: unstable, escape pods: 4 of 5 launched/ untraceable",
    options:[
      {text:"go to the oxygen/ grav-projector room", next: 6, img:"https://i.pinimg.com/564x/3a/54/ce/3a54cea50f6b3db7e2ca161124a92fe1.jpg"}, {text:"Go to Escape pods/ Engines Room", next: 7} ,{text:"Go back to Docking Bay", next: 4}
    ]
  },
  6:{
    text:"you take the room going east you walk through a few corridors coming around the corner you can see the ominous blue lights streaking out the door way. You turn on the flash light in your suit and make your way inside  your field of vision being limited to the 3 feet in front of you and a few inches on either side. You try to make your way across the pipes and tubing that are definetly supposed to be inside of the walls and not on the floor. After struggling to make it past the wires you figure out the issue with the gravity and oxygen someone or something had been using it as a scratching post the burn marks arent deep and thank fully they werent able to penetrate the admantium shell you contemplate 'damn i wish my suit was made of that'",
    options:[
      {text:"You know when you're supposed to leave a room, head back to the docking bay", next:4,img:"https://cdna.artstation.com/p/assets/images/images/022/043/208/large/chen-tang-artstation3.jpg?1573897224" },{text:"Scan the burn marks", next: 8}
    ]
  },
  7:{ 
    text:" You decided to head over to the Escape Pods there may be some clues as to where everyone went you estimate even in an old school trawler like this the average escape shuttle would fit 4 comfortably, and from the riots on Centari-Minor you know it'll fit 6 uncomfortably. You walk into the silent room, you bring up the your visor communicator as your pilot calls you from your vessel. Your comm display clicks on and he tells you 'Hey Choom just wanted to let you know your contract only covers 59870 parsecs and we are at 49870 I'd hurry up if I were you'",
    options:[
      {text:"Calm Answer dont call me Choom, ill be done soon just keep the thrusters on", next:11, img:"https://i.pinimg.com/564x/09/c1/90/09c190f5e77aa7d1c5b221f284a4cbe0.jpg"}, {text: "Rude Answer: 'screw you! I am going to take all the time i need'", next:10}, {text:"Ignore his warning and look around the room for the escape pod functions", next:12}, {text:"ignore his warning and scan the room for the engine", next:16} ,{text:"Go back to Docking Bay", next: 4}
    ]
  },
  8: {
    text:"after a few seconds your device beeps as you stare into the small palm sized scren the only light in the room is the green glare bouncing off your visor it reads back 'species recognized: Rinorea niccolifera Origin: Terra-P Status: Extinct' you sigh in frustration you told your engineer to mod your scanner to use words you actually understand. After a few seconds of space googling you get that same spine tingling feeling you had when you saw your first floater this is an alloy eating life form first discovered on Terra-P the origin planet of the human race a planet thought lost millenia ago. how do they have this life form? what were they doing with it? you have too many questions running through your mind you take a deep breath and clear your mind your mission is to find the farmer and come back alive.",
    options:[
      {text:"Investigate the Room Further", next:9,img:"https://cdna.artstation.com/p/assets/images/images/022/043/208/large/chen-tang-artstation3.jpg?1573897224"}, {text:"Go back to Docking Bay", next: 4} 
    ]
  },
  9: {
    text:"You see the status menus on a nearby console. It reads two errors: 'Missing escape pods 4/5' and 'Systems malfunction on command deck'",
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
    text: "You take a breath... 'Don't call me choom, I'll be done soon keep the thrusters on'...You hear the pilots comms click back on 'roger that choom'",
    options:[
      {text:"Ignore his warning and look around the room for the escape pod functions", next:12}, {text:"ignore his warning and scan the room for the engine" ,next:16} ,{text:"Go back to Docking Bay", next: 4}
    ]
  },
  12:{
    text:"You make your way to the escape pod bay. The scorch marks on four of the five pod ports indicate recent launches. As you approach the missing pods, you notice a leg protruding from the fifth pod bay. Curiosity piqued, you consider your next move. ",
    options:[
      {text: "You approach the motionless limb and tap it with your foot, and wait for a response", next:13,img:"https://i.pinimg.com/564x/a0/54/e2/a054e2e9304a1963fbe348999f709772.jpg"}, {text:"Walk to the entrance of the escape pod and look inside", next:14} ,{text:"Go back to Docking Bay", next: 4}
    ]
  },
  13:{
    text:"You kick the leg and wait for a response, but there is no reaction. The silence is unsettling",
    options:[
      {text:"Walk to the entrance of the escape pod and look inside", next:14}, {text:"Go back to Docking Bay", next: 4}
    ]
  },
  14:{
    text:"You cautiously walk to the entrance of the escape pod and look inside. As you peer around the corner, a horrific sight unfolds before your eyes. Black and blue vines are stretching and piercing the decaying flesh of a man trapped inside. Above his head, someone has written, 'The answer lies in the forgotten flora. Seek the metal of life where green once thrived.' You notice the man's chest compress and decompress, indicating he is still alive. You instinctively withdraw your pistol and take aim at the slowly decaying man, knowing that ending his suffering is the only humane choice.",
    options:[
      {text:"Shoot the man, put an end to his misery", next:15}, {text:"Go back to Docking Bay", next: 4}
    ]
  },
  15:{
    text: "You take a deep breath and pull the trigger, ending the man's suffering. The sound of the gunshot echoes through the escape pod bay, amplifying the eerie silence. You lower your pistol, feeling a mix of relief and sadness. As you turn the safety back on and holster your sidearm you realize it wasnt a fatal wound. The hole you left in his sternom begins to bubble. In a panic you reach back for your pistol realizing there was some of the strange plant on there you attempt to discharge the gun it fires off jammed with the foreign substance the cartidge back fires in your hand ripping your suit open exposing you to the mysterious flora you think back to your past with disdain youve been nothing but a, violence monger you accept your grim fate. ",
    options:[
      {text:"Start Over :/", next:1,img:"https://cdn.vox-cdn.com/thumbor/nKLkBeQL49lnfVHRJGfs13D_zzg=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24105713/SIGNALIS_Elster_6.png"}
    ]
  },
  16:{
    text: "You recall your training before joining the Guardian Corps when you were fighting on the side of the Browncoats in the war on Mahalva Prime. You were the engineer for your platoon. You run a quick diagnostics on your palm screen and it reads back to you, 'The engines are fully functional.' You bring up the options menu to decide your next move.",
    options:[
      {text:"Self- Destruct (Maybe Avoid this)",next:17},{text:"Navigation Protocol", next:20}, {text:"Go back to Escape pods/ Engines Room", next: 7}
    ]
  },
  17:{
    text:"You decide to initiate the self-destruct sequence to ensure the ship and any potential threats are eliminated. You bring up the self-destruct options on your palm screen.",
    options:[
      {text:"Set Timer to Immediate", next:18}, {text:"Set Timer to 5 minutes", next:19},{text:"Set Timer to 10 minutes", next:19},{text:"Set Timer to 15 minutes", next:19}
    ]
  },
  18:{
    text:"You wanted to make sure the life form is gone for good, a little too sure maybe?",
    options:[
      {text:"Start Over :/", next:1,img:"https://cdn.vox-cdn.com/thumbor/nKLkBeQL49lnfVHRJGfs13D_zzg=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24105713/SIGNALIS_Elster_6.png"}
    ]  
  },
  19:{
    text:"You set the self-destruct. You set up the timer for just enough time that you can make it back to your transport and leave the immediate area you contained the contamination you return to your employers and tell them everyone on that ship died",
    options:[
      {text:"You win :D", next:1, img:"https://cdnb.artstation.com/p/assets/images/images/010/311/219/medium/joao-pedro-grandinetti-win-screen.jpg?1523752399"}    ]
  },
  20:{
    text:"You activate the navigation protocol on your palm screen. The ship's navigation system comes online, displaying the ship's current location and trajectory. However, you notice the engines seem to be functioning at full capacity. Its pussling as to why every other screen you have seen says other wise.",
    options:[
      {text:"Download local star-maps", next:21}, {text:"Go back to Escape pods/ Engines Room", next: 7}
    ]
  },
  21:{
    text:"Your palm screen comes online and gives you data on the largest planetary bodies in your vicinity",
    options:[
      {text:"navigate the ship to a nearby desert planet",next:23}, {text:"look for the closest sun and set a course",next:22}, {text:"Go back to Docking Bay", next: 4}
    ]
  },
  22:{
    text:"you steer the ship in the direction of Kepler-47 and then race back to dock only to reallize that it took you too long to calculate the trajectories and your transport ship left without you. You look over The Expanse one last time before you go down with the ship regretting every moment of your life that brought you here",
    options:[
      {text:"Start Over :/", next:1,img:"https://cdn.vox-cdn.com/thumbor/nKLkBeQL49lnfVHRJGfs13D_zzg=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24105713/SIGNALIS_Elster_6.png"}
    ]
  },
  23:{
    text:"you have no need to calcualte the trajectory for down you just set it on a timer and run for your transport. you set up the timer for just enough time that you can make it back to your transport and leave the immediate area you contained the contamination you return to your employers and tell them everyone on that ship died",
    options:[
      {text:"You win :D", next:1, img:"https://cdnb.artstation.com/p/assets/images/images/010/311/219/medium/joao-pedro-grandinetti-win-screen.jpg?1523752399"}
    ]
  },
  24:{
    text:"it was too spooky you went back to your ship and left",
    options:[
      {text:"Start Over", next:1,img:"https://cdnb.artstation.com/p/assets/images/images/010/311/219/medium/joao-pedro-grandinetti-win-screen.jpg?1523752399"}
    ]
  }
};

  
  // Add more story sections as needed...


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
  
  // Show corresponding image (if available)
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

// Initial rendering
renderStory();