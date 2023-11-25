# CursorX Project
Give your cursor cool effects.

### Preview CursorX-type1

![CursorX-type1-preview](https://ik.imagekit.io/iamovi/CursorX/preview/preview-CursorX-type1.gif?updatedAt=1700934757810)

### Preview CursorX-type2

![CursorX-type2-preview](https://ik.imagekit.io/iamovi/CursorX/preview/preview-CursorX-type2.gif?updatedAt=1700934758665)

### Preview CursorX-type3

![CursorX-type3-preview](https://ik.imagekit.io/iamovi/CursorX/preview/preview-CursorX-type3.gif?updatedAt=1700934758694)

### Preview CursorX-pic

![CursorX-pic-preview](https://ik.imagekit.io/iamovi/CursorX/preview/preview-CursorX-pic.gif?updatedAt=1700934758696)

### Preview CursorX-minecraftSword

![CursorX-minecraftSword-preview](https://ik.imagekit.io/iamovi/CursorX/preview/preview-CursorX-minecraftSword.gif?updatedAt=1700934758658)

### Preview CursorX-apple

![CursorX-apple-preview](https://ik.imagekit.io/iamovi/CursorX/preview/preview-CursorX-apple.gif?updatedAt=1700934758713)

# Installation

To use CursorX >
```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cursorx@0.0.5/cursorx-style.css">
```
- Copy and paste this link on your html head tag.

And >
```bash
<script src="https://cdn.jsdelivr.net/npm/cursorx@0.0.5/cursorx.js"></script>
```
- Copy and paste this to your body tag at the end.
---
Installation Done, Now to implement cursor effect > 
```bash
  <div class="CursorX-dot-type1" data-cursor-dot></div>
  <div class="CursorX-outline-type1" data-cursor-outline></div>
```
- Just copy and paste it to anywhere of your body tag.
- This one is type1, To use type2 simply Change type1 to type2 >
```bash
<div class="CursorX-dot-type2" data-cursor-dot></div>
<div class="CursorX-outline-type2" data-cursor-outline></div>
```
### More CursorX Types are given below >

#### CursorX-type3
```bash
<div class="CursorX-dot-type3" data-cursor-dot></div>
<div class="CursorX-outline-type3" data-cursor-outline></div>
```
#### CursorX-pic
- Use your random pic or gif as cursor.
- Just replace your_pic.png to your actual photo, Like abcd.png or abcd.jpg or abcd.gif
```bash
<div class="CursorX-dot-pic" data-cursor-dot></div>
<img src="your_pic.png" alt="Cursor Image" 
  class="CursorX-outline-pic" data-cursor-outline>
```
#### CursorX-minecraftSword
```bash
<div class="CursorX-dot-minecraftSword" data-cursor-dot></div>
<img src="https://ik.imagekit.io/iamovi/CursorX/minecraft-sword.png?updatedAt=1700926782092" alt="Cursor Image" 
  class="CursorX-outline-minecraftSword" data-cursor-outline>
```
#### CursorX-apple
```bash
<div class="CursorX-dot-apple" data-cursor-dot></div>
<img src="https://ik.imagekit.io/iamovi/CursorX/apple.png?updatedAt=1700931158158" alt="Cursor Image" 
  class="CursorX-outline-apple" data-cursor-outline>
```

- Check [CursorX-types.txt](https://github.com/iamovi/CursorX/blob/main/CursorX-types.txt) file.

#### To show default Cursor >
```bash
html, button {
  cursor: none !important;
}
```
- Add this on your .css file.
--- 

## Example
```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cursorx@0.0.5/cursorx-style.css">    
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

    <!-- CursorX-type1 -->
    <div class="CursorX-dot-type1" data-cursor-dot></div>
    <div class="CursorX-outline-type1" data-cursor-outline></div>

    <!-- CursorX-type2 -->
    <!-- <div class="CursorX-dot-type2" data-cursor-dot></div>
    <div class="CursorX-outline-type2" data-cursor-outline></div> -->

    <!-- CursorX-type3 -->
    <!-- <div class="CursorX-dot-type3" data-cursor-dot></div>
    <div class="CursorX-outline-type3" data-cursor-outline></div> -->

    <!-- CursorX-pic -->
    <!-- <div class="CursorX-dot-pic" data-cursor-dot></div>
    <img src="your_pic.jpg" alt="Cursor Image" 
      class="CursorX-outline-pic" data-cursor-outline> -->    

    <!-- CursorX-minecraftSword -->
    <!-- <div class="CursorX-dot-minecraftSword" data-cursor-dot></div>
    <img src="https://ik.imagekit.io/iamovi/CursorX/minecraft-sword.png?updatedAt=1700926782092" alt="Cursor Image" 
    class="CursorX-outline-minecraftSword" data-cursor-outline> -->     

    <!-- CursorX-apple -->
    <!-- <div class="CursorX-dot-apple" data-cursor-dot></div>
    <img src="https://ik.imagekit.io/iamovi/CursorX/apple.png?updatedAt=1700931158158" alt="Cursor Image" 
    class="CursorX-outline-apple" data-cursor-outline> -->       

    <button>Test ME!</button>
    
    <script src="https://cdn.jsdelivr.net/npm/cursorx@0.0.5/cursorx.js"></script>
  </body>
</html>
```

---

#### Visit [CursorX Website](https://iamovi.github.io/CursorX/) for more information.

## License

This project is licensed under the [MIT License](LICENSE).