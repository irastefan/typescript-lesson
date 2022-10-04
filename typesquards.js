var worker1 = {
    name: 'Ira',
    company: 'NPCoding',
    languages: ['PHP', 'JavaScript']
};
function isProgrammer(worker) {
    return Array.isArray(worker.languages);
}
function isDesigner(worker) {
    return Array.isArray(worker.applications);
}
function printResume(worker) {
    var skills = '';
    if (isProgrammer(worker)) {
        skills = "Languages: ".concat(worker.languages.join(', '));
    }
    if (isDesigner(worker)) {
        skills = "Applications: ".concat(worker.applications.join(', '));
    }
    return "Full Name: ".concat(worker.name, ". Current Company: ").concat(worker.company, ". ").concat(skills);
}
console.log(printResume(worker1));
