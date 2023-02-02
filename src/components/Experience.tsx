import { Badge, Box, Chip, Typography } from '@mui/material';
import React from 'react';
import { ExperienceItem } from './ExperienceItem';
import freelanceImg from '../images/freelance.jpg';
import internshipImg from '../images/internship.png';
import universityImg from '../images/university.png';

export const Experience = () => {
    return (
        <Box>
            <Box>
                <Typography variant="h2" component="h2" sx={{ mb: 5 }}>
                    The adventure of becoming a developer.
                </Typography>
            </Box>
            <ExperienceItem
                title="Macaw"
                image="https://contentxperience.nl/wp-content/uploads/2018/03/macaw-logo.jpg"
                text="I started with an internship at Macaw that led to a permanent position as a Front-end developer. I have been working on several big projects including well known customers like <b>Kwantum</b>, <b>ANWB</b> and <b>RWE</b>(german). My primary technology stack is React, Typescript, NodeJS, GraphQL, Gatsby, MUI, Storybook, HTML(5), CSS(3) and Git."
                chips={['Current employer', '2019 - now']}
                listItems={[
                    {title: 'Kwantum', link: 'https://www.kwantum.nl/'},
                    {title: 'ANWBCamping', link: 'https://www.anwbcamping.nl'},
                    {title: 'RWE', link: 'https://team.rwe.com'},
                    {title: 'Schmitz Cargobull', link: 'https://www.cargobull.com'},
                ]}
                listItemsTitle="Customer projects"
            />
            <ExperienceItem
                title="Freelancing"
                image={freelanceImg}
                text="Inbetween internships and jobs I worked on some hobby projects, and business websites for friends and family. My CSS, plain JavaScript and HTML skills have been improved a lot during this time."
                chips={['Ongoing', '2018 - now']}
                listItems={[
                    {title: 'Balanced Lifestyle', link: 'https://www.balanced-lifestyle.online'},
                    {title: 'Impera Consultancy', link: 'https://www.administratieondercontrole.nl/'},
                    {title: 'HaasnootCoatings', link: 'https://www.haasnootcoatings.nl/'},
                    {title: 'FitByTheBar (building)', link: 'https://fitbythebar.nl/'},
                    {title: 'BezuinigSlim (offline)', link: '#'},
                    {title: 'AlphaWebdesign (offline)', link: '#'},
                ]}
                listItemsTitle="Freelance projects"
            />
            <ExperienceItem
                title="Internship at DongIT"
                image={internshipImg}
                text="My first internship at DongIT; I had to work with CakePHP and the basic web development languages. I also learned how to work with Git and how to use a ticket system. Here is where I could apply my knowledge from school and Hobby projects."
                chips={['2017 - 2018']}
            />
            <ExperienceItem
                title="University of Applied Sciences"
                image={universityImg}
                text="I have studied Software Engineering at the University of Applied Sciences in The Hague and received my Bachelor after 4 years."
                chips={['2015 - 2019']}
            />
        </Box>
    );
}
