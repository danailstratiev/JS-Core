function solve(worker){ 

    if (worker.dizziness === true) {
        worker.levelOfHydrated += worker.experience * (worker.weight * 0.1) ; 
        worker.dizziness = false;
    }

    return worker;    
}

console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));
