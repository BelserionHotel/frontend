import React, { Fragment } from "react";
import "../main.css";
import { withRouter, Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, ErrorMessage } from "formik";
import { loginValidation } from "../component/validate";
import { axios } from "../component/helpers";
import Swal from "sweetalert2";

import { HeaderAuth } from "../component";

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function Signin(props) {
    const direct = props.history.location.pathname;
    const sdirect = direct.split("/");
    console.log(sdirect[2]);

    const classes = useStyles();

    return (
        <Fragment>
            <HeaderAuth
                jumbotronTitle="Belserion Hotel"
                jumbotronSubtitle="Luxury Resort &amp; Spa"
            ></HeaderAuth>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validate={loginValidation}
                        onSubmit={values => {
                            axios()
                                .post(`/users/login`, values)
                                .then(response => {
                                    if (
                                        response.data.message ===
                                        "Login successfull"
                                    ) {
                                       
                                        // console.log(response.data.message);

                                        localStorage.setItem(
                                            "token",
                                            JSON.stringify(response.data.data)
                                        );
                                        sdirect[2] === undefined
                                            ? props.history.push("/")
                                            : props.history.push(
                                                  `/booking/${sdirect[2]}`
                                              );
                                    } else if (
                                        response.data.message === "failed login"
                                    ) {
                                        // console.log(response.data.message);

                                        alert("email atau password salah");
                                    }
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form
                                className={classes.form}
                                noValidate
                                onSubmit={handleSubmit}
                            >
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    defaultValue={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontStyle: "italic"
                                    }}
                                >
                                    <ErrorMessage name="email" />
                                </p>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    defaultValue={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontStyle: "italic"
                                    }}
                                >
                                    <ErrorMessage name="password" />
                                </p>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Link to="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </div>
            </Container>
        </Fragment>
    );
}

export default withRouter(Signin);
