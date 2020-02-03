function calculate(name, age, weight, height) {
    let person = {};
    let personalInfo = {
        age,
        weight,
        height,
    };
    
    person = {
        name,
        personalInfo
    }

    let BMI = Math.round(weight / Math.pow(height*0.01, 2));
    let status = '';
    let recommendation = '';
    person.BMI = BMI;

    if (BMI < 18.5) {
        person.status = 'underweight';
    }else if (BMI < 25) {
        person.status = 'normal';
    }else if (BMI < 30) {
        person.status = 'overweight';
    }else {
        person.status = 'obese';
        person.recommendation = 'admission required';

    }

    return person; 
}

console.log(
 calculate('Peter', 29, 75, 182));