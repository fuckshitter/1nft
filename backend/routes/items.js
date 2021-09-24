var express = require('express');
const User = require('../models/user');
const Item = require('../models/item');
var router = express.Router();
var cors = require('./cors')
var multer = require('multer');
var crypto = require('crypto');
const Transaction = require('../models/transaction');
const Auction = require('../models/auction');
const Bid = require('../models/bid');
const authenticate = require('../authenticate');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, 'public/nfts');
    },
    filename: (req, file, cb) => {
        console.log(file)
        const code = crypto.randomBytes(4).toString('hex');
        cb(null, `img_${code}.${file.originalname.split('.')[1]}`);
    }
});

const imageFileFilter = (req, file, cb) => {
    console.log(file)
    // if(!file.originalname.match(/\.(jpg|jpeg|png|gif|bmp)$/)) {
    //     return cb(new Error('You can upload only image files!'), false);
    // }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter});

router.use(express.json());

router.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200); });

router.get('/', cors.corsWithOptions, async (req, res, next) => {
  const itemsForSale = await Item.find({status: {$ne: '0'}}).populate('owner', 'address username');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, items: itemsForSale});
});

router.get('/:address', cors.corsWithOptions, async (req, res, next) => {
  const usr = await User.findOne({address: req.params.address});
  const itemsForSale = await Item.find({owner: usr._id, status: '0'}).populate('owner', 'address username');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, items: itemsForSale});
});

router.post('/:address', cors.corsWithOptions, upload.single('nftImage'), authenticate.signatureValid, async (req, res, next) => {
  const address = req.params.address;
  const name = req.body.name;
  const description = req.body.description;
  const token_uri = req.body.token_uri;
  const image_ipfs = req.body.image_ipfs;
  const category = req.body.category;
  const nftType = req.body.nftType;
  const usr = await User.findOne({address: address});

  var a = req.file.path.split(`public`)[1];
  console.log({name: name, description: description, image_local: a, owner: usr._id, image_ipfs: image_ipfs, token_uri: token_uri, status: "0", category, nft_type: nftType})
  const itemCreated = await Item.create({name: name, description: description, image_local: a, owner: usr._id, image_ipfs: image_ipfs, token_uri: token_uri, status: "0", category: category, nft_type: nftType});
  const itemToSend = await Item.findOne({_id: itemCreated._id}).populate('owner', 'address username');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, item: itemToSend, user: usr});
})

router.put('/minted', cors.corsWithOptions, async (req, res, next) => {
  const address = req.body.address;
  const token_id = req.body.id;
  const nft_id = req.body.nft_id;
  const txHash = req.body.txHash;
  const usr = await User.findOne({address: address});
  const updated_item = await Item.findOneAndUpdate({owner: usr._id, _id: token_id}, {$set: {minted: true, nft_id: nft_id}}, {new: true});
  const itemToSend = await Item.findOne({_id: updated_item._id}).populate('owner', 'address username');
  const transact = await Transaction.create({buyer: usr._id, price: "0.00", item_id: updated_item._id, txId: txHash});
  const transactToSend = await Transaction.findOne({_id: transact._id}).populate('seller', 'address').populate('buyer', 'address');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, item: itemToSend, transaction: transact, user: usr});
});

router.put('/added_to_marketplace', cors.corsWithOptions, async (req, res, next) => {
  const address = req.body.address;
  const token_id = req.body.item_id;
  const status = req.body.status;
  const price = req.body.price;
  const marketplace_id = req.body.marketplace_id;
  const txHash = req.body.txHash;
  const enddate = req.body.enddate;
  const usr = await User.findOne({address: address});
  var auct, auctionn;
  if (status === "2"){
      console.log(enddate, txHash);
      auct = await Auction.create({item_id: token_id, status: true, price: price, enddate: enddate, txId: txHash});
      auctionn = await Auction.findById(auct._id).populate('highestBid', 'bidder price').populate('item_id', 'nft_id');
  }
  const updated_item = await Item.findOneAndUpdate({owner: usr._id, _id: token_id}, {$set: {status: status, price: price, marketplace_id: marketplace_id}}, {new: true});
  const itemToSend = await Item.findOne({_id: updated_item._id}).populate('owner', 'address username');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  if (status === "2"){
      res.json({success: true, item: itemToSend, auction: auctionn, user: usr});
  }
  else{
      res.json({success: true, item: itemToSend});
  }
})


module.exports = router;