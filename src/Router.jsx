import { createBrowserRouter } from "react-router-dom";
import NotFound from "./Pages/DefaultPages/NotFound.jsx";
import Admin_Dashboard from "./Pages/Admin Pages/Admin_Dashboard.jsx";
import Login from "./Pages/DefaultPages/Login.jsx";
import Signup from "./Pages/DefaultPages/Signup.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import GuestLayout from "./Layouts/GuestLayout.jsx";
import Admin_Records from "./Pages/Admin Pages/Admin_Records.jsx";
import Admin_Users from "./Pages/Admin Pages/Admin_Users.jsx";
import UserLayout from "./Layouts/UserLayout.jsx";
import User_Dashboard from "./Pages/UserPages/User_Dashboard.jsx";
import User_Records from "./Pages/UserPages/User_Records.jsx";
import User_Users from "./Pages/UserPages/User_Users.jsx";
import Admin_Add_Patient from "./Pages/Admin Pages/Admin_Add_Patient.jsx";
import User_Add_Patient from "./Pages/UserPages/User_Add_Patient.jsx";
import Admin_View_Patient from "./Pages/Admin Pages/Admin_View_Patient.jsx";
import Admin_Edit_Patient from "./Pages/Admin Pages/Admin_Edit_Patient.jsx";
import User_View_Patient from "./Pages/UserPages/User_View_Patient.jsx";
import User_Edit_Patient from "./Pages/UserPages/User_Edit_Patient.jsx";
import Issuance from "./Pages/Admin Pages/Admin_Issuance.jsx";
import User_Issuance from "./Pages/UserPages/User_Issuance.jsx";
import Admin_View_User from "./Pages/Admin Pages/Admin_View_User.jsx";
import Admin_Edit_User from "./Pages/Admin Pages/Admin_Edit_User.jsx";
import User_View_User from "./Pages/UserPages/User_View_User.jsx";
import User_Edit_User from "./Pages/UserPages/User_Edit_User.jsx";

const router = createBrowserRouter([

/* GuestLayout / Login and Signup Page */
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ]
    },
    
/* AdminLayout / Admin Page */
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Admin_Dashboard />,
            },
            {
                path: "/records",
                element: <Admin_Records />,
            },
            {
                path: "/users",
                element: <Admin_Users />,
            },
            {
                path: "/add_patient",
                element: <Admin_Add_Patient />,
            },
            {
                path: "/view_patient",
                element: <Admin_View_Patient />,
            },
            {
                path: "/edit_patient",
                element: <Admin_Edit_Patient />,
            },
            {
                path: "/issuance",
                element: <Issuance />,
            },
            {
                path: "/view_user",
                element: <Admin_View_User/>
            },
            {
                path: "/edit_user",
                element: <Admin_Edit_User/>
            },
        ]
    },

/* UsersLayout / User Page */
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/user_dashboard",
                element: <User_Dashboard />,
            },
            {
                path: "/user_records",
                element: <User_Records />,
            },
            {
                path: "/user_users",
                element: <User_Users />,
            },
            {
                path: "/user_add_patient",
                element: <User_Add_Patient />,
            },
            {
                path: "/user_view_patient",
                element: <User_View_Patient/>
            },
            {
                path: "/user_edit_patient",
                element: <User_Edit_Patient/>
            },
            {
                path: "/user_issuance",
                element: <User_Issuance/>
            },
            {
                path: "/user_view_user",
                element: <User_View_User/>
            },
            {
                path: "/user_edit_user",
                element: <User_Edit_User/>
            },
        ]
    },
/* Not Found Page */
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;