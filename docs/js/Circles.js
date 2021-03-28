// @flow
import { h, render } from "../web_modules/preact.js";
import {
  useContext,
  useEffect,
  useState,
} from "../web_modules/preact/hooks.js";
import htm from "../web_modules/htm.js";
import {
  rawStyles,
  createStyles,
  setSeed,
} from "../web_modules/simplestyle-js.js";
import { AppContext } from "./AppContext.js";
import simpleStyleJsSeed from "./simplestyle-js-seed.js";

const html = htm.bind(h);

setSeed(simpleStyleJsSeed("circles"));
rawStyles({
  html: {
    height: "100%",
  },
  body: {
    height: "100%",
  },
});

const [styles] = createStyles({
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

/*::
type Props = {
  count: number | typeof undefined
};
*/
const Circles = (props /*: Props */) => {
  const [state /*: AppState */, dispatch] = useContext(AppContext);
  const [count /*: number */, setCount] = useState(props.count);

  useEffect(() => {
    navigator.xr
      .requestSession("immersive-ar")
      .then((xrSession) => {
        xrSession.addEventListener("end", () => {});
        // Do necessary session setup here.
        // Begin the session’s animation loop.
        xrSession.requestAnimationFrame(() => {
          alert("AR!");
        });
      })
      .catch(function (error) {
        // "immersive-vr" sessions are not supported
        console.warn(
          "'immersive-ar' isn't supported, or an error occurred activating AR!",
        );
      });
  });

  // console.log(props.count.isInteger());
  return html`
    <div className="${styles.container}">
      <p>
        Circles
      </p>
    </div>
  `;
};

export default Circles;
