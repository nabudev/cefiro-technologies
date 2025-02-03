'use client';

const FooterJsx = () => {
  return (
    <footer className="mt-8 bg-violet-900 pt-9">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px]">
            <h1 className="text-white font-extrabold">
              <span className="text-rose-600">YOUR</span>LOGO
            </h1>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit non. Incidunt dolorum adipisci,
              tempore asperiores nemo odio facere officiis enim animi placeat eaque nesciunt alias beatae id, at dicta.
            </p>
            <div className="mt-[18px] flex gap-4">
              {["facebook", "linkdin", "instagram1", "twitter", "youtube"].map((icon) => (
                <a key={icon} className="hover:scale-110" target="_blank" href="#" rel="noreferrer">
                  <img
                    alt={`${icon} icon`}
                    loading="lazy"
                    width="36"
                    height="36"
                    src={`https://www.englishyaari.com/img/${icon}.svg`}
                    style={{ color: "transparent" }}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-[316px]">
            {[
              { icon: "phone", text: "+91 1800123444", subtext: "Support Number", href: "tel:+911800123444" },
              { icon: "email", text: "help@lorem.com", subtext: "Support Email", href: "mailto:help@lorem.com" },
              { icon: "location", text: "Sub Nerul, Mumbia, India, 123456", subtext: "Address", href: "#" },
            ].map((item, index) => (
              <div key={index} className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  {/* SVG icons here */}
                </div>
                <div className="ml-[18px]">
                  <a href={item.href} className="font-Inter text-[14px] font-medium text-white">
                    {item.text}
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-white">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div>
              <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Pages</p>
              <ul>
                {["Home", "News", "Contact", "Plans and pricing", "Terms and conditions", "Privacy policy"].map(
                  (page, index) => (
                    <li key={index} className="mt-[15px]">
                      <a
                        className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                        href={`/${page.toLowerCase().replace(/ /g, "-")}`}
                      >
                        {page}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              <p className="text-deutziawhite font-inter text-[18px] font-medium">Download the app</p>
              <div className="flex gap-4 sm:flex-col">
                {["google-store", "apple-store"].map((store) => (
                  <a key={store} target="_blank" href="#" rel="noreferrer">
                    <img
                      alt={`${store} icon`}
                      loading="lazy"
                      width="168"
                      height="50"
                      src={`https://www.englishyaari.com/img/${store}.svg`}
                      style={{ color: "transparent" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[30px] text-white" />
        <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
          <p className="text-[10px] font-normal text-white md:text-[12px]">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by YOUR WEBSITES. PVT. LTD
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterJsx;