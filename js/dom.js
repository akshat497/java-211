
function saveBooks(
){
  let books=  [
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "category": "Fiction",
    "isbn": "9780743273565",
    "publisher": "Scribner",
    "year": 1925,
    "quantity": 5,
    "available": 5
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "category": "Fiction",
    "isbn": "9780061120084",
    "publisher": "Harper Perennial",
    "year": 1960,
    "quantity": 6,
    "available": 6
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "category": "Dystopian",
    "isbn": "9780451524935",
    "publisher": "Signet Classics",
    "year": 1949,
    "quantity": 8,
    "available": 8
  },
  {
    "id": 4,
    "title": "Animal Farm",
    "author": "George Orwell",
    "category": "Political Fiction",
    "isbn": "9780451526342",
    "publisher": "Signet Classics",
    "year": 1945,
    "quantity": 7,
    "available": 7
  },
  {
    "id": 5,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "category": "Adventure",
    "isbn": "9780062315007",
    "publisher": "HarperOne",
    "year": 1988,
    "quantity": 10,
    "available": 10
  },
  {
    "id": 6,
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J. K. Rowling",
    "category": "Fantasy",
    "isbn": "9780747532699",
    "publisher": "Bloomsbury",
    "year": 1997,
    "quantity": 12,
    "available": 12
  },
  {
    "id": 7,
    "title": "The Hobbit",
    "author": "J. R. R. Tolkien",
    "category": "Fantasy",
    "isbn": "9780547928227",
    "publisher": "Mariner Books",
    "year": 1937,
    "quantity": 6,
    "available": 6
  },
  {
    "id": 8,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "category": "Romance",
    "isbn": "9780141439518",
    "publisher": "Penguin Classics",
    "year": 1813,
    "quantity": 5,
    "available": 5
  },
  {
    "id": 9,
    "title": "The Catcher in the Rye",
    "author": "J. D. Salinger",
    "category": "Fiction",
    "isbn": "9780316769488",
    "publisher": "Little, Brown and Company",
    "year": 1951,
    "quantity": 4,
    "available": 4
  },
  {
    "id": 10,
    "title": "Atomic Habits",
    "author": "James Clear",
    "category": "Self Help",
    "isbn": "9780735211292",
    "publisher": "Avery",
    "year": 2018,
    "quantity": 10,
    "available": 10
  },
  {
    "id": 11,
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki",
    "category": "Finance",
    "isbn": "9781612681139",
    "publisher": "Plata Publishing",
    "year": 1997,
    "quantity": 8,
    "available": 8
  },
  {
    "id": 12,
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "category": "Finance",
    "isbn": "9780857197689",
    "publisher": "Harriman House",
    "year": 2020,
    "quantity": 7,
    "available": 7
  },
  {
    "id": 13,
    "title": "Think and Grow Rich",
    "author": "Napoleon Hill",
    "category": "Self Help",
    "isbn": "9781585424337",
    "publisher": "TarcherPerigee",
    "year": 1937,
    "quantity": 6,
    "available": 6
  },
  {
    "id": 14,
    "title": "Deep Work",
    "author": "Cal Newport",
    "category": "Productivity",
    "isbn": "9781455586691",
    "publisher": "Grand Central Publishing",
    "year": 2016,
    "quantity": 5,
    "available": 5
  },
  {
    "id": 15,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "category": "Programming",
    "isbn": "9780132350884",
    "publisher": "Prentice Hall",
    "year": 2008,
    "quantity": 6,
    "available": 6
  },
  {
    "id": 16,
    "title": "The Pragmatic Programmer",
    "author": "Andrew Hunt and David Thomas",
    "category": "Programming",
    "isbn": "9780135957059",
    "publisher": "Addison-Wesley",
    "year": 1999,
    "quantity": 5,
    "available": 5
  },
  {
    "id": 17,
    "title": "Introduction to Algorithms",
    "author": "Thomas H. Cormen",
    "category": "Computer Science",
    "isbn": "9780262046305",
    "publisher": "MIT Press",
    "year": 1990,
    "quantity": 4,
    "available": 4
  },
  {
    "id": 18,
    "title": "Python Crash Course",
    "author": "Eric Matthes",
    "category": "Programming",
    "isbn": "9781593279288",
    "publisher": "No Starch Press",
    "year": 2015,
    "quantity": 8,
    "available": 8
  },
  {
    "id": 19,
    "title": "Data Science from Scratch",
    "author": "Joel Grus",
    "category": "Data Science",
    "isbn": "9781492041139",
    "publisher": "O'Reilly Media",
    "year": 2019,
    "quantity": 5,
    "available": 5
  },
  {
    "id": 20,
    "title": "The Power of Habit",
    "author": "Charles Duhigg",
    "category": "Self Help",
    "isbn": "9780812981605",
    "publisher": "Random House",
    "year": 2012,
    "quantity": 7,
    "available": 7
  }
]

