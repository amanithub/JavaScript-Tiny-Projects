const forminput = document.querySelector('form')

forminput.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');

    if(height == ''|| height < 0 || isNaN(height)){
        result.innerHTML = 'Please provide a valid height'
    }
    else if(weight == ''|| weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please provide a valid weight'
    }
    else{
        const bmi = (weight/((height/100)*(height/100)));

        let bmiCategory;
    if (bmi < 18.6) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiCategory = 'Normal';
    } else {
      bmiCategory = 'Overweight';
    } 

        result.innerHTML = `Your BMI is: ${bmi} and you're ${bmiCategory}`
    }
   
})

