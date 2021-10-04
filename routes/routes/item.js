const router = require('express').Router();
const itemController = require('../../controllers/item');
router.post('/item', itemController.Additem);

router.get('/items',  itemController.getItem);
router.get('/item/:id', itemController.getOneItem);
router.put('/item/:id',itemController.updateItem);
router.delete("/item/:id",itemController.deleteItem)

module.exports = {
  router: router,
  basePath: '/'
};