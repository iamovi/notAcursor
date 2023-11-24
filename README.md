# CursorX Project
Give your cursor cool effects.

### Preview CursorX-type1

![CursorX-type1-preview](https://ik.imagekit.io/iamovi/CursorX/CursorX-type1-preview.gif?updatedAt=1700823392044)

### Preview CursorX-type2

![CursorX-type2-preview](https://ik.imagekit.io/iamovi/CursorX/CursorX-type2-preview.gif?updatedAt=1700823375495)

# Installation

To use CursorX >
```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cursorx@0.0.0/cursorx-style.css">
```
- Copy and paste this link on your html head tag.

And >
```bash
<script src="https://cdn.jsdelivr.net/npm/cursorx@0.0.0/cursorx.js"></script>
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
## Quick Start
```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cursorx@0.0.1/cursorx-style.css">    
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
  <!-- cursor -->
  <div class="CursorX-dot-type1" data-cursor-dot></div>
  <div class="CursorX-outline-type1" data-cursor-outline></div>

  <!-- cursor -->
  <!-- <div class="CursorX-dot-type2" data-cursor-dot></div>
  <div class="CursorX-outline-type2" data-cursor-outline></div> -->

    <button>Test ME!</button>
    
    <script src="https://cdn.jsdelivr.net/npm/cursorx@0.0.1/cursorx.js"></script>
  </body>
</html>
```

---

- Visit [CursorX Website](https://iamovi.github.io/CursorX/) for more information.

## License

This project is licensed under the [MIT License](LICENSE).