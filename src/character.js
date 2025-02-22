class Character {

    constructor(name, health, attack, magic, defense, speed) {
        this.name = name; // Name of the character
        this.health = health; // Health points
        this.attack = attack; // Attack power
        this.magic = magic;
        this.defense = defense; // Defense value
        this.speed = speed; // Speed, can affect turn order in battle or actions
    }

    takeDamage(damage) {
        const finalDamage = Math.max(0, damage - this.defense); 
        this.health -= finalDamage;

        if(this.health<0){
            this.health=0
        }

    }

    isAlive() {
        return this.health > 0;
    }

    
}