// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jtTxUSUaYyDYVq5FUSGgTb
// Component: zvLW9_WYC3
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: OFcEsEPKVSy/component
import Footer from "../../Footer"; // plasmic-import: rFX_TWDAZit/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_mahoe_hemlock.module.css"; // plasmic-import: jtTxUSUaYyDYVq5FUSGgTb/projectcss
import sty from "./PlasmicLookbook.module.css"; // plasmic-import: zvLW9_WYC3/css

export const PlasmicLookbook__VariantProps = new Array();

export const PlasmicLookbook__ArgProps = new Array();

function PlasmicLookbook__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"500px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/mahoe_hemlock/images/booksOpen.jpeg",
                fullWidth: 2730,
                fullHeight: 4096,
                aspectRatio: undefined
              }}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "header", "img", "footer"],
  freeBox: ["freeBox", "header", "img", "footer"],
  header: ["header"],
  img: ["img"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLookbook__ArgProps,
      internalVariantPropNames: PlasmicLookbook__VariantProps
    });

    return PlasmicLookbook__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLookbook";
  } else {
    func.displayName = `PlasmicLookbook.${nodeName}`;
  }
  return func;
}

export const PlasmicLookbook = Object.assign(
  // Top-level PlasmicLookbook renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    header: makeNodeComponent("header"),
    img: makeNodeComponent("img"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicLookbook
    internalVariantProps: PlasmicLookbook__VariantProps,
    internalArgProps: PlasmicLookbook__ArgProps
  }
);

export default PlasmicLookbook;
/* prettier-ignore-end */
