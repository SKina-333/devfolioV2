import { defineStore } from "pinia";

export const useProjectModalStore = defineStore("projectModal", {
    state: () => ({
        isOpen: false,
        /** 
         * @type {null | { title: string, description: string, techStack: string, recommendation: string, img: string }}
         */
        item: null,
    }),
    actions: {
        open() {
            this.isOpen = true;
        },
        close() {
            this.isOpen = false;
        },
        toggle() {
            this.isOpen = !this.isOpen;
        },
        /**
         * @param {{ title: string, description: string, techStack: string, recommendation: string, img: string }} item
         */
        setItem(item) {
            this.item = item;
        },
    },
});
