const promptSync = require ("prompt-sync");
const prompt =promptSync();
console.log("Mau pilih aplikasi apa ?");
console.log("1. Aplikasi Geometri");
console.log("2. Aplikasi Mahasiswa");
const app =prompt("Pilih Aplikasi : ");
if (app=="1"){
//shape
    const shape =require ("./src/shape");
    //const prompt =promptSync();

    console.log("Mau hitung operasi apa ?");
    console.log("1. Luas Persegi");
    console.log("2. Keliling Persegi");
    console.log("3. Luas Segitiga");
    console.log("4. Keliling Segitiga");
    console.log("5. Luas Lingkaran");
    console.log("6. Keliling Lingkaran");
    const s =prompt("Pilih Operasi : ");


    const a = parseInt (prompt ("masukan angka 1 : "));
    const t = parseInt (prompt ("masukan angka 2 :  "));
    const sm = parseInt (prompt ("masukan sisi miring : "));
    const r = parseInt (prompt ("masukan jari-jari : "))
    let hasil = 0

    if (s=="1"){
        
        hasil = shape.luasPersegi (a);
    }
    
    else if (s=="2"){
        hasil = shape.kelilingPersegi(a);
    }
    else if (s=="3"){
        hasil =shape.luasSegitiga(a,t);
    }else if (s=="4"){
        hasil =shape.kelilingSegitiga(a,t,sm);
    }else if (s=="5"){
        hasil = shape.luasLingkaran(r);
    }else if (s=="6"){
        hasil =shape.kelilingLingkaran(r);
    }
    else {
        console.log("coba lagi");
    }
    console.log("hasilnya adalah : ",hasil);
}else if  (app=="2"){
    const student= require ("./src/student");
    const prompt = promptSync();
    const st = new student();
    
    const name = prompt ("Masukan Nama : ")
    st.setName(name)
    const nim = prompt ("Masukan Nim : ")
    st.setNim(nim)
    const kelas = prompt ("Masukan Kelas : ")
    st.setKelas(kelas)
    console.log("--------------------------");
    console.log ("Data Diri","\n")
    console.log("nama : ",name,"\n","nim : ",nim,"\n","kelas: ",kelas,"\n");
    console.log("--------------------------");
}


