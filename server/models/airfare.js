module.exports = function (sequelize, DataTypes) {
    let Airfare = sequelize.define ("airfare", {
        airline: {
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

Airfare.associate = function (models) {
    models.Airfare.belongsTo(models.Trip);
};
    return Airfare;
};