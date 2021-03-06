// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jtTxUSUaYyDYVq5FUSGgTb
// Component: OFcEsEPKVSy
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 2kkmkSfTwtyI/component
import { useScreenVariants as useScreenVariantsvrW6EpkI5JaN } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: VrW6EpkI5jaN/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_mahoe_hemlock.module.css"; // plasmic-import: jtTxUSUaYyDYVq5FUSGgTb/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: OFcEsEPKVSy/css
import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: WplHBDBY12ZR/icon

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvrW6EpkI5JaN()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox__tzomX)}>
        <div className={classNames(projectcss.all, sty.freeBox__fdUce)}>
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.a, sty.link)}
            component={Link}
            href={"/"}
            platform={"nextjs"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uYesV
              )}
            >
              {"Mahoe & Hemlock"}
            </div>

            {true ? (
              <LogoIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            ) : null}
          </p.PlasmicLink>
        </div>

        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wX0PL)}
          >
            <Button
              className={classNames("__wab_instance", sty.button___7XKl)}
              color={"clear"}
              link={"/catalog"}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__v2Iyi
                )}
              >
                {"Catalog"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__byUvM)}
              color={"clear"}
              link={"/lookbook"}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4E3Vt
                )}
              >
                {"Lookbook"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__udQ2V)}
              color={"clear"}
              link={"/finishes"}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__thjzR
                )}
              >
                {"Woods & Finishes"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__l4NpK)}
              color={"clear"}
              link={"/about"}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__o5L0P
                )}
              >
                {"About"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__tbvZ)}
              color={"clear"}
              link={"/contact"}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1FnDf
                )}
              >
                {"Contact"}
              </div>
            </Button>
          </p.Stack>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <div className={classNames(projectcss.all, sty.freeBox__l6Brj)}>
            <Button color={"clear"} size={"compact"}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wYfNl
                )}
              >
                {"Catalog"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__i1Vah)}
              color={"clear"}
              link={"/pricing"}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0Xak
                )}
              >
                {"Lookbook"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__bvT8Y)}
              color={"clear"}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__j6Er9
                )}
              >
                {"Woods & Finishes"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__qimbe)}
              color={"clear"}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xKk8
                )}
              >
                {"About"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___82Ml4)}
              color={"clear"}
              size={"compact"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ln2Jl
                )}
              >
                {"Contact"}
              </div>
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "svg"],
  link: ["link", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