localStorage.setItem("books",JSON.stringify(books))
};
saveBooks();

let tbody = document.getElementById("tbody");
let Username = document.getElementById("name");
let Useremail = document.getElementById("email");
let Userphone = document.getElementById("phone");
let Userage = document.getElementById("age");
let Userid = document.getElementById("idSort");



let rowsToBeDeleted = [];
function openModal() {
  document.getElementById("updateModal").style.display = "flex";
}
function OpenDeleteModal(passedIndex) {
  console.log(passedIndex);
  let modalBody = document.getElementById("deleteModal");
  let paragraph = document.getElementById("divContent");
  let button = document.getElementById("ModalDeleteButton");

  let student = students.filter(function (value, index) {
    return index == passedIndex;
  });
  console.log(student);
  button.setAttribute("name", passedIndex);

  paragraph.innerHTML = `Are you sure you want to delete <b>${student[0].name}</b>`;

  modalBody.style.display = "flex";
  console.log(paragraph);
}
function closeModal() {
  document.getElementById("updateModal").style.display = "none";
}
function closeDeleteModal() {
  document.getElementById("deleteModal").style.display = "none";
}



function showAlert(message) {
  let alertBox = document.getElementsByClassName("alert");
  console.log(alertBox);
  alertBox[0].style.display = "block";
  alertBox[0].style.opacity = 1;
  alertBox[0].innerText = message;
  setTimeout(() => {
    alertBox[0].style.display = "none";
    alertBox[0].style.opacity = 0;
  }, 3000);
}
let students = [];

function addData() {
  let idName = Username.value;
  let phoneId = Userphone.value;
  console.log(idName);
  let codeName = idName.slice(0, 2);
  let codePhone = phoneId.slice(0, 4);
  console.log(`${codeName}-${codePhone}-${Date.now()}`);

  Userid.value = `${codeName}-${codePhone}-${Date.now()}`;
  if (
    Username.value.trim() == "" ||
    Useremail.value.trim() == "" ||
    Userphone.value.trim() == "" ||
    Userage.value.trim() == "" ||
    Userid.value.trim() == ""
  ) {
    showAlert("Empty values are not allowed");
    return;
  }
  let duplicatevalue = students.some(function (value, index) {
    return value.email == Useremail.value;
  });
  if (duplicatevalue) {
    showAlert("duplicate values are not allowed");
    return;
  }
  let phoneLength = Userphone.value.length;
  console.log(phoneLength);
  if (phoneLength > 10) {
    showAlert("Phone number length should be 10 digits!");
    return;
  }
  let correctEmail =
    Useremail.value.includes("@") && Useremail.value.includes(".");
  if (!correctEmail) {
    showAlert("Email format is not correct");
    return;
  }

  // let tableRow=document.createElement("tr")
  // var name=document.createElement('td')
  // var email=document.createElement('td')
  // var phone=document.createElement('td')
  // var age=document.createElement('td')
  // var dltBtn=document.createElement("button")
  // dltBtn.innerText="Delete";
  // dltBtn.style.color="white";
  // dltBtn.style.backgroundColor="red";
  // dltBtn.style.padding="5px";

  // name.innerText=Username.value;
  // phone.innerText=Userphone.value;
  // email.innerText=Useremail.value;
  // age.innerText=Userage.value;
  tbody.innerHTML = "";
  student = {
    id: Userid.value,
    name: Username.value,
    email: Useremail.value,
    phone: Userphone.value,
    age: Userage.value,
  };
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  display();

  // console.log(students)
  // tableRow.append(name,email,phone,age,dltBtn)
  // tbody.append(tableRow)
}

