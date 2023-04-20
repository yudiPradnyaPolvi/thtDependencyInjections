class student {
    constructor (name ="",nim="",kelas = ""){
        this.name = name;
        this.nim=nim
        this.kelas = kelas;
    };

    setName (name){
        this.name =name;
    }
    setNim(nim){
        this.nim=nim;
    }
    setKelas(kelas){
        this.kelas=kelas;
    }
    getName(){
        return this.name
    }
    getNim(){
        return this.nim;
    }
    getKelas(){
        return this.kelas;
    }
}
module.exports= student