import CoffeeShop from "../page/CoffeeShop";
import Home from "../page/home";
import Jobs from "../page/Jobs";
import Report from "../page/Report";
import Register from "../page/Register";
import Login from "../page/Login";
import Profile from "../page/Profile";

const routes=[
    {
        patch: "/login",
        page: <Login/>
    },{
        patch: "/",
        page: <Home />
    }, {
        patch: "jobs",
        page: <Jobs />
    }, {
        patch: "report",
        page: <Report />
    },{
        patch: "/register",
        page: <Register />
    },{
        patch: "login",
        page: <Login />
    },{
        patch: "profile",
        page: <Profile />
    },
]

export default routes;