let direction = "asc";
function toggleRowSelection(checkbox, index) {
  if (checkbox.checked) {
    rowsToBeDeleted.push(index);
    if (rowsToBeDeleted.length > 0) {
        document.getElementById("multiselect").innerHTML= `  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                    />
                    <path
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                    />
                  </svg>${rowsToBeDeleted.length} `;
      document.getElementById("multiselect").style.display = "block";
    } else {
      document.getElementById("multiselect").style.display = "none";
    }
  } else {
    const rowIndex = rowsToBeDeleted.indexOf(index);
    if (rowIndex > -1) {
      rowsToBeDeleted.splice(rowIndex, 1);
    }
    if (rowsToBeDeleted.length > 0) {
         document.getElementById("multiselect").innerHTML= `  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                    />
                    <path
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                    />
                  </svg>${rowsToBeDeleted.length} `;
      document.getElementById("multiselect").style.display = "block";
    } else {
      document.getElementById("multiselect").style.display = "none";
    }
  }

  console.log(rowsToBeDeleted);
}

function deleteSelectedRows() {
  let newArray = students.filter(function (value, ourIndex) {
    return !rowsToBeDeleted.includes(ourIndex);
  });
  students = newArray;
  localStorage.setItem("students", JSON.stringify(students));
  display();
  rowsToBeDeleted = [];
  document.getElementById("multiselect").style.display = "none";
}
function display(flag) {
  tbody.innerHTML = "";
  let exists = JSON.parse(localStorage.getItem("students"));
  if (flag == "searching" || flag == "sorting") {
    students.forEach(function (value, index) {
      // tableRow.append(name,email,phone,age,dltBtn)
      tbody.innerHTML += `<tr>
      <td><input type="checkbox" onclick="toggleRowSelection(this,${index})" /></td>
                 <td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.email}</td>
                <td>${value.phone}</td>
                <td>${value.age}</td>
                <td class="buttons">
                <button class="dltBtn" onclick="OpenDeleteModal(${index})">Delete</button>  
                  <button class="asgBtn" onclick="OpenAssignModal(${index})">Assign</button>  
                     <button class="uptBtn" onclick="updateRow(${index})">Update</button></td>
             
                
                
                </tr>`;
    });
    return;
  }
  if (exists.length == 0) {
    localStorage.setItem("students", "");
  } else {
    students = JSON.parse(localStorage.getItem("students"));
  }

  students.forEach(function (value, index) {
    // tableRow.append(name,email,phone,age,dltBtn)
    tbody.innerHTML += `<tr>
   <td><input type="checkbox" onclick="toggleRowSelection(this,${index})" /></td>
     <td>${value.id}</td>
     
                <td>${value.name}</td>
                <td>${value.email}</td>
                <td>${value.phone}</td>
                <td>${value.age}</td>
                <td class="buttons"><button class="dltBtn" onclick="OpenDeleteModal(${index})">Delete</button>  
                <button class="asgBtn" onclick="OpenAssignModal(${index})">Assign</button>  
                     <button class="uptBtn" onclick="updateRow(${index})">Update</button></td>
             
                
                
                </tr>`;
  });
}
display();
function updateRow(passedIndex) {
  let row = students.filter(function (value, index) {
    return index == passedIndex;
  });
  let name = document.getElementById("ModalName");
  let email = document.getElementById("ModalEmail");
  let Phone = document.getElementById("ModalPhone");
  let age = document.getElementById("ModalAge");
  let button = document.getElementById("ModalSaveButton");
  button.setAttribute("name", passedIndex);
  name.value = row[0].name;
  email.value = row[0].email;
  Phone.value = row[0].phone;
  age.value = row[0].age;
  console.log(row);
  openModal();
}
function saveChanges() {
  let name = document.getElementById("ModalName");
  let email = document.getElementById("ModalEmail");
  let Phone = document.getElementById("ModalPhone");
  let age = document.getElementById("ModalAge");
  let id = document.getElementById("ModalSaveButton");
  console.log(students);
  students.map(function (value, index) {
    if (index == id.name) {
      value.name = name.value;
      value.email = email.value;
      value.phone = Phone.value;
      value.age = age.value;
    }
  });
  localStorage.setItem("students", JSON.stringify(students));
  display();
  closeModal();
}
function deleteRow() {
  let id = document.getElementById("ModalDeleteButton");
  console.log(id.name);

  let newArray = students.filter(function (value, ourIndex) {
    return id.name != ourIndex;
  });
  students = newArray;
  localStorage.setItem("students", JSON.stringify(students));
  closeDeleteModal();
  display();
}
//    students=["akshat","pankaj","akshat","zakir","anhay","deepanshu","satyam","ankit"];
//    //hof
//    searched=prompt("search value")
//   name= students.filter(function(value,index,arry){

