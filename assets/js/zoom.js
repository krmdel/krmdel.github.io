// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    margin: 24,
  });
  
  // Override to use original full-resolution images when zooming
  medium_zoom.on('open', function (event) {
    const img = event.detail.target || event.target;
    if (img && img.tagName === 'IMG') {
      // Use data-zoom-src if available (points to original image)
      if (img.dataset.zoomSrc) {
        const zoomImg = event.detail.zoom || document.querySelector('.medium-zoom-image--opened img');
        if (zoomImg) {
          zoomImg.src = img.dataset.zoomSrc;
        }
      } else {
        // Remove webp scaling suffixes to get original image
        const originalSrc = img.src.replace(/-\d+\.webp/i, function() {
          const ext = img.src.match(/\.(jpeg|jpg|png|gif)$/i);
          return ext ? ext[0] : '.jpg';
        });
        if (originalSrc !== img.src && !originalSrc.includes('-')) {
          const zoomImg = event.detail.zoom || document.querySelector('.medium-zoom-image--opened img');
          if (zoomImg) {
            zoomImg.src = originalSrc;
          }
        }
      }
    }
  });
});
