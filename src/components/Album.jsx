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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
   Photosphere
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
          {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
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
          </Stack> */}
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
 {/* <CardMedia
   component="img"
   sx={{
     // 16:9
     pt: '56.25%',
   }}
   image="https://source.unsplash.com/random"
   alt="random"
 /> */}
 {/* <Navigate to="/Photo"  onClick={this.navigateToPage.bind(
     this,
     album.id,
 )}/> */}
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
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
         Curative Gallery App to  showcase different work.
      </Typography>
      <Copyright />
    </Box>
    {/* End footer */}
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


// export default function Album() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
    
//       <main>
//         {/* Hero unit */}
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             pt: 8,
//             pb: 6,
//           }}
//         >
//           <Container maxWidth="sm">
//             <Typography
//               component="h1"
//               variant="h2"
//               align="center"
//               color="text.primary"
//               gutterBottom
//             >
//               Album layout
//             </Typography>
//             <Typography variant="h5" align="center" color="text.secondary" paragraph>
//               Something short and leading about the collection below—its contents,
//               the creator, etc. Make it short and sweet, but not too short so folks
//               don&apos;t simply skip over it entirely.
//             </Typography>
//             <Stack
//               sx={{ pt: 4 }}
//               direction="row"
//               spacing={2}
//               justifyContent="center"
//             >
//               <Button variant="contained">Main call to action</Button>
//               <Button variant="outlined">Secondary action</Button>
//             </Stack>
//           </Container>
//         </Box>
//         <Container sx={{ py: 8 }} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="img"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random"
//                     alt="random"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//            Curative Gallery App to  showcase different work.
//         </Typography>
//         <Copyright />
//       </Box>
//       {/* End footer */}
//     </ThemeProvider>
//   );
// }