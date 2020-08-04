module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define ("user", {
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
                notEmpty: true,
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
                notEmpty: true,
            },
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [8],
                notEmpty: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
                notEmpty: true,
            }
        },
        profimg: {
            type: DataTypes.STRING,
            defaultValue:
            "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
            allowNull: true,
        }
    });

User.associate = function (models) {
    models.User.hasMany(models.Trip, {
        onDelete: "cascade",
    });
    models.User.hasMany(models.Companion, {
        onDelete: "cascade",
    });
};
    return User;
};