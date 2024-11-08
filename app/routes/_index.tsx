import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Kyu, Jax and Nala's Barkday Invitation!" },
    { name: "description", content: "Please Come to our birthday!" },
    { property: "og:title", content: "Kyu, Jax and Nala's Barkday Invitation" },
    { property: "og:description", content: "Please Come to our birthday!" },
    { property: "og:image", content: "https://furryfriendsinvite.vercel.app/barkday-image.png" },
    { property: "og:url", content: "https://furryfriendsinvite.vercel.app" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Please Come to our birthday!" },
    { name: "twitter:description", content: "Please Come to our birthday!" },
    { name: "twitter:image", content: "https://furryfriendsinvite.vercel.app/barkday-image.png" },
  ];
};

export default function Index() {
  return (
    <div>
      <section className="w-full h-[70vh] md:h-[90vh] items-center flex justify-center  background-sm">
        <div className="flex flex-col content-center text-center bg-[#F0F1EB] p-8 md:p-10 border-4 border-black mx-5">
          <div className="text-4xl md:text-6xl mb-4 font-cursive"><span className="text-[#E9B82C]">Kyu</span>, <span className="text-[#C1C4B1]">Jax</span> and <span className="text-[#E8652D]">Nala's</span></div>
          <div className="text-red-500 text-2xl md:text-4xl">1st</div>
          <div className="text-[#529DB8] text-5xl md:text-[5rem] font-extrabold uppercase space tracking-widest scale-y-[2] mt-5 md:mt-14 md:mb-10">
            Barkday!
          </div>
          {/* <div className="text-3xl">November 30th, 2024</div> */}
        </div>
      </section>
      <section className="w-full items-center flex justify-center bg-[#E9B82C] border-y-4 border-black">
        <div className="bg-[#F0F1EB] my-32 w-[800px] border-4 border-black mx-3">
          <div className="items-center flex flex-col justify-center w-[250px] md:w-[300px] mx-auto my-20 gap-7 text-center relative">
            {/* <img src="./cake1.png" className="w-60 absolute top-[-200px]"/> */}
            <div className="text-2xl font-mono leading-snug pt-5">
              Please join us to celebrate Kyu, Jax and Nala's 1st Birthday
            </div>
            <div className="text-sm font-mono leading-snug">
              <hr className="w-[20px] h-0.5 bg-black mx-auto my-1" />
              🐾 Dress up your dog as their favorite character, but if they prefer to keep it casual, that’s totally fine too – we just want to see their adorable faces!
              <hr className="w-[20px] h-0.5 bg-black mx-auto my-1" />
            </div>
            <div>
              When
              <hr className="w-[20px] h-0.5 bg-black mx-auto my-1" />
              November 30, 2024, 02:00 PM
            </div>
            <div>
              Where
              <hr className="w-[20px] h-0.5 bg-black mx-auto my-1" />
              Janella's Private Pool, Purok 6 Pritil, Ibayo, Guiguinto, Bulacan
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-[#529DB8]">
        <div className="flex flex-col justify-center w-[90%] mx-auto gap-7 text-center pb-10">
          <div className="text-2xl font-semibold leading-snug mt-10 bg-[#F0F1EB] border-4 border-black">
            For Direction
          </div>
          <div className="mapouter border-4 border-black">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                width="100%"
                height="385"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=771&height=385&hl=en&q=Janella’s Private Pool&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
              <a
                href="https://sprunkin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sprunki Incredibox
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
