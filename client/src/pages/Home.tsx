
import Layout from "../components/layouts/Layout";

import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Herotwo from "../components/sections/Herotwo";

import Source from "../components/ui-AZ/Source";

import CallToAction from "../components/sections/CallToAction";
import Features from "../components/sections/Features";
import Navbar from "../components/sections/Navbar";
import AboutUs from "../components/sections/AboutUs";

export default function Home() {

    return (
        <Layout>
            <Navbar />
            <Hero />
            {/* <Herotwo />
            <Source /> */}
            <Features />
            <AboutUs />
            <CallToAction />
            <Footer />
        </Layout>

    )
}
