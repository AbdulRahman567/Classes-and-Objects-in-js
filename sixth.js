 //      Objects (direct)
// const student ={
//     fullName : "Ali",    //properties
//     marks : 97.5,
//     printMarks : function(){                  //functions/methods
//         console.log('Marks = ',this.marks);   //this.marks means student.marks
//     }
// }
// console.log(student.fullName);
// student.printMarks();

/******************     prototypes      *******************/
// let arr=["mango" , "apple" , "lichi"];
// console.log(arr);
// console.log("Type of array in js",typeof arr);
// arr.push("banana");        //push method is come from prototype
// console.log(arr);

//    =>  when object is created in java-script , by-default it has prototypes


//    =>  we can also make prototypes by ourselves
// const employee = {
//     calculateTax(){
//         console.log("Tax is 10%");
//     }
// };
// const ali={
//     salary : 50000,
// };
// ali.__proto__=employee;          // Now employee's calculateTax is prototype of ali 
// console.log(ali.calculateTax());


//    =>  if object and method have same methods , object's method will be used 
// const employee = {
//     calculateTax(){
//         console.log("Tax is 10%");
//     }
// };
// const ali={
//     salary : 50000,
//     calculateTax(){
//         console.log("Tax is 20%");      // CalculateTax function is in both objects(employee & ali) 
//     }
// };
// ali.__proto__=employee;       
// console.log(ali.calculateTax());



/***********            Classes          ******************/
// class toyotaCar{
//     start(){
//         console.log("Car is start");
//     }
//     stop(){
//         console.log("Car is stop");
//     }
//     setBrand(brand){
//     this.BrandName = brand;
//     }
// }
// let fortuner = new toyotaCar();   //obj of class
// fortuner.setBrand("Fortuner");
// console.log(fortuner.BrandName);
// let lexus = new toyotaCar();   //obj of class
// lexus.setBrand("Lexus");
// console.log(lexus.BrandName);


/*************          Constructor       ****************/
//   automatically invoked by new(when obj of class is created)

// class cnstrctr{                // very basic example
//     constructor(){
//         console.log("This is our constructor");
//     }
//     morning(){
//         console.log("Good Morning");
//     }
// }
// let a = new cnstrctr();
// a.morning();
// let b = new cnstrctr();



/*********************       Parameterized constructor      *************/
// class toyotaCar{
//     constructor(brand,mileage){
//         console.log("Good Morning By Constructor");
//         this.BrandName = brand;
//         this.MileAge = mileage;
//     }
//     start(){
//         console.log("Car is start");
//     }
//     stop(){
//         console.log("Car is stop");
//     }
// }
// let fortuner = new toyotaCar("Fortuner" , 10);   //obj of class
// console.log("BRAND : ",fortuner.BrandName);
// console.log("Milage : ",fortuner.MileAge);
// let lexus = new toyotaCar("Lexus" , 12);   //obj of class
// console.log("BRAND : ",lexus.BrandName);
// console.log("Mileage : ",lexus.MileAge);


/***********      Inheritance      *****************/
// class parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class child extends parent{
// }
// let obj =new child;



//   =>  if parent and child have same methods , child's method will be used
// class person{
//     constructor(){
//         this.species="Homo sapiens";
//     }
//     eat(){
//         console.log("Eat food");
//     }
//     sleep(){
//         console.log("Sleep at night");
//     }
//     work(){                               //work funtion is in all classes but used only child method
//         console.log("Do nothing");
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("Manage and builed something");
//     }
// }
// class doctor extends person{
//     work(){
//         console.log("Check patients");
//     }
// }
// let Ali=new engineer;
// console.log(Ali.eat());
// console.log(Ali.sleep());
// console.log(Ali.work());
// let Ahmad=new doctor;
// console.log(Ahmad.eat());
// console.log(Ahmad.sleep());
// console.log(Ahmad.work());
// console.log(Ahmad.species);      //  constructor

/***************       Super keyword    **************/
// class person{
//     constructor(name){
//         this.species="Homo sapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("Eat food");
//     }
//     sleep(){
//         console.log("Sleep at night");
//     }
//     work(){                               //work funtion is in all classes but used only child method
//         console.log("Do nothing");
//     }
// }
// class engineer extends person{
//     constructor(name){
//         super(name);     //  super() is used to invoke parent class constructor
//     }
//     work(){
//         super.eat();   //child class access parent class methods by super keyword
//         console.log("Manage and solve porblems , builed something");
//     }
// }
// class doctor extends person{
//     work(){
//         console.log("Check patients");
//     }
// }
// let engObj=new engineer("Ali");
// let docObj=new doctor("Umer");



/*************          Practice question      *************/
// let data="secret information";
// class user{
//     constructor(name , email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("Data : ",data);
//     }
// }
// class Admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         data = "New edited data";
//     }
// }
// let std1=new user("Amna","amna@123");
// let std2=new user("Aman","aman@231");
// let teacher=new user("Dean","dean@123");
// let admin=new Admin("Admin","admin@123")


/**************   Error Handling (try-catch)      *********/
// let a=5;
// let b=7;
// console.log('Value of a = ',a);
// console.log('Value of b = ',b);
// console.log('Value of a + b = ',a+b);
// console.log('Value of a - c = ',a-c);    // we don't declear "c" is program.It gives error and program execution stopped
// console.log('Value of a * b= ',a*b);
// console.log('Value of a / b= ',a/b);
// console.log('Value of a % b= ',a%b);

let a=5;
let b=7;
console.log('Value of a = ',a);
console.log('Value of b = ',b);
try {                                    // using try-catch method program dont stop execution at errors
    console.log('Value of a + b = ',a+b);
    console.log('Value of a - c = ',a-c);
    console.log("After error in try block");   // never executed
} catch (error) {
    console.log(error);
}
console.log('Value of a * b = ',a*b);
console.log('Value of a / b = ',a/b);
console.log('Value of a % b = ',a%b);