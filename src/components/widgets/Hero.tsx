import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Perfect cloud transcoding system for <br class="hidden lg:block" />{" "}
              <span class="hidden lg:inline">transcode videos by</span> <span class="text-[#039de1]">Telegram bot</span> +{" "}
              <span class="sm:whitespace-nowrap text-[#039de1]">FFmpeg</span>
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  TFTG
                </span>{" "}
                is a cloud transcoding system dedicated to Telegram bot. It is used to automatically download videos from Telegram bot, transcode them, add watermarks and marquees, gif image watermarks, etc., and generate preview videos, preview images, screenshots, etc.
              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="https://github.com/TFTG-CLOUD/TFTG"
                    target="_blank"
                    rel="noopener"
                  >
                    Get source
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <a href="https://t.me/+eeFMPCdU745kN2E1" class="btn w-full bg-gray-50 dark:bg-transparent" target="_blank">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src='/images/3.webp'
              layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
