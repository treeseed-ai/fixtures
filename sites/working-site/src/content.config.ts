import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { createTreeseedCollections } from '@treeseed/core/content';
import { loadTreeseedManifest } from '@treeseed/sdk/platform/tenant-config';

const tenant = loadTreeseedManifest();

export const collections = createTreeseedCollections(tenant, { docsLoader, docsSchema });
