import {
  FacebookIcon,
  InstagramIcon,
  NaverIcon,
  SymbolLogoIcon,
  TicketbayTextLogoIcon,
  YoutubeIcon,
} from "@assets/icons";

import SnsButton from "@widgets/home/components/brand/sns/sns-button";

import * as styles from "./brand.css";

const Brand = () => {
  const SNS_ICONS = [YoutubeIcon, InstagramIcon, FacebookIcon, NaverIcon];

  return (
    <section className={styles.section}>
      <div className={styles.logoContainer}>
        <SymbolLogoIcon width={24} height={20} />
        <TicketbayTextLogoIcon className={styles.logo} />
      </div>
      <div className={styles.snsContainer}>
        {SNS_ICONS.map((Icon, index) => (
          <SnsButton key={index}>
            <Icon />
          </SnsButton>
        ))}
      </div>
    </section>
  );
};

export default Brand;
