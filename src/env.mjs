import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DUB_DOT_CO_TOKEN: z
      .string()
      .min(1, "DUB_DOT_CO_TOKEN is required"),
    DUB_DOT_CO_SLUG: z
      .string()
      .min(1, "DUB_DOT_CO_SLUG is required"),
  },
  client: {
    NEXT_PUBLIC_BASE_SHORT_DOMAIN: z
      .string()
      .url("NEXT_PUBLIC_BASE_SHORT_DOMAIN must be a valid URL"),
  },
  runtimeEnv: {
    DUB_DOT_CO_TOKEN: process.env.DUB_DOT_CO_TOKEN,
    DUB_DOT_CO_SLUG: process.env.DUB_DOT_CO_SLUG,
    NEXT_PUBLIC_BASE_SHORT_DOMAIN: process.env.NEXT_PUBLIC_BASE_SHORT_DOMAIN,
  },
  skipValidation: false, // keep this false so you catch issues early
});
