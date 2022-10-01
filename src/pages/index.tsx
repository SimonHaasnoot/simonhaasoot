// import "@fontsource/poppins";
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import '../css/app.css';

export const index = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
        defaultMatches: true,
    });

    return (
        <>
            <Layout>
                <Hero />
                <Container maxWidth="lg" sx={{ py: isMobile ? 10 : 20 }}>
                    <Experience />
                </Container>
            </Layout>
        </>
    );
};

export default index;
