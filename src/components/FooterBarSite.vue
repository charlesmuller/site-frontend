<template>
    <footer class="main-footer">
        <div class="footer-content">
            <!-- Seção esquerda com foto e informações -->
            <div class="footer-left">
                <div class="footer-profile">
                    <img src="/foto-perfil.jpg" alt="Charles Müller" class="footer-avatar">
                    <div class="footer-info">
                        <h3>Charles Müller</h3>
                        <p class="footer-title">Full Stack Developer</p>
                        <p class="footer-description">Web Developer since 2021</p>
                    </div>
                </div>
            </div>

            <!-- Seção central com links de navegação -->
            <div class="footer-center">
                <div class="footer-section">
                    <h4>Navigation</h4>
                    <ul class="footer-links">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><a href="mailto:charlesmuller@rede.ulbra.br">Contact</a></li>
                    </ul>
                </div>
                
                <!-- <div class="footer-section">
                    <h4>Work</h4>
                    <ul class="footer-links">
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div> -->
            </div>

            <!-- Seção direita com redes sociais -->
            <div class="footer-right">
                <h4>Connect</h4>
                <div class="footer-social">
                    <a href="https://github.com/charlesmuller" target="_blank" class="social-link">
                        <img src="/src/assets/icons-github.svg" alt="GitHub">
                    </a>
                    <a href="https://www.instagram.com/charlesrullem/" target="_blank" class="social-link">
                        <img src="/src/assets/icons-instagram.svg" alt="Instagram">
                    </a>
                    <a href="https://www.linkedin.com/in/charles-m%C3%BCller-da-silva-535555108/" target="_blank" class="social-link">
                        <img src="/src/assets/icons-linkedin.svg" alt="LinkedIn">
                    </a>
                    <a href="https://x.com/charlesrullem" target="_blank" class="social-link">
                        <img src="/src/assets/icons-twitterx.svg" alt="Twitter/X">
                    </a>
                </div>
            </div>
        </div>

        <!-- Linha de copyright -->
        <div class="footer-bottom">
            <div class="footer-copyright">
                <p>© 2024 Charles Müller. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.main-footer {
    background-color: #E8E8E3;
    color: #212320;
    margin-top: 60px;
    padding: 40px 0 20px 0;
    font-family: var(--font-primary);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    align-items: start;
}

/* Seção esquerda - Perfil */
.footer-left {
    display: flex;
    flex-direction: column;
}

.footer-profile {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.footer-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #4a90e2;
}

.footer-info h3 {
    margin: 0 0 5px 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: #212320;
}

.footer-title {
    margin: 0 0 5px 0;
    font-size: 0.9rem;
    color: #4a90e2;
    font-weight: 400;
}

.footer-description {
    margin: 0;
    font-size: 0.85rem;
    color: #666666;
}

/* Seção central - Links */
.footer-center {
    display: flex;
    gap: 40px;
}

.footer-section h4 {
    margin: 0 0 15px 0;
    font-size: 1rem;
    font-weight: 500;
    color: #212320;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 8px;
}

.footer-links a {
    color: #666666;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #4a90e2;
}

/* Seção direita - Redes sociais */
.footer-right h4 {
    margin: 0 0 15px 0;
    font-size: 1rem;
    font-weight: 500;
    color: #212320;
}

.footer-social {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #d0d0d0;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-link:hover {
    background-color: #4a90e2;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

.social-link img {
    width: 20px;
    height: 20px;
    filter: brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
}

.social-link:hover img {
    filter: brightness(0) invert(1);
}

/* Linha de copyright */
.footer-bottom {
    border-top: 1px solid #cccccc;
    margin-top: 30px;
    padding-top: 20px;
}

.footer-copyright {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
}

.footer-copyright p {
    margin: 0;
    font-size: 0.85rem;
    color: #666666;
}

/* Responsividade */
@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }

    .footer-profile {
        flex-direction: column;
        text-align: center;
    }

    .footer-center {
        justify-content: center;
        gap: 30px;
    }

    .footer-social {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .main-footer {
        padding: 25px 0 15px 0;
        margin-top: 30px;
    }

    .footer-content {
        padding: 0 10px;
        gap: 20px;
    }

    .footer-center {
        flex-direction: column;
        gap: 15px;
    }

    .footer-profile {
        gap: 15px;
    }

    .footer-avatar {
        width: 45px;
        height: 45px;
    }

    .footer-info h3 {
        font-size: 1.1rem;
        margin-bottom: 5px;
    }

    .footer-title {
        font-size: 0.85rem;
    }

    .footer-description {
        font-size: 0.8rem;
    }

    .footer-section h4 {
        font-size: 0.95rem;
        margin-bottom: 8px;
    }

    .footer-links li {
        margin-bottom: 6px;
    }

    .footer-links a {
        font-size: 0.8rem;
    }

    .footer-social {
        gap: 10px;
    }

    .social-link {
        width: 32px;
        height: 32px;
    }

    .social-link img {
        width: 14px;
        height: 14px;
    }

    .footer-copyright p {
        font-size: 0.75rem;
    }
}

@media (max-width: 360px) {
    .main-footer {
        padding: 20px 0 10px 0;
        margin-top: 25px;
    }

    .footer-content {
        padding: 0 8px;
        gap: 15px;
    }

    .footer-avatar {
        width: 40px;
        height: 40px;
    }

    .footer-info h3 {
        font-size: 1rem;
    }

    .footer-title {
        font-size: 0.8rem;
    }

    .footer-description {
        font-size: 0.75rem;
    }

    .footer-section h4 {
        font-size: 0.9rem;
    }

    .footer-links a {
        font-size: 0.75rem;
    }

    .social-link {
        width: 30px;
        height: 30px;
    }

    .social-link img {
        width: 12px;
        height: 12px;
    }
}

@media (max-width: 320px) {
    .main-footer {
        padding: 15px 0 8px 0;
        margin-top: 20px;
    }

    .footer-content {
        padding: 0 5px;
        gap: 12px;
    }

    .footer-avatar {
        width: 35px;
        height: 35px;
    }

    .footer-info h3 {
        font-size: 0.9rem;
    }

    .footer-title {
        font-size: 0.75rem;
    }

    .footer-description {
        font-size: 0.7rem;
    }

    .footer-section h4 {
        font-size: 0.85rem;
    }

    .footer-links a {
        font-size: 0.7rem;
    }

    .social-link {
        width: 28px;
        height: 28px;
    }

    .social-link img {
        width: 11px;
        height: 11px;
    }

    .footer-copyright p {
        font-size: 0.7rem;
    }
}
</style>