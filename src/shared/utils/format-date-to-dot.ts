/**
 * ISO 문자열 또는 Date 객체를 `YYYY.MM.DD HH:mm` 형태의 점(.) 기반 날짜/시간 문자열로 포맷합니다.
 *
 * @example
 * formatDateToDot("2025-10-31T18:30:00"); // "2025.10.31 18:30"
 * formatDateToDot("invalid"); // "" (유효하지 않은 날짜인 경우 빈 문자열 반환)
 *
 * @param value - 포맷할 날짜/시간 값 (ISO 문자열 또는 Date 객체)
 * @returns `YYYY.MM.DD HH:mm` 형식의 문자열, 유효하지 않은 날짜인 경우 빈 문자열
 */
export const formatDateToDot = (value: string | Date): string => {
  const date = typeof value === "string" ? new Date(value) : value;

  // 유효하지 않은 날짜인 경우 빈 문자열 반환
  if (isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${day} ${hours}:${minutes}`;
};
