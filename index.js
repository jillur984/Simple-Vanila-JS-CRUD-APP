let data = [
  { id: 1, name: "Jillur", email: "jillur.cse.bd@gmail.com" },
  { id: 2, name: "Muktadir", email: "muktadir.cse.bd@gmail.com" },
];

function readAll() {
  localStorage.setItem("object", JSON.stringify(data));

  var tableData = document.querySelector(".data_table");

  var object = localStorage.getItem("object");
  var objectData = JSON.parse(object);
  var elements = "";
  objectData.map(
    (record) =>
      (elements += `<tr>
              <td>${record.name}</td>
              <td>${record.email}</td>
              <td>
              <button onclick={edit(${record.id})} class="edit_form">Edit</button>
              <button onclick={delet(${record.id})} class="delete_form">Delete</button>
              </td>
        </tr>`)
  );
  tableData.innerHTML = elements;
}

function create() {
  document.querySelector(".create_form").style.display = "block";
  document.querySelector(".add_div").style.display = "none";
}

function add() {
  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;

  var newObj = { id: 3, name: name, email: email };

  data.push(newObj);

  document.querySelector(".create_form").style.display = "none";
  document.querySelector(".add_div").style.display = "block";

  readAll();
}

function edit(id) {
  document.querySelector(".update_form").style.display = "block";
  var obj = data.find((res) => res.id === id);
  document.querySelector(".uname").value = obj.name;
  document.querySelector(".uemail").value = obj.email;
  document.querySelector(".id").value = obj.id;
}

function update() {
  var id = parseInt(document.querySelector(".id").value);
  var name = document.querySelector(".uname").value;
  var email = document.querySelector(".uemail").value;
  var index = data.findIndex((res) => res.id === id);
  data[index] = { id, name, email };
  readAll();
  document.querySelector(".update_form").style.display = "none";
}

function delet(id) {
  var index = data.findIndex((record) => record.id === id);
  if (index !== -1) {
    data.splice(index, 1);
  }
  readAll();
}
