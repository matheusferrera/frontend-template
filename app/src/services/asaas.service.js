import axios from "axios";

//Sandbox
const API_URL = "https://sandbox.asaas.com/api/v3/"
const API_TOKEN = "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNjcwNDg6OiRhYWNoXzBjNzY2MzlkLTJlNjUtNGFlMS05MzQ1LWUyZDI2YjhmYTg3YQ=="

const registerCustomer = (req) => {
    const options = {
        method: 'POST',
        url: API_URL + 'customers',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            access_token: API_TOKEN
        },
        data: { name: req.name, cpfCnpj: '123123' }
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error("Error -", error);
        });
};


const asaasService = {
    registerCustomer,
};

export default asaasService;
