function changeHeader(profile) {
    if (profile) {
        document.getElementById('page-header').innerHTML = "Check our posts you've liked here";
    }
    else {
        document.getElementById('page-header').innerHTML = "Tell us your story";
    }

    profile = !profile;
}

function hideMessage(elem) {
    $(elem).hide();
}

function showMessage(elem) {
    $(elem).show();
}