import { useMemo } from 'react';

import Angular from "../assets/img/BadgeImg/Angular.svg";
import Bootstrap from "../assets/img/BadgeImg/Bootstrap.svg";
import Java from "../assets/img/BadgeImg/Java.svg";
import JS from "../assets/img/BadgeImg/JS.svg";
import MySql from "../assets/img/BadgeImg/MySql.svg";
import NodeJs from "../assets/img/BadgeImg/NodeJs.svg";
import ReactImg from "../assets/img/BadgeImg/react.svg";
import Spring from "../assets/img/BadgeImg/spring.svg";
import Tailwind from "../assets/img/BadgeImg/Tailwind.svg";
import TS from "../assets/img/BadgeImg/TS.svg";
import Vite from "../assets/img/BadgeImg/Vite.svg";
import Phaser from "../assets/img/BadgeImg/phaser.svg";
import HTML from "../assets/img/BadgeImg/html.svg";
import CSS from "../assets/img/BadgeImg/css.svg";
import ASPNET from "../assets/img/BadgeImg/ASPNET.svg";
import Azure from "../assets/img/BadgeImg/Azure.svg";
import Blazor from "../assets/img/BadgeImg/Blazor.svg";
import CSharp from "../assets/img/BadgeImg/CSharp.svg";
import SQLServer from "../assets/img/BadgeImg/SQLServer.svg";

export const useBadges = () => {
    const badgeTypes = useMemo(() => [
        {
            type: "JavaScript",
            text: "JavaScript",
            img: JS,
            background: "bg-yellow-500/85",
            textColor: "text-yellow-200"
        },
        {
            type: "MySQL",
            text: "MySQL",
            img: MySql,
            background: "bg-blue-500/65",
            textColor: "text-orange-200"
        },
        {
            type: "Angular",
            text: "Angular",
            img: Angular,
            background: "bg-red-400/85",
            textColor: "text-red-200"
        },
        {
            type: "Bootstrap",
            text: "Bootstrap",
            img: Bootstrap,
            background: "bg-indigo-400/85",
            textColor: "text-indigo-200"
        },
        {
            type: "React",
            text: "React",
            img: ReactImg,
            background: "bg-cyan-600/85",
            textColor: "text-cyan-200"
        },
        {
            type: "Tailwind",
            text: "Tailwind",
            img: Tailwind,
            background: "bg-sky-700/85",
            textColor: "text-sky-200"
        },
        {
            type: "Spring",
            text: "Spring",
            img: Spring,
            background: "bg-green-700/85",
            textColor: "text-green-200"
        },
        {
            type: "Vite",
            text: "Vite",
            img: Vite,
            background: "bg-indigo-600/85",
            textColor: "text-yellow-200"
        },
        {
            type: "Java",
            text: "Java",
            img: Java,
            background: "bg-orange-400/75",
            textColor: "text-blue-200"
        },
        {
            type: "NodeJS",
            text: "Node.js",
            img: NodeJs,
            background: "bg-emerald-600/85",
            textColor: "text-emerald-200"
        },
        {
            type: "TypeScript",
            text: "TypeScript",
            img: TS,
            background: "bg-blue-400/85",
            textColor: "text-blue-200"
        },
        {
            type: "Phaser",
            text: "Phaser",
            img: Phaser,
            background: "bg-indigo-500/85",
            textColor: "text-slate-200"
        },
        {
            type: "HTML",
            text: "HTML",
            img: HTML,
            background: "bg-orange-400/85",
            textColor: "text-orange-200"
        },
        {
            type: "CSS",
            text: "CSS",
            img: CSS,
            background: "bg-blue-400/85",
            textColor: "text-slate-200"
        },
        {
            type: "ASP.NET",
            text: "ASP.NET",
            img: ASPNET,
            background: "bg-indigo-700/85",
            textColor: "text-indigo-200"
        },
        ,
        {
            type: "C#",
            text: "C#",
            img: CSharp,
            background: "bg-indigo-700/85",
            textColor: "text-indigo-200"
        },
        ,
        {
            type: "Blazor",
            text: "Blazor",
            img: Blazor,
            background: "bg-violet-600/85",
            textColor: "text-violet-200"
        },
        {
            type: "SQL-Server",
            text: "SQL-Server",
            img: SQLServer,
            background: "bg-sky-700/85",
            textColor: "text-sky-200"
        },
        {
            type: "Azure",
            text: "Azure",
            img: Azure,
            background: "bg-sky-600/85",
            textColor: "text-sky-200"
        },
    ], []);

    const getBadge = (type) => {
        return badgeTypes.find(badge => badge.type.toLowerCase() === type.toLowerCase());
    };

    const getAllBadges = () => {
        return badgeTypes;
    };

    return {
        getBadge,
        getAllBadges,
        badgeTypes
    };
};