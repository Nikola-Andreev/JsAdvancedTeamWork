class LoginModel {
    constructor() {
    }

    render() {
        $('.wrapper main').html(
            '<div class="stars"></div>' +
            '<div class="twinkling"></div>' +
            '<div class="clouds"></div>' +
            '<div class="login-wrapper">' +
            '   <form class="login-form">' +
            '       <label>Choose username:</label>' +
            '       <div class="input-holder">' +
            '           <input type="text" maxlength="15" placeholder="Username...">' +
            '       </div>' +
            '   </form>' +
            '   <button type="button" class="login-button">Login</button>' +
            '</div>'
        );
    }

    attachEvents() {
        $('.login-wrapper .login-button').on('click', function () {
            let value = $('.login-form .input-holder input').val();
            if (value.length > 0) {
                sessionStorage['username'] = value;
                $('.wrapper main').trigger('changePage', ['home']);
            }
        });
    }
}

module.exports = LoginModel;