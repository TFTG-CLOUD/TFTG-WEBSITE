import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        highlight="Features"
        title="Powerful functions covering all aspects of video processing"
        subtitle="Automatic Telegram bot download, automatic transcoding, automatic addition of watermarks, marquees, gif image watermarks, automatic publishing to Telegram subscription groups, etc."
        items={[
          {
            title: "Telegram bot + FFmpeg",
            description:
              "Leverage the powerful telegram bot functionality and the power of ffmpeg.",
            icon: IconBrandTailwind,
          },
          {
            title: "Automatically download videos Telegram bot",
            description:
              "Forward the video to the Telegram download bot, and it will be automatically downloaded to the server, transcoded, and add watermarks, marquees, etc.",
            icon: IconApps,
          },
          {
            title: "Automatic video synthesis Telegram bot",
            description:
              "Forwarding videos to the video merging bot will automatically merge the forwarded videos into a complete video and automatically transcode them.",
          },
          {
            title: "CPU+GPU transcoding function",
            description:
              "Supports GPU or CPU transcoding to fully utilize the server's full performance.",
            icon: IconRocket,
          },
          {
            title: "Automatically post videos to Telegram groups",
            description:
              "Automatically publish transcoded videos to groups via Telegram bot, including preview videos, thumbnails (multi-image combinations) and screenshots.",
            icon: IconBrandGoogle,
          },
          {
            title: "Complete API",
            description:
              "Whether it is building a front-end CMS or an APP, there is no problem.",
            icon: IconBulb
          },
        ]}
      />
      <Steps />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Through these frequently asked questions, you can better understand our products."
        highlight="FAQs"
        items={[
          {
            title: "Why are there open source and subscription versions?",
            description:
              "Because the open source version is sufficient for most people, but the subscription version provides more advanced features for experienced users.",
          },
          {
            title: "How to install the TFTG system?",
            description:
              "Install via docker or script.",
          },
          {
            title: "Can the open source version be used for commercial purposes?",
            description:
              "The open source version is based on the MIT open source protocol and can be used in any scenario.",
          },
          {
            title: "Is it easy to use?",
            description:
              "It's very simple and fool-proof, you only need a server to install and experience it!",
          },
          {
            title: "What if there is a problem with the system?",
            description:
              "Our customer service staff is online 24/7. You can contact us at any time and get our help.",
          },
          {
            title: "Can I request custom functionality?",
            description:
              "Yes, no problem, if your proposed feature is broad enough we will add it for free.",
          },
        ]}
      />
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
