//document.getElementById("button").addEventListener("click", loadData);
document.getElementById("button1").addEventListener("click", loadCustomerData);
document.getElementById("button2").addEventListener("click", loadCustomersData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "data.txt", true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log("READYSTATE on progress", xhr.readyState);
  };

  xhr.onload = function () {
    console.log("READYSTATE on load", xhr.readyState);
    if (this.status === 200) {
      console.log(this.responseText);
      /* document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`; */
    }
  };

  xhr.onreadystatechange = function () {
    console.log("READYSTATE on change", xhr.readyState);
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  };

  xhr.onerror = function () {
    console.log("Request error...");
  };

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}

function loadCustomerData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(xhr.responseText);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Age: ${customer.age}</li>
        <li>Company: ${customer.company}</li>
      </ul>
      `;
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

function loadCustomersData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(xhr.responseText);

      let output = "";
      customers.forEach((customer) => {
        output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Age: ${customer.age}</li>
        <li>Company: ${customer.company}</li>
      </ul>
      `;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
