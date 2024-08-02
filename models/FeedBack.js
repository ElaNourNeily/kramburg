module.exports = (sequelize, DataTypes) => {
    const FeedBack = sequelize.define("FeedBack", {
      satificationG: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      satificationGT: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      satificationGD: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      EnvironnementT: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      EnvironnementTenvt: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      EnvironnementTct: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      EnvironnementTmi: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      EnvironnementTsec: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      EnvironnementTflexibiliteH: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      EnvironnementTpointage: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      EnvironnementTmedecine: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      EnvironnementTsante: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      chargedetravail: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      chargedetravailres: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      chargedetravailtache: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      chargedetravailattribue: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      chargedetravailressourcesT: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagement: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementhierarchique: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementcontenue: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementdevpro: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementtec: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementinfo: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementcollab: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementgrp: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementperso: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementreglement: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementdecision: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      comMenagementinnovation: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      integration: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      integrationinteg: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      integrationinterne: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      devpro: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      devproopp: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      devproformationp: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      devproevalue: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      vie: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      vieequilibre: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      avantage: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      avantagesalaire: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      avantageremun: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      avantageprim: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      avantageassurance: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      culture: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      cultureentreprise: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      culturerep: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      cultureval: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      cultureentite: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      sug: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      sugameliore: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
      sugpartage: {
        type: DataTypes.ENUM('tresInsatisfait','insatisfait','none','satisfait','tresSatisfait'),
        allowNull: false,
      },
    });
  
    FeedBack.associate = (models) => {
        FeedBack.belongsTo(models.User, {
          foreignKey: 'Userid' ,as: 'User'
        });
    
       
      };
    return FeedBack;
  };