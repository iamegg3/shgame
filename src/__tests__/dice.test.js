const diceLibrary = require('../dice')


describe("Testing dice library", () => {


  it("Test if dice roll is between 1-6", ()=>{
    const rolls = new Set();

    for(var i = 0; i < 200; i ++){
      rolls.add(diceLibrary.rollDice())
    }

    const regularRolls = [1,2,3,4,5,6]
    const wrongRolls = [...rolls].filter(x => !regularRolls.includes(x));
    
    expect(wrongRolls).toHaveLength(0);

  });


  it("Test if dice roll is between 1-3", ()=>{
    const rolls = new Set();

    for(var i = 0; i < 200; i ++){
      rolls.add(diceLibrary.rollSmallDice())
    }

    const regularRolls = [1,2,3]
    const wrongRolls = [...rolls].filter(x => !regularRolls.includes(x));

    expect(wrongRolls).toHaveLength(0);

  });
})