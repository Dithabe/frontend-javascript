interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Sharon",
    lastName: "Cherono",
    age: 21,
    location: "Kenya",
};

const student2: Student = {
    firstName: "Mercy",
    lastName: "Kendi",
    age: 19,
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
