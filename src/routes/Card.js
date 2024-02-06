import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';


const themeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#33691e',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#e8e8e8',
        },
    },
};

const theme = createTheme(themeOptions)




export default function PhotoCard({ cardId }) {
    const [albumDesc, setAlbumDesc] = React.useState('A test desc');
    const [coverPhoto, setCoverPhoto] = React.useState('https://glassbottles.co.uk/wp-content/uploads/2013/06/1000ml-Clear-Mountain-Bottle.jpg'); // the URL of the cover photo
    const [albumName, setAlbumName] = React.useState('Image Album 1')

    // Tests

    function openAlbumPage() {
        // Do something that opens the new album page. also pass the props here
        console.log("hello world")
    }
    return (
        <ThemeProvider theme={theme}>
            <Card>
                <CardActionArea onClick={openAlbumPage}>
                    <CardMedia
                        component="img"
                        alt="image"
                        height="120"
                        image={coverPhoto}
                    />

                    <CardContent>
                        {/* wrap the content components in CardContent */}
                        <Typography
                            gutterBottom
                            variant='h4'
                            component='div'>
                            {albumName}
                        </Typography>
                        <Typography
                            variant='h6'
                            component='div'>
                            {albumDesc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    )
}