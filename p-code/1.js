const m = new Map([
  [{ a: '1' }, [1, 2, 3]]
])

const o = { a: 1 }

const res = m.get(o)

const obj = {
  defaultValue: ['1'],
  options: [
    {
      "name": "所属用户组1",
      "code": "1",
      "optionType": "ownerGroups"
    },
    {
      "name": "所属用户组2",
      "code": "2",
      "optionType": "ownerGroups"
    }
  ]
}

const v= ['bizCase_og', 'sys_og', 'sys.zijian+iu']
const encodedData = encodeURIComponent(v.join(','));

console.log('Encoded Data:', encodedData);

const decodedData = decodeURIComponent(encodedData);

console.log('Decoded Data: ----', decodedData);
const c = decodedData.split(',');
console.log('c --->', c)
