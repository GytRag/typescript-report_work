const gameBoard = document.querySelector('.gameBoard') as HTMLElement;

interface MonopolyCardInterface {
    description?: string,
    name: string,
    type: string,
    color?: string,
    price?: number,
    hotelCost?: number,
    houseCost?: number,
    rent?: number[],
    amount?: number,
    rentMultiplier?: number[],
    id?: number,
    numberOfHouses: number[]
}
interface PlayerDataInterface {
    player: string,
    turn: boolean,
    boxId: number,
    cash: number,
    img: string,
    property: number [],
    brownArr: string[],
    lightblueArr: string[],
    pinkArr: string[],
    orangeArr: string[],
    redArr: string[],
    yellowArr: string[],
    greenArr: string[],
    darkblueArr: string[],
    railroadArr: string[],
    utilityArr: string[]
}

let monopolyBoardArr: MonopolyCardInterface[] = [
    {
        "name": "GO",
        "type": "special",
        "description": "Collect $200 when you pass.",
        numberOfHouses: []
    },
    {
        "name": "Mediterranean Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [2, 10, 30, 90, 160, 250],
        "houseCost": 50,
        "hotelCost": 50,
        numberOfHouses: []
    },
    {
        "name": "Community Chest",
        "type": "special",
        "description": "Draw a Community Chest card.",
        numberOfHouses: []
    },
    {
        "name": "Baltic Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [4, 20, 60, 180, 320, 450],
        "houseCost": 50,
        "hotelCost": 50,
        numberOfHouses: []
    },
    {
        "name": "Income Tax",
        "type": "tax",
        "amount": 200,
        numberOfHouses: []
    },
    {
        "name": "Reading Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200],
        numberOfHouses: []
    },
    {
        "name": "Oriental Avenue",
        "type": "property",
        "color": "light blue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50,
        numberOfHouses: []
    },
    {
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card.",
        numberOfHouses: []
    },
    {
        "name": "Vermont Avenue",
        "type": "property",
        "color": "light blue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50,
        numberOfHouses: []
    },
    {
        "name": "Connecticut Avenue",
        "type": "property",
        "color": "light blue",
        "price": 120,
        "rent": [8, 40, 100, 300, 450, 600],
        "houseCost": 50,
        "hotelCost": 50,
        numberOfHouses: []
    },
    {
        "name": "Jail",
        "type": "special",
        "description": "Just visiting or in jail.",
        numberOfHouses: []
    },
    {
        "name": "St. Charles Place",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100,
        numberOfHouses: []
    },
    {
        "name": "Electric Company",
        "type": "utility",
        "price": 150,
        "rent": [4, 10],
        numberOfHouses: []
    },
    {
        "name": "States Avenue",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100,
        numberOfHouses: []
    },
    {
        "name": "Virginia Avenue",
        "type": "property",
        "color": "pink",
        "price": 160,
        "rent": [12, 60, 180, 500, 700, 900],
        "houseCost": 100,
        "hotelCost": 100,
        numberOfHouses: []
    },
    {
        "name": "St. James Place",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100,
        numberOfHouses: []
    },
    {
        "name": "Tennessee Avenue",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100,
        numberOfHouses: []
    },
    {
        "name": "New York Avenue",
        "type": "property",
        "color": "orange",
        "price": 200,
        "rent": [16, 80, 220, 600, 800, 1000],
        "houseCost": 100,
        "hotelCost": 100,
        numberOfHouses: []
    },
    {
        "name": "Free Parking",
        "type": "special",
        "description": "No action.",
        numberOfHouses: []
    },
    {
        "name": "Kentucky Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150,
        numberOfHouses: []
    },
    {
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card.",
        numberOfHouses: []
    },
    {
        "name": "Indiana Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150,
        numberOfHouses: []
    },
    {
        "name": "Illinois Avenue",
        "type": "property",
        "color": "red",
        "price": 240,
        "rent": [20, 100, 300, 750, 925, 1100],
        "houseCost": 150,
        "hotelCost": 150,
        numberOfHouses: []
    },
    {
        "name": "B&O Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200],
        numberOfHouses: []
    },
    {
        "name": "Atlantic Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150,
        numberOfHouses: []
    },
    {
        "name": "Ventnor Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150,
        numberOfHouses: []
    },
    {
        "name": "Water Works",
        "type": "utility",
        "price": 150,
        "rent": [4, 10],
        numberOfHouses: []
    },
    {
        "name": "Marvin Gardens",
        "type": "property",
        "color": "yellow",
        "price": 280,
        "rent": [24, 120, 360, 850, 1025, 1200],
        "houseCost": 150,
        "hotelCost": 150,
        numberOfHouses: []
    },
    {
        "name": "Go to Jail",
        "type": "special",
        "description": "Move directly to Jail. Do not pass GO, do not collect $200.",
        numberOfHouses: []
    },
    {
        "name": "Pacific Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200,
        numberOfHouses: []
    },
    {
        "name": "North Carolina Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200,
        numberOfHouses: []
    },
    {
        "name": "Pennsylvania Avenue",
        "type": "property",
        "color": "green",
        "price": 320,
        "rent": [28, 150, 450, 1000, 1200, 1400],
        "houseCost": 200,
        "hotelCost": 200,
        numberOfHouses: []
    },
    {
        "name": "Short Line",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200],
        numberOfHouses: []
    },
    {
        "name": "Park Place",
        "type": "property",
        "color": "dark blue",
        "price": 350,
        "rent": [35, 175, 500, 1100, 1300, 1500],
        "houseCost": 200,
        "hotelCost": 200,
        numberOfHouses: []
    },
    {
        "name": "Luxury Tax",
        "type": "tax",
        "amount": 100,
        numberOfHouses: []
    },
    {
        "name": "Boardwalk",
        "type": "property",
        "color": "dark blue",
        "price": 400,
        "rent": [50, 200, 600, 1400, 1700, 2000],
        "houseCost": 200,
        "hotelCost": 200,
        numberOfHouses: []
    }
]

