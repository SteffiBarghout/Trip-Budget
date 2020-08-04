module.exports = function (sequelize, DataTypes) {
    let LogBudget = sequelize.define ("logbudget", {
        food: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        foodcost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        airline: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        airlinecost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        placetostay: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        staycost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        carrentalcompany: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        rentalcost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        misc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        misccost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        totalamount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
    });

LogBudget.associate = function (models) {
    models.LogBudget.belongsTo(models.Budget);
};
    return LogBudget;
};