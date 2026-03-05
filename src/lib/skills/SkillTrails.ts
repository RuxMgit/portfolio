import { writable } from 'svelte/store'

export interface BallTrailData {
    id: number
    color: string
    position: { x: number; y: number }
}

export const ballTrails = writable<BallTrailData[]>([])