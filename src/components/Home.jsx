import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';





export default function Home() {
  const [users,setUsers]=React.useState([]);
  React.useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async () =>{
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
    .catch((err) => {
      console.log(err)
    })
  }
  console.log(users)
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'username', headerName: 'UserName', width: 300 },
    { field: 'email', headerName: 'Email', width: 600 },
    { field: 'phone', headerName: 'Phone', width: 300 },
    { field: 'website', headerName: 'Website', width: 300 }
  ]

  return (
    <main>
        <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("https://source.unsplash.com/random" )`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src="https://source.unsplash.com/random" alt="main image" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            {/* <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
   <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             USERS  
            </Typography>
         
          </Container>
        </Box>
        <Container maxWidth="xl">
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

</div>
</Container>
     
 
    </main>
  );
}
