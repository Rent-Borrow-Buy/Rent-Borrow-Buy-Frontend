export const signUp = async ({ email, password }) => {
  console.log('email', email);
  console.log('password', password);
  const resp = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error('Invalid email or password');

  return resp.json();
}