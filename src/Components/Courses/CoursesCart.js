import { Avatar, Box, Rating, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import MicIcon from "@mui/icons-material/Mic";
import AudiotrackSharpIcon from "@mui/icons-material/AudiotrackSharp";

function CoursesCart({ courseData }) {
    return (
        <>
            <Box style={{ width: "100%", float: "left", boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 8px 0px' }}>
                <Card sx={{ borderRadius: "5px", padding: '20px 15px', boxShadow: 'none !important' }}>
                    <CardMedia
                        sx={{ borderRadius: "10px" }}
                        component="img"
                        image={courseData.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Box>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                style={{ fontSize: "18px" }}
                            >
                                {courseData.course}
                            </Typography>
                        </Box>
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "10px 0",
                            }}
                        >
                            <Box style={{ display: "flex", color: "#FF7C32" }}>
                                <Typography>{courseData.rating}</Typography>
                                <Rating
                                    style={{ color: "#FF7C32", marginLeft: "10px" }}
                                    name="customized-1"
                                    max={1}
                                />
                            </Box>
                            <Box style={{ display: "flex" }}>
                                <SchoolIcon style={{ color: "#000000", marginRight: "10px" }} />
                                <Typography style={{ color: "#000000" }}>
                                    {courseData.students} Students
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "10px 0",
                            }}
                        >
                            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                <AccessTimeSharpIcon style={{ color: "#45C9C2" }} />
                                <Typography>12 hrs 15 min</Typography>
                            </Box>
                            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                <MicIcon style={{ color: "#FF7C32" }} />
                                <Typography> Lectures</Typography>
                            </Box>
                            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                <AudiotrackSharpIcon style={{ color: "#45C9C2" }} />
                                <Typography> Medium</Typography>
                            </Box>
                        </Box>
                        <Box
                            style={{
                                width: "90%",
                                height: 2,
                                background: "black",
                                margin: "25px auto",
                            }}
                        ></Box>
                        <Box>
                            <Stack
                                direction="row"
                                spacing={2}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "10px 0",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar
                                    sx={{ width: 60, height: 60 }}
                                    alt="Remy Sharp"
                                    src="./Ellipse1.png"
                                />
                                <Typography style={{ fontSize: '15px' }}>Kamran Hess</Typography>
                                <span style={{ color: "#0A908A", fontSize: 15 }}>$119.99</span>
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export default CoursesCart;
