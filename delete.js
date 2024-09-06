module.exports = {
  path: '/delete/:id',
  code: `
  $send[200;json;{
  code: '200',
  message: 'success, message removed from database!'
  
  
  
  
  
  
  
  }]


$deleteVar[$get[path]]

$if[$getVar[$get[path].content]==undefined;400;{
code: '400'
message: 'Message Not Found In Database'
}]
$var[path;$getPath[id]]`
}