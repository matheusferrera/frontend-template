/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";

import PageLayout from "../../../components/page/PageLayout";

const faqData = [
    {
        question: "Como o cliente me vê no mapa?",
        answer: "Sua CFC só será disponibilizada no mapa do cliente caso tenha crédito disponivel."
    },
    {
        question: "Como é cobrada a visualização?",
        answer: "Cada visualização tem um custo de 5 reais."
    },
    {
        question: "Como entro em contato com o suporte?",
        answer: "Você pode entrar em contato com o suporte através da nossa página de contato ou enviando um e-mail para suporte@empresa.com."
    },
    {
        question: "Posso cancelar minha assinatura a qualquer momento?",
        answer: "Sim, você pode cancelar sua assinatura a qualquer momento nas configurações da sua conta."
    }
];

const PageFaqCfc = () => {
    return (
        <PageLayout title="Dúvidas Frequentes">
            <>
                <Grid container spacing={1}>
                    {faqData.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h6">{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{item.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </>

        </PageLayout>
    );
};

export default PageFaqCfc;
