import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Login from '../components/tampilanlogin'

const Login1 = () => (
  <div>
    <Head>
        <title>Login</title>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
          <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css"/>
          <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css"/>
          <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css"/>
          <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css"/>
          <link rel="stylesheet" type="text/css" href="css/util.css"/>
          <link rel="stylesheet" type="text/css" href="css/main.css"></link>


              <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
          <script src="vendor/bootstrap/js/popper.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
          <script src="vendor/select2/select2.min.js"></script>
          <script src="vendor/tilt/tilt.jquery.min.js"></script>
          <script >
           
          </script>
          <script src="js/main.js"></script>

    </Head>

    <Login />
  </div>
  )

  export default Login1