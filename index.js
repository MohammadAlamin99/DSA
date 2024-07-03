// Big o notation

// function min5Log(n){
//     for(let i = 0; i<=Math.max(5, n); i++){
//         console.log(i)
//     }
// }

// console.log(min5Log(2)) //O(n)


// function min5Log(n){
//     for(let i = 0; i<=Math.min(5, n); i++){
//         console.log(i)
//     }
// }

// console.log(min5Log(1000)) //O(1)


// Big o notation an example Space Complexity !!


    // let total = 0;
    //     function sum(arr){
    //         for(let i =0 ; i<arr.length; i++){
    //             total = total+arr[i]
    //         }
    //         return total
    //     }

    //     console.log(sum([1,2,3]));  //Big O(1) space!

    // function duble(arr){
    //     let newArray = [];
    //     for(let i =0 ; i<arr.length; i++){
    //         newArray.push(arr[i]*2)
    //     }
    //     return newArray
    // }

    // console.log(duble([1,2,3])) //O(n) space



//  Example of time complexity and space Complexity !!

    // function uniqueName(arr){
    //     let uniqueName = [];
    //     for(let i = 0 ; i<arr.length; i++) { //n
    //         let ele = arr[i]
    //         if(!uniqueName.includes(ele)){ //n
    //             uniqueName.push(ele)
    //         }
    //     }       
    //     return uniqueName; // space n
    // }

    // // time complexity = n2
    // // space complexity = n

    // let array = ["hamim","taimm","hamim"]
    // console.log(uniqueName(array));



    // let temprature = [2, 5, 4, 45, "error", 85, 8];

    // function getHigerandLower(arr){
    //     // get higher value;
    //     let higher = arr[0];
    //     // get lower value;
    //     let lower = arr[0];
       
    //     // itarate whole array
    //     for(let i =0; i<arr.length; i++){
    //         // avaid errror string
    //         if(typeof arr[i]!=="number") continue

    //         if(higher<arr[i]){
    //             higher = arr[i]
    //         }
    //         if(lower>arr[i]){
    //             lower = arr[i];
    //         }
            
    //     }
    //     console.log({higher});
    //     console.log({lower});
    //    return higher-lower;
    // }

    // console.log(getHigerandLower(temprature));

// Counting String value;

//     function strCount(str){
//         let charList = {}
//         for(let i = 0; i<str.length; i++){
//             let char = str[i];
//            if(charList[char]>0){
//             charList[char]++;
//            }
//            else{
//             charList[char]=1;
//            }
//         }
//         return charList
//     }
//    const result = strCount("hello everyone");
//    console.log(result);


 
// compare 2 array 
        // function compare(arr1, arr2){
        //     if(arr1.length!==arr2.length){
        //         return false;
        //     }
        //     for(let i=0; i<arr1.length; i++){
        //         let curentIndex = arr2.indexOf(arr1[i]**2);
        //         if(curentIndex===-1){
        //             return false
        //         }
        //     }
        //     return true;
        // }

        // let result = compare([2,3,6],[4,9,36]);
        // console.log(result);


// =================> Recursion
        // normal for Loop
    // function countDonw(n){
    //     for(let i =n;i>0; i--){
    //         console.log(i)
    //     }
    // }

    // countDonw(10)

    // Recursion
    // function countDonw(n){
    //     console.log(n)
    //     n--;
    //     if(n>0){
    //         countDonw(n)
    //     }
    // }

    // countDonw(10)

//     function sumOfNum(n){
//         let sum = 0;
//         for (let i = n; i > 0; i--) {
//             sum = sum+i;
//         }
//         return sum;
//         }
//   console.log(sumOfNum(10))



// sum 10 to 0 with recursion

        // function sumOfNum(n){
        //     if(n<0){
        //         return 0;
        //     }
        //     return n + sumOfNum(n-1);
        // }
        // console.log(sumOfNum(10));


