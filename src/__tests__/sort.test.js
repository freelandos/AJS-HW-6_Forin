import orderByProps from '../sort';

describe('orderByProps function', () => {
  it('should return correct array', () => {
    const character = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };
    const received = orderByProps(character, ['name', 'level']);
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];

    expect(received).toEqual(expected);
  });
});
