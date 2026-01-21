const API_BASE = import.meta.env.VITE_API_URL || '';

async function readJsonSafe(response) {
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return response.json();
  const text = await response.text();
  return text ? { message: text } : null;
}

export async function apiRequest(path, { method = 'GET', body, token, headers } = {}) {
  const res = await fetch(`${API_BASE}${path}`,
    {
      method,
      headers: {
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(headers || {})
      },
      body: body ? JSON.stringify(body) : undefined
    }
  );

  const data = await readJsonSafe(res);
  if (!res.ok) {
    const message = data?.message || `Request failed (${res.status})`;
    const error = new Error(message);
    error.status = res.status;
    error.data = data;
    throw error;
  }

  return data;
}
