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



    let temprature = [2, 5, 4, 45, "error", 85, 8];

    function getHigerandLower(arr){
        // get higher value;
        let higher = arr[0];
        // get lower value;
        let lower = arr[0];
       
        // itarate whole array
        for(let i =0; i<arr.length; i++){
            // avaid errror string
            if(typeof arr[i]!=="number") continue

            if(higher<arr[i]){
                higher = arr[i]
            }
            console.log({higher});
            if(lower>arr[i]){
                lower = arr[i];
            }
            console.log({lower});

        }
       return higher-lower;
    }

    console.log(getHigerandLower(temprature));