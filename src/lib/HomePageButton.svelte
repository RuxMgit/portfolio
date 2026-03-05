<script lang="ts">
    let {onButtonClick} = $props()

</script>

<style>

    @font-face {
        font-family: coolFont;
        src: url("/fonts/secretFont.otf")
    }

    button {
        width: 50px;
        height: 50px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(44, 44, 44);
        border-radius: 50%;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
        border: none;
    }
    .rotating:hover{
        animation: rotating 1s ease-in-out infinite 0.2s;
    }

    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(180deg);
        }
    }

    p {
        font-family: coolFont,serif;
        font-size: 8rem;
        margin: 0;
        line-height: 1;
        transform: translateY(0.3rem)
    }
    :global(.home-page-button) {
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        z-index: 100;
    }
</style>

<div class="home-page-button">
    <button class="rotating" onclick={()=>onButtonClick("home")}>
        <p>{"\uF0A0"}</p>
    </button>
</div>
