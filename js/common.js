// Common functions for all pages
function shareSite() {
  const url = window.location.href;
  const title = document.title;
  
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(err => console.log('Error sharing:', err));
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      // Final fallback: show URL
      prompt('Copy this link:', url);
    });
  }
}

function openDonate() {
  window.open('https://buymeacoffee.com/', '_blank');
}

