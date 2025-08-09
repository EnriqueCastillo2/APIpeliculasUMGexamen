
module.exports = (sequelize, Sequelize) => {

    const Pelicula = sequelize.define("pelicula", {
        nombrePelicula: {
            type: Sequelize.STRING
        },
        sinopsis: {
            type: Sequelize.STRING
        },
        actores: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.INTEGER
        },
        
        tipo: {
            type: Sequelize.STRING
        },
        categoria:{
            type: Sequelize.STRING
        },
        añoLanzamiento: {
            type: Sequelize.INTEGER
        },
        calificacion: {
            type: Sequelize.FLOAT
        }
    });
  
    return Pelicula;
};