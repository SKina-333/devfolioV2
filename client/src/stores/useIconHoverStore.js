import { defineStore } from 'pinia';

export const useIconHoverStore = defineStore('iconHover', {
    state: () => ({
        hover: false,
    }),
    actions: {
        isHover() {
            this.hover = true;
        },
        notHover() {
            this.hover = false;
        },
    },
});