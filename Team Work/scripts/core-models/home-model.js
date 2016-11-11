class HomeModel {
    constructor() {
    }

    render(isLoggedIn, database) {
        if (isLoggedIn) {
            $('.wrapper header .header-button-holder').html(
                '<div class="header-button home-redirect">'+
                '   <p>Home</p>' +
                '</div>'+
                '<div class="header-button list-redirect">'+
                '   <p>PunchStarter List</p>' +
                '</div>' +
                '<div class="header-button create-redirect">'+
                '   <p>Create</p>' +
                '</div>' +
                '<div class="header-button logout-redirect">'+
                '   <p>Logout</p>' +
                '</div>'
            )

            database = database.sort((a,b) => {
               return b.accumulatedMoney/b.targetPrice - a.accumulatedMoney/a.targetPrice
            }).slice(0,3)

            $('.wrapper main').html(
                '<div class="home-logged-in-welcome">'+
                '   Welcome, ' + sessionStorage['username']  + '!' +
                '</div>' +
                '<div class="home-logged-in-title">' +
                '   Top 3 PunchStarters' +
                '</div>' +
                '<div class="top-3-starters-wrapper">' +
                '   <div class="punch-starter-holder">'+
                `   <label>${database[0].name}</label>` +
                `   <label>${database[0].manufacturer}</label>` +
                `   <label>${database[0].accumulatedMoney} / ${database[0].targetPrice}</label>` +
                '   </div>'  +
                '   <div class="punch-starter-holder">' +
                `   <label>${database[1].name}</label>` +
                `   <label>${database[1].manufacturer}</label>` +
                `   <label>${database[1].accumulatedMoney} / ${database[1].targetPrice}</label>` +
                '    </div>' +
                `   <div class="punch-starter-holder">` +
                `   <label>${database[2].name}</label>` +
                `   <label>${database[2].manufacturer}</label>` +
                `   <label>${database[2].accumulatedMoney} / ${database[2].targetPrice}</label>` +
                '   </div>' +
                '</div>'
            )


        } else {
            $('.wrapper header .header-button-holder').html(
                '<div class="header-button home-redirect">' +
                '   <p>Home</p>' +
                '</div>' +
                '<div class="header-button login-redirect">' +
                '   <p>Login</p>' +
                '</div>'
            );

            $('.wrapper main').html(
                '<div class="stars"></div>' +
                '<div class="twinkling"></div>' +
                '<div class="clouds"></div>' +
                '<div class="home-logged-out-wrapper">' +
                '   <h1>PunchStarter - The unique public-benefit, crowdfunding platform for unique projects!</h1>' +
                '   <h2><a href="#/">Login now</a>, and create your own PunchStarter.</h2>' +
                '</div>'
            );
        }
    }

    attachEvents(isLoggedIn) {
        if (isLoggedIn) {
            //Attach redirect event on Logout button and clear session storage
            $('.header-button-holder .logout-redirect').click(function () {
                sessionStorage.removeItem('username');
                $('.wrapper main').trigger('changePage', ['home']);
            });
            //Attach redirect function on List button
            $('.header-button-holder .list-redirect').click(function () {
                $('.wrapper main').trigger('changePage', ['list']);
            });
            //Attach redirect event on Create button
            $('.header-button-holder .create-redirect').click(function () {
                $('.wrapper main').trigger('changePage', ['create']);
            });
            //Attach redirect event on Home button
            $('.header-button-holder .home-redirect').click(function () {
                $('.wrapper main').trigger('changePage', ['home']);
            });
        } else {
            $('.home-redirect').on('click', function () {
                $('.wrapper main').trigger('changePage', ['home']);
            });

            $('.login-redirect').on('click', function () {
                $('.wrapper main').trigger('changePage', ['login']);
            });

            $('.home-logged-out-wrapper h2 a').on('click', function() {
                $('.wrapper main').trigger('changePage', ['login']);
            });

            let hovered = false;

            $('.home-logged-out-wrapper h2 a').mouseenter(function () {
                hovered = true;
            }).mouseleave(function () {
                hovered = false;
                blink();
            });

            function blink() {
                if (!hovered) {
                    $('.home-logged-out-wrapper h2 a').fadeOut(1000).fadeIn(1000, function () {
                        if (!hovered) {
                            blink();
                        } else {
                            $('.home-logged-out-wrapper h2 a').fadeIn();
                        }
                    });
                } else {
                    $('.home-logged-out-wrapper h2 a').fadeIn();
                }
            }

            blink();
        }
    }
}

module.exports = HomeModel;