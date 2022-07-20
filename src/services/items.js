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
    return data;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

export const deleteItems= async (id) => {
  try{
    const resp = await fetch(`${process.env.API_URL}/api/v1/items/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
    const data= await resp.json();
return data;
   } catch (e) {
    console.log(e.message);
    return null;
   }
}