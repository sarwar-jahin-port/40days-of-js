// 1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// // output: Not provided because the value of user.age in undefined. we know if left side is null or undefined ?? returns the right side.

// // 2. What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

// // output 1. because freeze make the object totallyl immutable

// // 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name, company} = person;
const {location: {city}} = company;
console.log(name, company, city);

// // 4. Build a Student Management System

const studentDetails = {
    student1: {
        name: "sarwar",
        age: 24,
        grades: [
            {
                subject: "Math",
                score: 85,
                gpa: 'A'
            },
            {
                subject: "English",
                score: 87,
                gpa: 'A+'
            }
        ]
    },
    student2: {
        name: "sarwar",
        age: 24,
        grades: [
            {
                subject: "Math",
                score: 80,
                gpa: 'A'
            },
            {
                subject: "English",
                score: 86,
                gpa: 'A+'
            }
        ]
    },
    averageGrade : function () {
        let total = 0;
        let count = 0;

        for(let [key, value] of Object.entries(this)){
            if(typeof value === "function") continue;

            value.grades.forEach(g => {
                total+=g.score
                count++;
            })
        }
        console.log(total/count);
    } 
}
console.log(studentDetails.averageGrade());

// 5. Book Store Inventory System

const books = {
    book1: {
        name: "Book 1",
        pages: 10,
        stock: 5,
    },
    book2: {
        name: "Book 2",
        pages: 20,
        stock: 10,
    },
    book4: {
        name: "Book 3",
        pages: 100,
        stock: 0,
    },
    availability: function () {
        let stock = 0;
        for(let key in this){
            if(typeof this[key] !== "function"){
                stock += this[key].stock;
            }
        }
        return stock;
    },
    restock: function() {
        for(let key in this){
            if(typeof this[key] !== "function"){
                if(this[key].stock === 0) this[key].stock = 5;
            }
        }
    }
}

const currentStock = books.availability();
console.log(currentStock);
books.restock();
console.log(books);

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
// ans: Object.keys() will return array of the object keys of an object. Object.entries() return an array of object's key,value pairs.

// 7. How do you check if an object has a certain property?
// ans: "property" in object, object_name.hasOwnProperty("property name")

// 8. What will be the output and why?
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name); // Doe
// becasue newPerson will reference same person. 

// 9. What’s the best way to deeply copy a nested object? Expalin with examples
// ans: structured clone is the best option.
const book = {
    title: "Book 1",
    author: {name: "Sarwar", age: 24},
    tags: ["JS", "REACTJS"]
}                                     

const copy = structuredClone(book);

copy.author.name = "Jahin";
copy.tags.push("Node");

console.log(book, copy);

// 10. Loop and print values using Object destructuiring
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(let user of users){
    const {name, address, age} = user;
    console.log(name, address, age);
}