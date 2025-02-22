class Move {
    /**
     *
     * @param {*} type
     * @param {*} effect
     * @param {*} damageMultiplier
     */
    constructor(type, effect, damageMultiplier = 1) {
        this.type = type; // Type of move (e.g., "attack", "defense", "buff", etc.)
        this.effect = effect; // Effect description or special behavior (like Guard)
        this.damageMultiplier = damageMultiplier; // How much the move scales with character stats
    }

    /**
     * Execute the move on a target (could be an opponent or the character itself)
     *
     * @param {*} target
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
      * @param {*} attack
      * @param {*} defense
      * @returns
      */
     calculateDamage(attack, defense) {
        const baseDamage = attack * this.damageMultiplier; // Apply multiplier to attack
        const finalDamage = Math.max(baseDamage - defense, 0); // Subtract defense, but ensure no negative damage
        return finalDamage;
     }
}