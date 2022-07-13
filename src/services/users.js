export const signUp = async ({ email, password }) => {
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

export const signIn = async ({ email, password}) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error('Invalid email or password')

  return resp.json();
}

export const signOut = async () => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
    credentials: 'include',
    mode: 'cors',
  });

  if (!resp.ok) throw new Error('There was a problem signing out');

  return (resp.json);
}

export const getUser = async () => {
  try {
    const resp = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include'
    });
    return resp.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}