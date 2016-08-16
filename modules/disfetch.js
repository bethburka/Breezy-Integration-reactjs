export default function disfetch( endpoint, data ) {
  return fetch(
    'http://beta.json-generator.com/api/json/get/VyHFZXJOZ',
    // 'http://breezy-proxy.mobgendev005.com' + endpoint,
    { method: 'get', mode: 'cors' }
  ).then((response) => response.json());
}
