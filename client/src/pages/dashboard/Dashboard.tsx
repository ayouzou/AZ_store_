import { useEffect } from "react";
import useAuth from "../../hooks/auth/useAuth";
import Layout from "../../components/layouts/Layout";
import Card from "./components/Card";
import ChartTwo from "./components/ChartTwo";
import ChartOne from "./components/ChartOne";
import ChartThree from "./components/ChartThree";

const Dashboard = () => {
    const { auth } = useAuth()

    useEffect(() => {
        if (!auth.isAuthenticated) {
            window.location.href = '/login'
        }
    }, [auth])

    return (
        <Layout>
            <div className="h-screen p-5  overflow-auto">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 m-5">
                    <Card amount="$3.456K" label="Total views" percentage="0.43%" />
                    <Card amount="$3.456K" label="Total views" percentage="0.43%" />
                    <Card amount="$3.456K" label="Total views" percentage="0.43%" />
                    <Card amount="$3.456K" label="Total views" percentage="0.43%" />
                </div>
                <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 m-5">
                    <ChartOne />
                    <ChartTwo />
                    <ChartThree />
                </div>
            </div>
        </Layout>
    )
}
export default Dashboard