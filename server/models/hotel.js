module.exports = function (sequelize, DataTypes) {
    let Hotel = sequelize.define ("hotel", {
        hotelname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
    });

Hotel.associate = function (models) {
    models.Hotel.belongsTo(models.Trip);
};
    return Hotel;
};