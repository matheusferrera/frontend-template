/* eslint-disable no-unused-vars */
import React from "react";

import EditUserForm from "../components/login/EditUserForm";
import PageLayout from "../components/page/PageLayout";
import { useAuth } from "../contexts/AuthContext";


const PageProfile = () => {
    const { user } = useAuth();


    console.log("USER PAGE PROFILE - ", formatDateToYYYYMMDD(user.dadosuser.datanascimento))

    const initialUserData = {
        name: user.dadosuser.nome,
        email: user.email,
        dob: formatDateToYYYYMMDD(user.dadosuser.datanascimento),  // Formato YYYY-MM-DD
        phone: user.dadosuser.telefone,
    };


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

function formatDateToYYYYMMDD(dateString) {
    // Cria um objeto Date a partir da string original
    const dateObj = new Date(dateString);

    // Extrai o ano, mês e dia
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const day = String(dateObj.getDate()).padStart(2, '0');

    // Retorna a data no formato yyyy-MM-dd
    return `${year}-${month}-${day}`;
}


export default PageProfile;