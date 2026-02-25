<script lang="ts">
    let {buttonText, onClick, buttonPath} = $props();

    function clickButton(){
        onClick(buttonPath)
    }
</script>

<!-- From Uiverse.io by Awadhesh684827 -->
<button class="btn-glitch-fill" onclick={clickButton} >
    <span class="text"> {buttonText}</span>
    <span class="text-decoration"> _</span>
    <span class="decoration">⇒</span>
</button>

<style>
    /* From Uiverse.io by Awadhesh684827 */
    [class*="btn-glitch-"] {
        display: inline-block;
        font-family: "VT323", monospace;
        border: 1px solid rgb(255, 255, 255);
        color: rgb(255, 255, 255);
        padding: 10px 13px;
        min-width: 175px;
        line-height: 1.5em;
        white-space: nowrap;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 15px;

        .text,
        .decoration {
            display: inline-block;
        }

        .decoration {
            display: inline-block;
        }

        &:hover,
        &:focus {
            animation-name: glitch;
            animation-duration: 0.2s;
            background-color: yellow;
            color: #000000;
            border: 1px solid yellow;

            .text-decoration {
                animation-name: blink;
                animation-duration: 0.1s;
                animation-iteration-count: infinite;
            }

            .decoration {
                animation-name: blink;
                animation-duration: 0.1s;
                animation-iteration-count: infinite;
            }
        }

        &:active {
            background: none;
            color: yellow;

            .text-decoration {
                animation-name: none;
            }

            .decoration {
                animation-name: none;
            }

            :before,
            :after {
                display: none;
            }
        }
    }

    @keyframes glitch {
        25% {
            background-color: red;
            transform: translateX(-10px);
            letter-spacing: 10px;
        }

        35% {
            background-color: green;
            transform: translate(10px);
        }

        59% {
            opacity: 0;
        }

        60% {
            background-color: blue;
            transform: translate(-10px);
            filter: blur(5px);
        }

        100% {
            background-color: yellow;
            blur:5px;
        }
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }

    @keyframes shrink {
        100% {
            width: 10%;
        }
    }

</style>