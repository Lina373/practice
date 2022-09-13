function component (){

    const eltment = document.createElement('div');

    eltment.innerHTML = _.join(['Hello','webpack'], ' ');

    return eltment;
}

document.body.appendChild(comment());