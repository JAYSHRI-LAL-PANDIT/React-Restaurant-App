import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <div>
        <Layout>
           <Box sx={{my: 10, ml: 10, "& h4": { fontWeight:"",mb: 2}}}>
            <Typography variant='h4'>Contact My Resturant</Typography>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque mollitia molestiae illo porro. Atque officiis nulla praesentium corrupti nesciunt ducimus libero aliquid sunt suscipit asperiores quis, odit totam impedit cupiditate dignissimos eaque eveniet voluptatibus, deleniti, similique excepturi earum. Nisi culpa possimus quaerat, voluptas at esse exercitationem quas odio est.
              </p>
           </Box>
           <Box sx={{m:3, width: "600px", ml: 10, "@media (max-width: 600px)":{width: "250px"}}}>
            <TableContainer component={Paper}>
                <Table aria-label='contact table'>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{bgcolor: 'black', color: "white"}} align='center'>
                          Contact Details
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                            <SupportAgentIcon sx={{color: "red", pt:1}}/> 1800-00-0000
                            (tollfree)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                      <TableCell>
                            <MailIcon sx={{color: "skyblue", pt:1}}/> jaykumar88047@gmail.com
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                            <CallIcon sx={{color: "green", pt:1}}/> 8804779193
                        </TableCell>
                      </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
           </Box>
        </Layout>
    </div>
  )
}

export default Contact