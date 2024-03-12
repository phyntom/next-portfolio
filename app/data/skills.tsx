import React from 'react'
import { BiLogoPostgresql, BiLogoSpringBoot } from 'react-icons/bi'
import { FaJava, FaNode, FaNodeJs } from 'react-icons/fa'
import { GrGraphQl } from 'react-icons/gr'
import { LuFileJson } from 'react-icons/lu'
import { SiApachekafka, SiExpress, SiMysql, SiNextdotjs, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import {
  TbBrandAws,
  TbBrandAzure,
  TbBrandCss3,
  TbBrandDocker,
  TbBrandGit,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandReact,
  TbBrandTypescript,
} from 'react-icons/tb'

export type Skill = {
  id: number
  name: string
  icon?: React.ReactNode
}

export const skills: Skill[] = [
  {
    id: 1,
    name: 'Javascript',
    icon: <TbBrandJavascript />,
  },
  {
    id: 2,
    name: 'Typescript',
    icon: <TbBrandTypescript />,
  },
  {
    id: 3,
    name: 'React',
    icon: <TbBrandReact />,
  },
  {
    id: 4,
    name: 'Next.js',
    icon: <SiNextdotjs />,
  },
  {
    id: 5,
    name: 'CSS',
    icon: <TbBrandCss3 />,
  },
  {
    id: 6,
    name: 'Java',
    icon: <FaJava />,
  },
  {
    id: 7,
    name: 'SpringBoot',
    icon: <BiLogoSpringBoot />,
  },
  {
    id: 8,
    name: 'Docker',
    icon: <TbBrandDocker />,
  },
  {
    id: 9,
    name: 'AWS',
    icon: <TbBrandAws />,
  },
  {
    id: 10,
    name: 'Azure',
    icon: <TbBrandAzure />,
  },
  {
    id: 11,
    name: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    id: 12,
    name: 'Express',
    icon: <SiExpress />,
  },
  {
    id: 13,
    name: 'Microservices',
  },
  {
    id: 14,
    name: 'REST',
    icon: <LuFileJson />,
  },
  {
    id: 15,
    name: 'GraphQL',
    icon: <GrGraphQl />,
  },
  {
    id: 16,
    name: 'Kafka',
    icon: <SiApachekafka />,
  },
  {
    id: 17,
    name: 'MongoDB',
    icon: <TbBrandMongodb />,
  },
  {
    id: 18,
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
  },
  {
    id: 19,
    name: 'MySQL',
    icon: <SiMysql />,
  },
  {
    id: 20,
    name: 'Git',
    icon: <TbBrandGit />,
  },
  {
    id: 21,
    name: 'Tailwindcss',
    icon: <SiTailwindcss />,
  },
]
