# Switchy
---

### A tiny library for creating realistic, iOS style switches

Checkbox-backed, draggable, swipeable and clickable switch that can be used as a form element.

👉 [Demo](http://3rror404.github.io/switchy/demo)

### Features

☑️ Works with both checkbox and radio inputs.  
☑️ Works with disabled inputs.  
☑️ Swipeable with mouse or touch.  
☑️ Position text labels before or after.  
☑️ Built in colour themes.  
☑️ Built in scales (small, default, large).  

### Usage

#### 1. Add CSS to HEAD
```html
<link rel="stylesheet" href="switchy.min.css">
```

#### 2. Add JavaScript to end of BODY
```html
<script src="switchy.min.js"></script>
```

#### 3. Add HTML
```html
<label class="switchy">
    <input type="checkbox">
    Text after
</label>

<label class="switchy">
    Text before
    <input type="checkbox">
</label>

<label class="switchy">
    <input type="checkbox" checked>
    A checked switch
</label>
````

#### 4. Output

<img src="/3rror404/switchy/blob/main/demo/example-switches.png?raw=true" alt="Example switches">