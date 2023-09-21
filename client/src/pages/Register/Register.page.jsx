import React from "react";
import styles from "./Register.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Textbox from "../../ui/Form/Textbox/Textbox.component";
import DatePicker from "../../ui/Form/DatePicker/DatePicker.component";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { axios } from "../../services/HttpClient/HttpClient";
import BasicAlert from "../../ui/Alert/BasicAlert/BasicAlert.component";
import ObjectChecker from "../../services/Object/ObjectChecker";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';



function Register() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({
        content: "",
        severity: "",
    });

    const [account, setAccount] = useState({
        dateOfBirth: "",
        email: "",
        firstName: "",
        lastName: "",
        password:"",
        phone: "",
    });

    const handleChange = (event, name) => {
        let { value } = event.target;
        account[name] = value;
        setAccount({ ...account });
        setMessage({ content: "", severity: "" });
    };

    const register = async () => {
        setIsLoading(true);
        setIsSubmitted(true);
        setTimeout(async () => {
            if (!ObjectChecker.isEmptyKey(account)) {
                console.log(account);
                let { ok, status } = await axios({
                    url: "/api/user/register",
                    data: account,
                    method: "post",
                });

                if (ok && status === 200)
                    setMessage({
                        content: "Register sucessfully!",
                        severity: "success",
                    });
                else
                    setMessage({
                        content: "Fail to register!",
                        severity: "warning",
                    });
            } else console.log("empty");

            setIsLoading(false);
        }, 1000);
    };

    const AlertRegister = () => {
        if (message.content) {
            return (
                <BasicAlert className="my-3" severity={message.severity}>
                    {message.content}
                </BasicAlert>
            );
        }
        return "";
    };

    return (
        <div className={styles["register"]}>
            <div className="row">
                <div className="col-xl-6 col-lg-6 w-100 h-100">
                    <div
                        className={
                            styles["register_left"] +
                            " d-flex justify-content-center align-items-center w-100 h-100"
                        }
                    >
                        <img src="https://ocean.si.edu/sites/default/files/styles/full_width_large/public/2020-10/copepoda.jpg.webp?itok=BLy0xhKp" alt="SVG" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 w-100 h-100 pl-5">
                    <div
                        className={
                            styles["register_right"] +
                            " d-flex align-items-center w-100 h-100"
                        }
                    >
                        <div className={styles["register_right_form"]}>
                            <h3>Sign Up</h3>
                            <p className="light-text">
                              Welcome to SPMS.  <br />
                              Please enter infomation to create a account.
                            </p>
                            <AlertRegister />
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="form-group">
                                        <label>Firstname</label>
                                        <Textbox
                                            onChange={(event) =>
                                                handleChange(event, "firstName")
                                            }
                                            regex={/^[A-Za-z\d\s]{1,}$/}
                                            isSubmitted={isSubmitted}
                                            message="Firstname is minimum 2 characters"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <Textbox
                                            onChange={(event) =>
                                                handleChange(event, "email")
                                            }
                                            regex={
                                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                            }
                                            message="Email is invalid"
                                            isSubmitted={isSubmitted}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <Textbox
                                            onChange={(event) =>
                                                handleChange(event, "phone")
                                            }
                                            regex={/^[\d]{10}$/}
                                            message="Phone is 10 numbers"
                                            isSubmitted={isSubmitted}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="form-group">
                                        <label>Lastname</label>
                                        <Textbox
                                            onChange={(event) =>
                                                handleChange(event, "lastName")
                                            }
                                            isSubmitted={isSubmitted}
                                            regex={/^[A-Za-z\d\s]{2,}$/}
                                            message="Lastname is minimum 3 characters"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <Textbox
                                        type="password"
                                            onChange={(event) =>
                                                handleChange(event, "password")
                                            }
                                            isSubmitted={isSubmitted}
                                            regex={/^(?=.*[A-Za-z]).{6,}$/}
                                            message="Password is minimum 6 characters"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Birthday</label>
                                        <DatePicker
                                            onChange={(event) =>
                                                handleChange(
                                                    event,
                                                    "dateOfBirth"
                                                )
                                            }
                                            message="Birthday is required"
                                            isSubmitted={isSubmitted}
                                            type="date"
                                        />
                                    </div>
                                </div>
                            </div>
                            <LoadingButton
                                onClick={register}
                                type="submit"
                                loading={isLoading}
                                startIcon={isLoading ? <CircularProgress size={24} /> : null}
                                loadingPosition="start"
                                // loadingIndicator="Loading..."
                                variant="contained"
                                className="w-100"
                            >
                                Register
                            </LoadingButton>

                            <div
                                className={
                                    styles["register_right_undertb"] + " mt-2"
                                }
                            >
                                <Link to="/home">
                                    <span className="default-text d-flex align-items-center">
                                        <ArrowBackIcon
                                            className="mr-1"
                                            sx={{ fontSize: ".9rem" }}
                                        ></ArrowBackIcon>{" "}
                                        Home
                                    </span>
                                </Link>
                                <Link to="/login">
                                    <span className="default-text">
                                        Had a account ?
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
