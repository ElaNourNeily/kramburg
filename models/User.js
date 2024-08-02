module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.ENUM(['femme', 'homme']),
        allowNull: false,
      },
      dep: {
        type: DataTypes.ENUM(['AC/EC/LABO', 'EPAUDI/BMW','EPDAG','EPSKODA','EPSK-Q-IE-PM-PL','EPVW','RH/IT','SQM/COMPONENTS','NK','SALES','ZAK']),
        allowNull: false,
      },
      diplome: {
        type: DataTypes.ENUM(['enseignementDeBase/Secondaire', 'Technicien','Maitrise','Master','Ingenieur']),
        allowNull: false,
      },
      motorise: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      statuesocial: {
        type: DataTypes.ENUM(['Celibataire', 'fiance','marie','divorce','veuf']),
        allowNull: false,
      },
      seniority: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    User.associate = (models) => {
        User.hasOne(models.FeedBack, {
          foreignKey: 'Userid' , as:'Feedback'
        });
    };
  
    return User;
  };