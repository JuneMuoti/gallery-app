import React,{Component} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { redirect,useHistory } from 'react-router-dom';
import Album from './Album';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

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
 
 
class Users extends Component {
  constructor() {
    super();
    this.state = { users: [], 
      selectedUser: -1,
      loading:true
    };
    this.selectUser = this.selectUser.bind(this);
}

  render(){
    return (      
      <main>
       
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
                 variant="p"
                 align="center"
                 color="text.primary"
                 gutterBottom
               >
                USERS 
               </Typography>
            
             </Container>
           </Box>
           
           <Container maxWidth="xl">
           <Grid container spacing={2}>
           {this.state.loading || !this.state.users?(
              <Typography variant="h6">Fetching Data..<CircularProgress color="secondary" /></Typography>
            ):(
           <Grid item xs={6}>
           <Typography
                 component="h1"
                 variant="h3"
                 align="center"
                 color="text.primary"
                 gutterBottom
               >
               Click on a User to view their Albums
               </Typography>
       <div style={{ height: 600, width: '100%' }}>
         <DataGrid
           rows={this.state.users}
           columns={columns}
           pageSize={10}
           rowsPerPageOptions={[5]}
           checkboxSelection
             onRowClick={this.selectUser}
         />
   
   </div>
   </Grid>
     )}
       
   <Grid item xs={6}>
   <Album userId={this.state.selectedUser} key={this.state.selectedUser} />
   </Grid>
   </Grid>

   </Container>
  
           {/* Footer */}
           <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
           <Typography variant="h6" align="center" gutterBottom>
               
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
    
       </main>

    );
  }


componentDidMount() {
  this.getUsers();
  this.setState({
    loading:false
});
}
// handleOnRowClick=(params)=>{  
//   this.setState({selectedUser:params.id});
  
//   // setUserId(params.id);
   
// }; 
selectUser(index) {
  console.log('selected:', index.id);
  this.setState({ selectedUser: index.id});
} 

getUsers = async() => {
  await fetch('https://jsonplaceholder.typicode.com/users')
  .then((res)=>res.json())
  .then((data)=>this.setState({users:data}))
  .catch((err) => {
    console.log(err)
  })
};

}


export default Users;
const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'username', headerName: 'UserName', width: 300 },
  { field: 'email', headerName: 'Email', width: 600 },
  { field: 'phone', headerName: 'Phone', width: 300 },
  { field: 'website', headerName: 'Website', width: 300 },
  {
    field: "View Albums",
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
        // onClick={(event) => {
        //   handleClick(event, cellValues);
        // }}
        >
          Albums
        </Button>
      );
    }
  },
  
]

// export default function Users() {
  
//   const [users,setUsers]=React.useState([]);
//   const [userid, setUserId] = React.useState([]);
//   React.useEffect(()=>{
//     fetchData();
//   },[])
//   const fetchData = async () =>{
//     await fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>res.json())
//     .then((data)=>this.setState({users:data}))   
//     .catch((err) => {
//       console.log(err)
//     })
//   }
//   console.log(users)  
//   const columns = [
//     { field: 'id', headerName: 'ID' },
//     { field: 'name', headerName: 'Name', width: 300 },
//     { field: 'username', headerName: 'UserName', width: 300 },
//     { field: 'email', headerName: 'Email', width: 600 },
//     { field: 'phone', headerName: 'Phone', width: 300 },
//     { field: 'website', headerName: 'Website', width: 300 },
//     {
//       field: "View Albums",
//       renderCell: (cellValues) => {
//         return (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={this.selectUser.bind(
//               this,
//               user.id,
//           )}
//           >
//             Albums
//           </Button>
//         );
//       }
//     },
    
//   ]
 
// const handleOnRowClick=(params)=>{  
  
//   setUserId(params.id);
   
// };  
// console.log(userid);
//   return (
//     <main>
//    <Box
//           sx={{
//             bgcolor: 'background.paper',
//             pt: 8,
//             pb: 6,  
//           }}
//         >
//           <Container maxWidth="xl">
//             <Typography
//               component="h1"
//               variant="h2"
//               align="center"
//               color="text.primary"
//               gutterBottom
//             >
//              USERS INFORMATION
//             </Typography>
         
//           </Container>
//         </Box>
//         <Container maxWidth="xl">
//     <div style={{ height: 600, width: '100%' }}>
//       <DataGrid
//         rows={users}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         onRowClick={handleOnRowClick  }  
//       />

// </div>
// </Container>
//         {/* Footer */}
//         <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
            
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Curative Gallery App to  showcase different work.
//         </Typography>
//         <Copyright />
//       </Box>
//       {/* End footer */}
 
//     </main>
//   );
// }
