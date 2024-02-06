import { useRouteError } from "react-router-dom"
import React from 'react'
import { Typography, Box, Button, Container, Grid } from "@mui/material";


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}>
            <Container maxWidth="md">
                <Grid container alignItems={'flex-start'} spacing={2}>
                    <Grid container item xs={6}>
                        {/* Make items align in the future */}
                        <Typography item variant="h1">
                            404
                        </Typography>
                        <Typography item variant="h6">
                            The page you are looking for doesn't exist...
                        </Typography>
                        <Button item variant="contained">
                            Back to Home
                        </Button>
                    </Grid>
                    <Grid xs={6} overflow={true}>
                        <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                            width={500}
                            height={200}
                            alt=""
                        />

                    </Grid>
                </Grid>

            </Container>

        </Box>
    );
}