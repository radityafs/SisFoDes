import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import { GlobalProvider } from "../../Context/GlobalContext";

export default function Index({ appUrl }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div
            className={`app align-content-stretch d-flex flex-wrap ${
                sidebarOpen ? "" : "sidebar-hidden"
            }`}
        >
            <Sidebar setShow={sidebarOpen} />
            <div className="app-container">
                <Header setSidebar={handleSidebar} />
                <div className="app-content">
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <div className="page-description page-description-tabbed">
                                        <h1>Settings</h1>

                                        <ul
                                            className="nav nav-tabs mb-3"
                                            id="myTab"
                                            role="tablist"
                                        >
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link active"
                                                    id="account-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#account"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="hoaccountme"
                                                    aria-selected="true"
                                                >
                                                    Account
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="security-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#security"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="security"
                                                    aria-selected="false"
                                                >
                                                    Security
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="integrations-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#integrations"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="integrations"
                                                    aria-selected="false"
                                                >
                                                    Integrations
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div
                                        className="tab-content"
                                        id="myTabContent"
                                    >
                                        <div
                                            className="tab-pane fade show active"
                                            id="account"
                                            role="tabpanel"
                                            aria-labelledby="account-tab"
                                        >
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsInputEmail"
                                                                className="form-label"
                                                            >
                                                                Email address
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="settingsInputEmail"
                                                                aria-describedby="settingsEmailHelp"
                                                                placeholder="example@neptune.com"
                                                            />
                                                            <div
                                                                id="settingsEmailHelp"
                                                                className="form-text"
                                                            >
                                                                We'll never
                                                                share your email
                                                                with anyone
                                                                else.
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsPhoneNumber"
                                                                className="form-label"
                                                            >
                                                                Phone Number
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="settingsPhoneNumber"
                                                                placeholder="(xxx) xxx-xxxx"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-lg">
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsInputFirstName"
                                                                className="form-label"
                                                            >
                                                                First Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="settingsInputFirstName"
                                                                placeholder="John"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsInputLastName"
                                                                className="form-label"
                                                            >
                                                                Last Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="settingsInputLastName"
                                                                placeholder="Doe"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-lg">
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsInputUserName"
                                                                className="form-label"
                                                            >
                                                                Username
                                                            </label>
                                                            <div className="input-group">
                                                                <span
                                                                    className="input-group-text"
                                                                    id="settingsInputUserName-add"
                                                                >
                                                                    neptune.com/
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="settingsInputUserName"
                                                                    aria-describedby="settingsInputUserName-add"
                                                                    placeholder="username"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsState"
                                                                className="form-label"
                                                            >
                                                                State
                                                            </label>
                                                            <select
                                                                className="js-states form-control"
                                                                id="settingsState"
                                                                tabindex="-1"
                                                                srtyle={{
                                                                    width: "100%",
                                                                    display:
                                                                        "none",
                                                                }}
                                                            >
                                                                <optgroup label="Alaskan/Hawaiian Time Zone">
                                                                    <option value="AK">
                                                                        Alaska
                                                                    </option>
                                                                    <option value="HI">
                                                                        Hawaii
                                                                    </option>
                                                                </optgroup>
                                                                <optgroup label="Pacific Time Zone">
                                                                    <option value="CA">
                                                                        California
                                                                    </option>
                                                                    <option value="NV">
                                                                        Nevada
                                                                    </option>
                                                                    <option value="OR">
                                                                        Oregon
                                                                    </option>
                                                                    <option value="WA">
                                                                        Washington
                                                                    </option>
                                                                </optgroup>
                                                                <optgroup label="Mountain Time Zone">
                                                                    <option value="AZ">
                                                                        Arizona
                                                                    </option>
                                                                    <option value="CO">
                                                                        Colorado
                                                                    </option>
                                                                    <option value="ID">
                                                                        Idaho
                                                                    </option>
                                                                    <option value="MT">
                                                                        Montana
                                                                    </option>
                                                                    <option value="NE">
                                                                        Nebraska
                                                                    </option>
                                                                    <option value="NM">
                                                                        New
                                                                        Mexico
                                                                    </option>
                                                                    <option value="ND">
                                                                        North
                                                                        Dakota
                                                                    </option>
                                                                    <option value="UT">
                                                                        Utah
                                                                    </option>
                                                                    <option value="WY">
                                                                        Wyoming
                                                                    </option>
                                                                </optgroup>
                                                                <optgroup label="Central Time Zone">
                                                                    <option value="AL">
                                                                        Alabama
                                                                    </option>
                                                                    <option value="AR">
                                                                        Arkansas
                                                                    </option>
                                                                    <option value="IL">
                                                                        Illinois
                                                                    </option>
                                                                    <option value="IA">
                                                                        Iowa
                                                                    </option>
                                                                    <option value="KS">
                                                                        Kansas
                                                                    </option>
                                                                    <option value="KY">
                                                                        Kentucky
                                                                    </option>
                                                                    <option value="LA">
                                                                        Louisiana
                                                                    </option>
                                                                    <option value="MN">
                                                                        Minnesota
                                                                    </option>
                                                                    <option value="MS">
                                                                        Mississippi
                                                                    </option>
                                                                    <option value="MO">
                                                                        Missouri
                                                                    </option>
                                                                    <option value="OK">
                                                                        Oklahoma
                                                                    </option>
                                                                    <option value="SD">
                                                                        South
                                                                        Dakota
                                                                    </option>
                                                                    <option value="TX">
                                                                        Texas
                                                                    </option>
                                                                    <option value="TN">
                                                                        Tennessee
                                                                    </option>
                                                                    <option value="WI">
                                                                        Wisconsin
                                                                    </option>
                                                                </optgroup>
                                                                <optgroup label="Eastern Time Zone">
                                                                    <option value="CT">
                                                                        Connecticut
                                                                    </option>
                                                                    <option value="DE">
                                                                        Delaware
                                                                    </option>
                                                                    <option value="FL">
                                                                        Florida
                                                                    </option>
                                                                    <option value="GA">
                                                                        Georgia
                                                                    </option>
                                                                    <option value="IN">
                                                                        Indiana
                                                                    </option>
                                                                    <option value="ME">
                                                                        Maine
                                                                    </option>
                                                                    <option value="MD">
                                                                        Maryland
                                                                    </option>
                                                                    <option value="MA">
                                                                        Massachusetts
                                                                    </option>
                                                                    <option value="MI">
                                                                        Michigan
                                                                    </option>
                                                                    <option value="NH">
                                                                        New
                                                                        Hampshire
                                                                    </option>
                                                                    <option value="NJ">
                                                                        New
                                                                        Jersey
                                                                    </option>
                                                                    <option value="NY">
                                                                        New York
                                                                    </option>
                                                                    <option value="NC">
                                                                        North
                                                                        Carolina
                                                                    </option>
                                                                    <option value="OH">
                                                                        Ohio
                                                                    </option>
                                                                    <option value="PA">
                                                                        Pennsylvania
                                                                    </option>
                                                                    <option value="RI">
                                                                        Rhode
                                                                        Island
                                                                    </option>
                                                                    <option value="SC">
                                                                        South
                                                                        Carolina
                                                                    </option>
                                                                    <option value="VT">
                                                                        Vermont
                                                                    </option>
                                                                    <option value="VA">
                                                                        Virginia
                                                                    </option>
                                                                    <option value="WV">
                                                                        West
                                                                        Virginia
                                                                    </option>
                                                                </optgroup>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-lg">
                                                        <div className="col">
                                                            <label
                                                                for="settingsAbout"
                                                                className="form-label"
                                                            >
                                                                About
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                id="settingsAbout"
                                                                maxlength="500"
                                                                rows="4"
                                                                aria-describedby="settingsAboutHelp"
                                                            ></textarea>
                                                            <div
                                                                id="emailHelp"
                                                                className="form-text"
                                                            >
                                                                Brief
                                                                information
                                                                about you to
                                                                display on
                                                                profile (max:
                                                                500 characters)
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-lg">
                                                        <div className="col">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="SettingsNewsLetter"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    for="SettingsNewsLetter"
                                                                >
                                                                    Receive
                                                                    notifications
                                                                    about
                                                                    updates
                                                                    &amp;
                                                                    maintenances
                                                                </label>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="btn btn-primary m-t-sm"
                                                            >
                                                                Update
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="security"
                                            role="tabpanel"
                                            aria-labelledby="security-tab"
                                        >
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="settings-security-two-factor">
                                                        <h5>
                                                            Two-Factor
                                                            Authentication
                                                        </h5>
                                                        <span>
                                                            Two-factor
                                                            authentication is
                                                            automatically
                                                            enabled on your
                                                            account, for
                                                            security reasons we
                                                            require all users to
                                                            authenticate with
                                                            SMS code or
                                                            authorized
                                                            third-party auth
                                                            apps. Read more
                                                            about our security
                                                            policy{" "}
                                                            <a href="#">here</a>
                                                            .
                                                        </span>
                                                    </div>
                                                    <div className="row m-t-xxl">
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsCurrentPassword"
                                                                className="form-label"
                                                            >
                                                                Current Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                aria-describedby="settingsCurrentPassword"
                                                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                                            />
                                                            <div
                                                                id="settingsCurrentPassword"
                                                                className="form-text"
                                                            >
                                                                Never share your
                                                                password with
                                                                anyone.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-xxl">
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsNewPassword"
                                                                className="form-label"
                                                            >
                                                                New Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                aria-describedby="settingsNewPassword"
                                                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-xxl">
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsConfirmPassword"
                                                                className="form-label"
                                                            >
                                                                Confirm Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                aria-describedby="settingsConfirmPassword"
                                                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-xxl">
                                                        <div className="col-md-6">
                                                            <label
                                                                for="settingsSmsCode"
                                                                className="form-label"
                                                            >
                                                                SMS Code
                                                            </label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    aria-describedby="settingsSmsCode"
                                                                    placeholder="&#9679;&#9679;&#9679;&#9679;"
                                                                />
                                                                <button
                                                                    className="btn btn-primary btn-style-light"
                                                                    id="settingsResentSmsCode"
                                                                >
                                                                    Resend
                                                                </button>
                                                            </div>
                                                            <div
                                                                id="settingsSmsCode"
                                                                className="form-text"
                                                            >
                                                                Code will be
                                                                sent to the
                                                                phone number
                                                                from your
                                                                account.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-lg">
                                                        <div className="col">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="settingsPasswordLogout"
                                                                    checked
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    for="settingsPasswordLogout"
                                                                >
                                                                    Log out from
                                                                    all current
                                                                    sessions
                                                                </label>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="btn btn-primary m-t-sm"
                                                            >
                                                                Change Password
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="integrations"
                                            role="tabpanel"
                                            aria-labelledby="integrations-tab"
                                        >
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="settings-integrations">
                                                        <div className="settings-integrations-item">
                                                            <div className="settings-integrations-item-info">
                                                                <img
                                                                    src="../../images/icons/jira_software.png"
                                                                    alt=""
                                                                />
                                                                <span>
                                                                    Plan, track,
                                                                    and manage
                                                                    your agile
                                                                    and software
                                                                    development
                                                                    projects in
                                                                    Jira.
                                                                </span>
                                                            </div>
                                                            <div className="settings-integrations-item-switcher">
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        className="form-check-input form-control-md"
                                                                        type="checkbox"
                                                                        id="settingsIntegrationOneSwitcher"
                                                                        checked
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="settings-integrations-item">
                                                            <div className="settings-integrations-item-info">
                                                                <img
                                                                    src="../../images/icons/confluence.png"
                                                                    alt=""
                                                                />
                                                                <span>
                                                                    Build,
                                                                    organize,
                                                                    and
                                                                    collaborate
                                                                    on work in
                                                                    one place
                                                                    from
                                                                    virtually
                                                                    anywhere.
                                                                </span>
                                                            </div>
                                                            <div className="settings-integrations-item-switcher">
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        className="form-check-input form-control-md"
                                                                        type="checkbox"
                                                                        id="settingsIntegrationTwoSwitcher"
                                                                        checked
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="settings-integrations-item">
                                                            <div className="settings-integrations-item-info">
                                                                <img
                                                                    src="../../images/icons/bitbucket.png"
                                                                    alt=""
                                                                />
                                                                <span>
                                                                    Build, test,
                                                                    and deploy
                                                                    with
                                                                    unlimited
                                                                    private or
                                                                    public space
                                                                    with
                                                                    Bitbucket.
                                                                </span>
                                                            </div>
                                                            <div className="settings-integrations-item-switcher">
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        className="form-check-input form-control-md"
                                                                        type="checkbox"
                                                                        id="settingsIntegrationThreeSwitcher"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="settings-integrations-item">
                                                            <div className="settings-integrations-item-info">
                                                                <img
                                                                    src="../../images/icons/sourcetree.png"
                                                                    alt=""
                                                                />
                                                                <span>
                                                                    A Git GUI
                                                                    that offers
                                                                    a visual
                                                                    representation
                                                                    of your
                                                                    repositories.
                                                                </span>
                                                            </div>
                                                            <div className="settings-integrations-item-switcher">
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        className="form-check-input form-control-md"
                                                                        type="checkbox"
                                                                        id="settingsIntegrationFourSwitcher"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
