let HomeModel = require('./core-models/home-model.js');
let LoginModel = require('./core-models/login-model.js');
let ListModel = require('./core-models/list-model.js');
let CreateModel = require('./core-models/create-model.js');
let PunchStarterModel = require('./core-models/punch-starter-model.js');

let Categories = require('./enums/categories.js');

let BasePunchStarter = require('./punch-starters/base-punch-starter.js');
let MoviePunchStarter = require('./punch-starters/movie-punch-starter.js');
let GamePunchStarter = require('./punch-starters/game-punch-starter.js');
let InnovativePunchStarter = require('./punch-starters/innovative-punch-starter.js');
let FoodPunchStarter = require('./punch-starters/food-punch-starter.js');
let CraftsPunchStarter = require('./punch-starters/crafts-punch-starter.js');

let homeModel = new HomeModel();
let loginModel = new LoginModel();
let listModel = new ListModel();
let createModel = new CreateModel();
let punchStarterModel = new PunchStarterModel();

$('.wrapper main').on('changePage', function(event, location) {
    switch(location) {
        case "home":
            let isLoggedIn = sessionStorage['username'] != undefined;
            homeModel.render(isLoggedIn, punchStarterDatabase);
            homeModel.attachEvents(isLoggedIn);
            break;
        case "login":
            loginModel.render();
            loginModel.attachEvents();
            break;
        case "list":
            listModel.render(punchStarterDatabase);
            listModel.attachEvents(punchStarterDatabase);
            break;
        case "create":
            createModel.render(Categories);
            createModel.attachEvents();
            break;
    }
});

$('.wrapper main').on('createPunchStarter', function(event, punchStarter) {
    punchStarterDatabase.push(punchStarter);
    $('.wrapper main').trigger('changePage', ['list']);
});

let punchStarterDatabase = [];

punchStarterDatabase.push(
    new MoviePunchStarter(
        1,
        "Deadpool",
        "Disney",
        "This is a movie, which is not ment for kids.",
        ["Parody", "18+"],
        1000000,
        "John Cena",
        ["John Cena", "Nicholas Cage"]
    )
);

punchStarterDatabase.push(
    new GamePunchStarter(
        2,
        "World Of Warcraft",
        "Blizzard Entertainment",
        "Best game of the world 11/10",
        ["MMO", "RPG", "Multiplayer", "PvP"],
        2000000000,
        ["JavaScript"]
    )
);

punchStarterDatabase.push(
    new InnovativePunchStarter(
        3,
        "MemeCenter",
        "Meme INC.",
        "A dank meme generator",
        ["Dank", "Innovation", "Wow"],
        12346789.10
    )
);

punchStarterDatabase.push(
    new FoodPunchStarter(
        4,
        "Regrub",
        "Burgerking",
        "A reversed burger.",
        ["Reversed", "Burger", "Burgery"],
        19999.99,
        ["Ham", "Cheese", "Bread", "Chetchup"],
        "Pour the Chetchup into the ham and mash it up with cheesed bread"
    )
);

punchStarterDatabase.push(
    new CraftsPunchStarter(
        5,
        "Cubic's Rube",
        "Cubic INC",
        "A simple Cubic rube",
        ["Cubic", "Rube", "Puzzle"],
        0.99,
        ["Small cubes", "glue", "IQ"]
    )
);

punchStarterDatabase[1].accumulatedMoney = 153947832.12482;
punchStarterDatabase[3].accumulatedMoney += 2000;
punchStarterDatabase[4].accumulatedMoney = 213;

homeModel.render();
homeModel.attachEvents();