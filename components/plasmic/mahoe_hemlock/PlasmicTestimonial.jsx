// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jtTxUSUaYyDYVq5FUSGgTb
// Component: tAmnGGVvVuAO
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: V4ez3nQHtN4p/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_mahoe_hemlock.module.css"; // plasmic-import: jtTxUSUaYyDYVq5FUSGgTb/projectcss
import sty from "./PlasmicTestimonial.module.css"; // plasmic-import: tAmnGGVvVuAO/css
import QuoteDashesIcon from "./icons/PlasmicIcon__QuoteDashes"; // plasmic-import: dnWONP_mS81J/icon

export const PlasmicTestimonial__VariantProps = new Array();

export const PlasmicTestimonial__ArgProps = new Array();

function PlasmicTestimonial__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <Avatar
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        className={classNames("__wab_instance", sty.avatar)}
        pic={
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"100%"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={{
              src: "/plasmic/mahoe_hemlock/images/profilepic.png",
              fullWidth: 192,
              fullHeight: 192,
              aspectRatio: undefined
            }}
          />
        }
      />

      <QuoteDashesIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__mIjex)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ymb6K
          )}
        >
          {
            "“ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “"
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lGxq7)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__e9OGt
            )}
          >
            {"Darya Finger"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7DPE
            )}
          >
            {"CEO & Co-Founder @Dropbox"}
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "avatar", "img", "svg"],
  avatar: ["avatar", "img"],
  img: ["img"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTestimonial__ArgProps,
      internalVariantPropNames: PlasmicTestimonial__VariantProps
    });

    return PlasmicTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonial";
  } else {
    func.displayName = `PlasmicTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial = Object.assign(
  // Top-level PlasmicTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    img: makeNodeComponent("img"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicTestimonial
    internalVariantProps: PlasmicTestimonial__VariantProps,
    internalArgProps: PlasmicTestimonial__ArgProps
  }
);

export default PlasmicTestimonial;
/* prettier-ignore-end */