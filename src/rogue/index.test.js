import createRogue from '.';

describe('Rogue', () => {
  describe('#talk', () => {
    it('quitely greets you and whispers their name', () => {
      const character = createRogue('Balthazar');
      expect(character.talk()).toBe('hello. my name is balthazar.');
    });
  });

  describe('#attack', () => {
    describe('by default when attacked', () => {
      it('does not take damage', () => {
        const character = createRogue('Balthazar');
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        expect(character.health).toBe(50);
      });

      it('returns 5 points damage', () => {
        const character = createRogue('Balthazar');
        const counterDamage = character.attack();
        expect(counterDamage).toBe(5);
      });
    });
    describe('every 5th time attacked', () => {
      it('takes 5 points damage', () => {
        const character = createRogue('Balthazar');
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        expect(character.health).toBe(45);

        character.attack();
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        expect(character.health).toBe(40);
      });

      it('returns standard damage', () => {
        const character = createRogue('Balthazar');
        character.attack();
        character.attack();
        character.attack();
        character.attack();
        let counterDamage = character.attack();
        expect(counterDamage).toBe(1);

        character.attack();
        character.attack();
        character.attack();
        character.attack();
        counterDamage = character.attack();
        expect(counterDamage).toBe(1);
      });
    });
  });
});
