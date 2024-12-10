function paliandrom(){
    
str=str.toUpperCase().trim();

let revers=str.split('').reverse().join('');


if(str===revers){


    console.log("palin drom=>",str);
}
else{


    console.log("note a  palindrom =>",str);
}

}

let str=prompt("Enter a string");
paliandrom();
