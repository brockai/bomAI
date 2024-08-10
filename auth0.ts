import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

export default handleAuth({
  async callback(req:any, res:any) {
    try {
      await handleCallback(req, res, {
        // redirectTo: '/profile',
      });
    } catch (error:any) {
      console.error('Error during callback:', error);
      res.status(error.status || 500).end(error.message);
    }
  },
});