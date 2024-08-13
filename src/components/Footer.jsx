import { useState, useEffect } from "react";

export default function Footer() {

    const [user, setUser] = useState({});

    const getUser = async() => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <footer>
            <div>
                <section>
                    <h4>{user.name}</h4>
                    <address>
                        <p>40 Rue Laure Dieblod <br/>69009 Lyon, France</p>
                        <p>Téléphone : 06 20 30 40 50</p>
                    </address>
                    <div>
                        <a title="GitHub" href={user.html_url} target="_blank" rel="noreferrer nofollow"><i className="fa-brands fa-github fa-xl" style={{color: '#444444'}}></i></a>
                        <a title="Twitter" href="#" target="_blank" rel="noreferrer nofollow"><i className="fa-brands fa-square-twitter fa-xl" style={{color: '#444444'}}></i></a>
                        <a title="Linkedin" href="#" target="_blank" rel="noreferrer nofollow"><i className="fa-brands fa-linkedin fa-xl" style={{color: '#444444'}}></i></a>
                    </div>
                </section>
                <section>
                    <h4>Liens utiles</h4>
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Accueil</a></li>
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">A propos</a></li>
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Services</a></li>
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Me contacter</a></li>
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Mentions légales</a></li>
                    </ul>
                </section>
                <section>
                    <h4>Mes dernières réalisations</h4>
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Fresh food</a></li>
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Restaurant Akira</a></li>
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Espace bien-être</a></li>
                    </ul>
                </section>
                <section>
                    <h4>Mes derniers articles</h4>
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Coder son site en HTML/CSS</a></li>
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Vendre ses produits sur le web</a></li>
                        <li><span className="fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><a href="#">Se positionner sur Google</a></li>
                    </ul>
                </section>
            </div>
            <small>&copy; Designed by John Doe</small>
        </footer>    
    )
};