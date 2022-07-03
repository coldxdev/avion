import Commerce from '@chec/commerce.js';

const checAPIKey = import.meta.env.VITE_CHEC_PUBLIC_KEY;

export const commerce = new Commerce(checAPIKey);