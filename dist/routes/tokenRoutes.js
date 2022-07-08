"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController); // letra minuscula pois o que vem é da clesse é um obj e não a classe

const router = new (0, _express.Router)();

router.post('/', _TokenController2.default.store);

exports. default = router;
