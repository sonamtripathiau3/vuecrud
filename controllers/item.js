
const Item = require('../models/Item');

// Defined store route
exports.Additem= async(req, res)=> {
    console.log(req.body)
    try{
        var item = new Item(req.body);
        item.save()
      .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
    } catch(err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
        } 
};

// Defined get data(index or listing) route
exports.getItem= (req, res)=> {
  Item.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
};

// Defined edit route
exports.getOneItem=(req, res)=> {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
};

//  Defined update route
exports.updateItem= (req, res)=> {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.name = req.body.name;
      item.price = req.body.price;

      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
};

// Defined delete | remove | destroy route
 exports.deleteItem=(req, res)=> {
  Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
};