monopolyBoardArr.map((item, index) => {
    item.id = index
    if (item.color?.includes(' ')) {
        item.color = item.color.replace(' ', '')
    }
})

console.log(monopolyBoardArr)

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
]

let playersData: PlayerDataInterface[] = [
    {
        player: 'car',
        turn: true,
        boxId: 0,
        cash: 1000,
        img: './image/car.png',
        property: [],
        brownArr: [],
        lightblueArr: [],
        pinkArr: [],
        orangeArr: [],
        redArr: [],
        yellowArr: [],
        greenArr: [],
        darkblueArr: [],
        railroadArr: [],
        utilityArr: []
    },
    {
        player: 'hat',
        turn: false,
        boxId: 0,
        cash: 1000,
        img: './image/hat.png',
        property: [],
        brownArr: [],
        lightblueArr: [],
        pinkArr: [],
        orangeArr: [],
        redArr: [],
        yellowArr: [],
        greenArr: [],
        darkblueArr: [],
        railroadArr: [],
        utilityArr: []
    },
];

// array of bought boxes
let boughtBoxesArr: number[] = [];
let boughtRailroadArr:number[] =[];
let boughtUtilityArr:number[] =[];


const rndCeil = (num: number) => Math.ceil(Math.random() * num)
//     MAKE BOARD OF GAME
gameBoardArr.map((box, index) => {

    gameBoard.innerHTML += `<div class="box empty"></div> `
    const gameBox = document.querySelectorAll('.box') as NodeListOf<HTMLElement>

    //MAKE GAME BOXES
    monopolyBoardArr.map(field => {
        if (box === field.id) {
            gameBox[index].classList.remove('empty')
            gameBox[index].classList.add('gameCard')

            gameBox[index].innerHTML = `
            <div class="h-50">
            <div class="rounded-1 w-100" style="background-color: ${field.color}; height: 10px"></div>
            <div class="text-center">${field.name}</div>
            </div>
            `
            if (field.price) {
                gameBox[index].innerHTML += `
                    <div class="d-flex align-items-end h-50">
                      <div>$${field.price}</div>
                    </div>
                 `
            }
        }

        const startField = document.querySelector('.start') as HTMLElement;
        const gameLine = document.querySelector('.gameLine') as HTMLElement;
        const whichPlayer = document.querySelector('.whichPlayer > div') as HTMLElement;

        const cardPlayer1 = document.querySelector('.cardPlayer1') as HTMLElement;
        const cardPlayer2 = document.querySelector('.cardPlayer2') as HTMLElement;
        const playerMoney1 = document.querySelector('.cardPlayer1 h5') as HTMLElement;
        const playerMoney2 = document.querySelector('.cardPlayer2 h5') as HTMLElement;
        const cardPlayer1Boxes = document.querySelector('.cardPlayer1Boxes') as HTMLElement;
        const cardPlayer2Boxes = document.querySelector('.cardPlayer2Boxes') as HTMLElement;
        const gamePlayComment = document.querySelector('.gamePlayComment') as HTMLElement;

        // FUNCTION UPDATE PLAYERS MONEY
        function updatePlayerMoney() {
            playerMoney1.innerText = `Money: ${playersData[0].cash}`;
            playerMoney2.innerText = `Money: ${playersData[1].cash}`;
        }

        const startBtn = document.querySelector('.startBtn') as HTMLButtonElement;

        // START GAME, UPDATE BOARD
        startBtn.onclick = () => {
            const rollDiceBtn = document.querySelector('.rollDiceBtn') as HTMLButtonElement;

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
            updatePlayerMoney()
            playerTurn()

            // FUNCTION MOVE PLAYERS, UPDATE BOXES
            function playerTurn() {
                playersData.map((item, index) => {

                    if (item.turn) {
                        whichPlayer.innerHTML = `<img src="${item.img}" alt="">`
                        rollDiceBtn.onclick = () => {

                            if(item.cash > 0){
                                // FUNCTION TO UPDATE PLAYER FIELD (box card)
                                function updatePlayerField() {
                                    cardPlayer1Boxes.innerHTML = '';
                                    playersData[0].property.sort(function(a, b) {return a-b})
                                    playersData[0].property.forEach((propId) => {
                                        monopolyBoardArr.map((monoId) => {
                                            if(propId === monoId.id){
                                                // @ts-ignore
                                                if (monoId.type === 'property' && monoId.numberOfHouses.length === 0) {
                                                    //@ts-ignore
                                                    cardPlayer1Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 1) {
                                                    //@ts-ignore
                                                    cardPlayer1Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                            <div class="h27">
                                                                <div>🏠</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 2) {
                                                    //@ts-ignore
                                                    cardPlayer1Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                            <div class="h27">
                                                                <div>🏠🏠</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 3) {
                                                    //@ts-ignore
                                                    cardPlayer1Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                            <div class="h27">
                                                                <div>🏠🏠🏠</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 4) {
                                                    //@ts-ignore
                                                    cardPlayer1Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                            <div class="h27">
                                                                <div>🏠🏠🏠🏠</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 5) {
                                                    //@ts-ignore
                                                    cardPlayer1Boxes.innerHTML += `
                                                    <div class="box gameCard">
                                                        <div class="h40">
                                                            <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                            <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                        </div>
                                                        <div class="h33">
                                                            <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                            <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                        </div>
                                                        <div class="h27">
                                                            <div>🏨</div>
                                                        </div>
                                                    </div>
                                                `;
                                                }
                                                else {
                                                    //@ts-ignore
                                                    cardPlayer1Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                            }
                                        })
                                    })

                                    cardPlayer2Boxes.innerHTML = '';
                                    playersData[1].property.sort(function(a, b) {return a-b})
                                    playersData[1].property.forEach((propId) => {
                                        monopolyBoardArr.map((monoId) => {
                                            if(propId === monoId.id){
                                                // @ts-ignore
                                                if (monoId.type === 'property' && monoId.numberOfHouses.length === 0) {
                                                    //@ts-ignore
                                                    cardPlayer2Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 1) {
                                                    //@ts-ignore
                                                    cardPlayer2Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                            <div class="h27">
                                                                <div>🏠</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 2) {
                                                    //@ts-ignore
                                                    cardPlayer2Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                            <div class="h27">
                                                                <div>🏠🏠</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 3) {
                                                    //@ts-ignore
                                                    cardPlayer2Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                            <div class="h27">
                                                                <div>🏠🏠🏠</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 4) {
                                                    //@ts-ignore
                                                    cardPlayer2Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                                <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                                <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                            </div>
                                                            <div class="h27">
                                                                <div>🏠🏠🏠🏠</div>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                                // @ts-ignore
                                                else if (monoId.type === 'property' && monoId.numberOfHouses.length === 5) {
                                                    //@ts-ignore
                                                    cardPlayer2Boxes.innerHTML += `
                                                    <div class="box gameCard">
                                                        <div class="h40">
                                                            <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                            <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                        </div>
                                                        <div class="h33">
                                                            <div style="font-size: 10px">House cost: $${monoId.houseCost}</div>
                                                            <div style="font-size: 10px">Hotel cost: $${monoId.hotelCost}</div>
                                                        </div>
                                                        <div class="h27">
                                                            <div>🏨</div>
                                                        </div>
                                                    </div>
                                                `;
                                                }
                                                else {
                                                    //@ts-ignore
                                                    cardPlayer2Boxes.innerHTML += `
                                                        <div class="box gameCard">
                                                            <div class="h40">
                                                                <div class="rounded-1 w-100" style="background-color: ${monoId.color}; height: 10px"></div>
                                                                <div class="text-center" style="font-size: 10px" >${monoId.name}</div>
                                                            </div>
                                                            <div class="h33">
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                            }
                                        })
                                    })
                                }

                                // ------------UPDATE THIS BOX
                                function updateTheBox() {
                                    playersData.map((item, index) => {
                                        if (!item.turn) {
                                            gameBoardArr.map((prev, i) => {
                                                monopolyBoardArr.map((e) => {
                                                    if (prev === e.id) {
                                                        if (prev === item.boxId) {

                                                            function updateTheBoxWithPay(){

                                                                if (boughtBoxesArr.length > 0  && e.type === 'property') {
                                                                    let boughtTrue:boolean = false;
                                                                    boughtBoxesArr.map((bought) => {
                                                                        if (bought === item.boxId) {
                                                                            boughtTrue = true;

                                                                            if(e.numberOfHouses.length === 0){
                                                                                gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[0]}</div>
                                                                                </div>
                                                                             `
                                                                            }
                                                                            if(e.numberOfHouses.length === 1){
                                                                                gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[1]}</div>
                                                                                </div>
                                                                             `
                                                                            }
                                                                            if(e.numberOfHouses.length === 2){
                                                                                gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[2]}</div>
                                                                                </div>
                                                                             `
                                                                            }
                                                                            if(e.numberOfHouses.length === 3){
                                                                                gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[3]}</div>
                                                                                </div>
                                                                             `
                                                                            }
                                                                            if(e.numberOfHouses.length === 4){
                                                                                gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[4]}</div>
                                                                                </div>
                                                                             `
                                                                            }
                                                                            if(e.numberOfHouses.length === 5){
                                                                                gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[5]}</div>
                                                                                </div>
                                                                             `
                                                                            }


                                                                        }
                                                                    })
                                                                    if(!boughtTrue){
                                                                        gameBox[i].innerHTML += `
                                                                    <div class="d-flex align-items-end h-50">
                                                                      <div>$${e.price}</div>
                                                                    </div>
                                                                 `
                                                                    }
                                                                }
                                                                else if(e.type === 'railroad'){
                                                                 //    if(boughtRailroadArr.length === 1){
                                                                 //        gameBox[i].innerHTML += `
                                                                 //    <div class="d-flex align-items-end h-50">
                                                                 //      <div>Pay: $${e.rent[0]}</div>
                                                                 //    </div>
                                                                 // `
                                                                 //    }
                                                                 //    else if(boughtRailroadArr.length === 2){
                                                                 //        gameBox[i].innerHTML += `
                                                                 //    <div class="d-flex align-items-end h-50">
                                                                 //      <div>Pay: $${e.rent[1]}</div>
                                                                 //    </div>
                                                                 // `
                                                                 //    }
                                                                 //    else if(boughtRailroadArr.length === 3){
                                                                 //        gameBox[i].innerHTML += `
                                                                 //    <div class="d-flex align-items-end h-50">
                                                                 //      <div>Pay: $${e.rent[2]}</div>
                                                                 //    </div>
                                                                 // `
                                                                 //    }
                                                                 //    else {
                                                                 //        gameBox[i].innerHTML += `
                                                                 //    <div class="d-flex align-items-end h-50">
                                                                 //      <div>$${e.price}</div>
                                                                 //    </div>
                                                                 // `
                                                                 //    }

                                                                }
                                                                else if(e.type === 'utility'){
                                                                 //    if(boughtUtilityArr.length === 1){
                                                                 //        gameBox[i].innerHTML += `
                                                                 //    <div class="d-flex align-items-end h-50">
                                                                 //      <div>Pay: $${e.rent[0]}</div>
                                                                 //    </div>
                                                                 // `
                                                                 //    }
                                                                 //    else if(boughtUtilityArr.length === 2){
                                                                 //        gameBox[i].innerHTML += `
                                                                 //    <div class="d-flex align-items-end h-50">
                                                                 //      <div>Pay: $${e.rent[1]}</div>
                                                                 //    </div>
                                                                 // `
                                                                 //    }
                                                                 //    else {
                                                                 //        gameBox[i].innerHTML += `
                                                                 //    <div class="d-flex align-items-end h-50">
                                                                 //      <div>$${e.price}</div>
                                                                 //    </div>
                                                                 // `
                                                                 //    }
                                                                }
                                                                else {
                                                                    gameBox[i].innerHTML += `
                                                                    <div class="d-flex align-items-end h-50">
                                                                      <div>$${e.price}</div>
                                                                    </div>
                                                                 `
                                                                }

                                                            }

                                                            if (index === 1) {
                                                                gameBox[i].innerHTML = `
                                                            <div class="h-50">
                                                                <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                                <div class="text-center">${e.name}</div>
                                                            </div>
                                                        `;
                                                                if(e.price){
                                                                    updateTheBoxWithPay()
                                                                }


                                                                if (prev === playersData[1].boxId) {
                                                                    gameBox[i].innerHTML += `
                                                            <div class="player player2">
                                                                <img src="${playersData[1].img}" alt="">
                                                            </div>
                                                        `;
                                                                }

                                                            }
                                                            else {
                                                                gameBox[i].innerHTML = `
                                                            <div class="h-50">
                                                                <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                                <div class="text-center">${e.name}</div>
                                                            </div>
                                                        `;

                                                                if(e.price) {
                                                                    updateTheBoxWithPay()
                                                                }

                                                                if (prev === playersData[0].boxId) {
                                                                    gameBox[i].innerHTML += `
                                                                <div class="player player1">
                                                                    <img src="${playersData[0].img}" alt="">
                                                                </div>
                                                            `;
                                                                }
                                                            }
                                                        }
                                                    }
                                                })
                                            })
                                        }
                                    })
                                }
                                updateTheBox()

                                // UPDATE PREVIOUS BOX
                                function updatePreviousBox() {
                                    gameBoardArr.map((box, i) => {
                                        monopolyBoardArr.map((e) => {
                                            if (box === e.id) {
                                                if (box === item.boxId) {
                                                    function updateTheBoxWithPay(){

                                                        if (boughtBoxesArr.length > 0 && e.type === 'property') {
                                                            let boughtTrue:boolean = false;
                                                            boughtBoxesArr.map((bought) => {
                                                                if (bought === item.boxId) {
                                                                    boughtTrue = true;

                                                                    if(e.numberOfHouses.length === 0){
                                                                        gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[0]}</div>
                                                                                </div>
                                                                             `
                                                                    }
                                                                    else if(e.numberOfHouses.length === 1){
                                                                        gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[1]}</div>
                                                                                </div>
                                                                             `
                                                                    }
                                                                    else if(e.numberOfHouses.length === 2){
                                                                        gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[2]}</div>
                                                                                </div>
                                                                             `
                                                                    }
                                                                    else if(e.numberOfHouses.length === 3){
                                                                        gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[3]}</div>
                                                                                </div>
                                                                             `
                                                                    }
                                                                    else if(e.numberOfHouses.length === 4){
                                                                        gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[4]}</div>
                                                                                </div>
                                                                             `
                                                                    }
                                                                    else if(e.numberOfHouses.length === 5){
                                                                        gameBox[i].innerHTML += `
                                                                                <div class="d-flex align-items-end h-50">
                                                                                  <div>Pay: $${e.rent[5]}</div>
                                                                                </div>
                                                                             `
                                                                    }
                                                                }
                                                            })
                                                            if(!boughtTrue){
                                                                gameBox[i].innerHTML += `
                                                                    <div class="d-flex align-items-end h-50">
                                                                      <div>$${e.price}</div>
                                                                    </div>
                                                                 `
                                                            }
                                                        }
                                                        else if(e.type === 'railroad'){
                                                            // if(boughtRailroadArr.length === 1){
                                                            //     gameBox[i].innerHTML += `
                                                            //         <div class="d-flex align-items-end h-50">
                                                            //           <div>Pay: $${e.rent[0]}</div>
                                                            //         </div>
                                                            //      `
                                                            // }
                                                            // else if(boughtRailroadArr.length === 2){
                                                            //     gameBox[i].innerHTML += `
                                                            //         <div class="d-flex align-items-end h-50">
                                                            //           <div>Pay: $${e.rent[1]}</div>
                                                            //         </div>
                                                            //      `
                                                            // }
                                                            // else if(boughtRailroadArr.length === 3){
                                                            //     gameBox[i].innerHTML += `
                                                            //         <div class="d-flex align-items-end h-50">
                                                            //           <div>Pay: $${e.rent[2]}</div>
                                                            //         </div>
                                                            //      `
                                                            // }else {
                                                            //     gameBox[i].innerHTML += `
                                                            //         <div class="d-flex align-items-end h-50">
                                                            //           <div>$${e.price}</div>
                                                            //         </div>
                                                            //      `
                                                            // }

                                                        }
                                                        else if(e.type === 'utility'){
                                                            // if(boughtUtilityArr.length === 1){
                                                            //     gameBox[i].innerHTML += `
                                                            //         <div class="d-flex align-items-end h-50">
                                                            //           <div>Pay: $${e.rent[0]}</div>
                                                            //         </div>
                                                            //      `
                                                            // }
                                                            // else if(boughtUtilityArr.length === 2){
                                                            //     gameBox[i].innerHTML += `
                                                            //         <div class="d-flex align-items-end h-50">
                                                            //           <div>Pay: $${e.rent[1]}</div>
                                                            //         </div>
                                                            //      `
                                                            // }
                                                            // else {
                                                            //     gameBox[i].innerHTML += `
                                                            //         <div class="d-flex align-items-end h-50">
                                                            //           <div>$${e.price}</div>
                                                            //         </div>
                                                            //      `
                                                            // }
                                                        }
                                                        else {
                                                            gameBox[i].innerHTML += `
                                                                    <div class="d-flex align-items-end h-50">
                                                                      <div>$${e.price}</div>
                                                                    </div>
                                                                 `
                                                        }
                                                    }


                                                    if (index === 0) {
                                                        gameBox[i].innerHTML = `
                                                        <div class="h-50">
                                                            <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                            <div class="text-center">${e.name}</div>
                                                        </div>
                                                    `;
                                                        if(e.price){
                                                            updateTheBoxWithPay()
                                                        }


                                                        if (box === playersData[1].boxId) {
                                                            gameBox[i].innerHTML += `
                                                            <div class="player player2">
                                                                <img src="${playersData[1].img}" alt="">
                                                            </div>
                                                       `;
                                                        }
                                                    }
                                                    else {
                                                        gameBox[i].innerHTML = `
                                                        <div class="h-50">
                                                            <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                            <div class="text-center">${e.name}</div>
                                                        </div>
                                                     `;

                                                        if(e.price){
                                                            updateTheBoxWithPay()
                                                        }

                                                        if (box === playersData[0].boxId) {
                                                            gameBox[i].innerHTML += `
                                                        <div class="player player1">
                                                            <img src="${playersData[0].img}" alt="">
                                                        </div>
                                                    `;
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    })
                                }
                                updatePreviousBox()

                                // -------PLAYERS MOVE-----------
                                // DICE ROLLED NUMBER, UPDATE MONEY IF MOVES THROUGH "GO"
                                item.boxId += rndCeil(6)
                                if (item.boxId >= 36) {
                                    item.boxId -= 36;
                                    item.cash += 200;
                                    updatePlayerMoney()
                                }

                                // UPDATE BOX WHERE PLAYER MOVE (SHOW PLAYER ON NEW BOX)
                                gameBoardArr.map((box, i) => {

                                    //     need to check, if any player has bought this box
                                    function checkIfAnyHasBox(playerNum: number) {

                                        function buyAndUpdate() {
                                            gameBoardArr.map((box, i) => {
                                                let playerClass = '';
                                                monopolyBoardArr.map((e) => {
                                                    if (e.type === 'property' || e.type === 'railroad' || e.type === 'utility') {
                                                        if (box === e.id) {
                                                            if (box === item.boxId) {
                                                                if (index === 0) {
                                                                    playerClass = 'player1'
                                                                } else {
                                                                    playerClass = 'player2'
                                                                }
                                                                const innerGameBoxNoButton = () => {
                                                                    gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                                     <div class="text-center">${e.name}</div>
                                                                </div>
                                                                 <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>$${e.price}</div>
                                                                 </div>
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;

                                                                }
                                                                const innerGameBoxNoHouse = () => {
                                                                    gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                                     <div class="text-center">${e.name}</div>
                                                                </div>
                                                                 <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>Pay: $${e.rent[0]}</div>
                                                                 </div>
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;

                                                                }
                                                                const innerGameBoxWithButton = () => {
                                                                    gameBox[i].innerHTML = `
                                                                    <div class="h-50">
                                                                        <div class="rounded-1 w-100" style="background-color: ${e.color}; height: 10px"></div>
                                                                         <div class="text-center">${e.name}</div>
                                                                    </div>
                                                                     <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>$${e.price}</div>
                                                                      <div><button class="buyBtn">Buy</button></div>
                                                                    </div>
                                                                    <div class="player ${playerClass}">
                                                                        <img src="${playersData[index].img}" alt="">
                                                                    </div>
                                                                `
                                                                }
                                                                const innerOnotherPlayerIfNeed = () => {
                                                                    if (index === 0 && playersData[1].boxId === item.boxId) {
                                                                        gameBox[i].innerHTML += `
                                                                    <div class="player player2">
                                                                        <img src="${playersData[1].img}" alt="">
                                                                    </div>
                                                                `
                                                                    } else if (index === 1 && playersData[0].boxId === item.boxId) {
                                                                        gameBox[i].innerHTML += `
                                                                    <div class="player player1">
                                                                        <img src="${playersData[0].img}" alt="">
                                                                    </div>
                                                                `
                                                                    }
                                                                }

                                                                // IF PLAYER HAVE ENOUGH MONEY TO BUY A BOX, A "BUY"  BUTTON IS DISPLAYED
                                                                // @ts-ignore
                                                                if(item.cash >= e.price){
                                                                    innerGameBoxWithButton();
                                                                }
                                                                else {
                                                                    innerGameBoxNoButton()
                                                                }

                                                                innerOnotherPlayerIfNeed()

                                                                //--------------- BUY BUTTON LOGIC------------

                                                                let buyBtn = document.querySelectorAll('.buyBtn') as NodeListOf<HTMLButtonElement>;

                                                                function pushToColorArr(indx: number) {
                                                                    if (e.color === 'brown') {
                                                                        playersData[indx].brownArr.push('brown')
                                                                    }
                                                                    if (e.color === "lightblue") {
                                                                        playersData[indx].lightblueArr.push("lightblue")
                                                                    }
                                                                    if (e.color === "pink") {
                                                                        playersData[indx].pinkArr.push("pink")
                                                                    }
                                                                    if (e.color === "orange") {
                                                                        playersData[indx].orangeArr.push("orange")
                                                                    }
                                                                    if (e.color === "red") {
                                                                        playersData[indx].redArr.push("red")
                                                                    }
                                                                    if (e.color === "yellow") {
                                                                        playersData[indx].yellowArr.push("yellow")
                                                                    }
                                                                    if (e.color === "green") {
                                                                        playersData[indx].greenArr.push("green")
                                                                    }
                                                                    if (e.color === "darkblue") {
                                                                        playersData[indx].darkblueArr.push("darkblue")
                                                                    }
                                                                    if (e.type === "railroad") {
                                                                        playersData[indx].railroadArr.push("railroad")
                                                                    }
                                                                    if (e.type === "utility") {
                                                                        playersData[indx].utilityArr.push("utility")
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
                                                                            boughtBoxesArr.push(e.id)
                                                                            if(e.type === "utility") {
                                                                                // @ts-ignore
                                                                                boughtUtilityArr.push(e.id)
                                                                            }
                                                                            if(e.type === "railroad") {
                                                                                // @ts-ignore
                                                                                boughtRailroadArr.push(e.id)
                                                                            }
                                                                            gamePlayComment.innerHTML += `
                                                                            <div>>${playersData[0].player} buy ${e.name}</div>
                                                                            `;
                                                                            pushToColorArr(0)
                                                                            updatePlayerMoney()
                                                                            innerGameBoxNoHouse()
                                                                            innerOnotherPlayerIfNeed()
                                                                            updatePlayerField()
                                                                        }
                                                                    }
                                                                    else if (index === 1 && !playersData[1].turn) {
                                                                        btn.onclick = () => {
                                                                            //@ts-ignore
                                                                            playersData[1].cash -= e.price;
                                                                            //@ts-ignore
                                                                            playersData[1].property.push(e.id);
                                                                            // @ts-ignore
                                                                            boughtBoxesArr.push(e.id)
                                                                            if(e.type === "utility") {
                                                                                // @ts-ignore
                                                                                boughtUtilityArr.push(e.id)
                                                                            }
                                                                            if(e.type === "railroad") {
                                                                                // @ts-ignore
                                                                                boughtRailroadArr.push(e.id)
                                                                            }
                                                                            gamePlayComment.innerHTML += `
                                                                            <div>>${playersData[1].player} buy ${e.name}</div>
                                                                            `;
                                                                            pushToColorArr(1)
                                                                            updatePlayerMoney()
                                                                            innerGameBoxNoHouse()
                                                                            innerOnotherPlayerIfNeed()
                                                                            updatePlayerField()
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                        }
                                                    }

                                                })
                                            })
                                        }

                                        // ------CHECKING IF IT IS MY PROPERTY (IF NEEDED PAY FOR ENEMY)
                                        if (boughtBoxesArr.length > 0) {
                                            //@ts-ignore
                                            if (!boughtBoxesArr.includes(item.boxId)) {
                                                // if one have some box, add BUY button to other
                                                buyAndUpdate()
                                            }
                                            else {

                                                // PAY RENT FOR ENEMY
                                                //@ts-ignore
                                                if (!item.property.includes(box)) {

                                                    // make possible to pay more

                                                    monopolyBoardArr.map((box11) => {
                                                        if (box11.id === box) {

                                                            function payForEnemy(num: number) {
                                                                if (box11.type === "railroad") {
                                                                    if (playersData[num].railroadArr.length === 3) {
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[2]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[2]}</div>
                                                                            `;
                                                                    } else if (playersData[num].railroadArr.length === 2) {
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[1]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[1]}</div>
                                                                            `;
                                                                    }else {
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[0]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[0]}</div>
                                                                            `;
                                                                    }
                                                                } else if (box11.type === "utility") {
                                                                    if (playersData[num].utilityArr.length === 2){
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[1]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[1]}</div>
                                                                            `;
                                                                    }else {
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[0]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[0]}</div>
                                                                            `;
                                                                    }

                                                                } else if(box11.type === "property") {
                                                                    if(box11.numberOfHouses.length === 0){
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[0]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[0]}</div>
                                                                            `;
                                                                    }
                                                                    else if(box11.numberOfHouses.length === 1){
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[1]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[1]}</div>
                                                                            `;
                                                                    }
                                                                    else if(box11.numberOfHouses.length === 2){
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[2]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[2]}</div>
                                                                            `;
                                                                    }
                                                                    else if(box11.numberOfHouses.length === 3){
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[3]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[3]}</div>
                                                                            `;
                                                                    }
                                                                    else if(box11.numberOfHouses.length === 4){
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[4]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[4]}</div>
                                                                            `;
                                                                    }
                                                                    else if(box11.numberOfHouses.length === 5){
                                                                        //@ts-ignore
                                                                        item.cash -= box11.rent[5]
                                                                        gamePlayComment.innerHTML += `
                                                                            <div>>${item.player} pay ${box11.rent[5]}</div>
                                                                            `;
                                                                    }

                                                                }
                                                            }

                                                            if (index === 0) {
                                                                payForEnemy(1)
                                                            } else if (index === 1) {
                                                                payForEnemy(0)
                                                            }
                                                            updatePlayerMoney()
                                                        }
                                                    })
                                                }

                                                // MY PROPERTY AND BUILD HOUSE
                                                //@ts-ignore
                                                if (item.property.includes(box)) {
                                                    monopolyBoardArr.map((box22) => {
                                                        if (box22.id === box) {
                                                            let playerClass = '';
                                                            if (index === 0) {
                                                                playerClass = 'player1'
                                                            }
                                                            else {
                                                                playerClass = 'player2'
                                                            }
                                                            const innerGameBoxNoButton = () => {
                                                                gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${box22.color}; height: 10px"></div>
                                                                     <div class="text-center">${box22.name}</div>
                                                                </div>
                                                                 <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>$${box22.price}</div>
                                                                 </div>
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;

                                                            }
                                                            const innerGameBoxWithButtonHouse = () => {
                                                                gameBox[i].innerHTML = `
                                                                    <div class="h-50">
                                                                        <div class="rounded-1 w-100" style="background-color: ${box22.color}; height: 10px"></div>
                                                                         <div class="text-center">${box22.name}</div>
                                                                    </div>
                                                                     <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div><button class="buyHouseBtn" style="font-size: 10px">Buy House</button></div>
                                                                    </div>
                                                                    <div class="player ${playerClass}">
                                                                        <img src="${playersData[index].img}" alt="">
                                                                    </div>
                                                                `
                                                            }
                                                            const innerGameBoxWithButtonHotel = () => {
                                                                gameBox[i].innerHTML = `
                                                                    <div class="h-50">
                                                                        <div class="rounded-1 w-100" style="background-color: ${box22.color}; height: 10px"></div>
                                                                         <div class="text-center">${box22.name}</div>
                                                                    </div>
                                                                     <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div><button class="buyHouseBtn" style="font-size: 10px">Buy Hotel</button></div>
                                                                    </div>
                                                                    <div class="player ${playerClass}">
                                                                        <img src="${playersData[index].img}" alt="">
                                                                    </div>
                                                                `
                                                            }
                                                            const innerOnotherPlayerIfNeed = () => {
                                                                if (index === 0 && playersData[1].boxId === item.boxId) {
                                                                    gameBox[i].innerHTML += `
                                                                    <div class="player player2">
                                                                        <img src="${playersData[1].img}" alt="">
                                                                    </div>
                                                                `
                                                                } else if (index === 1 && playersData[0].boxId === item.boxId) {
                                                                    gameBox[i].innerHTML += `
                                                                    <div class="player player1">
                                                                        <img src="${playersData[0].img}" alt="">
                                                                    </div>
                                                                `
                                                                }
                                                            }
                                                            const innerGameBoxNoHouse = () => {
                                                                gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${box22.color}; height: 10px"></div>
                                                                     <div class="text-center">${box22.name}</div>
                                                                </div>
                                                                 <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>Pay: $${box22.rent[0]}</div>
                                                                 </div>
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;

                                                            }
                                                            const innerGameBox1House = () => {
                                                                // @ts-ignore
                                                                gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${box22.color}; height: 10px"></div>
                                                                     <div class="text-center">${box22.name}</div>
                                                                </div>
                                                                 <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>Pay: $${box22.rent[1]}</div>
                                                                 </div>
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;

                                                            }
                                                            const innerGameBox2House = () => {
                                                                // @ts-ignore
                                                                gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${box22.color}; height: 10px"></div>
                                                                     <div class="text-center">${box22.name}</div>
                                                                </div>
                                                                 <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>Pay: $${box22.rent[2]}</div>
                                                                 </div>
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;

                                                            }
                                                            const innerGameBox3House = () => {
                                                                // @ts-ignore
                                                                gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${box22.color}; height: 10px"></div>
                                                                     <div class="text-center">${box22.name}</div>
                                                                </div>
                                                                 <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>Pay: $${box22.rent[3]}</div>
                                                                 </div>
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;

                                                            }
                                                            const innerGameBox4House = () => {
                                                                // @ts-ignore
                                                                gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${box22.color}; height: 10px"></div>
                                                                     <div class="text-center">${box22.name}</div>
                                                                </div>
                                                                 <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>Pay: $${box22.rent[4]}</div>
                                                                 </div>
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;

                                                            }
                                                            const innerGameBox5House = () => {
                                                                // @ts-ignore
                                                                gameBox[i].innerHTML = `
                                                                <div class="h-50">
                                                                    <div class="rounded-1 w-100" style="background-color: ${box22.color}; height: 10px"></div>
                                                                     <div class="text-center">${box22.name}</div>
                                                                </div>
                                                                 <div class="d-flex align-items-end h-50 justify-content-between">
                                                                      <div>Pay: $${box22.rent[5]}</div>
                                                                 </div>
                                                                <div class="player ${playerClass}">
                                                                    <img src="${playersData[index].img}" alt="">
                                                                </div>
                                                              `;

                                                            }

                                                            // @ts-ignore
                                                            if(item.cash >= box22.houseCost){
                                                                function buyHouse() {
                                                                    if (box22.numberOfHouses.length <= 4){
                                                                        const buyHouseBtn = document.querySelector('.buyHouseBtn') as HTMLButtonElement;
                                                                        buyHouseBtn.onclick = () => {
                                                                            //@ts-ignore
                                                                            box22.numberOfHouses?.push(1)
                                                                            // @ts-ignore
                                                                            item.cash -= box22.houseCost
                                                                            updatePlayerMoney()
                                                                            if(box22.numberOfHouses.length === 0){
                                                                                innerGameBoxNoHouse()
                                                                            }
                                                                            else if (box22.numberOfHouses.length === 1){
                                                                                innerGameBox1House()
                                                                            }
                                                                            else if (box22.numberOfHouses.length === 2){
                                                                                innerGameBox2House()
                                                                            }
                                                                            else if (box22.numberOfHouses.length === 3){
                                                                                innerGameBox3House()
                                                                            }
                                                                            else if (box22.numberOfHouses.length === 4){
                                                                                innerGameBox4House()
                                                                            }
                                                                            else if (box22.numberOfHouses.length === 5){
                                                                                innerGameBox5House()
                                                                            }
                                                                            innerOnotherPlayerIfNeed()
                                                                            updatePlayerField()
                                                                        }
                                                                    }

                                                                }
                                                                if (box22.color === 'brown' && item.brownArr.length === 2) {
                                                                    if (box22.numberOfHouses.length <= 4){}
                                                                    if(box22.numberOfHouses.length === 4){
                                                                        innerGameBoxWithButtonHotel()
                                                                    }
                                                                    else if (box22.numberOfHouses.length <= 3) {
                                                                        innerGameBoxWithButtonHouse()
                                                                    }
                                                                    innerOnotherPlayerIfNeed()
                                                                    buyHouse()
                                                                }
                                                                else if (box22.color === 'lightblue' && item.lightblueArr.length === 3) {
                                                                    if (box22.numberOfHouses.length <= 4){
                                                                        if(box22.numberOfHouses.length === 4 ){
                                                                            innerGameBoxWithButtonHotel()
                                                                        }
                                                                        else if (box22.numberOfHouses.length <= 3) {
                                                                            innerGameBoxWithButtonHouse()
                                                                        }
                                                                        innerOnotherPlayerIfNeed()
                                                                        buyHouse()
                                                                    }
                                                                }
                                                                else if (box22.color === 'pink' && item.pinkArr.length === 3) {
                                                                    if (box22.numberOfHouses.length <= 4){
                                                                        if(box22.numberOfHouses.length === 4 ){
                                                                            innerGameBoxWithButtonHotel()
                                                                        }
                                                                        else if (box22.numberOfHouses.length <= 3) {
                                                                            innerGameBoxWithButtonHouse()
                                                                        }
                                                                        innerOnotherPlayerIfNeed()
                                                                        buyHouse()
                                                                    }
                                                                }
                                                                else if (box22.color === "orange" && item.orangeArr.length === 3) {
                                                                    if (box22.numberOfHouses.length <= 4){
                                                                        if(box22.numberOfHouses.length === 4 ){
                                                                            innerGameBoxWithButtonHotel()
                                                                        }
                                                                        else if (box22.numberOfHouses.length <= 3) {
                                                                            innerGameBoxWithButtonHouse()
                                                                        }
                                                                        innerOnotherPlayerIfNeed()
                                                                        buyHouse()
                                                                    }
                                                                }
                                                                else if (box22.color === "red" && item.redArr.length === 3) {
                                                                    if (box22.numberOfHouses.length <= 4){
                                                                        if(box22.numberOfHouses.length === 4 ){
                                                                            innerGameBoxWithButtonHotel()
                                                                        }
                                                                        else if (box22.numberOfHouses.length <= 3) {
                                                                            innerGameBoxWithButtonHouse()
                                                                        }
                                                                        innerOnotherPlayerIfNeed()
                                                                        buyHouse()
                                                                    }
                                                                }
                                                                else if (box22.color === "yellow" && item.yellowArr.length === 3) {
                                                                    if (box22.numberOfHouses.length <= 4){
                                                                        if(box22.numberOfHouses.length === 4 ){
                                                                            innerGameBoxWithButtonHotel()
                                                                        }
                                                                        else if (box22.numberOfHouses.length <= 3) {
                                                                            innerGameBoxWithButtonHouse()
                                                                        }
                                                                        innerOnotherPlayerIfNeed()
                                                                        buyHouse()
                                                                    }

                                                                }
                                                                else if (box22.color === "green" && item.greenArr.length === 3) {
                                                                    if (box22.numberOfHouses.length <= 4){
                                                                        if(box22.numberOfHouses.length === 4 ){
                                                                            innerGameBoxWithButtonHotel()
                                                                        }
                                                                        else if (box22.numberOfHouses.length <= 3) {
                                                                            innerGameBoxWithButtonHouse()
                                                                        }
                                                                        innerOnotherPlayerIfNeed()
                                                                        buyHouse()
                                                                    }
                                                                }
                                                                else if (box22.color === "darkblue" && item.darkblueArr.length === 2) {
                                                                    if (box22.numberOfHouses.length <= 4){
                                                                        if(box22.numberOfHouses.length === 4 ){
                                                                            innerGameBoxWithButtonHotel()
                                                                        }
                                                                        else if (box22.numberOfHouses.length <= 3) {
                                                                            innerGameBoxWithButtonHouse()
                                                                        }
                                                                        innerOnotherPlayerIfNeed()
                                                                        buyHouse()
                                                                    }
                                                                }
                                                                updatePlayerMoney()
                                                            }

                                                        }
                                                    })
                                                }
                                            }
                                        }
                                        else {
                                            // ------UPDATE IF NO ONE HAVE THIS BOX
                                            buyAndUpdate()
                                        }
                                    }

                                    // -----------------------------------------------------

                                    // -----CHANGE PLAYERS MOVE
                                    if (box === item.boxId) {
                                        if (index === 0) {
                                            item.turn = false;
                                            playersData[1].turn = true;

                                            gameBox[i].innerHTML += `
                                             <div class="player player1">
                                                <img src="${playersData[0].img}" alt="">
                                            </div>
                                          `;
                                            checkIfAnyHasBox(1)
                                            playerTurn()
                                        } else if (index === 1) {

                                            item.turn = false;
                                            playersData[0].turn = true;

                                            gameBox[i].innerHTML += `
                                            <div class="player player2">
                                                <img src="${playersData[1].img}" alt="">
                                            </div>
                                         `;
                                            checkIfAnyHasBox(0)
                                            playerTurn()
                                        }
                                    }
                                })
                            }
                            else {
                                playerTurn()
                                console.log('lose game ' + item.player)
                            }


                        }
                    }
                })
            }


        }


    })


})
