// use this file as linker to every other files in the project
// this file will be used to export all the functions and variables from other files in the project

 const element = document.getElementsByClassName('content')[0];
const changeBackgroundColor = (element, color) => {
    element.style.transition = 'background-color 1s ease';
    element.style.backgroundColor = color;

}
const changeBackgroundColorEvery5Seconds = (element) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#70C1B9', '#FF6347', '#40E0D0', '#FF4500', '#20B2AA'];
    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        console.log(randomColor)
        changeBackgroundColor(element, randomColor);
    }, 5000);
};

changeBackgroundColorEvery5Seconds(element);