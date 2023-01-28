import  React,{Component}from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import redirect from 'react-router-dom';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

class Photo  extends Component{

  constructor(props) {
    super(props);
    console.log(props); 
    this.albumId = props.albumId;
    this.state = {
        photos: [],
        photoShow:false 
    };
    this.getPhotos = this.getPhotos.bind(this);
}

  render(){
    const { photos } = this.state;
    const { params } = this.props.match;
    this.albumId = params.albumId;
    console.log('selected albumId---:', this.albumId, this.props);
    let modalClose = () => this.setState({ photoShow: false });

  return(
    <ThemeProvider theme={theme}>
    <CssBaseline />
  
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Album layout
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        
        
        <Grid container spacing={4}>
         
        {photos.map(photo =>(
            <Grid item  xs={12} sm={6} md={4}>
 
 <Card
 sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,bgcolor:'darkmagenta'}}
>
 <CardMedia
   component="img"
   sx={{
     // 16:9
     pt: '56.25%',
   }}
   image={photo.thumbnailUrl}
   alt="random"
 />
 <CardContent sx={{ flexGrow: 1 }}
 key={photo.id}
//  onClick={this.navigateToPage.bind(
//      this,
//      album.id,
//  )}
>
 
   <Typography gutterBottom variant="h5" component="h2">
     {photo.id}
   </Typography>
   <Typography>
     {photo.title}
   </Typography>
 </CardContent>

</Card>
            
            
             
            </Grid>
           ))}
        </Grid>
       
      </Container>
    </main>
   
  </ThemeProvider>

  );
 }


componentDidMount() {
  this.getPhotos();
}

componentWillReceiveProps(props) {
  const { albumId } = this.props;
  console.log('coming albumId:', albumId, props);
  if (albumId !== props.albumId) {
      this.albumId = props.albumId;
      this.getPhotos();
  }
}

getPhotos() { 
  console.log('current albumId:', this.albumId);
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`)
      .then(data => data.json())
      .then(res => this.setState({ photos: res }));
     
}

}


export default Photo;


