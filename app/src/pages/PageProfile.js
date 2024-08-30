/* eslint-disable no-unused-vars */
import React from "react";

import EditUserForm from "../components/login/EditUserForm";
import PageLayout from "../components/page/PageLayout";

const initialUserData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    dob: '1990-01-01',  // Formato YYYY-MM-DD
    phone: '(11) 99999-9999',
    address: '123 Rua Exemplo, Bairro, Cidade, Estado'
};


const PageProfile = () => {

    const handleEditSubmit = (updatedData) => {
        console.log('Dados atualizados:', updatedData);
        // Realize a atualização no backend ou outra ação necessária
    };


    return (
        <PageLayout title="">
            <EditUserForm onSubmit={handleEditSubmit} initialData={initialUserData}></EditUserForm>
        </PageLayout>
    );
};


export default PageProfile;