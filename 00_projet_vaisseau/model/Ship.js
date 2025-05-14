class Ship {
  id;
  name;
  className;
  type;
  baseSpeed;
  baseHealth;
  health;
  componnentSlots = {
    thruster: null,
    hull: null,
    shield: null,
    engine: null,
  };

  constructor(shipObj) {
    this.id = shipObj.id || shipObj._id || null;
    this.name = shipObj.name || null;
    this.className = shipObj.className || null;
    this.type = shipObj.type || null;
    this.baseSpeed = shipObj.baseSpeed || null;
    this.baseHealth = shipObj.baseHealth || null;
    this.health = shipObj.health || null;
    this.componnentSlots = shipObj.componnentSlots || {
      thruster: null,
      hull: null,
      shield: null,
      engine: null,
    };
  }

  installComponnent(componnent, slot) {}

  move() {
    if (
      !this.componnentSlots?.engine?.isWorking() ||
      !this.componnentSlots?.thruster?.isWorking()
    ) {
      // TODO : the ship cant move if it doesnt have a working engine
    }
  }

  /**
   * @param {*} target could be a ship or an asteroid or something else that has a health value
   */
  attack(target) {
    if (
      !this.componnentSlots?.weapon?.isWorking() ||
      !this.componnentSlots?.weapon?.hasAmmo()
    ) {
      // TODO : the ship cant attack if it doesnt have a working weapon or ammo
    }
  }

  move() {
    if (
      !this.componnentSlots?.engine?.isWorking() ||
      !this.componnentSlots?.thruster?.isWorking()
    ) {
      // TODO : the ship cant move if it doesnt have a working engine
    }
  }

  /**
   * @param {*} source could be a weapon or an asteroid or something else that has a damage value
   */
  receiveDamage(source) {
    // TODO : you have to decide how the damage calculation works
  }

  save(callback) {}

  remove(callback) {}

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      className: this.className,
      type: this.type,
      baseSpeed: this.baseSpeed,
      baseHealth: this.baseHealth,
      health: this.health,
      componnentSlots: {
        thruster: this.componnentSlots.thruster,
        hull: this.componnentSlots.hull,
        shield: this.componnentSlots.shield,
        engine: this.componnentSlots.engine,
      },
    };
  }

  toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      className: this.className,
      type: this.type,
      baseSpeed: this.baseSpeed,
      baseHealth: this.baseHealth,
      health: this.health,
      componnentSlots: {
        thruster: this.componnentSlots.thruster,
        hull: this.componnentSlots.hull,
        shield: this.componnentSlots.shield,
        engine: this.componnentSlots.engine,
      },
    });
  }
}

export default Ship;
