import Character from '../character';

class Wizard extends Character {
  constructor(name = '') {
    super(name);
    this.timesAttacked = 0;
    this.standardDamage = 1;
  }

  talk() { return super.talk().toUpperCase(); }

  attack() {
    this.timesAttacked += 1;
    if (!this.isUnderProtection()) this.health -= 10;
    return this.standardDamage * (this.isUnderProtection()) ? 2 : 1;
  }

  isUnderProtection() { return this.timesAttacked <= 3; }
}

export default Wizard;
