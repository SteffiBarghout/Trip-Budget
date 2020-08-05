module.exports = function (sequelize, DataTypes) {
    let Budget = sequelize.define ("budget", {
        budgetamount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true,
            },
        },
        totalamount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true,
            },
        },
        actualamount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true,
            },
        },
        amountperperson: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true,
            },
        },
    });

Budget.associate = function (models) {
    models.Budget.hasMany(models.LogBudget, {
        onDelete: "cascade",
    });
    models.Budget.belongsTo(models.Trip);
};
    return Budget;
};