class Character {
    /**
     *
     * @param {String} name
     * @param {Integer} health
     * @param {Integer} attack
     * @param {Integer} defense
     * @param {Integer} speed
     * @param {Move} moves
     * @param {String} weapon
     */
    constructor(name, health, attack, defense, speed, moves=[], weapon) {
        this.name = name; // Name of the character
        this.health = health; // Health points
        this.attack = attack; // Attack power
        this.defense = defense; // Defense value
        this.speed = speed; // Speed, can affect turn order in battle or actions
    }

    takeDamage(damage) {
        const finalDamage = Math.max(0, damage - this.defense);
        this.health -= finalDamage;

        if(this.health < 0){
            this.health= 0;
        }

    }

    isAlive() {
        return this.health > 0;
    }
}