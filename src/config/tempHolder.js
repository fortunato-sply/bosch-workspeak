var Store = module.exports = {
    user: null,
    login: function(newUser) {
        Store.user = newUser;
    },
    logout: function() {
        Store.user = null;
    }
}