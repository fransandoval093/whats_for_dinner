const User = require('./User');
const Item = require('./item');
const Favorite = require('./favorite');

User.hasMany(Item, {
    foreignKey: "user_id",
});

Item.belongsTo(User, {
    foreignKey: "user_id",
})

User.hasMany(Favorite, {
    foreignKey: "user_id",
});

Favorite.belongsTo(User, {
    foreignKey: "user_id",
})

module.exports = { User, Item, Favorite };
