import { useEffect, useState } from "react";

export default function Scroller({ elementID, width, height, align }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ele = document.getElementById(elementID);

    if (ele) {
      const handleScroll = () => {
        const scrollWidth = ele.scrollWidth - ele.clientWidth;
        const scrollLeft = ele.scrollLeft;
        const scrollPercentage = (scrollLeft / scrollWidth) * 100;
        setProgress(scrollPercentage);
      };

      // Attach the scroll event listener
      ele.addEventListener("scroll", handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        ele.removeEventListener("scroll", handleScroll);
      };
    }
  }, [elementID]);

  return (
    <div
      className="scroller"
      style={{ width: width, height: height, alignSelf: align }}
    >
      <div className="scroller-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
