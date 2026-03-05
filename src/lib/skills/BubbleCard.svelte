<script lang="ts">
    export interface BubbleData {
        id: number;
        label: string;
        color: string;
        iconPath: string;
        description: string;
    }

    interface Props {
        data: BubbleData;
        radius?: number;
        onclick: () => void;
    }

    let { data, radius = 44, onclick }: Props = $props();
</script>

<button
        class="ball"
        style="--color: {data.color}; width: {radius * 2}px; height: {radius * 2}px;"
        {onclick}
>
    <img
            class="ball-icon"
            src={data.iconPath}
            alt={data.label}
            draggable="false"
    />
    <span class="ball-label">{data.label}</span>
</button>

<style>
    .ball {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        user-select: none;
        touch-action: none;
        transition: transform 0.15s;
    }

    .ball:hover {
        transform: scale(1.08);
    }

    .ball-icon {
        width: 28px;
        height: 28px;
        object-fit: contain;
        filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
        pointer-events: none;
    }

    .ball-label {
        font-size: 9px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.9);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    }
</style>