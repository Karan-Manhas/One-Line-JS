// Enable design mode
document.designMode = 'on';

//merge 2 arrays
const merge =[...array1, ...array2];

//Generate Random Colour
document.body.style.background=`#${Math.floor(Math.random()*0xffffff).toString(16)}`

//Save to Clipboard
const button = document.querySelector("button");
copy = ("Thanks for clicking")
button.addEventListener("click", () => {
    alert("Copied to Clipboard ✅");
});

const copy = text => navigator.clipboard.writeText(text)

// Console log table (When yyou have an array you can print it out nicely in console)
const videos =[
    {name: "Tailwind", views: 100},
    {name: "Tailwind2", views: 200},
    {name: "Tailwind3", views: 900}
]
console.table(videos)
