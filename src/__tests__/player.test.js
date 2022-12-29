const Player = require('../player')

const data = {
  maxHp : 12,
  name : "Maggie"
}


describe("Testing the Player Class capabilities", () => {

  it('Taking damage correctly reduces cur hp', () => {
    const player = new Player(data);
    
    player.takeDamage(4);

    expect(player.curHp).toBe(8);
    expect(player.maxHp).toBe(12);
    expect(player.alive).toBe(true);
  });

  it("Taking more hp than current doesn't make hp go negative", () => {
    const player = new Player(data);
    player.curHp = 5;

    player.takeDamage(6)

    expect(player.curHp).toBe(0);
  });

  it("Taking lethal damage kills player", () => {
    const player = new Player(data);
    player.curHp = 5;

    player.takeDamage(5)

    expect(player.curHp).toBe(0);
    expect(player.alive).toBe(false);
  });


  it("Healing player updates hp correctly", () => {
    const player = new Player(data);
    player.curHp = 5;

    player.heal(5);

    expect(player.curHp).toBe(10);
    expect(player.alive).toBe(true);
  });


  it("Healing player doesn't overheal", () => {
    const player = new Player(data);
    player.curHp = 5;

    player.heal(9);

    expect(player.curHp).toBe(12);
  });

});