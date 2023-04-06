//luas segitiga
function luas_triangle(event){
    //prevent the form from submit
    event.preventDefault(); 

    try {
        // ngambil angka dari form
        const num1 = parseFloat(document.getElementById("number1").value);
        const num2 = parseFloat(document.getElementById("number2").value);
        
        // perhitungan
        const result = 1/2 * num1  * num2;

        //pengecekan data
        if (isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid Input");
        }

        //tampilkan hail perhitungan ke html
        const rumus = document.getElementById("result-isi").textContent = "L = 1/2 x "+num1+" x "+num2;
        const final = document.getElementById("result-luas").textContent = "L = "+result;
        
        // Element.final = "L = 1/2 x "+num1+" x "+num2+" = "+result;
        //cek di consol
        //console.log(num1, num2, result);
        // console.log("register sukses");

    } catch (error) {
        console.error(error);
        alert("Error: " + error.massage);
    }

    
}

//keliling segitiga
function keliling_triangle(event){
    //prevent the form from submit
    event.preventDefault(); 
    
    try {
        // ngambil angka dari form
        const S1 = parseFloat(document.getElementById("S1").value);
        const S2 = parseFloat(document.getElementById("S2").value);
        const S3 = parseFloat(document.getElementById("S3").value);
        
        // perhitungan
        const result = S1 + S2 + S3;
        
        //pengecekan data
        if (isNaN(S1) || isNaN(S2) || isNaN(S3)){
            throw new Error("Invalid Input");
        }
        
        //tampilkan hail perhitungan ke html
        const rumus = document.getElementById("result-isi-kel").textContent = "K = "+S1+" + "+S2+ " + "+S3;
        const final = document.getElementById("result-kel").textContent = "K = "+result;
        
        // Element.final = "L = 1/2 x "+num1+" x "+num2+" = "+result;
        //cek di consol
        //console.log(num1, num2, result);
        // console.log("register sukses");
        
    } catch (error) {
        console.error(error);
        alert("Error: " + error.massage);
    }
}

//luar jajargenjang
function luas_jajargenjang(event){
    //prevent the form from submit
    event.preventDefault(); 

    try {
        // ngambil angka dari form
        const num1 = parseFloat(document.getElementById("number1").value);
        const num2 = parseFloat(document.getElementById("number2").value);
        
        // perhitungan
        const result = num1 * num2;

        //pengecekan data
        if (isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid Input");
        }

        //tampilkan hail perhitungan ke html
        const rumus = document.getElementById("result-isi").textContent = "L = "+num1+" x "+num2;
        const final = document.getElementById("result-luas").textContent = "L = "+result;
        

    } catch (error) {
        console.error(error);
        alert("Error: " + error.massage);
    }
}

//keliling jajargenjang
function keliling_jajargenjang(event){
    //prevent the form from submit
    event.preventDefault(); 

    try {
        // ngambil angka dari form
        const num1 = parseFloat(document.getElementById("S1").value);
        const num2 = parseFloat(document.getElementById("S2").value);
        
        // perhitungan
        const result = 2 *(num1 + num2);

        //pengecekan data
        if (isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid Input");
        }

        //tampilkan hail perhitungan ke html
        const rumus = document.getElementById("result-isi-kel").textContent = "K = 2 x ("+num1+" + "+num2+")";
        const final = document.getElementById("result-kel").textContent = "K = "+result;
        

    } catch (error) {
        console.error(error);
        alert("Error: " + error.massage);
    }
}