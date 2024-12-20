// OS module kahan use pe ata hai ?
// ese system jahan apko apny operatuing sysytem ki info nikalni ho to wahan yeh module use me ata hai matlab system ki ram , architecghture wagera dekhna hota tab yeh module use karty

const os = require('os')
console.log(os.arch());   //system ka architechture batata x64
console.log(os.freemem()/(1024*1024*1024));  //system ki free memory kitni hai in bytes 
console.log(os.totalmem()/(1024*1024*1024));  //system ki total memory kitni hai in bytes
console.log(os.hostname());  //system ki hostname batata hai
console.log(os.platform());  //system ki platform batata hai
console.log(os.userInfo());  //system ki user info batata hai