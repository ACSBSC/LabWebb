function storeUrl() {
    console.log("Inside storeUrl")
    const urlInput = document.getElementById("urlinit").value;
    let body = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urlInicial: urlInput }),
    };
  
    fetch("/", body).then((response) => {
      if (response.ok) {
        console.log(response);
      } else {
        throw "Ajax Error";
      }
    });
  }