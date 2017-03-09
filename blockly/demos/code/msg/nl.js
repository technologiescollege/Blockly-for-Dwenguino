var MSG = {
  title: "DwenguinoBlockly",
  blocks: "Blokken",
  linkTooltip: "Opslaan en koppelen naar blokken.",
  runTooltip: "Voer het programma uit dat met de blokken in de werkruimte is gemaakt.",
  loadBlocksFileTooltip: "Laadt een block bestand in dat je eerder hebt opgeslagen.",
  saveBlocksFileTooltip: "Sla de blokken op naar een lokaal bestand.",
  toggleSimulator: "Open of sluit het simulatorvenster.",
  badCode: "Programmafout:\n%1",
  timeout: "Het maximale aantal iteraties is overschreden.",
  trashTooltip: "Alle blokken verwijderen",
  catLogic: "Logica",
  catLoops: "Lussen",
  catMath: "Formules",
  catText: "Tekst",
  catLists: "Lijsten",
  catColour: "Kleur",
  catVariables: "Variabelen",
  catFunctions: "Functies",
  catArduino: "Arduino",
  catDwenguino: "Dwenguino",
  catBoardIO: "IO",
  listVariable: "lijst",
  textVariable: "tekst",
  httpRequestError: "Er is een probleem opgetreden tijdens het verwerken van het verzoek.",
  linkAlert: "Deel uw blokken via deze koppeling:\n\n%1",
  hashError: "\"%1\" komt helaas niet overeen met een opgeslagen bestand.",
  xmlError: "Uw opgeslagen bestand kan niet geladen worden. Is het misschien gemaakt met een andere versie van Blockly?",
  badXml: "Fout tijdens het verwerken van de XML:\n%1\n\nSelecteer \"OK\" om uw wijzigingen te negeren of \"Annuleren\" om de XML verder te bewerken.",
  pressed: "INGEDRUKT",
  setup: "zet klaar bij start",
  loop: "herhaal",
  dwenguino_main_program_structure: "Het eerste stukje code wordt maar een keer uitgevoerd bij het starten van het programma. De code in de 'herhaal' wordt steeds opnieuw herhaalt tot het programma stopt (bv. wanneer je de stekker uit het bordje trekt).",
  catDwenguino: "Dwenguino",
  delay_help: "Wacht een opgegeven aantal miliseconden. (1 miliseconde = 1000 seconden)",
  delay: "wacht",
  clearLCD: "Maak LCD scherm leeg",
  dwenguinoLCD: "Dwenguino LCD %1 %2 %3 Schrijf tekst: %4 Op rij: %5 Vanaf kolom: %6",
  pin: "pin",
  toneOnPin: "Speel toon af op ",
  frequency: "met frequentie",
  noToneOnPin: "Stop toon op",
  toneOnPinTooltip: "Speel een toon met een specifieke frequentie af op een pin",
  noToneOnPinTooltip: "Stop toon op bepaalde pin",
  trig: "trig pin nummer",
  echo: "echo pin nummer",
  sonarTooltip: "Deze blok leest de afstand in van een sonar sensor",
  miliseconds: "ms",
  digitalRead: "Lees digitale waarde van",
  digitalWriteToPin: "Schrijf op",
  digitalWriteValue: "de digitale waarde",
  digitalWriteTooltip: "Schrijf hoog of laag naar een pin van de Dwenguino",
  digitalReadTooltip: "Lees een digitale waarde (1/hoog of 0/laag) vanaf een bepaalde pin",
  high: "HOOG",
  low: "LAAG",
  highLowTooltip: "Komt overeen met een hoge (1) of lage (0) waarde op een pin.",
  tutsIntroduction: "Introductie",
  tutsTheremin: "Theremin",
  tutsRobot: "Robot",
  tutsBasicTest: "Basis test",
  simulator: "Simulator",
  setLedState: "Zet %1 %2",
  setLedStateTooltip: "Zet een LED op het arduino bord aan of uit",
  ledPinsTooltip: "Kies een LED die je aan of af wil zetten",
  dwenguinoOn: "AAN",
  dwenguinoOff: 'UIT',
  dwenguinoOnOffTooltip: "Selecteer AAN of UIT",
  dwenguinoServoBlock: "Servo motor %1 %2 %3 nummer %4 hoek %5",
  dwenguinoServoBlockTooltip: "Stel servo 1 of 2 in op een door jou gekozen hoek tussen 0 en 180 graden",
  dwenguinoDCMotorBlock: "DC Motor %1 %2 %3 nummer %4 snelheid %5",
  dwenguinoDCMotorBlockTooltip: "Stel de snelheid in van een van de twee motoren aangesloten op de Dwenguino. De snelheid is een waarde tussen -255 (volledige snelheid achteruit) en 255 (volledige snelheid vooruit)",
  dwenguinoAnalogWrite: "Schrijf naar %1 de analoge waarde %2",
  dwenguinoAnalogWriteTooltip: "Schrijf een analoge waarde tussen 0 en 255 naar de opgegeven pin",
  dwenguinoAnalogRead: "Lees analoge waarde van %1",
  dwenguinoAnalogWriteTooltip: "Lees een analoge waarde tussen 0 en 255 van de opgegeven pin",
  digitalReadSwitch: "Lees waarde knop %1",
  digitalReadSwitchTooltip: "lees de waarde van een van de dwenguino knoppen",
  north: "Noord",
  east:"Oost",
  south: "Zuid",
  west: "West",
  center: "Center",
  ledsReg: "LEDS",
  dwenguinoLedsRegTooltip: "Met deze blok kan je leds 0 tot 7 met één binair getal aan of af zetten. Bijvoorbeeld: 0b00001111 zal leds 0 tot 3 aanzetten en de rest uit.",

};

