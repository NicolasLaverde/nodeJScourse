

function calculateGradeDistribution (students) {
    const distribution = {
        A: 0, B: 0, C: 0, D: 0, F: 0
    }

    function getStudentGrade({grade}) {
        if(90 <= grade && grade <= 100 ) {
            distribution.A += 1
        } 
        else if(80 <= grade && grade <= 89 ) {
            distribution.B += 1
        } 
        else if(70 <= grade && grade <= 79 ) {
            distribution.C += 1
        } 
        else if(60 <= grade && grade <= 69 ) {
            distribution.D += 1
        } 
        else if(grade <= 59 ) {
            distribution.F += 1
        } 
    }
    students.forEach(getStudentGrade);
    
    return distribution
}

const students = [
    { name: "John", grade: 85 },
    { name: "Emma", grade: 95 },
    { name: "Michael", grade: 72 },
    { name: "Sophia", grade: 68 },
    { name: "Ryan", grade: 90 }
];

const result = calculateGradeDistribution(students)
console.log(result)
