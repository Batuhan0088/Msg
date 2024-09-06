module.exports = {
  path: '/get/:id',
  code: `
  $send[200;json;{
  code: '200',
  message: 'success'
  details: {
  content: '$replaceText[$getVar[$get[path].content];(just a line breaker);()()]'
  author: '$getVar[$get[path].author]'
  channel: '$getVar[$get[path].channel]'
  guild: '$getVar[$get[path].guild]'
  time: '$getVar[$get[path].time]',
  }
  }]




$if[$getVar[$get[path].content]==undefined;400;{
code: '400'
message: 'Message Not Found In Database'
}]
$var[path;$getPath[id]]`
}