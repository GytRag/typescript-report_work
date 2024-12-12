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
// array of bought boxes
let boughtBoxesArr = [];
const rndCeil = (num) => Math.ceil(Math.random() * num);
//     MAKE BOARD OF GAME
gameBoardArr.map((box, index) => {
    gameBoard.innerHTML += `<div class="box empty"></div> `;
    const gameBox = document.querySelectorAll('.box');
    //MAKE GAME BOXES
    monopolyBoardArr.map(field => {
        if (box === field.id) {
            gameBox[index].classList.remove('empty');
            gameBox[index].classList.add('gameCard');
            gameBox[index].innerHTML = `
            <div class="h-50">
            <div class="rounded-1 w-100" style="background-color: ${field.color}; height: 10px"></div>
            <div class="text-center">${field.name}</div>
            </div>
            `;
            if (field.price) {
                gameBox[index].innerHTML += `
                    <div class="d-flex align-items-end h-50">
                      <div>$${field.price}</div>
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
        // FUNCTION UPDATE PLAYERS MONEY
        function updatePlayerMoney() {
            playerMoney1.innerText = `Money: ${playersData[0].cash}`;
            playerMoney2.innerText = `Money: ${playersData[1].cash}`;
        }
        const startBtn = document.querySelector('.startBtn');
        // START GAME, UPDATE BOARD
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
            // FUNCTION MOVE PLAYERS, UPDATE BOXES
            function playerTurn() {
                playersData.map((item, index) => {
                    if (item.turn) {
                        whichPlayer.innerHTML = `<img src="${item.img}" alt="">`;
                        rollDiceBtn.onclick = () => {
                            // UPDATE PREVIOUS BOX
                            function updatePreviousBox() {
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
                            }
                            updatePreviousBox();
                            // DICE ROLLED NUMBER, UPDATE MONEY IF MOVES THROUGH "GO"
                            item.boxId += rndCeil(6);
                            if (item.boxId > 35) {
                                item.boxId -= 35;
                                item.cash += 200;
                                updatePlayerMoney();
                            }
                            // UPDATE BOX WHERE PLAYER MOVE (SHOW PLAYER ON NEW BOX)
                            gameBoardArr.map((box, i) => {
                                //     need to check, if any player has bought this box
                                function checkIfAnyHasBox(playerNum) {
                                    function buyAndUpdate() {
                                        gameBoardArr.map((box, i) => {
                                            let playerClass = '';
                                            monopolyBoardArr.map((e) => {
                                                if (e.type === 'property' || e.type === 'railroad' || e.type === 'utility') {
                                                    if (box === e.id) {
                                                        if (box === item.boxId) {
                                                            if (index === 0) {
                                                                playerClass = 'player1';
                                                            }
                                                            else {
                                                                playerClass = 'player2';
                                                            }
                                                            const innerGameBoxNoButton = () => {
                                                                gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                                     <div class="text-center">${e.name}</div>
                                                                </div>
                                                                 
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;
                                                            };
                                                            const innerGameBoxWithButton = () => {
                                                                gameBox[i].innerHTML = `
                                                                    <div class="h-50">
                                                                        <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                                         <div class="text-center">${e.name}</div>
                                                                    </div>
                                                                     <div class="d-flex align-items-end h-50 justify-content-around">
                                                                      <div>$${e.price}</div>
                                                                      <div><button class="buyBtn">Buy</button></div>
                                                                    </div>
                                                                    <div class="player ${playerClass}">
                                                                        <img src="${playersData[index].img}" alt="">
                                                                    </div>
                                                                `;
                                                            };
                                                            const innerOnotherPlayerIfNeed = () => {
                                                                if (index === 0 && playersData[1].boxId === item.boxId) {
                                                                    gameBox[i].innerHTML += `
                                                                    <div class="player player2">
                                                                        <img src="${playersData[1].img}" alt="">
                                                                    </div>
                                                                `;
                                                                }
                                                                else if (index === 1 && playersData[0].boxId === item.boxId) {
                                                                    gameBox[i].innerHTML += `
                                                                    <div class="player player1">
                                                                        <img src="${playersData[0].img}" alt="">
                                                                    </div>
                                                                `;
                                                                }
                                                            };
                                                            innerGameBoxWithButton();
                                                            innerOnotherPlayerIfNeed();
                                                            //--------------- BUY BUTTON LOGIC------------
                                                            const buyBtn = document.querySelectorAll('.buyBtn');
                                                            // FUNCTION TO BUY BOX AND UPDATE PLAYER FIELD
                                                            function innerPlayerField(playerField) {
                                                                if (e.type === 'property') {
                                                                    //@ts-ignore
                                                                    playerField.innerHTML += `
                                                                            <div class="box gameCard">
                                                                                <div class="h40">
                                                                                    <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                                                     <div class="text-center" style="font-size: 10px" >${e.name}</div>
                                                                                </div>
                                                                                 <div class="h33">
                                                                                  <div style="font-size: 10px">House cost: $${e.houseCost}</div>
                                                                                  <div style="font-size: 10px">Hotel cost: $${e.hotelCost}</div>
                                                                                </div>
                                                                           </div>
                                                                          `;
                                                                }
                                                                else {
                                                                    //@ts-ignore
                                                                    playerField.innerHTML += `
                                                                            <div class="box gameCard">
                                                                                <div class="h40">
                                                                                    <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                                                     <div class="text-center" style="font-size: 10px" >${e.name}</div>
                                                                                </div>
                                                                                 <div class="h33">
                                                                                </div>
                                                                           </div>
                                                                          `;
                                                                }
                                                            }
                                                            buyBtn.forEach((btn) => {
                                                                if (index === 0 && !playersData[0].turn) {
                                                                    btn.onclick = () => {
                                                                        //@ts-ignore
                                                                        playersData[0].cash -= e.price;
                                                                        //@ts-ignore
                                                                        playersData[0].property.push(e.id);
                                                                        // @ts-ignore
                                                                        boughtBoxesArr.push(e.id);
                                                                        updatePlayerMoney();
                                                                        innerGameBoxNoButton();
                                                                        innerOnotherPlayerIfNeed();
                                                                        //@ts-ignore
                                                                        innerPlayerField(cardPlayer1);
                                                                    };
                                                                }
                                                                else if (index === 1 && !playersData[1].turn) {
                                                                    btn.onclick = () => {
                                                                        //@ts-ignore
                                                                        playersData[1].cash -= e.price;
                                                                        //@ts-ignore
                                                                        playersData[1].property.push(e.id);
                                                                        // @ts-ignore
                                                                        boughtBoxesArr.push(e.id);
                                                                        updatePlayerMoney();
                                                                        innerGameBoxNoButton();
                                                                        innerOnotherPlayerIfNeed();
                                                                        //@ts-ignore
                                                                        innerPlayerField(cardPlayer2);
                                                                    };
                                                                }
                                                            });
                                                        }
                                                    }
                                                }
                                            });
                                        });
                                    }
                                    if (item.property.length > 0 || playersData[playerNum].property.length > 0) {
                                        //@ts-ignore
                                        if (!boughtBoxesArr.includes(item.boxId)) {
                                            // if one have some box, add BUY button to other
                                            if (item.property.length === 0) {
                                                buyAndUpdate();
                                            }
                                            else {
                                                item.property.forEach((property) => {
                                                    playersData[playerNum].property.forEach((prop) => {
                                                        if (prop.propertyId === property.propertyId) {
                                                            console.log('oponent have this property');
                                                        }
                                                        else if (box === property.propertyId) {
                                                            console.log('I have this property');
                                                        }
                                                    });
                                                });
                                            }
                                        }
                                    }
                                    else {
                                        // ------UPDATE IF NO ONE HAVE THIS BOX
                                        buyAndUpdate();
                                    }
                                }
                                // -----------------------------------------------------
                                if (box === item.boxId) {
                                    if (index === 0) {
                                        item.turn = false;
                                        playersData[1].turn = true;
                                        gameBox[i].innerHTML += `
                                             <div class="player player1">
                                                <img src="${playersData[0].img}" alt="">
                                            </div>
                                          `;
                                        checkIfAnyHasBox(1);
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
                                        checkIfAnyHasBox(0);
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
