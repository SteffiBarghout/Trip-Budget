module.exports = function (sequelize, DataTypes) {
    let CarRental = sequelize.define ("carrental", {
        company: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        cartype: {
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

CarRental.associate = function (models) {
    models.CarRental.belongsTo(models.Trip);
};
    return CarRental;
};