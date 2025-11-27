import { type RefObject, useEffect } from "react";

/**
 * 가로 스크롤 영역에 마우스 드래그 스크롤 기능을 추가하는 커스텀 훅
 */
export const useHorizontalScroll = (scrollAreaRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    if (!scrollArea) {
      return;
    }

    let isDragging = false;
    let dragStartX = 0;
    let initialScrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      dragStartX = e.pageX - scrollArea.offsetLeft;
      initialScrollLeft = scrollArea.scrollLeft;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        return;
      }
      const currentX = e.pageX - scrollArea.offsetLeft;
      scrollArea.scrollLeft = initialScrollLeft - (currentX - dragStartX);
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    scrollArea.addEventListener("mousedown", handleMouseDown);
    scrollArea.addEventListener("mousemove", handleMouseMove);
    scrollArea.addEventListener("mouseup", handleMouseUp);
    scrollArea.addEventListener("mouseleave", handleMouseUp);

    return () => {
      scrollArea.removeEventListener("mousedown", handleMouseDown);
      scrollArea.removeEventListener("mousemove", handleMouseMove);
      scrollArea.removeEventListener("mouseup", handleMouseUp);
      scrollArea.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [scrollAreaRef]);
};

