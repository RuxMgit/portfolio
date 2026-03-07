<script lang="ts">
    let {text, color, bgColor} = $props()
</script>

<div class="description-box" style="--c: {bgColor}; --bg: {color}">
    {@html text}
</div>
<style>
    .description-box {
        position: relative;
        flex: 0 0 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2.5rem 3rem;
        box-sizing: border-box;
        color: var(--c);
        background: linear-gradient(110deg, var(--bg) 45%, color-mix(in srgb, var(--c) 20%, var(--bg)) 55%, var(--bg) 65%);
        background-size: 200% 100%;
        animation: shine 2.5s linear infinite;

        transition: padding 0.4s cubic-bezier(0.22, 1, 0.34, 1);
    }

    @keyframes shine {
        from { background-position: 0 0; }
        to   { background-position: -200% 0; }
    }
    a{
        color: black;
    }
</style>