import createCharacter from '../character';

const createRogue = (name) => {
  const rogue = createCharacter(name);

  rogue.timesAttacked = 0;

  rogue.talk = () => createCharacter(rogue.name).talk().toLowerCase().replace('!', '.');

  rogue.attack = () => {
    rogue.timesAttacked += 1;
    if (rogue.isNthAttack(5)) rogue.health -= 5;
    return (rogue.isNthAttack(5)) ? 1 : 5;
  };

  rogue.isNthAttack = (n) => (rogue.timesAttacked % n) === 0;

  return rogue;
};

export default createRogue;
