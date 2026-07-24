import starlight from '@astrojs/starlight';
import { createSite } from '@treeseed/core/site';
import { loadManifest } from '@treeseed/sdk/platform/tenant-config';

const tenant = loadManifest();

export default createSite(tenant, { starlight });
