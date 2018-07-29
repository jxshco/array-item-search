export default (arr, string) => {
  let rg = new RegExp(string, 'i')
  return arr.filter(item => rg.test(item))
}
