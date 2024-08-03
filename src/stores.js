import { writable } from "svelte/store"
import { browser } from "$app/environment"

export const CupNames = writable(browser && localStorage.getItem("CupNames") || [])
CupNames.subscribe((val) => {
    if (browser) return (localStorage.CupNames = val)
})
export const CupMaps = writable(browser && localStorage.getItem("CupMaps") || [])
CupMaps.subscribe((val) => {
    if (browser) return (localStorage.CupMaps = val)
})
export const CupImages = writable(browser && localStorage.getItem("CupImages") || [])
CupImages.subscribe((val) => {
    if (browser) return (localStorage.CupImages = val)
})
export const CustomMaps = writable(browser && localStorage.getItem("CustomMaps") || [])
CustomMaps.subscribe((val) => {
    if (browser) return (localStorage.CustomMaps = val)
})