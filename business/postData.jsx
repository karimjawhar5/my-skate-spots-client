
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Credentials": "include"
      },
      body: JSON.stringify(data),
      credentials: "include"
    });
    return response.json();
  }

export default postData