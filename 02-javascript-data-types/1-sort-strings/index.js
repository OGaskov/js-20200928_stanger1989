/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const collator=new Intl.Collator(['ru','en-GB','en-US'], {caseFirst: 'upper'})
  if (param==='asc') {
    return [...arr].sort((a,b)=>{return collator.compare(a,b)})
  } else if (param==='desc') {
    return [...arr].sort((a,b)=>{return collator.compare(b,a)})
  }
  return arr
}

