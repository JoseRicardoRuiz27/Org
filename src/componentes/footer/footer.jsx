import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/IMG/footer.png)"}}>
        <div className="redes">
            <a href="#">
                <img src="/IMG/facebook.png"/>
            </a>
            <a href="#">
                <img src="/IMG/instagram.png"/>
            </a>
            <a href="#">
                <img src="/IMG/twitter.png"/>
            </a> 
        </div>
        <img src="/IMG/Logo.png"/>
        <strong>Idea de Alura</strong>
    </footer>
}

export default Footer