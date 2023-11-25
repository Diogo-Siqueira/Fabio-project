document.addEventListener('DOMContentLoaded', function () {
    // IDs dos vídeos do YouTube
    var videos = [
        'Ptbk2af68e8',
        'rUTKomc2gG8',
        'FdePtO5JSd0'
    ];

    // Elementos do DOM
    var playlist = document.getElementById('playlist');
    var playerContainer = document.getElementById('player-container');

    // Adicionar vídeos à playlist
    videos.forEach(function (videoId, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="Thumbnail" width="50" height="50"> Vídeo ${index + 1}`;
        listItem.addEventListener('click', function () {
            playVideo(videoId);
        });
        playlist.appendChild(listItem);
    });

    // Função para reproduzir um vídeo
    function playVideo(videoId) {
        // Limpar conteúdo anterior
        playerContainer.innerHTML = '';

        // Criar iframe e definir atributos
        var iframe = document.createElement('iframe');
        iframe.width = '640';
        iframe.height = '400';
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allowfullscreen = true;

        // Adicionar iframe ao contêiner
        playerContainer.appendChild(iframe);
    }
});
