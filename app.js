const canvas = document.querySelector("canvas");

const WIDTH = canvas.width * 10;
const HEIGHT = canvas.height * 10;

canvas.width = WIDTH;
canvas.height = HEIGHT;

const ctx = canvas.getContext("2d");