MSG.tutorials = {
    introduction: {},
    theremin: {},
    robot: {},
    basic_test: {}
};

MSG.tutorials.introduction = {
        step1Title: "Welkom bij DwenguinoBlockly",
        step1Content: "Hoi, ik ben Dwenguino! Ik zal jullie helpen om de interface te leren kennen!",
        step2aTitle: "Het Blockly codegebied",
        step2aContent: "Dit is het blockly codegebied",
        step2bTitle: "De Blockly toolbox",
        step2bContent: "Dit is de toolbox. Deze bevat alle blokken die je kan gebruiken om jouw programma te schrijven. Afhankelijk van het niveau dat je gekozen hebt zie je meer of minder blokken. Ga eens op verkenning en bekijk welke blokken er allemaal zijn.",
        step3Title: "Taal instellen",
        step3Content: "Hier kan je een andere taal selecteren",
        step4Title: "De moeilijkheidsgraad",
        step4Content: "Deze schuifbalk kan je gebruiken om De moeilijkheidsgraad in te stellen. Op hogere niveaus heb je meer geavanceerde blokken. Om deze te gebruiken Beheers je best eerst de blokken op lagere niveaus. Voorlopig zijn er maar twee niveaus die blokjes bevatten, in de toekomst komen er meer.",
        step5Title: "Dwengobooks",
        step5Content: "Dwengobooks zijn interactieve tutorials die je stap voor stap uitlegen hoe je een programma moet schrijven. Je leerkracht kan hier zelf ook lessen aan toevoegen zodat je makkelijk de lessen kan volgen.",
        step6Title: "Je code uploaden naar het Dwenguino bord",
        step6Content: "Als je denkt dat je programma af is kan je het uploaden naar het Dwenguino bord door op deze knop te drukken. (Vergeet niet om eerst het bord aan te sluiten op de computer met de usb kabel)",
        step7Title: "Openen",
        step7Content: "Deze knop geeft je de mogelijkheid om een bestand dat je eerder hebt opgeslagen te openen in de editor",
        step8Title: "Opslaan",
        step8Content: "Met deze knop kan je de blokken opslaan naar een lokaal bestand",
        step9Title: "De simulator",
        step9Content: "Met deze knop kan je in de toekomst de simulator openen, deze kan je gebruiken om je code eerst te testen voor je ze naar het bord upload."

};

MSG.tutorials.basic_test = {
    step1Title: "Test je basiskennis van Dwenguino",
    step1Content: "Wanneer je nog nooit een programma hebt geschreven voor de Dwenguino kan je deze test gebruiken om te kijken hoe ver je al staat",
    step2Title: "Sequentie",
    step2ContentA: "Bekijk de code die je ziet de blockly workspace. Wat is na het uitvoeren van de code de waarde die in a zit?",
    step2ContentB: "Wat is de waarde die in b zit?",
    stepEndTitle: "Goed zo!",
    stepEndContent: "Je hebt de quiz successvol afgelegd, op naar de volgende!"
};

MSG.tutorials.theremin = {
    step1Title: "Voorwoord",
    step1Content: "Vandaag de dag zijn elektronische apparaten niet meer weg te denken. Veel van deze apparaten worden aangestuurd door microcontrollers. In dit boekje verkennen we stap voor stap de prachtige wereld van de microcontrollers. Op het einde van dit boekje kan je zelf jouw eigen digitale piano programmeren. Hiermee heb je jouw eerste ingebed systeem ontwikkeld: een digitaal systeem dat in staat is te interageren met zijn omgeving.\
We doen dit met behulp van de Dwenguino, een eenvoudig, multi-functioneel microcontrollerplatform. De Dwenguino is voorzien van tal van handigheidjes zodat jouw eerste stappen vlot verlopen. Dankzij de compatibiliteit met Arduino IDE gebeurt dit met behulp van goed doordachte tools die zowel grafisch als tekstueel programmeren mogelijk maken.\
Experimenteren met microcontrollers kan zowel thuis als in de klas. Dit boekje is in de eerste plaats bedoeld voor leerkrachten die in het kader van hun lessen omgaan met informatica, elektronica of techniek. Maar jongeren kunnen dit boekje ook zelfstandig ontdekken. Dat maakt hun leer-ervaring nog intenser.\
Veel succes!",
    step2Title: "Overal microcontrollers",
    step2Content: "De voorbije decennia nam het aantal digitale apparaten in huis, tuin en werkomgeving exponentieel toe. Het begon met de introductie van eenvoudige zaken zoals wekkerradio's en elektrische tandenborstels maar ondertussen is zo goed als elk apparaat intelligent. Misschien heb je thuis wel een grasmaai- of stofzuigrobot, of zelfs een zelfrijdende auto, deze zijn de dag van vandaag zeker geen science fiction meer!\
Sterker nog, al deze apparaten worden steeds meer verbonden met het internet en vormen zo samen het Internet of Things (IoT). Studies schatten dat tegen 2020 meer dan 50 miljard apparaten verbonden zullen zijn met het internet. We spreken dan niet alleen over smartphones en tablets maar ook over bijvoorbeeld slimme rookmelders, intelligente koelkasten en robots.\
De basis van al deze apparaten zijn digitale rekensystemen die instaan voor de nodige intelligentie. Een voorbeeld hiervan is de microcontroller, deze omvat al het nodige om sensorgegevens te verwerken, berekeningen uit te voeren en acties te ondernemen.",
    step3Title: "Het bord",
};
