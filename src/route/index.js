// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є

const test2 = require('./test2')

const calc = require('./calc')

// Об'єднайте файли роутів за потреби
router.use('/', test)
// Використовуйте інші файли роутів, якщо є

router.use('/test', test2)

router.use('/calc', calc)

// Експортуємо глобальний роутер
module.exports = router
