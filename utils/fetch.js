import fetch from "isomorphic-fetch";
export const f = (url, options = {}) => fetch(url, options).then(r => r.json());