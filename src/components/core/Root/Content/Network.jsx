import { useTranslations } from "next-intl";
import Image from "next/image";

export const Partners = [
  {
    title: "restaurants",
    imageSrc: "/assets/images/serene/partners/taipan.png",
    align: "text-center",
  },
  {
    title: "wine&liquor",
    imageSrc: "/assets/images/serene/partners/wcellar.jpg",
    align: "text-start",
  },
  {
    title: "drinks&party",
    imageSrc: "",
    align: "text-end",
  },
  {
    title: "networking",
    imageSrc: "",
    align: "text-center",
  },
];

export default function Network() {
  const t = useTranslations('Root.content.partners')

  return (
    <div className="mb-100 mb-md-40">
      {Partners.map((partner) => (
        <h3
          key={partner.title}
          className={`services-4-item ${partner.align} parallax-mousemove-scene wow fadeInUp`}
        >
          <span className="services-4-title hs-title-5 font-alt overflow-hidden">
            {t(`list.${partner.title}`)}
          </span>
          {
            partner.imageSrc && (
              <span className="services-4-image parallax-mousemove-follow">
                <Image
                  src={partner.imageSrc}
                  loading="lazy"
                  width={550}
                  height={673}
                  alt={partner.alt}
                />
              </span>   
            )
          }
        </h3>
      ))}
    </div>
  );
}
