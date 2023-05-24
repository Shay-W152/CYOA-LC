var gameData = {

    startingScreen: "You're a space age private detective after years of working with the new Mars Federation, you had enough with red tape and politics. You no longer want to help anyone, but you don't have any other skills. Solving mysteries is in your blood now. You've been called to an abandoned space trawler that belongs to a moisture farmer who has family on New Earth-2. You think, 'Connections like that, why is he a moisture farmer?' Before you can extrapolate on that, you feel the gravity shift as your pilot docks onto the moisture farmer's trawler. You'll never get used to the smell of artificial gravity.",
    story: "",
    currentOption: 0,
    options: [
      {
        text: "Look Around",
        outcome: "You see your pilot clicking on and off the radio. No one seems to respond from the ship.",
         
        previousChoices: []
      },
      {
        text: "Look out the porthole",
        outcome: "You see the emptiness and void of The Expanse, even though you were born in it. Others see majesty, but you can only feel small and terrified.",
        previousChoices: []
      },
      {
        text: "Head for the dock bridge",
        outcome: "You make your way across the high-tech bridge extending from your ship to the next.",
        previousChoices: []
      }
    ]
  };
  
  const previousChoicesElement = document.querySelector("#previousChoices");
  const storyElement = document.querySelector("#story");
  const optionsElement = document.querySelector("#options");
  
  function updateGame(optionIndex) {
    const chosenOption = gameData.options[optionIndex];
  
    gameData.story = chosenOption.outcome;
    gameData.currentOption = optionIndex;
    chosenOption.previousChoices.push(chosenOption.text);
  
    previousChoicesElement.textContent = "Previous Choices: " + chosenOption.previousChoices.join(" > ");
    storyElement.textContent = gameData.story;
    optionsElement.innerHTML = "";
  
    for (let i = 0; i < gameData.options.length; i++) {
      const option = gameData.options[i];
      optionsElement.innerHTML += `<button onclick="updateGame(${i})">${option.text}</button>`;
    }
  
    if (optionIndex === 2) {
      // Head for the dock bridge option chosen
      storyElement.textContent = "You make your way across the high-tech bridge extending from your ship to the next. You walk onboard the ship's docking bay as your senses still adapt to the artificial O2 and gravity. You can already tell something isn't right on this vessel; it's far too quiet, even with the engine turned off. A moisture farmer's trawler should have at least 10 people, but you don't see or hear a single soul. You can see 3 doorways to the north, west, and east of the Ship Docking bay.";
  
      optionsElement.innerHTML = `<button onclick="updateGame()">Go back out the door you came in through</button><br>` +  
      `<button onclick="goNorth()">Go north</button><br>` +
       `<button onclick="goEast()">Go east</button><br>` +
       `<button onclick="goWest()">Go west</button><br>`;
    } 
  }
  //command deck 
  function goNorth() {
    storyElement.textContent = "You decide the smartest course of action is to head to the command deck and run a systems diagnostic. Command Deck: You walk into the command deck. On any other ship, this is the heart of the operations. But this isn't any other ship. As you come into the room, you almost fall off your feet. On the overhead view, the words 'The answer lies in the forgotten flora. Seek the metal of life where green once thrived.' are scrawled in a bluish-green material. The command deck is empty, but even through your suit, you get a spine-tingling sensation. You connect to the systems diagnostics, and a bright green screen comes up with black text. You run through the basic systems commands, checking through the obvious culprits. The results ping and echo through the command deck: Engines: Off Oxygen: Acceptable levels Grav-projector: Unstable Escape pods: 4 of 5 launched/untraceable";
  
    optionsElement.innerHTML = `<button onclick="goToGravProjectorRoom()">Go to the oxygen/grav-projector room</button><br>` +
    `<button onclick="goToEnginesAndEscapePods()">Go to the engines and escape pods</button><br>` +
      `<button onclick="updateGame(2)">Go back to dock</button><br>`;
  }
  
  //oxygen/grav projector room
  function goEast() {
    storyElement.textContent = "You take the room going east. You walk through a few corridors, coming around the corner, you can see the ominous blue lights streaking out the doorway. You turn on the flashlight in your suit and make your way inside, your field of vision being limited to the 3 feet in front of you and a few inches on either side. You try to make your way across the pipes and tubing that are definitely supposed to be inside the walls and not on the floor. After struggling to make it past the wires, you figure out the issue with the gravity and oxygen. Someone or something had been using it as a scratching post. The claw marks aren't deep, and thankfully, they weren't able to penetrate the adamantium shell. You contemplate, 'Damn, I wish my suit was made of that.'";
  
    optionsElement.innerHTML = `<button onclick="scanClawMarks()">Scan the claw marks</button><br>` +
    `<button onclick="updateGame(2)">You know when you're supposed to leave a room, head back to the docking bay</button><br>`;
  }
  function scanClawMarks() {
    storyElement.textContent = "You scan the claw marks. After a few seconds, your device beeps. As you stare into the small palm-sized screen, the only light in the room is the green glare bouncing off your visor. It reads, 'Species recognized: Rinorea niccolifera. Origin: Terra-P. Status: Extinct. You sigh in frustration. You told your engineer to modify your scanner to use words you actually understand. After a few seconds of space googling, you get that same spine-tingling feeling you had when you saw your first floater. This is an alloy-eating life form first discovered on Terra-P, the origin planet of the human race, a planet thought lost millennia ago. How do they have this life form? What were they doing with it? You have too many questions running through your mind. You take a deep breath and clear your mind. Your mission is to find the farmer and come back alive.";
  
    optionsElement.innerHTML = `<button onclick="lookAround()">Look around</button><br>` +
    `<button onclick="updateGame(2)">Go back to the docking bay</button><br>`;
  }
  
  function lookAround() {
    storyElement.textContent = "You see the status menus on a nearby console. It reads two errors: 'Missing escape pods 4/5' and 'Systems malfunction on command deck'.";
  
    optionsElement.innerHTML = `<button onclick="goToCommandDeck()">Go to the command deck</button><br>` +
    `<button onclick="goToEnginesAndEscapePods()">Check out the Escape pods and Engine</button><br>` +
      `<button onclick="updateGame(2)">Go back to the docking bay</button><br>`;
  }
  
  //Engines/ Escape Pod room
  function goToEnginesAndEscapePods() {
    storyElement.textContent = "You make your way towards the engines and escape pods. The corridor is dimly lit, with intermittent sparks flying from exposed wires. As you approach the engine room, you notice the heavy metal door is ajar. You push it open and find yourself face to face with a gruesome sight. The engine room is covered in a thick layer of slime, and the engines themselves are mangled beyond recognition. The escape pods are missing, except for one that seems to have crash-landed nearby. The sight sends a shiver down your spine.";
  
    optionsElement.innerHTML =
    `<button onclick="updateGame(2)">Go back to dock</button><br>` +
      `<button onclick="calmAnswer()">Calm Answer: 'Don't call me Choom, I'll be done soon. Just keep the thrusters on.'</button><br>` +
      `<button onclick="rudeAnswer()">Rude Answer: 'Screw you! I am going to take all the time I need.'</button><br>` +
      `<button onclick="scanEngineRoom()">Ignore his warning and scan the room for the engine</button><br>`+`<button onclick="searchEscapePods()">Ignore his warning and scan the room for the escape pods</button><br>`;
  }
  
  function scanEngineRoom() {
    storyElement.textContent = "You recall your training before joining the Guardian Corps when you were fighting on the side of the Browncoats in the war on Mahalva Prime. You were the engineer for your platoon. You run a quick diagnostics on your palm screen and it reads back to you, 'The engines are fully functional.' You bring up the options menu to decide your next move.";
  
    optionsElement.innerHTML =
      `<button onclick="selfDestruct()">Self-Destruct(maybe avoid this)</button><br>` +
      `<button onclick="goToEnginesAndEscapePods()">Go to the engines and escape pods</button><br>`+
      `<button onclick="navigationProtocol()">Navigation Protocol</button><br>`;
  }
  
  function navigationProtocol() {
    storyElement.textContent = "You activate the navigation protocol on your palm screen. The ship's navigation system comes online, displaying the ship's current location and trajectory. However, you notice that the coordinates are set for an unknown destination, far off the usual trade routes. Something is definitely amiss. You need to investigate further.";
  
    optionsElement.innerHTML = `<button onclick="continueInvestigation()"> send the ship into Kepler-47</button><br>` +
      `<button onclick="goToCommandDeck()"> send the ship to a nearby abondoned planet</button><br>` +
      `<button onclick="goToDock()">Go back to the docking bay</button><br>`;
  }
  
  function selfDestruct() {
    storyElement.textContent = "You decide to initiate the self-destruct sequence to ensure the ship and any potential threats are eliminated. You bring up the self-destruct options on your palm screen.";
  
    optionsElement.innerHTML =
      `<button onclick="setTimer('immediate')">Immediate</button><br>` +
      `<button onclick="setTimer('5')">Set timer to 5 minutes</button><br>` +
      `<button onclick="setTimer('10')">Set timer to 10 minutes</button><br>` +
      `<button onclick="setTimer('15')">Set timer to 15 minutes</button><br>`+ `<button onclick="goToEnginesAndEscapePods()">Go to the engines and escape pods</button><br>`;
  }
  
  function setTimer(timer) {
    let outcome = "";
  
    if (timer === 'immediate') {
      outcome = "You wanted to make sure the life form is gone for good, a little too sure maybe?";
    } else {
      outcome = `You set the self-destruct timer to ${timer} minutes. you set up the timer for just enough time that you can make it back to your transport and leave the immediate area you contained the contamination you return to your employers and tell them everyone on that ship died `;
    }
  
    storyElement.textContent = outcome;
  
    optionsElement.innerHTML = `<button onclick="updateGame(2)">Start Over :/</button><br>`;
  }
  
  
  function calmAnswer() {
    storyElement.textContent = "You calmly respond, 'Don't call me Choom, I'll be done soon. Just keep the thrusters on.' The pilots' comms click back on and you hear a relieved voice saying, 'Roger that, Choom. We'll keep the thrusters running, stay safe.'";
  
    optionsElement.innerHTML = 
    `<button onclick="updateGame(2)">Go back to Docking bay</button><br>` + `<button onclick="navigationProtocol()">Scan for Engines</button><br>` +
      `<button onclick="searchEscapePods()">Search the escape pods</button><br>`;
  }
  
  function searchEscapePods() {
    storyElement.textContent = "You make your way to the escape pod bay. The scorch marks on four of the five pod ports indicate recent launches. As you approach the missing pods, you notice a leg protruding from the fifth pod bay. Curiosity piqued, you consider your next move.";
  
    optionsElement.innerHTML = `<button onclick="kickTheLeg()">Kick the leg and wait for a response</button><br>` +
      `<button onclick="lookInsideEscapePod()">Walk to the entrance of the escape pod and look inside</button><br>`;
  }
  
  function kickTheLeg() {
    storyElement.textContent = "You kick the leg and wait for a response, but there is no reaction. The silence is unsettling.";
  
    optionsElement.innerHTML =  `<button onclick="lookInsideEscapePod()">Walk to the entrance of the escape pod and look inside</button><br>`+ `<button onclick="goToEnginesAndEscapePods()">Go to the engines and escape pods</button><br>` ;
  }
  
  function lookInsideEscapePod() {
    storyElement.textContent = "You cautiously walk to the entrance of the escape pod and look inside. As you peer around the corner, a horrific sight unfolds before your eyes. Black and blue vines are stretching and piercing the decaying flesh of a man trapped inside. Above his head, someone has written, 'The answer lies in the forgotten flora. Seek the metal of life where green once thrived.' You notice the man's chest compress and decompress, indicating he is still alive. You instinctively withdraw your pistol and take aim at the slowly decaying man, knowing that ending his suffering is the only humane choice.";
  
    optionsElement.innerHTML = `<button onclick="shootMan()">Shoot the man to put him out of his misery</button><br>` +  `<button onclick="goToEnginesAndEscapePods()">Go to the engines and escape pods</button><br>`;
  }
  
  function shootMan() {
    storyElement.textContent = "You take a deep breath and pull the trigger, ending the man's suffering. The sound of the gunshot echoes through the escape pod bay, amplifying the eerie silence. You lower your pistol, feeling a mix of relief and sadness. As you turn the safety back on and holster your sidearm you realize it wasnt a fatal wound. The hole you left in his sternom begins to bubble. In a panic you reach back for your pistol realizing there was some of the strange plant on there you attempt to discharge the gun it fires off jammed with the foreign substance the cartidge back fires in your hand ripping your suit open exposing you to the mysterious flora you think back to your past with disdain youve been nothing but, violence monger you accept your grim fate. ";
  
    optionsElement.innerHTML = `<button onclick="updateGame(2)">Start Over :/</button><br>` ;
  }
  
  function rudeAnswer() {
    storyElement.textContent = "You rudely respond, 'Screw you! I am going to take all the time I need.' The pilot's voice disappears from the comms, and you sense a feeling of resentment. Suddenly, all communication ceases, and you are left alone in the abandoned ship. Your fate is sealed as you drift alone in space, abandoned by the pilot.";
  
    optionsElement.innerHTML =   optionsElement.innerHTML = `<button onclick="updateGame(2)">Start Over :/</button><br>`;
    
  }
  
    optionsElement.innerHTML = `<button onclick="updateGame(2)">Go back to the docking bay</button><br>`;
  
  function goToCommandDeck() {
    goNorth();
  }
    function goToGravProjectorRoom() {
      goEast();
    }
    
  
    
    function goWest() {
      goToEnginesAndEscapePods();
    }
    
  
  function startGame() {
    gameData.story = gameData.startingScreen;
    gameData.currentOption = -1;
  
    previousChoicesElement.textContent = "";
    storyElement.textContent = gameData.story;
    optionsElement.innerHTML = `<button onclick="updateGame(0)">Stand up</button><br>`;
  }
  
  startGame();
  