$(document).ready(function() {
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');
    const request= $.ajax('https://api.github.com/users/FelipeMoraesPalomo');

    request
    .done(function(json){
        nameElement.text(json.name)
        usernameElement.text(json.login)
        avatarElement.attr('src', json.avatar_url)
        followingElement.text(json.following)
        followersElement.text(json.followers)
        reposElement.text(json.public_repos)
        linkElement.attr('href', json.html_url)
    }).fail(function(){
        alert("Ocorreu um erro inesperado, tente novamente mais tarde.")
    })
})