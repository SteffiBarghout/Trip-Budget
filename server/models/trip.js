module.exports = function (sequelize, DataTypes) {
    let Trip = sequelize.define ("trip", {
        tripname: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true,
            },
        },
        totalcost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true,
            },
        },
    });

Trip.associate = function (models) {
    models.Trip.hasMany(models.Companion, {
        onDelete: "cascade",
    });
    models.Trip.hasMany(models.Budget, {
        onDelete: "cascade",
    });
    models.Trip.hasMany(models.Airfare, {
        onDelete: "cascade",
    });
    models.Trip.hasMany(models.CarRental, {
        onDelete: "cascade",
    });
    models.Trip.hasMany(models.Food, {
        onDelete: "cascade",
    });
    models.Trip.hasMany(models.Hotel, {
        onDelete: "cascade",
    });
    models.Trip.hasMany(models.Miscellaneous, {
        onDelete: "cascade",
    });
    models.Trip.belongsTo(models.User);
};
    return Trip;
};