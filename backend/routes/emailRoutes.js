const express = require('express');
const router = express.Router();
const { sendMail } = require('../utils/emailService');

router.post('/send-email', sendMail);
module.exports = router;