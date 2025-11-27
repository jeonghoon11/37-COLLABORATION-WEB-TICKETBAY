/**
 * 숫자 금액을 한국 로케일 기준의 천 단위 콤마 문자열로 포맷합니다.
 *
 * @example
 * formatPriceToKorean(150000); // "150,000"
 * formatPriceToKorean(undefined); // "0" (유효하지 않은 값인 경우)
 *
 * @param price - 포맷할 금액 숫자
 * @returns 천 단위 콤마가 적용된 문자열, 유효하지 않은 값인 경우 "0"
 */
export const formatPriceToKorean = (price: number): string => {
  // null, undefined, NaN 등의 유효하지 않은 값 처리
  if (price == null || isNaN(Number(price))) {
    return "0";
  }

  return Number(price).toLocaleString("ko-KR");
};
