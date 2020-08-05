module.exports = function (sequelize, DataTypes) {
    let Misc = sequelize.define ("misc", {
        description: {
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

Misc.associate = function (models) {
    models.Misc.belongsTo(models.Trip);
};
    return Misc;
};