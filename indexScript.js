"use strict";
const gameBoard = document.querySelector('.gameBoard');
let monopolyBoardArr = [
    {
        "name": "GO",
        "type": "special",
        "description": "Collect $200 when you pass."
    },
    {
        "name": "Mediterranean Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [2, 10, 30, 90, 160, 250],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Community Chest",
        "type": "special",
        "description": "Draw a Community Chest card."
    },
    {
        "name": "Baltic Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [4, 20, 60, 180, 320, 450],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Income Tax",
        "type": "tax",
        "amount": 200
    },
    {
        "name": "Reading Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Oriental Avenue",
        "type": "property",
        "color": "light blue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card."
    },
    {
        "name": "Vermont Avenue",
        "type": "property",
        "color": "light blue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Connecticut Avenue",
        "type": "property",
        "color": "light blue",
        "price": 120,
        "rent": [8, 40, 100, 300, 450, 600],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Jail",
        "type": "special",
        "description": "Just visiting or in jail."
    },
    {
        "name": "St. Charles Place",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Electric Company",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10]
    },
    {
        "name": "States Avenue",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Virginia Avenue",
        "type": "property",
        "color": "pink",
        "price": 160,
        "rent": [12, 60, 180, 500, 700, 900],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "St. James Place",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Tennessee Avenue",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "New York Avenue",
        "type": "property",
        "color": "orange",
        "price": 200,
        "rent": [16, 80, 220, 600, 800, 1000],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Free Parking",
        "type": "special",
        "description": "No action."
    },
    {
        "name": "Kentucky Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card."
    },
    {
        "name": "Indiana Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Illinois Avenue",
        "type": "property",
        "color": "red",
        "price": 240,
        "rent": [20, 100, 300, 750, 925, 1100],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "B&O Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Atlantic Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Ventnor Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Water Works",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10]
    },
    {
        "name": "Marvin Gardens",
        "type": "property",
        "color": "yellow",
        "price": 280,
        "rent": [24, 120, 360, 850, 1025, 1200],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Go to Jail",
        "type": "special",
        "description": "Move directly to Jail. Do not pass GO, do not collect $200."
    },
    {
        "name": "Pacific Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "North Carolina Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Pennsylvania Avenue",
        "type": "property",
        "color": "green",
        "price": 320,
        "rent": [28, 150, 450, 1000, 1200, 1400],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Short Line",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Park Place",
        "type": "property",
        "color": "dark blue",
        "price": 350,
        "rent": [35, 175, 500, 1100, 1300, 1500],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Luxury Tax",
        "type": "tax",
        "amount": 100
    },
    {
        "name": "Boardwalk",
        "type": "property",
        "color": "dark blue",
        "price": 400,
        "rent": [50, 200, 600, 1400, 1700, 2000],
        "houseCost": 200,
        "hotelCost": 200
    }
];
monopolyBoardArr.map((item, index) => {
    var _a;
    item.id = index;
    if ((_a = item.color) === null || _a === void 0 ? void 0 : _a.includes(' ')) {
        item.color = item.color.replace(' ', '');
    }
});
console.log(monopolyBoardArr);
const gameBoardArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    35, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11,
    34, -1, -1, -1, -1, -1, -1, -1, -1, -1, 12,
    33, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13,
    32, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14,
    31, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15,
    30, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16,
    29, -1, -1, -1, -1, -1, -1, -1, -1, -1, 17,
    28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18
];
let playersData = [
    {
        player: 'car',
        turn: true,
        boxId: 0,
        cash: 1000,
        img: './image/car.png',
        property: []
    },
    {
        player: 'hat',
        turn: false,
        boxId: 0,
        cash: 1000,
        img: './image/hat.png',
        property: []
    },
];
const rndCeil = (num) => Math.ceil(Math.random() * num);
gameBoardArr.map((box, index) => {
    gameBoard.innerHTML += `<div class="box empty"></div> `;
    const gameBox = document.querySelectorAll('.box');
    monopolyBoardArr.map(item => {
        if (box === item.id) {
            gameBox[index].classList.remove('empty');
            gameBox[index].classList.add('gameCard');
            gameBox[index].innerHTML = `
            <div class="h-50">
            <div class="rounded-1 w-100" style="background-color: ${item.color}; height: 10px"></div>
            <div class="text-center">${item.name}</div>
            </div>
            `;
            if (item.price) {
                gameBox[index].innerHTML += `
                    <div class="d-flex align-items-end h-50">
                      <div>$${item.price}</div>
                    </div>
                 `;
            }
        }
        const startField = document.querySelector('.start');
        const gameLine = document.querySelector('.gameLine');
        const whichPlayer = document.querySelector('.whichPlayer > div');
        const cardPlayer1 = document.querySelector('.cardPlayer1');
        const cardPlayer2 = document.querySelector('.cardPlayer2');
        const playerMoney1 = document.querySelector('.cardPlayer1 h5');
        const playerMoney2 = document.querySelector('.cardPlayer2 h5');
        function updatePlayerMoney() {
            playerMoney1.innerText = `Money: ${playersData[0].cash}`;
            playerMoney2.innerText = `Money: ${playersData[1].cash}`;
        }
        const startBtn = document.querySelector('.startBtn');
        startBtn.onclick = () => {
            const rollDiceBtn = document.querySelector('.rollDiceBtn');
            gameBox[0].innerHTML += `
                <div class="player player1">
                    <img src="${playersData[0].img}" alt="">
                </div>
                <div class="player player2">
                    <img src="${playersData[1].img}" alt="">
                </div>
            `;
            startBtn.style.display = 'none';
            startField.style.opacity = '0.2';
            gameLine.style.display = 'flex';
            //@ts-ignore
            cardPlayer1.parentElement.style.display = 'block';
            //@ts-ignore
            cardPlayer1.parentElement.style.zIndex = '999';
            cardPlayer1.style.opacity = '1';
            cardPlayer2.style.opacity = '1';
            updatePlayerMoney();
            playerTurn();
            function playerTurn() {
                playersData.map((item, index) => {
                    if (item.turn) {
                        whichPlayer.innerHTML = `<img src="${item.img}" alt="">`;
                        rollDiceBtn.onclick = () => {
                            gameBoardArr.map((box, i) => {
                                monopolyBoardArr.map((e) => {
                                    if (box === e.id) {
                                        if (box === item.boxId) {
                                            if (index === 0) {
                                                gameBox[i].innerHTML = `
                                                    <div class="h-50">
                                                        <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                        <div class="text-center">${e.name}</div>
                                                    </div>
                                                `;
                                                if (box === playersData[1].boxId) {
                                                    gameBox[i].innerHTML += `
                                                        <div class="player player2">
                                                            <img src="${playersData[1].img}" alt="">
                                                        </div>
                                                    `;
                                                }
                                            }
                                            else if (index === 1) {
                                                gameBox[i].innerHTML = `
                                                    <div class="h-50">
                                                        <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                        <div class="text-center">${e.name}</div>
                                                    </div>
                                                `;
                                                if (box === playersData[0].boxId) {
                                                    gameBox[i].innerHTML += `
                                                        <div class="player player2">
                                                            <img src="${playersData[0].img}" alt="">
                                                        </div>
                                                    `;
                                                }
                                            }
                                        }
                                    }
                                });
                            });
                            item.boxId += rndCeil(6);
                            if (item.boxId > 35) {
                                item.boxId -= 35;
                                item.cash += 200;
                                updatePlayerMoney();
                            }
                            console.log(item.boxId);
                            gameBoardArr.map((box, i) => {
                                if (box === item.boxId) {
                                    if (index === 0) {
                                        item.turn = false;
                                        playersData[1].turn = true;
                                        gameBox[i].innerHTML += `
                                            <div class="player player1">
                                                <img src="${playersData[0].img}" alt="">
                                            </div>
                                          `;
                                        playerTurn();
                                    }
                                    else if (index === 1) {
                                        item.turn = false;
                                        playersData[0].turn = true;
                                        gameBox[i].innerHTML += `
                                            <div class="player player2">
                                                <img src="${playersData[1].img}" alt="">
                                            </div>
                                         `;
                                        playerTurn();
                                    }
                                }
                            });
                        };
                    }
                });
            }
        };
    });
});
