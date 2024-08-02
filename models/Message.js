module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("Message", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postText: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Message;
  };