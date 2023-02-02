import { Box, Button, Container, Link, Typography, useTheme } from '@mui/material';
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
                        placeholder="blurred"
                        style={{ borderBottomLeftRadius: '50px' }}
                    />
                </Box>
                <Box sx={{ my: 20 }}>
                    <Typography variant="h1" component="h1">
                        Hi there.
                    </Typography>
                    <Typography variant="h2" component="h2">
                        Welcome to my page.
                    </Typography>
                    <Typography variant="body1" sx={{ my: 5, maxWidth: '500px' }}>
                        I'm Simon Haasnoot; a front-end developer from the Netherlands. I love to create websites and applications. More than 6 years
                        of experience.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                        <Button
                            sx={{
                                background: '#9bddeb',
                                color: 'white',
                                padding: '12px 24px',
                                '&:hover': {
                                    background: '#9bddeb',
                                },

                            }}
                            href="https://www.linkedin.com/in/simon-haasnoot-614607134/"
                        >
                            Contact me
                        </Button>
                        {/* <Button
                            variant="outlined"
                            sx={{
                                background: '#ffa2ff',
                                padding: '12px 24px',
                            }}
                        >
                            <Link href="https://balanced-lifestyle.online" sx={{color: 'white'}}>Watch my latest creation here!</Link>
                        </Button> */}
                    </Box>
                </Box>
            </Container>
        </Container>
    );
};
