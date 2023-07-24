import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
      <div>
        <Layout>
            <Box sx={{my:15, textAlign: "center", p:2, "& h4": {fontweight: "bold", my:2, fontSize:'2rem'},"& p":{textAlign:"justify"}, "@media (max-width:600px)":{mt:0, "& h4":{fontSize:'1.5rem'}}}}>
                <Typography variant='h4'>
                  Welcome To My Resturant
                </Typography>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus provident deserunt adipisci voluptatem architecto quaerat ea unde at enim earum consectetur in quibusdam assumenda voluptatum dolorum dignissimos libero quos suscipit, omnis iure consequatur? Et quaerat officia, ex omnis consectetur nihil quo fuga facere esse atque deleniti voluptas quisquam nemo! Repudiandae impedit omnis aliquam commodi distinctio ex officiis id quisquam eius, recusandae doloremque fugiat nihil sunt? Ad blanditiis aspernatur officiis, laboriosam debitis tempora exercitationem neque eos porro architecto culpa impedit excepturi incidunt, odio quaerat corrupti nulla cum deleniti ipsa obcaecati error sunt. Optio enim quibusdam a at nulla eius, dolorem tenetur!</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, fugit distinctio ducimus mollitia sed odio porro nam eius aspernatur aperiam saepe debitis commodi quo obcaecati corporis dolore pariatur praesentium excepturi, quas quos rem hic asperiores! A architecto suscipit rem vero. Eveniet tempora quibusdam, nostrum esse quisquam ad adipisci in facilis? Officia assumenda error rem suscipit praesentium illum quia voluptatem cupiditate. Incidunt laborum ipsa quae quam illum deleniti fugit repudiandae deserunt in, fuga modi corrupti inventore beatae debitis illo facilis ex dolore necessitatibus possimus? Totam dignissimos fugit recusandae, possimus repellendus, omnis perspiciatis esse vitae culpa voluptate accusamus sint voluptatum dolorem. Ad.</p>

            </Box>
        </Layout>
    </div>
  )
}

export default About