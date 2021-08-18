import Character from '../character';

class Rogue extends Character {
  constructor(name = '') {
    super(name);
    this.timesAttacked = 0;
  }

  talk() { return super.talk().toLowerCase().replace('!', '.'); }

  attack() {
    this.timesAttacked += 1;
    if (this.isNthAttack(5)) this.health -= 5;
    return (this.isNthAttack(5)) ? 1 : 5;
  }

  isNthAttack(n) {
    return (this.timesAttacked % n) === 0;
  }
}

export default Rogue;
