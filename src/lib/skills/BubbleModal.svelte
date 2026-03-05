<script lang="ts">
    import type { BubbleData } from './BubbleCard.svelte';

    interface Props {
        bubble: BubbleData;
        onclose: () => void;
    }

    let { bubble, onclose }: Props = $props();
</script>

<div class="modal-backdrop" onclick={onclose} role="presentation">
    <div
            class="modal"
            onclick={(e) => e.stopPropagation()}
            style="--color: {bubble.color}"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
    >
        <button class="modal-close" onclick={onclose}>✕</button>
        <div class="modal-icon">
            <img src={bubble.iconPath} alt={bubble.label} />
        </div>
        <h2 class="modal-title" id="modal-title">{bubble.label}</h2>
        <p class="modal-desc">{bubble.description}</p>
        <button class="modal-cta" onclick={onclose}>Explorer →</button>
    </div>
</div>

<style>
    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        border: 1px solid color-mix(in srgb, var(--color) 30%, transparent);
        border-radius: 24px;
        padding: 48px 40px 40px;
        max-width: 380px;
        width: 90%;
        text-align: center;
        position: relative;
        box-shadow:
                0 0 60px color-mix(in srgb, var(--color) 20%, transparent),
                0 30px 80px rgba(0, 0, 0, 0.6);
        animation: popIn 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @keyframes popIn {
        from { opacity: 0; transform: scale(0.8) translateY(20px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
    }

    .modal-close {
        position: absolute;
        top: 16px;
        right: 16px;
        background: rgba(255, 255, 255, 0.08);
        border: none;
        color: rgba(255, 255, 255, 0.5);
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 12px;
        transition: background 0.2s, color 0.2s;
    }

    .modal-close:hover {
        background: rgba(255, 255, 255, 0.15);
        color: white;
    }

    .modal-icon {
        margin-bottom: 20px;
        animation: float 3s ease-in-out infinite;
    }

    .modal-icon img {
        width: 64px;
        height: 64px;
        object-fit: contain;
        filter: drop-shadow(0 0 20px var(--color));
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
    }

    .modal-title {
        font-family: 'Georgia', serif;
        font-size: 28px;
        font-weight: normal;
        color: white;
        margin: 0 0 16px;
        letter-spacing: 0.02em;
    }

    .modal-desc {
        color: rgba(255, 255, 255, 0.6);
        font-size: 15px;
        line-height: 1.7;
        margin: 0 0 32px;
    }

    .modal-cta {
        background: linear-gradient(
                135deg,
                var(--color),
                color-mix(in srgb, var(--color) 70%, white)
        );
        border: none;
        color: #0a0a0f;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 0.05em;
        padding: 12px 32px;
        border-radius: 50px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 4px 20px color-mix(in srgb, var(--color) 50%, transparent);
    }

    .modal-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px color-mix(in srgb, var(--color) 60%, transparent);
    }
</style>