// 资源中间件
module.exports = options => {
  return async (req, res, next) => {
    // 处理单复数的转换   如：categories -> Category
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}