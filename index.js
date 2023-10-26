class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atack() {
    let tools = "";

    if (this.type === "Warrior") {
      tools = "sword";
      console.log(`The ${this.type} attacked using ${tools}`);
    } else if (this.type === "Mago") {
      tools = "magical";
      console.log(`The ${this.type} attacked using ${tools}`);
    } else if (this.type === "Monk") {
      tools = "Magical";
      console.log(`The ${this.type} attacked using ${tools}`);
    } else if (this.type === "Ninja") {
      tools = "shuriken";
      console.log(`The ${this.type} attacked using ${tools}`);
    }
  }
}

let resultHero = new hero("Juramar", 23, "Ninja");
resultHero.atack();
