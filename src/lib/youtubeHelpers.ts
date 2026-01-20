/**
 * Converts a YouTube URL (regular, share, or shorts) to an embed URL
 * @param url - The YouTube URL (can be watch, share, shorts, or already embed)
 * @returns The embed URL ready for iframe src
 */
export function getYouTubeEmbedUrl(url: string): string {
  if (!url) return '';

  // If it's already an embed URL, return as is
  if (url.includes('/embed/')) {
    return url;
  }

  let videoId = '';

  try {
    const urlObj = new URL(url);

    // Handle YouTube Shorts: https://youtube.com/shorts/VIDEO_ID
    if (urlObj.pathname.includes('/shorts/')) {
      videoId = urlObj.pathname.split('/shorts/')[1].split('?')[0];
    }
    // Handle standard watch URL: https://www.youtube.com/watch?v=VIDEO_ID
    else if (urlObj.searchParams.has('v')) {
      videoId = urlObj.searchParams.get('v') || '';
    }
    // Handle youtu.be share links: https://youtu.be/VIDEO_ID
    else if (urlObj.hostname === 'youtu.be') {
      videoId = urlObj.pathname.substring(1).split('?')[0];
    }
    // Handle /v/ format: https://www.youtube.com/v/VIDEO_ID
    else if (urlObj.pathname.includes('/v/')) {
      videoId = urlObj.pathname.split('/v/')[1].split('?')[0];
    }

    // Clean video ID (remove any trailing characters)
    videoId = videoId.split('&')[0].split('?')[0];

    // Return embed URL if we found a video ID
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?rel=0`;
    }
  } catch (error) {
    console.error('Error parsing YouTube URL:', error);
  }

  // If we couldn't parse it, return the original URL
  return url;
}
