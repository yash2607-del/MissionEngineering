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
  // kept just in case, but unused
  return apiRequest('/api/tests', { token });
}

export function adminFetchVideos() {
  return apiRequest('/api/videos', {});
}

export function adminUpdateVideo(token, id, { title, youtubeUrl }) {
  return apiRequest(`/api/videos/${id}`, {
    method: 'PUT',
    token,
    body: { title, youtubeUrl }
  });
}
