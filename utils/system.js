export function deepCopy (obj) {
  return JSON.stringify(JSON.parse(obj))
}

export function guid () {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}

export function getRootPath () {
  let curPageUrl = window.document.location.href
  let temp = curPageUrl.split('//')
  let rootPath = temp[0] + '//' + temp[1].split('/')[0] + '/' + temp[1].split('/')[1]
  return rootPath
}
