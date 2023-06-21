# DNE

Hello and welcome to the original adventure!

Introduction

Somewhere nearby is a mysterious factory that has no name, where on holidays you can see crowds of people in dark raincoats and strangely shaped glasses. Rumor has it that some of the people who enter are never seen again. They say that magic works in the factory. This program will become your eyes and hands.

This program was originally developed by Yehor Navischo in Kyiv. Green House Art Residency provided all the necessary resources for the development of this game during a full-scale Russian invasion to the territory of the sovereign state of Ukraine. The game is based both on my favorite board games: Munchkin, Scythe, Fights of Battle Mages - and computer games: Cyberpunk 2077, Colossal Cave Adventure.
This version was implemented using JS+HTML+CSS and can be started from any modern browser.

Command entry
The most elementary parser of this program will accept two-word commands without regard to case.
The parser checks only the first two words, the rest are ignored.

Installation
1. Unpack the archive with the game
2. Install node.js (https://nodejs.org/en/download) and cmder (https://cmder.app/) mini
3. Install packages with the "npm i" command. After opening cmder, move to the game directory with the command "cd <path_to_directory>"
4. Insert your name in config on line 87. By opening it by double-click on the file in the root of the game directory
5. Start session build with "npm run start"

Have fun!

Game launch
To start a single player game, enter the login "navi" and the password "continueisanart"

Multiplayer config sample
```
{
  "players": [
    {
      "name": "navi",
      "game": {},
      "sound": []
    }
  ]
}
```

Making atmosphere

Custom backgrounds
1. Add your images to ./libs/screen
2. Write name of every image to array SCREEN_NAMES in ./js/page/screen.page.js

Recommended sound solution
DDJ-400+SPS-5&5 on a good large table will be perfect for 3 Players
