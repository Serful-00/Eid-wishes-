// script.js
document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('input').value;
    document.getElementById('userName').textContent = name;
    document.getElementById('inputPage').style.display = 'none';
    document.getElementById('greetingPage').style.display = 'block';
});

// শেয়ার ফাংশনালিটি
const currentUrl = encodeURIComponent(window.location.href);
const shareText = encodeURIComponent("ঈদ মোবারকের শুভেচ্ছা কার্ড দেখুন: ");

document.getElementById('whatsappShare').href = 
    `https://api.whatsapp.com/send?text=${shareText}${currentUrl}`;

document.getElementById('facebookShare').href = 
    `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

document.getElementById('instagramShare').href = 
    `https://www.instagram.com/share?url=${currentUrl}`;

document.getElementById('twitterShare').href = 
    `https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`;

// সকল শেয়ার লিংক নতুন ট্যাবে ওপেন করার জন্য
document.querySelectorAll('.social-icons a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});
