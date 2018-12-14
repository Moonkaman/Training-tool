//console.log(boyNames[Math.floor(Math.random() * boyNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]);
//console.log(girlNames[Math.floor(Math.random() * girlNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)]);

//addresses.forEach(item => console.log(item.address1));

months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//people = [];

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
    
  }

  fullName() {
    return `I am ${this.firstName} ${this.lastName}`;
  }

  birthday() {
    return `It is ${this.birthMonth} ${this.birthDay} ${this.birthYear}`;
  }
}

customer = genPerson();
const totalPat = customer.patience;

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