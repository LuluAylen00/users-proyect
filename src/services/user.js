const {Users} = require('../database/models/index');

const service = {
    userCreate: async (data) => {
        let userNew = {
            username: data.username,
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
        };
        Users.create(userNew);
    }, // C

    userFindAll: async () => {
        let userList = await Users.findAll();
        return userList;
    }, // R
    userFindById: async (id) => {
        let userFound = Users.findOne({
            where: {
                id: id
            }
        })
        return userFound;
    }, // R

    userUpdate: async (id, data) => {
        let userToEdit = await Users.findOne({
            where: {
                id: id
            }
        })

        let newData = {
            username: data.username || userToEdit.username,
            first_name: data.firstName || userToEdit.firstName,
            last_name: data.lastName || userToEdit.lastName,
            email: data.email || userToEdit.email,
            password: data.password || userToEdit.password,
        };

        let resultado = Users.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    }, // U

    userDelete: async (id) => {
        let resultado = Users.destroy({
            where: {
                id: id
            }
        });

        return resultado;
    } // D
};

module.exports = service;