import React from 'react';
import { Container, Typography, Grid, Avatar, Box, Paper, Chip, Divider, Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import './About.css'; // Import the CSS file
import {
    Code as CodeIcon,
    Cloud as CloudIcon,
    Storage as StorageIcon,
    Build as BuildIcon,
    AccountTree as AccountTreeIcon
} from '@mui/icons-material';

const RootContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const LargeAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  margin: auto;
`;

const Section = styled(Box)`
  margin-top: 40px;
`;

const SummaryCard = styled(Card)`
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
`;

const EducationCard = styled(Card)`
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
`;

const CategoryPaper = styled(Paper)`
  padding: 16px;
  margin-bottom: 20px;
  background-color: ${props => props.bgcolor || '#f5f5f5'};
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.hoverbgcolor || '#f0f0f0'};
  }

  &:hover .skill-chip {
    background-color: #333;
    color: #fff;
    border: 1px solid #333;
  }
`;

const skills = {
    Methodology: ['SDLC', 'Agile', 'Scrum', 'Waterfall'],
    Languages: ['Python', 'C++', 'R', 'JavaScript', 'C#', 'Machine Learning', 'BigQuery'],
    Frameworks: ['Django', 'Django Rest Framework', 'FastAPI', 'Flask', 'NodeJS', 'ReactJS', 'Angular'],
    'IDEs and Web Scraping': ['VS Code', 'PyCharm', 'Jupyter Notebook', 'NetBeans', 'IntelliJ IDEA', 'Beautiful Soup', 'Scrapy', 'static analysis', 'Linux'],
    Packages: ['NumPy', 'Pandas', 'Matplotlib', 'PySpark', 'PyTorch', 'TensorFlow'],
    'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'Redux', 'jQuery', 'Ajax', 'JSON', 'XML', 'Mockito', 'REST'],
    'Cloud Technologies': ['AWS', 'GCP', 'Microsoft Azure', 'Kubernetes'],
    'Databases and Technologies': ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Hadoop', 'Spark', 'Hive', 'DynamoDB'],
    'Soft Skills': ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Project Management'],
    'Version Control Tools': ['Git', 'GitHub', 'Docker', 'Jira', 'MATLAB']
};

const categoryColors = {
    Methodology: '#FFEBEE',
    Languages: '#E8F5E9',
    Frameworks: '#E3F2FD',
    'IDEs and Web Scraping': '#FFF3E0',
    Packages: '#F3E5F5',
    'Web Technologies': '#E0F2F1',
    'Cloud Technologies': '#FFFDE7',
    'Databases and Technologies': '#FBE9E7',
    'Soft Skills': '#EDE7F6',
    'Version Control Tools': '#E1F5FE'
};

const getCategoryIcon = (category) => {
    switch (category) {
        case 'Methodology':
            return <AccountTreeIcon />;
        case 'Languages':
        case 'Frameworks':
            return <CodeIcon />;
        case 'Cloud Technologies':
            return <CloudIcon />;
        case 'Databases and Technologies':
            return <StorageIcon />;
        case 'Soft Skills':
        case 'Version Control Tools':
            return <BuildIcon />;
        default:
            return <CodeIcon />;
    }
};

function About() {
    return (
        <RootContainer>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                    <LargeAvatar alt="Chandradutt Patel" src="http://127.0.0.1:8000/media/images/20230216_145656_resized.jpg" 
                    style={{height: '50%', width: '100%', borderRadius: '8px' }} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        About Me
                    </Typography>
                    <SummaryCard>
                        <CardContent>
                            <Typography variant="h5" component="h3" gutterBottom>
                                Professional Summary
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                Hi, I'm Chandradutt Patel, a Python Software Developer based in London, UK. With over 3 years of experience in client/server communication, multi-threaded applications, server-side programming, and analytical programming using Python, Django, and Flask, I bring a wealth of expertise to any project. My experience spans across various Software Development Life Cycle (SDLC) methodologies like Agile and Waterfall, ensuring that I can adapt to different project needs and environments.
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                I am proficient in Object Oriented Design and Programming concepts in multiple languages including Python, Java, Scala, and Kotlin. My technical skills include developing web applications using Python, Django, and Flask frameworks, and I am well-versed in software development using IDEs like Visual Studio Code and Jupyter Notebook.
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                My expertise extends to using Python libraries such as NumPy, Pandas, Web2py, and CherryPy, and I have a strong understanding of web development using technologies like HTML, CSS, JavaScript, Bootstrap, jQuery, Ajax, and JSON. Additionally, I have significant experience in writing SQL queries and managing databases using MySQL, SQLite, and MS SQL Server.
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                I am adept at using version control tools like Git and GitHub, and I have a proven track record in deploying and managing applications in cloud environments using AWS and Terraform. My leadership and communication skills have been honed through mentoring junior developers and collaborating with cross-functional teams to deliver high-quality, scalable, and secure software solutions.
                            </Typography>
                        </CardContent>
                    </SummaryCard>
                </Grid>
            </Grid>

            <Section>
                <Typography variant="h5" component="h3" gutterBottom>
                    Skills
                </Typography>
                {Object.entries(skills).map(([category, items]) => (
                    <CategoryPaper
                        key={category}
                        elevation={3}
                        bgcolor={categoryColors[category]}
                        hoverbgcolor={categoryColors[category]}
                    >
                        <Typography variant="h6" component="h4" gutterBottom>
                            {getCategoryIcon(category)} {category}
                        </Typography>
                        <Divider />
                        <Box mt={2}>
                            <Grid container spacing={1}>
                                {items.map((item) => (
                                    <Grid item key={item}>
                                        <Chip label={item} className="skill-chip" />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </CategoryPaper>
                ))}
            </Section>

            <Section>
                <Typography variant="h5" component="h3" gutterBottom>
                    Education
                </Typography>
                <EducationCard>
                    <CardContent>
                        <Typography variant="body1" component="p" gutterBottom>
                            <strong>MSc in Computer Science, Big Data Technologies</strong><br />
                            University of East London, London, UK
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            <strong>Master of Computer Applications</strong><br />
                            Nirma University, Ahmedabad, India
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            <strong>Bachelor of Computer Applications</strong><br />
                            Gujarat University, Ahmedabad, India
                        </Typography>
                    </CardContent>
                </EducationCard>
            </Section>
        </RootContainer>
    );
}

export default About;
