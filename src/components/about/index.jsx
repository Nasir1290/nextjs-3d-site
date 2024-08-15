import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            35+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>



        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://camo.githubusercontent.com/76dea3329e40aafc84ec150bfe1855ca23d32b2a6a9ad44373f4222ef2c0e765/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4e617369723132393026686964655f7469746c653d66616c736526686964655f72616e6b3d66616c73652673686f775f69636f6e733d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d747275652664697361626c655f616e696d6174696f6e733d66616c7365267468656d653d64726163756c61266c6f63616c653d656e26686964655f626f726465723d66616c7365266f726465723d31"
            alt="Nasir"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://camo.githubusercontent.com/5e4c991f67e3a64f3dbe7d7dd917a13390ed19cf7a52af83d84135b9386b5e31/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d4e6173697231323930266c6f63616c653d656e26686964655f7469746c653d66616c7365266c61796f75743d636f6d7061637426636172645f77696474683d333230266c616e67735f636f756e743d39267468656d653d64726163756c6126686964655f626f726465723d66616c7365266f726465723d32"
            alt="Nasir"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://camo.githubusercontent.com/6d080ed2d2fa6ea9d43c47f5d98608d5620ada1b665877de3a71fc03e1f34a34/68747470733a2f2f73747265616b2d73746174732e64656d6f6c61622e636f6d3f757365723d4e6173697231323930266c6f63616c653d656e266d6f64653d6461696c79267468656d653d6461726b26686964655f626f726465723d66616c736526626f726465725f7261646975733d35266f726465723d33"
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Nasir"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>  */}

      </div>
    </section>
  );
};

export default AboutDetails;
