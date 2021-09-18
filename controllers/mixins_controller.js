const express = require('express')
const router = express.Router()
const Mixins = require('../models/mixins')

router.get('/', (req, res) => {
  Mixins.allMixins()
    .then(mixins => res.json(mixins))
})

module.exports = router