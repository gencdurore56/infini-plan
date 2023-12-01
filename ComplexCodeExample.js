/*
Filename: ComplexCodeExample.js
Content: 

This code example demonstrates a complex and elaborate JavaScript program that simulates a virtual pet game. The virtual pet (named "Pixel") has various attributes, including hunger, happiness, and energy. The program includes an interactive menu for the user to perform actions like feeding, playing, and putting the pet to sleep. Additionally, there is a random event system that can affect the pet's attributes and behavior.

The code is organized into classes to represent different aspects of the game, such as the Pet, Menu, and RandomEvent classes. It utilizes object-oriented programming concepts and includes comments throughout to provide explanations and improve readability.

Note: This is a simplified example to fit the length requirements, and some features might be omitted or simplified for brevity.


*/

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 50;
    this.happiness = 50;
    this.energy = 50;
  }

  feed(amount) {
    this.hunger -= amount;
    this.happiness += amount;
    this.energy += amount;
    console.log(`${this.name} was fed.`);
    this.checkStatus();
  }

  play() {
    this.hunger += 10;
    this.happiness += 20;
    this.energy -= 5;
    console.log(`${this.name} played with you.`);
    this.checkStatus();
  }

  sleep() {
    this.hunger += 5;
    this.happiness -= 10;
    this.energy += 30;
    console.log(`${this.name} went to sleep.`);
    this.checkStatus();
  }

  checkStatus() {
    console.log(`Current status of ${this.name}:
        Hunger: ${this.hunger}
        Happiness: ${this.happiness}
        Energy: ${this.energy}`);
  }
}

class Menu {
  constructor() {
    this.pet = null;
  }

  startGame() {
    const petName = prompt("Enter a name for your pet:");
    this.pet = new Pet(petName);
    console.log(`${this.pet.name} is born.`);
    this.showOptions();
  }

  showOptions() {
    console.log("What would you like to do?");
    console.log("1. Feed");
    console.log("2. Play");
    console.log("3. Sleep");
    console.log("4. Quit");
    const choice = prompt("Enter the number of your choice:");
    this.performAction(choice);
  }

  performAction(choice) {
    switch (choice) {
      case "1":
        const feedAmount = parseInt(prompt("Enter the amount to feed:"));
        this.pet.feed(feedAmount);
        break;
      case "2":
        this.pet.play();
        break;
      case "3":
        this.pet.sleep();
        break;
      case "4":
        console.log(`${this.pet.name} is going away...`);
        this.pet = null;
        break;
      default:
        console.log("Invalid choice. Please try again.");
        break;
    }

    if (this.pet) {
      this.showOptions();
    } else {
      console.log("Game over.");
    }
  }
}

class RandomEvent {
  constructor(pet) {
    this.pet = pet;
    this.events = [
      { name: "Rainy Day", hungerEffect: 5, happinessEffect: -10, energyEffect: -20 },
      { name: "Sunny Day", hungerEffect: -5, happinessEffect: 10, energyEffect: 10 },
      { name: "Party Time", hungerEffect: 15, happinessEffect: 30, energyEffect: -15 }
    ];
  }

  simulate() {
    const randomEvent = this.events[Math.floor(Math.random() * this.events.length)];
    this.pet.hunger += randomEvent.hungerEffect;
    this.pet.happiness += randomEvent.happinessEffect;
    this.pet.energy += randomEvent.energyEffect;
    console.log(`A random event occurred: "${randomEvent.name}".`);
    this.pet.checkStatus();
  }
}

const menu = new Menu();
menu.startGame();

// Simulate random events every 10 seconds
const randomEventTimer = setInterval(() => {
  const randomEvent = new RandomEvent(menu.pet);
  randomEvent.simulate();
}, 10000);

// Stop the random events after 2 minutes
setTimeout(() => {
  clearInterval(randomEventTimer);
}, 120000);