const Restaurant = require('../../models').Restaurant;
const sequelize = require('sequelize');
const path = require("path");

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
        if(file) {
            const asset = path.join(__dirname, '../../storage/images');
            const filename = new Date().toISOString().replace(/:/g, '-') + file.avatar.name;

            return file.avatar.mv(asset + '/' + filename, async err => {
                if(err) throw new Error('error upload file');
                return await Restaurant.create({...body, avatar: filename});
            });
        }
        return await Restaurant.create({...body});
    }
}

module.exports = new RestaurantService();