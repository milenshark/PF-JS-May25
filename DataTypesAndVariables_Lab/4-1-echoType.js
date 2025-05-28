function echoType(parameter) {

    let parameterType = typeof(parameter);

    if (parameterType === 'string' || parameterType === 'number' ) {
        console.log(parameterType);
        console.log(parameter)
    } else {
        console.log(parameterType);
        console.log(`Parameter is not suitable for printing`)
    }

}

echoType('Hello, JavaScript!');