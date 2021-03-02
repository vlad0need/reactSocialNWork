import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div class='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer  />}/>
                <Route path='/profile'
                       render={() => <ProfileContainer />}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/users' render={() => <UsersContainer />}/>
            </div>


        </div>

    );
}

export default App;

