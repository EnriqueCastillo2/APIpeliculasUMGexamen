const db = require("../models");
const Pelicula = db.pelicula;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.nombrePelicula) {
        res.status(400).send({
            message: "nombre requerido"
        });
        return;
    }

    const pelicula = {
        nombrePelicula: req.body.nombrePelicula,
        sinopsis: req.body.sinopsis,
        actores: req.body.actores,
        duracion: req.body.duracion,
        tipo: req.body.tipo,
        categoria: req.body.categoria,
        añoLanzamiento: req.body.añoLanzamiento,
        calificacion: req.body.calificacion
    };
   

    Pelicula.create(pelicula)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "ocurrio algun error al crear la pelicula ."
            });
        });
};


exports.findAll = (req, res) => {
    const nombrePelicula = req.query.nombrePelicula;
    var condition = nombrePelicula ? { nombrePelicula: { [Op.iLike]: `%${nombrePelicula}%` } } : null;

    Pelicula.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "ocurrio un error al tratar de conseguir las peliculas."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Pelicula.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "pelicula no encontrada con id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Pelicula.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pelicula actualizada con exito."
                });
            } else {
                res.send({
                    message: `No se puede actualizar la pelicula con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "error al actualizar pelicula con id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Pelicula.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pelicula eliminada con exito!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar la pelicula con id=${id}. La pelicula no fue encontrada!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "no se logro eliminar pelicula con id =" + id
            });
        });
};


exports.deleteAll = (req, res) => {
    Pelicula.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Peliculas fueron eliminadas con exito!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "ocurrio un error al tratar de eliminar todas las peliculas."
            });
        });
};

exports.findAllStatus = (req, res) => {
    Pelicula.findAll({ where: { status: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "ocurrio un error al tratar de conseguir las peliculas."
            });
        }); 
};