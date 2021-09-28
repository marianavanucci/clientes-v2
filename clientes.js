console.log("=== CLIENTES ===");

(() => {
  console.log("Starting...");
  
  // Config
  const endpoint = "https://run.mocky.io/v3/494e581d-5e96-4349-b1c8-963dd9af83b9";

  const config = {
    headers: new Headers({
      "Content-type": "application/json"
    })
  };

  // Actions
  const getCustomers = async () => {
    try {
      const resp =  await fetch(endpoint, { method: "GET", ...config });
      const data = await resp.json();
      getCustomersSuccess(data);
    } catch (error) {
      getCustomersError(error);
    }
  };

  const getCustomersSuccess = customers => {
    const lineTable = document.querySelector("#line-table").textContent;
    const template = Handlebars.compile(lineTable);
    const html = template({ cliente: customers });
    document.querySelector("tbody").innerHTML = html;
  };

  const getCustomersError = error => console.error(error);

  // Init
  getCustomers();

})();
