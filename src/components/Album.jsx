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
import {useNavigate,useHistory} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
// import ButtonBase from '@material-ui/core/ButtonBase';
import Footer from './Footer';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

class Album  extends Component{
  constructor(props) {
    super(props);
    console.log(props); 
    this.userId = props.userId;
    this.state = {
        albums: [],
        albumId: -1,
        navigateToPhoto: false,
        loading:true,
        
    };
}
navigateToPage = index => {
  console.log('selected album id:', index, this.context.router);
  this.setState({ navigateToPhoto: true, albumId: index });
  this.context.router.push(`/Photo/${index}`);
};
  render(){
    const { albums, navigateToPhoto, albumId } = this.state;
        this.userId = this.props.userId;
        console.log('selected userId---:', this.userId);
  //       if (navigateToPhoto) {
  //           return <redirect to={`/Photo/${albumId}`} />;

  // }
  return(
    <ThemeProvider theme={theme}>
    <CssBaseline />
  
    <main>
      {/* Hero unit */}
     
        <Container maxWidth="sm">
          
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Albums for User {this.userId}
          </Typography>
        
        </Container>
      
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        
        {this.state.loading || !this.state.albums?(
              <Typography variant="h6">Fetching Data..<CircularProgress color="secondary" /></Typography>
            ):(
        <Grid container spacing={4}>
       
         
        {albums.map(album =>(
            <Grid item key={album.id} xs={12} sm={6} md={4}>
 
 <Card
 sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,bgcolor:'darkmagenta'}}
>

 <CardContent sx={{ flexGrow: 1 }}
 key={album.id}
 onClick={this.navigateToPage.bind(
  this,
  album.id,
)}

>
 
   <Typography gutterBottom variant="h5" component="h2">
     {album.id}
   </Typography>
   <Typography>
     {album.title}
   </Typography>
 </CardContent>
 
</Card>
            
            
             
            </Grid>
           ))}
        </Grid>
        )}
       
      </Container>
    </main>
    {/* Footer */}
   
  </ThemeProvider>

  );

}
componentDidMount() {
  this.getAlbums();
  this.setState({
    loading:false
});
}

componentWillReceiveProps(props) {
  const { userId } = this.props;
  console.log('coming userId:', userId, props);
  if (userId !== props.userId) {
      this.userId = props.userId;
      this.getAlbums();
  }
}

getAlbums() {
  console.log('current userId:', this.userId);
  fetch(`https://jsonplaceholder.typicode.com/albums?userId=${this.userId}`)
      .then(data => data.json())
      .then(res => this.setState({ albums: res }));
     
}


}


export default Album;


