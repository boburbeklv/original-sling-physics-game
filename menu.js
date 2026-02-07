'use strict';

// Main menu system placeholder

class MainMenu {
    constructor() {
        this.menuOptions = ['Start Game', 'Settings', 'Exit'];
    }

    displayMenu() {
        console.log('Main Menu:');
        this.menuOptions.forEach(option => {
            console.log(option);
        });
    }
}

// Exporting MainMenu for use in other files
module.exports = MainMenu;