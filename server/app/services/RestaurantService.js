const Restaurant = require('../../models').Restaurant;
const sequelize = require('sequelize');

class RestaurantService {
    async showAll() {
        return await Restaurant.findAll({
            attributes: [
                'id', 'name', 'avatar', 'info', 'address', 'tariff', 'latitude', 'longitude',
                [sequelize.fn('avg', sequelize.col('feedback.rating')) ,'rating']
            ],
            include: [{
                association: 'feedback',
                attributes: []
            }],
            group: ['id'],
            order: [[sequelize.fn('avg', sequelize.col('feedback.rating')), 'DESC']]
        });
    }
    
    async showOne(id) {
        return await Restaurant.findOne({
            where: { id },
            include: 'feedback'
        });
    }

    async addNewRestaurant(body, file) {
        const { name, address, info, tariff, latitude, longitude } = body;

        return await Restaurant.create({ name, address, info, tariff, latitude, longitude, avatar: file ? file.filename: null });
    }
}

module.exports = new RestaurantService();