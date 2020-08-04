module.exports = function (sequelize, DataTypes) {
    let Companion = sequelize.define ("companion", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true,
            },
        },
        middleinitial: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true,
            },
        },
        phonenumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true,
            }
        },
        dateofbirth: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
    });

Companion.associate = function (models) {
    models.Companion.hasMany(models.Trip, {
        onDelete: "cascade",
    });
    models.Companion.belongsTo(models.User);
};
    return Companion;
};