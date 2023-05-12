
async function getData(url) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include'
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

export default getData