const kota = ['Jakarta', 'Bogor', 'Bandung', 'Tangerang', 'banten']
const kotaB = kota.filter(([kota]) => kota.match(/^B/i)).map(item=>item.toUpperCase())
const upper = kotaB.map(item=>item.toUpperCase())
console.log(kotaB)

console.log(upper)


const people = [
    { id: 1, name: 'Udin', age: 12 },
    { id: 1, name: 'Wati', age: 51 },
    { id: 1, name: 'Budi', age: 34 },
    { id: 1, name: 'Agus', age: 16 },
    { id: 1, name: 'Sari', age: 19 },
    { id: 1, name: 'Ririn', age: 21 },
  ]

  const kurang = people.filter(people => people.age < 21);
  console.log(kurang)


  function palindrome(str) {
    
    var re = /[\W_]/g; 
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr; 
  }
   
  function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }

console.log(checkPalindrom('makam'));

console.log(palindrome('lala'))

const word = "Race car"
const wordCleaner = word.replace(/\w/g,'') //selain huruf dihilangin
const bahaspalindrom = wordCleaner === wordCleaner.replace().split("").reverse().join("")

console.log(bahaspalindrom)


const csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

function CSVtoJSON(csv){
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    
    return JSON.stringify(result); 
  }

  console.log(CSVtoJSON(csv))

  const data = [
    {
      "order_id": "SO-921",
      "created_at": "2018-02-17T03:24:12",
      "customer": { "id": 33, "name": "Ari" },
      "items": [
        { "id": 24, "name": "Sapu Lidi", "qty": 2, "price": 13200 }, 
        { "id": 73, "name": "Sprei 160x200 polos", "qty": 1, "price": 149000 }
      ]
    },
    {
      "order_id": "SO-922",
      "created_at": "2018-02-20T13:10:32",
      "customer": { "id": 40, "name": "Ririn" },
      "items": [
        { "id": 83, "name": "Rice Cooker", "qty": 1, "price": 258000 },
        { "id": 24, "name": "Sapu Lidi", "qty": 1, "price": 13200 }, 
        { "id": 30, "name": "Teflon", "qty": 1, "price": 190000 }
      ]
    },
    {
      "order_id": "SO-923",
      "created_at": "2018-02-28T15:20:43",
      "customer": { "id": 33, "name": "Ari" },
      "items": [
        { "id": 303, "name": "Pematik Api", "qty": 1, "price": 12000 }, 
        { "id": 49, "name": "Panci", "qty": 2, "price": 70000 }
      ]
    },
    {
      "order_id": "SO-924",
      "created_at": "2018-03-02T14:30:54",
      "customer": { "id": 40, "name": "Ririn" },
      "items": [
        { "id": 986, "name": "TV LCD 40 inch", "qty": 1, "price": 6000000 }
      ]
    },
    {
      "order_id": "SO-925",
      "created_at": "2018-03-03T14:52:22",
      "customer": { "id": 33, "name": "Ari" },
      "items": [
        { "id": 1033, "name": "Nintendo Switch", "qty": 1, "price": 4990000 }, 
        { "id": 2003, "name": "Macbook Air 11 inch 128 GB", "qty": 1, "price": 12000000 },
        { "id": 23, "name": "Pocari Sweat 600ML", "qty": 5, "price": 7000 }
      ]
    },
    {
      "order_id": "SO-926",
      "created_at": "2018-03-05T16:23:20",
      "customer": { "id": 58, "name": "Annis" },
      "items": [
        { "id": 24, "name": "Sapu Lidi", "qty": 3, "price": 13200 }
      ]
    }
  ]

  console.log(JSON.stringify(data, null,1));
console.log(data)

  const feb = data.filter(data => data.customer >= "2018-01-31T23:59:59" && data.created_at <= "2018-03-01T00:00:00");
  const bulanfeb = data.filter(item => new Date(item.created_at).getMonth()===1)

  console.log(bulanfeb)

  console.log(JSON.stringify(feb,null,1));

  const siari = data.filter(data => data.customer.name === "Ari");
  const hargasiari = data.filter(item => item.customer.name==="Ari").map(item=>item.items.map(total=>total.price * total.qty).reduce((a, b) => a+b)).reduce((a,b) => a+b);

  console.log(JSON.stringify(hargasiari,null,1));


  const axios = require('axios');

  (async() =>  {
      const {data: users} = await axios.get("https://jsonplaceholder.typicode.com/users");
      const {data: posts} = await axios.get("https://jsonplaceholder.typicode.com/users");

      const result = users.map(user => {
          return {
              ... user,

              posts: JSON.stringify(posts.filter(item => item.userId === user.id))
          }
      })
  })


const trains = [
    {
        "name": "Taksaka",
        "class": "Executive",
        "price": 260000
    }
]

const concat = trains.concat(trains.name, trains.class)
console.log(concat)