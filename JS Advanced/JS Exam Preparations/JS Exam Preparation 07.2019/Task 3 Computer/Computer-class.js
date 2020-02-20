class Computer{
    constructor(ramMemory, cpuGHz, hddMemory){
        this.ramMemory = ramMemory,
        this.cpuGHz = cpuGHz,
        this.hddMemory = hddMemory,
        this.taskManager = [],
        this.installedPrograms = []
    }

    installAProgram(name, requiredSpace){
        if (this.hddMemory - requiredSpace < 0) {
            throw new Error('There is not enough space on the hard drive');
        }

        let program = {name: name, requiredSpace: requiredSpace};
        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;
        return program;
    }

    uninstallAProgram(name){
        let programToDeleteIndex = this.installedPrograms.findIndex((p) => p.name === name);
       
        if (programToDeleteIndex === -1) {
            throw new Error('Control panel is not responding');
        }

        let programToDelete = this.installedPrograms[programToDeleteIndex];

        this.hddMemory += programToDelete.requiredSpace;

        this.installedPrograms.splice(programToDeleteIndex, 1);

        return this.installedPrograms;
    }

    openAProgram(name){
        let programToOpenIndex = this.installedPrograms.findIndex((p) => p.name === name);
        
        if (programToOpenIndex === -1) {
            throw new Error(`The ${name} is not recognized`);            
        }

        let programToOpen = this.installedPrograms[programToOpenIndex];

        let openedProgramIndex = this.taskManager.findIndex((p) => p.name === programToOpen.name);

        if (openedProgramIndex > -1) {
            throw new Error(`The ${name} is already open`)
        }

        let ramNeeded = (programToOpen.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((programToOpen.requiredSpace / this.cpuGHz) / 500)*1.5;

        if ((this.ramTotalUsage + ramNeeded) >= 100) {
            throw new Error(`${name} caused out of memory exception`)
        }

        if ((this.cpuTotalUsage + cpuUsage) >= 100) {
            throw new Error(`${name} caused out of cpu exception`)
        }

        let openedProgram = {
            name,
            ramUsage: ramNeeded,
            cpuUsage
        }

        this.taskManager.push(openedProgram);

        return openedProgram;
    }

    get ramTotalUsage(){
        //gets 0 + ramneeded for every member of the array
        return this.taskManager.reduce((acc, crr) => acc + crr.ramNeeded, 0);
    } 

    get cpuTotalUsage(){
        return this.taskManager.reduce((arr, crr) => arr + crr.cpuUsage, 0);
    }

    taskManagerView(){
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        return this.taskManager
        .map((p) => `Name - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%`)
        .join('\n');    
    }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
computer.openAProgram('Solitare');

console.log(computer.installedPrograms);
console.log(('-').repeat(50)) // Separator
console.log(computer.taskManager);



// function numbers(){
//     let numbersArr = [1,2,3,4,5];

//     let sum = numbersArr.reduce((a, b) => a + b, 5);

//     console.log(sum);    
// }
