// Level System Placeholder

class LevelSystem {
    constructor() {
        this.currentLevel = 1;
    }

    increaseLevel() {
        this.currentLevel++;
    }

    getCurrentLevel() {
        return this.currentLevel;
    }
}

export default LevelSystem;
