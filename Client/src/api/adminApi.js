import { apiRequest } from './http';

export function adminFetchNotifications(token) {
  return apiRequest('/api/notifications', { token });
}

export function adminCreateNotification(token, { title, message }) {
  return apiRequest('/api/notifications', {
    method: 'POST',
    token,
    body: { title, message }
  });
}

export function adminDeleteNotification(token, id) {
  return apiRequest(`/api/notifications/${id}`, {
    method: 'DELETE',
    token
  });
}

export function adminFetchTests(token) {
  return apiRequest('/api/tests', { token });
}

export function adminCreateTest(token, { title, subject, date, link, details, duration, questions }) {
  return apiRequest('/api/tests', {
    method: 'POST',
    token,
    body: { title, subject, date, link, details, duration, questions }
  });
}

export function adminDeleteTest(token, id) {
  return apiRequest(`/api/tests/${id}`, {
    method: 'DELETE',
    token
  });
}
