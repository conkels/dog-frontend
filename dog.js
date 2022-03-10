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
    abtn.style.visibility = "visible";
  } else {
    form1.style.visibility = "hidden";
    cbtn.value = "Create";
    abtn.style.visibility = "hidden";
  }
}

let getOne = async (id) => {
  let d = findSearch.value;
  let response = await fetch("http://localhost:8080/get/" + d);
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
  findSearch.value=""
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

let createOne = async () => {
  fetch("http://localhost:8080/create", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      breed: breedTab.value,
      name: nameTab.value,
      age: ageTab.value,
      isMale: genderTab.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(`Request succeeded with JSON response ${data}`))
    .catch((error) => console.log(`Request failed ${error}`));

  breedTab.value = "";
  nameTab.value = "";
  ageTab.value = "";
  genderTab.value = "";
};

function showDelete() {
  if (dbtn.value == "Delete") {
    delete1.style.visibility = "visible";
    dbtn.value = "Hide";
  } else {
    delete1.style.visibility = "hidden";
    dbtn.value = "Delete";
  }
}

let deleteOne = async () => {
  let id = deleteInput.value;
  fetch("http://localhost:8080/remove/" + id, {
    method: "delete",
  })
    .then((data) => {
      console.log(`Request succeeded with JSON response ${data}`);
      // some function to execute if successful
    })
    .catch((error) => {
      console.log(`Request failed ${error}`);
    });
    deleteInput.value=""
};

function showReplace() {
  if (rbtn.value == "Replace") {
    replace1.style.visibility = "visible";
    rbtn.value = "Hide";
  } else {
    replace1.style.visibility = "hidden";
    form1.style.visibility = "hidden";
    ebtn.style.visibility = "hidden";
    rbtn.value = "Replace";
  }
}

let replaceOne = async () => {
  let id = replaceSearch.value;
  fetch("http://localhost:8080/replace/" + id, {
    method: "put",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      breed: breedTab.value,
      name: nameTab.value,
      age: ageTab.value,
      isMale: genderTab.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(`Request succeeded with JSON response ${data}`))
    .catch((error) => console.log(`Request failed ${error}`));

  breedTab.value = "";
  nameTab.value = "";
  ageTab.value = "";
  genderTab.value = "";
};

function replaceForm() {
  if (okbtn.value == "OK") {
    form1.style.visibility = "visible";
    ebtn.style.visibility = "visible";
    abtn.style.visibility = "hidden";
  } else {
    form1.style.visibility = "hidden";
    abtn.style.visibility = "visible";
  }
}
