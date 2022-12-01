"use client"

import { useEffect } from "react"

import BackgroundDeveloper from "../components/backgroundText"
// Linea 4 traera el hook useEffect

import HeadText from "../components/headText"
import Projects from "../components/projects"
import CallToAction from "../components/callToAction"
import Footer from "../components/footer"

// Linea 8 importamos el componente headText




export default function HomePage () {
    return <>
        <div className="row">
            <BackgroundDeveloper/>
            <HeadText/>
            <Projects/>
            <CallToAction/>
            <hr className="w-85 marginSection justify-content-center"></hr>
            <Footer/>
        </div>
    </>
}