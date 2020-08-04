module.exports = function (sequelize, DataTypes) {
    let Food = sequelize.define ("food", {
        food: {
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

Food.associate = function (models) {
    models.Food.belongsTo(models.Trip);
};
    return Food;
};