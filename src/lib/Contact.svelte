<div class="contact-container">
    <div class="left-col">
        <div class="contact-title">
            <span class="label">Contactez-moi</span>
            <div class="title-line"></div>
        </div>

        <div class="contact-infos">
            <a href="mailto:eliottmorisset85@gmail.com" class="contact-link">
                <span class="icon">✉</span>
                eliottmorisset85@gmail.com
            </a>
            <a href="https://github.com/RuxMgit" target="_blank" class="contact-link">
                <span class="icon">⌥</span>
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/eliott-morisset-789568304/" target="_blank" class="contact-link">
                <span class="icon">in</span>
                LinkedIn
            </a>
        </div>
    </div>

    <div class="right-col">
        <p class="thanks-title">Remerciements</p>
        <ul class="thanks-list">
            <li>
                <span class="thanks-name">RAK</span>
                — illustrations de fond super cool et des supers conseils pour le design
                <a href="https://linktr.ee/rak_inc" target="_blank" class="thanks-name">trouvez ses créations ici!!</a>
            </li>
            <li>
                <span class="thanks-name">Ami Précieux 65</span>
                — GIGANTESQUE aide sur la partie code et design tout au long du développement
            </li>
            <li>
                <span class="thanks-name">Novasanity</span>
                — assistance sur la partie 3D
            </li>
            <li>
                <span class="thanks-name">Angy-Milkshake</span>
                — soutien moral tout au long du développement
            </li>
            <li>
                <span class="thanks-name">NokNok</span>
                — inspiration et motivation pour faire ce portfolio et sagesse Jenkinsesque
            </li>
        </ul>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');

    .contact-container {
        padding-top: 8rem;
        padding-bottom: 4rem;
        display: flex;
        gap: 6rem;
        max-width: 900px;
        margin: 0 auto;
        font-family: 'DM Mono', monospace;
    }

    .left-col {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        flex-shrink: 0;
    }

    .contact-title {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .label {
        font-family: 'DM Serif Display', serif;
        font-size: 2rem;
        color: var(--title);
        letter-spacing: -0.02em;
        transition: color 0.4s ease;
    }

    .title-line {
        width: 40px;
        height: 2px;
        background: var(--border);
        transition: background 0.4s ease;
    }

    .contact-infos {
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
    }

    .contact-link {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        color: var(--artist);
        text-decoration: none;
        font-size: 0.8rem;
        letter-spacing: 0.03em;
        transition: color 0.4s ease;
    }

    .contact-link:hover,
    a.thanks-name:hover {
        color: var(--glow);
    }

    .icon {
        font-style: normal;
        font-size: 0.75rem;
        width: 1.2rem;
        text-align: center;
        color: var(--border);
        opacity: 0.8;
        transition: color 0.4s ease;
    }

    .right-col {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        border-left: 1px solid color-mix(in srgb, var(--border) 30%, transparent);
        padding-left: 4rem;
        transition: border-left-color 0.4s ease;
    }

    .thanks-title {
        font-family: 'DM Serif Display', serif;
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--border);
        margin: 0;
        transition: color 0.4s ease;
    }

    .thanks-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
    }

    .thanks-list li {
        font-size: 0.78rem;
        color: color-mix(in srgb, var(--artist) 60%, transparent);
        line-height: 1.5;
        transition: color 0.4s ease;
    }

    .thanks-name {
        color: var(--artist);
        font-weight: 400;
        text-decoration: none;
        transition: color 0.4s ease;
    }
</style>