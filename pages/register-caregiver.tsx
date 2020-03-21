import React from "react";
import {render} from "react-dom";
import {Formik} from "formik";
import * as Yup from "yup";

const RegisterCareGiver = () => {
    return <div className="register-caregiver">
        <h1>Schrijf je in als hulpverlener</h1>
        <Formik
            initialValues={{
                name: "",
                email: "",
                postalCode: ""
            }}
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string()
                    .email()
                    .required("Required"),
                postalCode: Yup.string()
                    .matches(/\d{4}[A-Z]{2}/)
                    .required()
            })}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                return (
                    <form onSubmit={handleSubmit}>

                        <input
                            id="name"
                            placeholder="Naam"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.name && touched.name
                                    ? "text-input error"
                                    : "text-input"
                            }
                        />
                        {errors.name && touched.name && (
                            <div className="input-feedback">{errors.name}</div>
                        )}

                        <input
                            id="email"
                            placeholder="Email"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.email && touched.email
                                    ? "text-input error"
                                    : "text-input"
                            }
                        />
                        {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                        )}

                        <input
                            id="postalCode"
                            placeholder="1234AB"
                            type="text"
                            value={values.postalCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.email && touched.email
                                    ? "text-input error"
                                    : "text-input"
                            }
                        />
                        {errors.postalCode && touched.postalCode && (
                            <div className="input-feedback">{errors.postalCode}</div>
                        )}


                        <button type="submit" disabled={isSubmitting}>
                            Shrijf je in!
                        </button>

                    </form>
                );
            }}
        </Formik>
    </div>
}

export default RegisterCareGiver;
