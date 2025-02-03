function button_playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.currentTime = 0; // 重置音频到开始位置
    audio.play();
}
function switchbox_playAudio(audioId_on,audioId_off,switchbox) {

    var audio_on = document.getElementById(audioId_on);
    var audio_off = document.getElementById(audioId_off);
        if (switchbox.checked) {
            audio_on.currentTime = 0; // 重置音频到开始位置
            audio_on.play();
        } else  {
            audio_off.currentTime = 0; // 重置音频到开始位置
            audio_off.play();
        }
}
