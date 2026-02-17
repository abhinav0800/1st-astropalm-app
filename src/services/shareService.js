export const shareService = {
  async shareContent(title, text, url) {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return true;
      } catch (err) {
        console.error('Share failed', err);
        return false;
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(`${text} ${url}`);
        return 'copied';
      } catch (err) {
        return false;
      }
    }
  }
};
