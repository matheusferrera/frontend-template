import fetch from 'node-fetch';
//Sandbox
// const API_URL = "https://sandbox.asaas.com/api/v3/"
const API_URL = "http://localhost:3000/asaas/"
// const API_TOKEN = "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNjcwNDg6OiRhYWNoXzBjNzY2MzlkLTJlNjUtNGFlMS05MzQ1LWUyZDI2YjhmYTg3YQ=="

const createCharge = async (req) => {
    const url = API_URL + "create-charge";
    const options = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNjcwNDg6OiRhYWNoXzBjNzY2MzlkLTJlNjUtNGFlMS05MzQ1LWUyZDI2YjhmYTg3YQ=='
        },
        body: JSON.stringify(
            {
                "billingType": req.billingType,
                "customer": req.customer,
                "value": req.value,
                "dueDate": new Date().toISOString().split('T')[0]
            }
        )
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (err) {
        console.error('error:', err);
        throw err;
    }
};

const getBalance = async (customerId) => {
    const url = `${API_URL}get-customer-balance/${customerId}`;
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNjcwNDg6OiRhYWNoXzBjNzY2MzlkLTJlNjUtNGFlMS05MzQ1LWUyZDI2YjhmYTg3YQ=='
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (err) {
        console.error('Erro ao obter o saldo do cliente:', err);
        throw err;
    }
};

const asaasService = {
    createCharge,
    getBalance,
};

export default asaasService;
