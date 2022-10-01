import { Avatar, Box, Chip, Icon, List, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import useIsMobile from './hooks/useIsMobile';

type ExperienceItemProps = {
    title: string;
    image: string;
    text: string;
    chips: string[];
    listItems?: {
        title: string;
        link: string;
    }[];
    listItemsTitle?: string;
    reverse?: boolean;
};

export const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
    const { title, image, text, chips, listItems, listItemsTitle, reverse } = props;
    const { isMobile } = useIsMobile();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : reverse ? 'row-reverse' : 'row',

                justifyContent: 'space-between',
                py: isMobile ? 5 : 10,
            }}
        >
            <Box sx={{ width: isMobile ? '100%' : '20%', height: 'auto', position: 'relative' }}>
                <img
                    src={image}
                    alt={title}
                    style={
                        !isMobile
                            ? { width: '100%', height: 'auto' }
                            : {
                                  position: 'absolute',
                                  right: 3,
                                  top: '-50px',
                                  width: '100px',
                                  borderRadius: '100%',
                                  zIndex: -1
                              }
                    }
                />
            </Box>
            <Box sx={{ width: isMobile ? '100%' : '60%', height: 'auto' }}>
                <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
                    {title}
                </Typography>
                <Box sx={{ mb: 5, display: 'flex', gap: 2 }}>
                    {chips.map((chip, index) => {
                        return <Chip label={chip} key={index} variant={chips.length === index + 1 ? 'outlined' : 'filled'} />;
                    })}
                </Box>
                <Typography variant="body1" component="p" dangerouslySetInnerHTML={{ __html: text }} mb={5}></Typography>

                {listItems && listItems.length > 0 && (
                    <Box
                        sx={{
                            padding: 2,
                            background: '#8080801a',
                            borderRadius: 1,
                        }}
                    >
                        {listItemsTitle && (
                            <Typography variant="subtitle2" component="h4">
                                {listItemsTitle}
                            </Typography>
                        )}
                        <List>
                            {listItems.map((item, index) => {
                                return (
                                    <ListItem key={index}>
                                        <Typography
                                            component="a"
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                        >
                                            <Icon component={LaunchIcon} sx={{ mr: 2 }}></Icon>
                                            {item.title}
                                        </Typography>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
