# notAcursor Project

A tool that allows you to easily transform your ordinary cursor into something extraordinary.

# Installation

### CDN
To use notAcursor >
```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notacursor@0.0.7/notacursor.css">
```
- Copy and paste this link on your html head tag.

And >
```bash
<script src="https://cdn.jsdelivr.net/npm/notacursor@0.0.7/notacursor.js"></script>
```
- Copy and paste this to your body tag at the end.
---
Installation Done, Now to implement cursor effect > 
```bash
#### notAcursor-type1

![notAcursor-type1-preview](https://ik.imagekit.io/iamovi/notAcursor/preview/preview-notAcursor-type1.gif?updatedAt=1701086917171)
<!-- notAcursor-type1 -->
<div class="notAcursor-dot-type1" data-notacursor-dot></div>
<div class="notAcursor-outline-type1" data-notacursor-outline></div>
```
- Just copy and paste it to anywhere of your body tag.
- This one is type1, To use type2 simply Change type1 to type2 >
```bash
### notAcursor-type2

![notAcursor-type2-preview](https://ik.imagekit.io/iamovi/notAcursor/preview/preview-notAcursor-type2.gif?updatedAt=1701086947522)
<!-- notAcursor-type2 -->
<div class="notAcursor-dot-type2" data-notacursor-dot></div>
<div class="notAcursor-outline-type2" data-notacursor-outline></div>
```
### More CursorX Types are given below >

#### notAcursor-type3

![notAcursor-type3-preview](https://ik.imagekit.io/iamovi/notAcursor/preview/preview-notAcursor-type3.gif?updatedAt=1701086960652)
```bash
<!-- CursorX-type3 -->
<div class="CursorX-dot-type3" data-notacursor-dot></div>
<div class="CursorX-outline-type3" data-notacursor-outline></div>
```
#### notAcursor-pic
- Use your random pic or gif as cursor.
- Just replace your_pic.png to your actual photo, Like abcd.png or abcd.jpg or abcd.gif
![notAcursor-pic-preview](https://ik.imagekit.io/iamovi/notAcursor/preview/preview-notAcursor-pic.gif?updatedAt=1701086988948)
```bash
<!-- notAcursor-pic -->
<div class="CursorX-dot-pic" data-notacursor-dot></div>
<img src="your_pic.png" alt="Cursor Image" 
  class="CursorX-outline-pic" data-notacursor-outline>
```
#### notAcursor-minecraftSword
```bash
![notAcursor-minecraftSword-preview](https://ik.imagekit.io/iamovi/notAcursor/preview/preview-notAcursor-minecraftSword.gif?updatedAt=1701086973677)
<!-- CursorX-minecraftSword -->
<div class="CursorX-dot-minecraftSword" data-notacursor-dot></div>
<img src="https://ik.imagekit.io/iamovi/CursorX/minecraft-sword.png?updatedAt=1700926782092" alt="Cursor Image" 
  class="CursorX-outline-minecraftSword" data-notacursor-outline>
```
#### notAcursor-apple
```bash
![notAcursor-apple-preview](https://ik.imagekit.io/iamovi/notAcursor/preview/preview-notAcursor-apple.gif?updatedAt=1701087010289)
<!-- CursorX-apple -->
<div class="notAcursor-dot-apple" data-notacursor-dot></div>
<img src="https://ik.imagekit.io/iamovi/CursorX/apple.png?updatedAt=1700931158158" alt="Cursor Image" 
  class="notAcursor-outline-apple" data-notacursor-outline>
```

- Check [notAcursor-types.txt](https://github.com/iamovi/CursorX/blob/main/CursorX-types.txt) file.

## Important Note

#### To show default Cursor >
![Preview of Get default cursor](https://ik.imagekit.io/iamovi/notAcursor/preview/get-notAcursor-cursor.jpg?updatedAt=1701087485863)
```bash
html, button, a {
  cursor: auto !important;
}
```
- Add this on your .css file.

##### If 
You change 
--- 

## Quick Start
```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>notAcursor</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notacursor@0.0.7/notacursor.css">    
    <style>
      button {
          background-color: aquamarine;
          cursor: pointer;
          display: block;
          border: 1px solid black;
          margin: auto;
          margin-top: 150px;
          padding: 10px;
      }
      button:hover {
        border-radius: 10px;
      }
  </style>
  </head>
  <body>

    <!-- notAcursor-type1 -->
    <div class="notAcursor-dot-type1" data-notacursor-dot></div>
    <div class="notAcursor-outline-type1" data-notacursor-outline></div>      

    <button>Test ME!</button>
    
    <script src="https://cdn.jsdelivr.net/npm/notacursor@0.0.7/notacursor.js"></script>
  </body>
</html>
```

---

#### Visit [notAcursor Website](https://iamovi.github.io/notAcursor) for more information.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Maruf OVi

fornet.ovi@gmail.com

---

Thanks your reading love 🌸