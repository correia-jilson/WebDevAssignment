import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const jobPosts = [
    {
      id: 1,
      title: 'Full Stack Developer',
      description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
      lastUpdated: 'Last updated 2 days ago',
      applyLink: 'https://example.com/apply/full-stack-developer',
    },
    {
      id: 2,
      title: 'Digital Marketing Specialist',
      description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
      lastUpdated: 'Last updated 1 day ago',
      applyLink: 'https://example.com/apply/digital-marketing-specialist',
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
      lastUpdated: 'Last updated 4 hours ago',
      applyLink: 'https://example.com/apply/ux-ui-designer',
    },
    {
      id: 4,
      title: 'Data Scientist',
      description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
      lastUpdated: 'Last updated 3 days ago',
      applyLink: 'https://example.com/apply/data-scientist',
    },
    {
      id: 5,
      title: 'Customer Support Representative',
      description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
      lastUpdated: 'Last updated 6 hours ago',
      applyLink: 'https://example.com/apply/customer-support-representative',
    }
];  

function JobListings() {
    return (
      <>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {jobPosts.map((jobPost) => (
            <Card key={jobPost.id} sx={{ width: 300, margin: 2 }}>
                <CardMedia
                component="img"
                height="140"
                image={require("D:\\OneDrive\\Desktop\\WebDevAssignment\\Assignment9\\assign9\\src\\images\\Google.png")}
                alt={jobPost.title}
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {jobPost.title}
                    </Typography>
                    
                    <Typography variant="body1" gutterBottom>
                        Salary: ${jobPost.salary}
                    </Typography>

                    <Button variant="contained" color="primary" href={jobPost.applyLink}>
                        Apply Now
                    </Button>
                </CardContent>
            </Card>
            ))}
        </Box>
      </>
    );
  };
  

export default JobListings




