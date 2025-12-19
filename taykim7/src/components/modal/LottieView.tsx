import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { loadLottie } from "../../utils/lottieCache"

type Props = { src: string };

export default function LottieView({ src }: Props) {
  const [animationData, setAnimationData] = useState<any>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    let isMounted = true;
    setAnimationData(null);

    // (async () => {
    //   const json = await import(`../../assets/lotties/${src}`);
    //   if (isMounted) setAnimationData(json.default);
    // })();

    (async () => {
      const data = await loadLottie(src);
      if (isMounted) setAnimationData(data);
    })();

    return () => {
      isMounted = false;
      lottieRef.current?.stop();
    };
  }, [src]);

  if (!animationData) return <div>Loading...</div>;

  return ( <div
      // onMouseEnter={() => lottieRef.current?.play()}
      // onMouseLeave={() => lottieRef.current?.stop()}
      className="w-full h-full"
    >
      <Lottie
        key={src}               
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop
      />
    </div>);
  // return <Lottie animationData={animationData} renderer="svg" loop autoplay />;
}
