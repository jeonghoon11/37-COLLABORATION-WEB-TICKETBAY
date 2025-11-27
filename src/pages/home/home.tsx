import { useState } from "react";

import { SoundIcon } from "@assets/icons";

import Accordion from "@widgets/home/components/accordion/accordion";
import BestTicket from "@widgets/home/components/best-ticket/best-ticket";
import Brand from "@widgets/home/components/brand/brand";
import Category from "@widgets/home/components/category/category";
import Contact from "@widgets/home/components/contact/contact";
import GiftCard from "@widgets/home/components/gift-card/gift-card";
import Header from "@widgets/home/components/header/header";
import Information from "@widgets/home/components/information/information";
import RecentTicket from "@widgets/home/components/recent-ticket/recent-ticket";
import Review from "@widgets/home/components/review/review";
import Search from "@widgets/home/components/search/search";
import Sidebar from "@widgets/home/components/sidebar/sidebar";
import Terms from "@widgets/home/components/terms/terms";

import FooterMenu from "@shared/components/footer-menu/footer-menu";

import * as styles from "./home.css";

function Home() {
  const ADVERTISING_IMAGE_URLS = [
    "/advertising2.webp",
    "advertising1.webp",
    "/advertising3.webp",
  ] as const;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.backgroundImage} />
        <div className={styles.gradient} />
        <Header onMenuClick={handleMenuClick} />
        <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
        <Search />
        <Category />
      </div>
      <div className={styles.noticeBanner}>
        <SoundIcon width={24} height={24} className={styles.soundIcon} />
        <p className={styles.noticeText}>
          [공지] 티켓 매크로 방지를 위한 티켓 매수 제한 정책 시행 안내
        </p>
      </div>
      <div className={styles.content}>
        <img src={ADVERTISING_IMAGE_URLS[0]} alt="경희대학교 평화의 전당 광고 이미지" />
        <RecentTicket />
        <BestTicket />
        <img src={ADVERTISING_IMAGE_URLS[1]} alt="티켓베이 이용가이드 이미지" />

        <GiftCard />
        <img src={ADVERTISING_IMAGE_URLS[2]} alt="티켓베이 월간 티켓 홍보 이미지" />
        <Review />
      </div>
      <footer className={styles.footer}>
        <FooterMenu />
        <div className={styles.inner}>
          <Contact />
          <Brand />
          <Accordion />
          <Terms />
          <Information />
        </div>
      </footer>
    </div>
  );
}

export default Home;
