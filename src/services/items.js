export const getAllItems = async () => {
  try {
    const resp = await fetch(`${process.env.API_URL}/api/v1/items`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
  
    if (!resp.ok) return null;
  
    const data = await resp.json();
    console.log('data', data);
    return data;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}