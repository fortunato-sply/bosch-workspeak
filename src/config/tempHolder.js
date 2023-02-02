var Store = module.exports = {
    user: null,
    login: function(newUser) {
        Store.user = newUser;
    },
    logout: function() {
        Store.user = null;
    },
    isLogged: function() {
        if(Store.user == null)
            return false;
        return true;
    },
}
