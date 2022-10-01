import React, { useState } from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet';
import useIsMobile from './hooks/useIsMobile';

export const Layout = (props: { children: any }) => {
    const theme = useTheme();
    const { isMobile } = useIsMobile();

    return (
        <>
            <Helmet>
                <meta name="description" content="Portfolio website containing skillset and website-examples of different businesses" />
                <meta name="Author" content="Simon Haasnoot" />
                <meta name="keywords" content="Simon Haasnoot, Haasnoot, Portfolio, LinkedIn" />
                <title>Simon Haasnoot</title>
            </Helmet>

            {props.children}

            <Container maxWidth={false} disableGutters sx={{ background: theme.palette.grey[100] }}>
                <Container
                    maxWidth="lg"
                    sx={{ py: isMobile ? 1 : 2, display: 'flex', flexDirection: !isMobile ? 'row' : 'column', justifyContent: 'space-between' }}
                >
                    <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row'}}>
                        <Typography>This website is build in Material UI with Gatsby.</Typography>
                        <Typography>© Simon Haasnoot ({new Date().getFullYear()})</Typography>
                    </Box>
                </Container>
            </Container>
        </>
    );
};
