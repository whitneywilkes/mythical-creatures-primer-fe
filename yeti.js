class Yeti {
  constructor(name, home, weight){
    this.name = name;
    this.home = home;
    this.weight = weight;
    this.reindeer_eaten = ["Rudolph"]
  }

  run_away() {
    this.weight -= 10;
    console.log(`We'll have to outwit the ${name} with our superior intelligence.`)
  }

  move_to_secret_location(locations){
    locations[2].split("").reverse().join("")
  }

  number_of_reindeer_eaten() {
    this.reindeers_eaten.count
  }

  isHungry {
    if (this.weight > 300) {
      return false
    } else {
      return true

  }
}

yeti = new Yeti("Bumble", "Colorado")
yeti.number_of_reindeer_eaten()
yeti.isHungry()
yeti.bounce()
yeti.move_to_secret_location(["California", "Oregon"])
yeti.run_away()
