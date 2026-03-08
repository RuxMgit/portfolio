<script>
    import { onMount } from 'svelte';

    const events = [
        {
            date: '2025-2026',
            title: 'Cem\'In\'Eu',
            description: "Durant ma 3e année de BUT Informatique, j'ai eu l'opportunité de travailler à Cem'In'Eu en tant qu'alternant" +
                " fonctionnel et technique des applications S.I. .\n" +
                "Ma mission principale était de développer et maintenir des modules Odoo en Python et JavaScript. " +
                "Et d'assurer le développement d'une nouvelle application de réplication de de base de données Odoo en Kotlin-Compose.",
            color:"#cc151c"
        },
        {
            date: '2025',
            title: 'Centre Hospitalier Départemental Vendée',
            description: 'J\'ai effectué mon stage de 2e année de BUT Informatique à la Direction des Services Numériques ' +
                'du CHD Vendée, ma mission était au départ d\'apporter des améliorations a un outil de saisie de données de l\'Hôpital sur ' +
                'une ancienne version de .NET, mais après analyse du code, j\'ai proposé à mon tuteur de réécrire une grande partie de l\'application.\n' +
                'En effet, le code avait été écrit très rapidement lors de la période COVID, dû au besoin urgent de l\'outil ' +
                'et à un besoin en constante évolution, l\'application n\'étais pas testable et difficile a maintenir.\n' +
                'J\'ai donc entrepris pendant toute la durée de mon stage de réécrir et sécuriser l\'application en constante' +
                ' communication avec les utilisateurs via l\'organisation de recettes et de plusieurs entretiens. ',
            color:"#00764b"
        },
        {
            date: '2024',
            title: 'Maitre Coq',
            description: "Durant l'été 2024 j'ai été employé chez Maitre Coq au pôle barquettes pour assurer la mise en" +
                " barquette et la psée sur des lignes de production, et des tâches physiques comme l'approvisionnement de ces lignes.",
            color:"#160b8b"
        },
        {
            date: '2021-2023',
            title: 'Centre Technique Municipal La Ferrière',
            description: 'Durant les vacances scolaires, j\'effectuais des missions proposées par la commune de la Ferrière en Vendée.' +
                'Ces missions consistaient principalement à aider le Centre Technique Municipal sur divers aspects' +
                'comme les travaux d\'espaces verts, ou de voierie, d\'autres types de travaux étaient également le dé' +
                'ménagement de la bibliothèque de la commune, des travaux dans l\'école publique ou bien encore du tri de vêtements pour le secours catholique',
            color:"#a42d66"
        }
    ];

    onMount(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/gh/squarechip/timeline@master/dist/css/timeline.min.css';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/squarechip/timeline@master/dist/js/timeline.min.js';
        script.onload = () => {
            timeline(document.querySelectorAll('.timeline'), {
                mode: 'vertical',
                verticalStartPosition: 'left',
            });
        };
        document.head.appendChild(script);
    });
</script>

<div class="timeline-container">
    <div class="timeline">
        <div class="timeline__wrap">
            <div class="timeline__items">
                {#each events as event}
                    <div class="timeline__item">
                        <div class="timeline__content">
                            <span class="date">{event.date}</span>
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: coolFont;
        src: url("/fonts/secretFont_aalt.otf");
    }
    .timeline-container {
        padding-top: 5rem;
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
    }

    .timeline {
        width: 100%;
        padding: 2rem;
    }
    .timeline::before{
        background-color: white !important;
        opacity: 0.25;
    }
    :global(.timeline__item::after) {
        background-color: transparent !important;
        border: none !important;
        border-radius: 0 !important;
        content: '\F0A0' !important;
        font-family: coolFont, serif !important;
        font-size: 25rem !important;
        color: var(--border) !important;
        width: auto !important;
        height: auto !important;
        position: absolute !important;
        top: 57.5% !important;
        left: 100.15% !important;
        right: auto !important;
        transform: translate(-50%, -50%) !important;
        transition: transform 0.5s ease, color 0.4s ease !important;
    }

    :global(.timeline__item--right::after) {
        left: 0.15% !important;
    }
    .date {
        font-size: 0.85rem;
        font-weight: 600;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    h2 {
        margin: 0.3rem 0;
        font-size: 1.2rem;
    }

    p {
        margin: 0;
        font-size: 0.95rem;
    }

    :global(.timeline__content) {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #0d0d0d !important;
        border: 2px solid var(--border) !important;
        transition: border-color 0.4s ease;
        border-radius: 3rem !important;
        overflow: hidden;
        color: white !important;
    }
    @keyframes float {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(5px);
        }

        100% {
            transform: translateY(0);
        }
    }
</style>