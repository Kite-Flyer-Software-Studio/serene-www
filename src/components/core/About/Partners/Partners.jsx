import Partner from "./Partner";
import { useTranslations } from "next-intl";

const dark = true;

export default function Partners() {
  const t = useTranslations('About.partners')

  return (
    <section
      className={`page-section  scrollSpysection  ${
        dark ? "bg-dark-1 light-content" : ""
      }`}
      id="team"
    >
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50">
            <div>
              <h2 className="section-caption-border">{t('title')}</h2>
              <h3 className="section-title-strong mb-40">
                {t('description')}
              </h3>
              <p className="mb-40">
                {t('paragraph')}
              </p>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1">
            <Partner />
          </div>
        </div>
      </div>
    </section>
  );
}
