import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Furry Friends Invite" },
    { name: "description", content: "Please Come to our birthday!" },
  ];
};

export default function Index() {
  return (
    <div>
      <section className="w-full h-[70vh] md:h-[90vh] items-center flex justify-center  background">
        <div className="flex flex-col content-center text-center bg-[#F0F1EB] p-10 border-4 border-black mx-5">
          <div className="text-6xl mb-4 font-cursive"><span className="text-[#E9B82C]">Kyu</span>, <span className="text-[#C1C4B1]">Jax</span> and <span className="text-[#E8652D]">Nala's</span></div>
          <div className="font-cursive text-red-500 text-4xl">1st</div>
          <div className="text-[#529DB8] text-6xl md:text-[5rem] font-cursive space tracking-widest scale-y-150 mt-4 md:mt-10">
            Barkday!
          </div>
          {/* <div className="text-3xl">November 30th, 2024</div> */}
        </div>
      </section>
      <section className="w-full items-center flex justify-center bg-[#E9B82C] border-y-4 border-black">
        <div className="bg-[#F0F1EB] h-[70vh] my-32 w-[800px] border-4 border-black mx-3">
          <div className="items-center flex flex-col justify-center w-[300px] mx-auto my-20 gap-7 text-center relative">
            {/* <img src="./cake1.png" className="w-60 absolute top-[-200px]"/> */}
            <div className="text-2xl font-mono leading-snug pt-10">
              Please join us to celebrate Kyu's 1st Birthday
            </div>
            <div>
              When
              <hr className="w-[20px] h-0.5 bg-black mx-auto my-1" />
              Sep 26, 2035, 10:00 AM
            </div>
            <div>
              Where
              <hr className="w-[20px] h-0.5 bg-black mx-auto my-1" />
              Dylan's 1st Birthday, 500 Terry A Francois Blvd, San Francisco, CA
              94158, USA
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-[#529DB8]">
        <div className="flex flex-col justify-center w-[300px] mx-auto gap-7 text-center pb-10">
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
