//if
let orange = 100;
let apple = 120;

if (orange < apple){
   alert('みかんの値段がりんごより安い');
} else if(orange == apple) {
   alert('みかんとりんごが同じ値段');
} else{
   alert('みかんの値段がりんごより高い'); 
}

//while
let max =100;
let num = 1;
let count = 0;

while(num < max){
    num = num * 2;
    count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');