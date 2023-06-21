import Image from 'next/image';
import { Header, Intro, Contact, About, Projects, Skills } from './components';
import { client } from '../sanity-client';


const getData = async () => {
  const query = `{ 
    "about": *[_type == "about"],
    "projects": *[_type == "projects"],
    "skills": *[_type == "skills"],
    "experiences": *[_type == "experiences"],
    "me": *[_type == "me"],
  }`;

  const res = client.fetch(query);
  console.log((await res).about, (await res).experiences, (await res).skills);

  return await res;
}

export default async function Home() {
  const {about, me, projects, skills, experiences } = await getData();

  return (
    <>
    <Header />
    <Intro me={me} />
    <About abouts={about} />
    <Projects projects={projects} />
    <Skills skills={skills} experiences={experiences} />
    <Contact />
    </>
  )
}
