function is_username_valid(username) {
    var re = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(^\S{5,9}$)/;
    var abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(abc.includes(username[0])) {
        return re.test(username)
    } else {
        return false
    }
}

function is_password_valid(password) {
    var re = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[=])(?=.*[!@=*#\$%\^&])(^\S{8,}$)/;
    return re.test(password)
}

console.log (is_username_valid('Xrutaf888'))
console.log(is_password_valid('passW0rd='))