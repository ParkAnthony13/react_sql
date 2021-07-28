import React,{ useEffect, useState } from 'react'
import { Router, navigate, Link } from '@reach/router'
import axios from 'axios'


import FormComponent from './Form.component'

const Home = props => {



    return(
        <div>
            <FormComponent/>
        </div>
    )
}

export default Home