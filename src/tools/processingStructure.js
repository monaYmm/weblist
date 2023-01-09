const processingList = (data, type) => {
  const anchorList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const allList = {}
  // type:true need reverse order
  if (type) {
    anchorList.reverse()
  }
  anchorList.forEach((item) => {
    allList[item] = []
    // Judgment array or object
    const forData = Object.prototype.toString.call(data) === '[object Object]' ? Object.keys(data) : data
    for (const el of forData) {
      const first = el.substr(0, 1).toUpperCase() // initial letter uppercase
      if (first === item) {
        allList[item].push(el)
      }
    }
    // If there is no value under the key, delete the key
    if (!allList[item].length) {
      delete allList[item]
    }
  })
  return allList
}
export { processingList }
