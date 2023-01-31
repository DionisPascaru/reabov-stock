import FontsView from "@/views/FontsView";
import ModelsView from "@/views/ModelsView";
// import SoundsView from "@/views/SoundsView";

export default [
    {
        path: '/',
        name: 'ModelsView',
        component: ModelsView
    },
    {
        path: '/fonts',
        name: 'FontsView',
        component: FontsView
    },
    // Sounds coming soon
    // {
    //     path: '/sounds',
    //     name: 'SoundsView',
    //     component: SoundsView
    // }
]
