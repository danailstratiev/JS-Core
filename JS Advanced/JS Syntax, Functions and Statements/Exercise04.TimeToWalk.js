function timeToWalk(steps, footPrint, speed) {
    
    let walkedInM = steps * footPrint;
    let walkedInKm = walkedInM / 1000;
    let minutesRest = parseInt(walkedInM / 500);
    let totalSeconds = walkedInKm / speed * 3600 + minutesRest * 60;
    let hoursWalked = parseInt(totalSeconds / 3600);
    totalSeconds -= hoursWalked * 3600;
    let minutesWalked = parseInt(totalSeconds / 60);
    let secondsWalked = totalSeconds % 60;

    let finalOutput = '';

    if (hoursWalked < 10 ) {
        finalOutput += `0${hoursWalked}`;
    }else{
        finalOutput += `${hoursWalked}`;
    }

    if (minutesWalked < 10 ) {
        finalOutput += `:0${minutesWalked}:`;
    }
    else{
        finalOutput += `:${minutesWalked}:`;
    }

    if (secondsWalked < 10) {
        finalOutput += `0${secondsWalked.toFixed(0)}`;
    }
    else{
        finalOutput += `${secondsWalked.toFixed(0)}`;
    }
    console.log(finalOutput);
}

timeToWalk(4000, 0.60, 5);