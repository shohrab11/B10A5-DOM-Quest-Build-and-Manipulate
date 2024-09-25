document.getElementById('donation-btn')
    .addEventListener('click', function () {
        document.getElementById('donation-btn').classList.add('bg-green-300');
        document.getElementById('history-btn').classList.remove('bg-green-300');
        showSectionById('main-donation');

    });

document.getElementById('history-btn')
    .addEventListener('click', function () {
        document.getElementById('history-btn').classList.add('bg-green-300');
        document.getElementById('donation-btn').classList.remove('bg-green-300');
        showSectionById('donation-history');

    })
    document.getElementById('blog-btn')
    .addEventListener('click', function () {
        document.getElementById('history-btn').classList.add('hidden');
        document.getElementById('donation-btn').classList.add('hidden');
        document.getElementById('blog-btn').classList.add('hidden');
        document.getElementById('home-btn').classList.remove('hidden');
        showSectionById('donation-blog');

    })
    document.getElementById('home-btn')
    .addEventListener('click', function () {
        document.getElementById('history-btn').classList.remove('hidden');
        document.getElementById('donation-btn').classList.remove('hidden');
        document.getElementById('blog-btn').classList.remove('hidden');
        document.getElementById('home-btn').classList.add('hidden');
        showSectionById('main-donation');

    })