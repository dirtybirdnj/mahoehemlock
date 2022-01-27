// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jtTxUSUaYyDYVq5FUSGgTb
// Component: rFX_TWDAZit
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconLink from "../../IconLink"; // plasmic-import: GGv8Rbbb-eh/component
import { useScreenVariants as useScreenVariantsvrW6EpkI5JaN } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: VrW6EpkI5jaN/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_mahoe_hemlock.module.css"; // plasmic-import: jtTxUSUaYyDYVq5FUSGgTb/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: rFX_TWDAZit/css
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: v_i9MOJJ0FWn/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: qqc7R0RN4US8/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: aLiPYmYFynex/icon

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvrW6EpkI5JaN()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9Vc6A)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__ynVei)}
            icon={
              <TwitterIconIcon
                className={classNames(projectcss.all, sty.svg__h0Prs)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__bqJlh)}
            icon={
              <GithubIconIcon
                className={classNames(projectcss.all, sty.svg__i0W4O)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__dehMg)}
            icon={
              <FacebookIconIcon
                className={classNames(projectcss.all, sty.svg__hEsxE)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___3TLNz)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {
            "contact@mahoehemlock.com - 802 867 5309 - 419 Elevation Avenue, Suite 001 Burlington, VT 07070\n© Copyright 2022 Mahoe & Hemlock. All rights reserved."
          }
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */