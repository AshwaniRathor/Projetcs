// function fun(){
//     console.log(x);
//     if(true){
//         let x = 10;
//     }
//     else{
//         let y = 20;
//     }
//     console.log(y);

// }

// fun();

// let a = 'hello'; // globally scoped
// // let b = 'hello';
// // let b = 'world'; // globally scoped
// // // console.log(a); // undefined
// // console.log(b); // 'world'
// // // var a = 'world'; // No problem, 'hello' is replaced.
// // // let b = 'hello';
// // // let b = 'world'; // SyntaxError: Identifier 'b' has already been declared

// // // let hell = [2,4,8];
// // // let arr1 = hell.every((num)=>{
// // //     return num%2===0; 
// // // });
// // // console.log(arr1);

// // function movies(name, release, language){
// //     this.name = name;
// //     this.release = release;
// //     this.language = language;
// //     this.details = function(){
// //         console.log(`Movie name: ${this.language}`);
// //     }
// // }

// // let movie1 = new movies('pathaan', 2022, 'hindi,enlish');

// // console.log(movie1.__proto__ṇ)

// // let arr ="hello"

// // console.log((arr.__proto__ === String.prototype))

// // function vehicle(color, np){
// //     this.color = color;
// //     this.np = np;
// // }
// // function car(name,color,np){
// //     vehicle.call(this,color,np);
// //     this.name = name;
// // }
// // function car_feature(mileage,name,color,np){
// //     car.call(this,name,color,np);
// //     this.mileage = mileage;
// // }

// // let car1 = new car_feature(10000,'toyota','red','0101');

// // console.log(car1.np);

// 	// Regular Function.
// 	// function Greet() {
// 	// 	console.log("Welcome to GFG!");
// 	// };
// 	// // Execution of Regular Function.
// 	// Greet();

// 	// // IIFE creation and execution.
// 	// let hello =(()=>{
// 	// 	console.log("IIFEs!");
// 	// })();

//     // console.log(hello);
    
// 	const URL = 'http://facebook.com/user/profile.jpg';

// 	function downloadFile(path, downloaded){
// 		console.log('Started to download the file from path', path);
// 		setTimeout(()=>{
// 			// console.log("File Downloaded Successfully!");
// 			downloaded(path.split('/').pop());
// 		},3000);
// 	}
	
// 	function compressFile(fileName, compresed){
// 		console.log('Starting to compress the file', fileName);
// 		setTimeout(() => {
// 			compresed(fileName.replace('jpg', 'zip'));
// 		}, 2000);
// 	}
	
// 	function uploadFile(compressFileName, uploaded){
// 		console.log('Starting to upload the file', compressFileName);
// 		setTimeout(() => {
// 			uploaded('http://facebook.cloud/'+ compressFileName);
// 		}, 3000);
// 	}
	
	
// 	// downloadFile(URL, function(){
	
// 	// });
	
// 	// callback hell
// 	downloadFile(URL, function(fileName){
// 		console.log("File Downloaded SuccessFully as", fileName);
// 		compressFile(fileName, function(compressFileName){
// 			console.log('File Compressed Successfully as', compressFileName);
// 			uploadFile(compressFileName, function(uploadedPath){
// 				console.log('File uploaded successfully at path', uploadedPath);
// 			})
// 		})
// 	});
	
// const URL = 'http://facebook.com/user/profile.jpg';

// function downloadFile(path){
//     return new Promise((resolve, reject) => {
//         console.log('Started to download the file from path', path);
//         setTimeout(()=>{
//             // console.log("File Downloaded SuccessFully as", path.split('/').pop())
//             resolve(path.split('/').pop());
//         },3000);
//     })
// }

// function compressFile(fileName){
//     return new Promise((resolve, reject) => {
//         console.log('Starting to compress the file', fileName);
//         setTimeout(() => {
//             // console.log('File Compressed Successfully as', fileName.replace('jpg', 'zip'));
//             resolve(fileName.replace('jpg', 'zip'));
//         }, 2000);
//     })
// }

// function uploadFile(compressFileName){
//     return new Promise((resolve, reject) => {
//         console.log('Starting to upload the file', compressFileName);
//         setTimeout(() => {
//             // console.log('File uploaded successfully at path', compressFileName);
//             resolve('http://facebook.cloud/'+ compressFileName);
//         }, 3000);
//     })
// }

// downloadFile(URL)
//     .then(compressFile)
//     .then(uploadFile)
//     .catch((err)=>{
//         console.log(err);
//     })
// function hello(){
	
// }
