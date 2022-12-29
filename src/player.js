class Player {
  constructor(data){
    this.maxHp = data.maxHp;
    this.curHp = this.maxHp;
    this.name = data.name;
    this.alive = true;
    this.revealed = false;
  }


  /**
   * This method calculates a player's hp and determines if the character is still alive after input dmg.
   * @param {int} dmg 
   */
  takeDamage(dmg){
    //to be implemented
  }

  /**
   * This method calculates the player's hp after healing an input healAmt
   * @param {*} healAmt 
   */
  heal(healAmt){
    // to be implemented
  }
}



module.exports = Player