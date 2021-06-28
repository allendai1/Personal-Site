import Cake_icon from "./Cake_icon.svg"
import Diary_icon from "./Diary_icon.svg"
import Location_icon from "./Location_icon.svg"
import Mail_icon from "./Mail_icon.svg"
import Search_icon from "./search.svg"
import Gatsby from "./Gatsby.svg"
import Firebase from "./Firebase.svg"
import JavaScript from "./JavaScript.svg"
import GraphQL from "./GraphQL.svg"
import Bootstrap from "./Bootstrap.svg";
import TypeScript from "./TypeScript.svg";
import React from "./React.svg";
import Socketio from "./Socketio.svg"
import Github from "./Github.svg"

interface IMAGES {
    [index: string]: string;
    Cake_icon: string;
    Diary_icon: string;
    Location_icon: string;
    Mail_icon: string;
    Search_icon: string;
    Gatsby: string;
    Firebase: string;
    JavaScript: string;
    GraphQL: string;
    Bootstrap: string;
    TypeScript: string;
    React: string;
}

/**
 * Array of Dark images that require invert on dark mode
 */
export const requiresInvert: Array<string> = [
    "Bootstrap", "React", "GraphQL", "Socketio"
]
/**
 * Object of all images used in the site
 */
const IMAGES: IMAGES = {
    Cake_icon,
    Diary_icon,
    Location_icon,
    Mail_icon,
    Search_icon,
    Gatsby,
    Firebase,
    JavaScript,
    GraphQL,
    Bootstrap,
    TypeScript,
    React,
    Socketio,
    Github,
}
export default IMAGES;
