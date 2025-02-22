class Move {
    /**
     * 
     * @param {String} type - Type of move ("attack", "defense", "special move")
     * @param {Number} damageMultiplier - Move scalability based on character attack/defense stat
     * @return {void}
     */
    constructor(type, damageMultiplier) {
        this.type = type;
        this.damageMultiplier = damageMultiplier;
    }

    /**
     * Execute the move on a target (could be an opponent or the character itself)
     *
     * @param {Character} target
     */
    execute(target) {
        switch (this.type) {
            case 'attack':
                const damage = this.calculateDamage(user.attack, target.defense);
                target.takeDamage(damage);
                break;

            case 'defense':
                user.isGuarding = true; // Set the guard flag
                break;

            default:
                break;
        }
    }

     /**
      * Calculate the damage based on the attacker's and defender's stats
      *
      * @param {Number} attack - The attacker's attack stat
      * @param {Number} defense - The defender's defense stat
      * @returns {Number} finalDamage - The damage dealt to the target
      */
     calculateDamage(attack, defense) {
        const baseDamage = attack + this.damageMultiplier; // Apply multiplier to attack
        const finalDamage = Math.max(baseDamage - defense, 0); // Subtract defense, but ensure no negative damage
        return finalDamage;
     }
}