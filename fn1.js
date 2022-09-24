
   function fn1() {
    let root1, root2;
    let a = parseInt(document.querySelector("#a").value);
    let b = parseInt(document.querySelector("#b").value);
    let c = parseInt(document.querySelector("#c").value);
    let d = b * b - 4 * a * c;
    

    if (d > 0) {
    root1 = (-b + Math.sqrt(d)) / (2 * a);
    root2 = (-b - Math.sqrt(d)) / (2*a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    
    }

    else if (d == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
   
    }

    else   {   
    (d<0)
    console.log('no real numbers');

    }
    
    document.getElementById("result").innerHTML = "X1=" + root1;
    document.getElementById("result2").innerHTML = "X2=" + root2;

   }
   

   function fn2() {
    let rootX1 ,rootX2, rootX3, rootX4;
    let a1 = parseInt(document.querySelector("#a1").value);
    let b1 = parseInt(document.querySelector("#b1").value);
    let c1 = parseInt(document.querySelector("#c1").value);
    let d1 = b1 * b1 - 4 * a1 * c1;

    if (d1 > 0) {
    rootX1 = Math.sqrt(((-b1 + Math.sqrt(d1)) / (2 * a1)));
    rootX4 = Math.sqrt(((-b1 - Math.sqrt(d1)) / (2 * a1)));
    rootX3 = -Math.sqrt(((-b1 - Math.sqrt(d1)) / (2 * a1)));
    rootX2 = -Math.sqrt(((-b1 + Math.sqrt(d1)) / (2 * a1)));
    console.log(`The roots of quadratic equation are ${rootX1} , ${rootX2}, ${rootX3}and ${rootX4}`);
    
    }

    else if (d1 == 0) {
      rootX1 = Math.sqrt((-b1 + Math.sqrt(d1)) / (2 * a1));
      rootX4 = Math.sqrt((-b1 - Math.sqrt(d1)) / (2 * a1));
      rootX3 = -Math.sqrt((-b1 - Math.sqrt(d1)) / (2 * a1));
      rootX2 = -(Math.sqrt(-b1 + Math.sqrt(d1)) / (2 * a1));
    console.log(`The roots of quadratic equation are ${rootX1} and ${rootX2}, ${rootX3}, ${rootX4}`);
   
    }

    else   {   
    (d1<0)
    console.log('No real numbers');

    }
    
    document.getElementById("resultX1").innerHTML = "X1=" + rootX1;
    document.getElementById("resultX2").innerHTML = "X2=" + rootX2;
    document.getElementById("resultX3").innerHTML = "X3=" + rootX3;
    document.getElementById("resultX4").innerHTML = "X4=" + rootX4;


   }

 function fn3() {
  let area;
  let sideA = parseInt(document.querySelector("#sideA").value);
  let sideB = parseInt(document.querySelector("#sideB").value);
  let sideC = parseInt(document.querySelector("#sideC").value);
  let p = (sideA+sideB+sideC) / 2;

  area = Math.sqrt(p*(p - sideA)*(p-sideB)*(p-sideC));
  console.log(`area  ${area}`);
   
  selectElement = document.querySelector('#select1');
        output = selectElement.options[selectElement.selectedIndex].value;
        document.querySelector('.output').textContent = area + output;

  


}

