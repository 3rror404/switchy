(function() {
    const switches = document.querySelectorAll(".switchy");

    let startX;
    let startY;
    let ghostNode = {};
    
    switches.forEach(labelEl => {
        const inputEl = labelEl.querySelector('input');
    
        const switchEl = document.createElement('span');
        inputEl.insertAdjacentElement('afterend', switchEl);
    
        /* 
        ## Enable radio input de-selection.
        ## Can be removed if only using checkboxes.
        */
        if (inputEl.type === 'radio') {
            const labelEl = inputEl.parentElement;
            labelEl.addEventListener('click', function(evt) {     
                evt.preventDefault();
                evt.stopPropagation();
                
                inputEl.checked = !inputEl.checked;  
            });
        }
    
        /* 
        ## Enable draggable switching.
        */
        switchEl.draggable = true;
      
        ['dragstart', 'touchstart'].forEach(function(e) {
            switchEl.addEventListener(e, onDragStart);
        });
        
        ['dragover', 'touchmove'].forEach(function(e) {
            switchEl.addEventListener(e, onDragOver);
        });
        
        ['dragend', 'touchend'].forEach(function(e) {
            switchEl.addEventListener(e, onDragEnd);
        });
    });
    
    function onDragStart(evt) {
      evt = evt || window.event;
      const x = evt.pageX,
            y = evt.pageY;
      startX = x;
      startY = y;
    
      if (evt.type == 'dragstart') {
        evt.dataTransfer.setData('text/plain', '');
        /* 
        ## Remove drag preview.
        ## Safari: node must have content (&nbsp;)
        ## otherwise dragend event will fire immediately.
        */
        ghostNode = document.createElement("div");
        ghostNode.innerHTML = "&nbsp;";
        ghostNode.style.visibility = 'hidden';
        document.body.appendChild(ghostNode);
        evt.dataTransfer.setDragImage(ghostNode, 0, 0);   
      }
    }
    
    function onDragOver(evt) {
      evt = evt || window.event;
    
      evt.preventDefault();
    }
    
    function onDragEnd(evt) { 
      // ## Remove ghostNode from DOM.
      if (evt.type == 'dragend') {
        ghostNode.parentNode.removeChild(ghostNode);

        const x = evt.pageX,
            y = evt.pageY;
    
        const checkbox = evt.currentTarget.previousElementSibling;
        
        if (checkbox.disabled) {
            return;
        }
        
        if (checkbox.checked && x <= startX - 10) {
            checkbox.checked = false;
        } else if (!checkbox.checked && x >= startX + 10) {
            checkbox.checked = true;
        } else {
            return;
        }

        const event = new Event('change');
        checkbox.dispatchEvent(event);
      }
    
      return;
    }
})();