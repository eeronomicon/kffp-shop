const API_BASE = '/api/v1';

export const API_URL = process.env.NODE_ENV === 'production' ?
    `https://admin.freeformportland.org${API_BASE}` :
    `http://localhost:3000${API_BASE}`;
