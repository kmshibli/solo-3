
import Profile from './Images/Profile.jpg';
import './App.css';

export default function App() {
    return (
        <div className='Main-body'>
            <div className='Second-body'>
                <header className='Header'>
                    <div>
                        <img src={Profile} alt="profile" />
                    </div>
                </header>
                <main className='Main-content'>
                    <div className="Main-content-div">

                        <div className='Intro'>
                            <h1>Laura Smith</h1>
                            <h3>Frontend Developer</h3>
                            <h5>laurasmith.website</h5>
                            <div className="Button-div">

                                <button type='button' className='Btn-1'>
                                    <i class="fa-solid fa-envelope"></i>
                                    <p>Email</p>
                                </button>
                                <button type='button' className='Btn-2'>
                                    <i class="fa-brands fa-linkedin"></i>
                                    <p>LinkedIn</p>
                                </button>
                            </div>
                        </div>
                        <div className="Content-body">
                            <h2>About</h2>
                            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                            </p>
                            <h2>Interests</h2>
                            <p>
                                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                            </p>
                        </div>
                    </div>
                </main>
                <footer className='Footer'>
                    <div className="Icon-div">
                        <i class="fa-brands fa-square-twitter"></i>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-square-github"></i>
                    </div>
                </footer>
            </div>
        </div>
    )
}


