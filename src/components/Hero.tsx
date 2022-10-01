import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import useIsMobile from './hooks/useIsMobile';

export const Hero = () => {
    const { isMobile } = useIsMobile();

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        width: isMobile ? '100vw' : '50vw',
                        height: 'auto',
                        zIndex: -1,
                        filter: 'grayscale(1)',
                        opacity: isMobile ? 0.3 : 1,
                        overflow: 'hidden',
                        borderBottomLeftRadius: '50px',
                    }}
                >
                    <StaticImage
                        src="../images/hero.jpg"
                        alt="Hero"
                        backgroundColor="transparent"
                        loading="eager"
                        placeholder="none"
                        style={{ borderBottomLeftRadius: '50px' }}
                    />
                </Box>
                <Box sx={{ my: 20 }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            // background: 'linear-gradient(135deg, #9bddeb, #ffa2ff)',
                            // WebkitBackgroundClip: 'text',
                            // WebkitTextFillColor: 'transparent',
                            // display: 'inline-block',
                        }}
                    >
                        Hi there.
                    </Typography>
                    <Typography variant="h2" component="h2">
                        Welcome to my page.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        maxWidth: '800px',
                        padding: 5,
                        borderRadius: '50px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
                        backgroundColor: 'white',
                    }}
                >
                    <Typography variant="subtitle1" component="h3" mb={3}>
                        <b>I'm Simon Haasnoot.</b> 26 years. Front-end developer. I love to create websites and applications.
                    </Typography>
                    <Button
                        sx={{
                            background: 'linear-gradient(135deg, #9bddeb, #ffa2ff);',
                            color: 'white',
                            padding: '12px 24px',
                        }}
                        href="https://www.linkedin.com/in/simon-haasnoot-614607134/"
                    >
                        Contact me
                    </Button>
                </Box>
            </Container>
        </Container>
    );
};
