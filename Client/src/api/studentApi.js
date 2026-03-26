import { apiRequest } from './http';

export function fetchNotifications(token) {
  // Notifications are public; token is optional.
  return apiRequest('/api/notifications', token ? { token } : undefined);
}
