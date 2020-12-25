import React, { useState } from 'react'
import FirestoreLogo from './images/Cloud-Firestore.png';
import AuthLogo from './images/Firebase-Authentication.png';

const StartPage = ({ handleConfigChange }) => {

    const [apiKey, setApiKey] = useState("");
    const [appId, setAppId] = useState("");
    const [projectId, setProjectId] = useState("");
    const [authPort, setAuthPort] = useState("9099");
    const [databasePort, setDatabasePort] = useState("8080");
    const [authConnectionOption, setAuthConnectionOption] = useState("Emulator");
    const [firestoreConnectionOption, setFirestoreConnectionOption] = useState("Emulator");


    const submitForm = (e) => {
        e.preventDefault();
        let config = {
            apiKey,
            appId,
            projectId,
            authDomain: projectId + ".firebaseapp.com",
            databaseURL: "https://" + projectId + ".firebaseio.com"
        }

        let settings = {
            auth: {
                useEmulator: authConnectionOption === "Emulator",
                port: authPort
            },
            firestore: {
                useEmulator: firestoreConnectionOption === "Emulator",
                port: databasePort
            }
        }

        handleConfigChange({
            config,
            settings
        })
    }

    return (
        <div>
            <div className="start-page-header">
                <h1>Welcome to the Fire Emulator Manager.</h1>
                <p>
                    You can use the tool to import/export data from Firestore (in JSON format) and generate and store dummy data. <br />
                    If you want to run this tool locally, please visit the Github repo for instructions.<br />
    We will be adding new features soon - including triggering cloud functions via the tool and generating code snippets for operations.<br /><br />

    Enter your Firebase configuration below to get started (make sure your emulator is started):
    </p>

            </div>
            <div className="start-page-config">
                <form onSubmit={submitForm}>
                    <div className="form-input-div">
                        <label htmlFor="apiKey">API Key</label>
                        <input type="text" name="apiKey" value={apiKey} onChange={(e) => setApiKey(e.target.value)} required />
                    </div>
                    <div className="form-input-div">
                        <label htmlFor="projectId">Project ID</label>
                        <input type="text" name="projectId" value={projectId} onChange={(e) => setProjectId(e.target.value)} required />
                    </div>
                    <div className="form-input-div">
                        <label htmlFor="appId">App ID</label>
                        <input type="text" name="appId" value={appId} onChange={(e) => setAppId(e.target.value)} required />
                    </div>

                    <img src={AuthLogo} alt="Firebase Authentication" />
                    <p>Auth Domain: <span className="orange">{projectId}.firebaseapp.com</span></p>
                    <div className="form-input-div">
                        <label htmlFor="authConnectionOption">Connection Option</label>
                        <select onChange={(e) => setAuthConnectionOption(e.target.value)} value={authConnectionOption} name="authConnectionOption">
                            <option value="Emulator">Emulator</option>
                            <option value="Live">Directly to Firebase</option>
                        </select>
                    </div>
                    {authConnectionOption === "Emulator" ?
                        <div className="form-input-div">
                            <label htmlFor="authPort">Authentication Port</label>
                            <input type="number" name="authPort" value={authPort} onChange={(e) => setAuthPort(e.target.value)} required />
                        </div> : null}

                    <img src={FirestoreLogo} alt="Firebase Cloud Firestore" />
                    <p>Database URL: <span className="orange">https://{projectId}.firebaseio.com</span></p>
                    <div className="form-input-div">
                        <label htmlFor="firestoreConnectionOption">Connection Option</label>
                        <select onChange={(e) => setFirestoreConnectionOption(e.target.value)} value={firestoreConnectionOption} name="firestoreConnectionOption">
                            <option value="Emulator">Emulator</option>
                            <option value="Live">Directly to Firebase</option>
                        </select>
                    </div>

                    {firestoreConnectionOption === "Emulator" ?
                        <div className="form-input-div">
                            <label htmlFor="databasePort">Database (Firestore) Port</label>
                            <input type="number" name="databasePort" value={databasePort} onChange={(e) => setDatabasePort(e.target.value)} required />
                        </div>
                        : null}
                    <input type="submit" value="Start Connection" />
                </form>
            </div>
        </div>

    )
}

export default StartPage
