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