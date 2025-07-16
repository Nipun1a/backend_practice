var arr = [1,2,3,4,5,6,7,8,9,10];
var ans = arr.map(function(num){
    return num * 2;
});
console.log(ans);

var ans2 = ans.filter(function(num){
    return num % 2 === 0;
});
console.log(ans2);

var ans3 = arr.find(function(num){
    if (num > 5){
        return num;
    }
});
console.log(ans3);

var ans4 = arr.indexOf(5);
console.log(ans4);


// objects in the js

var person = {
    name: "nipun",
    lastname: "pal",
    age: 20,
    hobbies: ["reading", "coding", "gaming"],

}

// function in the js

function greet (name) {
    return "hello "+name;
}


async function fetchdata() {
    try {
        let response = await fetch("https://www.youtube.com/watch?v=T55Kb8rrH1g&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH&index=4");
        let ans = await response.json();
        return ans;
        console.log(ans);
    }
    catch (error){
        console.error("Error fetching data:", error);
        return null;
    }
}