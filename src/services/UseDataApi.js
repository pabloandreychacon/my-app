async function UseDataApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error };
  }
}

export default UseDataApi;