// sum all number of array
        // function sumOfArray(arr){
        //     if(arr.length===0){
        //         return 0;
        //     }
        //     let rest = arr.slice(1); //bio(n)
        //     return arr[0] + sumOfArray(rest)//(n)  
        // }
        // console.log(sumOfArray([2,3,5]));
// Time complexity = n *n =n^2
// Space Complexity = (n);


// 17/6/24   7:02 Eid Mubarok


// let array = new Array(8000).fill(5)

// function sumOfArray(arr){
//     return helperSum(arr, 0);
// }

// function helperSum(arr, index){
//     if(arr.length===index){
//         return 0;
//     }
//     return arr[index]+ helperSum(arr, index+1)
// }

// let now = Date.now()
// console.log(sumOfArray(array));
// let finish = Date.now();
// console.log(`time duaration is ${finish-now}`);


// good comming soon Insallah...........!



// find even number in array with recursion

        // function findEvenNumber(arr){
        //         let result = [];
        //         function helper(arr){
        //                 if(arr.length===0) return; //o(1)
        //                 if(arr[0] % 2==0){
        //                         result.push(arr[0]); //0(1)
        //                 }
        //                 helper(arr.slice(1))  //o(n)
        //                 }
        //         helper(arr); //o(n)
        //         return result       
        // }
        // console.log(findEvenNumber([2,5,4,8,9,11,25,24]));

        // Time complexity = o(n*n)
        // space complexity = o(n)


// Best code for find even number on the array

        //      function findEvenNumber(arr){
        //         let result = [];
        //         function helper(index){
        //                 if(arr.length===index) return;
        //                 if(arr[index] % 2==0){
        //                         result.push(arr[index]);
        //                 }
        //                 helper(index+1)
        //                 }
        //         helper(0);
        //         return result       
        // }
        // console.log(findEvenNumber([2,5,4,8,9,11,25,24]));


// Linier Searching 

        // function Linier(arr, value){
        //         for(let i =0; i<arr.length; i++){
        //                 if(arr[i]==value){
        //                 return i;
        //                 }
        //         }
        //         return -1;
        // }
        // console.log(Linier([1,23,52,12,45],12))




// Binary Searching

        // function binarySearch(arr, value){
        //         let start = 0; 
        //         let end = arr.length-1;
        //         while(start<=end){
        //                 let middle = Math.round((start+end)/2);
        //                 if(arr[middle]===value)
        //                         {
        //                                 return middle
        //                         }
        //                 if(value>arr[middle]){
        //                         start= middle+1;
        //                 }
        //                 else if(value<arr[middle]){
        //                         end = middle-1;
        //                 }
        //         }
        //         return -1
        // }
        // console.log(binarySearch([1,2,3,4,5],5));

        // ===============================================================
                                        // array sorting
        // ==============================================================


// bubble sort 

        // function bubbleSort(arr){
        //         for(let i =0; i<arr.length; i++){
        //                 for(let j = 0; j<arr.length-1; j++){
        //                         if(arr[j]>arr[j+1]){
        //                                 let temp = arr[j];
        //                                 arr[j] = arr[j+1];
        //                                 arr[j+1] = temp;
        //                         }
        //                 }
        //         }
        //         return arr;
        // }

        // const array = [23,4,-5,8,56];
        // const result = bubbleSort(array);
        // console.log(result);


// Selection sort


        // const selectionSort = (arr)=>{
        //         for(let i = 0; i<arr.length; i++){
        //                 let lowest = i;
        //                 for(let j = i+1; j<arr.length;j++){
        //                       if(arr[lowest]>arr[j]){
        //                         lowest = j;
        //                       }
        //                 } 

        //                 let temp = arr[i];
        //                 arr[i] = arr[lowest];
        //                 arr[lowest] = temp;
        //         }
        //         return arr;
        // }

        // console.log(selectionSort([5,45,78,23,6,2]))


