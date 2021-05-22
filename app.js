var cars = "Prius,2017,red,automatic,y,y,y,n,n,y,10000#Ionic,2020,blue,automatic,y,y,y,y,y,y,13000#Audi,2013,gray,manual,y,y,n,n,n,n,7500#Golf,1995,black,manual,n,n,n,n,n,n,2100#Kia,2007,white,automatic,n,y,n,n,n,n,5300#Mercedes,1998,silver,automatic,y,y,y,n,n,n,8600";

function splitdata(string) {

    return string.split("#");

};

// console.log(cars);

// console.log(splitdata(cars));

function secSplit(array) {
    return array.map(index => index.split("$"));
};

// console.log((splitdata(cars)));

function gitdata(cardata){
 
    let array = [];
    cardata.map(function sort (value) 
    {
        let objact ={
            type: "",
            model: "",
            color: "",
            transmission: "",
            features:
            {
            ac: "",
            electricWindows: "",
            electricMirrors: "",
            sunroof: "",
            autopark: "",
            cruiseControl: "",
            totalPrice: "",
                }

            }

    } 

    )};
