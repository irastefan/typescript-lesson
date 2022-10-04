interface IWorker {
    name: string,
    company: string
}

interface IProgrammer extends IWorker {
    languages: string[],
}

interface IDesigner extends IWorker {
    applications: string[],
}

const worker1: IProgrammer = {
    name: 'Ira',
    company: 'NPCoding',
    languages: ['PHP', 'JavaScript']
};

function isProgrammer(worker: IWorker): worker is IProgrammer {
    return Array.isArray((worker as IProgrammer).languages);
}
function isDesigner(worker: IWorker): worker is IDesigner {
    return Array.isArray((worker as IDesigner).applications);
}

function printResume (worker: IWorker): string {
    let skills = '';
    if (isProgrammer(worker)) {
        skills = `Languages: ${worker.languages.join(', ')}`;
    }    
    if (isDesigner(worker)) {
        skills = `Applications: ${worker.applications.join(', ')}`;
    }

    return `Full Name: ${worker.name}. Current Company: ${worker.company}. ${skills}`;
}

console.log(printResume(worker1));