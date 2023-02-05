function isMoonUp(time) {
    if (time > 19 || time < 5) {
        return true;
    }
    else {
        return false;
    }
};

let clockTime = 11;
let moon = isMoonUp(clockTime);
console.log(moon);