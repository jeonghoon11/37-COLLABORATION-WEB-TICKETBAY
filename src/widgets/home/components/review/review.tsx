import { useRef } from "react";

import Section from "@widgets/home/components/section/section";
import UserReview from "@widgets/home/components/user-review/user-review";
import { USER_REVIEW_DATA } from "@widgets/home/constants/user-review-data";

import { useHorizontalScroll } from "@shared/hooks/use-horizontal-scroll";

import * as styles from "./review.css";

const Review = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useHorizontalScroll(scrollRef);

  return (
    <Section title="티켓베이" highlight="이용 후기" showMore={true}>
      <div ref={scrollRef} className={styles.container}>
        {USER_REVIEW_DATA.map((item) => (
          <UserReview key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Review;
