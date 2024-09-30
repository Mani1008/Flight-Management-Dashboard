"use client"
import Layout from "../components/layout"
import Companieslist from "./companieslist"

const Companies = () => {
    return (
        <>
            <Layout>
                {/* <h2 className="text-xl font-bold">Companies</h2> */}
                <Companieslist></Companieslist>
            </Layout>
        </>
    )
}

export default Companies