import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function Login({ appUrl }) {
    const { data, setData, post } = useForm({
        email: "",
        password: "",
    });

    const { email, password } = data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/login", data);
    };

    return (
        <>
            <div className="app app-auth-sign-up  d-flex justify-content-center align-items-center">
                <div className="app-auth-container">
                    <div className="logo">
                        <a>Desa Mlale</a>
                    </div>
                    <p className="auth-description">
                        Silahkan isi form dibawah ini untuk masuk ke akun anda.
                        <br />
                        Jika belum memiliki akun, silahkan{" "}
                        <Link href={"/register"} className="text-primary">
                            <a>Daftar</a>
                        </Link>
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="auth-credentials m-b-xxl row">
                            <div className="col-12">
                                <label
                                    for="signUpUsername"
                                    className="form-label"
                                >
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control m-b-md"
                                    placeholder="Masukan email"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-12">
                                <label
                                    for="signUpPassword"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                    value={password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="auth-submit d-flex justify-content-between items-center">
                            <button type="submit" className="btn btn-primary">
                                Masuk
                            </button>

                            <div className="auth-alts">
                                <a href="#" className="auth-alts-google"></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
