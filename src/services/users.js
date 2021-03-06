export const signUp = async (user) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(user),
  });

  if (!resp.ok) throw new Error('Invalid email or password');

  const json = await resp.json();

  return json;
};

export const signIn = async ({ email, password }) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error('Invalid email or password');

  const json = await resp.json();

  return json;
};

export const signOut = async () => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });

  if (!resp.ok) throw new Error('There was a problem signing out');

  const json = await resp.json();

  return json;
};

export const getUser = async () => {
  try {
    const resp = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });

    if (!resp.ok) return null;

    const json = await resp.json();

    return json;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
