const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '442496e73bc5a465bccb5697f24a15fb',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;