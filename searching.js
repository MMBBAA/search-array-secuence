var f=[1,1];
var t=[1,1,3,3,5,7,8];
var d=[2,1,2,3,3,8];

var c=[1,2,3,4,5,4,6,3];
function comprobar(c){
var a=[1,2,3,5];
var b=[1,2,3,8];
var cadenanum1;
var cadenanum2;
var cadenanum3;
var cadena1235="";
var cadena1238="";
var cadenaComparar="";

for(i=0;i<a.length;i++){//1235 array
	cadenanum1=a[i].toString();
	cadena1235+=cadenanum1;
}

for(j=0;j<b.length;j++){//1238 array
	cadenanum2=b[j].toString();
	cadena1238+=cadenanum2;
}

for(k=0;k<c.length;k++){
	cadenanum3=c[k].toString();
	cadenaComparar+=cadenanum3;
	console.log(cadenaComparar);
}
if(cadenaComparar.includes(cadena1235)||cadenaComparar.includes(cadena1238)){
	console.log("contiene la cadena");
}
else{
	console.log("no la contiene");
}


}

comprobar(d);