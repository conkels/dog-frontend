let getData = async () => {
  let response = await fetch("http://localhost:8080/getAll");
  if (response.status !== 200) {
    throw new Error("Request has failed!");
  }
  console.log("Request Successful");
  let jsonData = await response.json();
  return jsonData;
  // return jsonData.data;
};

const paragraphToSelect = document.querySelector("#dataPara");

let showData = async () => {
  let returnedData = await getData();
  paragraphToSelect.innerHTML = "";
  for (let d of returnedData) {
    let div = document.createElement("div");
    div.style = "margin:10px;";
    div.innerHTML = `ID: ${d.id}, Breed: ${d.breed}, Name: ${d.name}, Age: ${d.age}, Male: ${d.isMale}`;
    paragraphToSelect.append(div);
  }
};

let clearData = () => (paragraphToSelect.innerHTML = "No data shown");

function inputForm() {
  if (cbtn.value == "Create") {
    form1.style.visibility = "visible";
    cbtn.value = "Hide";
  } else {
    form1.style.visibility = "hidden";
    cbtn.value = "Create";
  }
}

let getOne = async (id) => {
  let d=findSearch.value
  let response = await fetch("http://localhost:8080/get/"+d);
  if (response.status !== 200) {
    throw new Error("Request has failed!");
  }
  console.log("Request Successful");
  let jsonData = await response.json();
  return jsonData;
  // return jsonData.data;
};

let showOne = async () => {
  let returnedData = await getOne();
  paragraphToSelect.innerHTML = "";

  let div = document.createElement("div");
  div.style = "margin:10px;";
  div.innerHTML = `ID: ${returnedData.id}, Breed: ${returnedData.breed}, Name: ${returnedData.name}, Age: ${returnedData.age}, Male: ${returnedData.isMale}`;
  paragraphToSelect.append(div);
};

function showFindSearch() {
  if (fbtn.value == "Find") {
    find1.style.visibility = "visible";
    fbtn.value = "Hide";
  } else {
    find1.style.visibility = "hidden";
    fbtn.value = "Find";
  }
}

let createOne = async() => {
fetch("http://localhost:8080/create", { 
    method: 'post', 
    headers: {
      "Content-type": "application/json" 
    },
    body: JSON.stringify( 
      {
        "breed": breedTab.value,
        "name": nameTab.value,
        "age": ageTab.value,
        "isMale": genderTab.value
      }
    )
  })
  .then(res => res.json())
  .then((data) => console.log(`Request succeeded with JSON response ${data}`))
  .catch((error) => console.log(`Request failed ${error}`));
}

function showDelete() {
  if (dbtn.value == "Delete") {
    delete1.style.visibility = "visible";
    dbtn.value = "Hide";
  } else {
    delete1.style.visibility = "hidden";
    dbtn.value = "Delete";
  }
}

let deleteOne = async() => {
let id = deleteInput.value
      fetch("http://localhost:8080/remove/"+id, { 
          method: 'delete' 
        })
        .then((data) => {
          console.log(`Request succeeded with JSON response ${data}`);
          // some function to execute if successful
        })
        .catch((error) => {
          console.log(`Request failed ${error}`)
        });
      }