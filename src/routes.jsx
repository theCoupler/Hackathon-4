import App from "./App";
import Artist from "./Artist"


const routes = [
    {
        path: '/',
        element: <App/>
    },

    {
        path: '/artist/:id',
        element: <Artist/>
    }
]

export default routes; 