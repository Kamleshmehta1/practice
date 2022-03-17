class Dog {
    constructor(name, birthday) {
        this.name = name
        this.birthday = birthday
    }

    // protected variable

    _attendance = 0

    // private variable

    #privateVariabl = false

    calcAge() {
        return Date.now() - this.birthday
    }

    getAge() {
        return this.calcAge()
    }

    bark() {
        return console.log("Woof!");
    }

    updateAttendance() {
        this._attendance++;
    }

    getAttendance() {
        this._attendance
    }
}

class myDog extends Dog {
    constructor(name, birthday) {
        super(name, birthday);
        // super(birthday);
    }

    herd() {
        return console.log("class two is called successfully")
    }
}

class TrackingDog extends Dog {
    constructor(name, birthday) {
        super(name, birthday)
    }

    track = () => {
        return console.log("my Poly Function");
    }

    bark = () => {
        return console.log("ploy bark");
    }

}

const rufus = new Dog("Rufus", "2/1/2017")
const main = new myDog("Rufus", "2/1/2017")
const myPolymain = new TrackingDog("Rufus", "2/1/2017")
rufus.bark()
rufus.updateAttendance()
console.log(rufus._attendance);
main.herd()

myPolymain.track()
myPolymain.bark()

// METHOD OVERRIDING:- already had a fucntion name myFnc in parent class and we want to create new function with same with same aor may be differennt fucntionallity at that we use polymorphosisim an also called as overriding.