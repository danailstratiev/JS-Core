function drive(input) {
    let speed = +input[0];
    let area = input[1];
    let output = '';
    if (area === 'motorway') {
        if (speed <= 130) {
        }
        else if (speed > 130 && speed <= 150) {
            output = 'speeding';
        }
        else if (speed > 130 && speed <= 170) {
            output = 'excessive speeding'
        }
        else{
            output = 'reckless driving'
        }
    }
    else if (area === 'interstate') {
        if (speed <= 90) {
        }
        else if (speed > 90 && speed <= 110) {
            output = 'speeding';
        }
        else if (speed > 110 && speed <= 130) {
            output = 'excessive speeding'
        }
        else{
            output = 'reckless driving'
        }
    }
    else if (area === 'city') {
        if (speed <= 50) {
            output = '';
        }
        else if (speed > 50 && speed <= 70) {
            output = 'speeding';
        }
        else if (speed > 70 && speed <= 90) {
            output = 'excessive speeding'
        }
        else{
            output = 'reckless driving'
        }
    }
    else if (area === 'residential') {
        if (speed <= 20) {
        }
        else if (speed > 20 && speed <= 40) {
            output = 'speeding';
        }
        else if (speed > 40 && speed <= 60) {
            output = 'excessive speeding'
        }
        else{
            output = 'reckless driving'
        }
    }

    if (output !== '') {
        
        console.log(output);
    }
}

drive([40, 'city']);