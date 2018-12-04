// var Mock  = require('mockjs')
import Mock from 'mockjs'
var data = Mock.mock('json', 'get', {
  'list|2-6': [{
    'id|+1': 1,
    'date|+1': '2018-12-4',
    'title' : 'title'
  }]
})

console.log(data)
export default data