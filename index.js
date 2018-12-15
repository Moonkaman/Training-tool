

class Jewlry {
  constructor(jewlryAttrs) {
    this.type = choose(['Necklace', 'Ring', 'Bracelet', 'Earrings']);
    this.beforePrice = Math.floor(Math.random() * (10000 - 100) + 100);
    this.sale = choose([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]);
    this.price = jewlryPrice(this.beforePrice, this.sale);
  }
}

class Person {
  constructor(personAttrs) {
    this.firstName = personAttrs.firstName;
    this.lastName = personAttrs.lastName;
    this.gender = personAttrs.gender;
    this.address = personAttrs.address;
    this.zipCode = personAttrs.zipCode
    this.birthMonth = personAttrs.birthMonth;
    this.birthDay = personAttrs.birthDay;
    this.birthYear = personAttrs.birthYear;
    this.age = 2018 - this.birthYear;
    this.email = genEmail(`${this.firstName[0]}${this.lastName.toLowerCase()}${Math.floor(Math.random()*9999)}`);
    this.phoneNumber = makePhoneNum();
    this.patience = Math.floor(Math.random() * (10 - 3) + 3);
    this.buy = new Jewlry();
    
  }

  fullName() {
    return `I am ${this.firstName} ${this.lastName}`;
  }

  birthday() {
    return `It is ${this.birthMonth} ${this.birthDay} ${this.birthYear}`;
  }
}

let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

customer = genPerson();
const totalPat = customer.patience;
let username = '';
let pass = '';

if(document.cookie.includes('nbusername') && document.cookie.includes('nbpass')) {
  let cookies = document.cookie.split('; ').filter( aCookie => {
    if(aCookie.includes('nbusername') || aCookie.includes('nbpass')) {
      return aCookie;
    }
  });

  username = cookies[0].slice(11, cookies[0].length);
  pass = cookies[1].slice(7, cookies[1].length);
} else {
  document.cookie = `nbusername=${prompt('Create a Username')}`;
  document.cookie = `nbpass=${prompt('Create a Password')}`;

  let cookies = document.cookie.split('; ').filter( aCookie => {
    if(aCookie.includes('nbusername') || aCookie.includes('nbpass')) {
      return aCookie;
    }
  });

  username = cookies[0].slice(11, cookies[0].length);
  pass = cookies[1].slice(7, cookies[1].length);
}

function genPerson() {
  if(Math.floor(Math.random()*2)) {
    const theAddr = addresses[Math.floor(Math.random() * addresses.length)];
    const fName = boyNames[Math.floor(Math.random() * boyNames.length)]
    const lName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const newPerson = new Person({
      firstName: fName,
      lastName: lName,
      gender: 'Male',
      address: theAddr.address1,
      zipCode: theAddr.postalCode,
      birthMonth: months[Math.floor(Math.random() * months.length)],
      birthDay: Math.floor(Math.random() * 32),
      birthYear: Math.floor(Math.random() * (2000 - 1930)) + 1930
    });

    return newPerson;
  } else {
    const theAddr = addresses[Math.floor(Math.random() * addresses.length)];
    const newPerson = new Person({
      firstName: girlNames[Math.floor(Math.random() * girlNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      gender: 'Female',
      address: theAddr.address1,
      zipCode: theAddr.postalCode,
      birthMonth: months[Math.floor(Math.random() * months.length)],
      birthDay: Math.floor(Math.random() * 32),
      birthYear: Math.floor(Math.random() * (2000 - 1930)) + 1930
    });
    return newPerson;
  }
}

function genEmail(email){
  const eDecide = Math.floor(Math.random()*5);

  switch (eDecide) {
    case 0:
      return email + '@gmail.com';
    break;

    case 1:
      return email + '@yahoo.com';
    break;

    case 2:
      return email + '@dcsdk12.com';
    break;

    case 3:
      return email + '@aol.com';
    break;

    case 4:
      return email + '@zoho.com';
    break;
  }
}

function makePhoneNum() {
  let phoneNum = '';
  if(Math.floor(Math.random()*2)) {
    phoneNum += '720';
    for(i=0; i < 7; i++){
      phoneNum += String(Math.floor(Math.random()*10));
    }
  } else {
    phoneNum += '303';
    for(i=0; i < 7; i++){
      phoneNum += String(Math.floor(Math.random()*10));
    }
  }

  return phoneNum;
}

function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function jewlryPrice(price, sale) {
  let newPrice = price * (1 - (sale / 100));

  newPrice = Math.round(newPrice * 100) / 100;

  if(newPrice < 75) {
    newPrice += 19.99;
  }else if(newPrice < 99.99 && newPrice > 75) {
    newPrice += 29.99
  }else if(newPrice < 149.99 && newPrice > 99.99) {
    newPrice += 39.99
  }else if(newPrice < 199.99 && newPrice > 149.99) {
    newPrice += 49.99
  }else if(newPrice < 249.99 && newPrice > 199.99) {
    newPrice += 59.99
  }else if(newPrice < 299.99 && newPrice > 249.99) {
    newPrice += 69.99
  }else if(newPrice < 349.99 && newPrice > 299.99) {
    newPrice += 74.99
  }else if(newPrice < 399.99 && newPrice > 349.99) {
    newPrice += 89.99
  }else if(newPrice < 499.99 && newPrice > 399.99) {
    newPrice += 94.99
  }else if(newPrice < 599.99 && newPrice > 499.99) {
    newPrice += 109.99
  }else if(newPrice < 799.99 && newPrice > 599.99) {
    newPrice += 119.99
  }else if(newPrice < 999.99 && newPrice > 799.99) {
    newPrice += 129.99
  }else if(newPrice < 1499.99 && newPrice > 999.99) {
    newPrice += 149.99
  }else if(newPrice < 1999.99 && newPrice > 1499.99) {
    newPrice += 169.99
  }else if(newPrice < 2999.99 && newPrice > 1999.99) {
    newPrice += 199.99
  }else if(newPrice < 4999.99 && newPrice > 2999.99) {
    newPrice += 249.99
  }else if(newPrice < 9999.99 && newPrice > 4999.99) {
    newPrice += 349.99
  }else if(newPrice < 49999.99 && newPrice > 9999.99) {
    newPrice += 449.99
  }

  return (Math.round(newPrice * 100) / 100);

  newPrice *= 1.08;

  newPrice = Math.round(newPrice * 100) / 100;
}
