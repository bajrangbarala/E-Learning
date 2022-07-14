import { Grid } from '@mui/material'
// import { Container } from '@mui/system'
import React from 'react'
import CoursesCart from './CoursesCart'
const Courses = () => {
    const cardData = [
        {
            course: "Web Development from Beginning to Pro",
            rating: 3,
            students: 500,
            image: './img/Rectangle125 .png'
        },
        {
            course: "Website Designing",
            rating: 4,
            students: 1500,
            image: './img/Rectangle126.png'
        },
        {
            course: "Mobile App Development",
            rating: 5,
            students: 2500,
            image: './img/Rectangle127.png'
        },
        {
            course: "Search Engine Optimization",
            rating: 5,
            students: 2500,
            image: './img/Rectangle128.png'
        }, {
            course: "Search Engine Optimization",
            rating: 5,
            students: 2500,
            image: './img/Rectangle 129.png'
        }, {
            course: "Search Engine Optimization",
            rating: 5,
            students: 2500,
            image: './img/Rectangle 130.png'
        }, {
            course: "Search Engine Optimization",
            rating: 5,
            students: 2500,
            image: './img/Rectangle 131.png'
        }, {
            course: "Search Engine Optimization",
            rating: 5,
            students: 2500,
            image: './img/Rectangle 132.png'
        },

    ]

    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} >
                {
                    cardData.map((item, index) => (
                        <Grid item xs={2} sm={3} md={3} key={index}>
                            <CoursesCart courseData={item} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Courses