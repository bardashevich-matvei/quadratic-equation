module.exports = function solveEquation(equation) {
  var x1,x2,a,e=[],b,c;
  var r=/\d+/g;
  while ((a=r.exec(equation))!=null) {
    e.push(a);
  }
  a=e[0];
  b=e[2];
  c=e[3];
  var mas=[];
  mas.push("+");
  mas.push("+");
  mas.push("+");
  if (equation[0]==='-') mas[0]=equation[0];
  var i=1,j=1;
  do{
    if((equation[i]==='+') || (equation[i]==='-')){
      mas[j]=equation[i];
      j++;
    }
    i++;
  } while(j<3);
  if (mas[0]==="-") a=-a;
  if (mas[1]==='-') b=-b;
  if (mas[2]==='-') c=-c;
  var d=b*b - 4 * a * c;
  if (d>0){
    x1=(Math.sqrt(d)-b)/(2*a);
    x2=(-Math.sqrt(d)-b)/(2*a);
  }else
  if (d===0){
    x1=x2=-b/(2*a);
  }
  x1=Math.round(x1);
  x2=Math.round(x2);
  var resolt=[];
  if (x1>x2) {
    resolt.push(x2);
    resolt.push(x1);
  }else{
    
    resolt.push(x1);
    resolt.push(x2);
  }
  return resolt;
}
