import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const  SampleCard = (props:any) => (
  <Svg
    width={321}
    height={209}
    viewBox="0 0 321 209"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1205_14067)">
      <Rect width={321} height={209} fill="white" />
      <G filter="url(#filter0_d_1205_14067)">
        <G clipPath="url(#clip1_1205_14067)">
          <Rect
            x={326}
            y={-143.583}
            width={496.5}
            height={82.75}
            transform="rotate(90 326 -143.583)"
            fill="#2F4644"
          />
          <Rect
            x={243.25}
            y={-143.583}
            width={496.5}
            height={82.75}
            transform="rotate(90 243.25 -143.583)"
            fill="#202E2D"
          />
          <Rect
            x={160.5}
            y={-143.583}
            width={496.5}
            height={82.75}
            transform="rotate(90 160.5 -143.583)"
            fill="#182322"
          />
          <Rect
            x={77.75}
            y={-143.583}
            width={496.5}
            height={82.75}
            transform="rotate(90 77.75 -143.583)"
            fill="#101717"
          />
          <Path
            d="M283.017 54.85C281.426 56.1907 279.363 57 277.108 57C272.078 57 268 52.9706 268 48C268 43.0294 272.078 39 277.108 39C279.363 39 281.426 39.8093 283.017 41.15C284.607 39.8093 286.67 39 288.925 39C293.955 39 298.033 43.0294 298.033 48C298.033 52.9706 293.955 57 288.925 57C286.67 57 284.607 56.1907 283.017 54.85Z"
            fill="#ED0006"
          />
          <Path
            d="M283.017 54.8499C284.975 53.1992 286.217 50.7429 286.217 48C286.217 45.2571 284.975 42.8008 283.017 41.1501C284.607 39.8094 286.67 39 288.925 39C293.955 39 298.033 43.0294 298.033 48C298.033 52.9706 293.955 57 288.925 57C286.67 57 284.607 56.1906 283.017 54.8499Z"
            fill="#F9A000"
          />
          <Path
            d="M283.017 54.85C284.975 53.1992 286.217 50.7429 286.217 48C286.217 45.2571 284.975 42.8008 283.017 41.15C281.058 42.8008 279.816 45.2571 279.816 48C279.816 50.7429 281.058 53.1992 283.017 54.85Z"
            fill="#FF5E00"
          />
        </G>
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_1205_14067">
        <Rect width={321} height={209} fill="white" />
      </ClipPath>
      <ClipPath id="clip1_1205_14067">
        <Rect width={321} height={209} rx={18} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SampleCard;
