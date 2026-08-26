import starlight from '@astrojs/starlight';
import { createSite } from '@treeseed/core/site';
import { loadManifest } from '@treeseed/core/tenant-config';

const tenant = loadManifest();

export default createSite(tenant, { starlight });
