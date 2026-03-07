<dialog
        style="border-color: {bubble.color};"
        bind:this={dialog}
        onclose={onclose}
        onclick={(e) => { if (e.target === dialog) onclose() }}
>

    <img src={bubble.iconPath} alt="icon" class="modalIcon">
    <p></p>
    <p>
        {@html bubble.description}
    </p>

</dialog>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<script lang="ts">
    import type { BubbleData } from './BubbleCard.svelte';

    let dialog = $state();

    interface Props {
        bubble: BubbleData;
        onclose: () => void;
    }
    let { bubble, onclose }: Props = $props();

    $effect(() => {
        dialog.showModal();
    });
</script>

<style>
    dialog {
        display: flex;
        flex-direction: column;
        max-width: 50%;
        border-radius: 25px;
        align-items: center;
        padding: 2rem;
    }

    dialog > div {
        padding: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modalIcon {
        max-width: 20%;
        animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-15px);
        }

        100% {
            transform: translateY(0);
        }
    }

</style>
