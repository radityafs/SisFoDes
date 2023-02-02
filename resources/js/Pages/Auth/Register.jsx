import { Link, useForm } from "@inertiajs/inertia-react";

export default function Register({ errors, appUrl }) {
    const { data, setData, post, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const { name, email, phone, password } = data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/register", data);
    };

    return (
        <>
            <div className="app app-auth-sign-up align-content-stretch d-flex justify-content-center align-items-center">
                <div className="app-auth-container">
                    <div className="logo">
                        <a>Desa Mlale</a>
                    </div>
                    <p className="auth-description">
                        Silahkan isi form dibawah ini untuk mendaftar sebagai
                        warga Desa Mlale.
                        <br />
                        Jika sudah memiliki akun, silahkan{" "}
                        <Link href={"/login"}>Masuk</Link>
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="auth-credentials m-b-xxl row">
                            <div className="col-md-6 col-12">
                                <label className="form-label">
                                    Nama Lengkap
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control m-b-md"
                                    placeholder="Masukkan nama lengkap"
                                    value={name}
                                    onChange={handleChange}
                                />
                                {errors?.name && (
                                    <span className="text-danger">
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className="col-md-6 col-12">
                                <label className="form-label">
                                    Nomor Telepon
                                </label>
                                <input
                                    type="phone"
                                    name="phone"
                                    className="form-control m-b-md"
                                    placeholder="08xxxxxxxxxx"
                                    value={phone}
                                    onChange={handleChange}
                                />
                                {errors?.phone && (
                                    <span className="text-danger">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>

                            <div className="col-12">
                                <label className="form-label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control m-b-md"
                                    placeholder="Masukan email"
                                    value={email}
                                    onChange={handleChange}
                                />
                                {errors?.email && (
                                    <span className="text-danger">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <div className="col-12">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="signUpPassword"
                                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                    value={password}
                                    onChange={handleChange}
                                />

                                {errors?.password && (
                                    <span className="text-danger">
                                        {errors.password}
                                    </span>
                                )}
                                <div id="emailHelp" className="form-text">
                                    Password harus terdiri dari 8 karakter atau
                                    lebih
                                </div>
                            </div>
                        </div>

                        <div className="auth-submit d-flex justify-content-between items-center">
                            <button type="submit" className="btn btn-primary">
                                Daftar
                            </button>

                            <div className="auth-alts">
                                <a href="#" className="auth-alts-google"></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <script
                src={`${appUrl}/assets/plugins/jquery/jquery-3.5.1.min.js`}
            ></script>
            <script
                src={`${appUrl}/assets/plugins/bootstrap/js/bootstrap.min.js`}
            ></script>
            <script
                src={`${appUrl}/assets/plugins/perfectscroll/perfect-scrollbar.min.js`}
            ></script>
            <script src={`${appUrl}/assets/plugins/pace/pace.min.js`}></script>
            <script src={`${appUrl}/assets/js/main.min.js`}></script>
            <script src={`${appUrl}/assets/js/custom.js`}></script>
        </>
    );
}
