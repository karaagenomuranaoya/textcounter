const myText = document.querySelector('#myText');
const liveOutput1 = document.querySelector('#liveOutput1');
const liveOutput2 = document.querySelector('#liveOutput2');

window.addEventListener('DOMContentLoaded', () => {
    const savedText = localStorage.getItem('textAreaContent');
    if (savedText) {
        myText.value = savedText;
        liveOutput1.textContent = myText.value.replace(/\s+/g, '').length + "文字";
        liveOutput2.textContent = Math.floor(myText.value.replace(/\s+/g, '').length / 3) + "秒で読める";
    }
})

//文章を取得，カウント，表示
myText.addEventListener('input', () => {
    localStorage.setItem('textAreaContent', myText.value)
    liveOutput1.textContent = myText.value.replace(/\s+/g, '').length + "文字";
    liveOutput2.textContent = Math.floor(myText.value.replace(/\s+/g, '').length / 3) + "秒で読める";
})