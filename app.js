function longshoose(k) {
    var length;
    length=Math.round( Math.random()*k);
    arr=new Array(length);
    limit=interval();
    for(var i=0;i<length;i++){
        arr[i]=insertnumber(limit.from,limit.to);
    }
    return arr;
}
function interval() {

    var from=-100;
    var to=100;

    return {from,to};
}
function insertnumber (from,to) {
    var num=Math.floor(from+Math.random()*(to-from));
    return num;

}
arr=(longshoose(prompt('Введите длину массива')));
console.log(arr);
console.log(bubble(arr));
function bubble (arr) {
    for(var i=0;i<arr.length-1;i++){
        for (var j=1+i;j<arr.length;j++)
        {var free;
        if(arr[i]<arr[j])
        {
            free=arr[j];
            arr[j]=arr[i];
            arr[i]=free;
        }

        }
    }
return arr;
}