const url = 'https://mhsmeypslkmpwqonsreg.supabase.co/rest/v1/';
const apiKey = 'sb_publishable_mMSVJXZcwh4Vr66zFo7QDg_lvJC2G4f';

export default async function request(path = '/', method = 'GET', data = null, opts = {}) {
    const options = {
        headers: {
            apiKey,
        },
        ...opts
    };

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${url}${path}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}