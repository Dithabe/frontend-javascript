interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Bridget",
    lastName: "Talance",
    age: 28,
    location: "South Africa",
};

const student2: Student = {
    firstName: "Charlotte",
    lastName: "Thotse",
    age: 22,
    location: "South Africa",
};

const studentsList: Student[] = [student1, student2];

const body = document.querySelector('body');
const table = document.createElement('table');

studentsList.forEach(student => {
            const row = document.createElement('tr');
            
            const FirstNameCell = document.createElement('td');
            FirstNameCell.textContent = student.firstName;
            
            const locationCell = document.createElement('td');
            locationCell.textContent = student.location;
            
            row.appendChild(FirstNameCell);
            row.appendChild(locationCell);
            table.appendChild(row);
    });

body.appendChild(table);
