import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { createCollections } from '@treeseed/core/content';
import { loadManifest } from '@treeseed/sdk/platform/tenant-config';

const tenant = loadManifest();

export const collections = createCollections(tenant, { docsLoader, docsSchema });
