import FontsView from "@/views/FontsView";
import ModelsView from "@/views/ModelsView";
import SoundsView from "@/views/SoundsView";

export default [
    {
        path: '/fonts',
        name: 'FontsView',
        component: FontsView
    },
    {
        path: '/',
        name: 'ModelsView',
        component: ModelsView
    },
    {
        path: '/sounds',
        name: 'SoundsView',
        component: SoundsView
    }
]