//     return value==searched

//    })

//    console.log(students.splice(0,2))
//    console.log(students.slice(0,3))

function originalstate() {
  display();
}
function sortColumn(column) {
  if (direction == "asc") {
    let result = students.sort(function (value1, value2) {
      return value1[column] == "name" || "email"
        ? value1[column].localeCompare(value2[column])
        : value1[column] - value2[column];
    });

    direction = "desc";
    students = result;
    display("sorting");
  } else {
    let result = students.sort(function (value1, value2) {
      return value1[column] == "name" || "email"
        ? value2[column].localeCompare(value1[column])
        : value2[column] - value1[column];
    });

    direction = "asc";
    students = result;
    display("sorting");
  }
}
let deepCopy = students;
function SearchEmail() {
  let searchedtag = document.getElementById("searchBar");
  let searchValue = searchedtag.value;

  let result = deepCopy.filter(function (value, index) {
    return (
      value.email.includes(searchValue) ||
      value.name.includes(searchValue) ||
      value.phone.includes(searchValue) ||
      value.age.includes(searchValue)
    );
  });
  console.log(result);

  if (searchValue.trim() == "" && searchValue.length == 0) {
    console.log("matched");
    students = deepCopy;
    display("searching");
  } else {
    console.log("matchedd");
    students = result;
    display("searching");
  }
}
function OpenAssignModal(passedIndex) {
  console.log(passedIndex);

  let modalBody = document.getElementById("AssignModal");
  let button = document.getElementById("ModalAssignButton");
  modalBody.style.display = "flex";
  let select=document.getElementById("bookSelect");
  select.innerHTML="";
  let books=JSON.parse(localStorage.getItem("books"));
  books.forEach(function(value,index){
    select.innerHTML+=`<option value="${value.id}">${value.title}</option>`
  })
  button.addEventListener("click",function(){
    let selectedBookId=select.value;
    let selectedBook=books.filter(function(value,index){
      return value.id==selectedBookId;
    })
    console.log(selectedBook);
    if(selectedBook[0].available>0){
      selectedBook[0].available-=1;
      localStorage.setItem("books",JSON.stringify(books));
      alert(`Book "${selectedBook[0].title}" assigned to ${students[passedIndex].name}`);
      modalBody.style.display = "none";
    }else{
      alert(`Book "${selectedBook[0].title}" is not available`);
    }
  });

  

}