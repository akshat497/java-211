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

//   function createBox() {
//     let box = document.createElement("div");
//     console.log(box);
//     box.className = "box";
//     document.body.append(box);
//   }
//   let button = document.createElement("button");
//   button.innerText="create new box"
//   button.addEventListener("click", function(){
//     createBox();
//   });
//   document.body.append(button);
var tbody = document.getElementById("tbody");
var Username = document.getElementById("name");
var Useremail = document.getElementById("email");
var Userphone = document.getElementById("phone");
var Userage = document.getElementById("age");
var Userid = document.getElementById("idSort");

var students = [];

function showAlert(message) {
  var alertBox = document.getElementsByClassName("alert");
  console.log(alertBox);
  alertBox[0].style.display = "block";
  alertBox[0].style.opacity = 1;
  alertBox[0].innerText = message;
  setTimeout(() => {
    alertBox[0].style.display = "none";
    alertBox[0].style.opacity = 0;
  }, 3000);
}
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

  // var tableRow=document.createElement("tr")
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
function display(flag) {
  console.log("inside display");
  tbody.innerHTML = "";
  let exists = JSON.parse(localStorage.getItem("students"));
  if (flag == "searching" || flag == "sorting") {
    students.forEach(function (value, index) {
      // tableRow.append(name,email,phone,age,dltBtn)
      tbody.innerHTML += `<tr>
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
let deepCopy = students;
let direction = "asc";
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
