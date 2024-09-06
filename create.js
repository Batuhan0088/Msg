module.exports = {
  path: '/create/:id',
  code: `
  $send[200;json;{
  code: '200',
  message: 'success'
  details: {
  content: '$getQuery[content]'
  author: '$getQuery[author]'
  channel: '$getQuery[channel]'
  guild: '$getQuery[guild]'
  time: '$getQuery[time]',
  }
  }]
  

$setVar[$getPath[id].guild;$getQuery[guild]]
$setVar[$getPath[id].author;$getQuery[author]]
$setVar[$getPath[id].time;$getQuery[time]]
$setVar[$getPath[id].channel;$getQuery[channel]]
$setVar[$getPath[id].content;$getQuery[content]]`
}