import About from "../pages/about";
import Login from "../pages/login";
import Posts from "../pages/post";
import PostIdPage from "../pages/postIdPage";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
]

export const publicRoutes = [
    {path: '/login', component: Login},
]