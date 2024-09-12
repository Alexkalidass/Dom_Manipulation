class getSet{
    constructor(Temparature)
    {
        this._Temp= Temparature
    }
    get Temparature()
    {
        return (this._Temp);
        
    }

    set Temparature(Temparature)
    {
        if(Temparature>22)
        {
           this._Temp= "Serious condition"
        }
    }
}

const sample= new getSet(22)

console.log(sample.Temparature);
sample.Temparature = 26;
console.log(sample.Temparature)
