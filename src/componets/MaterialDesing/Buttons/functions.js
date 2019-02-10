export function efectRipple (e) {
    e.preventDefault()

    let coords = {
        x: e.pageX,
        y: e.pageY
    }
        
    let rect = e.target.getBoundingClientRect();
    let clickPosition = {
        x: coords.x - rect.left,
        y: coords.y - rect.top
    }
        
    let ripple = document.createElement("span");
    let color = e.target.getAttribute("data-ripple") === "dark" ? "var(--secondary-dark)" : "var(--secondary-light)";
    let styles = `
        position: absolute;
        top: ${clickPosition.y - rect.width}px;
        left: ${clickPosition.x -rect.width}px;
        width: ${rect.width * 2}px;
        height: ${rect.width * 2}px;
        border-radius: 50%;
        background: ${color};
        opacity: 0.56;
        z-index: 100;
        transform: scale(0);
        transition: all 0.6s cubic-bezier(0.3, 0.0, 0.2, 1);
    `;
    ripple.style.cssText = styles;
        
        
    setTimeout(()=>{
        ripple.style.transform = 'scale(1)';
        ripple.style.opacity = '0';
    },50);
        
    e.target.appendChild(ripple);
        
    setTimeout(()=>{
        ripple.remove();
    },650);

}